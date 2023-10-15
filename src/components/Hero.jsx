import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Hero = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search) {
      fetch(`https://cv-backend-search.onrender.com/search/${search}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <div className="flex mb-16 ">
      <div className="w-1/2 p-4 mt-28">
        <h2 className="text-[65px] font-bold mb-4">
          Find
          <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-purple-500 text-transparent bg-clip-text">
            Partners
          </span>
          (CAs) available online
        </h2>
        <p className="text-lg text-[#616161] mb-4 font-sans">
          <span className="font-bold">CONNECT </span>
          with us where your services are listed and visible to a myriad of
          businesses seeking CA’s for compliance support
        </p>
        <div className="flex items-center">
          <input
            className="w-3/4 h-16 p-2 border border-gray-400 rounded-l-md"
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="w-1/4 h-16  bg-[#0076CE] font-semibold text-white p-2 rounded-r-md">
            Search
          </button>
        </div>
        {results.length > 0 && (
          <div className="bg-white rounded-lg  px-2  p-2 border-2 border-pink-600 ">
            {results.map((result) => (
              <div key={result.id}>
                <Link
                  to={`/details/${result.id}`}
                  className="text-black font-bold text-center text-2xl "
                >
                  {result.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/2 flex flex-row space-x-3 ml-7 mt-11 ">
        <img src={one} alt="Image" className=" h-auto md:block hidden" />
        <img src={two} alt="Image" className=" h-auto md:block hidden" />
        <img src={three} alt="Image" className=" h-auto md:block hidden" />
      </div>
    </div>
  );
};

export default Hero;
/*
background: linear-gradient(0deg, #000000, #000000),
linear-gradient(90.97deg, #0076CE 26.63%, #9400D3 65.81%);


*/
