import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
  return (
    <div>
      <ul>
        <li><Link to={`/character/${props.id}`}>{props.name}</Link></li>
      </ul>
    </div>
  );
}

export default Character;