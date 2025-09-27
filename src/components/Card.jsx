import React from "react";
import { toast } from "react-toastify";

const Card = ({ getData, setData, openCard, setOpenCard }) => {
  const formatBDDateTime = (utcDateString) => {
    const date = new Date(utcDateString);
    return date.toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      month: "numeric",
      day: "numeric",
      year: "numeric",
      });
  };
  const handleClick = (cardData) => {
    const alreadyClick = openCard.find((click) => click.id === cardData.id);

    if (alreadyClick) {
      return;
    }
    const newCard = [...openCard, cardData];
    setOpenCard(newCard);

    const updatedData = getData.map((data) => {
      if (data.id == cardData.id) {
        return { ...data, status: "Open" };
      }
      return data;
    });

    setData(updatedData);

    toast.success("In-Progress");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {getData.map((data) => (
        <div
          key={data.id}
          onClick={() => handleClick(data)}
          className=" rounded-md shadow-md  cursor-pointer p-8 bg-white"
        >
          <div className="flex justify-between items-center mb-4 p-4">
            <h3 className="text-xl font-bold">{data.title}</h3>
            <h3
              className={`btn rounded-full ${
                data.status == "Open"
                  ? "text-gray-500 bg-green-300"
                  : data.status == "In-Progress"
                  ? "text-gray-500 bg-yellow-300"
                  : "text-green-500"
              }`}
            >
              {data.status}
            </h3>
          </div>
          <p>{data.description}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <p>#100{data.id}</p>
              <p
                className={`font-semibold ${
                  data.priority == "High"
                    ? "text-red-500"
                    : data.priority == "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {data.priority.toUpperCase()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>{data.customer.name}</p>
              <p>{formatBDDateTime(data.createdAt)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
