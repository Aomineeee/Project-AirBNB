import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
export default function Spinner() {
  let { loading } = useSelector((state) => {
    return state.spinnerSlice;
  });

  return (
    <>
      {loading ? (
        <div className="bg-black z-50 bg-opacity-50 fixed h-screen w-screen flex justify-center items-center">
          <ReactLoading
            type={"bubbles"}
            color={"#ff385c"}
            height={"150px"}
            width={"150px"}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
