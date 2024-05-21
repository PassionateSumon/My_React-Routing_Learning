/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex justify-center items-center font-semibold p-6 bg-slate-500 text-2xl">
      User: {userid}{" "}
    </div>
  );
}

export default User;
