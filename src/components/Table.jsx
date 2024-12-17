import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Table.css'
import Data from './Data.json'

const Table = () => {
  const [disease, setDisease] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  

  const navigate = useNavigate();
  function changeDisease(event) {
    setDisease(event.target.value);
    console.log(disease);
  }

 
  function handleDiseaseSelection(selectedDisease) {
    navigate("/description", { state: { selectedDisease } });
  }

  return (
    <section>
    <div className='search-1'>
      <input className='search' type="text" placeholder='Type To Search' onChange={changeDisease}/>
    </div>
    <div className='table-container'>
        <table>
          <thead className='sticky-header'>
            <tr>
                <th>Disease</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Severity</th>
            </tr>
            </thead>
            <tbody>
            {Data.filter((item)=>{
              return disease.toLowerCase() === '' ? item:item.DISEASE.toLowerCase().includes(disease)
            }).map((item,id) => (
            <tr key={id}>
              <a href='/description' onClick={() => handleDiseaseSelection(item.DISEASE)}><td>{item.DISEASE}</td></a>
              <td>{item.GENDER}</td>
              <td>{item.AGE}</td>
              <td>{item.SEVERITY}</td>
            </tr>
            ))}
            </tbody>
        </table>

    </div>
    </section>
  )
}

export default Table
