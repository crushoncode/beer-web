import React from 'react';

const Beer = (props) => {
  const handleDelete = () => {
    console.log('hello from delete beer');
    props.handleDeleteBeer(props.beer.id)
  }
  return (
    <div className="card">
      <h2 className="card-title">{props.beer.name}</h2>
      <p>
        <i>{props.beer.tagline}</i>
      </p>
      <img className="card-img" src={props.beer.imageURL} alt={props.beer.name} />
      <div className="card-body">
        <p>{props.beer.description}</p>
      </div>
      <button className="card-link" onClick={handleDelete} >Delete</button>
    </div>
  );
};

export default Beer;