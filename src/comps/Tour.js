import React, { useState } from "react";

const Tour = ({ url, name, detail, price, setData, id, data }) => {
  const [showmore, setShowmore] = useState(false);

  const handleRemove = (id) => {
    const result = data.filter((el) => el.id !== id);

    setData(result);
  };

  return (
    <div className="max-w-[500px] flex flex-col gap-5 pb-10 bg-white rounded-md drop-shadow-2xl">
      <div>
        <img src={url} alt={name} className="rounded-t-md" />
      </div>
      <div className="flex flex-col items-center justify-between gap-5 px-5 pb-5 sm:gap-0 sm:flex-row">
        <h2 className="font-extrabold text-gray-800">{name + ` Tour`}</h2>
        <h2 className="px-2 py-1 text-sm text-gray-700 rounded-sm bg-secondary">
          {price + " PKR"}
        </h2>
      </div>
      <div className="px-5 text-left">
        <p className="text-sm text-gray-500">
          {showmore ? detail : `${detail.substring(0, 100)} ....`}{" "}
          <span>
            <button
              onClick={() => setShowmore(!showmore)}
              className="pl-1 text-md text-primary"
            >
              {showmore ? "Show Less" : "Show More"}
            </button>
          </span>
        </p>
      </div>
      {showmore ? (
        <button
          className="px-7 py-2 rounded-sm capitalize text-red-500 border border-red-500 max-w-[150px]  self-center"
          onClick={() => handleRemove(id)}
        >
          not interested
        </button>
      ) : null}
    </div>
  );
};

export default Tour;
