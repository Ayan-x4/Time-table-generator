import React from "react";

const Input = () => {
  return (
    <div className="h-full bg-[#1A2438] md:w-[95%] w-full rounded-2xl border-1 flex-col md:p-5 px-2 ">
      <div className="md:h-full   md:rounded-[0] rounded-xl  md:mb-0 mb-4   ">
        <div className="text-white flex gap-2 items-center mb-6">
          <span>
            <svg
              className="h-8"
              viewBox="0 0 32 32"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#7F7FF1"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style></style>
                </defs>
                <title></title>
                <path
                  class="cls-1"
                  d="M22,27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h9.76L15,4V8a3,3,0,0,0,3,3l2-2H18a1,1,0,0,1-1-1V5.41L20.29,8.7l.89-.89.52-.52L17.59,3.17A4,4,0,0,0,14.76,2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V19.42l-2,2Z"
                ></path>
                <path
                  class="cls-1"
                  d="M29,7.24a2.86,2.86,0,0,0-4.39,0l-2,2L14.11,17.7a6.09,6.09,0,0,0-.93,1.23L10.69,24H7a1,1,0,0,0,0,2h4a1,1,0,0,0,.67-.27.58.58,0,0,0,.18,0L17.36,23a5.87,5.87,0,0,0,1.14-.9l.56-.55h0L27,13.62l2-2a3.07,3.07,0,0,0,1-2.19A3.11,3.11,0,0,0,29,7.24ZM16.67,21l-.27.19-2.8,1.38,1.33-2.73a3.88,3.88,0,0,1,.47-.6l.61.61.92.93Zm1.69-1.63-.78-.77-.78-.79,6.5-6.5,1.56,1.56Zm9.19-9.19L26.27,11.5,24.71,9.93,26,8.66a1.29,1.29,0,0,1,.78-.45,1.31,1.31,0,0,1,.78.45,1.34,1.34,0,0,1,.45.78A1.37,1.37,0,0,1,27.55,10.22Z"
                ></path>
              </g>
            </svg>
          </span>
          <h1 className="text-xl font-semibold">Input Details</h1>
        </div>
        <div className="flex text-white justify-between items-center relative">
          <h3 className="text-sm text-gray-200 font-semibold">Semester</h3>
          <select className="border-gray-600 border w-[60%] bg-[#141e30] px-2 py-1 rounded-md outline-none appearance-none  ">
            <option className="text-white">Choose Semester</option>
            <option value="Semester-1" className="text-white">
              Semester-1
            </option>
            <option value="Semester-2" className="text-white">
              Semester-3
            </option>
            <option value="Semester-4" className="text-white">
              Semester-4
            </option>
            <option value="Semester-5" className="text-white">
              Semester-5
            </option>
            <option value="Semester-6" className="text-white">
              Semester-6
            </option>
            <option value="Semester-7" className="text-white">
              Semester-7
            </option>
            <option value="Semester-8" className="text-white">
              Semester-8
            </option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            <svg
              className="h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="mt-5 border-t-1 border-gray-600 text-white">
          <div className="mt-5 flex gap-3">
            <span>
              <svg
                className="h-8"
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
                fill="#7F7FF1"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      fill="#7F7FF1"
                      d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413 C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34 c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27 c-0.092,0-0.184-0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688 l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.274C24.304,19.714,23.903,20,23.469,20 c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,18.19,24.581,18.744,24.43,19.274z"
                    ></path>{" "}
                    <path
                      fill="#7F7FF1"
                      d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038 l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.726 C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688 C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,15.122,55.273,15.676,54.742,15.828z"
                    ></path>{" "}
                    <polygon
                      fill="#7F7FF1"
                      points="31,53.77 0,45.564 0,47.495 31,55.701 "
                    ></polygon>{" "}
                    <polygon
                      fill="#7F7FF1"
                      points="33,55.701 64,47.495 64,45.564 33,53.77 "
                    ></polygon>{" "}
                    <path
                      fill="#7F7FF1"
                      d="M35,58.034c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-0.266,0.046-0.52,0.11-0.765L0,49.564v2.435 c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899 C63.391,53.698,64,52.905,64,51.999v-2.435L34.89,57.27C34.954,57.515,35,57.769,35,58.034z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <h1 className="text-xl font-semibold">Add Subject</h1>
          </div>

          <div className="mt-5 flex  items-center justify-between">
            <h1 className="text-sm font-semibold text-gray-200">
              Subject Name
            </h1>
            <input
              type="text"
              placeholder="e.g Data Structure"
              className="w-[60%] p-2 border border-gray-600 rounded-sm bg-[#141e30] outline-none"
            ></input>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <h1 className="text-sm font-semibold text-gray-200">
              Teacher Name
            </h1>
            <input
              type="text"
              placeholder="e.g Md.Ayan"
              className="w-[60%] p-2 border border-gray-600 rounded-sm bg-[#141e30] outline-none"
            ></input>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <h1 className="text-sm font-semibold text-gray-200">Class Room</h1>
            <input
              type="text"
              placeholder="e.g A-103"
              className="w-[60%] p-2 border border-gray-600 rounded-sm bg-[#141e30] outline-none"
            ></input>
          </div>
        </div>
        <div className="mt-5 flex  items-center gap-10">
          <div className="text-white font-semibold text-sm  ">
            <h1 className="mb-2">Day</h1>
            <div>
              <select className="border-gray-600 border w-[160%] h-10 bg-[#141e30] px-5  py-1 rounded-md outline-none appearance-none  ">
                <option value="Semester-1" className="text-white">
                  Monday
                </option>
                <option value="Semester-2" className="text-white">
                  Tuesday
                </option>
                <option value="Semester-4" className="text-white">
                  Wednesday
                </option>
                <option value="Semester-5" className="text-white">
                  Thursday
                </option>
                <option value="Semester-6" className="text-white">
                  Friday
                </option>
                <option value="Semester-7" className="text-white">
                  Saturday
                </option>
                <option value="Semester-8" className="text-white">
                  Sunday
                </option>
              </select>
            </div>
          </div>

          <div className="px-10 ">
            <div className="text-white font-semibold text-sm  ">
              <h1 className="mb-2 ">Start time</h1>

              <input
                type="time"
                className="border-gray-600 border w-[162%] h-10 bg-[#141e30] px-2 py-1 rounded-md outline-none appearance-none text-white  [color-scheme:dark] "
              ></input>
            </div>
          </div>
        </div>
        <div className="text-white font-semibold text-sm mb-4 ">
          <h1 className="mb-2 mt-4 ">End time</h1>
          <input
            type="time"
            className="border-gray-600 border w-[100%] h-10 bg-[#141e30] px-2 py-1 rounded-md outline-none appearance-none text-white  [color-scheme:dark]  "
          ></input>
        </div>
        <button className="w-[100%] bg-[#575AEE] h-10 rounded-sm items-center text-white ">
          <h1 className="text-md font-semibold">+ Add Subject</h1>
        </button>
      </div>
      <div className="h-[200px] md:hidden  bg-[#374c76]  rounded-xl md:mb-0 mb-4  "></div>
      <div className="h-[500px] md:hidden bg-[#374c76]  rounded-xl md:mb-0 mb-4  "></div>
      <div className="h-[600px] md:hidden bg-[#374c76]  rounded-xl md:mb-0 mb-4  "></div>
      <div className="h-[60px] md:hidden  bg-[#7F7FF1]  rounded-xl md:mb-0 mb-4  "></div>
      <div className="h-[80px] md:hidden  bg-[#374c76]  rounded-xl md:mb-0 mb-4  "></div>
      <div className="h-[100px] md:hidden  bg-[#374c76]  rounded-xl md:mb-0 mb-4  "></div>
    </div>
  );
};

export default Input;
