import React from "react";
import Footer from "../../Footer";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import img1 from "../../images/bytes.png";
const CodeIntro = () => {
  return (
    <>
      <Logo />
      <div className="outer_1">
        <div className="about_bytes">
          <h1>Bytes</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolorem hic voluptas quis impedit velit, veniam atque, dolorum
            fugiat doloribus doloremque. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reiciendis dolorem hic voluptas quis impedit
            velit, veniam atque, dolorum fugiat doloribus doloremque. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolorem hic voluptas quis impedit velit, veniam atque, dolorum
            fugiat doloribus doloremque.
          </p>

          <div>
            <button>
              <NavLink to="/blog">Click Here</NavLink>
            </button>
          </div>
        </div>
        <div className="about_bytes_bg"></div>
      </div>
      {/* seco d */}
      <div className="outer_1">
        <div className="about_bytes about_open_chat">
          <h1>Open Chat</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolorem hic voluptas quis impedit velit, veniam atque, dolorum
            fugiat doloribus doloremque. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reiciendis dolorem hic voluptas quis impedit
            velit, veniam atque, dolorum fugiat doloribus doloremque. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolorem hic voluptas quis impedit velit, veniam atque, dolorum
            fugiat doloribus doloremque.
          </p>

          <div>
            <button>
              <NavLink to="/chatcode">Click Here</NavLink>
            </button>
          </div>
        </div>
        <div className="about_oc_bg"></div>
      </div>
    </>
  );
};

export default CodeIntro;

{
  /* <li>
<NavLink to="/blog">Bytes</NavLink>
</li> */
}

{
  /* <li>
<NavLink to="/chatcode">OPEN Chat</NavLink>
</li> */
}
