<script setup>
const props = defineProps({
    title: String,
    date: String
})
</script>

<template>
    <div class="relative px-4 mx-auto max-w-2xl sm:px-8 lg:px-12 lg:max-w-5xl">
        <div class="py-28 lg:py-32">
            <div class="xl:relative">
                <div class="mx-auto max-w-2xl">
                    <article>
                        <header class="flex flex-col">
                            <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                                {{ title }}
                            </h1>
                            <div
                                class="order-first flex items-center text-base text-zinc-400"
                            >
                                <span class="h-4 w-0.5 rounded-full bg-zinc-200" />
                                <span class="ml-3">{{ date }}</span>
                            </div>
                        </header>
                        <div class="mt-8">
                            <slot />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>
