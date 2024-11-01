import styles from './Logout.module.css';
import { useMediaQuery } from 'react-responsive';

import FormButton from '../common/FormButton/FormButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/Auth/operations';
import { Icon } from '../../Icons';
import useMedia from '../../hooks/useMedia';

const Logout = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { isMobile } = useMedia();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const addCloseEvent = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', addCloseEvent);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', addCloseEvent);
    };
  }, [closeModal]);

  const closeOnClickOutside = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const screenCondition = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className={styles.logout} onClick={closeOnClickOutside}>
      <div className={styles.logoutModal}>
        {!isMobile && (
          <div className={styles.close} onClick={() => closeModal()}>
            {/* Insert icon or "X" text for close button */}
          </div>
        )}

        {screenCondition && (
          <Icon id="#icon-logo_tab_desk" className={styles.homeIcon} />
        )}

        <p>Are you sure you want to log out?</p>

        <div className={styles.button}>
          <FormButton
            type={'button'}
            text={'Logout'}
            variant={'multiColorButton'}
            handlerFunction={() => dispatch(logout())}
          />
          <FormButton
            type={'button'}
            text={'Cancel'}
            variant={'whiteButton'}
            handlerFunction={() => closeModal()}
          />
        </div>
      </div>
    </div>
  );
};

export default Logout;
