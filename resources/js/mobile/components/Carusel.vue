<template>
   <section class="flex justify-between items-center">
		<transition name="fades" mode="out-in">
			<button @click="prev" v-if="prosent != 0" class="w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center ">
				<img src="/images/leftang.png" class="w-2/3 btns">
			</button>
		</transition>
      <aside class="overflow-hidden flex-grow">
         <main ref="mainBlock" :style="transform" :class="{'-ml-2':prosent == 0}" class=" whitespace-nowrap easy-transition">
			<slot></slot>
         </main>
      </aside>
		<transition name="fades" mode="out-in">
			<button @click="next" v-if="prosent != endItem" class="w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center">
				<img src="/images/leftang.png" class="w-2/3">
			</button>
		</transition>
   </section>
</template>
<script>
export default {
	props: ['itemCount'],
   data() {
      return {
			prosent: 0,
			endItem: null
      };
   },
	computed:{
		transform(){
			return {transform: `translateX(${this.prosent}%)`}
		},
	},
	mounted() {
		let countItem = this.$refs.mainBlock.children.length - this.itemCount //10 - 4
		this.endItem = -countItem*100/this.itemCount
	},
   methods: {
      next() {
			if(this.endItem < this.prosent){
				this.prosent += -100/this.itemCount
			}
		},

		prev(){
			if(this.prosent < 0)
				this.prosent += 100/this.itemCount
		}
   },
};
</script>
<style scoped>
.btns{
	transform: scale(-1);
   position: relative;
   top: 1px;
}

.fades-enter-active,
.fades-leave-active {
  transition: 1s ease;
}

.fades-enter-from,
.fades-leave-to {
  opacity: 0;
  transform: scaleX(0);
  width: 0;
}
</style> 