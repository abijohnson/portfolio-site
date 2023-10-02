<script setup>
import linkedInIcon from '../icons/IconLinkedIn.vue'
import githubIcon from '../icons/IconGitHub.vue'
import { EnvelopeIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    link: String,
    icon: String
})

const icons = {
    linkedIn: linkedInIcon,
    github: githubIcon,
    email: EnvelopeIcon
}

</script>

<template>
    <li class="flex">
        <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
        >
            <component :is="icons[icon]" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            <span class="ml-4 mt-0.5">
                <slot />
            </span>
        </a>
    </li>
</template>
