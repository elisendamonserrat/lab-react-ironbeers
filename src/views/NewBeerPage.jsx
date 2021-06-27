import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';


export class NewBeerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level : Number(''),
            contributed_by: '',
        }

    }

    handleInput = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name] : value,
        })
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        return (
         <>
            <Header />
            <main className="w-11/12 mx-auto">
                <form action="" method="post" className="my-4 mx-2 w-full">
                    <label htmlFor="name" className="font-semibold uppercase">Name</label>
                    <br></br>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>

                    <label htmlFor="tagline" className="font-semibold uppercase">Tagline</label>
                    <br></br>
                    <input 
                        type="text" 
                        id="tagline" 
                        name="tagline" 
                        value={tagline} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>

                    <label htmlFor="description" className="font-semibold uppercase">Description</label>
                    <br></br>
                    <textarea 
                        type="text" 
                        rows="10" 
                        cols="30"
                        id="description" 
                        name="description" 
                        value={description} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>

                    <label htmlFor="tagline" className="font-semibold uppercase">First Brewed</label>
                    <br></br>
                    <input 
                        type="text" 
                        id="first_brewed" 
                        name="first_brewed" 
                        value={first_brewed} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>

                    <label htmlFor="brewers_tips" className="font-semibold uppercase">Brewers Tips</label>
                    <br></br>
                    <input 
                        type="text" 
                        id="brewers_tips" 
                        name="brewers_tips" 
                        value={brewers_tips} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>

                    <label htmlFor="attenuation_level" className="font-semibold uppercase">Attenuation Level</label>
                    <br></br>
                    <input 
                        type="number" 
                        id="attenuation_level" 
                        name="attenuation_level" 
                        value={attenuation_level} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>
                    
                    <label htmlFor="contributed_by" className="font-semibold uppercase">Contributed By</label>
                    <br></br>
                    <input 
                        type="text" 
                        id="contributed_by" 
                        name="contributed_by" 
                        value={contributed_by} 
                        onChange={this.handleInput}
                        className="border px-3 py-2 rounded-md w-5/6 mb-4"
                    />
                    <br></br>

                    <button 
                        type="submit"
                        className="bg-blue-500 rounded-md px-1 py-2 uppercase w-5/6 text-center"
                    > 
                    Add new 
                    </button>
                    
                </form>

            </main>
        </>
        )
    }
}

export default NewBeerPage
