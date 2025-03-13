import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const categories = ["statuses", "priorities", "departments"];
  const [fetchedData, setFetchedData] = useState({
    statuses: [],
    priorities: [],
    departments: []
  });

  const fetchData = () => {
    categories.map((category) => {
      return fetch(`https://momentum.redberryinternship.ge/api/${category}`)
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
    </div>
  );
}

export default App;
