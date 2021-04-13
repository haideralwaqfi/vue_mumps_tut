import axios from 'axios'
import createStore from '../store/index'
import Vue from 'vue'

// import { LocalStorage } from 'quasar'

export default async (routine, data) => {
  const store = typeof createStore === 'function'
    ? createStore({ Vue })
    : createStore
  try {
    const result = await axios({
      url: 'http://127.0.0.1:7777/qdemo',
      method: 'post',
      headers: {
        auth: '',
        jwt: ''
      },
      data: { routine, data }
    })
    return result.data && result.data.data
  } catch (e) {
  }
}
