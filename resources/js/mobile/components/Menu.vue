<template>
    <main class="flex text-center text-white">
        <div @click="oldPage()" class="w-1/4 bg-my py-2 hover:bg-green-700 border-r border-white flex justify-center items-center">
        <img src="/images/leftmob.png" style="filter: brightness(0) invert(1)" class="w-1/4">
        </div>
        <div @click="toggleMenu(true)" class="w-2/4 bg-my flex hover:bg-green-700 justify-center items-center">
        <img src="/images/menu.png" style="filter: brightness(0) invert(1)" class="w-1/6">
        </div>
        <div @click="nextPage()" class="w-1/4 bg-my py-2 hover:bg-green-700 border-l border-white flex justify-center items-center">
        <img src="/images/rightmob.png" style="filter: brightness(0) invert(1)" class="w-1/4">
        </div>
    </main>
   <transition @after-enter="enter" name="fade">
      <section v-if="menu" class="menu flex items-end fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 z-50" @click="toggleMenu(false)">
         <main :class="{'translate-y-0': podmenu}" class="p-5 relative rounded-t-2xl w-full bg-white transform translate-y-full easy-transition" @click.stop="">

            <aside class="absolute top-0 right-0 flex">
                <div class="uppercase flex items-center font-bold">
                    <span v-if="lang == 'gk'" @click="setLang('eng')" :class="{'text-blue-900':lang == 'eng'}"  class="text-gray-300 cursor-pointer">eng</span>
                    <span v-else @click="setLang('gk')" :class="{'text-blue-900':lang == 'gk'}" class="text-gray-300 cursor-pointer">繁</span>
                </div>
                <button @click="toggleMenu(false)" class=" p-4">
                   <img src="/images/cancel.png" class="w-4">
                </button>
            </aside>

            <button @click="$router.push({ name: 'legstype'})" :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': isActive == true }" class="leading-3 text-md md:text-md capitalize text-gray-300 easy-transition block mb-3">
                {{$store.state.language.createYour}}
            </button>
            <!-- <router-link :to="{name: 'designs', params:{ closed: true}}" :class="{ 'border-blue-400 border-l-4 pl-4 text-blue-900 font-bold': isActive == false }" class="leading-3 text-md md:text-md capitalize text-gray-300 easy-transition block">
               {{$store.state.language.browseOur}}
            </router-link> -->

            <hr class="my-5">
            <transition name="higth">
               <Configurator @closed="toggleMenu(false)" v-if="$store.state.configurator"/>
            </transition>

            <button @click="$store.state.finished = true" class="bg-green-800 font-bold w-full p-3 text-center text-white rounded-md">
               {{$store.state.language.getQuote}}
            </button>
         </main>
      </section>
   </transition>
</template>
<script>
import Configurator from './Configurator.vue'

export default {
    data() {
        return {
            isActive: null,
            menu: false,
            podmenu: false,
            lang: 'eng'
        }
    },
    mounted(){
        if(localStorage.getItem('lang')){
            this.setLang(localStorage.getItem('lang'))
        }
    },
    methods:{
        oldPage(){
            if(store.state.currentPage > 1) store.state.currentPage--
            else{
                if(this.$route.name == 'customization'){
                    this.$router.push({ name: 'legstype', params: { old: true } })
                }
                if(this.$route.name == 'size'){
                    this.$router.push({ name: 'customization', params: { old: true } })
                }
                if(this.$route.name == 'room'){
                    this.$router.push({ name: 'size', params: { old: true } })
                }
            }
        },
        nextPage(){
            if(store.state.maxPage > store.state.currentPage) store.state.currentPage++
            else{
                if(this.$route.name == 'legstype'){
                    this.$router.push({ name: 'customization' })
                }
                if(this.$route.name == 'customization'){
                    this.$router.push({ name: 'size' })
                }
                if(this.$route.name == 'size'){
                    this.$router.push({ name: 'room' })
                }
                if(this.$route.name == 'room'){
                    store.state.other = true
                }
            }
        },
        toggleMenu(bool){
            if(bool){
            this.menu = bool
            }
            else{
            this.podmenu = false
            setTimeout(()=>{
                this.menu = bool
            },300)
            }
        },
        enter() {
            this.podmenu = true
        },
        setLang(lang){
            this.lang = lang
            store.commit('setLang', lang)
        },
    },
    watch:{
        $route (to){
            if(to.name == 'designs'){
                this.isActive = false
                store.commit('setConfigurator', false)
            }
            else{
                this.isActive = true
                store.commit('setConfigurator', true)
            }
            if(to.params.closed == 'true'){
                this.toggleMenu(false)
            }
        }
    },
    components:{
        Configurator
    }
}
</script>
<style>
.translate-y-0{
   --tw-translate-y: 0px!important;
}
</style>