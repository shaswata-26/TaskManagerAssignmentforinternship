import React, { useState, useEffect } from "react";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from "./utils/localStorage";

const App = () => {
  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    saveTasksToLocalStorage(filteredTasks);
  }, [filteredTasks]);

  const addTask = (title) => {
    const newTask = {
      title,
      completed: false,
      priority: "low",
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const toggleTaskComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const changeTaskPriority = (index, priority) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, priority } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleSearch = (term) => {
    if (term) {
      setFilteredTasks(tasks.filter((task) => task.title.toLowerCase().includes(term.toLowerCase())));
    } else {
      setFilteredTasks(tasks);
    }
  };

  const handleSort = (sortBy) => {
    let sortedTasks = [...filteredTasks];
    if (sortBy === "priority") {
      sortedTasks = sortedTasks.sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sortBy === "completed") {
      sortedTasks = sortedTasks.sort((a, b) => a.completed - b.completed);
    }
    setFilteredTasks(sortedTasks);
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" mt={4}>
        <Box mb={4}>
          <TaskInput onAddTask={addTask} />
        </Box>
        <Box mb={4}>
          <SearchBar onSearch={handleSearch} />
        </Box>
        <Box mb={4}>
          <SortDropdown onSort={handleSort} />
        </Box>
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskComplete}
          onPriorityChange={changeTaskPriority}
        />
       
      </Container>
    </ChakraProvider>
  );
};

export default App;
