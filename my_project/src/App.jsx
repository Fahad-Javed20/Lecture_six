import Total_members from "./components/Total_members"

function App() {
  

  return (
    <>
    <div className="flex">

    <div className="h-28 w-1/4 ">
      <Total_members value={5666} title="total members" />
    </div>
    <div className="h-28 w-1/4 ml-7">
      <Total_members value={5666} title="total views"/>
    </div>
    <div className="h-28 w-1/4 ml-7">
      <Total_members value={66666} title="total coments"/>
    </div>
    <div className="h-28 w-1/4 ml-7">
      <Total_members value={5666} title="tserver load"/>
    </div>
    </div>
     </>
  )
}

export default App
