<template>
    <div>
      <div :class="classObject">{{value}}</div>
      <div :style="{fontSize: (value*10) + 'px'}">{{value}}</div>

      <button type="button" @click="value++">+</button>
      <button type="button" @click="value--">-</button>
      <button type="button" @click="error = !error">Error</button>  
      <button type="button" @click="warning = !warning">Warning</button>  
    </div>
</template>

<script>
export default {
    name:'app',
    data () {
        return {
            value:1,
            error: false,
            warning:false
        }
    },
    computed: {
        classObject () {
            return { 'red-error' : this.value > 5, 'yellow-warning' : this.warning}
        },
    },
}
</script>

<style>
    body {
        font-size: 40px;
        text-align: center;
        padding-top: 100px;
    }

    .red-error {
        background-color: darkred;
    }

    .yellow-warning {
        text-decoration: underline;
    }
</style>