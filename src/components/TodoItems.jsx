import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems , onDeleteClick}) {
  return (
    <div className={styles.items_container}>
      {todoItems.map(function (i) {
        return (
          <TodoItem
            key={i.name}
            todoDate={i.dueDate}
            todoName={i.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        );
      })}
    </div>
  );
}

export default TodoItems;
