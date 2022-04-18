function List(drink) {
  let data = {
    drinks: [
      {
        idDrink: "11007",
        strDrink: "Margarita",
        strDrinkAlternate: null,
        strTags: "IBA,ContemporaryClassic",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions:
          "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        strInstructionsES: null,
        strInstructionsDE:
          "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        strInstructionsFR: null,
        strInstructionsIT:
          "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1/2 oz ",
        strMeasure3: "1 oz ",
        strMeasure4: null,
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource:
          "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
        strImageAttribution: "Cocktailmarler",
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:42:59",
      },
    ],
  };

  // find the keyword strIngredient on the array
  // add 1 in the end of the string
  // return strIngredient(number)

  // console.log("strIngredient" + 1);

  function measure(drink) {
    for (let number = 1; number <= 15; number++) {
      function concatenate(objectName) {
        console.log((objectName += number));
        return (objectName += number);
      }
      concatenate(drink);
    }
  }

  console.log(measure("measure"));

  // drink.map((e, id) => (
  //   <li key={id} value={concatenate()}>
  //     {e}
  //   </li>
  // ));

  //console.log(concatenate());

  //let ingredientTotal = data.drinks[0].concatenate();

  //console.log(ingredientTotal);

  // return (
  //   <>
  //     {data.drinks.map(concatenate(measure))}
  //     <li>{measure}</li>
  //   </>
  // );
}

List();

// drinks.map((drink) => {
//   return (
//     <li>
//       {drink.concat((e) => {
//         for (let i = 0; i <= 10; i++) {
//           return drink.concat(e, i);
//         }
//       })}
//     </li>
//   );
// });
