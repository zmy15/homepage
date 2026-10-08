# Cloudflare 部署配置备忘

> 本文档说明本项目部署到 Cloudflare 时的确切配置。
> Cloudflare **不会读取本文件** —— 它只是把关键参数记录在仓库里，避免遗忘或填错。

---

## 部署方式：Workers（静态资源）

在 Cloudflare 控制台 **Workers & Pages → Create → Connect to Git** 中填写：

| 字段 | 值 |
|---|---|
| Repository | `zmy15/homepage` |
| **Project name** | `zmy15` |
| **Build command** | `pnpm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Preview command** | `npx wrangler preview` |
| Enable Preview builds | 开（可选） |

> ⚠️ **Project name 决定访问域名**：填 `zmy15` → 得到 `zmy15.pages.dev`。
> 若改名，Profile README 中的链接也需要同步更新。

---

## 关键点：输出目录不在界面里配置

新版 Workers 流程**没有「构建输出目录」输入框**。输出目录由仓库根目录的
[`wrangler.jsonc`](../wrangler.jsonc) 决定：

```jsonc
{
  "name": "zmy15",
  "compatibility_date": "2026-10-08",
  "assets": {
    "directory": "./dist",              // ← 构建产物目录
    "not_found_handling": "404-page"    // ← 使用 dist/404.html 作为自定义 404
  }
}
```

### 两个字段的说明

- **`assets.directory`** —— Workers 静态资源用这个字段（**不是** Pages 的
  `pages_build_output_dir`，后者在 Workers 流程中会被忽略，导致部署出一个空站点）。
- **`not_found_handling: "404-page"`** —— 未匹配的请求返回 `dist/404.html` 与 404 状态码。
  本项目是单页站（锚点导航，非客户端路由），所以**不用**
  `single-page-application`，否则真实 404 会被掩盖成 200。

---

## 本地验证

部署前可用 wrangler 在本地跑一遍，行为和线上一致：

```bash
pnpm build
npx wrangler dev          # http://127.0.0.1:8788
```

已验证的行为：

| 请求 | 结果 |
|---|---|
| `/` | `200`，返回应用外壳 |
| `/assets/*.js` `.css` | `200`，MIME 类型正确 |
| `/nonexistent` | `404`，返回自定义 404 页面 |

---

## 手动部署（不用 Git 集成）

```bash
pnpm build
npx wrangler deploy
```

## 自定义域名

Workers 项目页面 → **Settings → Domains & Routes → Add → Custom domain**。
若 DNS 已在 Cloudflare，CNAME 会自动创建。

---

## 相关文档

- [Static Assets 配置](https://developers.cloudflare.com/workers/static-assets/binding/)
- [自定义 404 页面](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)
- [React + Vite 部署指南](https://developers.cloudflare.com/workers/framework-guides/web-apps/react/)