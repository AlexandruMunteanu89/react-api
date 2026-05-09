import { use, useEffect, useState } from "react"

function App() {

  const [attori, setAttori] = useState([])
  
  const api_url = 'https://lanciweb.github.io/demo/api/actors/'

  useEffect(() => {
    console.log('Component mounted');
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAttori(data)
      
    })
    
  }, [])

  const [attrici, setAttrici] = useState([])
  const apiActresses_url = 'https://lanciweb.github.io/demo/api/actresses/'

  useEffect(()=>{
    console.log('Component mounted');
    fetch(apiActresses_url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAttrici(data)
      
    })
    
  }, [])

  
  return (
    <>

      <section>
        <div className="container">
          <div className="row">
            <div className="lista-attori col-6">
              <h1>Lista Attori</h1>
                {attori.map(attore => (
                  <div className="attori" key={attore.id}>
                    <div className="attori-info">
                      <div className="attore-image">
                        <img src={attore.image} className="attore-img" alt="..." />
                      </div>
                      <div>
                        <h4>
                          {attore.name}
                        </h4>
                        <p>{attore.birth_year}</p>
                        <p>{attore.nationality}</p>
                        <p>{attore.known_for}</p>
                        <p>{attore.awards}</p>
                      </div>
                    </div>
                    <div className="attore-biography"><p>{attore.biography}</p></div> 
                  </div>
             ))}
            </div>
            <div className="lista-attori col-6">
              <h1>Lista Attrici</h1>
                {attrici.map(attrice => (
                  <div className="attori" key={attrice.id}>
                    <div className="attori-info">
                      <div className="attore-image">
                        <img src={attrice.image} className="attore-img" alt="..." />
                      </div>
                      <div>
                        <h4>
                          {attrice.name}
                        </h4>
                        <p>{attrice.birth_year}</p>
                        <p>{attrice.nationality}</p>
                        <p>{attrice.known_for}</p>
                        <p>{attrice.awards}</p>
                      </div>
                    </div>
                    <div className="attore-biography"><p>{attrice.biography}</p></div> 
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      

          
          
    </>
  )
}

export default App
