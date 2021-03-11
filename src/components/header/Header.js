 
import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import WhatshotIcon from '@material-ui/icons/Whatshot';

 function Header({backbutton}) {
   
     return (
        <div class="header">
            <Link to="/">
                 <IconButton  >
                     <WhatshotIcon   fontSize="large" className="header__icon pink__color"/>
            </IconButton>
            </Link>

             <Link to="/likes">
              <IconButton >
                  <StarIcon  fontSize="large" className="header__icon " />

              </IconButton>
            </Link>

               <Link to="/chat">
              <IconButton >
                  <ForumIcon fontSize="large" className="header__icon "/>

              </IconButton>
            </Link>

            <Link to="/profil">
                <IconButton >
                <PersonIcon fontSize="large" className="header__icon"/>
                 </IconButton>
              </Link>
            {/* )
            } */}
        </div> 
     )
 }

 export default Header