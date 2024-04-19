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

export default ListTodosComponent;
