<script setup>
import ArticleItem from '@/components/homepage/ArticleItem.vue'
import articles from '../../data-files/articles_list.json'
</script>

<template>
    <div class="flex flex-col gap-16 lg:max-w-2xl">
        <ArticleItem v-for="article in articles" :id="article.title"  :date="article.date" :link="article.link" :title="article.title" :brief_desc="article.brief_desc" />
    </div>
</template>

<style scoped>

</style>