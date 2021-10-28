import React from "react";
import "./Welcome.css";
import { useStateValue } from "./StateProvider";

function Welcome() {
  const [{ user }] = useStateValue();
  return (
    <div className="Welcome">
      <h3>
        Welcome, <span>{user?.displayName}</span>
      </h3>
      <hr />
      <p>
        This is a SLACK clone built off <strong>React</strong>.
        <br />
        It was designed to be fast, and lightweight just like the original app.
        To do so, the app utilizes the React Context API, along with React
        Hooks. More advanced React devlopment techniques such as data layers
        were also used throught out the page. The goal of this app was to make a
        front-end clone of Slack, but backend functionality was also
        implemented, the app has completed google authentication, real time
        messaging, and updating.
        <br />
        <strong>Enough said, take a look for your self !</strong>
      </p>
    </div>
  );
}

export default Welcome;
