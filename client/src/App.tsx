import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommitteesPage from './pages/CommitteesPage';
import TracksPage from './pages/TracksPage';
import DatesPage from './pages/DatesPage';
import SubmissionPage from './pages/SubmissionPage';
import RegistrationPage from './pages/RegistrationPage';
import VenuePage from './pages/VenuePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorBoundary from './components/common/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="committees" element={<CommitteesPage />} />
            <Route path="tracks" element={<TracksPage />} />
            <Route path="dates" element={<DatesPage />} />
            <Route path="submission" element={<SubmissionPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="venue" element={<VenuePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
