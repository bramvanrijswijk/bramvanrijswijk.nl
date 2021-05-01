<template>
    <div id="app" class="w-screen h-screen flex items-center justify-center">
        <div class="inline-flex flex-col items-center justify-center container">
            <div class="flex flex-col space-y-2 mt-6">
                <div class="flex items-center space-x-4 group">
                    <a href="mailto:mike@makeking.nl" class="flex items-center space-x-4 ">
                        <svg class="w-10 border-2 border-gray-800 rounded group-hover:text-white group-hover:bg-gray-800 transition duration-200 ease-in-out" style="padding: 5px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="font-semibold text-lg group-hover:underline text-black">mike@makeking.nl</span>
                    </a>
                </div>
                <div class="flex items-center space-x-4 group">
                    <a href="tel:0617799524" class="flex items-center space-x-4">
                        <svg class="w-10 border-2 border-gray-800 rounded group-hover:text-white group-hover:bg-gray-800 transition duration-200 ease-in-out" style="padding: 5px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span class="font-semibold text-lg group-hover:underline text-black" style="padding-top: 3px;">06 - 17 79 95 24</span>
                    </a>
                </div>
                <div class="flex items-center space-x-4 group">
                    <a href="https://www.instagram.com/makeking_interior" target="_blank" class="flex items-center space-x-4">
                        <svg class="w-10 border-2 border-gray-800 rounded group-hover:text-white group-hover:bg-gray-800 transition duration-200 ease-in-out" style="padding: 5px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                        <span class="font-semibold text-lg group-hover:underline text-black" style="padding-top: 3px;">@makeking_interior</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
