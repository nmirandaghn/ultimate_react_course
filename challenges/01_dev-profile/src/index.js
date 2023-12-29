import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "HTML + CSS", level: "advanced", color: "orangered" },
  { skill: "Javascript", level: "intermediate", color: "yellow" },
  { skill: "React", level: "beginner", color: "red" },
  { skill: "Nodejs", level: "beginner", color: "pink" },
  { skill: "Git and Github", level: "advanced", color: "green" },
];

const levels = { beginner: "🤔", intermediate: "🙂", advanced: "🦾" };

function App() {
  return (
    <div className="card">
      <Avatar name="Nelson Miranda" photoName="images/profile_photo.jpg" />
      <div className="data">
        <Intro name="Nelson Miranda" />
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
      {skills.length > 0 ? (
        <>
          {skills.map((skill) => (
            <Skill skillObj={skill} key={skill.skill} />
          ))}
        </>
      ) : null}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div style={{ backgroundColor: skillObj.color, borderRadius: "5px" }}>
      <div className="skill">
        <span>{skillObj.skill}</span>
        <span>{levels[skillObj.level]}</span>
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
