
import React from 'react';
import "./Like.css";

function Like({ online, status, url }) {

    return (
        <div className="like__ctn" >
            <img src={url} className="like__img" alt="Photo_like" />
             <div className="like__detail">
                <p className={online ? "like__online": "like__ontline"  }>{online}</p>
                 <p className="like__status">{status}</p>
            </div> 
        </div>
    )
}

export default Like
