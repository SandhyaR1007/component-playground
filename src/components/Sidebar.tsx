import { useState } from "react";

import {
  componentsData,
  defaultComponentValues,
} from "../utils/componentsData";
import { useComponentStore } from "../store/useComponentStore";

const Sidebar = () => {
  const [search, setSearch] = useState<string>("");
  const { addComponent } = useComponentStore();

  const filteredComponents = search.length
    ? componentsData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    : componentsData;
  return (
    <div className="w-1/5 h-full shadow-sm py-5 px-2">
      <button className="bg-violet-500 text-lg text-white p-3 py-2 rounded-md shadow-sm my-3 cursor-pointer hover:shadow-md hover:bg-violet-600 transition-all">
        View Code
      </button>
      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate-500 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          placeholder="Search Components"
          className="w-full outline-none pl-12 rounded-md border border-violet-200 py-2 text-lg  bg-violet-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="searchComponent"
        />
      </div>

      {filteredComponents.map((component) => (
        <div
          key={component.id}
          onClick={() =>
            addComponent({
              type: component.id,
              props: defaultComponentValues[component.id],
              position: { x: 100, y: 100 },
            })
          }
          className="bg-neutral-50 text-xl text-center border border-neutral-200 rounded-md py-4 px-2 cursor-pointer hover:shadow-lg transition-all delay-75 my-2"
        >
          {component.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
