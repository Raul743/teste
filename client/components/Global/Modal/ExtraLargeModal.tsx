import React, { useState } from 'react';
import { Modal } from 'reactstrap';
type ExtraLargeModalProps = {
  title: string;
  buttonClose: string;
  buttonSave: string;
  buttonName:string
  children: JSX.Element | React.ReactChild;
};

export const ExtraLargeModal: React.FC<ExtraLargeModalProps> = ({title,buttonName,children}) => {
  
  const [modal_xlarge, setmodal_xlarge] = useState(false)
  const [modal_fullscreen, setmodal_fullscreen] = useState(false)

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }
  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen)
    removeBodyCss()
  }
  
  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge)
    removeBodyCss()
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          tog_xlarge();
        }}
        className="btn btn-primary waves-effect waves-light"
        data-toggle="modal"
        data-target=".bs-example-modal-xl"
      >
        {buttonName}
      </button>
      <Modal
        size="xl"
        isOpen={modal_xlarge}
        toggle={() => {
          tog_fullscreen();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">
            {title}
          </h5>
          <button
            onClick={() => {
              setmodal_xlarge(false);
            }}
            type="button"
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
