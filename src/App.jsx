import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Experience1() {
  return (
    <>
      <div className='row p-3 mt-3 bg-dark-subtle'>
        <div className='col-6'>
          <h4>Software Developer</h4>
          <h5>Sigma Labs Sdn Bhd</h5>
        </div>
        <div className='col-6 text-right'>
          <h4><strong>Dec 2023 - Current</strong></h4>
        </div>
      </div>

      <div className='desc-container p-3 row'>
        <div className="col">
          <strong>Main responsibilities</strong>
          <ul>
            <li>Study HTML/CSS/JS</li>
            <li>Do coding challenges</li>
            <li>Create web projects</li>
          </ul>
        </div>

        <div className="col">
          <strong>Achievements</strong>
          <ul>
            <li>Passed fundamentals beginner test</li>
            <li>Passed fundamentals intermediate test</li>
          </ul>
        </div>
      </div>
    </>
  )
}


function App() {
  return (
    <>
      <div className="main-container p-5 mt-3">
        <div className="row p-3 bg-dark text-white">
          <h1>Chin Did Ken</h1>
          <h2>Software Developer</h2>
        </div>
        <Experience1 />
      </div>
    </>
  )
}

export default App
