import React from 'react'
import './App.css';
import { Col, Row } from 'antd'
import Search from './components/SearchButton'


function App() {
  return (
    <div className="text-center pt-10 bg-indigo-300 flex-col justify-center items-center">
      <Row className=''>
        <Col span={24}>
          <Search />
        </Col>
      </Row>
    </div>
  );
}

export default App;
