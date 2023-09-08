const deleteTask = async (id) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
      method: 'delete',
    });
  
    loadTasks();
  }
  export default deleteTask;