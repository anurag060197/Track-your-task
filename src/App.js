import './App.css';
import { Container, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import RenderTask from './RenderTask';
import RenderCompletedTask from './RenderCompletedTask';

function App() {
  const [input, setInput] = useState('');
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  
  const handleAddTask = ()=>{
    if(input !== ''){
      let copyArr = [...arr1];
      copyArr.push(input);
      setArr1(copyArr);
      setInput('');
    }
  }

  const handleDone = (index)=>{
    let str = arr1[index];
    let copyArr2 = [...arr2];
    copyArr2.push(str);
    setArr2(copyArr2);

    let copyArr1 = [...arr1];
    copyArr1.splice(index, 1);
    setArr1(copyArr1);
  }

  const handleDelete = (index)=>{
    let copyArr1 = [...arr1];
    copyArr1.splice(index, 1);
    setArr1(copyArr1);    
  }
  
  const handleDelete2 = (index)=>{
    let copyArr2 = [...arr2];
    copyArr2.splice(index, 1);
    setArr2(copyArr2);    
  }
  
  return (
    <div>
      <div className="heading"><h1>Track Your Task</h1></div><br/>
      <Container>
        <div> 
          <InputGroup className="mb-3">
            <FormControl value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Write here..." id="inpt" />
            <Button variant="outline-secondary" onClick={handleAddTask} >Add task</Button>
          </InputGroup>
        </div>
        <div id="display-task">
          <div id="to-be-completed">
            <div className="heading">To Do</div>
            <RenderTask arr={arr1} handleDone={handleDone} handleDelete={handleDelete}/>
          </div>
          <div id="completed">
            <div className="heading">Completed</div>
            <RenderCompletedTask arr={arr2} handleDelete2={handleDelete2}/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;