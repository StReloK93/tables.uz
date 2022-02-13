<template>
   <section @click="$store.state.finished = false" style="z-index: 100;" class="fixed flex items-center justify-center bg-gray-700 bg-opacity-60 top-0 left-0 z-50 w-full h-full overflow-scroll">
		<transition name="fade" mode="out-in">
			<form v-if="finishim" @click.stop="menudrop = false" @submit.prevent="saveSetting" class="h-full bg-white p-3 flex flex-col justify-between relative">
				<img @click="$store.state.finished = false" src="/images/cancel.png" class="w-5 absolute top-0 right-0 m-3 cursor-pointer hover:bg-gray-200 p-1">
				<section>
					<h3 class="font-bold mb-3 text-gray-600">Contact info</h3>
					<p class="text-gray-700 text-sm">
						The specifications you selected here will be emailed to you and Ergoseatings.com 
						after you click the submrrorder quoted' button below We will contact you shodly 
						with an Meal quotation based on your specifications Thank you for tying out Emoseatinqs 
						Desk Custommer 
					</p>
					<hr class="my-3">
					<aside class="px-5 py-2 border rounded-md mb-3">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">Your Name</label>
						<input v-model="inpname" required type="text" class="w-full border-0 outline-none mt-3" placeholder="Type yuor name, please">
					</aside>
					<aside class="px-5 py-2 border rounded-md mb-3">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">Your email: <span class="ml-2 text-gray-400 font-normal small-text">(Pis avoid using hotmail here as mails will very likely go to junk folder when we reply to you)</span></label>
						<input v-model="inpemail" required type="email" class="w-full border-0 outline-none mt-3" placeholder="Email address">
					</aside>
					<aside class="px-5 py-2 border rounded-md mb-3">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">Phone number</label>
						<input v-model="inpphone" required type="number" class="w-full border-0 outline-none mt-3" placeholder="Phone number">
					</aside>
					<aside class="px-5 py-2 border rounded-md relative mb-3">
						<label for="inputname" class="uppercase small-text font-bold text-indigo-900 block">How would you like to be contacted? </label>
						<div class="flex justify-between cursor-pointer" @click.stop="menudrop = !menudrop">
							<aside>
								<span v-if="email">
									By email
								</span>
								<span v-if="phone">
									By phone
								</span>
							</aside>

							<aside>
								<img src="/images/bottom.png" :class="{'rotate-180':menudrop}" class="easy-transition transform w-4 align-middle inline-block">
							</aside>
						</div>

						<transition name="fade">
							<main v-if="menudrop" @click.stop="" class="p-5 absolute top-full left-0 border border-gray-100 bg-white w-full shadow-md z-50">
								<h3 class="text-gray-800 font-bold">
									How would you like to be contacted? 
								</h3>
								<div class="ml-1 mt-2">
									<input type="checkbox"  id="emails" v-model="email" class="transform scale-150 mr-3"> <label  class="cursor-pointer" for="emails">By Email</label> 
								</div>
								<div class="ml-1 mt-2">
									<input type="checkbox" id="phones" v-model="phone" class="transform scale-150 mr-3"> <label  class="cursor-pointer" for="phones">By Phone</label> 
								</div>
							</main>
						</transition>

					</aside>
				</section>
				<section class="text-right">
					<button type="submit" class="h-10 w-full bg-green-700 text-md text-center text-white rounded-md">
						Continue
					</button>
				</section>
			</form>
			<main v-else class="w-52 h-52 border bg-white rounded-xl flex items-center justify-center shadow-2xl">
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
			menudrop: false,
			finishim: true
		}
	},
	methods: {
		saveSetting(){
			let contacted = this.email? 'email' : 'phone'
			const form = {
				prefers : contacted,
				name : this.inpname,
				email : this.inpemail,
				phone : this.inpphone,
			}
			store.dispatch('sendEmail', form)
			this.finishim = false
		}
	},
	watch: {
		"email": {
			handler(val) {
				val? this.phone = false : this.phone = true
			},
		},
		"phone": {
			handler(val) {
				val? this.email = false : this.email = true
			},
		},
	},
};
</script>
<style scoped>
.small-text{
	font-size: 11px;
}
</style>