import { useParams, Link } from "react-router-dom";

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

export default WelcomeComponent;
