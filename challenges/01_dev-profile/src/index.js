import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar name="Nelson Miranda" photoName="images/profile_photo.jpg" />
      <div className="data">
        <Intro name="Nelson Miranda" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.photoName} alt={props.name} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        An enthusiastic developer eager to learn more and more everyday. My
        hobbies are reading and chess.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" icon="🤷‍♂️" color="orangered" />
      <Skill skill="Javascript" icon="👍" color="yellow" />
      <Skill skill="React" icon="🦾" color="red" />
      <Skill skill="Nodejs" icon="🤳" color="pink" />
      <Skill skill="Git and Github" icon="😁" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color, borderRadius: "5px" }}>
      <div className="skill">
        {props.skill}
        {props.icon}
      </div>
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
