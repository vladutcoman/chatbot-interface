import { useRef, useState } from 'react';
import ChatBody from '../../components/ChatBody/ChatBody';
import ChatUser from '../../components/ChatUser/ChatUser';
import MessageForm from '../../components/MessageForm/MessageForm';
import './ChatBot.css';
import user from '../../assets/images/user.png';
import { DEFAULT_PERSONALITY, FIRST_MESSAGE, PERSONALITIES_MAP } from '../../constants/constants';
import { Personality } from '../../types/types';

function ChatBot() {
  const [messages, setMessages] = useState([FIRST_MESSAGE]);
  const [personality, setPersonality] = useState(DEFAULT_PERSONALITY);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  function changePersonality(image: string) {
    const newPersonality: Personality = {
      name: PERSONALITIES_MAP[image],
      image: image
    }
    setPersonality(newPersonality);
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

  function onSendMessage(msg: any) {
    if (msg.current.value.trim()) {
      const key = messages.length;
      addToConversation(msg.current.value, user, key);

      setTimeout(() => {
        addToConversation('Response', personality.image, key + 1, 'other');
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