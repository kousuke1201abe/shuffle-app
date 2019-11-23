<template>
  <div class="mb-10 mx-3 bg-white rounded shadow">
    <div class="flex justify-center pt-4">
      <div v-for="seats in (index, frontSeats)" v-bind:key="seats.id">
        <FrontSeat :seat="seats" class="mx-1" />
      </div>
    </div>
    <div>
      <div class="flex justify-center px-2">
        <svg :style="svgWidth(table.seats.length)" height="70px">
          <rect
            :style="rectWidth(table.seats.length)"
            x="10"
            y="10"
            rx="3"
            height="50"
            stroke="grey"
            stroke-width="1"
            style="fill:#4299E1;stroke-width:0"
          />
        </svg>
      </div>
    </div>
    <div class="flex justify-center mb-4">
      <div v-for="seats in (index, backSeats)" v-bind:key="seats.id">
        <BackSeat :seat="seats" class="mx-1" />
      </div>
    </div>
    <div v-if="this.$route.query.q === undefined" class="flex mb-4 border-t">
      <div class="md:w-1/2-screen m-0 p-5 w-full tw-h-full text-center">
        <seatCounter :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import FrontSeat from '~/components/frontSeat.vue'
import BackSeat from '~/components/backSeat.vue'
import SeatCounter from '~/components/SeatCounter.vue'

export default {
  components: {
    FrontSeat,
    BackSeat,
    SeatCounter
  },
  props: ['table', 'index'],
  computed: {
    frontSeats() {
      if (this.table.seats.length % 2 === 0) {
        return this.table.seats.slice(0, this.table.seats.length / 2)
      } else {
        return this.table.seats.slice(0, (this.table.seats.length + 1) / 2)
      }
    },
    backSeats() {
      if (this.table.seats.length % 2 === 0) {
        return this.table.seats.slice(
          this.table.seats.length / 2,
          this.table.seats.length
        )
      } else {
        return this.table.seats.slice(
          (this.table.seats.length + 1) / 2,
          this.table.seats.length
        )
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
