import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const myApi = useSelector((state) => state.changeTheTour);
    console.log(myApi)

    return (
        <div>
            <h2>Sample blank page</h2>
            <p>This page is just to showcase the way you can add your own pages.</p>
          
            {/* {myApi.map((item, index) => (
                <p key={index}>Name: {item.price}</p>
            ))}  */}
        </div>
    );
};

export default Home;
