import { useRef } from 'react';
import './MessageForm.css';

function MessageForm(props: any) {
  const messageInputRef = useRef(null);

  return (
    <div className="content__footer">
      {/* <form action=""> */}
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            ref={messageInputRef}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={() => props.onMsgSend(messageInputRef)}>
            &uarr;
          </button>
        </div>
      {/* </form> */}
    </div>
  );
}

export default MessageForm;