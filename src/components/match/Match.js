import React from 'react';
import "./Match.css";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

function Match({ name, message, profilePic }) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="match">
            <Avatar className="match__image" alt={name} src={profilePic}/>
            <div className="match__details">
                <h2>{name}</h2>
            </div>
        </div>
        </Link>
    )
}

export default Match
