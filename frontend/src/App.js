import React, { useEffect, useState } from 'react';
import Input from '@tds/core-input';
import Checkbox from '@tds/core-checkbox';
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import Card from '@tds/core-card'
import { Delete } from '@tds/core-interactive-icon'

import axios from 'axios';
const telusLogo = "data:image/png;base64,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"

const instance = axios.create({
  baseURL: 'http://localhost:8080/todos'
})

function getTodos() {
  return instance.get('/');
}

function deleteTodo(todoId) {
  return instance.delete(`/${todoId}`);
}

function updateTodo(todoId, todoObject) {
  return instance.put(`/${todoId}`, todoObject);
}

function createTodo(todoObject) {
  return instance.post('/', todoObject);
}

// Component for each item on the to-do list
const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
   <FlexGrid>
     <FlexGrid.Row>
       <FlexGrid.Col xs={11}>
          <Checkbox
            checked={todo.isCompleted}
            onChange={(e)=>{toggleTodo(todo.id, todo.text, todo.isCompleted)}}
            name={`${todo.id}-${todo.text}`}
            value={`${todo.id}-${todo.text}`}
            label={todo.text}
          />
       </FlexGrid.Col>
       <FlexGrid.Col xs={1}>
         <div style={{cursor: "pointer"}} onClick={() => removeTodo(todo.id)}><Delete/></div>
       </FlexGrid.Col>
     </FlexGrid.Row>
   </FlexGrid> 
  )
}

// Component to input a new item to the to-do list
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Add To-Do"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form> 
  );
}

// Header component
const Header = () => {
  return (
    <FlexGrid>
     <FlexGrid.Row verticalAlign="bottom">
       <FlexGrid.Col xs={4}>
          <img src={telusLogo} style={{width: "120px"}}></img>
       </FlexGrid.Col>
       <FlexGrid.Col>
          <Heading level="h1">To-Do</Heading>
       </FlexGrid.Col>
     </FlexGrid.Row>
    </FlexGrid>
  );
}

const App = () => {
  // useState is a hook to create state variables that are preserved between function calls
  const [todos, setTodos] = useState([]);

  const addTodo = async (text) => {
    await createTodo({"text": text});
    await getData();
  };

  const toggleTodo = async (index, text, isCompleted) => {
    await updateTodo(index, {"text": text, "isCompleted": !isCompleted});
    await getData();
  };

  const removeTodo = async (index) => {
    await deleteTodo(index);
    await getData();
  };

  const getData = async () => {
    const result = await getTodos();
    setTodos(result.data);
  }

  useEffect(() => {
    getData(); 
  }, [])

  return (
    <div style={{width: "500px", margin: "0px auto"}}>
      <Box inset={3} between={3}>
        <Header/>
        <Card variant="branded">
          <Box between={3}>
            {todos && todos.length !== 0 && todos.map((todo) => (
              <div>
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
                <HairlineDivider />
              </div>
            ))}
            <TodoForm addTodo={addTodo} />
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default App;