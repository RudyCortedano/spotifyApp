import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTrack } from '../../store/slices/tracks.slice'

const TrackList = ({track}) => {

  const dispatch = useDispatch()
  
  const handleDelete = () =>{
    dispatch(deleteTrack(track))
  }

  return (
    <section className='tracklist__card'>

      <div className='tracklist__imageInfo'>
        <header>
          <img className='tracklist__image' src={track.album.images[0].url} alt="" />
        </header>
        <article>
          <h4 className='tracklist__name'>{track.name}</h4>
          <ul className='tracklist__list'>
            {
              track.artists.map(artist =>(
                <li className='tracklist__item' key={artist.id}>{artist.name}</li>
              ))
            }
          </ul>
        </article>
      </div>
        <footer onClick={handleDelete}>
        <span className='tracklist__btnDelete'><i className='bx bx-minus-circle'></i></span>
      </footer>


       
    </section>
  )
}

export default TrackList