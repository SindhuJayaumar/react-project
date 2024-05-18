import {Component} from 'react'

import "./index.css"

class Home extends Component {
    state =  {
        inputText : '',
        
    }

    onChangeInputText = event => {
        this.setState({inputText:event.target.value})
    }

   
    

    render(){
        const {inputText} = this.state 
        

        return (
            <div className="card">
            <h1 className="heading">Editable Text Input</h1>
            <div class="button-card">

            <input type="text" className="input" 
            value={inputText} 
            onChange={this.onChangeInputText}/>

    
        <button type="button" 
        className="button"
        onClick={this.onClickButton}
        >Save</button>
       
    
           
            </div>
         </div>
        )
    }
}  

    


export default Home