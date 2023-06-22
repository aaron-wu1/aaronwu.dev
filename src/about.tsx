import './App.css'
import { data } from './data.tsx'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
      {data.experiences.map(({company, role, desc}) => (
        <div><p>{company}</p><p>{role}</p>
        <p>{desc}</p></div>
      ))}
      {data.projects.map(({name, desc}) => (
        <div><p>{name}</p><p>{desc}</p>
        <p>{desc}</p></div>
      ))}
    </>
  )
}

export default App
