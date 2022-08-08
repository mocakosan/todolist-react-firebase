import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../shared/firebase";

const UpDateList = () => {
  const navigate = useNavigate();
  const locate: any = useLocation();
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const onUpdate = async () => {
    const id: any = locate.state.board.id;
    await updateDoc(doc(db, "todolist", id), { title: newTitle, content: newContent });
    navigate("/home");
  };
  return (
    <div className="todo-wrapper">
      <div className="todo-body">
        <div className="todo-title">
          <h1>제목</h1>
          <input
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
            type="text"
            defaultValue={locate.state.board.title}
          />
        </div>
        <div className="todo-content">
          <h2>오늘의 할일</h2>
          <input
            onChange={(event) => {
              setNewContent(event.target.value);
            }}
            type="text"
            defaultValue={locate.state.board.content}
          />
        </div>
        <button onClick={onUpdate}>수정</button>
      </div>
    </div>
  );
};

export default UpDateList;
