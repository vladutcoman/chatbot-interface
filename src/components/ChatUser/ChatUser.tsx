import Avatar from '../Avatar/Avatar';
import './ChatUser.css';
import rihanna from '../../assets/images/rihanna.jpeg';
import cent from '../../assets/images/50cent.jpeg';

function ChatUser(props: any) {
  console.log(props.personality)
  return (
    <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar
            image={props.personality.image}
          />
          <p>{props.personality.name}</p>
          <p> 
            <div className="dropdown">
              <button className="dropbtn">&dArr;</button>
              <div className="dropdown-content">
                <a 
                  className={props.personality.image === rihanna ? "disable" : ""}
                  onClick={() => props.onDropdownClick(rihanna)}>
                  <Avatar image={rihanna} />
                </a>
                <a 
                  className={props.personality.image === cent ? "disable" : ""}
                  onClick={() => props.onDropdownClick(cent)}>
                  <Avatar image={cent} />
                </a>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatUser;