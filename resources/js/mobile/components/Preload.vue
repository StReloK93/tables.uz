<template>
   <transition name="fade">
      <main
         v-if="$store.state.onLoaded.toFixed() != 100"
         class="
            absolute
            h-full
            w-full
            flex
            items-center
            justify-center
            top-0
            left-0
            z-30
            bg-gray-900
            text-white text-2xl
            font-bold
         "
      >
         <div class="text-center">
            <img src="/logo.gif" class="w-60 h-20 object-cover" />
            <section class="w-44 h-1 bg-white inline-block">
               <aside
                  :style="widths"
                  class="h-full block bg-gray-700 easy-transition"
               ></aside>
            </section>
         </div>
      </main>
   </transition>
</template>

<script>
export default {
   computed: {
      widths() {
         return { width: store.state.onLoaded.toFixed() + "%" };
      },
   },
};
</script>