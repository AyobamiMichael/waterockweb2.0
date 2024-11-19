import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import RegisterPharmacy from './pharmacy/registerpharmacy';
//import DTabs from './components/Tab/tabs';
import ViewDrugs from './drugs/viewdrugs';
//import UserDetails from './components/userdetails';
import blueline from './images/blue-line-png-1.png';
import backgroundImg from './images/cpharma3.jpg'
import './images/image.css';
import RegisterDrug from './drugs/registerdrug';
import Logoutuser from './components/logout/logout';
import ViewAllDrugs from './drugs/viewalldrugs';
import UpdatePharmacy from './pharmacy/updatepharmacy';
import EditDrug from './drugs/editproduct';
import RegisterProduct from './drugs/registerproduct';
import UserData from './components/userdata';
import UserDetails from './components/userdetails';
import Searchdrugs from './landingpage/pharmacyitemslandingpage';
import ViewLandingPage from './components/mainlandingpage/mainlandingpage';
import Getfood from './Fooditems';
import Homepage from './Homepage';
import DrugApp from './Drugfinder';
import Home from './homepagenavbar/home';
import About from './homepagenavbar/about';
import ContactUs from './homepagenavbar/contactus';
import Allfoods from './multileveldropdownmenu/routes/allfoods';
import Alldrinks from './multileveldropdownmenu/routes/alldrinks';
import FreshFoods from './multileveldropdownmenu/routes/freshfoods';
import RegisterShopForm from './multileveldropdownmenu/registershop/Registershop';
import SignUpFormForUser from './multileveldropdownmenu/signupformforuser/signupformforuser';
import SignInFormForUser from './multileveldropdownmenu/datamanagerfolder/datamanagersigninform';
import ProductDashboard from './multileveldropdownmenu/dashboard/productsdashboard';
import SignUpFromCart from './multileveldropdownmenu/signupfromcart/signupfromcart';
import ViewShoppingmallProducts from './multileveldropdownmenu/dashboard/viewshoppingmallproducts';
import AllWater from './multileveldropdownmenu/routes/allwater';
import  Toiletries  from './multileveldropdownmenu/routes/toiletries';
import  HouseHoldGoods from './multileveldropdownmenu/routes/householdgoods';
import  ConsumerElectronics from './multileveldropdownmenu/routes/consumerelectronics';
import DashboardNavbar from './multileveldropdownmenu/dashboard/dashboardnavbar';
import EditProduct from './multileveldropdownmenu/dashboard/editproduct';
import Mobiledisplayoffreshfoodsdetailpage from './multileveldropdownmenu/mobiledisplayoffreshfoodsdetailspage';
import Mobiledisplayofbeveragesdetailspage from './multileveldropdownmenu/mobiledisplayofbeveragesdetailspage';
import Mobiledisplayofalcoholicdetailspage from './multileveldropdownmenu/mobiledisplayofalcoholicdetailspage';
import Mobiledisplayofhouseholdgoodsdetailspage from './multileveldropdownmenu/mobiledisplayofhouseholdgoodsdetailpage';
import SignUpBarManager from './barsandresturants/signupbarmanager';
import SignInBarManager from './barsandresturants/signinbarmanager';
import AddBarProductsForm from './barsandresturants/barproductsform';
import BarsAndResturantsDashBoard from './barsandresturants/barsandresturantsdashboard';
import RegisterBarForm from './barsandresturants/addbarsformnew';
import NewAddBarProductsForm from './barsandresturants/newbarproductsform';
import EditBarProductsGrid from './barsandresturants/editbarsproducts';
import ViewDeleteBar from './barsandresturants/viewdeletebars';
import ForgotPasswordBarManager from './barsandresturants/forgotpasswordpage';
 import FooterContactUs from './footercontactUs';
 import AdminLogin from './barsandresturants/adminpage';
 import ForgotPasswordAdmin from './barsandresturants/forgotpasswordadmin';
 import CustomerCareSubmission from './barsandresturants/customercaredetailspage';

 // IMPLEMENT ALL ROUTES HERE


