// ApplicantForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const ApplicantForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    jobTitle: '',
    company: '',
    position: '',
    desiredJobTitle: '',
    location: '',
    desiredSalaryRange: '',
    desiredJobLevel: '',
    desiredJobType: '',
    desiredLocationType: '',
    WorkLifeBalance: '',
    CompBenefits: '',
    CareerGrowth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to the parent component
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Applicant Form</h2>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formSkills">
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formJobTitle">
        <Form.Label>Current Job Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formCurrentCompany">
        <Form.Label>Current Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Company name"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formCurrentPosition">
        <Form.Label>Current Position</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Position title"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDesJobTitle">
              <Form.Label>Desired Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your desired Job title"
                name="desiredJobTitle"
                value={formData.desiredJobTitle}
                onChange={handleChange}
              />
      </Form.Group>

      <Form.Group controlId="formLocation">
                    <Form.Label>Preferred Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter preferred Job location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
      </Form.Group>

      <Form.Group controlId="formDesiredSalaryRange">
        <Form.Label>Desired Salary Range</Form.Label>
        <Form.Control
          as="select"
          name="desiredSalaryRange"
          value={formData.desiredSalaryRange}
          onChange={handleChange}
        >
          <option value="">Select Salary Range</option>
          <option value="Less than $30,000">Less than $30,000</option>
          <option value="$30,000 - $50,000">$30,000 - $50,000</option>
          <option value="$50,000 - $70,000">$50,000 - $70,000</option>
          <option value="$70,000 - $100,000">$70,000 - $100,000</option>
          <option value="More than $100,000">More than $100,000</option>
          {/* Add more options as needed */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formDesJobLevel">
              <Form.Label>Desired Job Level</Form.Label>
              <Form.Control
                as="select"
                name="desiredJobLevel"
                value={formData.desiredJobLevel}
                onChange={handleChange}
              >
                <option value="">Select Job Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
                <option value="Executive Level">Executive Level</option>
              </Form.Control>
            </Form.Group>

      <Form.Group controlId="formDesJobType">
              <Form.Label>Desired Job Type</Form.Label>
              <Form.Control
                as="select"
                name="desiredJobType"
                value={formData.desiredJobType}
                onChange={handleChange}
              >
                <option value="">Select Job Type</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Internship</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>

      <Form.Group controlId="formLocationType">
              <Form.Label>Desired Location Type</Form.Label>
              <Form.Control
                as="select"
                name="desiredLocationType"
                value={formData.desiredLocationType}
                onChange={handleChange}
              >
                <option value="">Select Location Type</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>

      <Form.Group controlId="formWorkLifeBalance">
              <Form.Label>Work Life Balance</Form.Label>
              <Form.Control
                as="select"
                name="WorkLifeBalance"
                value={formData.WorkLifeBalance}
                onChange={handleChange}
              >
                <option value="">Rate how important Work Life Balance to you out of 5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
      </Form.Group>

      <Form.Group controlId="formCompBenefits">
                    <Form.Label>Compensation and Benefits</Form.Label>
                    <Form.Control
                      as="select"
                      name="CompBenefits"
                      value={formData.CompBenefits}
                      onChange={handleChange}
                    >
                      <option value="">Rate how important Compensation and Benefits to you out of 5</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                    </Form.Control>
      </Form.Group>

      <Form.Group controlId="formCareerGrowth">
              <Form.Label>Career Opportunities</Form.Label>
                      <Form.Control
                        as="select"
                        name="CareerGrowth"
                        value={formData.CareerGrowth}
                        onChange={handleChange}
                      >
                        <option value="">Rate how important Compensation and Benefits to you out of 5</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                      </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ApplicantForm;
