import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState
} from 'react';

import Modal from '../../Modal';
import Options from './Options';
import List from './List';
import Map from './Map';
import Address from './Address';

import { Container } from './styles';

const AddressModal = forwardRef((_, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevPage, setPrevPage] = useState(null);
  const [address, setAddress] = useState(null);
  const modalRef = useRef(null);

  function handlePage(index) {
    setCurrentIndex(index);
  }

  function closeModal() {
    modalRef.current.close();
  }

  useImperativeHandle(ref, () => ({
    openModal() {
      setCurrentIndex(0);

      modalRef.current.open();
    }
  }));

  return (
    <Modal ref={modalRef}>
      <Container className="modal-container">
        <Options
          visible={currentIndex === 0}
          handlePage={handlePage}
          closeModal={closeModal}
        />
        <List
          index={1}
          currentIndex={currentIndex}
          visible={currentIndex === 1}
          setAddress={setAddress}
          handlePage={handlePage}
          setPrevPage={setPrevPage}
        />
        <Map
          address={address}
          visible={currentIndex === 2}
          setAddress={setAddress}
          handlePage={handlePage}
          setPrevPage={setPrevPage}
        />
        <Address
          address={address}
          visible={currentIndex === 3}
          prevPage={prevPage}
          handlePage={handlePage}
        />
      </Container>
    </Modal>
  );
});

export default AddressModal;
