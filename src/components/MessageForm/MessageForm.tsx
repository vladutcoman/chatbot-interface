import { useRef } from 'react';
import './MessageForm.css';

function MessageForm(props: any) {
  const messageInputRef = useRef(null);

  return (
    <div className="content__footer">
      <div className="sendNewMessage">
        <input
          type="text"
          placeholder="Type a message here"
          ref={messageInputRef}
        />
        <button 
          className="btnSendMsg"
          id="sendMsgBtn"
          onClick={() => props.onSendMessage(messageInputRef)}>
          &uarr;
        </button>
      </div>
    </div>
  );
}

export default MessageForm;