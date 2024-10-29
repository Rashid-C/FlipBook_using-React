

const ActivityPage = () => {
  return (
    <div className="p-6 bg-white max-w-screen-md mx-auto border rounded-lg shadow-md">
      {/* Write Scope Section */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-blue-700 flex items-center">
          <span className="bg-red-500 text-white px-2 py-1 mr-2 rounded-full">✏️</span> 
          Write Scope
        </h2>
        <p className="text-lg text-red-600 font-semibold mt-2">
          Fill in the blanks with correct words.
        </p>
        <div className="text-right text-red-500 font-bold"><a href="https://iameonline.com/books/class-1/bubbles-class-1-sem-2/exercise/ch-1/Unscramble3.html">❓</a></div>
        <ul className="space-y-2 mt-4">
          {[
            "We should wear a .............................. (dirty/clean) uniform.",
            "We should wear uniform .................. (every day/on Sunday).",
            "In winter we wear ............................ (ice/coats).",
            "During races we ............................. (cry/cheer) for our house.",
            "An umbrella keeps us from getting .................. (dry/wet)."
          ].map((question, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 font-semibold mr-2">{index + 1}.</span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Phonic Scope Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-blue-700 flex items-center">
          <span className="bg-red-500 text-white px-2 py-1 mr-2 rounded-full">📚</span> 
          Phonic Scope
        </h2>
        <p className="text-lg text-red-600 font-semibold mt-2">
          Colour the shapes that have the words with the sound of ‘a’ as in ‘apple’.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {[
            { shape: "triangle", word: "nap" },
            { shape: "square", word: "pup" },
            { shape: "circle", word: "sap" },
            { shape: "triangle", word: "bit" },
            { shape: "circle", word: "hat" },
            { shape: "square", word: "sad" },
            { shape: "triangle", word: "got" },
            { shape: "circle", word: "gap" },
            { shape: "square", word: "ran" },
            { shape: "triangle", word: "kick" },
            { shape: "circle", word: "hunt" }
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-24 w-24 font-bold text-2xl border ${
                item.shape === "triangle"
                  ? "clip-triangle"
                  : item.shape === "circle"
                  ? "rounded-full"
                  : "rounded"
              }`}
              style={{ borderColor: "#333" }}
            >
              {item.word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
