<template>
  <div>
    <label
      for="custom-input-number"
      class="w-full text-blue-500 text-lg font-semibold"
      >テーブル
    </label>
    <div class="mt-2">
      <button
        @click="subtractTable"
        class="text-white bg-blue-500 text-purple-100  hover:bg-blue-500 text-purple-100  h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span class="m-auto text-2xl font-semibold">−</span>
      </button>
      <button
        @click="addTable"
        class="text-white bg-blue-500 text-purple-100  hover:bg-blue-500 text-purple-100  h-full w-20 rounded-r cursor-pointer"
      >
        <span class="m-auto text-2xl font-semibold">+</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addTable(e) {
      this.$store.commit('addTable')
    },
    subtractTable(e) {
      this.$store.commit('subtractTable')
    }
  }
}
</script>
