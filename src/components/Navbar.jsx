import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Route, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  console.log(url);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={
        scrollPosition > 100 ||
        window.location.href !== "http://localhost:5173/"
          ? "navbar nav-scrolled"
          : `navbar`
      }
    >
      <h3
        onClick={() => {
          navigate("/");
        }}
      >
        SB Fitzz
      </h3>

      {url === "http://localhost:5173/" ||
      url === "http://localhost:5173/#about" ||
      url === "http://localhost:5173/#search" ? (
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#search">
            <li>Search</li>
          </a>
        </ul>
      ) : (
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/#about")}>About</li>
          <li onClick={() => navigate("/#search")}>Search</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
