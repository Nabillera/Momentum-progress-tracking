import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const TOKEN = "9e6c009b-1288-4a6b-a018-6a9e2b68c3d9";

function App() {
  const categories = [
    "statuses",
    "priorities",
    "departments",
    "employees",
    "tasks",
  ];

  const [fetchedData, setFetchedData] = useState({
    statuses: [],
    priorities: [],
    departments: [],
    employees: [],
    tasks: [],
  });

  const fetchData = () => {
    categories.map((category) => {
      return fetch(`https://momentum.redberryinternship.ge/api/${category}`, {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
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
      <Navbar />
      <HomePage data={fetchedData}/>
    </div>
  );
}

export default App;
