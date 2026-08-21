const DATA_ROOT = './';

const readJson = (path) => fetch(`${DATA_ROOT}${path}`).then((response) => {
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  return response.json();
});

function getTodayInShanghai() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
}

function getDaysTogether(startDate) {
  const start = Date.parse(`${startDate}T00:00:00Z`);
  const today = Date.parse(`${getTodayInShanghai()}T00:00:00Z`);
  return Math.floor((today - start) / 86400000);
}

function formatDate(date) {
  const parts = date.split('-');
  return parts.length === 2 ? `${parts[0]}.${parts[1]}` : `${parts[0]}.${parts[1]}.${parts[2]}`;
}

function renderTimeline(anniversaries, metrics) {
  const milestones = metrics.relationship.milestones.map((item) => ({
    date: item.date, event: item.event, description: item.description, emoji: item.event === 'homeless' ? '💐' : '💕'
  }));
  const birthdays = anniversaries.filter((item) => item.event.includes('生日')).map((item) => ({
    date: item.date, sortDate: `2026-${item.date}`, event: item.event, description: item.description, emoji: item.emoji
  }));
  const items = [...milestones, ...birthdays].sort((a, b) => (a.sortDate || a.date).localeCompare(b.sortDate || b.date));
  document.querySelector('#timeline').innerHTML = items.map((item, index) => `
    <article class="timeline-item ${index === items.length - 1 ? 'current' : ''}">
      <div class="timeline-date">${formatDate(item.date)}</div>
      <div class="timeline-icon">${item.emoji}</div>
      <h3 class="timeline-title">${item.event}</h3>
      <p class="timeline-description">${item.description}</p>
    </article>`).join('');
}

function renderMovies(movies) {
  document.querySelector('#movie-count').textContent = `${movies.length} films`;
  document.querySelector('#movies').innerHTML = movies.map((movie, index) => `
    <article class="movie-card">
      <div><span class="movie-number">0${index + 1} / ${movie.type}</span><h3>${movie.title}</h3><p>${movie.notes}</p></div>
      <div class="movie-meta"><span>${movie.year} · ${movie.status}</span><b>${'★'.repeat(movie.rating)}</b></div>
    </article>`).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[character]));
}

function renderSecretNotes(notes) {
  const list = document.querySelector('#secret-notes');
  const count = document.querySelector('#note-count');
  if (!list || !count) return;
  count.textContent = `${notes.length} notes`;
  if (!notes.length) return;
  list.innerHTML = notes.map((note, index) => `
    <article class="note-bubble ${index % 2 ? 'note-bubble-alt' : ''}">
      <div class="note-meta"><strong>${escapeHtml(note.author)}</strong><time>${escapeHtml(note.time)}</time></div>
      <p>${escapeHtml(note.message).replace(/\n/g, '<br />')}</p>
      <a href="${escapeHtml(note.url)}" target="_blank" rel="noreferrer">在 GitHub 查看原文 ↗</a>
    </article>`).join('');
}

function setupSecretNote() {
  const form = document.querySelector('#secret-note-form');
  const dateLabel = document.querySelector('#note-date');
  const sentMessage = document.querySelector('#note-sent');
  if (!dateLabel || !form) return;

  dateLabel.textContent = getTodayInShanghai().replaceAll('-', '.');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const author = new FormData(form).get('author').trim();
    const message = new FormData(form).get('message').trim();
    const date = getTodayInShanghai();
    const title = `[${date}] message from ${author}`;
    const body = `## 🤫 悄悄话\n\n**来自：** ${author}\n**时间：** ${date}（北京时间）\n\n${message}\n\n---\n由数字小屋发送。`;
    const issueUrl = new URL('https://github.com/Potato-Humburger/Our-Digital-Cabin/issues/new');
    issueUrl.searchParams.set('title', title);
    issueUrl.searchParams.set('body', body);
    issueUrl.searchParams.set('labels', '💚-心对心');
    window.open(issueUrl.toString(), '_blank', 'noopener');
    if (sentMessage) sentMessage.textContent = '已发送';
  });
}

function setupDailyStatus(status) {
  const form = document.querySelector('#daily-status-form');
  const editor = document.querySelector('#status-editor');
  if (!form) return;
  const highlights = status.daily_highlights || { ajx: status.today_highlight || '', xzh: '' };
  const fields = { highlight_ajx: highlights.ajx, highlight_xzh: highlights.xzh };
  Object.entries(fields).forEach(([name, value]) => {
    const input = form.elements[name];
    if (input) input.value = value || '';
  });
  if (editor && sessionStorage.getItem('daily-status-submitted') === 'true') editor.hidden = true;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const payload = {
      last_updated: `${getTodayInShanghai()} 00:00:00`,
      daily_highlights: { ajx: values.highlight_ajx, xzh: values.highlight_xzh }
    };
    const issueUrl = new URL('https://github.com/Potato-Humburger/Our-Digital-Cabin/issues/new');
    issueUrl.searchParams.set('title', `📝 [daily-status] ${getTodayInShanghai()}`);
    issueUrl.searchParams.set('body', `<!-- DAILY_STATUS_JSON\n${JSON.stringify(payload, null, 2)}\nDAILY_STATUS_JSON -->\n\n每日状态更新。`);
    issueUrl.searchParams.set('labels', '📝-想法');
    window.open(issueUrl.toString(), '_blank', 'noopener');
    document.querySelector('#status-sent').textContent = '已生成发布页面';
    document.querySelector('#highlight-display-ajx').textContent = values.highlight_ajx || '暂无记录';
    document.querySelector('#highlight-display-xzh').textContent = values.highlight_xzh || '暂无记录';
    sessionStorage.setItem('daily-status-submitted', 'true');
    if (editor) editor.hidden = true;
  });
  document.querySelector('#highlight-display-ajx').textContent = highlights.ajx || '暂无记录';
  document.querySelector('#highlight-display-xzh').textContent = highlights.xzh || '暂无记录';
}

async function init() {
  try {
    const [metrics, status, anniversaries, watchlist, secretNotes] = await Promise.all([
      readJson('data/metrics.json'), readJson('data/status.json'), readJson('dates/anniversaries.json'), readJson('projects/watchlist/movies.json'), readJson('data/secret-notes.json')
    ]);
    document.querySelector('#days-together').textContent = getDaysTogether(metrics.relationship.start_date);
    document.querySelector('#mood').textContent = status.current_mood;
    document.querySelector('#mood-description').textContent = status.mood_description;
    renderTimeline(anniversaries.anniversaries, metrics);
    renderMovies(watchlist.movies);
    renderSecretNotes(secretNotes.notes);
    setupSecretNote();
    setupDailyStatus(status);
    document.querySelector('#updated').textContent = `DATA SYNCED ${getTodayInShanghai().replaceAll('-', '.')}`;
  } catch (error) {
    document.querySelector('#updated').textContent = 'DATA SYNC UNAVAILABLE';
    console.error(error);
  }
}

init();