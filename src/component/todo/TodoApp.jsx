import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("testName");
  const [password, setPassword] = useState();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "testName" && password === "test") {
      console.log("Success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log("Faild");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <h1>Login Page</h1>
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          Authentication Failed. Please check your credentials.
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        {username}님의 할 일 목록 <Link to="/todos">가보자고</Link>
      </div>
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="header">
      Header
      <hr />
    </div>
  );
}

function FooterComponent() {
  return (
    <div className="footer">
      <hr />
      Footer
    </div>
  );
}

function LogoutComponent() {
  return (
    <div className="LogoutComponent">
      <h1>로그아웃 되었습니다!</h1>
      <div>저희 어플을 사용해 주셔서 감사합니다. 곧 다시 뵈요~</div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>404 에러 페이지입니다.</h1>.
      <div>죄송합니다. 최대한 빠르게 고칠게요.</div>
    </div>
  );
}

function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    {
      id: 1,
      description: "AWS 배우기",
      done: false,
      targetDate: targetDate,
    },
    {
      id: 2,
      description: "Full Stack 개발",
      done: false,
      targetDate: targetDate,
    },
    {
      id: 3,
      description: "DevOps 배우기",
      done: false,
      targetDate: targetDate,
    },
  ];
  return (
    <div className="container">
      <h1>할 일을 적어주세요!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
