import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld';
import NotFound from './components/NotFound';
import Tasks from './components/Tasks';
import User from './components/User'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/cadastro', component: HelloWorld},
  {path: '/tasks', component: Tasks},
  {path: '/user/:id', component: User},
  {path: '*', component: NotFound},
];

// const routes = {
//   '/': App,
//   '/cadastro': HelloWorld,
// } ;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  // data: {
  //   currentLocation: window.location.pathname
  // },
  // computed: {
  //   currentComponent () {
  //     return routes[this.currentLocation] || NotFound;
  //   },
  // },
  router,
  render: h => h(App),
  // render: function (h){ return h(this.currentComponent)},
}).$mount('#app');
