import React from 'react'
import image from './avocado.jpg'



export default function Homepage() {
    const n = 4;
    const items = Array(n).fill(null);
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>Slider</div>
            <div className='mx-16'>
                <h1>Popular Items</h1>
                <div className='grid grid-cols-3 gap-4'>                            
                    {items.map((_, index) => (
                        <div className='rounded-2xl border-8 border-red-900	p-4'>
                        <img src={image} height={200} width={200} alt='none'/>
                        <div>    
                            <h3>Name {index}</h3>
                            <h5>Restaurant name</h5>
                        </div>
                        <div>price</div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Nisi commodi eveniet odio non. Dolore ex pariatur sequi tempore 
                            velit quae obcaecati, accusamus consequatur similique sint 
                            praesentium doloribus eius dolor. Rerum?
                        </div>
                        <a className='border' href="/">Order Now</a>
                        <button className='border' type="button">add to Cart</button>
                    </div> 
                    ))}      
                </div>
                
            </div>
        </>
  )
}



