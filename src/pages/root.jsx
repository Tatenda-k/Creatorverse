import React from 'react'
import {Outlet,Link}  from "react-router-dom"



export default function Root(){

    return(
        <>
        <div id='topbar'>
        <h1 id='creatorVerse'>CREATORVERSE</h1>
        <div className='header-btn'>
            <button>
                <Link to={``}>
                SHOW ALL CREATORS
                </Link>
            </button>     
            <button>
                <Link to={`addCreator`}>               
                 ADD A CREATOR
                </Link>
            </button>
        </div>
        </div>
        <div id="page">
            <Outlet/>
        </div>
        </>
    )
}