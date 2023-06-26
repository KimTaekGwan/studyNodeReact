import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  // 상태 변화하는 data 정의
  const [data, setData] = useState([]);

  // dataId 정의 - 기본 0
  const dataId = useRef(0);

  // 데이터 추가 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    // newItem 정의
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    // data 상태 변화 (데이터 추가)
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
