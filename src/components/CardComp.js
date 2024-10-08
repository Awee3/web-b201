import React from 'react';

function FileCard({ file }) {
  return (
    <div className="file-card">
      <h2>{file.name}</h2>
      <p>{file.description}</p>
    </div>
  );
}

export default FileCard;