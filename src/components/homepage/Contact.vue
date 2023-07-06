<template>
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
        <div class="mx-auto">
            <h2 class="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">Let's connect</h2>
            <ul role="list" class="mx-auto w-full mt-20 grid max-w-6xl grid-cols-1 gap-x-24 gap-y-10 text-center">
                <li v-for="item in tech" :key="item.name">
                    <img class="mx-auto w-7 h-7 mb-1 mr-2 inline" :src="item.img" alt="" />
                    <a :href="item.href" class="inline mt-6 text-xl font-semibold leading-7 tracking-tight text-indigo-700">{{ item.text }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import mail_icon from '../../assets/mail_icon.png'
import linkedin_logo from '../../assets/linkedin_logo.png'
import github_logo from '../../assets/github_logo.png'
const tech = [
    { name: 'email', img: mail_icon, text: 'abijohnson98@gmail.com', href:'mailto:abijohnson98@gmail.com' },
    { name: 'github', img: github_logo, text: '@abijohnson', href:'https://github.com/abijohnson'},
    { name: 'linkedin', img: linkedin_logo, text: 'Abi Johnson', href:'https://www.linkedin.com/in/abigail-johnson-8170521ab/' },
]
</script>
