import React, {useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';

function ChatScreen() {
    const [input, setInput]= useState(''); 
    const [messages, setMessages] = useState([
      
        {
            name: 'ellen',
            image:'....',
            message:'hay guys!!'
        },
        {
            name: 'salutttt',
            image:'....',
            message:'hay ladies!!'
        },
        {
            message:'hay boys!!'
        }
    ]);

    const handleSend = e =>{
      e.preventDefault(); 

      setMessages([...messages, {message: input}]);
      setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {
                messages.map(message => (
                    message.name ? (
                    <div className="chatScreen__message">
                          <Avatar className="chat__image" alt={message.name} src={message.image}/>
                        <p className="chatScreen__text">{message.message}</p>
                    </div>  
                    ):(
                        <div className="chatScreen__message">
                      <p className="chatScreen__textUser">{message.message}</p>
                  </div>  

                    )  
                ))
            }
            <div>
                <form className="chatScreen__input">
                    <input 
                    className="chatScreen__inputfield" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                     type="text" placeholder="Rédiger le messsage..." />
                    <button
                     type="submit"
                     onClick={handleSend}
                     className="chatScreen__inputbutton">
                         <SendIcon fontSize="small"/>
                     </button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
