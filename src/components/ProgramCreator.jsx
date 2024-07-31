import React, { Component } from "react";

class ProgramCreator extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            backingProgram: 0
        }
    }

    componentDidMount()
    {
        this.nameChange = this.nameChange.bind(this);
        this.backingProgramChange = this.backingProgramChange.bind(this);
    }

    nameChange(event)
    {
        this.setState({
            name: event.target.value
        });
    }

    backingProgramChange(event)
    {
        this.setState({
            backingProgram: parseInt(event.target.value)
        });
    }

    render()
    {
        return <div className="control">
            <div>
                <label htmlFor="name">Categorie:</label>
                <input type="text" name="name" placeholder="Stokbroden" id="name" onChange={(event) => this.nameChange(event)}/>
                <label htmlFor="backingProgram">Programma:</label>
                <input type="number" name="backingProgram" id="backingProgam" placeholder="8" onChange={(event) => this.backingProgramChange(event)}/>
            </div>
            <button className="add" type="submit" onClick={(event) => {this.props.post(this.state.name, this.state.backingProgram)}}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    }
}

export default ProgramCreator;