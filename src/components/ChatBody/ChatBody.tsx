import './ChatBody.css';
import ChatItem from './ChatItem';

function ChatBody(props: any) {
  return (
    <div className="content__body">
    <div className="chat__items">
      {props.chatItms.map((itm: any, index: any) => {
        return (
          <ChatItem
            animationDelay={index + 2}
            key={itm.key}
            user={itm.type ? itm.type : "me"}
            msg={itm.msg}
            image={itm.image}
          />
        );
      })}
      {/* <div ref={this.messagesEndRef} /> */}
    </div>
    </div>
  );
}

export default ChatBody;