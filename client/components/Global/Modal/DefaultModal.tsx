import React, { useState, FC, Children } from 'react';
import { Modal } from 'reactstrap';
type DefaultModalProps = {
  title: string;
  buttonClose: string;
  buttonSave: string;
  buttonName: string;
  children: JSX.Element | React.ReactChild;
};

export const DefaultModal: FC<DefaultModalProps> = ({
  title,
  buttonName,
  buttonSave,
  buttonClose,
  children,
}) => {
  const [modal_standard, setmodal_standard] = useState(false);

  function tog_standard() {
    setmodal_standard(!modal_standard);
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
          tog_standard();
        }}
        className="btn btn-primary waves-effect waves-light"
        data-toggle="modal"
        data-target="#myModal"
      >
        {buttonName}
      </button>

      <Modal
        isOpen={modal_standard}
        toggle={() => {
          tog_standard();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myModalLabel">
            {title}
          </h5>
          <button
            type="button"
            onClick={() => {
              setmodal_standard(false);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>;
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              tog_standard();
            }}
            className="btn btn-secondary waves-effect"
            data-dismiss="modal"
          >
            {buttonClose}
          </button>
          <button type="button" className="btn btn-primary waves-effect waves-light">
            {buttonSave}
          </button>
        </div>
      </Modal>
    </>
  );
};
