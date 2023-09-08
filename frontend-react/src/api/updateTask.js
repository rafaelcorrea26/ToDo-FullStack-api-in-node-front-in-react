const updateTask = async ({ id, title, status }) => {

    await fetch(`http://localhost:3333/tasks/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status }),
    });
  
    loadTasks();
  }
  export default updateTask;