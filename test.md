---
layout: post
title: "本地部署DeepSeek"
subtitle: "将DeepSeek部署至本地，无需网络即可使用"
date: 2025-11-15
author: "CE"
categories: [技术架构]
tags: [AI，DeepSeek，部署]
---

## 现代静态站点架构解析

静态站点生成器正在改变Web开发的方式，以下是核心工作流程：

## Jekyll 代码示例

<!-- 手动包裹代码块以适配你的样式 -->
<div class="code-container">
    <div class="code-header">
        <span class="code-language">YAML</span>
        <button class="copy-btn" onclick="copyCode(this)">复制</button>
    </div>
    <div class="code-block">
# _config.yml 配置示例
title: "我的技术博客"
baseurl: "/blog"
url: "https://yourusername.github.io"
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag
    </div>
</div>

## 构建流程

静态站点的核心优势在于预渲染：

<div class="code-container">
    <div class="code-header">
        <span class="code-language">Bash</span>
        <button class="copy-btn" onclick="copyCode(this)">复制</button>
    </div>
    <div class="code-block">
# 本地构建命令
bundle exec jekyll build

# 本地预览
bundle exec jekyll serve --watch
    </div>
</div>

## 总结

通过这种架构，我们可以实现：
1. 极致的加载速度
2. 简化的部署流程
3. 增强的安全性
