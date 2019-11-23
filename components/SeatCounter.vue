<template>
  <div>
    <label
      for="custom-input-number"
      class="w-full text-blue-500 text-lg font-semibold"
      >座席
    </label>
    <div class="mt-2">
      <button
        @click="subtractSeat(index)"
        class="text-white bg-blue-500 text-purple-100  hover:bg-blue-500 text-purple-100  h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span class="m-auto text-2xl font-semibold">−</span>
      </button>
      <button
        @click="addSeat(index)"
        class="text-white bg-blue-500 text-purple-100  hover:bg-blue-500 text-purple-100  h-full w-20 rounded-r cursor-pointer"
      >
        <span class="m-auto text-2xl font-semibold">+</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  methods: {
    addSeat(index) {
      this.$store.commit('addSeat', index)
    },
    subtractSeat(index) {
      this.$store.commit('subtractSeat', index)
    }
  }
}
</script>
