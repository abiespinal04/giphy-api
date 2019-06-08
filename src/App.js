import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import SearchField from './SearchField';
import Card from './Card'

class App extends Component {

  state={
    data:[],
    searchData:[],
    search:''
  }

async componentDidMount(){
  console.log("Data",this.state.data)
const {data} = await axios.get(" http://api.giphy.com/v1/gifs/trending?api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V")
  this.setState({data:data.data})
}


  handleSearch = (search) => {
    
    console.log(search)
    this.setState({
      search
    })
  }

  async componentDidUpdate(prevProps,prevState){
    if(prevProps.data !== this.state.data){
      const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V`)
      this.setState({data:data.data})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.state.data
  }
  handleSearchData = async(search) => {
   
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
    handleSearch={this.handleSearch}
    />
  </header>
    <div className="App">
   
      {this.handleTrendingGif()}
     
    </div>
    <Card/>
    </React.Fragment>
  );
  }
}

export default App;
