import React from 'react';

const CompletedItem = props => {

    let showCompletedTask = null ;

    if(props.completedButton){
      showCompletedTask = props.completedTask.map(item =>{
      return (<li key={item.id}>{item.name}</li>)
      })
    }
    else{
      showCompletedTask = null;
    }

    return(
        <React.Fragment>
            <button onClick={props.showCompletedTask} >show Completed task</button>
            {showCompletedTask}
        </React.Fragment>
    );
}

export default CompletedItem;