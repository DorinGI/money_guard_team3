import Modal from 'react-modal';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import { useDispatch, useSelector } from 'react-redux';
import s from './ModalAddTransaction.module.css';
import {
  selectIsAddModalOpen,
  closeAddModal,
} from '../../../../redux/Modals/slice';

Modal.setAppElement('#root');

function ModalAddTransaction() {
  const dispatch = useDispatch();
  const isAddOpen = useSelector(selectIsAddModalOpen);

  const handleClose = () => {
    dispatch(closeAddModal());
  };

  return (
    <Modal
      isOpen={isAddOpen}
      className={s.modal}
      overlayClassName={s.modal_Wrap}
      onRequestClose={handleClose}
    >
      <div className={s.modal_close} onClick={handleClose}></div>
      {/* <h2>Add transaction</h2> */}
      <AddTransactionForm closeAddModal={handleClose} />
    </Modal>
  );
}

export default ModalAddTransaction;
