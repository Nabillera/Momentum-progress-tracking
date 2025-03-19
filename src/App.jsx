import { useState, useEffect } from "react";
import "./App.css";
import AddEmployeeModal from "./components/AddEmployeeModal";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import OpenTaskPage from "./pages/OpenTaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TOKEN = "9e6c009b-1288-4a6b-a018-6a9e2b68c3d9";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [fetchedData, setFetchedData] = useState({
    statuses: [],
    priorities: [],
    departments: [],
    employees: [],
    tasks: [],
  });

  const categories = [
    "statuses",
    "priorities",
    "departments",
    "employees",
    "tasks",
  ];

  const handleShowModal = (isVisible) => {
    setShowModal(isVisible);
  };

  const fetchData = () => {
    categories.map((category) => {
      return fetch(`https://momentum.redberryinternship.ge/api/${category}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFetchedData((prev) => {
            return {
              ...prev,
              [category]: data,
            };
          });
        });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar onAddEmployee={() => handleShowModal(true)} />
        {showModal && (
          <AddEmployeeModal
            onClose={() => handleShowModal(false)}
            departments={fetchedData.departments}
          />
        )}
        <Routes id="routes">
          <Route index element={<HomePage data={fetchedData} />} />
          <Route
            path="create-task"
            element={
              <CreateTaskPage
                data={fetchedData}
                onAddEmployee={() => handleShowModal(true)}
              />
            }
          />
          <Route
            path="/tasks/:taskId"
            element={
              <OpenTaskPage
                data={fetchedData.tasks}
                priorities={fetchedData.priorities}
                statuses={fetchedData.statuses}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
