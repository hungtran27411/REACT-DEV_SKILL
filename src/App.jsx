import { useState } from 'react'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'

function App() {

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function handleAddSkill(skillInput){
    setSkills([skillInput, ...skills])
  }

  return (
    <>
      <div className='App'>
      <h1 className='teal-text'>React Dev Skills</h1>
      <SkillList skillList={skills}/>
      <hr></hr>
      <NewSkillForm handleAddSkill={handleAddSkill}/>
      </div>
    </>
  )
}

export default App