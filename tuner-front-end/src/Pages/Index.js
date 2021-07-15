import React from "react";
import Songs from "../Components/Songs";

import apiURL from "../util/apiURL";

const API = apiURL();
console.log(API);

export default function Index() {
  return (
    <div>
      <ul>
        <Songs />
      </ul>
    </div>
  );
}
