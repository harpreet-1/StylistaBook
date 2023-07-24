import React,{useEffect,useState} from 'react'
import "./SaloonService.css"
import { Link } from "react-router-dom";

function SaloonService() {
    const[stylistdetails,setStylistdetails]=useState([])

    const handleDivClick = (value) => {
        console.log('Clicked div with key:', value);
      };

      const Fetchdetails=async()=>{
        try {
            let response=await fetch("https://stylistabookbackend-production.up.railway.app/service/")
            response=await response.json()
            setStylistdetails(response)
        } catch (error) {
            console.log(error.message)
        }
      }
      useEffect(()=>{
         Fetchdetails()
      },[])
      console.log(stylistdetails)

  return (
    <div>
      {stylistdetails.map((ele,index)=>(
        <div  key={ele._id} className='saloonposters' onClick={handleDivClick(ele.stylistId._id)} >
        <div className='saloondiv'>
         <div className="reviewdiv">
         <p className="rating">4.9</p>
          <p className="noofreviews">135 reviews</p>
         </div>
        <img src={ele.image} alt="error" />
        </div>
        <div className='titlebook'>
        <Link to={`/details/${ele._id}-${ele.stylistId._id}-${ele.stylistId.salonName}`}>
        <h2>{ele.stylistId.salonName}</h2>
        </Link>
          <p id='titlebookp'>{ele.stylistId.address}</p>
          <p>{ele.description}</p>
          <div className='bookmain'>
              <p className='servicetitle'>{ele.name}</p>
              <p className='servicetitle' >stylist:{ele.stylistId.name}</p>
              <p className='servicetitle'>RS {ele.pricing}</p>
              <p className='servicetitle'>Duration:{ele.duration}</p>
          </div>
          
        </div>
        
        </div>
      ))}
      
    </div>
  )
}

export default SaloonService
