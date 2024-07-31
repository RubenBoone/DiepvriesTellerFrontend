import React, { Component } from "react";
import Product from "./Product";
import API from "../api/Api";

class Program extends Component
{

    constructor(props)
    {
        super(props);

        let products = API.getProductsByProgramId(this.props.id);
        products.then((response) => {
            this.setState({
                products: response.data
            })
        });


        this.state = {
            inputMode: false,
            products: []
        }
    }

    componentDidMount()
    {
        this.switchInputMode = this.switchInputMode.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onBoxAmountChange = this.onBoxAmountChange.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    switchInputMode()
    {
        this.setState({
            inputMode: !this.state.inputMode
        });
    }
    
    onNameChange(event)
    {
        this.setState({
            name: event.target.value
        });
    }

    onAmountChange(event)
    {
        this.setState({
            amount: event.target.value
        });
    }

    onBoxAmountChange(event)
    {
        this.setState({
            amountPerBox: event.target.value
        });
    }

    createProduct()
    {
        const newProduct = {
            name: this.state.name,
            amount: this.state.amount,
            amountPerBox: this.state.amountPerBox,
            programId: this.props.id
        }

        console.log(newProduct);

        API.postProduct(newProduct)
        .then((response) => {
            let oldProducts = this.state.products;
            oldProducts.push(response.data);
            this.setState({
                products: oldProducts,
                inputMode: !this.state.inputMode
            });
        });
    }

    createProductList()
    {
        console.log(this.state.products);
        return this.state.products.map((product) => {
            return <Product name={product.name} amount={product.amount} 
                amountPerBox={product.amountPerBox} key={product._id} id={product._id}/>
        });
    }

    render()
    {

        let items = this.createProductList();

        if (this.state.inputMode) {
            items.push(
            <p className="item" key={-1}>
                <input type="text" placeholder="choco broodje"
                     onChange={(event) => this.onNameChange(event)}/>
                <input type="number" placeholder="6"
                    onChange={(event) => this.onAmountChange(event)}/>
                <input type="number" placeholder="2"
                    onChange={(event) => this.onBoxAmountChange(event)}/>
                <button type="button" className="add"
                    onClick={(event) => this.createProduct()}>
                    <i className="fa-solid fa-save"></i>
                </button>
            </p>)
        }

        return (
            <div className="program">
                <div className="heading">
                    <h2>{this.props.backingProgram} - {this.props.name}</h2>
                    <div>
                    <button className="add" onClick={() => this.switchInputMode()}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <button className="delete" onClick={() => this.props.del(this.props.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    </div>
                </div>
                <hr/>
                <div>
                    {items}
                </div>
            </div>
        )
    }
}

export default Program;