import { MouseEventHandler } from 'react';
import '../App.css';

type ToggleBoxProps = {
  state: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const ToggleBox: React.FC<ToggleBoxProps> = ({ state, onClick }) => {
  return (
    <div className={"toggle-box" + (state ? " toggle-box-on" : "")} onClick={onClick}></div>
  );
}

export default ToggleBox;