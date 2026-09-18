---
layout: home
---

<script setup>
import { data as posts } from './posts/posts.data.ts'

// 首页只取最新五篇；列表页与归档页用的是同一份数据源
const latest = posts.slice(0, 5)
</script>

## 最新文章

<p v-if="!latest.length">暂无文章。</p>

<ul v-else class="post-list">
  <li v-for="post in latest" :key="post.url" class="post-item">
    <a class="post-entry" :href="post.url">
      <time v-if="post.date" class="post-date">{{ post.date }}</time>
      <span class="post-main">
        <span class="post-title">{{ post.title }}</span>
        <span v-if="post.description" class="post-desc">{{ post.description }}</span>
      </span>
    </a>
  </li>
</ul>

<p><a href="/archive">按时间翻全部 →</a></p>
