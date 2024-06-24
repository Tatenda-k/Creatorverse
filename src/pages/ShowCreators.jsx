import React from 'react'
import CreatorCard from '../components/Card'

function ShowCreator(props){
    // console.log(props)

       return (
    
    <>
    <div className='creators-list'>{
        props.creators.map((creator)=>{
            return(
                <CreatorCard key={creator.id} {...creator}></CreatorCard>
            )
        })
    }



    </div>


    </>)
}

export default ShowCreator