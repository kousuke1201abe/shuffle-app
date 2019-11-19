<template>
  <div>
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
</template>
