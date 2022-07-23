import React, { useRef } from "react";
import { useNavigate } from "react-router";
import Button from "../utils/button";

const Homepage = () => {
  const navigate = useNavigate();
  const idInput = useRef();

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <h1 className="text-3xl text-center">สวัสดี</h1>
      <input
        type="number"
        ref={idInput}
        placeholder="กรอก id ของเครื่องที่นี่"
        className="text-right text-xl w-full rounded-md p-2 border-primary border-2 my-3"
      />
      <Button
        classes="btn-fill w-full"
        content="Go"
        onClick={() => {
          navigate(`/machines/${idInput.current.value}`);
        }}
      />
    </div>
  );
};

export default Homepage;
