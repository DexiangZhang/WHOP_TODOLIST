import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import avatar from "../svg/avatar_image.jpg";

import homeCSS from "../CSS/home.module.css";

import TodoList from "./TodoList";

import { motion } from "framer-motion";

function Home() {
  // re-render the cicular image everytime return the page
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    let img = new Image();
    img.onload = () => {
      let contextWidth, contextHeight;
      contextWidth = canvas.width = img.width;
      contextHeight = canvas.height = img.height;
      context.drawImage(img, 0, 0);
      context.globalCompositeOperation = "destination-in";
      context.beginPath();
      context.arc(
        contextWidth / 2,
        contextHeight / 2,
        contextHeight / 2,
        0,
        Math.PI * 2
      );
      context.closePath();
      context.fill();
    };
    img.src = avatar;
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exitinitial={{ opacity: 0 }}
      >
        <div className={homeCSS.header}>
          <canvas id="canvas"></canvas>
          <span>Lists</span>
          <Link to="/newToDo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9828 1.89377C24.0094 2.91892 24.0094 4.58111 22.9828 5.60626L21.5766 7.0172L16.9828 2.42439L18.3938 1.01533C19.4203 -0.00999215 21.0797 -0.00999215 22.1063 1.01533L22.9828 1.89377ZM8.08125 11.3297L15.9234 3.4847L20.5172 8.07658L12.6703 15.9188C12.3844 16.2094 12.0328 16.425 11.6438 16.5563L7.48125 17.9438C7.03594 18.075 6.63281 17.9719 6.32813 17.6297C6.02813 17.3672 5.925 16.9219 6.05625 16.5188L7.44375 12.3563C7.575 11.9672 7.79063 11.6156 8.08125 11.3297ZM9 2.95783C9.82969 2.95783 10.5 3.67173 10.5 4.45783C10.5 5.3297 9.82969 5.95783 9 5.95783H4.5C3.67172 5.95783 3 6.67033 3 7.45783V19.5C3 20.3297 3.67172 21 4.5 21H16.5C17.3297 21 18 20.3297 18 19.5V14.9578C18 14.1703 18.6703 13.4578 19.5 13.4578C20.3297 13.4578 21 14.1703 21 14.9578V19.5C21 21.9844 18.9844 24 16.5 24H4.5C2.01469 24 0 21.9844 0 19.5V7.45783C0 4.97345 2.01469 2.95783 4.5 2.95783H9Z"
                fill="#242424"
              />
            </svg>
          </Link>
        </div>

        <TodoList />
      </motion.div>
    </>
  );
}

export default Home;
