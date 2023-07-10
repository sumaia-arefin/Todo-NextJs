import axios from "axios"
import 

export default function Home() {
  function submitForm (event){
    event.preventDefault()
    const dataset={
      Name:event.target.name.value,
      schedule:event.target.schedule.value,
      body:event.target.body.value,
      date:event.target.date.value
    }
    axios.post("api/hello",dataset)
    .then((data)=>console.log(data))
    console.log(dataset)
  }
  return (
    <>
  
  <div className="m-auto p-auto justify-center text-center w-32">
      <form onSubmit={submitForm} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input className="md:w-full mb-2 drop-shadow-md bg-gray-200 border-2 border-gray-300 rounded w-4/5 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 duration-300" type="text" id="name" name="name" />

        <label htmlFor="Schedule">Schedule</label>
        <input className="md:w-full mb-2 drop-shadow-md bg-gray-200 border-2 border-gray-300 rounded w-4/5 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 duration-300" type="text" id="Schedule" name="schedule" />

        <label htmlFor="body">body</label>
    
        <input className="md:w-full mb-2 drop-shadow-md bg-gray-200 border-2 border-gray-300 rounded w-4/5 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 duration-300" type="text" id="body" name="body" />

        <label htmlFor="date">date</label>
        <input className="md:w-full mb-2 drop-shadow-md bg-gray-200 border-2 border-gray-300 rounded w-4/5 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 duration-300" type="date" id="date" name="date" />

        <button type="submit">Submit</button>

      </form>
    </div>
  


    </>
  )
}
