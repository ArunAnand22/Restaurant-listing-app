import React, { useEffect,useState } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';

function Restlist() {

    //Create a state
    const [AllRestaurants,setAllRestaurants] = useState([])

    //To fetch data
    const getRestaurants = async()=>{
        await fetch('./restaurants.json').then((data)=>{
            data.json().then(
                (result)=>{
                    setAllRestaurants(result.restaurants)//[10] values
                }
            )
        })
    }
    console.log(AllRestaurants);

    useEffect(()=>{
        getRestaurants()
    },[])

  return (
    <Row>
        {
            AllRestaurants.map((item)=>(
                <RestCard data={item}/>
            ))
        }
    </Row>
  )
}

export default Restlist