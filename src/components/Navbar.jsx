import React from 'react'

export default function Navbar(props) {
    
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{boxShadow:' rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                <div className="container-fluid">
                    <a className="navbar-brand text-danger" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="/">About</a>
                        </li>
                        
                        
                    </ul>
                    <div className={`form-check form-switch me-5 text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >Dark Mode</label>
                    </div>

                   
                    
                    </div>
                </div>
          </nav>
        </>
    )
}
// export default Navbar;