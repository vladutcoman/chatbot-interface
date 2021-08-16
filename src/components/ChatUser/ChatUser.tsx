import Avatar from '../Avatar/Avatar';
import './ChatUser.css';

function ChatUser() {
  return (
    <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar
            isOnline="active"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
          />
          <p>Tim Hover</p>
          <p> 
            <div className="dropdown">
              <button className="dropbtn">&dArr;</button>
              <div className="dropdown-content">
                <a>
                  <Avatar
                    isOnline="active"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                  />
                  <p>Rihanna</p></a>
                <a>
                  <Avatar
                    isOnline="active"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                  />
                  <p>50 Cent</p></a>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatUser;