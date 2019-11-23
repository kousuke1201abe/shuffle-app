export const state = () => ({
  tables: [{ seats: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }] }]
})

export const mutations = {
  addTable(state) {
    if (state.tables.length < 5) {
      state.tables.push({ seats: [{ name: '' }] })
    }
  },
  subtractTable(state) {
    if (state.tables.length > 1) {
      state.tables.pop()
    }
  },
  addSeat(state, index) {
    if (state.tables[index].seats.length < 14) {
      state.tables[index].seats.push({ name: '' })
    }
  },
  subtractSeat(state, index) {
    if (state.tables[index].seats.length > 2) {
      state.tables[index].seats.pop()
    }
  },
  mapNames(state, names) {
    state.tables.forEach((table) =>
      table.seats.forEach((seat) => {
        seat.name = names[0]
        names.shift()
      })
    )
  }
}
