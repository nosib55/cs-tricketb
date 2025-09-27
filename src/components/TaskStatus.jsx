import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  openCard,
  setOpenCard,
  getData,
  setData,
  setResolved,
  resolved,
  resolvedTasks,
  setResolvedTasks,
}) => {
  if (openCard.length === 0) return <p>No task selected</p>;

  const handleComplete = (card) => {
    setOpenCard(openCard.filter((c) => c.id !== card.id));

    setData(getData.filter((d) => d.id !== card.id));

    const resolvedCount = resolved + 1;
    setResolved(resolvedCount);

    setResolvedTasks([...resolvedTasks, card]);

    toast.success("Resolved");
  };

  return (
    <div className="space-y-4">
      {openCard.map((card) => (
        <div key={card.id} className=" rounded-md p-4 bg-white shadow-md">
          <h2 className="text-lg font-bold">{card.title}</h2>
          <button
            onClick={() => handleComplete(card)}
            className="btn w-full  text-white rounded-b-md bg-green-500 mt-2"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
