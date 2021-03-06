import axios from 'axios'
import { message } from 'antd';

// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 200, it is judged as an error.
    if (response.status !== 200) {
      message.error(res.errorMessage || 'Something went wrong, please try later.')

      return Promise.reject(new Error(res.errorMessage || 'Error'))
    } else {
      return res
    }
  },
  error => {
    const response = error.response

    // Deal with bad request error
    if (response.status === 400) {
      message.error(response.data.errorMessage)
    } else {
      message.error(error.message)
    }

    console.log('[server]request error: ' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
