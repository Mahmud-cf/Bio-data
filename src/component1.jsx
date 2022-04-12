const Course = (value)=>{
   return(
      <div className="course">
         <h3>{value.name}</h3>
         <p>By Interactive Cares</p>
         
         <p> <del>{value.price}</del> </p>
         <p> {value.newPrice} </p>
         <hr />
      </div>
   )
}
export default Course