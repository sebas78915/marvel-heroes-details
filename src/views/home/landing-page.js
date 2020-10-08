import React from 'react';
import { changePage } from '../../utils/change-page';

export default function LandingPage(props) {
  return (
    <>
      <button onClick={() => changePage('characters', props)}>Go to characters</button>
      <button onClick={() => changePage('comics', props)}>Go to comics</button>
    </>
  )
}