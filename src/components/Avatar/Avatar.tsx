import './Avatar.css';

function Avatar(props: any) {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={props.image} alt="#" />
      </div>
      {/* <span className={`isOnline ${props.isOnline}`}></span> */}
    </div>
  );
}

export default Avatar;