import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Tour from "./comps/Tour";

const url =
  "https://62e25b133891dd9ba8e5d350.mockapi.io/api/tours-destinations//destinations";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getchDestinations = async () => {
      const res = await axios.get(url);
      setInterval(() => {
        setLoading(false);
      }, 3000);
      setData(res.data);
    };

    getchDestinations();
  }, [setLoading, setData]);

  console.log(data);

  return (
    <>
      <div className="w-full h-screen">
        <div className="main-container">
          <div className="flex items-center justify-center w-full h-auto py-10 mx-auto text-center">
            {loading && data === null ? (
              <h1 className="mb-10 text-3xl tracking-widest text-gray-800">
                Loading ....
              </h1>
            ) : (
              <div>
                <h1 className="mb-10 text-3xl font-extrabold tracking-widest text-gray-800 uppercase ">
                  Our Tours
                </h1>
                <div className="flex flex-col gap-10">
                  {data.length !== 0 ? (
                    data.map((el) => (
                      <Tour
                        key={el.id}
                        id={el.id}
                        name={el.city}
                        price={el.price}
                        url={el.url}
                        detail={el.details}
                        setData={setData}
                        data={data}
                      />
                    ))
                  ) : (
                    <h2 className="text-3xl tracking-widest text-gray-800">
                      No Tours Available
                    </h2>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
