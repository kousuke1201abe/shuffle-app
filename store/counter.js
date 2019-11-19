export const state = () => ({
  tables: [{ seats: 4 }]
})

export const mutations = {
  addTable(state) {
    if (state.tables.length < 5) {
      state.tables.push({ seats: 2 })
    }
  },
  subtractTable(state) {
    if (state.tables.length > 1) {
      state.tables.pop()
    }
  },
  addSeat(state, index) {
    if (state.tables[index].seats < 14) {
      state.tables[index].seats += 1
    }
  },
  subtractSeat(state, index) {
    if (state.tables[index].seats > 2) {
      state.tables[index].seats -= 1
    }
  }
}
