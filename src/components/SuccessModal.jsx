export default function SuccessModal({ onBack }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        id="success-modal"
        className="success-modal bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
      >
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#10B981" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Application Submitted!</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-7">
          Thank you for applying to Jobify. We'll review your application and get back to you within{" "}
          <strong className="text-slate-700">5–7 business days.</strong>
        </p>
        <button
          id="btn-back-after-success"
          className="btn-back-after-success w-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          onClick={onBack}
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
}
