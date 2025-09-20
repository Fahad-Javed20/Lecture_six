import React from "react";

export default function Total_members(props) {
  return (
    <div className="flex bg-red-400 items-center">
     <div id="logo" className=" bg-purple-400  size-16">
        logo
     </div>
      <div className="bg-green-400 flex-1 py-4">
        <div className="">{props.title}</div>
        <div className="text-3xl font-bold ">{props.value*2}</div>
      </div>
    </div>
  );
}
