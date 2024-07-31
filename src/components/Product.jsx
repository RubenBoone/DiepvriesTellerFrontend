import React, { Component } from "react";
import API from "../api/Api";

class Product extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            amount: this.props.amount,
            number: 0
        }
    }

    componentDidMount()
    {
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onBox = this.onBox.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
    }

    handleAmountChange(event)
    {
        this.setState({
            number: event.target.value
        });
    }

    onRemove(event)
    {
        const newAmount = this.state.amount - this.state.number;
        this.updateAmount(newAmount);
    }

    onAdd(event)
    {
        const newAmount = this.state.amount + parseInt(this.state.number);
        this.updateAmount(newAmount);

    }

    onBox(event)
    {
        const newAmount = this.state.amount + this.props.amountPerBox * this.state.number;
        this.updateAmount(newAmount);
    }

    updateAmount(newAmount)
    {
        API.updateProductAmount(this.props.id, newAmount)
        .then((response) => {
            console.log("updated");
            this.setState({
                amount: newAmount
            })
        });
    }

    render()
    {
        return <div className="product">
            <p className="productInfo">
                {this.state.amount} - {this.props.name}
            </p>
            <p className="productControl">
                <input type="number" name="amount" id="amount" onChange={(event) => this.handleAmountChange(event)}/>
                <button type="button" className="delete" onClick={(event) => this.onRemove(event)}>
                    <i className="fa-solid fa-minus"></i>
                </button>
                <button type="button" className="add" onClick={(event) => this.onAdd(event)}>
                    <i className="fa-solid fa-plus"></i>
                </button>
                <button type="button" className="box" onClick={(event) => this.onBox(event)}>
                    <i className="fa-solid fa-box"></i>
                </button>
            </p>
        </div>
    }
}

export default Product;