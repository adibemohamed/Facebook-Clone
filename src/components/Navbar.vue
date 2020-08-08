<template>
    <div id="navbar">
        <nav>
            <md-avatar>
              <img v-bind:src="icon" alt="">
            </md-avatar>
        </nav>
    </div>
</template>

<script>

import Vue from 'vue'
import {MdAvatar} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
Vue.use(MdAvatar)

export default {
    name: 'Navbar',
    props: {
        icon: {
            type: String,
            required: true,
            default: './assets/facebook-clone.png'
        }
    }
}
</script >

<style scoped>
#navbar {
    background-color: white;
    height: 60px;
    border-bottom: 1px solid lightgray;
    position: sticky;
    top: 0;
    z-index: 100;
}
</style>