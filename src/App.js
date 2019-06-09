import React,{Component} from 'react';
import './App.css';
import axios from 'axios'
import SearchField from './SearchField';


class App extends Component {

  state={
    data:[],
  }

async componentDidMount(){
  console.log("Data",this.state.data)
const {data} = await axios.get(" http://api.giphy.com/v1/gifs/trending?api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V")
  this.setState({data:data.data})
}
  handleSearchData = async(search) => {
    const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V`)
      this.setState({data:data.data})
  }

  handleTrendingGif = () => {
    console.log(this.state.data)
    return(
      this.state.data.map((data, index) =>
      <div className="AppSub">
        <img src={data.images.original.url}/>
      </div>)
    )
  }
  render(){
  return (
    <React.Fragment>
    <header className="App-header">
    <SearchField
    handleSearch={this.handleSearchData}
    />
  </header>
    <div className="App">
   
      {this.handleTrendingGif()}
     
    </div>
    </React.Fragment>
  );
  }
}

export default App;
