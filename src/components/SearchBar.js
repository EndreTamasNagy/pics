import React from 'react';
import App from './App';


class SearchBar extends React.Component {
    
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault(); //prevents the browser to submit the form and reload the page
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input  
                            type="text" 
                            value={this.state.term} 
                            onChange={(e)=>{this.setState({term: e.target.value.toUpperCase()})}}/>
                        <label>{this.state.term}</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar; 