import React from 'react'
import { useDispatch } from 'react-redux'
import { addTrack } from '../../store/slices/tracks.slice'
import { Link, useNavigate } from 'react-router-dom'

const TracksCard = ({track}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddTrack = () =>{
    dispatch(addTrack(track))
  }

  const handleArtist = (id) =>{
    navigate(`/artist/${id}`)
  }

  return (
    <section className='homepage__allCard'>
      <div className="homepage__imageList__btn">
        <div className="homepage__imageList">          
        <header className='homepage__positionImage'>
          <img className='homepage__image' src={track.album.images[0].url} alt="" />
        </header>
        <article className='homepage__info'>
          <Link className='homepage__link'  to={`/track/${track.id}`}><h3>{track.name}</h3></Link>
          <ul className='homepage__list'>
            {
              track.artists.map(artist =>(
                <li className='homepage__nameArtist' onClick={() => handleArtist(artist.id)} key={artist.id}>{artist.name}</li>
              ))
            }
          </ul>
        </article>
        </div>

        <footer className='homepage__buttonIcon'>
          <a target='_blank' href={track.external_urls.spotify}>
            <span className='homepage__btn'><i className='bx bxl-spotify'></i></span>
          </a>
          <span className='homepage__btn' onClick={handleAddTrack}>
            <i className='bx bx-plus-circle'></i>
          </span>
        </footer>
      </div>

    </section>
  )
}

export default TracksCard