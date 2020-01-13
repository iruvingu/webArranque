import React from 'react';
import spinkit from '../../styles/spinkit.css'

export default function Spinner() {

    return (
        <div className="sk-chase" style={{color: "#070d29"}}>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    )
    
}
