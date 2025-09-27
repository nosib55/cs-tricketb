import React from "react";

const ResolvedTask = ({ setResolvedTasks, resolvedTasks }) => {
  if (resolvedTasks.length === 0) return <p>No resolved tasks yet.</p>;
  return (
    <div>
      {resolvedTasks.map((card) => (
        <div
          key={card.id}
          className="shadow-md rounded-md p-4 bg-gray-100 mb-2"
        >
          <div className="flex justify-between gap-4">
          <h2>{card.title}</h2>
          <button onClick={() => setResolvedTasks(resolvedTasks.filter((c) => c.id !== card.id))}>
            ❌
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResolvedTask;
