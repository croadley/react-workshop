const db = require("../db");

function getTodo() {
    const result = db.getData("/todo");
    console.log(result);
    const sortedResult = result.sort(function(a, b) {
        return a.id - b.id;
    });
    console.log(sortedResult);
    return sortedResult;
}

function addTodo(todoText) {
    const index = db.getData("/index");
    const newId = index + 1;

    const result = db.push("/todo[]", {id: newId, text: todoText, isCompleted: false}, true);
    db.push("/index", newId);
    return result;
}

function updateTodo(todoId, todoText, isCompleted) {
    db.delete("/todo[" + db.getIndex("/todo", todoId) + "]");
    const result = db.push("/todo[]", {id: todoId, text: todoText, isCompleted: isCompleted}, true);
    return result;
}

function deleteTodo(todoId) {
    const result = db.delete("/todo[" + db.getIndex("/todo", todoId) + "]");
    return result;
}

module.exports = {
    getTodo,
    addTodo, 
    updateTodo, 
    deleteTodo
}