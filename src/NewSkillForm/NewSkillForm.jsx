import { useState } from "react"

import './NewSkillForm.css'

export default function NewSkillForm({handleAddSkill}) {

    const [newSkill, setNewSkill] = useState ({ name: '', level: 3})

    function handleChange(e) {
        setNewSkill({...newSkill, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddSkill(newSkill);
        setNewSkill({ name: '', level: 3})
    }

    return (
        <form className='NewSkillForm' onSubmit={handleSubmit}>
            <label>Skill</label>
            <input name='name'type='text' value={newSkill.name} onChange={handleChange}/>
            <label>Level</label>
            <select name="level" value={newSkill.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    )
}