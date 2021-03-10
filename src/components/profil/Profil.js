import React,  {useState, useEffect } from 'react';
import './Profil.css';
import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';

function Profil() {
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
    const [counter, setCounter] = useState(3600);
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    // counter > 60 && setInterval(() =>  setState.minutes(counter -1000), 60000);
    timeLeft = {
        days: Math.floor(counter / (1000 * 60 * 60 * 24)),
        hours: Math.floor((counter / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((counter / 1000 / 60) % 60),
        seconds: Math.floor((counter / 1000) % 60)
      };
      return () => clearInterval(timer);
      }, [counter]);
    return (
    <div className="profil__ctn">
        <div className="profil__header">
                <div >
                    <div className="profil_picture" > 
                    <IconButton className="btn__pen">
                    <CreateIcon  className="pen__icon" />
                    
                </IconButton>
                </div>
                <div className="profil__detail">
                    <h2 className="profil_name">Kate, 34</h2>
                    <p className="profil_city">Paris, France</p>
                </div>
            </div>
        </div>         
            <div className="profil__btnCtn">
                <div className="group__btntext">
                <IconButton>
                    <SettingsIcon fontSize="large" className="setting__icon" />
                    
                </IconButton>
                <h5 className="profil__textbtn">REGLAGES</h5>

                </div>
               
                <div className="group__btntext">
              <IconButton className="camera_btn">
                    <PhotoCameraIcon className="camera__icon" />  
                    </IconButton>
                    <IconButton className="camera__btnAdd" >                     
                        <AddIcon  className="cameraplus__icon" />              
                </IconButton>
                    <h5 className="profil__textbtn">AJOUTER MEDIA</h5>
                </div>
                <div className="group__btntext">
                    <IconButton >
                        
                    <SecurityIcon fontSize="large" className="security__icon" />
                   
                </IconButton>
                    <h5 className="profil__textbtn">SECURITE</h5>
                    </div>
            </div>
            <div className="tip__btn">
                <p>Conseil: 5 photos, c'est idéal</p>
                <IconButton >                     
                    <AddIcon fontSize="small" className="plus__icon" />              
                </IconButton>
            </div>
            <div className="profil__gold">
                <div>
                    <div className="tinder__logoGold">
                        <h2>tinder <i className="gold__logo">GOLD</i></h2> 
                        <hr className="underline__gold"/>
                    </div>
                <h4><b><i>50% DE REMISE LES 3 PERMIERS MOIS</i></b></h4>
                <IconButton className="premium__button">PASSER A TINDER GOLD</IconButton>
                    <p className="profil__timestamp">Se termine dans { Math.floor(counter/3600) }HH{Math.floor( Math.floor((14400 - (Math.floor(counter/3600)* 3600))/60)-1) }MM{counter}SS</p>
                </div>
            </div>             
     </div>
    )
}

export default Profil
