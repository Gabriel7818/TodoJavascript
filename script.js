// Função de adicionar tarefas

function addTask(){
    // Titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    console.log(taskTitle);

    if(taskTitle){
        // Clonar o template
        const template = document.querySelector('.template');
        // console.log(template);
        const newTask = template.cloneNode(true);
        // console.log(newTask);

        // Adicionar o Titulo
        // <p></p>
        newTask.querySelector('.task-title').textContent = taskTitle;
        // console.log(newTask);

        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // Minha ul
        // Adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        // Adicionando o template <li> + <p> com o texto
        list.appendChild(newTask);

        // Adicionar o evento remover
        const removeBtn = newTask.querySelector(".btn-remove").addEventListener("click", function(){
            removeTask(this);
        })

        // Adicionar o evento completar a tarefa
        const doneBtn = newTask.querySelector(".btn-done").addEventListener("click", function(){
            completeTask(this);
        })
    }

    // Limpar texto
    document.querySelector('#task-title').value ="";
}

const addBtn = document.querySelector('#btn-add');

addBtn.addEventListener("click", function(e){
    e.preventDefault(); // Não efetuar reload ou [F5] no seu navegador
    // console.log('Eu cliquei no botão');
    addTask();
})

function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

function removeTask(task){
    task.parentNode.remove(task);
}