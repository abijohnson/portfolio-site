<template>
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8" id="tech">
        <div class="mx-auto">
            <h2 class="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">Tech I love</h2>
            <p class="text-xl pt-4 font-medium text-center tracking-tight text-indigo-700">
                (AKA: Tech I've been using)
            </p>
            <ul role="list" class="mx-auto w-full mt-20 grid max-w-6xl grid-cols-1 gap-x-24 gap-y-24 text-center md:grid-cols-3">
                <li v-for="item in tech" :key="item.name">
                    <img class="mx-auto w-24 h-24" :src="item.img" alt="" />
                    <h3 class="mt-6 text-lg font-bold leading-7 tracking-tight text-gray-900 uppercase">{{ item.title }}</h3>
                    <p class="text-base leading-6 text-gray-800">{{ item.experienceInYears }} years</p>
                    <p class="text-base leading-6 text-gray-600 mt-5">{{ item.sub }}</p>
                </li>
            </ul>
            <p class="max-w-6xl mx-auto pt-20 text-gray-700">
                HONORABLE MENTIONS: Nuxt JS (3 years), Javascript (5 years), Adobe Suite (3 years)
            </p>
        </div>
    </div>
</template>

<script setup>
import tailwind_logo from '../../assets/Tailwind_logo.png'
import vue_logo from '../../assets/vue_logo.png'
import figma_logo from '../../assets/figma_logo.png'
const tech = [
    { name: 'tailwindcss', img: tailwind_logo, experienceInYears: '3', title: 'TailwindCss', sub: 'TailwindCSS has become a staple of mine in my development process. (This site is built with TailwindCSS)' },
    { name: 'vuejs', img: vue_logo, experienceInYears: '3', title: 'Vue JS', sub: 'Although Vue has my heart, Vue and React are very similar. I’ll work with React if that’s what you use!' },
    { name: 'figma', img: figma_logo, experienceInYears: '3', title: 'Figma', sub: 'Additionally, I have some Adobe Suite experience too. Figma is the primary tool I use for UX/UI work.' },
]
</script>
