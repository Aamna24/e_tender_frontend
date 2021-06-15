import React  from 'react';
import { Switch,Route, Redirect} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/navbar'
import AboutUs from './components/screens/AboutUs';
import ContactUs from './components/screens/ContactUs';
import Login from './components/screens/Login';
import Logout from './components/Logout';
//import SignUp from './components/screens/SignUp';
import Footer from './components/footer';
import Terms from './components/screens/Terms';
import HomePage from './components/screens/HomePage'
import auth from './services/authServices'
import TenderDetails from './components/Tenders/TenderDetails';
import FilteredCategory from './components/filteredCategory';
import Search from './components/screens/Search';
import SearchBids from './components/Bids/bids';
import BidDetails from './components/Bids/bidDetails';
import MybidDetails from './components/Bids/mybidDetails';

import PlaceBid from './components/Bids/PlaceBid'

import MyBids from './components/Profile/myBids';


import MyTenders from './components/Profile/myTenders';
import PublishTender from './components/Tenders/Publishtender';
import LatestTenders from './components/Tenders/latestTenders';
import MyTenderDetails from './components/Profile/myTenderDetails';
import Test from './components/test';
import ArchiveTenders from './components/Profile/ArchiveTenders';
import Editprofile from './components/Profile/Editprofile';
import EmailVerify from './components/Profile/EmailVerify';
import Msg from './components/Msg';
import ResetPasswordEmail from './components/screens/ResetPasswordEmail';
import ResetPassword from './components/screens/ResetPassword';
import SignUptest from './components/SignUptest';
import AdminHome from './Admin/adminHome';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={apiResponse: ""}
  }

  componentDidMount(){
    const user = auth.getCurrentUser();
    this.setState({user})
    
  }

  callAPI(){
    fetch(process.env.REACT_APP_API_URL+"/api/")
    .then(console.log("app connected"))
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
     
      <Navigation user={user}/>
      
        
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUptest} />
          <Route path="/terms" component={Terms} />
         {/* <Route path="/tenders" component={AllTenders} />*/}
         <Route path="/tenders" component={Test}/>
          <Route path="/home" component={HomePage} />
          <Route path="/logout" component={Logout} />
          <Route path="/category/:category" component={FilteredCategory} />
          <Route path="/search" component={Search} />
          {/*<Route path="/archive" component={ArchivesTenders} />*/}
          <Route path="/archive" component={ArchiveTenders} />
          <Route path="/test" component={Test} />


          <Route path="/details/:id" component={TenderDetails} />
          <Route path="/latest" component={LatestTenders} />
          <Route path="/publish" component={PublishTender} />
          <Route path="/my-tenders" component={MyTenders} />
          <Route path="/edit-profile" component={Editprofile} />

          <Route path="/place-bid/:id/:title" component={PlaceBid} />
          <Route path="/my-bids" component={MyBids} />
          <Route path="/viewbids" component={SearchBids} />
          <Route path="/bid-details/:id/:tenderId" component={BidDetails} />
        <Route path="/mybid-details/:id" component={MybidDetails}/>
        <Route path="/mytenders-details/:id" component={MyTenderDetails}/>
        <Route path="/email-verify" component={EmailVerify}/>
        <Route path="/msg" component={Msg}/>
        <Route path="/request-reset-email" component={ResetPasswordEmail}/>
        <Route path="/password-reset/:uidb64/:token/" component={ResetPassword}/>
        <Route path="/sign" component={SignUptest}/>

        <Route path="/admin" component={AdminHome}/>

          
          <Redirect from="/" exact to="/home" />
         
           
        </Switch>
       
        
     
      <Footer />
      </React.Fragment>
     
    );
  }
}
export default App;
