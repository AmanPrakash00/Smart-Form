import React, { useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_BACKEND_URL;

const ViewSubmissions = () => {
  const [email, setEmail] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!email) {
      setError('Please enter an email');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const res = await axios.get(`${API}/api/v1/submissions?email=${email}`);

      setSubmissions(res.data || []);
    } catch (err) {
      setError('Failed to fetch submissions');
      setSubmissions([]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">View Submissions</h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-gray-600 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {submissions.length > 0 ? (
          <div className="grid gap-4">
            {submissions.map((item, index) => (
              <div key={index} className="bg-gray-50 border rounded-md p-4 shadow">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Gender:</strong> {item.gender}</p>
                <p><strong>Mobile:</strong> {item.mobilenumber}</p>
                <p><strong>Message:</strong> {item.message}</p>
              </div>
            ))}
          </div>
        ) : (
          !loading &&
          !error &&
          <p className="text-center text-gray-500">No submissions found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewSubmissions;
