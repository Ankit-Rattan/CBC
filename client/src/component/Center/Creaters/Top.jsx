import React from "react";
import Logo from "../../Logo";

const Top = () => {
  return (
    <div className="flex justify-between p-1 bg-slate-100 shadow-2xl">
      <Logo />
      <p className="items-center text-center text-4xl m-10 font-light">
        Present Your Mind Here
      </p>
      <div></div>
    </div>
  );
};

export default Top;
