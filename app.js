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
  const [year, month, day] = date.split('-');
  return `${year}.${month}.${day}`;
}

function renderTimeline(anniversaries, metrics) {
  const milestones = metrics.relationship.milestones.map((item) => ({
    date: item.date, event: item.event, description: item.description, emoji: item.event === 'homeless' ? '💐' : '💕'
  }));
  const birthdays = anniversaries.filter((item) => item.event.includes('生日')).map((item) => ({
    date: `2026-${item.date}`, event: item.event, description: item.description, emoji: item.emoji
  }));
  const items = [...milestones, ...birthdays].sort((a, b) => a.date.localeCompare(b.date));
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

async function init() {
  try {
    const [metrics, status, anniversaries, watchlist] = await Promise.all([
      readJson('data/metrics.json'), readJson('data/status.json'), readJson('dates/anniversaries.json'), readJson('projects/watchlist/movies.json')
    ]);
    document.querySelector('#days-together').textContent = getDaysTogether(metrics.relationship.start_date);
    document.querySelector('#mood').textContent = status.current_mood;
    document.querySelector('#mood-description').textContent = status.mood_description;
    renderTimeline(anniversaries.anniversaries, metrics);
    renderMovies(watchlist.movies);
    document.querySelector('#updated').textContent = `DATA SYNCED ${getTodayInShanghai().replaceAll('-', '.')}`;
  } catch (error) {
    document.querySelector('#updated').textContent = 'DATA SYNC UNAVAILABLE';
    console.error(error);
  }
}

init();