export const state = () => ({
  tableSize: 4,
  tables: [{ seats: 4 }]
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
  addTableSize(state) {
    if (state.tableSize < 10) {
      state.tableSize += 2
    }
  },
  subtractTableSize(state) {
    if (state.tableSize > 2) {
      state.tableSize -= 2
    }
  },
  addSeat(state, index) {
    if (state.tables[index].seats < state.tableSize) {
      state.tables[index].seats += 1
    }
  },
  subtractSeat(state, index) {
    if (state.tables[index].seats > 0) {
      state.tables[index].seats -= 1
    }
  }
}
