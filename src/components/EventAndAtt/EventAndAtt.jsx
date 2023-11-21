/* eslint-disable react/prop-types */
import { useState } from 'react';
import NewAtt from './NewAtt/NewAtt';

export default function EventAndAtt({ formData, changeHandler }) {
  const [showPopup, setShowPopup] = useState(false);
  const [attachmentsList, setAttachmentsList] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <h1 className="font-weight-bold fs-4 me-auto">Event & Attachments</h1>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={togglePopup}>
            Create
          </button>
          <button type="button" className="btn btn-secondary">
            Manage
          </button>
        </div>
      </div>

      {attachmentsList.length > 0 ? (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Attachments</th>
            </tr>
          </thead>
          <tbody>
            {attachmentsList.map((attachment, index) => (
              <tr key={index}>
                <td>{attachment.name}</td>
                <td>
                  <a href={`path_to_download/${attachment.name}`} download>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        null
      )}

      {showPopup && (
        <NewAtt
          attachmentsList={attachmentsList}
          setAttachmentsList={setAttachmentsList}
          formData={formData}
          changeHandler={changeHandler}
          showPopup={showPopup}
          togglePopup={togglePopup}
        />
      )}
    </div>
  );
}
