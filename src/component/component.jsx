const MyWork = (props) => {
   return(
      <div className="MyWork">
        <div className="title">
          <h1>BioData of {props.name}</h1>
        </div>
        <div className="information">
          <h3>Information of {props.name}</h3>
          <p>Name: {props.name} </p>
          <p>Age: {props.age} </p>
          <p>Class: {props.class} </p>
        </div>
        <div className="socialLInk">
          <h3>Social media link of {props.name}</h3>
          <p>Facebook: {props.facebook} </p>
          <p>Iinkedin: {props.linkedIn} </p>
          <p>Twitter: {props.twitter} </p>
        </div>
        <div className="skill">
          <h3>Skills of {props.name}</h3>
          <ul>
            {props.skills.map(skill=>(
               <li>
                  {skill}
               </li>
            ))}
          </ul>
        </div>
      </div>
   )
}
export default MyWork