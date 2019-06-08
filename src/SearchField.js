import React, { Component } from 'react';



class SearchField extends Component {
    state = { 
        search:''
     }

    handleSearch = () => {

        this.props.handleSearch(this.state.search);
    }

    render() { 
        return ( 
            <div>
            <label>Search</label>
            <input placeholder onChange={(event) =>this.setState({search:event.target.value})}/>
            <button onClick = {this.handleSearch}>Submit</button>
            </div>
         );
    }
}
 
export default SearchField; 