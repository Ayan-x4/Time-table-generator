import React from "react";
import { FiPrinter } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";

const Table = () => {
  return (
    <div className="w-full flex-col mr-100 md:block hidden">
      <div className="py-3 px-5 h-[530px]   bg-[#1A2438] rounded-2xl mb-4 border-1 ">
        <section className="flex justify-between">
          <div className="flex gap-2 items-center">
            <span><svg className="w-6" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="#7F7FF1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style></style> </defs> <g data-name="calendar date" id="calendar_date"> <path class="cls-1" d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h20A1.5,1.5,0,0,0,24,22.5V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm20,19H2.5a.5.5,0,0,1-.5-.5V9H23V22.5A.5.5,0,0,1,22.5,23Z"></path> <path class="cls-1" d="M20.5,15h-6a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h6a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,20.5,15ZM20,20H15V16h5Z"></path> <path class="cls-1" d="M6.5,11h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,6.5,11ZM6,13H5V12H6Z"></path> <path class="cls-1" d="M10.5,11h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,10.5,11ZM10,13H9V12h1Z"></path> <path class="cls-1" d="M6.5,16h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,6.5,16ZM6,18H5V17H6Z"></path> <path class="cls-1" d="M10.5,16h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,10.5,16ZM10,18H9V17h1Z"></path> <path class="cls-1" d="M14.5,14h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5v2A.5.5,0,0,0,14.5,14Zm.5-2h1v1H15Z"></path> <path class="cls-1" d="M20.5,11h-2a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,20.5,11ZM20,13H19V12h1Z"></path> </g> </g></svg></span>
            <h2 className="text-white text-xl font-medium ">
              Time Table Preview
            </h2>
          </div>
          <div className="flex gap-5">
            <div className="border flex items-center gap-1 rounded-md border-gray-600">
              <IoCalendarClearOutline className="text-white pl-2 w-full" />
              <select className="text-white bg-[#1A2438] py-1 mr-2 outline-none">
                <option value="">All Days</option>
                <option value="">Monday</option>
                <option value="">Tuesday</option>
                <option value="">Wednesday</option>
                <option value="">Thusday</option>
                <option value="">Friday</option>
                <option value="">Saturday</option>
                <option value="">Sunday</option>
              </select>
            </div>
            {/* export button */}
            <div className="border flex gap-2 items-center rounded-md border-gray-600">
              <FiPrinter className="text-white w-full pl-3" />

              <p className="text-white py-1 pr-3">Print</p>
            </div>
          </div>
        </section>
      </div>
      <div className="h-[150px] bg-[#1A2438] rounded-2xl border"></div>
    </div>
  );
};

export default Table;
