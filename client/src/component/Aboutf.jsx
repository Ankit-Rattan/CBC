import React from "react";
import about from "./images/about.png";
import about2 from "./images/mainTwo.png";
import Navbar from "./Navbar";

function Aboutf() {
  return (
    <>
      <div className="About" id="about">
        <div className="feature">
          <div className="fleft">
            <div className="ele who-we ">
              <h3>Who We ARE🤔</h3>
              <br />
              <div className="para">
                <p>
                  We are one among you and still building ourself to build
                  this.😀
                  <br /> <b>We are just obsessed with creations</b>{" "}
                </p>
              </div>
            </div>
            <div className="ele who-we">
              <h3 className="text-emerald-500">Why to Choose US</h3>
              <br />
              <div className="para">
                <p>
                  CBC is the platform which provides <b>peak creative edges</b>{" "}
                  at one platform. 😎 <br /> You can discuss your doubt and
                  issues with the same other in Coder👨‍💻 <br /> To pull out your
                  creativity we have our Creators section 📝
                </p>
              </div>
            </div>
            <div className="ele who-we">
              <h3 className="text-red-500">How we help you</h3>
              <br />
              <div className="para">
                <p>
                  If you are just fed up searching here and there pilling issues
                  in mind.
                  <br /> Then you are at right place. ✅ <br /> Also if you feel
                  to express your mind like our developer, then you can just
                  post it.
                  <br /> We will explode your reach! 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutf;
