<script setup>
import NavItem from "@/components/TheNavBar/NavItems/DesktopNavItem.vue";
</script>

<template>
    <nav class="flex">
        <ul class="flex mx-auto rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
            <NavItem link="/" :is-active="$route.name === 'index'">Home</NavItem>
            <NavItem link="/about" :is-active="$route.name === 'about'">About</NavItem>
            <NavItem link="/experience-and-projects" :is-active="$route.name === 'experience-and-projects'">Experience & Projects</NavItem>
            <NavItem link="/articles" :is-active="$route.name === 'articles'">Articles</NavItem>
        </ul>
    </nav>
</template>
