import React from "react";
import { Box, Button, Checkbox, Select } from "@chakra-ui/react";

const TaskItem = ({ task, onDelete, onToggleComplete, onPriorityChange }) => {
  return (
    <Box borderWidth={1} p={4} mb={2} display="flex" justifyContent="space-between" alignItems="center">
      <Checkbox isChecked={task.completed} onChange={onToggleComplete}>
        {task.title}
      </Checkbox>
      <Select value={task.priority} onChange={(e) => onPriorityChange(e.target.value)} size="sm">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </Select>
      <Button colorScheme="red" size="sm" onClick={onDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default TaskItem;
