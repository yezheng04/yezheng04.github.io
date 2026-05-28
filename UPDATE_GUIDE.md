# 网站更新指南

本文档记录如何修改和更新个人主页 `https://yezheng04.github.io`。

---

## 项目位置

```
F:\桌面\个人网页\portfolio-site\
```

---

## 修改内容 → 部署上线的流程

每次更新只需要 **3 步**：

### 第 1 步：编辑文件

打开 `portfolio-site` 文件夹，修改对应的组件文件：

| 要改的内容 | 文件路径 |
|-----------|---------|
| 姓名、头像、简介、联系方式 | `app/components/Header.tsx` |
| 新闻动态 | `app/components/News.tsx` |
| 研究方向 | `app/components/Research.tsx` |
| 论文列表（含缩略图、链接、奖项） | `app/components/Publications.tsx` |
| 荣誉奖项 | `app/components/Awards.tsx` |
| 教育与经历时间轴 | `app/components/Timeline.tsx` |

> 提示：所有 `[方括号内容]` 都是占位符，替换成你自己的真实信息即可。

---

### 第 2 步：本地预览（可选但推荐）

在终端运行：

```bash
cd "F:\桌面\个人网页\portfolio-site"
npm run build
npx serve out
```

然后浏览器打开 `http://localhost:3000` 查看效果。确认没问题后再推送。

---

### 第 3 步：推送到 GitHub，自动部署

```bash
cd "F:\桌面\个人网页\portfolio-site"
git add .
git commit -m "update content"
git push
```

推送完成后，GitHub Actions 会自动构建并发布网站。等待 **2-3 分钟**，刷新 `https://yezheng04.github.io` 即可看到更新。

---

## 常用 Git 命令速查

| 命令 | 作用 |
|------|------|
| `git status` | 查看哪些文件被修改了 |
| `git add .` | 把所有修改加入暂存区 |
| `git commit -m "描述"` | 提交修改（引号里写这次改了什么） |
| `git push` | 推送到 GitHub |
| `git log --oneline` | 查看提交历史 |

---

## 技术栈

- **框架**：Next.js 16 + React + TypeScript
- **样式**：Tailwind CSS
- **公式渲染**：KaTeX（已集成，在 `app/layout.tsx` 中引入）
- **部署**：GitHub Pages（通过 GitHub Actions 自动构建）
- **代码仓库**：https://github.com/yezheng04/yezheng04.github.io

---

## 注意事项

1. **不要删除 `public/photo.jpg`**，这是你的头像文件。如果要换头像，用新图片覆盖它，保持文件名不变。
2. **论文缩略图**：`Publications.tsx` 里的 `thumbnail` 可以换成每张论文自己的预览图，把图片放到 `public/` 文件夹，然后写 `"/图片名.jpg"`。
3. **时间轴年份**：修改 `Timeline.tsx` 里的 `minYear` 和 `maxYear`，以及 `education` / `experience` 数组。
4. **数学公式**：如果需要在内容里写 LaTeX（如 `$\mathcal{D(R,O)}$`），请安装 KaTeX 的 React 组件或告知助手帮你添加。

---

## 遇到问题？

- 网站 404：去仓库 **Settings -> Pages**，确认 Source 是 **GitHub Actions**。
- Actions 构建失败：去仓库 **Actions** 标签页查看报错日志。
- 样式不对：确认本地运行 `npm run build` 没有报错。
