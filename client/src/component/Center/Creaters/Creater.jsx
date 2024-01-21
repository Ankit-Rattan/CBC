import React from "react";
import StrSection from "./StrSection";
import Top from "./Top";
// import RegistrationForm from './RegistrationForm'
import PostForm from "./PostForm";
import PostList from "./PostList";

const Creater = () => {
  return (
    <div className="bg-slate-100 h-full m-0 p-0">
      <Top />
      <br />
      <div className="post_creator">
        <PostForm />
        <PostList />
      </div>
    </div>
  );
};

export default Creater;
