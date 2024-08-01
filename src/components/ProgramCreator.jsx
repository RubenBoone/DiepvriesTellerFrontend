import React, { Component } from "react";

class ProgramCreator extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            backingProgram: ""
        }
    }

    componentDidMount()
    {
        this.nameChange = this.nameChange.bind(this);
        this.backingProgramChange = this.backingProgramChange.bind(this);
        this.postProgram = this.postProgram.bind(this);
    }

    nameChange(event)
    {
        this.setState({
            name: event.target.value
        });
        event.target.vale = this.state.name;
    }

    backingProgramChange(event)
    {
        this.setState({
            backingProgram: parseInt(event.target.value)
        });
        event.target.vale = this.state.backingProgram;
    }

    postProgram()
    {
        this.props.post(this.state.name, this.state.backingProgram)
        this.setState({
            name: "",
            backingProgram: ""
        })
    }

    render()
    {
        return <div className="control">
            <div>
                <label htmlFor="name">Categorie:</label>
                <input type="text" name="name" placeholder="Stokbroden" id="name" onChange={(event) => this.nameChange(event)} value={this.state.name}/>
                <label htmlFor="backingProgram">Programma:</label>
                <input type="number" name="backingProgram" id="backingProgam" placeholder="8" onChange={(event) => this.backingProgramChange(event)} value={this.state.backingProgram}/>
            </div>
            <button className="add" type="submit" onClick={(event) => {this.postProgram()}}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    }
}

export default ProgramCreator;
