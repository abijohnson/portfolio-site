<template>
    <div class="relative px-4 pt-40 pb-32 sm:px-8 lg:px-6 ">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <header class="max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                    Writing on things I learn in the software and leadership universe
                </h1>
                <p class="mt-6 text-base text-zinc-600">
                    I'm always trying to learn new things, so come along with me as
                    I try to grow as a developer and a leader through research and writing.
                </p>
            </header>
            <div class="mt-20 md:border-l md:border-zinc-100 md:pl-6">
                <div class="flex max-w-3xl flex-col space-y-16">
                    <ArticleCard v-for="article in articles" :date="article.date" :brief_desc="article.brief_desc" :title="article.title" :link="article.link" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ArticleCard from "@/components/articles/ArticleCard.vue";
import articles from '../data-files/articles_list.json'
</script>