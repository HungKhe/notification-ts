import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
interface Props {
  toggleModal: boolean;
  loading: boolean;
  confirmActionFromProps: (confirm: boolean) => void;
}
const ModalConfirm: React.FC<Props> = props => {
  const { toggleModal, loading, confirmActionFromProps } = props;
  const [stToggleModal, setToggleModal] = useState<boolean>(toggleModal);
  const handleClose = () => {
    setToggleModal(false);
    confirmActionFromProps(false);
  };
  const handleConfirm = () => {
    confirmActionFromProps(true);
  } 
  useEffect(() => {
    console.log('toggleModal: ', toggleModal)
    setToggleModal(toggleModal);
  }, [toggleModal]);
  return (
    <Modal className="pageModal" show={stToggleModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="textStatus">Bạn thật sựa muốn xóa thông báo đã chọn?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button disabled={loading} variant="primary" onClick={handleConfirm}>
          {loading ? "Vui lòng đợi..." : "Xóa"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalConfirm;
