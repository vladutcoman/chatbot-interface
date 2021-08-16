import ChatBody from '../../components/ChatBody/ChatBody';
import ChatUser from '../../components/ChatUser/ChatUser';
import MessageForm from '../../components/MessageForm/MessageForm';
import './ChatBot.css';

function ChatBot() {
  return (
    <div className="ChatBot">
      <div className="ChatContent">
        <ChatUser />
        <ChatBody />
        <MessageForm />  
      </div>
    </div>
  )
}

export default ChatBot;