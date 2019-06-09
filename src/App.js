import React,{Component} from 'react';
import './App.css';
import axios from 'axios'
import SearchField from './SearchField';


class App extends Component {

  state={
    data:[],
    currentTime: String(new(Date)),
    clearTime: ''
  }

async componentDidMount(){
  

const {data} = await axios.get(" http://api.giphy.com/v1/gifs/trending?api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V")
  this.setState({data:data.data})
}

componentWillMount() {
  clearInterval(this.state.clearTime)
}

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentTime !== this.state.currentTime
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if(prevState.data === this.state.data){
  //   const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${"hello"}&api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V`)
  //   this.setState({data:data.data})
  //   }
  // }

  handleSearchData = async(search) => {
    const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=y87yq4gzawJHGxKSAkKIOvY51Kwc8V0V`)
      this.setState({data:data.data})
  }

  displayTime = () => {
     this.state.clearTime = setInterval( () => {
      this.setState({currentTime: String(new(Date))
      }) 
    },1000)

   return this.state.currentTime
  }

  handleTrendingGif = () => {

    return(
      this.state.data.map((data, index) =>
      <div className="AppSub">
        <img  key={index} src={data.images.original.url}/>
      </div>)
    )
  }
  render(){
  return (
    <React.Fragment>
    <header className="App-header">
      {this.displayTime()}
      
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
