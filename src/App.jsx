import MasonryGrid from "./assets/MasonryGrid.jsx";

function App() {
  return (
      <div className={"backdrop-blur-md h-screen bg-pink-300/15  w-full lg:w-3/4  border border-white/20  mx-auto"} >
          <div className={" mt-6 w-2/3 lg:w-1/3  h-1/8 lg:h-1/6 shadow-2xl/10  rounded-2xl mx-auto flex justify-center flex-col items-center border border-white/20"} >
              <h1 className={" text-3xl lg:text-5xl text-center font-mono text-gray-200 "}>Live Exhibit</h1>
              <p className={"text-xl text-center font-mono text-gray-200 "}>Made by Bilal Agrouane</p>
          </div>

          <MasonryGrid />
      </div>
  )
}

export default App