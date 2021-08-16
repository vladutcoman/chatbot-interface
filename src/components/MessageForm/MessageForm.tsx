import './MessageForm.css';

function MessageForm() {
  return (
    <div className="content__footer">
      <div className="sendNewMessage">
        <input
          type="text"
          placeholder="Type a message here"
        />
        <button className="btnSendMsg" id="sendMsgBtn">
          &uarr;
        </button>
      </div>
    </div>
  );
}

export default MessageForm;