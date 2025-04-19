import { useState } from "react";
import axios from "axios";
// require("dotenv").config();
const API = process.env.REACT_APP_BACKEND_URL;

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    mobilenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/v1/create-form`, formData);
      alert("Submitted!");
      setFormData({
        name: "",
        email: "",
        gender: "",
        mobilenumber: "",
        message: "",
      });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Submit Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          className="w-full border p-2 rounded"
          type="tel"
          name="mobilenumber"
          value={formData.mobilenumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <textarea
          className="w-full border p-2 rounded"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
