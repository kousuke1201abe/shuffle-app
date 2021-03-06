import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      data: {
        tables: [
          { seats: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }] }
        ]
      }
    },
    mutations: {
      ...vuexfireMutations,
      addTable(state) {
        if (state.data.tables.length < 5) {
          state.data.tables.push({ seats: [{ name: '' }, { name: '' }] })
        }
      },
      subtractTable(state) {
        if (state.data.tables.length > 1) {
          state.data.tables.pop()
        }
      },
      addSeat(state, index) {
        if (state.data.tables[index].seats.length < 14) {
          state.data.tables[index].seats.push({ name: '' })
        }
      },
      subtractSeat(state, index) {
        if (state.data.tables[index].seats.length > 2) {
          state.data.tables[index].seats.pop()
        }
      },
      mapNames(state, object) {
        state.data.tables.forEach((table) =>
          table.seats.forEach((seat) => {
            seat.name = object.names[0]
            object.names.shift()
          })
        )
        const tablesRef = db.collection('tables')
        tablesRef.doc(object.urlCode).set(state.data)
      }
    },
    actions: {
      setTableRef: firestoreAction(({ bindFirestoreRef }, id) => {
        bindFirestoreRef('data', db.collection('tables').doc(String(id)))
      })
    }
  })
}

export default createStore
