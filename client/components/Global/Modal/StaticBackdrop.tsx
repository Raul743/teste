import React, { useState } from 'react';
import { Modal } from 'reactstrap';
type StaticBackdropModalProps = {
  title: string;
  buttonClose: string;
  buttonSave: string;
  buttonName: string;
  children: JSX.Element | React.ReactChild;
};

export const StaticBackdrop: React.FC<StaticBackdropModalProps> = ({
  title,
  buttonClose,
  buttonName,
  buttonSave,
  children,
}) => {
  const [modal_backdrop, setmodal_backdrop] = useState(false);

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add('no_padding');
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary waves-effect waves-light"
        onClick={() => {
          tog_backdrop();
        }}
        data-toggle="modal"
      >
        {buttonName}
      </button>
      <Modal
        isOpen={modal_backdrop}
        toggle={() => {
          tog_backdrop();
        }}
        scrollable={true}
        id="staticBackdrop"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            {title}
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_backdrop(false);
            }}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              setmodal_backdrop(false);
            }}
          >
            {buttonClose}
          </button>
          <button type="button" className="btn btn-primary">
            {buttonSave}
          </button>
        </div>
      </Modal>
    </>
  );
};
