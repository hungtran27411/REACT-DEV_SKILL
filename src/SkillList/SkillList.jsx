import SkillListItem from "../SkillListItem/SkillListItem";
import './SkillList.css'

export default function SkillList({ skillList }) {

  const skillsLi = skillList.map((item, idx) => {
    return (<SkillListItem key={idx} skill={item} />)
  })

  return (
    <ul className="SkillList">
      {skillsLi}
    </ul>
  );
}