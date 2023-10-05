import React from 'react'
import ArtistAlbumCard from './ArtistAlbumCard'

const ArtistAlbum = ({albums}) => {
  return (
    <div>
      <section className='artistAlbum__init'>
        <h3 className='artistAlbum__title'>Artist Album</h3>
        <div className='artistAlbum__cards'>
          {
            albums?.map(album =>(
              <ArtistAlbumCard key={album.id} album={album}/>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default ArtistAlbum