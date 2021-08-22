import { useRef, useState } from 'react';
import ChatBody from '../../components/ChatBody/ChatBody';
import ChatUser from '../../components/ChatUser/ChatUser';
import MessageForm from '../../components/MessageForm/MessageForm';
import './ChatBot.css';
import rihanna from '../../assets/images/rihanna.jpeg';
import cent from '../../assets/images/50cent.jpeg';
import user from '../../assets/images/user.png';
import { DEFAULT_PERSONALITY, FIRST_MESSAGE, PERSONALITIES_MAP } from '../../constants/constants';
import { Personality } from '../../types/types';

function ChatBot() {

  const [messages, setMessages] = useState([FIRST_MESSAGE]);
  const [msgIndex, setMsgIndex] = useState(1);
  const [personality, setPersonality] = useState(DEFAULT_PERSONALITY);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function scrollDOwn() {
    setTimeout(() => {
      if (messagesEndRef.current !== null) {
        messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }, 300);
  }

  function addToConversation(msg: string, img: any, userType = "") {
    setMsgIndex(msgIndex + 1);
    const newMessage = {
      key: msgIndex,
      image: img,
      type: userType,
      message: msg,
    }
    setMessages(state => [...state, newMessage]);
    console.log(messages);
    
  }

  function changePersonality(image: string) {
    const newPersonality: Personality = {
      name: PERSONALITIES_MAP[image],
      image: image
    }
    setPersonality(newPersonality);
  }


  function onSendMessage(msg: any) {
    if (msg.current.value.trim()) {
      addToConversation(msg.current.value, user);

      setTimeout(() => {
        addToConversation('Response', personality.image, 'other');
      }, 100);

      scrollDOwn();
    }
  }


  return (
    <div className="ChatBot">
      <div className="ChatContent">
        <ChatUser personality={personality}  onDropdownClick={changePersonality}/>
        <ChatBody chatItms={messages} messagesEndRef={messagesEndRef} />
        <MessageForm onSendMessage={onSendMessage} />  
      </div>
    </div>
  )
}

export default ChatBot;