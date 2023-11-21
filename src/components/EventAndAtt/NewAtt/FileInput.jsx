/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';

export default function FileInput({ formData, changeHandler }) {
  const fileInput = useRef(null);

  return (
    <div className="container max-width-500px ml-13 mt-4 shadow rounded">
      <div className="bg-light p-3 mb-4 rounded-top">
        <h2>Upload file</h2>
      </div>
      {!formData.attachments.file ? (
        <div className="d-flex flex-column gap-3 p-4 mb-5 rounded">
          <button
            type="button"
            className="btn btn-outline-dark align-self-center p-4 font-weight-bold font-size-sm"
            onClick={() => fileInput.current?.click()}
          >
            <AiOutlineUpload size={33} />
            <p className="font-size-sm">Upload file</p>
            <p className="text-muted font-size-xs">Any file type accepted. Max file size 1mb</p>
          </button>
        </div>
      ) : (
        <div className="position-relative overflow-hidden">
          <p className="font-weight-bold mb-3">{formData.attachments.file.name}</p>
          <div className="text-danger d-flex align-items-center cursor-pointer font-weight-bold font-size-sm px-3" onClick={() => changeHandler({ target: { name: 'attachments.file', files: null } }, 'attachments.file')}>
            <RiCloseLine size={22} /> Delete 
          </div>
        </div>
      )}
      <input
        type="file"
        required
        ref={fileInput}
        onChange={(e) => changeHandler(e, 'attachments.file')}
        className="d-none"
      />
    </div>
  );
}
