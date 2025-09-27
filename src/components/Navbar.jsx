import React from "react";

import Container from "./container";
const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <Container>
        <div>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col"
              >
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Changelog</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Download</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div
              
              className="flex-1 flex items-center gap-4"
            >
              <h2 className="text-2xl font-semibold">CS Ticket </h2>
            </div>
          </div>
          <div className="navbar-end gap-8">
            <div className="hidden lg:flex">
              <div className="flex gap-8">
                <a href="">Home</a>
                <a href="">FAQ</a>
                <a href="">Changelog</a>
                <a href="">Blog</a>
                <a href="">Download</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="">
              <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                + New Ticket
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
