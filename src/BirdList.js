import React, { useState } from 'react';

function BirdAdd() {
  const [bird, setBird] = useState("");
  const [birdList, setBirdList] = useState([]);
  const [like, setLike] = useState({});

  function addBird() {
    setBirdList([...birdList, bird]);
    setLike({ ...like, [bird]: 0 });
    setBird("");
  }


  console.log( like)

  function increase(bird) {
    setLike({
      ...like,
      [bird]: like[bird] + 1
    });
  }

  return (
    <div>
      <input type="text" value={bird} onChange={(e) => setBird(e.target.value)} />
      <button onClick={() => addBird()}>Add Bird</button>
      <ul>
        {birdList.map((el) => (
          <li key={el}>
            {el} <br/><br/> 
            likes: {like[el]}&nbsp; 
            <button onClick={() => increase(el)}>Increase Likes</button>
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BirdAdd;