<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-3">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-2xl tracking-tight ml-3">shuffle!</span>
      </div>
    </nav>
    <div class="md:p-12 bg-indigo-100 flex flex-row flex-wrap justify-center">
      <div class="md:w-1/2-screen m-0 p-5 w-full tw-h-full text-center">
        <tableCounter />
      </div>
      <div v-for="(table, index) in tables" v-bind:key="table.id">
        <Tables :table="table" :index="index" />
      </div>
      <div
        class="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg"
      >
        <div class="text-2xl text-indigo-900 mb-2">
          <small class="pl-2 text-gray-500">参加者を入力してください</small>
        </div>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import TableCounter from '~/components/TableCounter.vue'
import Tables from '~/components/Tables.vue'
import Form from '~/components/Form.vue'

export default {
  components: {
    TableCounter,
    Tables,
    Form
  },
  computed: {
    tables() {
      return this.$store.state.data.tables
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
