import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuilder-3d456.firebaseio.com/'
})

export default instance
