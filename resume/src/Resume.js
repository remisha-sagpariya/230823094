import './Resume.css';
import img1 from './images/call.jpg';
import img2 from './images/email.JPG';
import img3 from './images/link.jpg';
import img4 from './images/location.jpg';
import img5 from './images/year.jpg';
import img6 from './images/buliding.jpg';
import img7 from './images/manag.jpg';
import img8 from './images/market.jpg';
import img9 from './images/work.jpg';

function Resume(){
    return (
        <>
            <div  class='container'>
            {/*  */}
            <div>
                <h1>DENVER DAHL</h1>
                <h2 className='h3'>Account Manager</h2>
                    <div class="row">
                        <div class="col-4 col-sm-4">
                            <img src={img1} style={{"height":"14px","width":"20px"}}alt=""/>
                                +1 555 555 5555
                        </div>
                        <div class="col-4 col-sm-4">
                            <img src={img2} style={{"height":"14px","width":"20px"}}  alt=""/>
                                denver.dahl@example.com
                        </div>
                        <div class="col-4 col-sm-4">
                             <img src={img3} style={{"height":"14px","width":"20px"}} alt=""/>
                                linkdin.com/denver-dahl
                        </div>
                        <div class="col-4 col-sm-4">
                            <img src={img4} style={{"height":"14px","width":"20px"}} alt=""/>
                                San Francisco,CA
                        </div>
                    </div>
            </div>
            {/*  */}
            <div>
                <h1 style={{ "borderBottom":"5px solid black","paddingTop":"15px"}}>EXPERIENCE</h1>
                {/* <hr></hr> */}
                <h2>Key Account Manager</h2>
                <h3 className='h3'>Lauzon</h3>
                    <p className='year'>
                        <img src={img5} style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        2016-Ongoing
                    </p>
                    <p>
                        <img src={img4} style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        San Francisco, CA
                    </p>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consequatur commodi cumque harum quaerat labore illum, quo voluptatum in architecto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consequatur commodi cumque harum quaerat labore illum, quo voluptatum in architecto.
                    </p>
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    </ul>
                    <hr style={{"border":"dashed  2px black"}}></hr>
            </div>

            {/*  */}

            <div>
                <h1>Senior Account Manager</h1>
                <h2 className='h3'>Koepp Inc</h2>
                    <p className='year'>
                        <img src={img5} style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        2014-2016
                    </p>
                    <p>
                        <img src={img4} style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        San Francisco, CA
                    </p>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam! Lorem ipsum dolor</p>
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                </ul>
                <hr style={{"border":"dashed  2px black"}}></hr>
            </div>

            {/*  */}
            
            <div>
                <h1>Account Manager Infrastructure & Application Development</h1>
                <h2 className='h3'>Drouin S.A.R.L.</h2>
                    <p className='year'>
                        <img src={img5}style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        2012-2014
                    </p>
                    <p>
                        <img src={img4} style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        San Francisco, CA
                    </p>
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptas ad nam dolor dignissimos optio adipisci velit ipsum quia veniam!</li>
                </ul>
            </div>

            {/*  */}

            <div>
                <h1 style={{ "borderBottom":"5px solid black"}}>EDUATION</h1>
                <h2>Master of Marketing Management[MMM]</h2>
                <h3 className='h3'> La Trobe University</h3>
                    <p className='year'>
                        <img src={img5} style={{"height":"14px","width":"20px","marginRight":"15px"}}alt=""/>
                        2007-2008
                    </p>
                    <p>
                        <img src={img4}style={{"height":"14px","width":"20px","marginRight":"15px"}} alt=""/>
                        San Francisco, CA
                    </p>
            </div>

            {/*  */}

            <div>
                <h1 style={{ "borderBottom":"5px solid black"}}>KEY ACHIEVEMENTS</h1>
                <div class="text-center">
                        <div class="row">
                            <div class="col-6">
                                <img src={img6} style={{"height":"19px","width":"25px"}} alt=""/>
                                <h2>Building the future</h2>
                                <p style={{ "borderBottom":"3px dashed gray"}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="col-6">
                                <img src={img7}  style={{"height":"19px","width":"25px"}} alt=""/>
                                <h2>Managing the largest accounts</h2>
                                <p style={{ "borderBottom":"3px dashed gray"}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                                    
                            <div class="w-100 d-none d-md-block"></div>

                            <div class="col-6">
                                 <img src={img8} style={{"height":"19px","width":"25px"}} alt=""/>
                                <h2>Market share - Key accounts & projects</h2>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="col-6">
                                <img src={img9} style={{"height":"19px","width":"25px"}} alt=""/>
                                <h2>Work-life balance</h2>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            {/*  */}

            <div>
                <h1 style={{ "borderBottom":"5px solid black"}}>
                    SKILLS
                </h1>
                <h2>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>MS Office Programs</h4>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>Windows & Mmac OSX</h4>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>Asana</h4>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>Salesforce</h4>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>Hubspot</h4>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>Linkedin Sales Navigator</h4>
                    <h4 style={{"border-bottom":"3px #85929E solid" ,"display":"inline-block","margin":"10px"}}>Dun & Bradstreet</h4>
                </h2>
            </div>

            {/*  */}

            <div>
                <h1 style={{ "borderBottom":"5px solid black"}}>LANGUAGES</h1>
                <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h2 style={{"marginRight":"50px","float":"left"}}>English</h2>
                                <p style={{"marginRight":"50px","paddingTop":"15px"}}>Native</p>
                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{"width":"100%"}}></div>
                                </div>
                            </div>
                            <div class="col" >
                                <h2 style={{"marginRight":"50px","float":"left"}}>German</h2>
                                <p style={{"marginRight":"50px","paddingTop":"15px"}}>Proficient</p>
                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{"width":"75%"}}></div>
                                </div>
                            </div>
                            <div class="col" >
                                <h2 style={{"marginRight":"50px","float":"left"}}>Greek</h2>
                                <p style={{"marginRight":"50px","paddingTop":"15px"}}>Advanced</p>
                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{"width":"25%"}}></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume;