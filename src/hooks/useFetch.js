import axios from 'axios'
import { useState } from 'react'
import getConfigToken from '../services/getConfigToken'

const useFetch = () => {
  const [infoApi, setInfoApi] = useState()
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)

  const baseURL = `https://playlist-share-dev.fl0.io`

  const getApi = (path) =>{
    setLoading(true)
    const url = `${baseURL}${path}`
    const config = {
      headers:{
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    }
    axios.get(url, config)
    .then(res => {
      setInfoApi(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

  return [infoApi, getApi, loading, hasError]
}

export default useFetch