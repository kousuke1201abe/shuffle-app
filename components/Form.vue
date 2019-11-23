<template>
  <div>
    <div
      v-for="(a, index) in this.$store.state.data.tables.reduce(
        (p, x) => p + x.seats.length,
        0
      )"
      v-bind:key="a.id"
    >
      <div class="flex-col flex py-3">
        <input
          v-model="names[index]"
          type="text"
          class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
          placeholder="名前"
        />
      </div>
    </div>
    <div class="flex-col flex py-3">
      <button
        @click="shuffle"
        class="bg-blue-500 text-purple-100  hover:bg-blue-500 text-purple-100  text-white text-xl font-bold py-3 px-4 mt-3 rounded-full"
      >
        shuffle!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: []
    }
  },
  methods: {
    shuffle() {
      for (let i = this.names.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1))
        const tmp = this.names[i]
        this.names[i] = this.names[r]
        this.names[r] = tmp
      }
      const nanoid = require('nanoid')
      const urlCode = nanoid()
      this.$store.commit('mapNames', { names: this.names, urlCode })
      this.$router.push({ path: 'result', query: { q: urlCode } })
    }
  }
}
</script>
