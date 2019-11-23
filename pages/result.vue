<template>
  <div>
    <nav
      class="flex items-center justify-between flex-wrap bg-blue-500 text-purple-100  p-3"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <nuxt-link
          to="/"
          class="font-semibold text-2xl tracking-tight ml-3 cursor-pointer"
          >shuffle!</nuxt-link
        >
      </div>
    </nav>
    <div
      class="md:p-12 bg-blue-100 flex flex-row flex-wrap justify-center mt-20"
    >
      <div class="md:w-1/2-screen m-0 p-5 w-full tw-h-full text-center mb-10">
        <div class="text-2xl">
          座席ができました！
        </div>
      </div>
      <div v-for="(table, index) in tables" v-bind:key="table.id">
        <Tables :table="table" :index="index" class="p-5" />
      </div>
    </div>
    <div class="md:w-1/2-screen mb-10 p-5 w-full tw-h-full text-center">
      <nuxt-link
        to="/"
        class="bg-blue-500 text-purple-100  hover:bg-blue-500 text-purple-100  text-white text-xl font-bold py-3 px-10 mt-3 rounded-full"
      >
        作り直す
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Tables from '~/components/Tables.vue'

export default {
  components: {
    Tables
  },
  computed: {
    tables() {
      return this.$store.state.data.tables
    }
  },
  created() {
    this.$store.dispatch('setTableRef', this.$route.query.q)
  }
}
</script>
