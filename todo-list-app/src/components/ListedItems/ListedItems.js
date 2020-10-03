import React from 'react';
import ListedItem from './ListedItem/ListedItem';

import classes from './ListedItems.module.css';

const ListedItems  = props => {
    
    let styleChange = []
    if (props.names.length > 0){

      styleChange.push(classes.ListedItems);
      console.log('yes');
    }
    else{
      styleChange = [];
      console.log('no');
    }
    
    return(
      <div className={styleChange.join(' ')}>
        <ListedItem names = {props.names}
                    deleteHandler = {props.deleteHandler}
                    updateHandler = {props.updateHandler}
                    completedHandler = {props.completedHandler}
                    remainingHandler = {props.remainingHandler}/>
      </div>

    );
}



export default ListedItems