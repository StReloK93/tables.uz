<template>
   <section class="flex justify-between items-center">
      <button @click="prev" class="w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center ">
			<img src="/images/leftang.png" class="w-2/3 btns">
		</button>
      <aside class="overflow-hidden flex-grow">
         <main ref="mainBlock" :style="transform" class="whitespace-nowrap easy-transition">
				<slot></slot>
         </main>
      </aside>
      <button @click="next" class="w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center">
			<img src="/images/leftang.png" class="w-2/3">
		</button>
   </section>
</template>
<script>
export default {
	props: ['itemCount'],
   data() {
      return {
			prosent: 0,
      };
   },
	computed:{
		transform(){
			return {transform: `translateX(${this.prosent}%)`}
		},
		casr(){
			var count = this.$refs.mainBlock.children.length
			if((count%this.itemCount) == 0) return 0
			return this.itemCount - (count%this.itemCount) 
		}
	},
   methods: {
      next() {
			let countItem = this.$refs.mainBlock.children.length - this.itemCount //10 - 4
			let viewItem = this.itemCount
			if((-countItem*100/viewItem) < this.prosent)
				this.prosent += -100/viewItem
		},

		prev(){
			if(this.prosent < 0)
				this.prosent += 100/this.itemCount
		}
   },
};
</script>
<style>
.btns{
	transform: scale(-1);
   position: relative;
   top: 1px;
}
</style> 