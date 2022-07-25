
import "./App.css";
//import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.min.css";
  import Card from "./Card"; 
//import { Badge, ListGroup } from "react-bootstrap";
import Cartitem from "./Cartitem";
import { useState } from "react";
function App() { 
const item=[
  {
    image:"https://m.media-amazon.com/images/I/41ZGJxnJu1S.jpg",
id:1,
title:"samsung",
price:17000
},
{
  image:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SX522_.jpg",
  id:2,
  title:"iphone",
  price:55000
  },
  {
    image:"https://images.hindustantimes.com/tech/img/2021/07/02/960x540/image_-_2021-05-20T084832.011_1621480715307_1623139491301_1625189985574_1625189993523.jpg",
    id:3,
    title:"Redmi",
    price:20000
    },
    {
      image:"https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/oppo-a55.jpg",
      id:4,
      title:"one plus",
      price:80000
      },
      {
        image:"https://i.ytimg.com/vi/cOkG43wJBeI/maxresdefault.jpg",
        id:5,
        title:"MI",
        price:30000
        },
        {
          image:"https://images.firstpost.com/wp-content/uploads/2018/04/Nokia-7-Plus-review-tech2-firstpost-1280-720-13.jpg",
          id:6,
          title:"nokia",
          price:19000
          }
]
  const[products,setProduct]=useState(item)
  const[cartitem,setCartItem]=useState([])
  const[total,setTotal]=useState(0)
  let handleAddToCart=(id)=>{
    const productIndex=products.findIndex((obj)=>obj.id===id)
    const product=products[productIndex]
    setCartItem([...cartitem,product])
    setTotal(total+product.price)
    // alert("hello")
  }
     const handleRemoveCart=(id)=>{
    const cartitemIndex=cartitem.findIndex((obj)=>obj.id===id)
    setTotal(total - cartitem[cartitemIndex].price)
    cartitem.splice(cartitemIndex,1)
    setCartItem([...cartitem])
   
  }
  return (
    <div className="App">
    <div className="container">
      <div className="row">
        
        <div className="col-lg-8">
          <div className="row">
          <div className="col-lg-12">
          <h3>PRODUCTS</h3>
        </div>
        </div>
       
          <div className="row">
            {products.map((product)=>{
              return <Card cartitem={cartitem} data={product} handleAddToCart={handleAddToCart} />
            })}
          </div>
         
          </div>
            <div className="col-lg-4">
              <div className="row">
               <div className="col-lg-12">
                <h3>Cart</h3>
                  </div>
                <ol class="list-group list-group-numbered">
                  {
                    cartitem.map((item)=>{
                      return  <Cartitem  data={item} handleRemoveCart={handleRemoveCart}/>
                    })
                  }
               
               
</ol>
<div className="col-lg-12 align-right">
<h2>Total:{total}</h2>
</div>
              </div>
            </div>
          
        </div>
      </div>
      </div>
  );
}

export default App;