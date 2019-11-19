<template>
  <div class="container">
    <div class="flex mb-4">
      <div class="w-full">
        <div v-for="(table, index) in tables" v-bind:key="table.id">
          <Tables :table="table" :index="index" />
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-full rounded overflow-hidden shadow-lg p-5">
        <tableCounter />
        <div
          v-for="a in this.$store.state.counter.tables.reduce(
            (p, x) => p + x.seats,
            0
          )"
          v-bind:key="a.id"
          class="flex-col m-2 border-b border-b-2 border-teal-500 m-5"
        >
          <input
            type="text"
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="名前"
          />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          sort!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TableCounter from '~/components/TableCounter.vue'
import Tables from '~/components/Tables.vue'

export default {
  components: {
    TableCounter,
    Tables
  },
  computed: {
    tables() {
      return this.$store.state.counter.tables
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
