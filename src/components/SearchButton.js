import React from 'react'
import { Input } from 'antd'

const { Search } = Input;

function SearchButton() {
  const onSearch = value => {
    console.log(value);
  }
  return (
    <Search placeholder="Enter artist name" allowClear onSearch={onSearch} style={{ width: 300 }} />
  )
}

export default SearchButton