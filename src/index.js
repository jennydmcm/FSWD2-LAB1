import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";
import "./styles.css";
function App() {
  return (
    <div>
      <h1 className="title">My News Feed</h1>
      <Story
        image="https://placehold.co/600x400?text=News+Story"
        title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        author="By: Steve Hanley"
        desc="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
      <Story
        image="https://placehold.co/600x400?text=News+Story"
        title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        author="By: Steve Hanley"
        desc="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
      <Story
        image="https://placehold.co/600x400?text=News+Story"
        title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        author="By: Steve Hanley"
        desc="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
      <Story
        image="https://placehold.co/600x400?text=News+Story"
        title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        author="By: Steve Hanley"
        desc="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
    </div>
  );
}

function Story(props) {
  return (
    <div className="story-container">
      <div className="story-img">
        <img src={props.image} alt="" />
      </div>
      <div className="story-info">
        <h2 className="story-title">{props.title}</h2>
        <h3 className="story-author">{props.author}</h3>
      </div>
      <p className="story-desc">{props.desc}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
