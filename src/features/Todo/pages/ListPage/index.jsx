import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  //Get in4 cua location object
  const location = useLocation();
  // chuyen todoList thanh state
  const [todoList, setToDoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    // Sử dụng phần search --- phần sau dẫu ? của Url

    // sử dụng queryString để parse Url
    const parrams = queryString.parse(location.search);
    //console.log(parrams);

    return parrams.status || "all";
  });

  const handleTodoClick = (todo, idx) => {
    // clone current array to do new one
    const newTodoList = [...todoList];
    //console.log(todo, idx);

    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update todo
    setToDoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };
  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  //console.log(renderedTodoList);
  return (
    <div>
      <h3>Todo List</h3>
      {/* Goi ham handle  */}
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>ShowAll</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
