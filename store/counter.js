export const state = () => ({
  tables: [{ seat: 1 }]
})

export const mutations = {
  addTable(state) {
    if (state.tables.length < 5) {
      state.tables.push({ seats: 0 })
    }
  },
  subtractTable(state) {
    if (state.tables.length > 1) {
      state.tables.pop()
    }
  },
  addSeat(state, index) {
    if (state.tables[index].seats < 5) {
      state.tables[index].seats += 1
    }
  },
  subtractSeat(state, index) {
    if (state.tables[index].seats > 0) {
      state.tables[index].seats -= 1
    }
  }
}
