import React, { useEffect, useState, Component } from "react";
import {Tabs,Tab,Form,Button} from 'react-bootstrap'
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./header";
import Footer from "./footer";
import Mybreadcrumb  from "./breadcrumb";
import axios from "axios";
var sectionStyle = {
	backgroundImage: "url(images/login-bg.jpg)"
  };
export default function Login(prop){
	const [name,setName]=useState("");
	const [email,setEmail]=useState("");
	const [password , setPassword]= useState("");
	const [confirm_password,setConfirmPassword]= useState("");
	
	async function login() {
		let item={
			email: email,
			password: password
		}
		let AuthStr = "";

		await axios.post("http://127.0.0.1:8000/login/" , item)
		.then(res => {
			if (res.status === 200){
				localStorage.setItem("isUserAthanticated",true)
				AuthStr = "Bearer "+res.data.access
				console.log(res.data.access)
				toast.success("Success!")
				// window.location.href = '/my_account';
				
			}
			else{
				toast.error("error")
			}
		})
		.catch(err => {
			console.log(err);
			toast.error(" " + err);		
		});
		await axios.get("http://127.0.0.1:8000/user/user_detail/", { 
			headers: { 
				Authorization: AuthStr 
			} 
		})
		.then(response => {
			// console.log(prop.isUserAthanticated)
			localStorage.setItem("UserData",JSON.stringify(response.data))
		})
		.catch((error) => {
			console.log('error ' + error);
		});
		await axios.get("http://127.0.0.1:8000/address/", { 
			headers: { 
				Authorization: AuthStr 
			} 
		})
		.then(res => {
			console.log(res);
			localStorage.setItem("UserAddress",JSON.stringify(res.data))
			window.location.href = '/my_account';
		})
		.catch((error) => {
			console.log('error ' + error);
		});
	}
	async function singUp() {
		let item={
			name: name,
			email: email,
			password: password,
			confirm_password: confirm_password
		}
		await axios.post("http://127.0.0.1:8000/user/user_registration/" , item)
		.then(res => {
			if (res.status === 200){
				toast.success("Success!")
			}
			else{
				toast.error("error")
			}
		})
		.catch(err => {
			console.log(err);	
			toast.error(err);	
		});
	}
    return(
        <div className='page-wrapper'>
			<ToastContainer 
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
            <Header updateState={prop.updateState} data={prop.data} isUserAthanticated={prop.isUserAthanticated} headerTheam="header"/>
            <Mybreadcrumb />
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={sectionStyle}>
                <div className="container">
                    <div className="form-box">
						<div className="form-tab">
						<Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" className=" nav-pills nav-fill">
								<Tab eventKey="signin" title="Sing In" className="nav-link">
									<form onSubmit={(e)=>{e.preventDefault()}} >
											<div class="form-group">
												<label for="singin-email">Username or email address *</label>
												<Form.Control className="form-control" type="email" onChange={(e)=>setEmail(e.target.value)} name="singin-email" id="singin-email" required/>
											</div>

											<div class="form-group">
												<label for="singin-password">Password *</label>
												<Form.Control className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} name="singin-password" id="singin-email" required/>
											</div>

											<div class="form-footer">
												<Button type="submit" onClick={login} className="btn btn-outline-primary-2">
													<span>LOG IN</span>
													<i class="icon-long-arrow-right"></i>
												</Button>
												<div className="myChackbox">
													<Checkbox
														icon={<Icon.FiCheck color="#174A41" size={14} />}
														name="my-input"
														checked={false}
														borderColor="#dadada"
														style={{ cursor: "pointer" }}
														labelStyle={{ marginLeft: 5, userSelect: "none" }}
														label="Remember Me"
													/>
												</div>

												<a href="#" class="forgot-link">Forgot Your Password?</a>
											</div>
										</form>
										<div class="form-choice">
											<p class="text-center">or sign in with</p>
											<div class="row">
												<div class="col-sm-6">
													<a href="#" class="btn btn-login btn-g">
														<i class="icon-google"></i>
														Login With Google
													</a>
												</div>
												<div class="col-sm-6">
													<a href="#" class="btn btn-login btn-f">
														<i class="icon-facebook-f"></i>
														Login With Facebook
													</a>
												</div>
											</div>
										</div>
								</Tab>
								<Tab eventKey="register" title="Register" className="nav-link">
								<form  onSubmit={(e)=>{e.preventDefault()}}>
											<div class="form-group">
												<label for="register-name-2">Username *</label>
												<input type="text" class="form-control" id="register-name-2" onChange={(e)=>setName(e.target.value)}  name="register-email" required />
											</div>
											<div class="form-group">
												<label for="register-email-2">Your email address *</label>
												<input type="email" class="form-control" id="register-email-2" onChange={(e)=>setEmail(e.target.value)}  name="register-email" required />
											</div>
											<div class="form-group">
												<label for="register-password-1">Password *</label>
												<input type="password" class="form-control" id="register-password-1" onChange={(e)=>setPassword(e.target.value)} name="register-password" required />
											</div>
											<div class="form-group">
												<label for="register-password-2">Confirm Password *</label>
												<input type="password" class="form-control" id="register-password-2" onChange={(e)=>setConfirmPassword(e.target.value)} name="register-password" required />
											</div>
											<div class="form-footer">
												<Button type="submit" onClick={singUp} className="btn btn-outline-primary-2">
													<span>SIGN UP</span>
													<i class="icon-long-arrow-right"></i>
												</Button>
												<Checkbox
													icon={<Icon.FiCheck color="#174A41" size={14} />}
													name="my-input"
													checked={false}
													borderColor="#dadada"
													style={{ cursor: "pointer" }}
													labelStyle={{ marginLeft: 5, userSelect: "none" }}
													label="I agree to the"
												/>
											</div>
										</form>
										<div class="form-choice">
											<p class="text-center">or sign in with</p>
											<div class="row">
												<div class="col-sm-6">
													<a href="#" class="btn btn-login btn-g">
														<i class="icon-google"></i>
														Login With Google
													</a>
												</div>
												<div class="col-sm-6">
													<a href="#" class="btn btn-login  btn-f">
														<i class="icon-facebook-f"></i>
														Login With Facebook
													</a>
												</div>
											</div>
										</div>
								</Tab>
							</Tabs>
						</div>
                    </div>
                </div>
            </div>
			<Footer />
        </div>
    );
}