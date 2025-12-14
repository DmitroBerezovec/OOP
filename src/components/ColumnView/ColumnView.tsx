import { useState } from "react";
import { Column } from "../ColumnClass/ColumnClass";

export function ColumnView({
  column,
  onChange,
}: {
  column: Column;
  onChange: () => void;
}) {
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    column.addTask(taskText);
    setTaskText("");
    onChange();
  };

  return (
    <div className="bg-yellow-200 p-3 w-[250px] flex flex-col gap-2 rounded">
      <input
        type="text"
        defaultValue={column.title}
        readOnly
        className="border p-1 rounded"
      />

      {column.tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-2 bg-white p-2 rounded"
        >
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => {
              column.toggleTask(task.id);
              onChange();
            }}
          />

          <span className={task.done ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>

          {task.done && (
            <span className="text-xs text-gray-500 ml-auto">
              {task.timestamp}
            </span>
          )}
        </div>
      ))}

      <div className="flex gap-2 mt-2">
        <input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border p-1 rounded flex-1"
        />
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={addTask}
        >
          +
        </button>
      </div>
    </div>
  );
}
