import React from 'react'
import { Link } from 'react-router-dom';

import allBeersImage from './../assets/beers.png'
import randomBeerImage from './../assets/random-beer.png'
import addNewBeerImage from './../assets/new-beer.png'
import Header from '../components/Header';


function HomePage() {
    return (
        <>
        <main className="w-11/12 mx-auto">
            <section className="border w-full my-2">
                <Link to='/beers'>
                    <img className="w-full object-contain h-1/4" src={allBeersImage} alt="All beers list" />
                    <div className="mx-4 my-2">
                      <h1 className="text-lg text-black font-semibold">All Beers</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, massa quis rutrum rhoncus, magna risus commodo urna, 
                       eget facilisis purus risus fermentum metus. Ut et leo mauris.</p>
                    </div>
                </Link>
            </section>
            <section className="border w-full my-2">
                 <Link to='/random-beer'>
                    <img className="w-full object-contain h-1/4" src={randomBeerImage} alt="Random beer selection"/>
                    <div className="mx-4 my-2">
                       <h1 className="text-lg text-black font-semibold">Random Beer</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, massa quis rutrum rhoncus, magna risus commodo urna, 
                        eget facilisis purus risus fermentum metus. Ut et leo mauris.</p>
                    </div>
                </Link>
            </section>
            <section className="border w-full my-2">
                <Link to='/new-beer'>
                    <img className="w-full object-contain h-1/4" src={addNewBeerImage} alt="Add a new beer to the list"/>
                    <div className="mx-4 my-2">
                        <h1 className="text-lg text-black font-semibold">Add a New Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, massa quis rutrum rhoncus, magna risus commodo urna, 
                        eget facilisis purus risus fermentum metus. Ut et leo mauris.</p>
                    </div>
                </Link>
            </section>
        </main>
        </>
    )
}

export default HomePage
