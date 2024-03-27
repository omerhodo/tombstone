import { useEffect, useState } from 'react';
import { sendData } from '@/firebase';
import Button from '@components/Button';
import Modal from '@components/Modal';
import { useAuth } from '@contexts/AuthContext';
import { notify } from '@components/Toastify';
import { useMessages } from '@/contexts/MessagesContext';

import GoogleSignInButton from '@/components/GoogleSignInButton';

import '@styles/components/new-message.scss';

const NewMessage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [accessSend, setSendAccess] = useState<boolean>(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { messages } = useMessages();

  const { currentUser } = useAuth() ?? { currentUser: null };

  useEffect(() => {
    messages?.forEach((msg) => {
      if (msg.email === currentUser?.email) {
        setSendAccess(false);
      }
    });
  }, [currentUser]);

  const sendMessage = async () => {
    setIsLoading(true);
    const messageTrimmed = message.trim();
    try {
      await sendData('messages', {
        userName: currentUser?.displayName,
        email: currentUser?.email,
        content: messageTrimmed,
        createdAt: new Date(),
      });
      notify('Mesajınız başarıyla gönderildi');
    } catch (error) {
      notify('Bir hata oluştu');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    sendMessage();
    closeModal();
  };
  return (
    <>
      <Button
        className="container new-message__button"
        text="Yeni Mesaj"
        fontSize="18px"
        width="600px"
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Yeni Mesaj">
        <div className="new-message">
          {accessSend ? (
            <>
              {currentUser ? (
                <>
                  <label className="new-message__name">
                    <span className="new-message__name--info">
                      Mesajınızda görünecek isim:
                    </span>
                    {currentUser?.displayName}
                  </label>
                  <textarea
                    className="new-message__text-area"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mesajınızı Yazınız"
                  />
                  <span className="new-message__warn-text">
                    *Eklenen mesaj daha sonra düzenlenemez ve silinemez.
                  </span>
                  {isLoading ? (
                    <label className="new-message__loading">
                      Mesajınız gönderiliyor...
                    </label>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      text="Mesajı Gönder"
                    ></Button>
                  )}
                </>
              ) : (
                <div className="new-message__warning">
                  <label className="mb-30">
                    Mesaj yazmak için giriş yapınız
                  </label>
                  <GoogleSignInButton />
                </div>
              )}
            </>
          ) : (
            <label className="new-message--access-denied">
              Tek seferlik hakkınızı kullandınız.
            </label>
          )}
        </div>
      </Modal>
    </>
  );
};

export default NewMessage;
