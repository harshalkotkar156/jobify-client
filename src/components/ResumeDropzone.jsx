import { useState, useRef } from "react";

export default function ResumeDropzone({ file, onFile, onRemove, error }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const ACCEPTED = ["application/pdf", "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const MAX_MB = 5;

  const validate = (f) => {
    if (!ACCEPTED.includes(f.type)) return "Only PDF, DOC, or DOCX files are accepted";
    if (f.size > MAX_MB * 1024 * 1024) return "File size must be under 5MB";
    return null;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (!dropped) return;
    const err = validate(dropped);
    onFile(dropped, err);
  };

  const handleChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const err = validate(f);
    onFile(f, err);
  };

  const fmt = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div>
      {!file ? (
        <div
          id="resume-dropzone"
          className={`resume-dropzone border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
            isDragging
              ? "resume-dropzone-active border-blue-500 bg-blue-50"
              : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-slate-100"
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            id="input-resume"
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className="resume-file-input hidden"
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#3B82F6" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 5.75 5.75 0 011.344 11.095" />
              </svg>
            </div>
            <p className="dropzone-text text-slate-700 font-medium">Drag & drop your resume here</p>
            <p className="text-slate-400 text-sm">or</p>
            <button
              id="btn-browse-resume"
              type="button"
              className="btn-browse-resume bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
            >
              Browse File
            </button>
          </div>
          <p className="dropzone-hint text-xs text-slate-400 mt-4">
            Accepted formats: PDF, DOC, DOCX — Max size: 5MB
          </p>
        </div>
      ) : (
        <div className="border border-slate-200 rounded-xl p-4 bg-white flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#10B981" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p id="resume-filename" className="resume-filename text-slate-800 font-medium text-sm truncate">
              {file.name}
            </p>
            <p className="resume-filesize text-slate-400 text-xs">{fmt(file.size)}</p>
          </div>
          <button
            id="btn-remove-resume"
            type="button"
            className="btn-remove-resume w-8 h-8 rounded-full bg-slate-100 hover:bg-red-100 flex items-center justify-center transition-colors flex-shrink-0"
            onClick={onRemove}
            aria-label="Remove file"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#64748B" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      {error && (
        <p id="error-resume" className="field-error text-red-500 text-xs mt-1.5">{error}</p>
      )}
    </div>
  );
}
