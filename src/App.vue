<template>
  <div id="app" class="w-screen h-screen flex items-center justify-center">
    <div class="flex flex-col sm:flex-row items-center justify-center container-xl space-x-0 sm:space-x-12 space-y-10 sm:space-y-0">

      <img src="./assets/7vyJtFhz_160x160.jpeg" alt="" class="block rounded-full border-4 border-white self-start">

      <section class="flex flex-col space-y-3 self-start sm:self-auto">
        <h1 class="text-2xl sm:text-3xl uppercase text-white font-black">Bram van Rijswijk</h1>
        <section>
          <p class="text-sm sm:text-base text-white font-medium tracking-wider">Medior Software Engineer @ <a href="https://ordina.nl" target="_blank" class="font-extrabold hover:underline">Ordina</a></p>
          <p class="text-sm sm:text-base text-white font-medium tracking-wider">Creator of <a href="https://watisonsbudget.nl" target="_blank" class="font-extrabold hover:underline">Watisonsbudget</a></p>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Inter UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
