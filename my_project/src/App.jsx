import Total_members from "./components/Total_members"
import Cards_Faith from "./components/cards_Faith"

function App() {
  

  return (
    <>
    <h1 className="text-5xl font-bold pt-40 pl-64 ">Faith</h1>
    <div className="flex items-center justify-center pb-28">
    <div className="pt-30 pl-30">
    <Cards_Faith text="QURAN RECITATION"/>
    </div>
    <div className="pt-30 pl-30">
    <Cards_Faith text="OFFER PRAYER"/>
    </div>
    <div className="pt-30 pl-30">
    <Cards_Faith text="PERFOEM HAJJ"/>
    </div>
    </div>
    {/* <div className="flex">

    <div className="h-28 w-1/4 ">
      <Total_members value={5666} title="total members" />
    </div>
    <div className="h-28 w-1/4 ml-7">
      <Total_members value={5666} title="total views" />
    </div>
    <div className="h-28 w-1/4 ml-7">
      <Total_members value={66666} title="total coments" />
    </div>
    <div className="h-28 w-1/4 ml-7">
      <Total_members value={5666} title="tserver load"  />
    </div>
    </div> */}
     </>
  )
}

export default App
