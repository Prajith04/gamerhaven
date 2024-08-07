function Desc({name,description,sysreq,image}){
    
    return(
        
        <div className="desc">
            <img src={image} alt="NOT FOUND" />
            <h2>{name}</h2>
            <p>{description}</p>
             <p>{sysreq.Processor}</p> 
             <p>{sysreq.Memory}</p>
             <p>{sysreq.Graphics}</p>
             <p>{sysreq.OS}</p>   
        </div>
    )
}
export default Desc;