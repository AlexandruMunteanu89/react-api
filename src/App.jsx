import { use, useEffect, useState } from "react"

function App() {

  const [attori, setAttori] = useState([])
  const api_url = 'https://lanciweb.github.io/demo/api/actresses/'

  useEffect(()=>{
    console.log('Component mounted');
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAttori(data)
      
    })
    
  }, [])

  
  return (
    <>
      <h1>Attori</h1>

      <section>
        <div className="container">
          <div className="row row-cols 1 row-cols-sm-3 g-4">
            {attori.map(attore => (
            <div className="col">
              <div className="card p-3">
                {attore.name}
                
               
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      

          
          
    </>
  )
}

export default App
