import React, { useState, FC } from 'react';
import { Modal } from 'reactstrap';
type FullscreenModalProps = {
  title: string;
  buttonClose: string;
  buttonSave: string;
  buttonName:string,
  children: JSX.Element | React.ReactChild;
};
export const FullscreenModal: FC<FullscreenModalProps> = ({
  title,
  buttonClose,
  buttonSave,
  children,
  buttonName
}) => {
  const [modal_fullscreen, setmodal_fullscreen] = useState(false);

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen);
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
          tog_fullscreen();
        }}
        className="btn btn-primary waves-effect waves-light"
        data-toggle="modal"
      >
        {buttonName}
      </button>
      <Modal
        size="xl"
        isOpen={modal_fullscreen}
        toggle={() => {
          tog_fullscreen();
        }}
        className="modal-fullscreen"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalFullscreenLabel">
            {title}
          </h5>

          <button
            type="button"
            className="close"
            data-dismiss="modal"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => tog_fullscreen()}
          ></button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              tog_fullscreen();
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
