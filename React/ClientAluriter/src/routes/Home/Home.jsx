import React, { useState } from "react";

const Home = () => {
  const [postText, setPostText] = useState("");
  const maxCharacters = 255;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-neutral-800 text-xl font-bold">aluritter</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">matheushcastiglioni@gmail.com</span>
          <button className="bg-[#FF5252] text-white px-3 py-1 rounded-md hover:bg-red-500 transition-colors cursor-pointer">
            Sair
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        {/* Post Creation */}
        <div className="mb-6">
          <p className="text-gray-700 mb-2">Alurite agora mesmo...</p>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full p-4 outline-none resize-none h-32 border-0"
              placeholder="O que está acontecendo?"
            />
            <div className="bg-white p-4 flex justify-between items-center border-t border-gray-100">
              <span
                className={`text-sm ${
                  postText.length <= maxCharacters
                    ? "text-[#00D261]"
                    : "text-red-500"
                }`}
              >
                Você ainda pode digitar {maxCharacters - postText.length}{" "}
                caracteres
              </span>
              <button
                className="bg-[#00A9FF] text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors cursor-pointer"
                disabled={
                  postText.length === 0 || postText.length > maxCharacters
                }
              >
                aluritar
              </button>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
          <div className="p-4">
            <p className="mb-4">Seven7OfCode com React =DDD</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>matheushcastiglioni@gmail.com</span>
              <span>6/30/2023, 3:52:49 PM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
