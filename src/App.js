import React, { Component } from 'react';
import { Switch,Route, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/navbar'
import Tenders from './components/Tenders';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import Footer from './components/footer';
import Terms from './components/Terms';
import HomePage from './components/HomePage'
import auth from './services/authServices'
import PublishTender from './components/Publishtender';
import LatestTenders from './components/latestTenders';
import Details from './common/details';
import FilteredCategory from './components/filteredCategory';
import PlaceBid from './components/PlaceBid'
import MyTenders from './components/myTenders';
import Search from './components/Search';
import Test from './components/test';
import MyBids from './components/myBids';
import SearchBids from './components/bids';
import BidDetails from './common/bidDetails';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={apiResponse: ""}
  }

  componentDidMount(){
    const user = auth.getCurrentUser();
    console.log(user)
    this.setState({user})
    
  }

  callAPI(){
    fetch("http://127.0.0.1:8000/api/")
    .then(res=> res.text())
    .then(res=> this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }
  render(){
    const {user} = this.state;
    return(
     
      <React.Fragment>
         <ToastContainer/>
     
      <Test user={user}/>
      
        
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/terms" component={Terms} />
          <Route path="/tenders" component={Tenders} />
          <Route path="/home" component={HomePage} />
          <Route path="/logout" component={Logout} />
          <Route path="/logout" component={Logout} />
          <Route path="/details" component={Details} />
          <Route path="/category" component={FilteredCategory} />
          <Route path="/latest" component={LatestTenders} />
          <Route path="/publish" component={PublishTender} />
          <Route path="/place-bid" component={PlaceBid} />
          <Route path="/my-tenders" component={MyTenders} />
          <Route path="/my-bids" component={MyBids} />
          <Route path="/search" component={Search} />
          <Route path="/viewbids" component={SearchBids} />
          <Route path="/bid-details" component={BidDetails} />
         
          
          <Route path="/test" component={Test}/>
          <Redirect from="/" exact to="/home" />
         
           
        </Switch>
       
        
     
      <Footer />
      </React.Fragment>
     
    );
  }
}
export default App;