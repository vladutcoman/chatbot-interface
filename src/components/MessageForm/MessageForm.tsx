import { useRef } from 'react';
import { ENTER_KEY } from '../../constants/constants';
import './MessageForm.css';

function MessageForm(props: any) {
  const messageInputRef = useRef(null);

  function handleKeyPress(event: any): void {
    if (event.key === ENTER_KEY) props.onSendMessage(messageInputRef)
  }

  return (
    <div className="content__footer">
      <div className="sendNewMessage">
        <input
          type="text"
          placeholder="Type a message here"
          ref={messageInputRef}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <button 
          className="btnSendMsg"
          id="sendMsgBtn"
          onClick={() => props.onSendMessage(messageInputRef)}
          onKeyPress={(event) => handleKeyPress(event)}>
          &uarr;
        </button>
      </div>
    </div>
  );
}

export default MessageForm;
