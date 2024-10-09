import React, { useEffect, useState } from 'react';
import { getDockerFiles } from '../api/dockerApi'; // Import fungsi dari API
import FileCard from './CardComp';

const DockerFilesComp = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDockerFiles = async () => {
      try {
        const data = await getDockerFiles(); // Memanggil API
        setFiles(data); // Menyimpan data di state
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDockerFiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
      <div className="file-list">
      {files.map((file) => (
          <FileCard key={file.id} file={file} />
      ))}
      </div>
    );
};

export default DockerFilesComp;
