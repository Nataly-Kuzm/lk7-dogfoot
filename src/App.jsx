import React, {useState, useEffect} from "react";
//import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Api from "./Api.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row, Col} from "react-bootstrap";


const App = ()=>{
    const[data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    
    const [token, setToken] = useState(localStorage.getItem("shop-user"));
    const [popupActive, changePopupActive] = useState (true);
    const[api, setApi] = useState(new Api(token));

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
                console.log("User", data);
            })
        } else {
            setGoods([]);
            setData([]);
        }
       }, [api]);
       
       return <>
        <div className="wrapper">
           <Header products={data} update={setGoods} openPopup={changePopupActive} user={!!token} setToken={setToken}/>
           <Catalog goods={goods}/>
           <Footer/>
        </div>  
       {!token && <Modal isActive={popupActive} changeActive={changePopupActive} setToken={setToken} api={api}/> }
        </>
    }
export default App;