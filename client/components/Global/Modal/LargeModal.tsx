import React, { useState } from 'react';
import { Modal } from 'reactstrap';
type LargeModalProps = {
  title: string;
  buttonName: string;
  children: JSX.Element | React.ReactChild;
};

export const LargeModal: React.FC<LargeModalProps> = ({ title, buttonName, children }) => {
  const [modal_large, setmodal_large] = useState(false);

  function tog_large() {
    setmodal_large(!modal_large);
    removeBodyCss();
  }
  function removeBodyCss() {
    document.body.classList.add('no_padding');
  }
  return (
    <>
      <button
        type="button"
        onClick={() => {
          tog_large();
        }}
        className="btn btn-light waves-effect"
        data-toggle="modal"
        data-target=".bs-example-modal-lg"
      >
        {buttonName}
      </button>

      <Modal
        size="lg"
        isOpen={modal_large}
        toggle={() => {
          tog_large();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myLargeModalLabel">
            {title}
          </h5>
          <button
            onClick={() => {
              setmodal_large(false);
            }}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </Modal>
    </>
  );
};
