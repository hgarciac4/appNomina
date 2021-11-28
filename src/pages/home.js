import React, { Component }  from "react";
import { Link } from "react-router-dom";

import Header from "../component/header";
import Footer from "../component/footer";

// export function Home() {
//     return (
//             <div>
//                 <Header />
//                 <div class="container">
//                     <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Ingreso para:</h2>
//                     <div class="divider-custom">
//                         <div class="divider-custom-line"></div>
//                         <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
//                         <div class="divider-custom-line"></div>
//                     </div>
                    
//                     <div class="row justify-content-center">
                        
//                         <div class="col-md-6 col-lg-4 mb-5">
//                             <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
//                                 <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                                     <div class="portfolio-item-caption-content text-center text-white">Empleado</div>
//                                 </div>
//                                 <img class="img-fluid" src="assets/img/portfolio/empleado.png" alt="..." />
//                             </div>
//                         </div>
                        
//                         <div class="col-md-6 col-lg-4 mb-5">
//                             <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
//                                 <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                                     <div class="portfolio-item-caption-content text-center text-white">Contador</div>
//                                 </div>
//                                 <img class="img-fluid" src="assets/img/portfolio/contador.png" alt="..." />
//                             </div>
//                         </div>
                        
//                         <div class="col-md-6 col-lg-4 mb-5">
//                             <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
//                                 <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//                                     <div class="portfolio-item-caption-content text-center text-white">Administrador</div>
//                                 </div>
//                                 <img class="img-fluid" src="assets/img/portfolio/administrador.png" alt="..." />
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//     )
// }

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Ingreso para:</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    
                    <div class="row justify-content-center">
                        
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <Link to="/login">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Empleado</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/empleado.png" alt="..." />
                                </Link>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <Link to="/login">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Contador</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/contador.png" alt="..." />
                                </Link>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <Link to="/login">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Administrador</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/administrador.png" alt="..." />
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Home;