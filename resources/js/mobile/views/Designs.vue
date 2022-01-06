<template>
	<section>
		<transition name="fade">
			<main v-show="$store.state.currentPage == 1" class="miniRoutes">
				<h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">Type</h3>
				<div class="text-md flex justify-center w-full">
					<main class="w-1/3 mr-2">
						<button class="w-full h-28 bg-my text-center text-white rounded-xl">By design <br> style</button>
					</main>
					<main class="w-1/3">
						<button class="w-full h-28 text-gray-600 text-center rounded-xl border">By usage</button>
					</main>
				</div>
			</main>
		</transition>

		<transition name="fade">
			<main v-show="$store.state.currentPage == 2" class="miniRoutes">
				<h3 class="color-title text-center font-medium text-xl  mb-3 text-gray-600">Disegn style</h3>
				<div class="whitespace-nowrap text-sm overflow-hidden overflow-x-scroll noscroll -mr-2">
					<main class="w-1/3 mr-2 inline-block align-middle">
						<button class="h-28 w-full bg-my text-center text-white rounded-xl">SOHO</button>
					</main>
					<main class="w-1/3 mr-2 inline-block align-middle">
					<button class="h-28 w-full text-gray-600 text-center rounded-xl border">
						Multi purpose
						<br>for Home
					</button>
					</main>
					<main class="w-1/3 mr-2 inline-block align-middle">
					<button class="h-28 w-full text-gray-600 text-center rounded-xl border">
						Private Office
						<br>for Corporate
					</button>
					</main>
					<main class="w-1/3 mr-2 inline-block align-middle">
					<button class="h-28 w-full text-gray-600 text-center rounded-xl border">
						Open Office
						<br>for Corporate
					</button>
					</main>
					<main class="w-1/3 mr-2 inline-block align-middle">
					<button class="h-28 w-full text-gray-600 text-center rounded-xl border">
						Conference Table
						<br>for Corporate
					</button>
					</main>
				</div>
			</main>
		</transition>
	</section>
</template>
<script>
export default {
	mounted() {
		store.commit('setRoute')
	},
};
</script>