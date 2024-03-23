function ContactProfile(props){
    return (
        <>
            <div>
                <div>
                    <img src={props.img} alt="myimage" style={{"border": "2px","margin-right":"15px","height":"50px","width":"50px","border-radius":"50px","float":"left"}}/>
                    <h4 style={{"color":"black","margin":"0"}}>{props.name}</h4>
                    <p style={{"color":"black","margin":"0"}}>{props.text}</p><br></br> 
                </div>
            </div>
        </>
    )
}
    
export default ContactProfile;