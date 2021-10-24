import { useState, useCallback, memo } from 'react';
import { useDrop } from 'react-dnd';
import { Colors } from './Colors';
import LineChart from './LineChart';
const style = {
    border: '1px solid gray',
    height: '7rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
    margin:'20px'
};
const TargetBox = memo(function TargetBox({ onDrop, lastDroppedColor, }) {
    const [{ isOver, draggingColor, canDrop }, drop] = useDrop(() => ({
        accept: [Colors.BLUE,Colors.SPEED, Colors.DISTANCE],
        drop(_item, monitor) {
            onDrop(monitor.getItemType());
            return undefined;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    }), [onDrop]);
    const opacity = isOver ? 1 : 0.7;
    let backgroundColor = '#fff';
    switch (draggingColor) {
        case Colors.BLUE:
            backgroundColor = 'lightblue';
            break;
        case Colors.SPEED:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        case Colors.DISTANCE:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        default:
            break;
    }
    return (<div ref={drop} data-color={lastDroppedColor || 'none'} style={{ ...style, backgroundColor, opacity }}>
			<p>Drop X axis here.</p>

			{!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor}</p>}

            <LineChart x={lastDroppedColor} y={lastDroppedColor} />
		</div>);
});
export const StatefulTargetBox = (props) => {
    const [lastDroppedColor, setLastDroppedColor] = useState(null);
    const handleDrop = useCallback((color) => setLastDroppedColor(color), []);
    return (<TargetBox {...props} lastDroppedColor={lastDroppedColor} onDrop={handleDrop}/>);
};
