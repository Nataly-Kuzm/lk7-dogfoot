import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Api from "./Api.js";
import Local from "./Local.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row, Col} from "react-bootstrap";


const App = ()=>{
    const[data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    
    const [token, setToken] = useState(Local.getItem("shop-user"));
    const [user, setUser] = useState(Local.getItem("u", true));
    const [popupActive, changePopupActive] = useState (true);
    const[api, setApi] = useState(new Api(token));
    const [fav, setFav] = useState([]);

    useEffect(() => {
        setApi(new Api(token));
    }, [token])

      // useEffect(() => {
       //     fetch("https://api.react-learning.ru/products", {
       //         headers: {
       //             "Authorization": `Bearer ${token}`
       //         }
       //     })
       //     .then(res => res.json())
       //      .then(data => {
       //         setGoods(data.products);
       //         setData(data.products);
       //     });
      // }, []);
     
       useEffect(() => {
        if (token) {
             api.getProducts()
             .then(res => res.json())
             .then(data => {
          setGoods(data.products);
          setData(data.products);
         })
           api.showProfile()
            .then(res => res.json())
            .then(data => {
               // console.log("User", data);
            })
        } else {
            setGoods([]);
            setData([]);
        }
       }, [api]);
       useEffect(() => {
        const f = goods.filter(el => el.likes.includes(user._id))
    
        setFav(f);
       }, [goods])
       
       return <>
        <div className="wrapper">
           <Header
            products={data}
             update={setGoods}
              openPopup={changePopupActive}
               user={!!token} 
               setToken={setToken}
               setUser={setUser}
               likes={fav.length}
               />
          {/* <Catalog goods={goods}/>*/}
          <Routes>
           <Route path="/" element={<Main/>} />
            <Route path="/catalog" element={<Catalog goods={goods} setFav={setFav} api={api}/>}/>
            <Route path="/product/:id" element={<Product api={api}/>} /> 
            <Route path="/profile" element={<Profile user={user}/>}/>
          </Routes>
           <Footer/>
        </div>  
       {!token && <Modal 
       isActive={popupActive}
        changeActive={changePopupActive}
         setToken={setToken}
          api={api} 
          setUser={setUser}
          /> }
        </>
    }
export default App;