import { Modal, Image } from "react-bootstrap"
import { useState } from "react"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

   const {modal, handleModalClick} = useBebidas()

   console.log(modal, handleModalClick);



  return (
    <Modal show={modal} onHide={handleModalClick}>

        <Modal.Body>
            Cuerpo de Modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida