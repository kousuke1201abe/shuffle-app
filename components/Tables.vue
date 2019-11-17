<template>
  <div class="m-10">
    <div class="flex mb-4">
      <div class="w-full">
        <div v-for="seats in table.seats" v-bind:key="seats">
          <Seats />
        </div>
      </div>
    </div>
    <svg width="120px" height="70px">
      <rect
        x="10"
        y="10"
        width="100"
        height="50"
        stroke="black"
        stroke-width="1"
        fill="none"
      />
    </svg>
    <div class="flex mb-4">
      <div class="w-full">
        <seatCounter :count="table.seats" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import Seats from '~/components/Seats.vue'
import SeatCounter from '~/components/SeatCounter.vue'

export default {
  components: {
    Seats,
    SeatCounter
  },
  props: ['table', 'index'],
  computed: {
    seats() {
      return this.$store.state.counter.tables.length
    }
  }
}
</script>
