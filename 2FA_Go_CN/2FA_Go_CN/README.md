# 2FA 代码生成器

这是一个使用 Go 构建的简单的 2FA（双因素身份验证）代码生成器。

## 运行环境

- Go

## 安装

1. 克隆存储库或下载项目文件。
2. 导航到项目目录。

```bash
cd 2FA_Go_CN
```

## 运行项目

1. 启动服务器。

```bash
go run main.go
```

2. 打开浏览器并导航到 `http://localhost:8080`。

## 项目结构

```
2FA_Go_CN/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── main.go
```

## 说明

- `public/index.html`：包含输入密钥和生成 OTP 表单的主要 HTML 文件。
- `public/script.js`：处理 OTP 生成和剪贴板复制功能的 JavaScript 文件。
- `public/style.css`：用于样式化 HTML 页面的 CSS 文件。
- `main.go`：用于提供静态文件并启动服务器的 Go 服务器文件。
