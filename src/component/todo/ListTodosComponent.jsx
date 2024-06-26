import { useEffect, useState } from "react";
import {
  retrieveAllTodosForUsernameApi,
  deleteTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
  const today = new Date();

  const authContext = useAuth();
  const username = authContext.username;

  const navigate = useNavigate();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => refreshTodos());

  function refreshTodos() {
    retrieveAllTodosForUsernameApi(username)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    deleteTodoApi(username, id)
      .then(() => {
        setMessage(`Todo ${id}번이 성공적으로 삭제되었습니다.`);
        refreshTodos();
      })
      .catch();
  }

  function updateTodo(id) {
    console.log("clicked" + id);
    navigate(`/todo/${id}`);
  }

  function addNewTodo() {
    navigate(`/todo/-1`);
  }

  return (
    <div className="container">
      <h1>할 일을 적어주세요!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-success m-3" onClick={addNewTodo}>
        Add New Todo
      </button>
    </div>
  );
}

export default ListTodosComponent;
