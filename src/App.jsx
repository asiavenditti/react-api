
import { useEffect, useState } from "react"

function App() {

  const url_actors = 'https://lanciweb.github.io/demo/api/actors/'
  const url_actresses = 'https://lanciweb.github.io/demo/api/actresses/'
  const [actorsData, setActorsData] = useState([])
  const [actressesData, setActressesData] = useState([])



  useEffect(() => {

    console.log('Carica i dati degli attori')
    fetch(url_actors)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setActorsData(data)
      })

    console.log('Carica i dati delle attrici')
    fetch(url_actresses)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setActressesData(data)
      })

  }, [])


  return (
    <>
      <div className="text-center my-4">
        <h1 className="py-4 text-primary">Hollywood Actors</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center gap-4">
          {actorsData.map((actor) => (
            <div key={actor.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 w-100 d-flex flex-column">
                <img src={actor.image} className="card-img-top" alt={actor.name} />
                <div className="card-body">
                  <h5 className="card-title">{actor.name}</h5>
                  <p className="card-text">{actor.biography}</p>
                </div>
                <ul className="list-group">
                  <li className="list-group-item"><strong>Date of birth:</strong> {actor.birth_year}</li>
                  <li className="list-group-item"><strong>Nationality:</strong> {actor.nationality}</li>
                  <li className="list-group-item"><strong>Known for:</strong> {actor.known_for}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-4">
        <h1 className="py-4 text-success">Hollywood Actress</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center gap-4">
          {actressesData.map((actress) => (
            <div key={actress.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 w-100 d-flex flex-column">
                <img src={actress.image} className="card-img-top" alt={actress.name} />
                <div className="card-body">
                  <h5 className="card-title">{actress.name}</h5>
                  <p className="card-text">{actress.biography}</p>
                </div>
                <ul className="list-group">
                  <li className="list-group-item"><strong>Date of birth:</strong> {actress.birth_year}</li>
                  <li className="list-group-item"><strong>Nationality:</strong> {actress.nationality}</li>
                  <li className="list-group-item"><strong>Known for:</strong> {actress.known_for}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App
