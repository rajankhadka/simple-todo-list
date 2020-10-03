import React from 'react';

import classes from './InputItems.module.css'

const InputItems = props =>{
    
        return (
            <div className={classes.InputItems}>
                <h1>My Todo List</h1>
            { (props.edit) ? 
            <div className = {classes.formDiv}>
                <form onSubmit={(event)=>{props.submitHandler(event)}}>
                    <input type = "text" 
                            placeholder="enter the value" 
                            onChange={(event)=>{props.afterchangeHander(event,1)}} 
                            value={props.name}></input>
                    
                    <button className={classes.editme}> Edit Me</button>
                </form>
            </div> 
            : 
            <div className = {classes.formDiv}>
                <form onSubmit={(event)=>{props.submitHandler(event)}}>
                    <input type = "text" 
                            placeholder="enter the value" 
                            onChange={(event)=>{props.changeHander(event,1)}} 
                            value={props.name}></input>
                    
                    <button className={classes.saveme}> Save </button>
                </form>
            </div>}
            </div>)
            
            
        

}

export default InputItems