<template>
  <div class="container">
    <div class="flex mb-4">
      <div class="w-full">
        <div v-for="(table, index) in tables" v-bind:key="table.id">
          <Tables :table="table" :index="index" />
        </div>
      </div>
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
