import React, { useState, useEffect } from 'react';
import { getData } from '../utils/api';

function DataModel(id, name) {
  this.id = id;
  this.name = name;
}

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const pet = new DataModel(data.id, data.name);
      console.log(pet);
      setData(pet);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
};

export default DataComponent;