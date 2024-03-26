import { useState } from 'react';
import { sendData } from '@/firebase';
import Button from '@components/Button';
import Modal from '@components/Modal';
import { useAuth } from '@contexts/AuthContext';

import '@styles/components/new-message.scss';

const NewMessage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string>('');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { currentUser } = useAuth() ?? { currentUser: null };

  const sendMessage = async () => {
    await sendData('messages', {
      userName: currentUser?.displayName,
      email: currentUser?.email,
      content: message,
    });
  };

  const handleSubmit = () => {
    sendMessage();
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        className="container mb-60 is-cursor-pointer"
        text="Yeni Mesaj"
        fontSize="20px"
        fontWeight="400"
        width="600px"
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Yeni Mesaj">
        <div className="new-message">
          {currentUser ? (
            <>
              <label className="new-message__name">
                <span className="mr-5">Mesajınızda görünecek isim:</span>
                {currentUser?.displayName}
              </label>
              <textarea
                className="new-message__text-area"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınızı Yazınız"
              />
              <Button onClick={handleSubmit} text="Mesajı Gönder"></Button>
            </>
          ) : (
            <>
              <label className="new-message__warning">
                Mesaj yazmak için giriş yapınız
              </label>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default NewMessage;
