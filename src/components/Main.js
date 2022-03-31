import React from "react";
import GeneralSearch from "./GeneralSearch";

const Main = () => {
  return (
    <div>
      <main>
        <GeneralSearch />
      </main>
      <div className="herobanner_main">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80"
          alt="library shelf"
        />
      </div>
  </div>
  );
};

export default Main;
