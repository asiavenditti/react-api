
import { useEffect, useState } from "react"

function App() {

  const url = 'https://lanciweb.github.io/demo/api/actors/'
  const [actorsData, setActorsData] = useState([])



  useEffect(() => {

    console.log('Carica i dati')
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setActorsData(data)
      })

  }, [])


  return (
    <>
      <div className="text-center my-4">
        <h1 className="py-4">Hollywood Actors</h1>
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
    </>
  );
}
export default App
