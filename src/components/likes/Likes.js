import React, { useEffect, useState } from 'react';
import database from "../../firebase";
import './Likes.css';
import Like from '../like/Like';

function Likes() {

    const [likes, setLikes] = useState([

    ]);
   
    useEffect(() => {
        const unsubscrible = database.collection("likes")
            .onSnapshot((snapshot) => {
                setLikes(snapshot.docs.map((doc) => doc.data()))

            });
        return () => {
            unsubscrible();
        }
    }, []);

    return (
        <div>
            <div className="likes__title">
                <p>Passer à Tinder Gold pour voir les personnes qui vous ont déjà liké(e).</p>
            </div>
        {
            likes.map((like, index) => {
                return (
                
                 <Like
                key= {index}
                url={like.url}
                status={like.status}
                online={like.online} />        
                )
            })
            }
       </div>
    )
}

export default Likes
