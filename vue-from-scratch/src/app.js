import Vue from 'vue';
import App from './components/App.vue';

window.axios = require('axios');

new Vue ({
    el:'#app',

    components:{
        App
    },

    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data);
    },

    data: {
        posts: null,
    }
});