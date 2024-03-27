import { useState } from 'react';
import dayjs from 'dayjs';
import { useMessages } from '@contexts/MessagesContext';
import { useTranslation } from 'react-i18next';

import MessageCard from '@components/MessageCard';
import Modal from '@components/Modal';
import Button from '@components/Button';

import '@/styles/components/loadmore.scss';

const LoadMore = () => {
  const { t } = useTranslation('general');
  const { messages, loading } = useMessages();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [visibleMessages, setVisibleMessages] = useState<number>(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filteredMessages = messages
    .filter((message) =>
      message.userName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleMessages);

  const loadMore = () => {
    setVisibleMessages((prevVisibleMessages) => prevVisibleMessages + 10);
  };

  return (
    <div className="container loadmore">
      <Button text="LoadMore" onClick={openModal} width="600px" />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Tüm Mesajlar">
        <input
          type="text"
          className="loadmore__search"
          placeholder="Mesajı yazan kişiyi arayın..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {loading && <p className="loadmore__not-found">Kişi bulunamadı.</p>}
        <div className="loadmore__body">
          {!loading &&
            filteredMessages.map((message, index) => (
              <MessageCard
                key={index}
                name={message.userName}
                content={message.content}
                date={dayjs(message.createdAt.toDate()).format('DD/MM/YYYY')}
              />
            ))}
        </div>
        {visibleMessages < messages.length && (
          <button onClick={loadMore}>{t('loadmore')}</button>
        )}
      </Modal>
    </div>
  );
};

export default LoadMore;
