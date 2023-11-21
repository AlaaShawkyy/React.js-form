/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function HeaderDetails({formData,changeHandler}) {
  return (
    <form className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label htmlFor="projectTitle">Project Title</label>
            <input type="text" value={formData.title} onChange={(e)=>changeHandler(e,'title')} className="form-control" id="projectTitle" placeholder="Please enter project title" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" value={formData.description} onChange={(e)=>changeHandler(e,'description')} id="description" placeholder="Please enter description"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <input type="text" className="form-control" value={formData.owner} onChange={(e)=>changeHandler(e,'owner')} id="owner" placeholder="Alaa Shawky" />
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select className="form-control" value={formData.currency} onChange={(e)=>changeHandler(e,'currency')} id="currency" placeholder="Please select currency">
              <option value="">Please select currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="precedingDocument">Preceding Document</label>
            <input type="number" value={formData.precedingDocument} onChange={(e)=>changeHandler(e,'precedingDocument')} className="form-control" id="precedingDocument" placeholder="Accepts numbers only" />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select className="form-control" value={formData.department} onChange={(e)=>changeHandler(e,'department')} id="department" placeholder="Please select department">
              <option value="">Please select department</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sourcingStrategy">Sourcing Strategy</label>
            <input type="text" className="form-control" value={formData.sourcingStrategy} onChange={(e)=>changeHandler(e,'sourcingStrategy')} id="sourcingStrategy" placeholder="Please select sourcing strategy" />
          </div>
        </div>
      </div>
    </form>
  );
}
