
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-red-500 text-3xl'>Hi, My name is Masrafi .i love u</h1>
      <p className='btn bg-amber-400 hover:bg-amber-600 text-blue-400'>Click Me</p>
      <div className='cart'>hi</div>

      {/* <div className='mx-auto'> */}

      <div className="mx-auto card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className='mt-5 mx-auto w-80 border border-red-600 bg-yellow-200 shadow-2xl shadow-red-600 text-shadow-transparent rounded-2xl'>
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
