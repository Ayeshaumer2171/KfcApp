import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './KfcCards.css'; // Import your custom CSS

export default function KfcCards({ item, increment }) {
  return (
    <div className='col'>
      <Card className='card'>
        <Card.Img variant='top' src={item.image} alt='kfcCards' className='card-img-top' />
        <Card.Body>
          <Card.Title className='card-title'>{item.title}</Card.Title>
          <Card.Text className='card-text'>{item.desc}</Card.Text>
          <Card.Text className='card-price'>RS: {item.price}</Card.Text>

          {/* <button class="btn btn-primary add-to-cart-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" onClick={() => increment(item)}>Add To Bucket</button> */}
          <button class="btn btn-primary add-to-cart-button" type="button"  onClick={() => increment(item)}>Add To Bucket</button>

        </Card.Body>
      </Card>
    </div>
  );
}
