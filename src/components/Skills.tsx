import style from "./skill.module.css";
const Skills = () => {
  return (
    <div className={`${style.bg} ${style.flex}`}>
      <div className={`${style.backDrop} ${style.flex}`}> </div>
      <img src="/me.png" alt="me" className={style.me} />
    </div>
  );
};

export default Skills;
