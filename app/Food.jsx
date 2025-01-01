import React from "react";
import recipes from "@/data/data.json";
import Image from "next/image";
import { useState } from "react";

export default function Food({ goBack }) {
    const [recipe, setRecipe] = useState(-1);

    return (
    <div className="bg-white">

        <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <button
                onClick={goBack}
                className="rounded-md bg-gray-300 px-3 py-2 text-lg font-semibold text-gray-700 shadow-sm hover:bg-gray-400"
            >
                Back
            </button>
        </div>

      {recipe === -1 ? <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {["main", "breakfast", 'side', 'sauce', 'dessert'].map((type) => (
            <React.Fragment key={type}>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">{type[0].toUpperCase() + type.slice(1) + 's'}</h1>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-10">
                {recipes.filter(recipe => recipe.type === type).map((recipe) => (
                    <a key={recipe.id} className="group cursor-pointer" onClick={() => setRecipe(recipe.id)}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                        alt={recipe.name}
                        src={recipe.img}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end p-4">
                        <p className="text-2xl font-medium text-white">{recipe.name}</p>
                        </div>
                    </div>
                    </a>
                ))}
                </div>
            </React.Fragment>
        ))}

      </div> 
        :
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">{recipe !== -1 && recipes[recipe].name}</h2>
        <Image src={recipe !== -1 && '/' + recipes[recipe].img} alt="Image of food" width={500} height={60} className="rounded-lg bg-gray-200 object-cover w-2/3 h-96"/>
        
        {recipe !== -1 && recipes[recipe].ingredients.length !== 0 &&
          <div className="mx-auto my-10">
            <span className="text-2xl font-semibold">Ingredients:</span>
            <ul className="mx-5 list-disc pt-3 text-lg">
              {recipe !== -1 && recipes[recipe].ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        }

        {recipe !== -1 && recipes[recipe].method.length !== 0 &&
          <div className="mx-auto my-10">
            <span className="text-2xl font-semibold">Preparation:</span>
            <ol className="mx-5 list-decimal pt-3 text-lg">
              {recipe !== -1 && recipes[recipe].method.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        }

        <div className="mx-auto my-10">
          {recipe !== -1 && recipes[recipe].matches.length !== 0 ?
            <span className="text-2xl font-semibold">A good match with:</span>
              :
            <span className="text-2xl font-semibold">Perfect to enjoy on its own</span>
          }
          <div className="pt-3">
            {recipe !== -1 && recipes[recipe].matches.map((item, i) => (
              (item[0] !== -1 ?
                <span key={i} onClick={() => setRecipe(item[0])} className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 mr-2 text-s font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 cursor-pointer">{item[1]}</span>
                  :
                <span key={i} className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 mr-2 text-s font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">{item[1]}</span>
              )
            ))}
          </div>
        </div>

        <button onClick={() => setRecipe(-1)} className="rounded-md bg-indigo-600 mt-4 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Main menu</button>
      </div> }

    </div>
  )
}