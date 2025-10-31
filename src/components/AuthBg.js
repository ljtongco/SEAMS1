import React from "react";
import bgImage from "../assets/uccbg.png";

function AuthBg({ children }) {
  const styles = {
    wrapper: {
      position: "relative",
      minHeight: "100vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(43, 43, 43, 0.68)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
      width: "100%",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>{children}</div>
    </div>
  );
}

export default AuthBg;
