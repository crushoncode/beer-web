import React from 'react';

import Beer from './Beer';

const Beers = (props) => {
  console.log(props)
  console.log(props.props.beers)
  console.log(props.beers)
  const beerElements = props.props.beers.map((beer) => {
    return <Beer key={beer.id} beer={beer} />
  })

  return <div className="card-group beers-list">{beerElements}</div>;
}

export default Beers;