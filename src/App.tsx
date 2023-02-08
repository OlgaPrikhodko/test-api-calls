import "./App.css";

// Have the React app call the Star Wars API people end point and display the first person on the page.
// 👉 Next, add msw so you can mock (or "stub") the API response.
// 👉 Use your mock server to write a test to check the first person that your mock server returns is being correctly rendered to the page.

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">SWAPI - The Star Wars API</header>
    </div>
  );
};

export default App;
