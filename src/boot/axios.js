import Vue from 'vue'
import axios from 'axios'
// axios.defaults.timeout = 10000

axios.interceptors.request.use(x => {
  x.meta = x.meta || {}
  x.meta.requestStartedAt = new Date().getTime()

  return x
})

axios.interceptors.response.use(x => {
  console.log('*******************************************************************************************************')
  console.log(`Request =>  ${JSON.stringify(JSON.parse(x.config.data), null, 4)} - ${new Date().getTime() - x.config.meta.requestStartedAt} ms`)
  console.log('Result =>', x.data)

  return x
},
// Handle 4xx & 5xx responses
x => {
  console.log('*******************************************************************************************************')
  console.log(`Error =>  ${JSON.stringify(JSON.parse(x.config.data), null, 4)} - ${new Date().getTime() - x.config.meta.requestStartedAt} ms`)

  throw x
}
)

Vue.prototype.$axios = axios