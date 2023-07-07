<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1" />
            <!--Desktop navigation-->
            <div class="hidden lg:flex lg:gap-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
            </div>
            <div class="flex flex-1 justify-end">
                <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Contact me
                </button>
            </div>
        </nav>
    </header>
</template>

<script setup>
const navigation = [
    { name: 'About me', href: '#about' },
    { name: 'Tech I love', href: '#tech' },
    { name: 'Experience/Projects', href: '#experience' },
]
</script>