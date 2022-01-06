<template>
<transition name="fade" mode="out-in">
<main v-if="$store.state.onLoaded.toFixed() != 100" class="absolute h-full w-full flex items-center justify-center top-0 left-0 z-30 bg-indigo-900 text-white text-2xl font-bold">
{{$store.state.onLoaded.toFixed()}} %
</main>
</transition>
</template>