// FilePreviewModal.jsx
import React from "react";

const FilePreviewModal = ({ isOpen, onClose, file }) => {
  if (!isOpen || !file) return null;

  // Simulate study-friendly preview based on file type
  const renderPreview = () => {
    if (!file.type) return <p>No preview available for this file type.</p>;

    const fileType = file.type.split("/")[0]; // e.g., "application" or "text"
    if (fileType === "text" || fileType === "application") {
      return (
        <div className="preview-study-content">
          <h3>Study Content for {file.name}</h3>
          <p>
            {file.content ||
              "This is a sample study text for your document. Use this content to review key points, take notes, and prepare for exams. Highlight important sections or concepts as needed."}
          </p>
          <p>
            <em>Tip:</em> Focus on key terms and concepts for better retention.
          </p>
        </div>
      );
    } else {
      return (
        <p>No preview available for this file type. (e.g., {file.type})</p>
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="preview-modal-content">
        <button className="modal-close-button" onClick={onClose}>
          ✕
        </button>
        <h2 className="preview-modal-title">File Preview</h2>
        <div className="preview-content">
          <p>
            <strong>File Name:</strong> {file.name}
          </p>
          <p>
            <strong>File Type:</strong> {file.type || "Unknown"}
          </p>
          {renderPreview()}
        </div>
        <button className="preview-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FilePreviewModal;
