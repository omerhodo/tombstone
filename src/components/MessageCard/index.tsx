import { useState } from 'react';
import Modal from '@components/Modal';

import '@styles/components/message-card.scss';
import Tree from '@/assets/images/main/tree.svg';

interface MessageCardProps {
  name: string;
  content: string;
  date: string;
}

const MessageCard = ({ name, content, date }: MessageCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const title = `${name} tarafından gönderilen mesaj`;

  return (
    <>
      <div className="message-card is-glass" onClick={openModal}>
        <div className="message-card__header mb-20">
          <img className="message-card__header--avatar" src={Tree} alt="User" />
          <h2 className="message-card__header--title">{name}</h2>
        </div>
        <div className="message-card__body">
          <p className="message-card__body--text">{content}</p>
        </div>
        <div className="message-card__footer">
          <span className="message-card__footer--date">{date}</span>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={title}>
        <div className="message-modal">
          <p className="message-modal__content">{content}</p>
        </div>
      </Modal>
    </>
  );
};

export default MessageCard;
