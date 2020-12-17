import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid( {category} ) {
    
    const {data,loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown"> {category} </h3>   
            {loading && <p>Loading</p>}

            <div className="gridCard">                        
                {
                    data.map( img => 
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    )
                }            
            </div>
        </>
    )
}

export default GifGrid