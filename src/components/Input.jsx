import React from "react";

const Input = () => {
  return (
    <div className="h-full md:bg-[#1A2438] bg-[#0A0F1B] md:w-[95%] w-full md:rounded-2xl border-1 flex-col md:p-6 p-2 px-3 ">
      <div className="md:h-full   md:rounded-[0] rounded-xl  md:mb-0 mb-4  md:block hidden ">
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
                fill="#1C6CC5"
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
                      fill="#1C6CC5"
                      d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413 C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34 c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27 c-0.092,0-0.184-0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688 l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.274C24.304,19.714,23.903,20,23.469,20 c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,18.19,24.581,18.744,24.43,19.274z"
                    ></path>{" "}
                    <path
                      fill="#1C6CC5"
                      d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038 l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.726 C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688 C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,15.122,55.273,15.676,54.742,15.828z"
                    ></path>{" "}
                    <polygon
                      fill="#00EAFC"
                      points="31,53.77 0,45.564 0,47.495 31,55.701 "
                    ></polygon>{" "}
                    <polygon
                      fill="#00EAFC"
                      points="33,55.701 64,47.495 64,45.564 33,53.77 "
                    ></polygon>{" "}
                    <path
                      fill="#00EAFC"
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
      <div className="h-[210px] md:hidden  bg-[#1A2438]  rounded-xl md:mb-0 mb-4 p-5 border-gray-600 border  ">
        <div className="text-white flex gap-2 items-center mt-2 mb-8">
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
          <h1 className="text-2xl font-medium">Input Details</h1>
        </div>

        <h3 className="text-xl text-gray-200 font-md mb-2 ">Semester</h3>
        <div className="flex text-white justify-between items-center relative">
          <select className="border-gray-600 border w-full bg-[#141e30] px-3 py-3 rounded-md outline-none appearance-none  ">
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
      </div>
      <div className="h-[600px] md:hidden bg-[#1A2438] border-gray-600 border  rounded-xl md:mb-0 mb-4 p-5 ">
        <div className=" border-gray-600 text-white">
          <div className="mt-3 flex gap-3">
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
                fill="#1C6CC5"
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
                      fill="#1C6CC5"
                      d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413 C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34 c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27 c-0.092,0-0.184-0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688 l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.274C24.304,19.714,23.903,20,23.469,20 c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,18.19,24.581,18.744,24.43,19.274z"
                    ></path>{" "}
                    <path
                      fill="#1C6CC5"
                      d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038 l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.726 C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688 C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,15.122,55.273,15.676,54.742,15.828z"
                    ></path>{" "}
                    <polygon
                      fill="#00EAFC"
                      points="31,53.77 0,45.564 0,47.495 31,55.701 "
                    ></polygon>{" "}
                    <polygon
                      fill="#00EAFC"
                      points="33,55.701 64,47.495 64,45.564 33,53.77 "
                    ></polygon>{" "}
                    <path
                      fill="#00EAFC"
                      d="M35,58.034c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-0.266,0.046-0.52,0.11-0.765L0,49.564v2.435 c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899 C63.391,53.698,64,52.905,64,51.999v-2.435L34.89,57.27C34.954,57.515,35,57.769,35,58.034z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <h1 className="text-2xl font-medium">Add Subject</h1>
          </div>

          <div className="mt-5   items-center justify-between">
            <h1 className="text-sm font-semibold text-gray-200 mb-2">
              Subject Name
            </h1>
            <input
              type="text"
              placeholder="e.g Data Structure"
              className="w-full p-2 border border-gray-600 rounded-sm bg-[#141e30] outline-none"
            ></input>
          </div>
          <div className="mt-5  items-center justify-between">
            <h1 className="text-sm font-semibold text-gray-200 mb-2">
              Teacher Name
            </h1>
            <input
              type="text"
              placeholder="e.g Md.Ayan"
              className="w-full p-2 border border-gray-600 rounded-sm bg-[#141e30] outline-none"
            ></input>
          </div>
          <div className="mt-5  items-center justify-between">
            <h1 className="text-sm font-semibold text-gray-200 mb-2">
              Class Room
            </h1>
            <input
              type="text"
              placeholder="e.g A-103"
              className="w-full p-2 border border-gray-600 rounded-sm bg-[#141e30] outline-none"
            ></input>
          </div>
        </div>
        <div className="mt-5 flex  gap-15">
          <div className="text-white font-semibold text-sm  ">
            <h1 className="mb-2">Day</h1>
            <div>
              <select className="border-gray-600 border w-[130%] h-10 bg-[#141e30] px-5  py-1 rounded-md outline-none appearance-none  ">
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

          <div className=" ">
            <div className="text-white font-semibold text-sm  ">
              <h1 className="mb-2 ">Start time</h1>
              <div className="relative">
                <input
                  type="time"
                  className="border-gray-600 border   h-10 bg-[#141e30] px-2 py-1 rounded-md outline-none appearance-none text-white  [color-scheme:dark] "
                ></input>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 absolute right-4 top-[20px] -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white font-semibold text-sm  ">
          <h1 className="mb-2 mt-4 ">End time</h1>
          <div className="w-full relative">
            <input
              type="time"
              className="border-gray-600 border w-[100%] h-10 bg-[#141e30] px-2 py-1 rounded-md outline-none appearance-none text-white  [color-scheme:dark] mb-8  "
            ></input>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute right-4 top-[20px] -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <button className="w-[100%] bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 h-10 rounded-md items-center text-white  ">
            <h1 className="text-[1.1rem] font-medium">+ Add Subject</h1>
          </button>
        </div>
      </div>



      
      <div className="h-[600px] md:hidden bg-[#1A2438]  rounded-xl md:mb-0 mb-4 border border-gray-600 "></div>



      <div className="h-[55px] flex md:hidden items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-xl font-medium gap-2 rounded-xl md:mb-0 mb-4 text-white border border-gray-600  ">
        <span><svg className='h-5 w-5' fill="#ffffff" width="18px" height="18px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"></path> </g></svg></span>
         Generate Time Table
      </div>
      <div className="h-[65px]  md:hidden  bg-[#1A2438]  rounded-xl md:mb-0 mb-6 flex items-center justify-between border border-gray-600">
        <span className="text-xl flex items-center justify-center text-white gap-4 ml-4 "><svg className="h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#C061FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#00EAFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Export Option</span>
        <div>
        <span><svg className="h-3 mr-4" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#ffffff]"> </path> </g> </g> </g> </g></svg></span>

        </div>
      </div>
      <div className="h-[100px] md:hidden  bg-[#1A2438] flex gap-2 items-center justify-around rounded-xl md:mb-0 border border-gray-600 ">
        <div className="h-22 w-24 rounded-xl bg-[#202b43] flex flex-col justify-center items-center gap-1">
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
           <h1 className="text-white font-normal">Inputs</h1>
        </div>
        <div className="h-22 w-24 rounded-xl  flex flex-col justify-center items-center gap-1 ">
          <span><svg className="h-8" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="#F5F5F5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style></style> </defs> <g data-name="calendar date" id="calendar_date"> <path class="cls-1" d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h20A1.5,1.5,0,0,0,24,22.5V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm20,19H2.5a.5.5,0,0,1-.5-.5V9H23V22.5A.5.5,0,0,1,22.5,23Z"></path> <path class="cls-1" d="M20.5,15h-6a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h6a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,20.5,15ZM20,20H15V16h5Z"></path> <path class="cls-1" d="M6.5,11h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,6.5,11ZM6,13H5V12H6Z"></path> <path class="cls-1" d="M10.5,11h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,10.5,11ZM10,13H9V12h1Z"></path> <path class="cls-1" d="M6.5,16h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,6.5,16ZM6,18H5V17H6Z"></path> <path class="cls-1" d="M10.5,16h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,10.5,16ZM10,18H9V17h1Z"></path> <path class="cls-1" d="M14.5,14h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5v2A.5.5,0,0,0,14.5,14Zm.5-2h1v1H15Z"></path> <path class="cls-1" d="M20.5,11h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,20.5,11ZM20,13H19V12h1Z"></path> </g> </g></svg></span>
          <h1 className="text-white normal">Timetable</h1>
        </div>
        <div className="h-22 w-24 rounded-xl flex flex-col justify-center items-center  gap-1">
        <span>
          <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#F5F5F5" stroke-width="1.5"></circle> <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#F5F5F5" stroke-width="1.5"></path> </g></svg>
        </span>
         <h1 className="text-white normal">Settings</h1>

        </div>
      </div>
    </div>
  );
};

export default Input;
