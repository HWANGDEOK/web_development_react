import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`안녕 ${name}!`)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={name}/>
      <input type="submit" value="제출" />
    </form>
  )
}
