<template>
  <div class="container">
    <div class="flex mb-4">
      <div class="w-full">
        <div v-for="(table, index) in tables" v-bind:key="table.id">
          <Tables :table="table" :index="index" :tableSize="tableSize" />
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-full">
        <tableCounter />
        <tableSizeCounter />
      </div>
    </div>
  </div>
</template>

<script>
import TableSizeCounter from '~/components/TableSizeCounter.vue'
import TableCounter from '~/components/TableCounter.vue'
import Tables from '~/components/Tables.vue'

export default {
  components: {
    TableSizeCounter,
    TableCounter,
    Tables
  },
  computed: {
    tables() {
      return this.$store.state.counter.tables
    },
    tableSize() {
      return this.$store.state.counter.tableSize
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
