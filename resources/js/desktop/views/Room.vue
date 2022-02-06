<template>
  <section>
    <main class="xl:pb-8 md:pb-4">
      <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
        Choose the wall color
      </h3>
      <div class="xl:text-md md:text-sm text-gray-500">
        <div class="flex items-center w-52 overflow-hidden shadow-md border">
          <input
            class="inputColor w-20 scale5"
            type="color"
            @input="events.ColorChanger()"
            v-model="$store.state.params.wallColor"
          />
        </div>
      </div>
    </main>
    <main class="pb-8">
      <h3 class="font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600">
        Choose the flooring color
      </h3>
      <div class="flex flex-wrap -mr-3">
        <aside class="w-1/5 pr-2" v-for="img in images" :key="img">
          <main
            @click="events.floorImage(img.name)"
            class="mb-6 cursor-pointer"
          >
            <img
              :class="{ 'shadow-blue': $store.state.params.floor == img.name }"
              :src="img.path"
              class="border-2 w-full h-36 object-cover border-white rounded-md"
            />
          </main>
        </aside>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  data() {
    return {
      images: null,
      events: Engine.Room,
    };
  },
  async mounted() {
    scene.onReadyObservable.add(() => {
      this.images = Engine.textures.floors;
    });
  },
};
</script>
<style>
.inputColor {
  background: none;
}
.scale5 {
  transform: scale(5.5);
}
</style>