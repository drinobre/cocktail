export default function List(drink, id) {
  for (let number = 1; number <= 15; number++) {
    function concatenate(objectName) {
      console.log((objectName += number));
      return (objectName += number);
    }
    concatenate(drink);
  }

  return (
    <>
      <li key={id}>{drink}</li>
    </>
  );
}
