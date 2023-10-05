import React from 'react'
import TracksCard from '../HomePage.jsx/TracksCard'

const ArtistSongTop = ({tracks}) => {


  return (
    <section className='songTop__init'>
      <h3 className='songTop__title'>Artist´s Top Songs</h3>
      <div>
        {
          tracks?.map(songTop =>(
            <TracksCard key={songTop.id} track={songTop} />
          ))
        }
      </div>
    </section>
  )
}

export default ArtistSongTop