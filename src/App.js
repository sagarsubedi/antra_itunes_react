import React from 'react'
import './App.css';
import { Col, Row } from 'antd'
import Search from './components/SearchButton'

function App() {
  return (
    <div className="text-center mt-10 h-screen bg-gradient-to-t from-indigo-300 flex-col justify-center items-center">
      <Row className=''>
        <Col span={24}>
          <Search />
        </Col>
      </Row>

      <Row className='mt-40'>
        <Col span={24}>
          <h1 className='uppercase'>Results</h1>
        </Col>
      </Row>
    </div>
  );
}

export default App;
