import Avatar from '../Avatar/Avatar';
import './ChatUser.css';
import rihanna from '../../assets/images/rihanna.jpeg';
import cent from '../../assets/images/50cent.jpeg';

function ChatUser(props: any) {

  return (
    <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar
            image={props.personality.image}
          />
          <p>{props.personality.name}</p>
          <p> 
            <span className="dropdown">
              <button className="dropbtn">&dArr;</button>
              <span className="dropdown-content">
                <button
                  className={props.personality.image === rihanna ? "disable" : ""}
                  onClick={() => props.onDropdownClick(rihanna)}
                >
                  <Avatar image={rihanna} />
                </button>
                <button 
                  className={props.personality.image === cent ? "disable" : ""}
                  onClick={() => props.onDropdownClick(cent)}
                >
                  <Avatar image={cent} />
                </button>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatUser;