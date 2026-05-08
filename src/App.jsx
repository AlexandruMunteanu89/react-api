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

  /*const [attrici, setAttrici] = useState([])
  const api_url = 'https://lanciweb.github.io/demo/api/actresses/'

  useEffect(()=>{
    console.log('Component mounted');
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAttrici(data)
      
    })
    
  }, [])*/

  
  return (
    <>

      <section>
        <div className="container">
          <div className="row">
            <div className="lista-attori col-6">
              <h1>Lista Attori</h1>
                {attori.map(attore => (
                  <div className="attori" key={attore.id}>
              
                    <div className="attore-image">
                      <img src={attore.image} className="card-img-top attore-img" alt="..." />
                    </div>
                    <div className="attori-info">
                      <h4>
                        {attore.name}
                
                      </h4>
                        
                        <p>{attore.birth_year}</p>
                        <p>{attore.nationality}</p>
                        <p>{attore.known_for}</p>
                        <p>{attore.awards}</p>
                        
                        
                      <p>{attore.biography}</p>
                    </div>
              
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
