import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldBean } from "./api/HelloWorldApiService";

function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {
    console.log("callHelloWorldRestApi");

    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("clean up"));
  }

  function successfulResponse(response) {
    console.log(response);
    setMessage(response.data.message);
  }
  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        {username}님의 할 일 목록 <Link to="/todos">가보자고</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
          Call Hello World
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default WelcomeComponent;
