import { useState } from "react";
import JobsPage from "./components/JobsPage";
import ApplicationForm from "./components/ApplicationForm";
import SuccessModal from "./components/SuccessModal";

const JOBS = [
  {
    id: 0,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full Time",
    description: "Build pixel-perfect interfaces and shape the future of our product experience.",
  },
  {
    id: 1,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Remote",
    description: "Design and scale the APIs and services that power millions of users worldwide.",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Mumbai, India",
    type: "Hybrid",
    description: "Craft intuitive user experiences from first concept through final pixel.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Pune, India",
    type: "Full Time",
    description: "Maintain, optimize and evolve the infrastructure that keeps everything running.",
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Mumbai, India",
    type: "Full Time",
    description: "Drive user acquisition and retention strategies across all our channels.",
  },
];

export default function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  const handleSubmitSuccess = () => {
    setSubmitted(true);
  };

  const handleBackAfterSuccess = () => {
    setSubmitted(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {!selectedJob ? (
        <JobsPage jobs={JOBS} onApply={handleApply} />
      ) : (
        <ApplicationForm
          job={selectedJob}
          onBack={handleBack}
          onSubmitSuccess={handleSubmitSuccess}
        />
      )}
      {submitted && (
        <SuccessModal onBack={handleBackAfterSuccess} />
      )}
    </div>
  );
}
