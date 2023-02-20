import React from 'react';
import ChatItem from './ChatItem';
import './ChatBody.css';

function ChatBody(props: any) {
  return (
    <div className='content__body'>
      <div className='chat__items'>
        {props.chatItms.map((itm: any, index: any) => {
          return (
            <ChatItem
              animationDelay={index + 2}
              key={itm.key}
              user={itm.type ? itm.type : 'me'}
              msg={itm.message}
              image={itm.image}
            />
          );
        })}
      </div>
      <div ref={props.messagesEndRef} />
    </div>
  );
}

export default ChatBody;
