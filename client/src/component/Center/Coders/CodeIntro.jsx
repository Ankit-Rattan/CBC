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
            
Byte is the optimal choice for accelerating your tech growth and problem-solving. This platform offers a rich blog that serves as a invaluable resource, providing insights, tutorials, and solutions. Whether you're a developer seeking expertise or a tech enthusiast, Byte's blog fosters continuous learning and empowers you in navigating the ever-evolving tech landscape.
          </p>

          <div>
            <button>
              <NavLink to="/blog">Bytes</NavLink>
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

          Open Chat is the ultimate destination for fostering collaborative discussions and resolving doubts in the tech realm. With its dynamic discussion panels, the platform becomes a vibrant hub where enthusiasts, professionals, and learners converge. Engage in open conversations, seek solutions, and propel your knowledge forward with Open Char's interactive and supportive community.
          </p>

          <div>
            <button>
              <NavLink to="/chatcode">Discuss Here</NavLink>
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
