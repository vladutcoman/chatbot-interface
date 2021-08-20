import ChatBody from '../../components/ChatBody/ChatBody';
import ChatUser from '../../components/ChatUser/ChatUser';
import MessageForm from '../../components/MessageForm/MessageForm';
import './ChatBot.css';

function ChatBot() {

  let items = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://www.shutterstock.com/image-vector/male-avatar-profile-picture-vector-illustration-221431012",
      type: "",
      msg: "Awesome these days.",
    }
  ];

  function onMsgSend(msg: any) {
    console.log(msg.current.value);
    items.push({
      key: 5,
      image:
        "https://www.shutterstock.com/image-vector/male-avatar-profile-picture-vector-illustration-221431012",
      type: "",
      msg: msg.current.value,
    })
    console.log(items);
    
  }


  return (
    <div className="ChatBot">
      <div className="ChatContent">
        <ChatUser />
        <ChatBody chatItms={items}/>
        <MessageForm onMsgSend={onMsgSend}/>  
      </div>
    </div>
  )
}

export default ChatBot;