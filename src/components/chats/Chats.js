import React, {useEffect, useState} from 'react';
import './Chats.css';
import Chat from '../chat/Chat';
import Match from '../match/Match';
import Database from "../../firebase";

function Chats() {
    
    const [matchs, setMatchs] = useState([]);
    let nbMatchs = 0;
    let nbMessage = 0;
    
    useEffect(() => {
        const unsubscrible = Database.collection("matchs")
            .onSnapshot((snapshot) => {
                setMatchs(snapshot.docs.map((doc) => doc.data()))

            });
        return () => {
            unsubscrible();
        }
    }, []);

    return (
        <div className="chats__ctn">

            {
                matchs.map((match => {
                    if (match.message.length === 0) {
                        nbMatchs++;
                    }
                    else
                        nbMessage++;
                }))
           } 
    
        <div className="Matchs__title">
                <h6>Nouveaux Matchs  <span className="Matchs__number">{nbMatchs}</span></h6>
         </div>
            <div className="Matchs__list">
                {matchs.map((match, index) => {
  
                    return (match.message.length === 0) ? 
                      
                    < Match
                        key={index}
                        name={match.nom}
                        message={match.message}
                        profilePic={match.url} />
                
                       : null;
                })
                }
            
            </div>

         <div className="Matchs__title">
                <h6>Messages  <span className="Matchs__number">{ nbMessage }</span></h6>
         </div>
            
            <div className="chats">
                {matchs.map((match, index) => {
                    const sendMessageTime = (match.date).toDate().toDateString();             
                    return (match.message.length > 0) ?
                        < Chat
                            key= {index}
                            name={match.nom}
                            message={match.message}
                            timestamp={sendMessageTime}
                            profilePic={match.url} />
                        : null;
                })}
      
            </div> 
            </div>
    )
}

export default Chats
