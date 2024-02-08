export default function UserInput({input, handleInputChange}){
  return(
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required  
          value={input["initial"]} 
          onChange={(e) => handleInputChange("initial", e.target.value)} 
          /> 
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required
          value={input["annual"]} 
          onChange={(e) => handleInputChange("annual", e.target.value)} 
          />
        </p>
      </div> 
      <div className="input-group">
        <p>
          <label> Expected Return</label>
          <input type="number" required
          value={input["return"]} 
          onChange={(e) => handleInputChange("return", e.target.value)}  
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required
          value={input["duration"]} 
          onChange={(e) => handleInputChange("duration", e.target.value)}  
          />
        </p>
      </div>
    </section>
  )
}