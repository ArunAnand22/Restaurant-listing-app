import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {

  const urlParams = useParams();
  console.log(urlParams.id);

  //Create a state
  const [AllRestaurants,setAllRestaurants] = useState([])

  //To fetch data
  const getRestaurants = async()=>{
      await fetch('/restaurants.json').then((data)=>{
          data.json().then(
              (result)=>{
                  setAllRestaurants(result.restaurants)
              }
          )
      })
  }
  // console.log(AllRestaurants);

  useEffect(()=>{
      getRestaurants()
  },[])

  const viewrest = AllRestaurants.find(item=>item.id==urlParams.id)
  console.log(viewrest);

  return (
    <>
      {
        viewrest?(
          <Row className='m-3'>
            <Col md={4}>
            <Image src={viewrest.photograph} fluid/>
            </Col>

            <Col md={7}>
            <ListGroup>
              <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
              <ListGroup.Item>{viewrest.cuisine_type}</ListGroup.Item>
              <ListGroup.Item><h3>{viewrest.neighborhood}</h3></ListGroup.Item>
              <ListGroup.Item><h3>{viewrest.address}</h3></ListGroup.Item>

              <ListGroup.Item><Restop operate={viewrest.operating_hours}/></ListGroup.Item>
              <Restreview review={viewrest.reviews}/>
              </ListGroup>
            </Col>

          </Row>
        ):'null'
      }  
    </>
  )
}

export default Viewrest