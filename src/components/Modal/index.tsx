import { ReactNode, useEffect } from 'react';
import CloseIcon from '@/assets/images/svg/closeIcon.svg';

import '@styles/components/modal.scss';
interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <label className="modal__title">{title}</label>
          <span className="modal__close is-flex-center" onClick={onClose}>
            <img className="modal__close--icon" src={CloseIcon} alt="User" />
          </span>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
