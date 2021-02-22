
import React, {useState, useEffect } from 'react';
import "./TinderCard.css";
import database from "./firebase";
import TinderCards from "react-tinder-card";




function TinderCard() {
  
    

    const [people, setPeople] = useState([

        // {
        // name: 'steve job',
        // url: 'https://belgium-iphone.lesoir.be/wp-content/uploads/sites/73/2015/02/SteveJobsCloseUp.jpg'
        // },
        // {
        //     name: 'Elone musk',
        //     url: 'https://media.lesechos.com/api/v1/images/view/5f3f5be68fe56f0be8160fab/1280x720/0603734518167-web-tete.jpg'   
        // }
    ]);

    useEffect(() => {


    const unsubscrible =   database.collection("people")
                .onSnapshot((snapshot) =>
                 setPeople(
            snapshot.docs.map((doc) => doc.data())));

            return () => {
                unsubscrible();
            }
    }, []);

    return (
      
        <div>

              <div className="tinderCards__container">

            {people.map(person=> (
                <TinderCards
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
       
                
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCards>
            ))}
        </div>
        </div>
    )
   
}

export default TinderCard
