import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
   const { user } = useSelector((state) => state.userInfo);
   console.log(user)
  return (
    <div>
      <h1>Welcome back {user.fName + " "+ user.lName} </h1>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
