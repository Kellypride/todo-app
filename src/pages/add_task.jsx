import React, { useState } from "react";
import Header from "../components/header";
import Input from "../components/input";
import db from "../firebase";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

import Button from "../components/button";

const AddTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dueDate: "",
    estimatedHour: "",
    priority: "",
  });
  return (
    <div className="flex flex-col gap-4 font-roboto">
      <Header />
      <form className="flex flex-col gap-56">
        <div className="flex flex-col gap-4 font-roboto">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">New Task</h3>
            <button className=" font-bold text-sm text-cyan-300 ">
              cancel
            </button>
          </div>
          <div className="flex flex-col gap-2 font-light text-xs text-gray-300">
            <p>Title</p>
            <Input
              placeholder="Enter task title"
              className=" bg-zinc-800 text-slate-200"
              type="text"
              name="title"
              value={formData.title}
              // onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 font-light text-xs text-gray-300">
            <p>Description</p>

            <textarea
              placeholder="Enter task description"
              className="focus:outline-cyan-100 bg-transparent bg-zinc-800 text-slate-200 p-4 !pb-10 rounded-lg"
              type="text"
              name="description"
              value={formData.description}
              // onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-between  items-baseline gap-2">
            <Input
              iconPosition="right"
              icon={<IoCalendarNumberOutline size={48} color={"#cbd5e1"} />}
              placeholder="date"
              className=" bg-zinc-800 text-slate-200"
              type="date"
              name="due date"
              value={formData.dueDate}
              // onChange={handleChange}
            />
            <Input
              iconPosition="right"
              icon={
                <LuAlarmClock
                  size={48}
                  color={"#cbd5e1"}
                  className="text-[#cbd5e1]"
                />
              }
              placeholder="estimated hours"
              className=" bg-zinc-800 text-slate-200"
              type="time"
              name="due date"
              value={formData.dueDate}
              // onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between bg-zinc-800 text-slate-200 p-4 rounded-lg">
            <Button
              text="High"
              className="py-2 px-6 bg-cyan-200  text-slate-800 rounded-lg !font-light !text-xs"
            />
            <Button
              text="Medium"
              className="py-2 px-6  text-slate-200 rounded-lg !font-light !text-xs"
            />
            <Button
              text="Low"
              className="py-2 px-6  text-slate-200 rounded-lg !font-light !text-xs"
            />
          </div>
        </div>
        <div className="absolute bottom-24 z-40 w-full left-0 p-4">
          <Button
            text="Save"
            className="py-4 px-4 bg-cyan-300 text-gray-800 rounded-full "
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
