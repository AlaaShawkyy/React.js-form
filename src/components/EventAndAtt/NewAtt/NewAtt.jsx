/* eslint-disable react/prop-types */
import { useState } from 'react';
import FileInput from './FileInput';

const attachmentTypes = ['Document', 'Event'];
const eventTypes = ['Meeting', 'Seminar', 'Conference'];

export default function NewAtt({attachmentsList, setAttachmentsList,formData, changeHandler, showPopup, togglePopup }) {
  const [attachmentType, setAttachmentType] = useState('');

  const handleTypeChange = (e) => {
    setAttachmentType(e.target.value);
  };
  const updateEvent = (key, value) => {
    changeHandler({ target: { name: `event.${key}`, value } }, `event.${key}`);
  };


  const handleCreateAttachment = () => {
    togglePopup();
    if (attachmentType === 'Document') {
      const newAttachment = { type: attachmentType, name: formData.attachments.title || 'Untitled' };
      setAttachmentsList([...attachmentsList, newAttachment]);
    }
  };
  

  return (
    <div>
      {showPopup && (
        <>
          <div className="modal-backdrop show" style={{ zIndex: '1040' }}></div>
          <div className="modal d-block" style={{ zIndex: '1050' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Attachment</h5>
                  <button type="button" className="btn-close" onClick={togglePopup}></button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Attachment Type</label>
                    <select
                      name="attachmentType"
                      value={attachmentType}
                      onChange={handleTypeChange}
                      className="form-control"
                    >
                      <option value="">Select Attachment Type</option>
                      {attachmentTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  {attachmentType === 'Document' && (
                    <div className="form-group">
                      <label>Upload Document</label>
                      <FileInput formData={formData} changeHandler={changeHandler} />
                    </div>
                  )}
  {attachmentType === 'Event' && (
    <div>
      <div className="form-group">
        <label>Event Title</label>
        <input
          required
          type="text"
          value={formData.event.title} // Update to reference event.title
          onChange={(e) => updateEvent('title', e.target.value)} // Update to update event.title
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Event Type</label>
        <select
          required
          value={formData.event.type} // Update to reference event.type
          onChange={(e) => updateEvent('type', e.target.value)} // Update to update event.type
          className="form-control"
        >
          <option value="">Select Event Type</option>
          {eventTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Sourcing Strategy</label>
        <input
          required
          type="text"
          value={formData.event.sourcingStrategy} // Update to reference event.sourcingStrategy
          onChange={(e) => updateEvent('sourcingStrategy', e.target.value)} // Update to update event.sourcingStrategy
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          required
          value={formData.event.description} // Update to reference event.description
          onChange={(e) => updateEvent('description', e.target.value)} // Update to update event.description
          className="form-control"
          rows="4"
        ></textarea>
      </div>
    </div>
  )}
                  {/* Rest of your content */}
                  <button type="button" className="btn btn-secondary me-2" onClick={togglePopup}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-success" onClick={handleCreateAttachment}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
