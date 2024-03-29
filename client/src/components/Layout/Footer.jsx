import React from "react";

const Footer = () => {
  return (
    <>
      {/* component */}
      <footer className="w-full p-4 absolute bottom-[-50px] bg-black text-white">
        <div className="text-center">
          <p>
            Copyright © 2023 -
            <a className="font-semibold" href="mailto:work.yagyaraj.com">
              &nbsp; Form Builder
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
