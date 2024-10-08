import React from 'react';
import FileCard from './CardComp';

const files = [
  {
    id: 1,
    name: 'Image 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 1'
  },
  {
    id: 2,
    name: 'Image 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 2'
  },
  {
    id: 3,
    name: 'Image 3',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 3'
  },
  {
    id: 4,
    name: 'Image 4',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 4'
  },
  {
    id: 5,
    name: 'Image 5',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 5'
  },
  {
    id: 6,
    name: 'Image 6',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 6'
  },
  {
    id: 7,
    name: 'Image 7',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 7'
  },
  {
    id: 8,
    name: 'Image 8',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 8'
  },
  {
    id: 9,
    name: 'Image 9',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 9'
  },
  {
    id: 10,
    name: 'Image 10',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 9'
  },
  {
    id: 11,
    name: 'Image 11',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 9'
  },
  {
    id: 12,
    name: 'Image 12',
    image: 'https://via.placeholder.com/150',
    description: 'This is Image 9'
  }
];

function FileList() {
  return (
    <div className="file-list">
    {files.map((file) => (
        <FileCard key={file.id} file={file} />
    ))}
    </div>
  );
}

export default FileList;