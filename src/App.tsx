import { useEffect, useState, MouseEventHandler } from 'react';
import ToggleBox from './components/ToggleBox';
import './App.css'

const App = () => {
  
  const NUM_BOXES = 18;
  const [boxes, setBoxes] = useState<{ state: boolean, key: number }[]>([]);
  const [selectedBox, setSelectedBox] = useState({});

  const flipBoxes = (fromIndex: number, toIndex: number) => { // toggles boxes between fromIndex and toIndex inclusive
    const newBoxes = [...boxes];
    const startIndex = Math.min(fromIndex, toIndex);
    const endIndex = Math.max(fromIndex, toIndex);
    for (let i = startIndex; i <= endIndex; i++) {
      newBoxes[i].state = !newBoxes[i].state;
    }
    setBoxes(newBoxes);
    setSelectedBox({}); 
  }

  const handleBoxClick: MouseEventHandler<HTMLDivElement> = (e) => { 
    let clickedBox = e.target as HTMLElement;
    if (Object.keys(selectedBox).length === 0) { // no box selected
      clickedBox.classList.add('toggle-box-selected');
      setSelectedBox(e.target);
    } else { // box already selected
      (selectedBox as HTMLElement).classList.remove('toggle-box-selected');
      flipBoxes(getIndexOfNode((selectedBox as HTMLElement)), getIndexOfNode(clickedBox));
    }
  }

  const getIndexOfNode = (node: HTMLElement) => { // returns index of node in parent
    if (node.parentNode) return Array.from(node.parentNode.children).indexOf(node);
    return -1;
  }

  useEffect(() => { // initialise boxes
    const initialBoxes = [];
    for (let i = 0; i < NUM_BOXES; i++) {
      initialBoxes.push({ state: i > 5 && i < 12, key: i });
    }
    setBoxes(initialBoxes);
  }, []);

  return (
    <>
      N4 Studio Test Project: Finn Innes
      <div className= {"toggle-box-container"}>
        {boxes.map((box) => {
          return <ToggleBox key={box.key} onClick={handleBoxClick} state={box.state} />
        })}
      </div>
    </>
  )
}

export default App; App;
