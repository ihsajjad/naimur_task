import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleCart from "./component/SingleCart";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="min-h-scre\en w-full pb-12 p-2 md:p-4 flex flex-col justify-center items-center">
      <h1 className="md:text-6xl text-center text-3xl">
        Discover our popular courses
      </h1>
      <p className="text-lg mt-5 text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, et.
      </p>
      <div className=" w-full lg:w-11/12 grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
        {data &&
          data.map((item) => (
            <SingleCart key={item?.id} item={item}></SingleCart>
          ))}
      </div>
      <div>
        <button className="px-8 py-4 text-white mt-5 font-bold rounded-lg bg-green-500">
          See all couses
        </button>
      </div>
    </div>
  );
};

export default App;
