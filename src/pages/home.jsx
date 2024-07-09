import React, { useState, useEffect } from "react";
import Card from "../components/cards";
import Calendar from "../components/calendar";
import Header from "../components/header";
import Button from "../components/button";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getShortDateFromDateString } from "../utils/get_short_date_from_date_string";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksRef = collection(db, "tasks");
    getDocs(tasksRef)
      .then((snapshot) => {
        const tasks = [];
        snapshot.docs.forEach((doc) => {
          tasks.push({ ...doc.data(), id: doc.id });
        });
        setTasks(tasks);
      })
      .catch((error) => {
        console.log("An error occured while fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="flex flex-col gap-4 font-roboto">
      <Header />
      <h3 className="font-bold text-2xl">Boost your productivity</h3>
      <div className="flex flex-wrap gap-4">
        <Calendar day="Sun" date="10" className="!bg-cyan-400 !text-black" />
        <Calendar day="Mon" date="11" />
        <Calendar day="Tue" date="12" />
        <Calendar day="Wed" date="13" />
        <Calendar day="Thu" date="14" />
        <Calendar day="Fri" date="15" />
        <Calendar day="Sat" date="16" />
      </div>
      <div className=" flex ">
        <h3 className="font-bold text-xl">Today's Tasks</h3>
        <Button
          text="Add Task"
          className="py-4 px-4 bg-cyan-400 text-gray-800 rounded-full"
        />
      </div>
      {tasks.map((task, key) => (
        <Card
          key={key} // Use the task ID for a unique key
          id={task.id}
          priority={task.priority}
          status={task.status} // Pass the background color prop
          taskTitle={task.title}
          // Calculate formatted date outside JSX
          date={getShortDateFromDateString(task.due_date)}
          hours={task.estimated_hours}
        />
      ))}
    </div>
  );
};

export default HomePage;
