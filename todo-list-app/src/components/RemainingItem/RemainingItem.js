import React from 'react';

const RemainingItem = props =>{

    let showRemainigTask = null;

    if(props.remainingButton){
      showRemainigTask = props.remainingTask.map(item =>{
      return (<li key={item.id}>{item.name}</li>)
      })
    }
    else{
      showRemainigTask = null;
    }
    return(
        <React.Fragment>
            <button onClick={props.showRemainingTask}>show Remaining task</button>
            {showRemainigTask}
        </React.Fragment>
    );
}

export default RemainingItem;