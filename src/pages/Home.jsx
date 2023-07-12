import React, { useContext } from 'react';
import Card from '../components/Card';
import { DataContext } from '../data/DataProvider';
import './Home.css';

const Home = () => {
  const { data, loading } = useContext(DataContext);

  return (
    <div className="content">
      <div className="headBlock">
        <h1 className="headText">Explore Products</h1>
      </div>
      <div className="cardBox">
        {loading ? (
          <div className="loader">
            <div className="loader__spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          data.map((obj, index) => (
            <Card
              id={obj.id}
              key={index}
              imgUrl={obj.thumbnailUrl}
              title={obj.title}
              price={obj.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;


