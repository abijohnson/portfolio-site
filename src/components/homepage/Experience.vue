<template>
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8" id="experience">
        <div class="mx-auto">
            <h2 class="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">Experience / Projects</h2>
            <p class="text-xl pt-6  text-center text-gray-700">
                To see screenshots of my work at these companies, please
                <a href="https://www.figma.com/proto/6lvdRsscIgUJuGfZZodnKH/Abi-Johnson-Design-and-Development-Portfolio?type=design&node-id=14-61&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A61&show-proto-sidebar=1&mode=design" class="text-indigo-700 hover:text-indigo-500">click here</a>
                to visit my Figma portfolio!
            </p>
            <ul role="list" class="mx-auto w-full mt-20 grid max-w-4xl grid-cols-1 gap-y-10 text-center">
                <li v-for="item in workplaces" :key="item.name">
                    <div class="w-full border-2 border-indigo-700 text-gray-800 rounded-lg text-left p-8">
                        <p class="text-xl font-bold pb-1">
                            {{ item.title }}
                        </p>
                        <p class="text-lg font-bold pb-1">
                            {{ item.jobTitle }}
                        </p>
                        <p class="italic text-gray-500 pb-1">
                            {{ item.timeline }}
                        </p>
                        <p class="pt-4 tracking-wide">
                            {{ item.description }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const workplaces = [
    { name: 'backit', title:'BackIt' , jobTitle: 'Front-End Developer & UX/UI Designer', timeline: 'August 2022-Present', description: 'A company focused on video technologies and affiliate marketing, BackIt is the place to post your review content and make money doing it.' },
    { name: 'veedback', title: 'Veedback', jobTitle: 'Front-End Developer & UX/UI Designer', timeline: 'October 2020-August 2022', description: 'A company whose drive was to connect companies with their audience via authentic video feedback. Combating fake text based reviews with real-life video reviews!' },
]
</script>
