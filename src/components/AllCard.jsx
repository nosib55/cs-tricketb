import React, { use, useState } from "react";
import Container from "./container.jsx";
import Card from "./Card.jsx";
import CardCount from "./CardCount.jsx";
import TaskStatus from "./TaskStatus.jsx";
import ResolvedTask from "./ResolvedTask.jsx";
import Banner from "./CardCount.jsx";


const AllCard = ({ fetchPromised }) => {
  const promisedData = use(fetchPromised);
  const [getData, setData] = useState(promisedData);
  const [openCard, setOpenCard] = useState([]);
  const [resolved, setResolved] = useState(0);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  return (
    <div>
      {
        <CardCount
          getData={getData}
          openCard={openCard}
          setOpenCard={setOpenCard}
          resolved={resolved}
        ></CardCount>
      }

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-13 mb-20">
          <div className="md:col-span-9 order-2">
            <h1 className="text-2xl font-bold mb-4 ml-2">Customer Tickets</h1>
            <div>
              {
                <Card
                  getData={getData}
                  setData={setData}
                  openCard={openCard}
                  setOpenCard={setOpenCard}
                ></Card>
              }
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2">
            <div>
              <h1 className="text-2xl font-bold mb-4 ml-2">Task Status</h1>
              <div className="ml-2">
                {
                  <TaskStatus
                    getData={getData}
                    openCard={openCard}
                    setData={setData}
                    setOpenCard={setOpenCard}
                    setResolved={setResolved}
                    resolved={resolved}
                    resolvedTasks={resolvedTasks}
                    setResolvedTasks={setResolvedTasks}
                  ></TaskStatus>
                }
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold mb-4 ml-2">Resolved Task</h1>
              <div className="ml-2">
                {
                  <ResolvedTask
                    resolvedTasks={resolvedTasks}
                    setResolvedTasks={setResolvedTasks}
                  ></ResolvedTask>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllCard;
