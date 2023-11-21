import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import { useState } from "react";
import FormDataTable from "./components/FormDataTable";
import Navbar from "./components/Navbar";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    owner: "",
    currency: "",
    precedingDocument: "",
    department: "",
    sourcingStrategy: "",
    attachments: {
      attachmentType: "document",
      file: "",
      title: "",
    },
    event: {
      attachmentType: "event",
      type: "",
      title: "",
      sourcingStrategy: "",
      description: "",
    },
  });

  const [formDataSubmitted, setFormDataSubmitted] = useState(false);
  return (
    <>
    <Navbar />
    <Form formData={formData} setFormData={setFormData} setFormDataSubmitted={setFormDataSubmitted}  />
    {formDataSubmitted && <FormDataTable formData={formData} />}
    </>
  );
}

export default App;
