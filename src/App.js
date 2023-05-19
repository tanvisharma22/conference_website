import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chair from "./components/Chair";
import PaperSubmissionForm from './components/PaperSubmissionForm';
import AssignReviewerForm from './components/AssignReviewerForm';
import RegisterReviewer from './components/RegisterReviewer';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Chair />} />
       <Route path = "/paper" element={<PaperSubmissionForm />} />
       <Route path = "/review" element={<AssignReviewerForm />} />
        <Route path = "/rreviewer" element={<RegisterReviewer />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
