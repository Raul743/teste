import React, { useState } from 'react';
import { Modal } from 'reactstrap';
type SmallModalProps = {
  title: string;
  buttonName: string;
  children: JSX.Element | React.ReactChild;
};

export const SmallModal: React.FC<SmallModalProps> = ({ title,buttonName, children }) => {
  const [modal_small, setmodal_small] = useState(false);

  function tog_small() {
    setmodal_small(!modal_small);
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
          tog_small();
        }}
        className="btn btn-success waves-effect waves-light"
        data-toggle="modal"
        data-target=".bs-example-modal-sm"
      >
        {buttonName}
      </button>
      <Modal
        size="sm"
        isOpen={modal_small}
        toggle={() => {
          tog_small();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="mySmallModalLabel">
            {title}
          </h5>
          <button
            onClick={() => {
              setmodal_small(false);
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
