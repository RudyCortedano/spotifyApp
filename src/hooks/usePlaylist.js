import axios from 'axios'
import { useState } from 'react'
import getConfigToken from '../services/getConfigToken'
import { useDispatch } from 'react-redux'
import { deleteTrack, setTracksSlice } from '../store/slices/tracks.slice'

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState([])
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const baseUrl = `https://playlist-share-dev.fl0.io`

 // READ
  const getPlaylist = () =>{
    setLoading(true)
    const url = `${baseUrl}/api/playlists/me`
    axios.get(url, getConfigToken())
    .then(res => {
      setPlaylist(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

 // CREATE
  const postPlaylist = (data) =>{
    setLoading(true)
    const url = `${baseUrl}/api/playlists`
    axios.post(url, data, getConfigToken())
    .then(res => {
      setPlaylist([...playlist, res.data.info])
      dispatch(setTracksSlice([]))
      console.log(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

 // DELETE
  const deletePlaylist = (id) =>{
    setLoading(true)
    const url = `${baseUrl}/api/playlists/${id}`
    axios.delete(url, getConfigToken())
    .then(res => {
      dispatch(deleteTrack(id))
      setPlaylist(playlist.filter(e => e.id !== id))
      console.log(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

 // UPDATE
  const updatePlaylist = (id,data) =>{
    setLoading(true)
    const url = `${baseUrl}/api/playlists/${id}`
    axios.put(url, data, getConfigToken())
    .then(res => {
      setInfoApi(infoApi.map(e => (id === e.id) ? res.data : e))
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

  return {playlist, getPlaylist, postPlaylist, deletePlaylist, updatePlaylist, setPlaylist, loading}
}

export default usePlaylist