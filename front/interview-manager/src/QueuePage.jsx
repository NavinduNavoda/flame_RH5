// QueuePage.js

import React from 'react';
import './QueuePage.css';

const QueuePage = () => {
  const candidates = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      contactNumber: '123-456-7890',
      queuePosition: 1,
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      contactNumber: '987-654-3210',
      queuePosition: 2,
    },
    // Add more candidates as needed
  ];

  return (
    <div className="queue-page">
      <header>
        <div className="header-buttons">
          <button>Contact Us</button>
          <button>Home</button>
          <button>User Settings</button>
        </div>
      </header>
      <div className="queue-content">
        <h1>Candidate Queue</h1>
        
        <table className="Queue_table">
        <tr>
            <th>Queue Position</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>             
        </tr>
        {candidates.map((candidate) => (
          <tr key={candidate.id} className="candidate-tile">
            {/* <table> */}
                {/* <tr> */}
                    <td>{candidate.queuePosition}</td>
                    <td>{candidate.fullName}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.contactNumber}</td>
                {/* </tr> */}
            {/* </table> */}
          </tr>
        ))}
        </table>
        {/* {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-tile">
            <table>
                <tr>
                    <td>{candidate.queuePosition}</td>
                    <td>{candidate.fullName}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.contactNumber}</td>
                </tr>
            </table>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default QueuePage;
