import React from 'react';
import { useRef, useState } from 'react';
import { DEFAULT_PERSONALITY, RIRI_FIRST_MESSAGE, PERSONALITIES_MAP, CENT_FIRST_MESSAGE } from '../../constants/constants';
import { Personality } from '../../types/types';
import ChatBody from '../../components/ChatBody/ChatBody';
import ChatUser from '../../components/ChatUser/ChatUser';
import MessageForm from '../../components/MessageForm/MessageForm';
import user from '../../assets/images/user.png';
import rihanna from '../../assets/images/rihanna.jpeg';
import cent from '../../assets/images/50cent.jpeg';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([RIRI_FIRST_MESSAGE]);
  const [personality, setPersonality] = useState(DEFAULT_PERSONALITY);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  function resetChat(image: string): void {
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

  function changePersonality(image: string): void {
    const newPersonality: Personality = {
      name: PERSONALITIES_MAP[image],
      image: image
    }
    setPersonality(newPersonality);
    resetChat(image);
  }

  function addToConversation(msg: string, img: string, key: number, userType = ''): void {
    const newMessage = {
      key: key,
      image: img,
      type: userType,
      message: msg,
    }
    setMessages(state => [...state, newMessage]);
  }

  function scrollDOwn(): void {
    setTimeout(() => {
      if (messagesEndRef.current !== null) {
        messagesEndRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }
    }, 300);
  }

  function getPreviousAnswer(): string {
    return (messages.length === 1) ? '' : messages[messages.length - 1].message;
  }

  function clearInput(msg: any): void {
    msg.current.value = '';
  }

  function onSendMessage(msg: any): void {
    const message = msg.current.value;
    if (message.trim()) {
      const key = messages.length;
      const previousAnswer = getPreviousAnswer();
      addToConversation(message, user, key);
      setTimeout(() => {
        addToConversation('Vladut is AWESOME', personality.image, key + 1, 'other');
        clearInput(msg);
      }, 200);

      scrollDOwn();
    }
  }

  return (
    <div className='ChatBot'>
      <div className='ChatContent'>
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
