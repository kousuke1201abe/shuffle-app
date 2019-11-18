<template>
  <div class="m-10">
    <div class="flex justify-center">
      <div v-for="seats in (index, frontSeats)" v-bind:key="seats.id">
        <Seat />
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <svg :style="svgWidth" height="70px">
          <rect
            x="10"
            y="10"
            height="50"
            stroke="black"
            stroke-width="1"
            fill="none"
            :style="rectWidth"
          />
        </svg>
      </div>
    </div>
    <div class="flex justify-center">
      <div v-for="seats in backSeats" v-bind:key="seats.id">
        <Seat class="w-1/12 h-12" />
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-full">
        <seatCounter :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import Seat from '~/components/Seat.vue'
import SeatCounter from '~/components/SeatCounter.vue'

export default {
  components: {
    Seat,
    SeatCounter
  },
  props: ['table', 'index', 'tableSize'],
  computed: {
    frontSeats() {
      if (this.table.seats % 2 === 0) {
        return this.table.seats / 2
      } else {
        return (this.table.seats + 1) / 2
      }
    },
    backSeats() {
      if (this.table.seats % 2 === 0) {
        return this.table.seats / 2
      } else {
        return (this.table.seats - 1) / 2
      }
    },
    svgWidth() {
      return {
        width: this.tableSize * 22 + 20
      }
    },
    rectWidth() {
      return {
        width: this.tableSize * 22
      }
    }
  }
}
</script>
