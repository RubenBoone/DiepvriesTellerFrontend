import React, { Component } from "react";
import Program from "./Program";
import ProgramCreator from "./ProgramCreator";
import API from "../api/Api";
import spinner from "../loading.png";

class ProgramList extends Component
{
    constructor()
    {
        super();
        this.state = {
            programs: [],
            loading: false
        };
    }

    componentDidMount()
    {
        this.setState({loading: true});

        let promise = API.getAllPrograms();

        promise.then((response) => {
            this.setState({
                programs: response.data,
                loading: false
            });
        });

        this.postProgram = this.postProgram.bind(this);
        this.delProgram = this.delProgram.bind(this);
    }

    postProgram(name, backingProgram)
    {
        if (name === "" || backingProgram === undefined) {
            window.alert("Vul een naam en backprogramma in!");
            return;
        }

        let newProgram = {
            name: name,
            backingProgram: backingProgram, 
            products: []
        }
        let promise = API.postProgram(newProgram);

        promise.then((response) => {
            newProgram._id = response.data._id
            const oldPrograms = this.state.programs;
            oldPrograms.push(newProgram);
            this.setState({
                programs: oldPrograms
            });
            window.alert("Programma " + newProgram.backingProgram + " (" + newProgram.name + ") is aangemaakt!");
        })
    }

    deleteObjectbyId(array, id)
    {
        return array.filter(obj => obj._id !== id);
    }

    delProgram(id)
    {
        const wantToDelete = window.confirm("Ben je zeker dat je dit programma wilt verwijderen?");
        if (wantToDelete) {
            let promise = API.deleteProgram(id);

            promise.then((response) => {
                if (response.status === 200) {
                    const oldProgramsList = this.state.programs;
                    this.setState({
                        programs: this.deleteObjectbyId(oldProgramsList, id)
                    });
                }
            });
        }
    }

    createProgramList()
    {

        if (this.state.programs.length === 0) {
            return <div style={{marginTop: 1 + "rem", textAlign: "center"}}>Er zijn geen programmas gevonden...</div>;
        }

        return this.state.programs.map((program) => {
            return <Program name={program.name} backingProgram={program.backingProgram}
                products={program.products} key={program._id} id={program._id}
                del={this.delProgram}/>
        });
    }

    render()
    {
        return <div>
                <ProgramCreator post={this.postProgram}/>
                <div className="programlist">
                    {this.state.loading ? (
                    <div style={{ textAlign: 'center', maxWidthwidth: "40%", margin: "auto",  marginTop: '2rem' }}>
                        <img src={spinner} alt="loading..." />
                    </div>
                    ) : (
                        this.createProgramList()
                    )}
                </div>
            </div>
    }
}

export default ProgramList;