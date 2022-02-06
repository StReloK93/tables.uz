<template>
  <section>
    <transition name="fade">
      <main v-show="$store.state.currentPage == 1" class="miniRoutes">
        <h3
          class="color-title text-center font-medium text-xl mb-3 text-gray-600"
        >
          Choose the wall color
        </h3>
        <div class="text-gray-400 w-full px-2 flex justify-center">
          <input
            id="colorThree"
            class="inputColor w-2/3 h-8"
            type="color"
            @input="events.ColorChanger()"
            v-model="$store.state.params.wallColor"
          />
        </div>
      </main>
    </transition>

    <transition name="fade">
      <main v-show="$store.state.currentPage == 2" class="miniRoutes">
        <h3
          class="color-title text-center font-medium text-xl mb-3 text-gray-600"
        >
          Choose the flooring color
        </h3>
        <div
          class="
            whitespace-nowrap
            px-1
            py-1
            overflow-hidden overflow-x-scroll
            noscroll
            -mr-2
          "
        >
          <aside
            class="w-custom mr-2 inline-block"
            v-for="img in images"
            :key="img"
          >
            <main @click="events.floorImage(img.name)">
              <img
                :class="{
                  'shadow-blue': $store.state.params.floor == img.name,
                }"
                :src="img.path"
                class="border-2 w-full h-28 object-cover border-white rounded-md"
              />
            </main>
          </aside>
        </div>
      </main>
    </transition>
  </section>
</template>
<script>
export default {
  props: ["old"],
  data() {
    return {
      images: null,
      events: Engine.Room,
    };
  },
  async mounted() {
    store.commit("setRoute", this.old);
    scene.onReadyObservable.add(() => {
      this.images = Engine.textures.floors;
    });
  },
};
</script>
<style scope>
.inputColor {
  background: none;
}
.join {
  padding: 2px;
}
.joincheck {
  margin-left: 14px;
}
.w-custom {
  width: 27%;
}
</style>