<template>
  <div class="about flex flex-col items-center">
    <div class="absolute inset-0 z-0" @click="modal = false"></div>

    <input
      type="text"
      class="bg-gray-300 px-4 py-2 z-10"
      autocomplete="off"
      v-model="state"
      @focus="modal = true"
    />

    <div v-if="filteredStates && modal" class="z-10">
      <ul class="w-48 bg-gray-800 text-white">
        <li
          v-for="(filteredState, id) in filteredStates"
          :key="id"
          @click="setState(filteredState)"
          class="py-2 border-b cursor-pointer"
        >{{filteredState}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "",
      modal: false,
      states: ["Brasília", "Bahia", "Barra", "Campinas", "Campina"],
      filteredStates: []
    };
  },
  methods: {
    filterStates() {
      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },
    setState(state) {
      this.state = state;
      this.modal = false;
    }
  },
  watch: {
    state() {
      this.filterStates();
    }
  }
};
</script>