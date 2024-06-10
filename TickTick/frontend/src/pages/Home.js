import { useEffect } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import './Home.css'

// Components
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const { tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="welcome">
            <h1>Welcome to Your tasks Tracker</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail">
              {tasks && tasks.map((task) => (
                <div className="workouts" key={task._id}>
                  <TaskDetails task={task} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <TaskForm />
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default Home;
