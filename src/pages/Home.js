import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const data = [
    {
        img : "/images/perfume-1.webp"
    },
    {
        img : "/images/watch-1.jpeg"
    },
    {
        img : "/images/bag-1.webp"
    }
]
const Home = () => {
  return (
    <Carousel>

        {
        
            data.map((car)=>(
                <div>
                <img src = {car.img}  />
                </div>
            ))
        }

</Carousel>
  )
}

export default Home