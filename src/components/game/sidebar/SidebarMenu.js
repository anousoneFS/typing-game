import React, { useState } from "react";
import "./sidebar-menu.css";

// Image
import dummyImage from "./../../../assets/img/no-image-avatar.png";

// Fontawesome
import {
  faBorderAll,
  faSignOutAlt,
  faUserCircle,
  faUserEdit,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { pageurl } from "../../pageurl";
import { useDispatch } from "react-redux";
import { SET_SCREEN_MESSAGE } from "../../../redux/types";

export const SidebarMenu = ({ openMenu }) => {
  const dispatch = useDispatch();

  const comingSoon = () => {
    dispatch({
      type: SET_SCREEN_MESSAGE,
      payload: {
        type: "danger",
        message: "Coming soon 🚀",
      },
    });
  };
  return (
    <React.Fragment>
      <div className={`sidebar-menu ${openMenu ? "open" : "closed"}`}>
        <section className="sidebar-menu--1">
          <img src={dummyImage}></img>
          <div>
            unclebigbay <br />
            unclebigbay@gmail.com
          </div>
        </section>
        <section className="sidebar-menu--2">
          <Link to="">
            <div>
              <FontAwesomeIcon icon={faUserCircle} className="logout-icon" />
            </div>
            View profile
          </Link>

          <a href={pageurl.HOMEPAGE} target="_blank" rel="noopener noreferrer">
            <div>
              <FontAwesomeIcon icon={faBorderAll} className="logout-icon" />
            </div>
            Leader Board
          </a>

          <a
            href={pageurl.HOMEPAGE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => comingSoon()}
          >
            <div>
              <FontAwesomeIcon icon={faUserFriends} className="logout-icon" />
            </div>
            Multi Player
          </a>

          <Link to="">
            <div>
              <FontAwesomeIcon icon={faUserEdit} className="logout-icon" />
            </div>
            Update profile
          </Link>
        </section>
        <section className="sidebar-menu--3">
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          <span>Log out</span>
        </section>
      </div>
    </React.Fragment>
  );
};