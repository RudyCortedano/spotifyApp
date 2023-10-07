import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import TracksCard from '../HomePage.jsx/TracksCard'
// import TrackRelatedCard from './TrackRelatedCard'

const TrackReleated = ({artist}) => {

  const [ tracksList, getTrackList ] = useFetch()

  useEffect (() => {
    if(artist){
      getTrackList(`/api/tracks?limit=10&q=${artist}`)
    }
  }, [artist])  

  console.log(tracksList)

  return (

    <section className='related__global'>
      <h3>Track Related</h3>
      <div className='related__cards'>
        {
          tracksList?.tracks.items.map(track =>(
            <TracksCard key={track.id}  track={track}/>
          ))
        }
      </div>
    </section>


  )
}

export default TrackReleated