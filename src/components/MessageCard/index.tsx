import './message-card.scss';

const MessageCard = () => {
  return (
    <div className="message-card">
      <div className="message-card__header mb-15">
        <img
          className="message-card__header--avatar"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <h2 className="message-card__header--title">John Doe</h2>
      </div>
      <div className="message-card__body">
        <p className="message-card__body--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio vitae felis.
        </p>
      </div>
      <div className="message-card__footer">
        <span className="message-card__footer--date">12.01.2025</span>
      </div>
    </div>
  );
};

export default MessageCard;
