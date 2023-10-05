import React from 'react'

const ArtistInfo = ({artist}) => {
  return (
    <div>
      <section className='artistInfo__init'>
        <header className='artistInfo__positionImage'>
          <img className='artistInfo__image' src={artist?.images[0].url} alt="" />     
        </header>
        <article>
          <h3 className='artistInfo__name'>{artist?.name}</h3>
          <ul className='artistInfo__list'>
            <li><strong>Followers: </strong><span>{artist?.followers.total}</span></li>
            <li><strong>Populatity: </strong><span>{artist?.popularity}</span></li>
            <li>
              <strong>Genres: </strong>
              <span>
                <ol className='artistInfo__sublist'>
                    {
                      artist?.genres.map(genre =>(
                        <li key={genre}><span className='artistInfo__sublistIcon'><i class="fa-solid fa-music"></i></span> {genre}</li>
                      ))
                    }
                </ol>
              </span></li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default ArtistInfo