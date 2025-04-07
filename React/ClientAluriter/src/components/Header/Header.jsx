import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-neutral-800 text-xl font-bold">aluritter</h1>
        </div>
        <div className="flex items-center gap-2">
          {/* <span className="text-gray-600">matheushcastiglioni@gmail.com</span> */}
          <button className="bg-[#FF5252] text-white px-3 py-1 rounded-md hover:bg-red-500 transition-colors cursor-pointer">
            Sair
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
