import React, { useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import { RestListAction } from '../actions/restlistAction';
import { useDispatch,useSelector } from 'react-redux';

function Restlist() {
    //To fetch data
    const dispatch=useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    const {restaurantList}=result;
    console.log(restaurantList);

    useEffect(()=>{
        dispatch(RestListAction())
    },[])

  return (
    <Row>
        {
            restaurantList.map((item)=>(
                <RestCard data={item}/>
            ))
        }
    </Row>
  )
}

export default Restlist