function App() {

  let data = {
    "_id": "5fed66ab0e2012703392b809",
    "id": 0,
    "date": "07/28/2014 0:00",
    "day": "Monday",
    "difficulty": 6,
    "direction": "A",
    "number": 24,
    "question": "Cutters that cut with the grain",
    "answer": "RIPSAWS"
  }
  return (
    <div className="App">
      {data.question}
    </div>
  );
}

export default App;