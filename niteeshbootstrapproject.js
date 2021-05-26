<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body>

  <!-- Navbar -->
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-success">
   <div class="container-fluid">
     <a class="navbar-brand text-white" href="#niteesh">Niteesh</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#hero">Home</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#skills">My skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#works">My works</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Me</a>
              </li>
       </ul>
      </div>
   </div>
  </nav>

  <main class="container mt-3">
    <section id="hero" class="d-flex justify-content-sm-center justify-content-md-evenly align-items-center flex-column-reverse gap-3 flex-md-row">
     <!-- Hero -->
       <div d-flex justify-content-sm-center align-items-center flex-column justify-content-md-start align-items-md-start>
         <h5>
           Hello!
         </h5>
         <h1>
           I'm Niteesh
         </h1>
         <p>
           A Full Stack Web developer!
         </p>
         <button class="btn btn-primary btn-sm">
           My Cool Resume
         </button>
       </div>
       <div class="d-md-none w-25 h-25">  
         <img src="https://lh3.googleusercontent.com/-KQ7_LV5ORlM/V7AgTLV-mUI/AAAAAAAAkUc/PbBep6WkKjsR7Oetvc_amAaCzfcy9cgbACEwYBhgLKtQDAL1OcqxYf6x-v0xenjGLoaoITRk-WiVi_MtqWclDaV7cS2Z_tWyR_ZL8HZaMoLFykY0uIoUNhrTMNjdBGITHCi54RHsM3IYN76bsUQ3AaXSMW24RUsMCI4SMdVg5K99uSY-SajD-DAOAad0JzOb_ePwBIGt42SSOq_MJDcPACAtB73x2OMZXimXl9j6HElIAlW4GZDqdEhcVT0f0nrx92UAha5w9j1e6EcT__k-mdXHZc3PGpJKZua5z5KNXlISJc2SLmEnrxPbInKHTpLnyl93qF92-sY0ZIxsKUMX_Dc18EDCsMT0_hVrnz1xbC1vWSYHyeHJMgQhiBG6Kn6YvmnM1Y9rcz8SrVrH833T_RKSyZnIlKiT0dc3BCU0bmWd3xM-AkT9gXMSQe5f8XzUHQ5lyjLGAmHrvUX5-E-EE-LDzwDNdEOgUfGhww80LOiyuboSLN-UVPn9jenAMPqbgZjsV-S18rOU-H3-_wSyyFqDVdxgok3XAqZApbXXHZf4wJcfCBznq9euFEUO1nsAJsXn52m7eCF5zuvjH42pW8eivreRb-w0LaixmGTY8Nzm7raHfMAiyIPTlu3fFGAwS8YLAe_oiEQ-l0hb3I2HZDapUL6IRMMTiuYUG/w140-h139-p/1456936631702.jpg"" alt="Niteesh"
         class="w-100 h-100 rounded-circle shadow-lg">
       </div>
       <div class="d-none d-md-block w-25 h-25">
        <img src="https://lh3.googleusercontent.com/-KQ7_LV5ORlM/V7AgTLV-mUI/AAAAAAAAkUc/PbBep6WkKjsR7Oetvc_amAaCzfcy9cgbACEwYBhgLKtQDAL1OcqxYf6x-v0xenjGLoaoITRk-WiVi_MtqWclDaV7cS2Z_tWyR_ZL8HZaMoLFykY0uIoUNhrTMNjdBGITHCi54RHsM3IYN76bsUQ3AaXSMW24RUsMCI4SMdVg5K99uSY-SajD-DAOAad0JzOb_ePwBIGt42SSOq_MJDcPACAtB73x2OMZXimXl9j6HElIAlW4GZDqdEhcVT0f0nrx92UAha5w9j1e6EcT__k-mdXHZc3PGpJKZua5z5KNXlISJc2SLmEnrxPbInKHTpLnyl93qF92-sY0ZIxsKUMX_Dc18EDCsMT0_hVrnz1xbC1vWSYHyeHJMgQhiBG6Kn6YvmnM1Y9rcz8SrVrH833T_RKSyZnIlKiT0dc3BCU0bmWd3xM-AkT9gXMSQe5f8XzUHQ5lyjLGAmHrvUX5-E-EE-LDzwDNdEOgUfGhww80LOiyuboSLN-UVPn9jenAMPqbgZjsV-S18rOU-H3-_wSyyFqDVdxgok3XAqZApbXXHZf4wJcfCBznq9euFEUO1nsAJsXn52m7eCF5zuvjH42pW8eivreRb-w0LaixmGTY8Nzm7raHfMAiyIPTlu3fFGAwS8YLAe_oiEQ-l0hb3I2HZDapUL6IRMMTiuYUG/w140-h139-p/1456936631702.jpg"" alt="Niteesh"
        class="w-100 h-100 rounded-circle shadow-lg">
       </div>
    </section>
    <section id="skills" class="mt-5 p-4 ">
      <!-- My skills -->
      <h1 class="text-success text-center">My Skill Set</h1>
      <div class="mt-4 d-md-none d-flex justify-content-evenly">
        <i class="fab fa-html5 fa-3x" style="color:#f4470b"></i>
        <i class="fab fa-css3-alt fa-3x text-primary"></i>
        <i class="fab fa-bootstrap fa-3x" style="color:#730fef"></i>
      </div>
      <div class="mt-4 d-none d-md-flex justify-content-evenly">
        <i class="fab fa-html5 fa-7x" style="color:#f4470b"></i>
        <i class="fab fa-css3-alt fa-7x text-primary"></i>
        <i class="fab fa-bootstrap fa-7x" style="color:#730fef"></i>
      </div>
    </section>
    <section id="works" class="mt-4 p-4 ">
      <!-- My works -->
      <h1 class="text-success text-center ">My Works</h1>
      <div class="row">
        <div class="col-sm col-md-4">
      <div class="card mt-2 mb-2">
       <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">Porfolio Website</h5>
       <p class="card-text">Built an amazing responsive website with Bootstrap.</p>
       <a href="#" class="btn btn-info">View Source <i class="fab fa-github"></i></a>
       </div>
       </div>
        </div>
        <div class="col-sm col-md-4">
      <div class="card mt-2 mb-2">
       <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">Porfolio Website</h5>
       <p class="card-text">Built an amazing responsive website with Bootstrap.</p>
       <a href="#" class="btn btn-info">View Source <i class="fab fa-github"></i></a>
       </div>
       </div>
        </div>
        <div class="col-sm col-md-4">
      <div class="card mt-2 mb-2">
       <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">Porfolio Website</h5>
       <p class="card-text">Built an amazing responsive website with Bootstrap.</p>
       <a href="#" class="btn btn-info">View Source <i class="fab fa-github"></i></a>
       </div>
       </div>
        </div>
       
       </div>
    </section>
    <section id="contact" class="mt-4 py-4">
      <!-- Contact Me -->
      <h1 class="text-success text-center ">Contact Form</h1>
<div class="row">
  <div class="col-sm col-md-8">
      <form>
         <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" required placeholder="enter your amazing message!" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary ">
  Submit

</button>
  </form>
  </div>
  <div class="col-md-4">
    <div class="mt=3">
    <h3><i class="fas fa-at text-danger"></i>
    369niteesh@gmail.com</h3>
    <button type="button" class="btn btn-link">
      <a href="https://github.com/nkc369"><i class="fab fa-github"></i></a></a>
    </button>
    </div>
</div>
    </section>  
  </main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>    
  </body>
</html>