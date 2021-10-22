import { memo } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { StatefulTargetBox as TargetBox2 } from './TargetBox2';
import { Colors } from './Colors';
export const Container = memo(function Container() {
    return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
			<div style={{ float: 'left', marginTop: '70px'}}>
				<SourceBox color={Colors.BLUE}/>
                <SourceBox color={Colors.YELLOW}/>
                <SourceBox color={Colors.SPEED}/>
                <SourceBox color={Colors.DISTANCE}/>
                <SourceBox color={Colors.REVENUE}/>
			</div>

			<div style={{  marginLeft: '5rem', marginTop: '.5rem',display:'inline-block' }}>
                <TargetBox />
			</div>
            <div style={{  marginLeft: '5rem', marginTop: '.5rem',display:'inline-block' }}>
                <TargetBox2 />
			</div>
            
		</div>);
});
