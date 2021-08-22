import './Avatar.css';

function Avatar(props: any) {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={props.image} alt="#" />
      </div>
    </div>
  );
}

export default Avatar;