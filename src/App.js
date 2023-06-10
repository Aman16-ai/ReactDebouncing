import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = setTimeout(async () => {
      const url = `https://api.github.com/users/${username}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data -------> ", data);
      setUser(data);
    }, 2000);
    return () => clearTimeout(getUser);
  }, [username]);
  return (
    <>
      <div
        style={{
          width: "100vh",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "11rem",
            height: "95px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            display: "flex"
          }}
        >
          <div style={{ width: "40%", border: "2px solid red" }}></div>
          <div
            style={{
              width: "60%",
              border: "2px solid green"
            }}
          >
            {user?.name}
          </div>
        </div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginTop: "20px" }}
          type="text"
          placeholder="Enter username"
        />
      </div>
    </>
  );
}
