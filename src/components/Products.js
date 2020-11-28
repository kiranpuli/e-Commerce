import React, { Component } from 'react'
import "../App.css"
export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products row">
                    {
                        this.props.products.map(e=>(
                            <a href={"#"+e._id} class="card m-1" style={{width: "18rem"}}>
                                <img class="card-img-top" src={e.image} alt={e.title}/>
                                <div class="card-body">
                                    <h5 class="card-text">{e.title}</h5>
                                    <h5>{"$"+e.price}</h5><span><button className="btn btn-success">Add to cart</button></span>
                                </div>
                            </a>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}