import React, { useState } from 'react';
import URLForm from '../components/URLForm';
import URLTable from '../components/URLTable';

const Shortener = () => {
  const [shortened, setShortened] = useState([]);

  const handleShorten = (urls) => {
    // Simulate API response
    const result = urls.map(({ longUrl, shortcode, validity }) => {
      const code = shortcode || Math.random().toString(36).substring(2, 7);
      return {
        longUrl,
        shortUrl: `${window.location.origin}/${code}`,
        expiry: validity || 30,
        shortcode: code,
      };
    });
    setShortened(result);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <URLForm onShorten={handleShorten} />
      <URLTable data={shortened} />
    </div>
  );
};

export default Shortener;
