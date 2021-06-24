import React, { useState, FC, Children } from 'react';
import { Modal } from 'reactstrap';
type ScrolLableModalProps = {
  title: string;
  buttonClose: string;
  buttonSave: string;
  buttonName: string;
  children: JSX.Element | React.ReactChild;
};

export const ScrolLableModal: React.FC<ScrolLableModalProps> = ({
  title,
  buttonName,
  buttonClose,
  buttonSave,
  children,
}) => {
  const [modal_scroll, setmodal_scroll] = useState(false);

  function tog_scroll() {
    setmodal_scroll(!modal_scroll);
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
          tog_scroll();
        }}
        data-toggle="modal"
      >
        {buttonName}
      </button>
      <Modal
        isOpen={modal_scroll}
        toggle={() => {
          tog_scroll();
        }}
        scrollable={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">{title}</h5>
          <button
            type="button"
            onClick={() => setmodal_scroll(false)}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setmodal_scroll(false)}
            >
              {buttonClose}
            </button>
            <button type="button" className="btn btn-primary">
              {buttonSave}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
