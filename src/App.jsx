
export default function App() {
  return (
    <>

      <div className='container'>

        <cabecalho></cabecalho>
        
        <section>
          <p><a href="/">Home Page</a></p>
          <button onClick={()=> alert("Hello World")}>
            click me!
          </button>
        </section>

      </div>

    </>
  )
}
