import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@components/Modal';

const ManifestModal = () => {
  const { t } = useTranslation('general');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    localStorage.setItem('manifestModal', 'true');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const hasBeforeShowed = localStorage.getItem('manifestModal');

  const onLoadShow = () => {
    if (!hasBeforeShowed) {
      setTimeout(() => {
        openModal();
      }, 2000);
    }
  };

  useEffect(() => {
    onLoadShow();
  }, []);

  return (
    <Modal title={t('manifest')} isOpen={isModalOpen} onClose={closeModal}>
      <h1 className="is-flex-center fs-28 mb-30">{t('manifestTitle')}</h1>
      <p className="manifest--description mb-15">{t('manifestFirst')}</p>
      <p className="manifest--description">{t('manifestSecond')}</p>
    </Modal>
  );
};

export default ManifestModal;
