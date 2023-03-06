import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './Restreview.css'

function Restreview({review}) {
    console.log(review);

    const [open, setOpen] = useState(false);

  return (
    <div>
        <Button className='mt-2'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='info'
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              {
                review.map(item=>(
                    <div className='review'>
                        <h4>{item.name}</h4>
                        <p>Rating: {item.rating}</p>
                        <p>{item.date}</p>
                        <h7>{item.comments}</h7>
                    </div>
                ))
              }
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Restreview