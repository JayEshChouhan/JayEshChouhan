import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../Components/home';
import Login from '../Components/login';
import Myaccount from '../Components/my_account';
import ProductDetail from '../Components/product/ProductDetail';
import ProductPage from '../Components/product/productPage';
// import axios from 'axios';
class App extends React.Component {
  constructor(props){  
    super(props);
    this.state = {  
      isUserAthanticated: JSON.parse(localStorage.getItem('isUserAthanticated')),
      data: JSON.parse(localStorage.getItem('UserData')),
      addressData: JSON.parse(localStorage.getItem('UserAddress'))
    }
  }

  handleUpdate = (value) => {
    this.setState({ 
      isUserAthanticated: value
    })
  }
  
  render(){
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          <Route exact path="/shop" element={<Home updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          <Route exact path="/products" element={<ProductPage updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>}/>
          <Route exact path="/xproducts/:productId" element={<ProductDetail updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>}/>
          <Route exact path="/pages" element={<Home updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          <Route exact path="/blog" element={<Home updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          <Route exact path="/elements" element={<Home updateState={this.handleUpdate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          <Route path="/my_account" element={ <Myaccount updateState={this.handleUpdate} changeState={this.changestate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          <Route path="/login" element={ <Login  updateState={this.handleUpdate} changeState={this.changestate} isUserAthanticated={this.state.isUserAthanticated} data={this.state.data} addressData={this.state.addressData}/>} />
          {/* <Route path="/logout" element={ <Login  updateState={this.handleUpdate} changeState={this.changestate} isUserAthanticated={this.state.isUserAthanticated}/>} /> */}
          {/* <Navigate to="/" element={<Home />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;