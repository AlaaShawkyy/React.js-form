/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import EventAndAtt from "./EventAndAtt/EventAndAtt";
import HeaderDetails from "./HeaderDetails";

export default function Form({ formData, setFormData, setFormDataSubmitted }) {
  const [currentStep, setCurrentStep] = useState(1);

  function changeHandler(e, key) {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      setFormData((prev) => ({
        ...prev,
        attachments: {
          ...prev.attachments,
          file: file,
          title: file.name,
        },
      }));
    } else {
      if (key.startsWith("attachments.")) {
        const attachmentKey = key.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          attachments: {
            ...prev.attachments,
            [attachmentKey]: value,
          },
        }));
      } else if (key.startsWith("event.")) {
        const eventKey = key.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          event: {
            ...prev.event,
            [eventKey]: value,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [key]: value,
        }));
      }
    }
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    setCurrentStep(currentStep - 1);
  }

  function submitHandler(e) {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form data:", formData);
  }

  return (
    <form
      action=""
      onSubmit={submitHandler}
      className="d-flex flex-column h-100"
    >
      <div className="flex-grow-1">
        <div className={currentStep === 1 ? "d-block" : "d-none"}>
          <HeaderDetails formData={formData} changeHandler={changeHandler} />
        </div>

        <div className={currentStep === 2 ? "d-block" : "d-none"}>
          <EventAndAtt formData={formData} changeHandler={changeHandler} />
        </div>
      </div>

      <div className="mt-auto">
        <div className="d-flex container mt-5 justify-content-around">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
          <button
            className={`btn btn-secondary bg-secondary text-black fw-bold`}
            onClick={prevStep}
            disabled={currentStep === 1}
            style={{ width: "200px" }}
          >
            Back
          </button>
            </div>
          <div className="col-lg-6 col-sm-12">
          <div className="d-flex  mt-lg-0 mt-sm-5">
            <button
              className={`btn btn-primary me-3 bg-primary text-white fw-bold`}
              type="button"
              onClick={nextStep}
              disabled={currentStep === 2}
              style={{ width: "200px" }}
            >
              Next
            </button>

            <button
              className={`btn btn-success bg-success text-white fw-bold`}
              type="submit"
              style={{ width: "200px" }}
              onClick={() =>{
                setFormDataSubmitted(true)
                window.localStorage.setItem('formData', JSON.stringify(formData))
              }}
            >
              Save & Close
            </button>
            
          </div>
          </div>
          </div>
        </div>
      </div>
    </form>
  );
}
