import React, {useState} from 'react'
import { Input } from 'antd'
import Card from './Card';

const { Search } = Input;

function SearchButton() {

  const [albums, setAlbums] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = () => {
    if (searchTerm) {
      fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&attribute=artistTerm&limit=200`)
      .then((res) => res.json())
      .then((res) => {
      setAlbums(res.results)
    })
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Search
        placeholder="Enter artist name" style={{ width: 500 }} allowClear onSearch={fetchData} onChange={handleOnChange} />
      
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-10 ml-20">
      {
        albums.length > 1 && albums.map(album => {
          return <Card
            key={album.collectionId}
            imageURL={album.artworkUrl100}
            collectionName={album.collectionName}
            collectionPrice={album.collectionPrice}
            currency={album.currency}
            releaseDate={album.releaseDate}
            artistName={album.artistName}
            trackCount={album.trackCount}
          />
        })
      }
      </div>

    </>
  )
}

export default SearchButton