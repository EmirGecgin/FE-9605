import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ListedItems = styled.li`
  cursor: pointer;
  margin-top: 5px;
  padding: 8px;
  background-color: #f8f9fa; 
  border: 1px solid #dee2e6; 
  border-radius: 5px; 
  &:hover {
    background-color: #dfe2e4; 
  }
  display: flex;
  align-items: center;
  justify-content: start;
`;

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput.trim()]);
      setTodoInput('');
    }
  };

  const removeTodo = (valueToRemove) => {
    setTodos(todos.filter((item) => item !== valueToRemove));
  };

  return (
    <div style={{ background: '#454544', height: "100vh" }}>
      <h1 className='text-center py-2 text-white'>Todo List</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Form
          style={{
            maxWidth: '500px',
            width: '100%',
          }}
          className="mb-5"
          onSubmit={addTodo}
        >
          <Form.Group className="d-flex align-items-center">
            <Form.Control
              value={todoInput}
              type="text"
              placeholder="Enter a todo item..."
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <Button
              variant="secondary"
              type="submit"
            >
              Add
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <Container
        style={{
          maxWidth: '525px',
          height: 'auto',
        }}
      >
        <ul
          className="list-unstyled d-flex flex-column"
        >
          {todos.map((item, index) => (
            <ListedItems onClick={() => removeTodo(item)} key={index}>
              {item}
            </ListedItems>
          ))}
        </ul>
      </Container>
    </div>
  );
}
export default App;
