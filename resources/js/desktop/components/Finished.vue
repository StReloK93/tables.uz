<template>
   <section @click="$store.state.finished = false"  style="z-index: 100;" class="fixed py-4 top-0 left-0 z-50 w-full h-full bg-indigo-800 bg-opacity-70 flex items-center justify-center">
		<transition name="fade" mode="out-in">
			<form v-if="finishim" @click.stop="menudrop = false" @submit.prevent="saveSetting" class="w-3/5 h-full border bg-white rounded-xl shadow-xl px-24 py-4 flex flex-col justify-between relative">
				<img @click="$store.state.finished = false" src="/images/cancel.png" class="w-6 absolute top-0 right-0 m-3 mx-5 cursor-pointer hover:bg-gray-200 p-1">
				<section>
					<h3 class="font-bold mb-4 xl:text-xl md:text-md text-gray-600">Contact info</h3>
					<p class="text-gray-700 xl:text-sm md:text-xs">
						The specifications you selected will be emailed to Ergoseatings 
						after you click the continue button below. We will contact you 
						with a quotation shortly. Thank you for tying out our Desk Customizer 2.0!
					</p>
					<hr class="xl:my-6 md:my-4">
					<aside class="px-6 py-3 border rounded-md xl:mb-6 md:mb-4">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">Your Name</label>
						<input  required type="text" v-model="inpname" class="w-full border-0 outline-none mt-3" placeholder="Input Your Name here please">
					</aside>
					<aside class="px-6 py-3 border rounded-md xl:mb-6 md:mb-4">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">Your email: <span class="ml-2 text-gray-400 font-normal small-text">(Pis avoid using hotmail and Yahoo here as mails will very likely go to junk folder when we reply to you)</span></label>
						<input required type="email" v-model="inpemail" class="w-full border-0 outline-none mt-3" placeholder="Email address">
					</aside>
					<aside class="px-6 py-3 border rounded-md xl:mb-6 md:mb-4">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">Phone number</label>
						<input required type="number" v-model="inpphone" class="w-full border-0 outline-none mt-3" placeholder="Phone number">
					</aside>
					<aside class="px-6 py-3 border rounded-md relative">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">How would you like to be contacted? </label>
						<div class="flex justify-between cursor-pointer" @click.stop="menudrop = !menudrop">
							<aside>
								<span v-if="email">
									By email
								</span>
								<span v-if="phone">
									By phone
								</span>
								<span v-if="whatsapp">
									By whatsapp
								</span>
							</aside>

							<aside>
								<img src="/images/bottom.png" :class="{'rotate-180':menudrop}" class="easy-transition transform w-4 align-middle inline-block">
							</aside>
						</div>

						<transition name="fade">
							<main v-if="menudrop" @click.stop="" class="p-6 absolute top-full left-0 border border-gray-100 bg-white w-full shadow-md z-50">
								<h3 class="text-gray-800 font-bold">
									How would you like to be contacted? 
								</h3>
								<div class="ml-1 mt-2 relative">
									<main v-if="email" class="absolute top-0 -left-1 w-36 h-6 bg-red-400 bg-opacity-0 z-10 rounded"></main>
									<input type="checkbox"  id="emails" v-model="email" class="transform scale-150 mr-3"> <label  class="cursor-pointer" for="emails">By Email</label> 
								</div>
								<div class="ml-1 mt-2 relative">
									<main v-if="phone" class="absolute top-0 -left-1 w-36 h-6 bg-red-400 bg-opacity-0 z-10 rounded"></main>
									<input type="checkbox" id="phones" v-model="phone" class="transform scale-150 mr-3"> <label  class="cursor-pointer" for="phones">By Phone</label> 
								</div>
								<div class="ml-1 mt-2 relative">
									<main v-if="whatsapp" class="absolute top-0 -left-1 w-36 h-6 bg-red-400 bg-opacity-0 z-10 rounded"></main>
									<input type="checkbox" id="whatsapp" v-model="whatsapp" class="transform scale-150 mr-3"> <label  class="cursor-pointer" for="whatsapp">By Whatsapp</label> 
								</div>
							</main>
						</transition>

					</aside>
				</section>
				<section class="text-right">
					<button type="submit" class="xl:h-16 md:h-14 xl:w-52 md:w-40 hover:bg-gray-400 bg-green-700  xl:text-xl md:text-md text-center text-white rounded-xl">
						Continue
					</button>
				</section>
			</form>
			<main v-else class="w-1/3 h-96 border bg-white rounded-xl flex items-center justify-center shadow-md">
				<div class="text-center">
					<img src="/images/group.png" class="w-16 inline-block mb-6">
					<p>Thank you for selecting us! We will contact you soon</p>
				</div>
			</main>
		</transition>
   </section>
</template>
<script>
export default {
	data() {
		return {
			inpname: null,
			inpemail: null,
			inpphone: null,

			email: true,
			phone: false,
			whatsapp: false,

			menudrop: false,
			finishim: true
		}
	},
	methods: {
		async saveSetting(){
			let contacted = this.email? 'email' : 'phone'
			const form = {
				prefers : contacted,
				name : this.inpname,
				email : this.inpemail,
				phone : this.inpphone,
			}
			const data = await store.dispatch('sendEmail', form)
			this.finishim = false
		}
	},
	watch: {
		"email": {
			handler(val) {
				if(val){
					this.phone = false
					this.whatsapp = false
				}
			},
		},
		"phone": {
			handler(val) {
				if(val){
					this.email = false
					this.whatsapp = false
				}
			},
		},
		"whatsapp": {
			handler(val) {
				if(val){
					this.email = false
					this.phone = false
				}
			},
		},
	},
};
</script>
<style scoped>
.small-text{
	font-size: 11px;
}
input[type="checkbox"]:disabled{
  background: gray;
  border: 1px solid #d4d4d5;
}
</style>