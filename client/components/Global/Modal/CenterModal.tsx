import React, { useState, FC } from 'react';
import { Modal } from 'reactstrap';
type CenterModalProps = {
  title: string;
  buttonName:string,
  children: JSX.Element | React.ReactChild;
};

export const CenterModal:FC<CenterModalProps> = ({ title,buttonName,children }) => {
  const [modal_center, setmodal_center] = useState(false)
  
  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }
  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary waves-effect waves-light"
        onClick={() => {
          tog_center();
        }}
        data-toggle="modal"
        data-target=".bs-example-modal-center"
      >
        {buttonName}
      </button>
      <Modal
        isOpen={modal_center}
        toggle={() => {
          tog_center();
        }}
        centered={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">{title}</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_center(false);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        {children}
        </div>
      </Modal>
    </>
  );
};
