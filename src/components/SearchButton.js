import React, {useState} from 'react'
import { Input } from 'antd'

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
    <Search placeholder="Enter artist name" allowClear onSearch={fetchData} style={{ width: 300 }} onChange={handleOnChange} />
      {
        albums.length > 1 && albums.map(album => {
          return <div>{album.artistName}</div>
        })
      }
    </>
  )
}

export default SearchButton