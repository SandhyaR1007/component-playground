import { useState } from "react";
import { componentsData } from "../utils/componentsData";

const Sidebar = () => {
  const [search, setSearch] = useState<string>("");

  const filteredComponents = search.length
    ? componentsData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    : componentsData;
  return (
    <div className="w-1/5 h-full shadow-sm py-5 px-2">
      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate-900 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          placeholder="Search Components"
          className="w-full outline-none pl-12 rounded-sm shadow-sm py-3 text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="searchComponent"
        />
      </div>

      {filteredComponents.map((component) => (
        <div
          key={component.id}
          className="bg-neutral-50 text-xl text-center border border-neutral-200 rounded-md py-4 px-2 cursor-pointer hover:shadow-lg transition-all delay-75 my-2"
        >
          {component.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
