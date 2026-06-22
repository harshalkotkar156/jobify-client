import { useState, useRef } from "react";
import ResumeDropzone from "./ResumeDropzone";

const TYPE_COLORS = {
  "Full Time": "bg-blue-100 text-blue-700",
  Remote: "bg-emerald-100 text-emerald-700",
  Hybrid: "bg-violet-100 text-violet-700",
};

const DEPT_COLORS = {
  Engineering: "bg-orange-100 text-orange-700",
  Design: "bg-pink-100 text-pink-700",
  Infrastructure: "bg-slate-100 text-slate-600",
  Marketing: "bg-yellow-100 text-yellow-700",
};

const YEARS = Array.from({ length: 11 }, (_, i) => 2018 + i);

const inputCls =
  "form-input w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-slate-400";
const selectCls =
  "form-select w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none";
const errorCls = "field-error text-red-500 text-xs mt-1";
const labelCls = "block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5";
const cardCls = "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-5";

function FieldErr({ id, msg }) {
  if (!msg) return null;
  return <p id={`error-${id}`} className={errorCls}>{msg}</p>;
}

export default function ApplicationForm({ job, onBack, onSubmitSuccess }) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", mobile: "",
    location: "", address: "", phoneType: "Mobile",
    college: "", degree: "B.E.", specialization: "", gradYear: "2024",
    hasExperience: false, company: "", designation: "", duration: "",
    privacyAgree: false,
  });
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({});
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");

  const set = (field) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (!s || skills.includes(s)) return;
    setSkills((prev) => [...prev, s]);
    setSkillInput("");
  };

  const removeSkill = (skill) => setSkills((prev) => prev.filter((s) => s !== skill));

  const handleResumeFile = (file, err) => {
    if (err) { setResumeError(err); setResumeFile(null); return; }
    setResumeError("");
    setResumeFile(file);
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required";
    if (!form.location.trim()) errs.location = "Current location is required";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.college.trim()) errs.college = "College/University is required";
    if (!form.specialization.trim()) errs.specialization = "Specialization is required";
    if (form.hasExperience) {
      if (!form.company.trim()) errs.company = "Company name is required";
      if (!form.designation.trim()) errs.designation = "Designation is required";
      if (!form.duration.trim()) errs.duration = "Duration is required";
    }
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmitSuccess();
  };

  const errBorder = (field) => errors[field] ? "border-red-400 focus:ring-red-400 focus:border-red-400" : "";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <nav className="bg-[#0F172A] sticky top-0 z-40 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div id="form-logo" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 5a2 2 0 012-2h8a2 2 0 012 2v1H3V5z" fill="white" opacity="0.6"/>
                <rect x="1" y="7" width="16" height="9" rx="2" fill="white"/>
                <rect x="7" y="5" width="4" height="4" rx="1" fill="#3B82F6"/>
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Jobify</span>
          </div>
          <button
            id="back-to-jobs"
            className="back-to-jobs flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors"
            onClick={onBack}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Jobs
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Job header */}
        <div className="bg-[#0F172A] rounded-2xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="relative">
            <h1
              id="form-job-title"
              className="form-job-title text-2xl sm:text-3xl font-extrabold text-white mb-2"
            >
              {job.title}
            </h1>
            <p
              id="form-job-desc"
              className="form-job-desc text-slate-400 text-sm mb-4 max-w-xl"
            >
              {job.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={`form-job-meta text-xs font-semibold px-2.5 py-1 rounded-full ${DEPT_COLORS[job.department] || "bg-slate-100 text-slate-600"}`}>
                {job.department}
              </span>
              <span className="form-job-meta flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {job.location}
              </span>
              <span className={`form-job-meta text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_COLORS[job.type] || "bg-slate-100 text-slate-600"}`}>
                {job.type}
              </span>
            </div>
          </div>
        </div>

        {/* Section 1 — Personal Info */}
        <div id="section-personal" className={cardCls}>
          <h2 className="text-base font-bold text-[#0F172A] mb-5 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 text-xs font-bold rounded flex items-center justify-center">1</span>
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelCls}>First Name <span className="text-red-500">*</span></label>
              <input id="input-first-name" className={`${inputCls} ${errBorder("firstName")}`} placeholder="John" value={form.firstName} onChange={set("firstName")} />
              <FieldErr id="firstName" msg={errors.firstName} />
            </div>
            <div>
              <label className={labelCls}>Last Name <span className="text-red-500">*</span></label>
              <input id="input-last-name" className={`${inputCls} ${errBorder("lastName")}`} placeholder="Doe" value={form.lastName} onChange={set("lastName")} />
              <FieldErr id="lastName" msg={errors.lastName} />
            </div>
            <div>
              <label className={labelCls}>Email <span className="text-red-500">*</span></label>
              <input id="input-email" type="email" className={`${inputCls} ${errBorder("email")}`} placeholder="john@example.com" value={form.email} onChange={set("email")} />
              <FieldErr id="email" msg={errors.email} />
            </div>
            <div>
              <label className={labelCls}>Mobile Number <span className="text-red-500">*</span></label>
              <input id="input-mobile" className={`${inputCls} ${errBorder("mobile")}`} placeholder="+91 98765 43210" value={form.mobile} onChange={set("mobile")} />
              <FieldErr id="mobile" msg={errors.mobile} />
            </div>
            <div>
              <label className={labelCls}>Phone Type</label>
              <div className="relative">
                <select id="select-phone-type" className={selectCls} value={form.phoneType} onChange={set("phoneType")}>
                  <option>Mobile</option>
                  <option>Home</option>
                  <option>Work</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div>
              <label className={labelCls}>Current Location <span className="text-red-500">*</span></label>
              <input id="input-location" className={`${inputCls} ${errBorder("location")}`} placeholder="Pune, India" value={form.location} onChange={set("location")} />
              <FieldErr id="location" msg={errors.location} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Address <span className="text-red-500">*</span></label>
            <textarea
              id="input-address"
              rows={3}
              className={`${inputCls} resize-none ${errBorder("address")}`}
              placeholder="123, Street Name, City, State - PIN"
              value={form.address}
              onChange={set("address")}
            />
            <FieldErr id="address" msg={errors.address} />
          </div>

          {/* Resume Upload */}
          <div className="mt-4">
            <label className={labelCls}>Resume / CV</label>
            <ResumeDropzone
              file={resumeFile}
              onFile={handleResumeFile}
              onRemove={() => { setResumeFile(null); setResumeError(""); }}
              error={resumeError}
            />
          </div>
        </div>

        {/* Section 2 — Education */}
        <div id="section-education" className={cardCls}>
          <h2 className="text-base font-bold text-[#0F172A] mb-5 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 text-xs font-bold rounded flex items-center justify-center">2</span>
            Education Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className={labelCls}>College / University Name <span className="text-red-500">*</span></label>
              <input id="input-college" className={`${inputCls} ${errBorder("college")}`} placeholder="MIT World Peace University" value={form.college} onChange={set("college")} />
              <FieldErr id="college" msg={errors.college} />
            </div>
            <div>
              <label className={labelCls}>Degree</label>
              <div className="relative">
                <select id="select-degree" className={selectCls} value={form.degree} onChange={set("degree")}>
                  <option>B.E.</option>
                  <option>B.Tech</option>
                  <option>MCA</option>
                  <option>MBA</option>
                  <option>Other</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div>
              <label className={labelCls}>Graduation Year</label>
              <div className="relative">
                <select id="select-grad-year" className={selectCls} value={form.gradYear} onChange={set("gradYear")}>
                  {YEARS.map((y) => <option key={y}>{y}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>Specialization <span className="text-red-500">*</span></label>
              <input id="input-specialization" className={`${inputCls} ${errBorder("specialization")}`} placeholder="Computer Science & Engineering" value={form.specialization} onChange={set("specialization")} />
              <FieldErr id="specialization" msg={errors.specialization} />
            </div>
          </div>
        </div>

        {/* Section 3 — Work Experience */}
        <div id="section-experience" className={cardCls}>
          <h2 className="text-base font-bold text-[#0F172A] mb-5 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 text-xs font-bold rounded flex items-center justify-center">3</span>
            Work Experience
          </h2>
          <label className="flex items-center gap-3 cursor-pointer mb-5">
            <input
              id="checkbox-has-experience"
              type="checkbox"
              className="form-checkbox w-4 h-4 accent-blue-600 rounded"
              checked={form.hasExperience}
              onChange={set("hasExperience")}
            />
            <span className="text-sm text-slate-700 font-medium">I have work experience</span>
          </label>
          {form.hasExperience && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <label className={labelCls}>Company Name <span className="text-red-500">*</span></label>
                <input id="input-company" className={`${inputCls} ${errBorder("company")}`} placeholder="Acme Corp" value={form.company} onChange={set("company")} />
                <FieldErr id="company" msg={errors.company} />
              </div>
              <div>
                <label className={labelCls}>Designation <span className="text-red-500">*</span></label>
                <input id="input-designation" className={`${inputCls} ${errBorder("designation")}`} placeholder="Software Engineer" value={form.designation} onChange={set("designation")} />
                <FieldErr id="designation" msg={errors.designation} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Duration <span className="text-red-500">*</span></label>
                <input id="input-duration" className={`${inputCls} ${errBorder("duration")}`} placeholder="2 years 3 months" value={form.duration} onChange={set("duration")} />
                <FieldErr id="duration" msg={errors.duration} />
              </div>
            </div>
          )}
          {!form.hasExperience && (
            <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <p className="text-slate-400 text-sm">Check the box above if you have prior work experience</p>
            </div>
          )}
        </div>

        {/* Section 4 — Skills */}
        <div id="section-skills" className={cardCls}>
          <h2 className="text-base font-bold text-[#0F172A] mb-5 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 text-xs font-bold rounded flex items-center justify-center">4</span>
            Skills
          </h2>
          <div className="flex gap-2 mb-4">
            <input
              id="input-skill"
              className="skill-input flex-1 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-slate-400"
              placeholder="e.g. React, Node.js, Python…"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
            />
            <button
              id="btn-add-skill"
              type="button"
              className="btn-add-skill bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={addSkill}
            >
              Add
            </button>
          </div>
          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  id={`skill-tag-${skill}`}
                  className="skill-tag flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  <span>{skill}</span>
                  <button
                    id={`remove-skill-${skill}`}
                    type="button"
                    className="remove-skill-btn w-4 h-4 rounded-full bg-blue-200 hover:bg-blue-300 flex items-center justify-center transition-colors"
                    onClick={() => removeSkill(skill)}
                    aria-label={`Remove ${skill}`}
                  >
                    <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400 text-sm text-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              No skills added yet — type a skill above and press Add or Enter
            </p>
          )}
        </div>

        {/* Section 5 — Privacy */}
        <div className={cardCls}>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              id="checkbox-privacy"
              type="checkbox"
              className="form-checkbox mt-0.5 w-4 h-4 accent-blue-600 flex-shrink-0"
              checked={form.privacyAgree}
              onChange={set("privacyAgree")}
            />
            <span className="text-sm text-slate-600 leading-relaxed">
              I agree to the{" "}
              <button type="button" className="text-blue-600 hover:underline font-medium">Privacy Policy</button>
              {" "}and{" "}
              <button type="button" className="text-blue-600 hover:underline font-medium">Terms &amp; Conditions</button>
              {" "}of Jobify. I consent to my data being processed for recruitment purposes.
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          id="btn-submit-application"
          type="button"
          className={`btn-submit w-full font-bold text-base py-4 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            form.privacyAgree
              ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
          disabled={!form.privacyAgree}
          onClick={handleSubmit}
        >
          Submit Application
        </button>
        <p className="text-center text-xs text-slate-400 mt-3">
          By submitting, you agree to Jobify's recruitment data policies.
        </p>
      </div>
    </div>
  );
}
