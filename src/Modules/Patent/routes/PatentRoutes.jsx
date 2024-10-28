// PatentRoutes.jsx
import { Route, Routes } from "react-router-dom";
import { Layout } from "../../../components/layout";

// Applicant-related imports
import ApplicantMainDashboard from "../components/Applicant/ApplicantMainDashboard";
import ApplicantDashboard from "../components/Applicant/ApplicantDashboard";
import ViewApplicationsPage from "../components/Applicant/ApplicationView";
import SavedDraftsPage from "../components/Applicant/ApplicationDraft";
import SubmitNewApplication from "../components/Applicant/ApplicantSubmit";
import NotificationsPage from "../components/Applicant/ApplicantNotifications";
import ApplicationForm from "../components/Applicant/ApplicationForm";
import StatusView from "../components/Applicant/StatusView";

// Director-related imports
import DirectorMainDashboard from "../components/Director/DirectorMainDashboard";
import DirectorDashboard from "../components/Director/DirectorDashboard";
import RecentApplications from "../components/Director/RecentApplications";
import FinalReviewApplications from "../components/Director/FinalReviewApplications";
import ReviewedApplications from "../components/Director/ReviewedApplications";
import ActiveApplications from "../components/Director/ActiveApplications";
import FeedbackViewer from "../components/PCCAdmin/FeedbackViewer.jsx";
import ForwardRedirect from "../components/PCCAdmin/ForwardRedirect.jsx";
import ForwardToDirector from "../components/PCCAdmin/ForwardToDirector.jsx";
import ManageAttorney from "../components/PCCAdmin/ManageAttorneyAssignment.jsx";

// PCCAdmin-related imports
import PCCAdminMainDashboard from "../components/PCCAdmin/PCCAdminMainDashboard";
// import PCCAdminDashboard from './components/PCCAdmin/PCCAdminDashboard';
// import ReviewApplication from './components/PCCAdmin/ReviewApplication';
// import AttorneyDetails from "./components/PCCAdmin/AttorneyDetails";
// eslint-disable-next-line import/no-unresolved
// import ManageAttorney from "./components/PCCAdmin/ManageAttorney";
// eslint-disable-next-line import/no-unresolved
import NotifyApplicant from "../components/PCCAdmin/NotifyApplicant";
import PCCAdminDashboard from "../components/PCCAdmin/PCCAdminDashboard.jsx";
// import PCCAdminMainDashboard from "../components/PCCAdmin/PCCAdminMainDashboard";
// import PCCAdminDashboard from '../components/PCCAdmin/PCCAdminDashboard';
// import ReviewApplication from '../components/PCCAdmin/ReviewApplication';
// import AttorneyDetails from "../components/PCCAdmin/AttorneyDetails";
// import ManageAttorney from "../components/PCCAdmin/ManageAttorney";

export default function PatentRoutes() {
  return (
    <Routes>
      {/* Applicant-related routes */}
      <Route
        path="/applicant/dashboard"
        element={
          <Layout>
            <ApplicantDashboard />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <ApplicantMainDashboard />
          </Layout>
        }
      />
      <Route
        path="/viewapplicationspage"
        element={
          <Layout>
            <ViewApplicationsPage />
          </Layout>
        }
      />
      <Route
        path="/applicant/drafts"
        element={
          <Layout>
            <SavedDraftsPage />
          </Layout>
        }
      />
      <Route
        path="/applicant/applications/submit"
        element={
          <Layout>
            <SubmitNewApplication />
          </Layout>
        }
      />
      <Route
        path="/applicant/notifications"
        element={
          <Layout>
            <NotificationsPage />
          </Layout>
        }
      />
      <Route
        path="/applicant/applications/submit/new"
        element={
          <Layout>
            <ApplicationForm />
          </Layout>
        }
      />
      <Route
        path="/applicant/applications/status-view"
        element={
          <Layout>
            <StatusView />
          </Layout>
        }
      />

      {/* Director-related routes */}
      <Route
        path="/directordashboard"
        element={
          <Layout>
            <DirectorMainDashboard />
          </Layout>
        }
      />
      <Route
        path="/director-dashboard"
        element={
          <Layout>
            <DirectorDashboard />
          </Layout>
        }
      />
      <Route
        path="/director/recent"
        element={
          <Layout>
            <RecentApplications />
          </Layout>
        }
      />
      <Route
        path="/director/final-review"
        element={
          <Layout>
            <FinalReviewApplications />
          </Layout>
        }
      />
      <Route
        path="/director/reviewed"
        element={
          <Layout>
            <ReviewedApplications />
          </Layout>
        }
      />
      <Route
        path="/director/active"
        element={
          <Layout>
            <ActiveApplications />
          </Layout>
        }
      />

      {/* PCCAdmin-related routes */}
      <Route
        path="/pccAdmin/"
        element={
          <Layout>
            <PCCAdminMainDashboard />
          </Layout>
        }
      />
      <Route
        path="/pccAdmin/dashboard"
        element={
          <Layout>
            <PCCAdminDashboard />
          </Layout>
        }
      />

      <Route
        path="/pccAdmin/feedbackView"
        element={
          <Layout>
            <FeedbackViewer />
          </Layout>
        }
      />
      <Route
        path="/pccAdmin/forwardToDirector"
        element={
          <Layout>
            <ForwardToDirector />
          </Layout>
        }
      />
      <Route
        path="/pccAdmin/forwardRedirect"
        element={
          <Layout>
            <ForwardRedirect />
          </Layout>
        }
      />
      <Route
        path="/pccAdmin/manageAttorney"
        element={
          <Layout>
            <ManageAttorney />
          </Layout>
        }
      />
      <Route
        path="/pccAdmin/notifyApplicant"
        element={
          <Layout>
            <NotifyApplicant />
          </Layout>
        }
      />
      <Route
        path="/pccAdmin/manage_attorney"
        element={
          <Layout>
            <ManageAttorney />
          </Layout>
        }
      />
      
    </Routes>
  );
}
