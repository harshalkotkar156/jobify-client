// const TYPE_COLORS = {
//   "Full Time": "bg-blue-100 text-blue-700",
//   "Remote": "bg-emerald-100 text-emerald-700",
//   "Hybrid": "bg-violet-100 text-violet-700",
// };

// const DEPT_COLORS = {
//   Engineering: "bg-orange-100 text-orange-700",
//   Design: "bg-pink-100 text-pink-700",
//   Infrastructure: "bg-slate-100 text-slate-600",
//   Marketing: "bg-yellow-100 text-yellow-700",
// };

// export default function JobsPage({ jobs, onApply }) {
//   return (
//     <div className="min-h-screen bg-slate-50" id="jobs-page">
//       {/* Navbar */}
//       <nav className="bg-[#0F172A] sticky top-0 z-40 shadow-lg" id="navbar">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2" id="navbar-logo">
//             <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M3 5a2 2 0 012-2h8a2 2 0 012 2v1H3V5z" fill="white" opacity="0.6"/>
//                 <rect x="1" y="7" width="16" height="9" rx="2" fill="white"/>
//                 <rect x="7" y="5" width="4" height="4" rx="1" fill="#3B82F6"/>
//               </svg>
//             </div>
//             <span className="text-white font-bold text-xl tracking-tight">Jobify</span>
//           </div>
//           <span
//             id="hiring-badge"
//             className="bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide animate-pulse"
//           >
//             🟢 We're Hiring
//           </span>
//         </div>
//       </nav>

//       {/* Hero */}
//       <div className="bg-[#0F172A] pb-20 pt-16 relative overflow-hidden" id="hero-section">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-3xl" />
//         </div>
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
//             <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
//             5 open positions
//           </div>
//           <h1
//             id="hero-headline"
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
//           >
//             Join Our Team at{" "}
//             <span className="text-blue-400">Jobify</span>
//           </h1>
//           <p
//             id="hero-subheading"
//             className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto"
//           >
//             We're building the future of hiring. Come work with a passionate, distributed team where
//             your ideas ship fast and your impact is real.
//           </p>
//         </div>
//       </div>

//       {/* Job Cards */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20" id="jobs-grid">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               id={`job-card-${job.id}`}
//               className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
//             >
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <h2
//                     id={`job-title-${job.id}`}
//                     className="job-title text-[#0F172A] font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors"
//                   >
//                     {job.title}
//                   </h2>
//                   <span
//                     className={`job-department inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${DEPT_COLORS[job.department] || "bg-slate-100 text-slate-600"}`}
//                   >
//                     {job.department}
//                   </span>
//                 </div>
//                 <span
//                   className={`job-type text-xs font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap ${TYPE_COLORS[job.type] || "bg-slate-100 text-slate-600"}`}
//                 >
//                   {job.type}
//                 </span>
//               </div>

//               <p className="job-short-desc text-slate-500 text-sm leading-relaxed">
//                 {job.description}
//               </p>

//               <div className="flex items-center gap-1.5 text-slate-400 text-sm">
//                 <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <span className="job-location">{job.location}</span>
//               </div>

//               <button
//                 id={`apply-btn-${job.id}`}
//                 className="apply-btn mt-auto w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 onClick={() => onApply(job)}
//               >
//                 Apply Now →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

const TYPE_COLORS = {
  "Full Time": "bg-blue-100 text-blue-700",
  "Remote": "bg-emerald-100 text-emerald-700",
  "Hybrid": "bg-violet-100 text-violet-700",
};

const DEPT_COLORS = {
  Engineering: "bg-orange-100 text-orange-700",
  Design: "bg-pink-100 text-pink-700",
  Infrastructure: "bg-slate-100 text-slate-600",
  Marketing: "bg-yellow-100 text-yellow-700",
};

export default function JobsPage({ jobs, onApply }) {
  return (
    <div className="min-h-screen bg-slate-50" id="jobs-page">

      {/* Navbar */}
      <nav className="bg-[#0F172A] sticky top-0 z-40 shadow-lg" id="navbar">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2" id="navbar-logo">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 5a2 2 0 012-2h8a2 2 0 012 2v1H3V5z" fill="white" opacity="0.6"/>
                <rect x="1" y="7" width="16" height="9" rx="2" fill="white"/>
                <rect x="7" y="5" width="4" height="4" rx="1" fill="#3B82F6"/>
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Jobify</span>
          </div>
          <span
            id="hiring-badge"
            className="bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide animate-pulse"
          >
            🟢 We're Hiring
          </span>
        </div>
      </nav>

      {/* Hero — removed overlap, cards sit below cleanly */}
      <div className="bg-[#0F172A] py-20 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            5 open positions
          </div>
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            Join Our Team at{" "}
            <span className="text-blue-400">Jobify</span>
          </h1>
          <p
            id="hero-subheading"
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            We're building the future of hiring. Come work with a passionate, distributed team where
            your ideas ship fast and your impact is real.
          </p>
        </div>
      </div>

      {/* Divider wave between hero and cards */}
      <div className="bg-[#0F172A]">
        <div className="h-8 bg-slate-50 rounded-t-3xl" />
      </div>

      {/* Job Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20" id="jobs-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              id={`job-card-${job.id}`}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
            >
              {/* Title + Type badge row */}
              <div className="flex items-start justify-between gap-2">
                <h2
                  id={`job-title-${job.id}`}
                  className="job-title text-[#0F172A] font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors flex-1 min-w-0"
                >
                  {job.title}
                </h2>
                <span
                  className={`job-type text-xs font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap flex-shrink-0 ${TYPE_COLORS[job.type] || "bg-slate-100 text-slate-600"}`}
                >
                  {job.type}
                </span>
              </div>

              {/* Department badge */}
              <div>
                <span
                  className={`job-department inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${DEPT_COLORS[job.department] || "bg-slate-100 text-slate-600"}`}
                >
                  {job.department}
                </span>
              </div>

              {/* Description */}
              <p className="job-short-desc text-slate-500 text-sm leading-relaxed">
                {job.description}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="job-location">{job.location}</span>
              </div>

              {/* Apply Button */}
              <button
                id={`apply-btn-${job.id}`}
                className="apply-btn mt-auto w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => onApply(job)}
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}