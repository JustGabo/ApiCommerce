import { Braces } from "lucide-react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="flex flex-col justify-between gap-5 lg:gap-0 lg:items-center lg:flex-row">
      <Braces />

      <div className=" lg:w-[13%] flex justify-between gap-2 ">
        <button className=" border border-gray-300  w-full h-[35px]  rounded-lg hover:shadow-xl transition-all duration-200">
          <Link className="inline-block w-full text-purple-500" to={"/get"}>
            /Get
          </Link>
        </button>
        <button className="w-full transition-all duration-200 border border-gray-300 rounded-lg hover:shadow-xl">
          <Link className="inline-block w-full text-purple-500" to={"/reqs"}>
            /reqs
          </Link>
        </button>
      </div>
    </div>
  );
}

export default header;
