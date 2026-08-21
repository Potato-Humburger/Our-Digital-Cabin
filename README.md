# Our Digital Cabin

一个基于 GitHub 的个人共享网页项目。项目使用静态网页展示关系信息、重要日期、旅行清单、观影清单和悄悄话记录，并使用 GitHub Issues 与 GitHub Actions 完成内容提交和数据同步。

## 功能概览

- GitHub Pages 静态网页
- 相伴天数自动计算
- 重要日期和生日时间线
- 旅行清单与本地旅行图片
- 观影清单
- 悄悄话提交和记录展示
- 网页端 AJX/XZH 今日亮点编辑
- GitHub Actions 自动同步 JSON 数据

## 快速开始

### 1. 自定义你的仓库
- [ ] 在 `data/metrics.json` 中添加你们的实际开始日期
- [ ] 用你的时区和初始心情更新 `data/status.json`
- [ ] 用你最喜欢的颜色/表情个性化 `data/config.json`

### 2. 设置特殊日期
- [ ] 编辑 `dates/anniversaries.json` 添加生日和重要日期
- [ ] 用对你们重要的日期更新 `dates/calendar.md`

### 3. 启用自动化（可选）
- [ ] 查看 `.github/workflows/` 中的可用自动化
- [ ] 在**设置 → Actions → General** 中启用工作流

### 4. 创建你的第一条回忆
- [ ] 前往 [Issues](https://github.com/Potato-Humburger/Our-Digital-Cabin/issues)
- [ ] 选择"📸 回忆"模板

### 5. 添加娱乐内容
- [ ] 编辑 `projects/watchlist/movies.json`
- [ ] 添加你们想一起看的电影或节目

### 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173/index.html
```

### GitHub Pages 部署

1. 打开仓库的 `Settings > Pages`。
2. 在 `Build and deployment > Source` 中选择 `GitHub Actions`。
3. 运行 `.github/workflows/pages.yml`，或向 `main` 分支推送一次提交。
4. 部署完成后，通过仓库的 Pages 地址访问网页。

### 编辑权限

公开仓库中的网页任何人都可以访问，但只有仓主、仓库成员或被授予写权限的协作者提交的状态 Issue 和悄悄话 Issue 才会被自动同步。

要允许另一位使用者编辑：

1. 打开仓库 `Settings > Collaborators`。
2. 邀请对方加入仓库并授予写权限。
3. 对方接受邀请后，即可使用网页编辑台提交内容。

未被授权的用户仍可能看到公开网页或创建 Issue，但其内容不会写入 JSON 文件。

## 网页使用

### 发送悄悄话

1. 在网页的“发送一段悄悄话”区域填写昵称和内容。
2. 点击“打开发布页面”。
3. 在 GitHub Issue 页面确认内容并点击发布。
4. `sync-secret-notes.yml` 会将已发布的悄悄话同步到 `data/secret-notes.json`。
5. 网页重新加载后，悄悄话会显示在“悄悄话记录”区域。

### 更新今日亮点

1. 在网页的“更新今日状态”区域分别填写 AJX 和 XZH 的今日亮点。
2. 点击“保存今日状态”。
3. 在 GitHub Issue 页面确认并发布。
4. `sync-daily-status.yml` 会将内容写入 `data/status.json`。

网页编辑台只更新 `daily_highlights`；`status.json` 中的其他字段需要直接编辑文件维护。

## 数据文件

| 文件 | 用途 |
|---|---|
| `data/metrics.json` | 关系开始日期、相伴天数和里程碑 |
| `data/status.json` | 当前状态、位置和 AJX/XZH 今日亮点 |
| `data/config.json` | 项目开关和隐私配置 |
| `data/secret-notes.json` | 已同步的悄悄话记录 |
| `dates/anniversaries.json` | 生日和纪念日数据 |
| `dates/calendar.md` | 可读的日期日历 |
| `dates/future-plans.md` | 旅行和未来计划 |
| `projects/watchlist/movies.json` | 观影清单 |

相伴天数由网页根据 `data/metrics.json` 中的 `start_date` 实时计算，不需要手动维护。

## 图片资源

- `images/our-photo.jpg`：首页合影
- `images/travel.jpg`：旅行清单区域图片

新增图片可放入 `images/`，并在网页或 CSS 中使用相对路径引用。

## GitHub Actions

当前使用的工作流如下：

| 工作流 | 用途 |
|---|---|
| `pages.yml` | 部署 GitHub Pages 网页 |
| `sync-daily-status.yml` | 将网页提交的今日亮点同步到 `data/status.json` |
| `sync-secret-notes.yml` | 将悄悄话 Issue 同步到 `data/secret-notes.json` |

## 项目结构

```text
Our-Digital-Cabin/
├── index.html
├── styles.css
├── app.js
├── data/
├── dates/
├── images/
├── memories/
├── projects/watchlist/
├── .github/ISSUE_TEMPLATE/
├── .github/workflows/
└── docs/
```

## 隐私说明

仓库一旦公开，仓库文件、图片、Issues、悄悄话记录和提交历史都可能被任何人访问。公开仓库前，请确认其中不包含不希望公开的个人信息。

不要在仓库、Issue 或网页代码中保存密码、访问令牌、私钥或其他敏感凭据。

## 文档

- [常见问题](docs/faq.md)
- [贡献指南](docs/contribution-guide.md)
- [提交信息规范](docs/commit-convention.md)