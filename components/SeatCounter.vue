<template>
  <div>
    <div class="inline-flex">
      <p class="p-2">座席</p>
      <button @click="addSeat(index)" class="p-2 rounded-l">
        <svg
          class="fill-current w-4 h-4 hover:text-red-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          />
        </svg>
      </button>
      <button @click="subtractSeat(index)" class="p-2 rounded-r">
        <svg
          class="fill-current w-4 h-4 hover:text-red-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5-9v2H5V9h10z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count', 'index'],
  methods: {
    addSeat(index) {
      this.$store.commit('counter/addSeat', index)
    },
    subtractSeat(index) {
      this.$store.commit('counter/subtractSeat', index)
    }
  }
}
</script>
