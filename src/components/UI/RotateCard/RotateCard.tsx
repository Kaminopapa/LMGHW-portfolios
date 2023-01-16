import styled from "./rotate_card.module.css";
const RotateCard = () => {
  return (
    <div className={styled.card}>
      <div className={`${styled.card_side} ${styled.front}`}>
        <div>Front Side</div>
      </div>
      <div className={`${styled.card_side} ${styled.back}`}>
        <div>Back Side</div>
      </div>
    </div>
  );
};
export default RotateCard;
