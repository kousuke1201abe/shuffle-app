<template>
  <div>
    <div
      v-for="(a, index) in this.$store.state.counter.tables.reduce(
        (p, x) => p + x.seats.length,
        0
      )"
      v-bind:key="a.id"
      class="flex-col m-2 border-b border-b-2 border-teal-500 m-5"
    >
      <input
        v-model="names[index]"
        type="text"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="名前"
      />
    </div>
    <button
      @click="shuffle"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      shuffle!
    </button>
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
      console.log(this.names)
      for (let i = this.names.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1))
        const tmp = this.names[i]
        this.names[i] = this.names[r]
        this.names[r] = tmp
      }
      this.$store.commit('counter/mapNames', this.names)
    }
  }
}
</script>
