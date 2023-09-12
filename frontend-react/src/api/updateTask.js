const updateTask = async (task) => {
  console.log(task);
  const {id} = task;

    await fetch(`http://localhost:3333/tasks/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });

    console.log()
  }
  export default updateTask;