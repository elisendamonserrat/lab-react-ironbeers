import React from 'react'
import { Link } from 'react-router-dom';


function BeerCard(props) {
    const creatorNameCleaned = (creator) => {
        const symbol = creator.indexOf('<');
        const cleanedName = creator.slice(0, symbol)
        return cleanedName
    }

    const { image_url, name, tagline, contributed_by, _id } = props.beerDetails;

    return (
        <Link to={`/beers/${_id}`}>
            <section className="border w-full h-1/8 my-2 flex items-center">
                    <div className="object-contain w-1/4 px-8 py-4">
                        <img className="object-contain w-4/5" src={image_url} alt={name} />
                    </div>
                    <div className="mx-4 my-2 w-3/4">
                        <h1 className="text-lg text-black font-semibold">{name}</h1>
                        <p className="text-base font-medium text-gray-500">{tagline}</p>
                        <p><strong>Created by:</strong> {creatorNameCleaned(contributed_by)}</p>
                    </div>
            </section>
        </Link>
    )
}

export default BeerCard
