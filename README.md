<div align="center">

# 土豆公主和烤冷面

> 欢迎回家～

[![最后更新](https://img.shields.io/badge/最后更新-2026--08--22-ff69b4?style=flat-square)](https://github.com/Potato-Humburger/Our-Digital-Cabin)
[![相伴时光](https://img.shields.io/badge/相伴-自%202025--07--18-ff1493?style=flat-square)](.)
[![状态](https://img.shields.io/badge/状态-💚%20幸福%20%26%20健康-32cd32?style=flat-square)](.)
[![爱心指数](https://img.shields.io/badge/爱心-∞-ff69b4?style=flat-square)](.)

---

</div>


## 📊 信息面板

### 快速数据

<!-- cabin-stats:start -->
| 🎯 | 你的信息 |
|---|---|
| **相伴天数** | 400 天 |
| **当前位置** | ajx 在上海，xzh 在香港 |
| **当前心情** | 幸福：今天是我们在一起的第四百天！ |
| **下一个里程碑** | 🎉 2026-09-01：相伴 411 天 |
| **距离** | 📏 暂时异地 |
<!-- cabin-stats:end -->

### 最近活动

- 📝 [最新情书](https://github.com/Potato-Humburger/Our-Digital-Cabin/issues)
- 🎞️ [回忆库](./memories/) 
- 📅 [即将到来的日期](./dates/calendar.md)
- 🎬 [观影清单](./projects/watchlist/)

---

## 📁 仓库结构

```
Our-Digital-Cabin/
├── 📄 README.md                    # 本文件
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── daily-thoughts.md       # 每日记录和思考
│   │   ├── love-letter.md          # 虚拟情书
│   │   ├── date-idea.md            # 未来约会计划
│   │   └── memory.md               # 珍贵时刻
│   └── workflows/
│       ├── daily-greeting.yml      # 自动每日问候（可选）
│       ├── anniversary-reminder.yml # 特殊日期提醒
│       └── quote-generator.yml     # 每日随机爱情语录
│
├── 💾 data/
│   ├── metrics.json                # 关系统计（手动更新）
│   ├── status.json                 # 当前心情和位置
│   └── config.json                 # 自定义设置
│
├── 📸 memories/
│   ├── 2026/
│   │   ├── 01-january/
│   │   ├── 02-february/
│   │   └── ...
│   ├── milestones.json             # 整理的里程碑
│   └── timeline.md                 # 共享时间轴
│
├── 📅 dates/
│   ├── calendar.md                 # 重要日期
│   ├── anniversaries.json          # 纪念日和生日
│   └── future-plans.md             # 共同梦想和目标
│
├── 🎮 projects/
│   ├── watchlist/
│   │   ├── movies.json
│   │   ├── shows.json
│   │   └── README.md
│   ├── budget-tracker/             # 共享支出
│   ├── bucket-list/                # 想去的地方和要做的事
│   └── README.md
│
├── 💌 discussions/
│   └── README.md                   # 置顶讨论分类
│
├── 📚 docs/
│   ├── commit-convention.md        # 我们的 Gitmoji 指南
│   ├── contribution-guide.md       # 如何使用此仓库
│   └── faq.md                      # 常见问题
│
└── 🔐 .gitignore                   # 保护隐私
```

---

## 💬 如何使用这个空间

### 📝 分享你的想法 - 每日记录

使用 **[Issues](https://github.com/Potato-Humburger/Our-Digital-Cabin/issues)** 来分享：
- **每日想法** 💭 (今天在想什么)
- **情书** 💌 (发自内心的信息)
- **约会想法** 🎯 (我们一起应该做的事)
- **回忆** 📸 (特殊时刻的照片和故事)

**如何创建记录：**
1. 前往 [Issues → 新建 Issue](https://github.com/Potato-Humburger/Our-Digital-Cabin/issues/new)
2. 选择模板（每日想法、情书等）
3. 填写你的想法
4. 添加标签：`💚-心对心`、`📸-回忆`、`🎯-梦想清单` 等
5. 提交！

### 🎞️ 回忆库 - 我们的故事

所有回忆都按年月组织在 [`memories/`](./memories/) 文件夹中。添加照片、写故事，记录我们的共同旅程。

### 📅 重要日期

查看 [`dates/calendar.md`](./dates/calendar.md)：
- 🎂 生日和纪念日
- 🎉 我们庆祝过的特殊日子
- 💭 我们计划的未来日期

### 🎮 小项目

在 [`projects/`](./projects/) 文件夹中，我们可以一起构建：
- 🎬 **观影清单** - 追踪我们想看的电影
- 💰 **预算追踪器** - 管理共享支出
- ✈️ **梦想清单** - 想去的地方和经历

### 🗣️ 讨论

使用 [GitHub 讨论](https://github.com/Potato-Humburger/Our-Digital-Cabin/discussions) 进行：
- 小组对话（比 Issues 更随意）
- 分享照片和更新
- 电影评论和建议
- 每周关系检查

---

## 🤖 自动化和工作流

本仓库包含 GitHub Actions 的特殊功能：

### ✨ 每日问候（可选）
每天早上 7 点自动创建"早上好"提醒。

### 🎂 纪念日提醒
当特殊日期即将到来时获得通知。

### 💘 每日语录生成器
每天发布一条随机爱情语录或个人提醒。

### 🔐 虚拟时间胶囊
锁定一条记录，仅在指定的未来日期可见。

*要启用工作流，请检查 `.github/workflows/` 并根据需要配置。*

---

## 💻 提交信息规范

我们使用 **Gitmoji** 让历史记录更有趣和有意义：

| 表情 | 用途 | 示例 |
|------|-------|---------|
| 💝 | 添加回忆/里程碑 | `💝 添加 2026-08-20 周年纪念照` |
| 📸 | 照片上传 | `📸 上传海滩旅行照` |
| 📝 | 文档更新 | `📝 更新约会想法` |
| 🐛 | 错误修复 | `🐛 修复回忆时间线排序` |
| ✨ | 新功能 | `✨ 添加观影清单追踪器` |
| 📅 | 日历/日期 | `📅 添加秋季旅行计划日期` |
| 💬 | 消息/更新 | `💬 更新当前心情` |

详见 [`docs/commit-convention.md`](./docs/commit-convention.md) 获得完整指南。

---

## 🛡️ 隐私和设置

此仓库默认为**私密**。只有你们两个可以看到它。要自定义：

1. 编辑 `data/config.json` 更改主题和设置
2. 更新 `data/metrics.json` 添加你们的关系时间线
3. 配置 `.github/workflows/` 按你们的偏好
4. 更新 `data/status.json` 保持彼此了解

---

## 📚 导航指南

- **想分享什么？** → 前往 [Issues](https://github.com/Potato-Humburger/Our-Digital-Cabin/issues)
- **想讨论？** → 前往 [讨论](https://github.com/Potato-Humburger/Our-Digital-Cabin/discussions)
- **想回忆？** → 查看 [`memories/`](./memories/)
- **一起计划？** → 检查 [`projects/`](./projects/)
- **未来日期？** → 查看 [`dates/`](./dates/)

---

## 💝 核心所在

这个仓库代表：
- ✨ 我们作为一对的独特性
- 📖 我们的共同故事
- 🌟 我们的梦想和回忆
- 💕 我们彼此的承诺

这里的每一个提交、每一条 Issue 和每一个文件都见证了我们在数字时代为彼此关系的培养所付出的时间。

---

<div align="center">

**由我们为我们，用 💖 制作**

*最后更新：2026-08-22*

</div>