import React from 'react'
import { Destination } from './assets/Components/Destination';
import { Hero } from './assets/Components/Hero';
import { Property } from './assets/Components/Property';
import { Quick } from './assets/Components/Quick';
import { Demo } from './assets/Components/Demo';

export const Home = () => {
  return (
    <div>
       <Hero></Hero>
    <Destination></Destination>
    <Property></Property>
    <Quick></Quick>
    <Demo></Demo>

    </div>
  )
}
