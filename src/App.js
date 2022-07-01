import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Calendar from './components/Calendar/Calendar';
import CompletedTask from './components/CompletedTask/CompletedTask';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ToDoList />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="addTask" element={<AddTask />} />
        <Route path="completedTask/:itemId" element={<CompletedTask />} />
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
