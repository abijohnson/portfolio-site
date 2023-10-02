<script setup lang="ts">
import ArticleLayout from '~/components/articles/ArticleLayout.vue'
useSeoMeta({
    title: 'What makes a good code review?',
    ogTitle: 'What makes a good code review?',
    description: 'How do we approach maintaining good code, but also helping people grow?',
    ogDescription: 'How do we approach maintaining good code, but also helping people grow?',
})
</script>

<template>
    <ArticleLayout title="What makes a good code review?" date="October 2nd, 2023">
        <div class="text-zinc-700">
            <p>
                Code reviews have been one of the areas I have learned the most from in my career. I appreciate them so much,
                and as I continue to transition into more senior-level roles, I have begun to embark on becoming good at writing
                code reviews. Not only do I want them to pass certain criteria, but I want the reviewee to actually <span class="italic">learn</span> something.
            </p>
            <p class="font-semibold text-zinc-900 text-xl pt-8 underline underline-offset-2 decoration-teal-500">
                First things first: What have I noticed actually works?
            </p>
            <p class="pt-3">
                Trust me. I get it. I've been there. It's (what seems like) the 20th iteration of this branch. The imposter
                syndrome is starting to kick in. Of course, not every time you make a pull request should you be having to do
                12 iterations/fixes, but when those times hit they hit in an irritating way. What I have noticed works well
                (and makes this process less painful) in a code review is a having a reviewer who...
                <ul class="list-disc pl-12 py-3 space-y-2">
                    <li>Offers solutions (without doing all the work for you)</li>
                    <li>Celebrates the good parts of the code</li>
                    <li>Is kind and humble</li>
                    <li>Uses the opportunity to teach</li>
                </ul>
                I was lucky enough to have a senior dev who really represented this well for me! We have to remember that yes, while we are all building a product and working a job, we are also
                real people, who need to help each other grow and learn.<span class="font-semibold"> The priority should be to build better coders,
                not just better products.</span>
            </p>
            <p class="font-semibold text-zinc-900 text-xl pt-8 underline underline-offset-2 decoration-teal-500">
                Approaching a review
            </p>
            <div class="pt-3 space-y-2">
                <p>
                    First things first: As a reviewer, you need to actually read the code. Our job is to
                    not only verify conformity (make sure the code is formatted in the standards that have been
                    established) but also check for simplicity, understandability, and accuracy. For me, this
                    can be a pitfall because if I go too fast, I will inevitably skip over something I probably shouldn't, so I will
                    definitely make sure I take my time (but not too much time, you don't want to block someone for too long).
                </p>
                <p>
                    They say you should take the code 400 lines at a time, and don't review for more than 1 hour at a time, because
                    anything past that and you start to slip into inaccuracy (which ruins the entire point of the code review).
                </p>
                <p>
                    Something I came across that could be helpful is this: Break your checks down into categories, and just focus on
                    those one at a time. So, run #1: Typos, nits, things that violate more so the code standards of the company. Run #2: Functionality,
                    code simplicity and readability, etc. Those are just examples/suggestions, and they are especially helpful for those of us
                    who have a hard time doing more than 1 thing at a time.
                </p>
                <p>
                    Remember to not allow people to bully you. You represent the standards/health of the code base, and if you get too passive
                    when your reviewee disagrees, you could end up with an absolute mess for a code base. It's important to learn balance in this
                    area.
                </p>
            </div>
            <p class="font-semibold text-zinc-900 text-xl pt-8 underline underline-offset-2 decoration-teal-500">
                Attributes of a good code review
            </p>
            <p class="pt-3">
                Good comments/code reviews should be helpful, understandable, and useful. They should have a goal, they shouldn't be a laundry list of
                unnecessary comments or irrelevant "teaching moments" (AKA: You just showing a junior how much you know).
                Here are some good examples of comments:
                <ul class="list-disc pl-12 py-3 space-y-2">
                    <li>While I understand what's going on here, I believe it could be made a bit more clear. Have you thought about ___?</li>
                    <li>What do you think about re-naming this function to ____? I find naming functions by their function helps makes them more readable.</li>
                    <li>This code has an unintended side effect of ___. <span class="italic text-zinc-400">(Psst. Make it about the code, not the people)</span></li>
                    <li>Nit: Change double quotes to single quotes</li>
                </ul>
                Another thing that helps comes from <a href="https://google.github.io/eng-practices/review/reviewer/" class="underline decoration-teal-500 font-semibold">Google</a> themselves which is this: Labels! Labeling comment
                severity can be hugely helpful to not only your developers, but the timeline of the feature. Some examples of
                labels:
                <ul class="list-disc pl-12 py-3 space-y-2">
                    <li>Nit: Remove semi-colon</li>
                    <li>Optional <span class="italic text-zinc-400">(or, Consider)</span>: You don't have to do this now, but in the future it's something to consider.</li>
                    <li>Suggestion (non-blocking): What about making this into a re-usable component to avoid repetition?</li>
                </ul>
            </p>
            <p class="font-semibold text-zinc-900 text-xl pt-8 underline underline-offset-2 decoration-teal-500">
                In conclusion (TLDR)
            </p>
            <p class="pt-3">
                Always always remember you are building better coders not just better products. Servant leadership is
                absolutely vital to any team, and while code reviews may seem trivial/like they don't mean a lot, they
                are where I personally learned the most about writing good code in my career. Keep in mind that you also
                represent the standards/health of the code base, so don't be so passive that the code base ends up being
                a complete mess!
            </p>
        </div>
    </ArticleLayout>
</template>
