import { useRef, useState } from 'react';
import { DEFAULT_PERSONALITY, RIRI_FIRST_MESSAGE, PERSONALITIES_MAP, CENT_FIRST_MESSAGE } from '../../constants/constants';
import { Personality } from '../../types/types';
import ChatBody from '../../components/ChatBody/ChatBody';
import ChatUser from '../../components/ChatUser/ChatUser';
import MessageForm from '../../components/MessageForm/MessageForm';
import user from '../../assets/images/user.png';
import * as api from '../../service/api';
import rihanna from '../../assets/images/rihanna.jpeg';
import cent from '../../assets/images/50cent.jpeg';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([RIRI_FIRST_MESSAGE]);
  const [personality, setPersonality] = useState(DEFAULT_PERSONALITY);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  function resetChat(image: string) {
    switch(image) {
      case rihanna:
        setMessages([RIRI_FIRST_MESSAGE]);
        break;
      case cent:
        setMessages([CENT_FIRST_MESSAGE]);
        break;
      default:
        break;
    }
  }

  function changePersonality(image: string) {
    const newPersonality: Personality = {
      name: PERSONALITIES_MAP[image],
      image: image
    }

    // api.changePersonality(PERSONALITIES_MAP[image]).then(
    //   (response) => {
    //     // Do somtheing on succes before updating the interface
    //     setPersonality(newPersonality);
    //     resetChat(image);
    //   },
    //   error => {
    //     // Do somtheing on error or delete this
    //   }
    // );

    // TODO: remove this and uncomment above code
    setPersonality(newPersonality);
    resetChat(image);
  }

  function addToConversation(msg: string, img: any, key: number, userType = "") {
    const newMessage = {
      key: key,
      image: img,
      type: userType,
      message: msg,
    }
    setMessages(state => [...state, newMessage]);
  }

  function scrollDOwn() {
    setTimeout(() => {
      if (messagesEndRef.current !== null) {
        messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }, 300);
  }

  function getPreviousAnswer() {
    return (messages.length === 1) ? "" : messages[messages.length - 1].message;
  }

  function clearInput(msg: any) {
    msg.current.value = '';
  }

  function onSendMessage(msg: any) {
    const message = msg.current.value;
    if (message.trim()) {
      const key = messages.length;
      const previousAnswer = getPreviousAnswer();
      addToConversation(message, user, key);

      // api.askQuestion(message, previousAnswer).then(
      //   (response: any) => {
      //     addToConversation(response.answer, personality.image, key + 1, 'other');
      //     clearInput(msg);
      //   },
      //   error => {
      //     // Do somethinf on error or remove this
      //   }
      // );

      // TODO: remove this and uncomment above code
      setTimeout(() => {
        addToConversation('Vladut is AWESOME', personality.image, key + 1, 'other');
        clearInput(msg);
      }, 200);

      scrollDOwn();
    }
  }


  return (
    <div className="ChatBot">
      <div className="ChatContent">
        <ChatUser 
          personality={personality}  
          onDropdownClick={changePersonality} />
        <ChatBody 
          chatItms={messages}
          messagesEndRef={messagesEndRef} />
        <MessageForm onSendMessage={onSendMessage} />  
      </div>
    </div>
  )
}

export default ChatBot;