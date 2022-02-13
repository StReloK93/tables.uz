<template>
<section>
    <Carusel  :itemCount="3" class="text-md text-center text-gray-600 mx-8">
        <main class="w-1/3 inline-block align-middle px-2 relative">
            <img src="/images/true.png" class="w-4 -m-1 -mt-2 absolute top-0 right-0 z-20">
            <img src="/images/1/Bestuhl S10.jpg" class="w-20 h-20 object-cover">
        </main>
        <main class="w-1/3 inline-block align-middle px-2 relative">
            <img src="/images/true.png" class="w-4 -m-1 -mt-2 absolute top-0 right-0 z-20">
            <img src="/images/1/Bestuhl S15.jpg" class="w-20 h-20 object-cover">
        </main>
        <main class="w-1/3 inline-block align-middle px-2 relative">
            <img src="/images/true.png" class="w-4 -m-1 -mt-2 absolute top-0 right-0 z-20">
            <img src="/images/1/Duorest D2.jpg" class="w-20 h-20 object-cover">
        </main>
        <main class="w-1/3 inline-block align-middle px-2 relative">
            <img src="/images/true.png" class="w-4 -m-1 -mt-2 absolute top-0 right-0 z-20">
            <img src="/images/1/MO Chair.jpg" class="w-20 h-20 object-cover">
        </main>
    </Carusel>
</section>
</template>
<script>
import Carusel from '../Carusel.vue'
export default {
    components:{
        Carusel
    }
}
</script>