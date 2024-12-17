import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from "react-router-dom";
import data from './components/Data.json'
import './Description.css'

const Description = () => {
    const location = useLocation();
    const { selectedDisease } = location.state || {};
  return (
    <div>
    <Navbar/>
    <div className='description-box'>
    <h2>Description</h2>
    {
        data
        .filter((Data) => Data.DISEASE === selectedDisease)
        .map((filteredData)=>(
            <div className='description' key={filteredData.id}>
            <p>{filteredData.DESCRIPTION}</p>
            </div>
        ))
    }

    </div>
      
    </div>
  )
}

export default Description
