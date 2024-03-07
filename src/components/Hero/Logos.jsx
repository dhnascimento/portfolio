import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

Logos.propTypes = {
  logosList: PropTypes.array.isRequired,
};

export default function Logos({ logosList }) {
const [logoIndex, setLogoIndex] = useState(0);
const logosLength = logosList.length;

useEffect(() => {
    const interval = setInterval(() => {
        const next = logoIndex + 1;
        if (next >= logosLength) {
            setLogoIndex(0);
        } else {
            setLogoIndex((prev) => prev + 1);
        }
    }, 5000);

    return () => clearInterval(interval);
});


  return (
    <>
      {logosList.map((logo, index) => {
        return (
            <img
              key={index}             
              src={logo.src}
              alt={logo.alt}
              className={classNames(...logo.classNames)}
              style={{ display: index !== logoIndex ? "none" : "block" }}
            />
        )
      })}
    </>
  );
}
