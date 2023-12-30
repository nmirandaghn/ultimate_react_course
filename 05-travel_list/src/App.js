export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackigList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far away 🦾</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}
function PackigList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>🌴You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
