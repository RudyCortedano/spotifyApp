import React from 'react'

const ArtistAlbumCard = ({album}) => {

  const yearReleaseDate = new Date(album.release_date).getFullYear()
  return (
    <article className='albumCard__card'>
      <header>
        <img className='albumCard__image' src={album.images[0].url} alt="" />
      </header>
      <section>
       <h4>{album.name}</h4>
        <span>{yearReleaseDate}</span>
      </section>
    </article>
  )
}

export default ArtistAlbumCard