import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentLogin from "./components/StudentLogin";

function App() {
  return (
    <Router>
      <div className = "container">
        <div className = "columns">
          <div className = "column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element = {<LoginPage/>}></Route>
              <Route path="/stulog" element = {<StudentLogin/>}></Route>
              <Route path="/memlog" element = {<TeamMember/>}></Route>
              <Route path="/headlog" element = {<TeamHead/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
