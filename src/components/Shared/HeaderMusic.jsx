import React from 'react'
import { useSelector } from 'react-redux'
import TrackList from './TrackList'

const HeaderMusic = () => {

  const trackPlaylist = useSelector(store => store.tracks)

  return (
      <>
        <input type="checkbox"  id='checkRigth' className='menucheck'/>
        <header className='header__global'>
        <div className='header__content'>
          <h1>Gift Music</h1>
          <div>
            <form>
              <div>
                <label className='header__label' htmlFor="title">Title</label>
                <input className='header__input' type="text" id='title' />
              </div>
              <div>
                <label className='header__label' htmlFor="to">To</label>
                <input className='header__input' type="text" id='to' />
              </div>
              <div>
                <label  className='header__label' htmlFor="message">Message</label>
                <textarea className='header__textarea' id='message' />
              </div>
              <div className='trackList__global'>
                {
                  trackPlaylist.map(track =>(
                    <TrackList track={track} key={track.id} />
                  ))
                }
              </div>
              <button className='header__button'>Create</button>
            </form>
          </div>
        </div>
        </header>
        <label htmlFor="checkRigth" className='exit__menuRigth'></label>
      </>

  )
}

export default HeaderMusic