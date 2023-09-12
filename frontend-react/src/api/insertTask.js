const insertTask = async (task) => {
    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    })
    .then(resposta=>{
      if (!resposta.ok) { 
        alert('Erro adicionar a task!')
      }
    })
  };

export default insertTask;