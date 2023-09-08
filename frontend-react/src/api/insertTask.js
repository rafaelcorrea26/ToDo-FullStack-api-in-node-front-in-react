const insertTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };

    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    loadTasks();
    inputTask.value = '';
  };

export default insertTask;