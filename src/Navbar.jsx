import logo from './assets/images/logo.jpeg'

export const Navbar = () => {

  

  return (
    <div className="container-fluid d-flex justify-content-lg-center mx-xs-0">
      <div className="row">
      <nav className="navbar navbar-dark purple fixed-top pt-0 pb-0">
        <div className="d-flex align-items-center col-lg-2 p-0">
          <div className="logo-button-container">
            <a className="navbar-brand text-black-50 logo" href="#">
              <img src={logo} alt="" />
            </a>
            <button className="dropdown navbar-toggler boton-responsive btnt">
              <a
                className="nav-link navbar-toggler-icon"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <div className="dropdown-menu azulito">
                <a className="dropdown-item" href="#">
                  Inicio
                </a>
                <a className="dropdown-item" href="#">
                  Servicios
                </a>
                <a className="dropdown-item" href="#">
                  Planes
                </a>
                <a className="dropdown-item" href="#">
                  Contacto
                </a>
              </div>
            </button>
          </div>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#home">Inicio</a>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#servicios">Servicios</a>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#planes">Planes</a>
        </div>
        <div className="col-1 text-white responsive-navbar">
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
      </div>
    </div>
  )
}


//<div className="row">
//      <nav className="navbar navbar-dark purple fixed-top navbarwidth pt-0 pb-0">
//        <div className="col-lg-2 p-0">
//          <a className="navbar-brand text-black-50 logo" href="#"><img src={logo} alt="" /></a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#home">Inicio</a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#proyectos">Servicios</a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#planes">Planes</a>
//        </div>
//        <div className="col-1 text-white responsive-navbar">
//          <a href="#contacto">Contacto</a>
//        </div>
//
//        <div className="col-md-1">
//          <button className="dropdown boton-responsive button">
//          <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
//          </a>
//          <div className="dropdown-menu azulito">
//            <a className="dropdown-item text-white" href="#home">Inicio</a>
//            <a className="dropdown-item text-white" href="#proyectos">Proyectos</a>
//            <a className="dropdown-item text-white" href="#sobremi">Sobre mi</a>
//          </div>
//          </button>
//        </div>
//      
//    </nav>
//    </div>