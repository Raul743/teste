import React, { useState, FC } from 'react';
import { Modal } from 'reactstrap';
type ToggleBetweenModalModalProps = {
  title: string;
  buttonClose: string;
  buttonSave: string;
  buttonName: string;
  children: JSX.Element | React.ReactChild;
};

export const ToggleBetweenModal: React.FC<ToggleBetweenModalModalProps> = ({
  title,
  buttonName,
  children,
}) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          data-bs-toggle="modal"
          data-bs-target="#firstmodal"
        >
          Open First Modal
        </button>

        {/*<!-- First modal dialog -->*/}
        <div
          className="modal fade"
          id="firstmodal"
          aria-labelledby="..."
          tabIndex={-1}
          style={{ display: 'none;' }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal 1</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Show a second modal and hide this one with the button below.</p>
              </div>
              <div className="modal-footer">
                {/*<!-- Toogle to second dialog -->*/}
                <button
                  className="btn btn-primary"
                  data-bs-target="#secondmodal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Open Second Modal
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Second modal dialog -->*/}
        <div
          className="modal fade"
          id="secondmodal"
          aria-labelledby="..."
          tabIndex={-1}
          style={{ display: 'none;' }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal 2</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Hide this modal and show the first with the button below.</p>
              </div>
              <div className="modal-footer">
                {/* <!-- Toogle to first dialog, `data-bs-dismiss` attribute can be omitted - clicking on link will close dialog anyway -->*/}
                <button
                  className="btn btn-primary"
                  data-bs-target="#firstmodal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Back to First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
