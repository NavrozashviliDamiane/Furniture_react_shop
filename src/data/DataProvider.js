import React, { createContext, useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=20';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData');

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
          localStorage.setItem('cachedData', JSON.stringify(jsonData));
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    const preloadData = async () => {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      localStorage.setItem('cachedData', JSON.stringify(jsonData));
    };

    preloadData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
