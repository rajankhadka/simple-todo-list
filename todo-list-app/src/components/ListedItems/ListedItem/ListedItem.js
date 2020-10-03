import React from 'react';

import classes from './ListedItem.module.css';

const ListedItem = props =>(

  props.names.map((n,index)=>{
      return (
        <div className={classes.ListedItem} key={index}>
          <div className ={classes.ListedItemhead}>
            <h2>{n.name}</h2>
            <p onClick={()=>{props.deleteHandler(index)}}>
              delete
            </p>
            <p onClick={()=>{props.updateHandler(n)}}>update</p>
          </div>
          <div className={classes.ListedItemfoot}>
            <p onClick= {()=>{props.completedHandler(n)}} >Completed</p>
            <p onClick= {()=>{props.remainingHandler(n)}}>Remaining</p>
          </div>
        </div>
      )
  })
)

export default ListedItem;