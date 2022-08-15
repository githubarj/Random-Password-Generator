import React from "react";
import bigImage from "../assets/Big-Image.png";
import emoji from "../assets/Emoji.png";
import tick from "../assets/Right.png";

export default function Main() {
  return (
    <div className="main">
      {/* left side of the div */}
      <div className="left">
        {/* block 1 of the left side div */}
        <div className="block-1">
          <h1>Want a new password ?</h1>
          <p>Click on the tick icon to copy to clipboard</p>

          {/* outputs */}
          <div className="outputs">
            <div className="password" id="password-1">
              <p>12$treet8</p>
              <img src={tick} alt="tick" className="tick" />
            </div>
            <div className="password" id="password-2">
              <p>12$treet8</p>
              <img src={tick} alt="tick" className="tick" />
            </div>
          </div>

          {/* generate button */}
          <button className="generate-btn">Generate New</button>
        </div>
        {/* end of block 1 div */}

        <hr />

        {/* block two with a short paragraph */}
        <div className="block-2">
          <h2>
            For the greatest safety{" "}
            <img src={emoji} alt="emoji" className="h2-img" />{" "}
          </h2>
          <article className="safety">
            Use different characters in your password and make<br></br> it
            unique. Also, don't forget to use different<br></br> passwords for
            different services.
          </article>
        </div>
        {/* end of block 2 */}
      </div>
      {/* end of left side */}

      {/* start of right side */}
      <div className="right">
        <img src={bigImage} alt="" className="big-img" />

        {/* text section */}
        <section className="info">
          {/* paragraph */}
          <article className="fa">
            <h2>2FA Authentication</h2>
            <p className="more-fa">
              Use two-factor authentication for the<br></br> greatest security
              and convenience.
            </p>
          </article>
          {/* end of paragraph */}
          <button className="more-btn">More</button>
        </section>
        {/* end of text section */}
      </div>
      {/* end of right side */}
    </div>
    // done
  );
}
