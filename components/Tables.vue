<template>
  <div class="m-10">
    <div class="flex justify-center">
      <div v-for="seats in (index, frontSeats)" v-bind:key="seats.id">
        <Seat class="mx-1" />
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <svg :style="svgWidth(table.seats)" height="70px">
          <rect
            :style="rectWidth(table.seats)"
            x="10"
            y="10"
            height="50"
            stroke="black"
            stroke-width="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
    <div class="flex justify-center">
      <div v-for="seats in backSeats" v-bind:key="seats.id">
        <Seat class="mx-1" />
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
  props: ['table', 'index'],
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
    }
  },
  methods: {
    svgWidth(seats) {
      return {
        width: seats * 30 + 20
      }
    },
    rectWidth(seats) {
      return {
        width: seats * 30
      }
    }
  }
}
</script>
