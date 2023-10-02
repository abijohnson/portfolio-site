<script setup>
const props = defineProps({
    title: String,
    link: String,
    brief_desc: String,
    date: String
})
</script>

<template>
    <div class="md:grid md:grid-cols-4 md:items-baseline">
        <div class="group relative flex flex-col items-start md:col-span-3">
            <p class="text-base font-semibold tracking-tight text-zinc-800">
                <NuxtLink :to="link">{{ title }}</NuxtLink>
            </p>
            <div class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 md:hidden">
                <span class="absolute inset-y-0 left-0 flex items-center " aria-hidden="true">
                    <span class="h-4 w-0.5 rounded-full bg-zinc-200" />
                </span>
                {{ date }}
            </div>
            <p class="relative z-10 mt-2 text-sm text-zinc-600 leading-6">
                {{ brief_desc }}
            </p>
            <NuxtLink
                aria-hidden="true"
                :to="link"
                class=" z-10 mt-4 inline-flex items-center text-sm font-medium text-teal-500"
            >
                Read article ›
            </NuxtLink>
        </div>
        <div class="relative z-10 order-first mb-3 items-center text-sm text-zinc-400 mt-1 hidden md:block">
            <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                <span class="h-4 w-0.5 rounded-full" />
            </span>
            {{ date }}
        </div>
    </div>
</template>
