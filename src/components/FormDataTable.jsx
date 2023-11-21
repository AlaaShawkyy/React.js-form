/* eslint-disable react/prop-types */

export default function FormDataTable({ formData }) {
  const renderAttachments = () => {
    if (formData.attachments.file) {
      return (
        <tr>
          <td>Attachment Title</td>
          <td>{formData.attachments.title}</td>
        </tr>
      );
    } else {
      return <tr>No Attachments</tr>;
    }
  };

  const renderEvents = () => {
    if (formData.event.type) {
      return (
        <>
          <tr>
            <td>Event Type</td>
            <td>{formData.event.type}</td>
          </tr>
          <tr>
            <td>Event Title</td>
            <td>{formData.event.title}</td>
          </tr>
          <tr>
            <td>Event Description</td>
            <td>{formData.event.description}</td>
          </tr>
        </>
      );
    } else {
      return <tr>No Events</tr>;
    }
  };

  return (
    
    <table className="table">
    <tbody>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Owner</th>
        <th>Currency</th>
        <th>Preceding Document</th>
        <th>Department</th>
        <th>Sourcing Strategy</th>
      </tr>
      <tr>
        <td>{formData.title}</td>
        <td>{formData.description}</td>
        <td>{formData.owner}</td>
        <td>{formData.currency}</td>
        <td>{formData.precedingDocument}</td>
        <td>{formData.department}</td>
        <td>{formData.sourcingStrategy}</td>
      </tr>
      {/* Render attachments if available */}
      {formData.attachments.file && (
        <>
          <tr>
            <td colSpan="7">Attachment Title: {formData.attachments.title}</td>
          </tr>
        </>
      )}
      {/* Render events if available */}
      {formData.event.type && (
        <>
          <tr>
            <td colSpan="7">Event Type: {formData.event.type}</td>
          </tr>
          <tr>
            <td colSpan="7">Event Title: {formData.event.title}</td>
          </tr>
          <tr>
            <td colSpan="7">Event Sourcing Strategy: {formData.event.sourcingStrategy}</td>
          </tr>
          <tr>
            <td colSpan="7">Event Description: {formData.event.description}</td>
          </tr>
          {renderAttachments()}
          {renderEvents()}
        </>
      )}
    </tbody>
  </table>
  
  );
}
