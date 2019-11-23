import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      tables: [
        { seats: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }] }
      ]
    },
    mutations: {
      ...vuexfireMutations,
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
      mapNames(state, object) {
        // state.tables.forEach((table) =>
        //   table.seats.forEach((seat) => {
        //     seat.name = object.names[0]
        //     object.names.shift()
        //   })
        // )
        const tablesRef = db.collection('tables')
        tablesRef.doc(object.urlCode).set(state)
      }
    },
    actions: {
      setTableRef: firestoreAction(({ bindFirestoreRef }, id) => {
        console.log(id)
        console.log(db.collection('tables').doc(id))
        bindFirestoreRef('state', db.collection('tables').doc(id))
      })
    },
    getters: {
      getUsers: (state) => {
        return state.users
      }
    }
  })
}

export default createStore
