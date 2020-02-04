<template>
    <div>
        <p v-text="dropdownResult"></p>

        <dropdown @update:option="optionUpdate"></dropdown>
    </div>
</template>

<script>
import Dropdown from './Dropdown';
export default {
    name: 'List',
    components: {
        Dropdown,
    },
    methods: {
        optionUpdate: function(value) { return this.dropdownResult = value},
    },
    data() {
        return {
            dropdownResult: ''
        }
    }
};
</script>

<style scoped>

</style>