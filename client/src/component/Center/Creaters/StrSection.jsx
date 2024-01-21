import React from "react";

const StrSection = (props) => {
  return (
    <>
      <div className="justify-center items-center border rounded-lg p-4  shadow-2xl w-[100vh] my-[1rem]">
        <div className="justify-center text-center">
          <div>
            <h1 className="font-semibold font-sans text-2xl">{props.title}</h1>
          </div>
          <div>
            <p className="font-semibold font-sans text-sm">
              Writte By : {props.name}
            </p>
            <p className="font-semibold font-sans text-sm">
              Published On : {props.date}
            </p>
          </div>
          <div>
            <p className="m-w[50rem]">{props.primarytext}</p>
          </div>
          <br />
        </div>
        <div className="text-right text-blue-700">
          {props.link != "-" ? (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          ) : (
            <span>..</span>
          )}
        </div>
      </div>
    </>
  );
};

export default StrSection;