function App(){
    return(
      <Router>
      <Routes>
         <Route exact path='/' element={<Homepage/>}/>
         <Route exact path='/fooditems' element={<Getfood/>}/>
         <Route exact path="/pharmacyitems" element={<Searchdrugs />} />
         <Route path="/userdetails" element={<UserDetails />} />      
       <Route path="/logout" element={<Logoutuser />} />
       <Route path="/login" element={<Login />} />
       <Route path="/viewalldrugs" element={<ViewAllDrugs />} />
       <Route path="/editproduct" element={<EditDrug />} />
         <Route exact path = "/sign-up" element={<SignUp />} />
         <Route exact path = "/sign-in" element={<Login />} />
         <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/contactus" element={<ContactUs />} />
         <Route exact path="/allfoods" element={<Allfoods />} />
         <Route exact path="/alldrinks" element={<Alldrinks />} />
         <Route exact path='/freshfoods' element={<FreshFoods />}/>
         <Route exact path='/signupshoppingmall' element={<RegisterShopForm />}/>
         <Route exact path='/signupformforuser' element = {<SignUpFormForUser/>}/>
         <Route exact path='/signinformforuser' element={<SignInFormForUser/>}/>
         <Route exact path='/productdashboard' element={<ProductDashboard/>}/>
         <Route exact path='/signupfromcart' element={<SignUpFromCart/>}/>
         <Route exact path='/registershoppingmall' element={<RegisterShopForm/>}/>
         <Route exact path='/viewshoppingmallproducts' element={< ViewShoppingmallProducts/>}/>
         <Route exact path='/viewallwater' element={< AllWater/>}/>
         <Route exact path='/alltoiletries' element={<  Toiletries/>}/>
         <Route exact path='/householdgoods' element={<HouseHoldGoods/>}/>
         <Route exact path='/consumerelectronics' element={< ConsumerElectronics/>}/>
        
         <Route exact path='/dashboardnavbar' element={< DashboardNavbar/>}/>
         <Route exact path='/getproductforediting/:_id' element={< EditProduct/>}/>
         <Route exact path='/mobiledisplayoffreshfoodsdetailspage' element={<Mobiledisplayoffreshfoodsdetailpage />}/>
         <Route exact path='/mobiledisplayofbeveragesdetailspage' element={<Mobiledisplayofbeveragesdetailspage />}/>
         <Route exact path='/mobiledisplayofalcoholicdetailspage' element={<Mobiledisplayofalcoholicdetailspage />}/>
         <Route exact path='/mobiledisplayofhouseholdgoodsdetailspage' element={<Mobiledisplayofhouseholdgoodsdetailspage />}/>
         <Route exact path='/drugviewforpharmacy' element={< ViewDrugs />}/>
         <Route exact path='/registerpharmacy' element={<RegisterPharmacy/>}/>
         <Route exact path='/registerproduct' element={<RegisterProduct/>}/>
         <Route exact path='/signupbarmanager' element={<SignUpBarManager/>}/>
         <Route exact path='/signinbarmanager' element={<SignInBarManager/>}/>
         <Route exact path='/barsandresturantsdashboard' element={<BarsAndResturantsDashBoard/>}/>
         <Route exact path='/addbarproductsform' element={<AddBarProductsForm />}/>
         <Route exact path='/addbarform' element={<RegisterBarForm/>}/>
         <Route exact path='/editbarproducts' element={<EditBarProductsGrid/>}/>
         <Route exact path='/viewdeletebar' element={<ViewDeleteBar/>}/>
         <Route exact path='/forgotpasswordbarmanager' element={<ForgotPasswordBarManager/>}/>
        
         <Route exact path='/footercontactus' element={<   FooterContactUs
        />}/>
       
         <Route exact path='/admin'   element={< AdminLogin/>}/>
         <Route exact path='/forgotpasswordadmin'   element={< ForgotPasswordAdmin/>}/>
         <Route exact path='/customercaredetailspage' element={<CustomerCareSubmission/>}/>
         
        
      </Routes>
          </Router>
    )
   
}

export default App;
