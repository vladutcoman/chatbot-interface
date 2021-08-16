import Avatar from '../Avatar/Avatar';
import './ChatBody.css';

function ChatItem(props: any) {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{props.msg}</div>
      </div>
      <Avatar isOnline="active" image={props.image} />
    </div>
  );
}

export default ChatItem;