import React, { useState, useEffect } from 'react';
import ConferenceForm from './Conference';
const Chair = () => {
  const [reviewers, setReviewers] = useState([]);
  const [papers, setPapers] = useState([]);
  const [sessions, setSessions] = useState([]);

  const fetchReviewers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/reviewers');
      const data = await response.json();
      setReviewers(data);
    } catch (error) {
      console.error('Error fetching reviewers:', error);
    }
  };

  const fetchPapers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/papers');
      const data = await response.json();
      setPapers(data);
    } catch (error) {
      console.error('Error fetching papers:', error);
    }
  };

  const fetchSessions = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/sessions');
      const data = await response.json();
      setSessions(data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  useEffect(() => {
    fetchReviewers();
    fetchPapers();
    fetchSessions();
  }, []);

  const createSession = async (title, description) => {
    try {
      const response = await fetch('http://localhost:8000/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      setSessions((prevSessions) => [...prevSessions, data]);
    } catch (error) {
      console.error('Error creating session:', error);
    }
  };

  const assignReviewer = async (sessionId, reviewerId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/sessions/${sessionId}/assign-reviewer`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reviewerId }),
      });
      const data = await response.json();
      // Update the sessions state with the updated session data
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session._id === sessionId ? { ...session, reviewer: data.reviewer } : session
        )
      );
    } catch (error) {
      console.error('Error assigning reviewer:', error);
    }
  };

  const submitPaper = async (title, authors, abstract) => {
    try {
      const response = await fetch('http://localhost:8000/api/papers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, authors, abstract }),
      });
      const data = await response.json();
      setPapers((prevPapers) => [...prevPapers, data]);
    } catch (error) {
      console.error('Error submitting paper:', error);
    }
  };

  return (
    <div>
      <h2>Create Session</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const description = e.target.description.value;
          createSession(title, description);
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="description" placeholder="Description" required />
        <button type="submit">Create Session</button>
      </form>

      <h2>Assign Reviewer</h2>
      {sessions.map((session) => (
        <div key={session._id}>
          <h3>{session.title}</h3>
          <select
            onChange={(e) => {
              const reviewerId = e.target.value;
              assignReviewer(session._id, reviewerId);
            }}
          >
            <option value="">Select Reviewer</option>
            {reviewers.map((reviewer) => (
              <option key={reviewer._id} value={reviewer._id}>
                {reviewer.name}
              </option>
            ))}
          </select>
          {session.reviewer && <p>Assigned Reviewer: {session.reviewer.name}</p>}
        </div>
      ))}

      <h2>Submit Paper</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const authors = e.target.authors.value.split(',').map((author) => author.trim());
          const abstract = e.target.abstract.value;
          submitPaper(title, authors, abstract);
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="authors" placeholder="Authors (comma-separated)" required />
        <textarea name="abstract" placeholder="Abstract" required />
        <button type="submit">Submit Paper</button>
      </form>
<ConferenceForm />
     
    </div>
  );
};

export default Chair;
