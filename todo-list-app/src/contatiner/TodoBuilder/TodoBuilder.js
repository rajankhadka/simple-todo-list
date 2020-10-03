import React ,{Component} from 'react';

import InputItems from '../../components/InputItems/InputItems';
import ListedItems from '../../components/ListedItems/ListedItems';

import CompletedItem from '../../components/CompletedItem/CompletedItem';
import RemainingItem from '../../components/RemainingItem/RemainingItem';


class TodoBuilder extends Component{
    state = {
        names: [],
        name:'',
        edit: false,
        initial_id: 0,
        completedTask: [],
        remainingTask :[],
        completedButton : false,
        remainingButton :false,
        
    }
    
    changeHander = (event,id)=>{
        this.setState({
          name: event.target.value,
          edit: false,
        })
        
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        let newName = {
          name:this.state.name,
          id : this.state.initial_id,
          completed: false,
          remaining: false,
        }
        let new_value = [...this.state.names,newName];
        if (this.state.name){
          
          this.setState({
            names:new_value,
            name: '',
            edit: false,
            initial_id : this.state.initial_id + 1,
            
            
          })
        }
        
        console.log(this.state.names);
        console.log(this.state.names);
        console.log('[initial id]',this.state.initial_id);
    
    }
    
    deleteHandler = (index)=>{
        let new_items = [...this.state.names];
        console.log('[from delete]',this.state.names[index].name)
        new_items.splice(index,1);
        this.setState({
          names: new_items,
          edit: false,
        })
    
    }


    updateHandler =(item)=>{
        let editednames = this.state.names.filter(name => name.id !== item.id)
    
        this.setState({
    
          name: item.name,
          names: editednames,
          edit:!this.state.edit,
    
        })
        
        console.log(editednames);
    }


    
    afterchangeHander = (event,id)=>{
        this.setState({
          name: event.target.value,
          
        })
        
    }


    
    completedHandler = (item) =>{
    
        let newItemId = this.state.names.findIndex(newItem => {
          return item.id === newItem.id;
        })
    
        let newItems = [...this.state.names];
    
        newItems[newItemId].remaining = false;
        newItems[newItemId].completed = true;
    
        this.setState({
          names: newItems,
        })
    
        console.log('[newItemId]',newItemId);
        console.log('[newItems]',newItems);
    }


    
    remainingHandler = (item) =>{
    
        let newItemId = this.state.names.findIndex(newItem => {
          return item.id === newItem.id;
        })
    
        let newItems = [...this.state.names];
    
        newItems[newItemId].remaining = true;
        newItems[newItemId].completed = false;
    
        this.setState({
          names: newItems,
        })
    
        console.log('[newItemId]',newItemId);
        console.log('[newItems]',newItems);
      
    
    }


    
    showCompletedTask =() =>{
        let completedTask = this.state.names.filter(item =>{
          return item.completed === true
        })
        
        this.setState({
          completedTask : completedTask,
          completedButton : !this.state.completedButton,
          remainingButton : false,
        })
        console.log('[completedTask]',completedTask);
    }


    
    showRemainingTask = ()=>{
        let remainingTask = this.state.names.filter(item =>{
          return item.remaining === true
        })
        
        this.setState({
          remainingTask : remainingTask,
          completedButton : false,
          remainingButton : !this.state.remainingButton,
        })
        console.log('[remainingTask]',remainingTask);
    }

    render(){
        return(
            <React.Fragment>
                <InputItems edit = {this.state.edit}
                            submitHandler ={this.submitHandler}
                            afterchangeHander= {this.afterchangeHander}
                            name = {this.state.name}
                            changeHander= {this.changeHander}/>
                
                <ListedItems names = {this.state.names}
                            deleteHandler = {this.deleteHandler}
                            updateHandler = {this.updateHandler}
                            completedHandler = {this.completedHandler}
                            remainingHandler = {this.remainingHandler}/>

                <CompletedItem completedButton = {this.state.completedButton}
                              completedTask={this.state.completedTask}
                              showCompletedTask = {this.showCompletedTask}/>

                <RemainingItem showRemainingTask = {this.showRemainingTask}
                                remainingButton = {this.state.remainingButton}
                                remainingTask = {this.state.remainingTask}/>
            </React.Fragment>
        )
    }

    
    
}

export default TodoBuilder;


  