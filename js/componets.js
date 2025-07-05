// <-- pdf Viwe -->

function openBrochure() {
    window.open('brochure.html', '_blank');
  }


const Navbar = () => {
  return ` <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
            <img class="me-1" src="img/logo2.png" height="60px" alt="Icon">
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <!-- <a href="about.html" class="nav-item nav-link">About</a> -->
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
                    <div class="dropdown-menu border-0 m-0">
                        <a href="about.html" class="dropdown-item">About Us</a>
                        <a href="about-dholera.html" class="dropdown-item">About Dholera SIR</a>
                        <!--<a href="feature.html" class="dropdown-item">Our Features</a> -->
                        <a href="project.html" class="dropdown-item">Our Projects</a>
                        <a href="team.html" class="dropdown-item">Team Members</a>
                        <a href="achievements.html" class="dropdown-item">Achievements</a>
                        <a href="videos.html" class="dropdown-item">Videos Page</a>
                        <a href="service.html" class="dropdown-item">Services</a> 
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <!-- <a href="404.html" class="dropdown-item">404 Page</a> -->
                    </div>
                </div>
                
                <a href="project.html" class="nav-item nav-link">Land</a>
                <a href="blog.html" class="nav-item nav-link">Blog</a>
                <a href="faq.html" class="nav-item nav-link">Faq's</a>
            </div>
            <a href="contact.html" class="btn btn-primary py-2 px-4 d-none d-lg-block">Contact Us</a>
        </div>`;
}

const Topbar = () => {
  return `<div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                    <a class="text-body px-2" href="tel:+0123456789"><i
                            class="fa fa-phone-alt text-primary me-2"></i>+91 74860 - 03361</a>
                    <a class="text-body px-2" href="mailto:info@example.com"><i
                            class="fa fa-envelope-open text-primary me-2"></i>info@nestoriagroup.com</a>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                 <div class="h-100 d-inline-flex align-items-center py-3 me-2">
                  <!--  <a class="text-body px-2" onclick="openBrochure()" href="#">Newsletters</a> -->
                    <a class="text-body px-2" onclick="openBrochure()" href="#">Brochure</a>
                </div>
                <div class="h-100 d-inline-flex align-items-center" id="medialinks">
                <a class="btn btn-square btn-outline-body me-1" target="_blank" href="https://www.youtube.com/@nestoriagroup"><i class="fab fa-youtube"></i></a>
                <a class="btn btn-square btn-outline-body me-1" target="_blank" href="https://www.instagram.com/nestoria.group?igsh=MTlod3kxYWlmc2Njcw=="><i class="fab fa-instagram"></i></a>
                   <a class="btn btn-square btn-outline-body me-1" target="_blank" href="https://www.facebook.com/share/1Ai3udDNR4/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-body me-0" target="_blank" href="https://www.linkedin.com/company/nestoriagroup/"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>`;
}


const Loader = () =>{
  return `<div class="spinner-border position-relative text-primary" style="width: 6rem; height: 6rem;" role="status">
        </div>
        <img class="position-absolute top-50 start-50 translate-middle" height="60" src="img/logo.png" alt="Icon">`
}


const Footer = () => {
  return ` <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">
                        <img class="me-1" src="img/logo1.png"
                            height="50" alt="Icon" style="margin: 0 0 0 -25px;" />
                    </h3>
                    <p class="mb-2">
                        <i class="fa fa-map-marker-alt text-primary me-3"></i>3rd Floor,
                        Sarthik Complex, Satellite Rd, Ramdev Nagar, Ahmedabad, Gujarat
                        380015
                    </p>
                    <p class="mb-2">
                        <i class="fa fa-phone-alt text-primary me-3"></i>+91 74860 - 03361
                    </p>
                    <p class="mb-2">
                        <i class="fa fa-envelope text-primary me-3"></i>info@nestoriagroup.com
                    </p>
                    
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">Services</h3>
                    <a class="btn btn-link" style="pointer-events: none; " href="#">Transparent
                        Dealings</a>
                    <a class="btn btn-link" style="pointer-events: none; " href="#">
                        Strong After-Sales Service</a>
                    <a class="btn btn-link" style="pointer-events: none; " href="#">End-to-End
                        Assistance</a>
                    <a class="btn btn-link" style="pointer-events: none; " href="#">Documentation -
                        Land Legal Paperwork</a>
                    <a class="btn btn-link" style="pointer-events: none; " href="#">Real Estate
                        Investment DSIR Guidelines</a>
                    <a class="btn btn-link" style="pointer-events: none; " href="#">Real Estate Investment Advisory</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">Quick Links</h3>
                    <a class="btn btn-link" href="about.html">About Us</a>
                    <a class="btn btn-link" href="about-dholera.html">About Dholera Sir</a>
                    <a class="btn btn-link" href="contact.html">Contact Us</a>
                    <a class="btn btn-link" href="service.html">Our Services</a>
                    <a class="btn btn-link" href="project.html">Projects</a>
                    <a class="btn btn-link" href="faq.html">Faq's</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                    <a class="btn btn-link" href="blog.html">Blog</a>
                    <a class="btn btn-link" href="team.html">Team Members</a>
                    <a class="btn btn-link" href="achievements.html">Achievements</a>
                    <a class="btn btn-link" href="service.html">Company Profile</a>

                    <div class="d-flex pt-2">
                        <!-- <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-twitter"></i></a> -->
                        <a class="btn btn-square btn-outline-body me-1" href="https://www.youtube.com/@nestoriagroup"><i
                                class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-body me-1"
                            href="https://www.instagram.com/nestoria.group?igsh=MTlod3kxYWlmc2Njcw=="><i
                                class="fab fa-instagram"></i></a>
                        <a class="btn btn-square btn-outline-body me-1"
                            href="https://www.facebook.com/share/1Ai3udDNR4/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-body me-0"
                            href="https://www.linkedin.com/company/nestoriagroup/"><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright ">
            <div class="container ">
                <div class="row ">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy;
                        <a href="https://nestoriagroup.com">Nestoria Group Of Company's</a>, All Right Reserved.
                    </div>
                     <div class="col-md-6 text-center text-md-end">
                        Designed By <a href="javascript:void(0)"> Nestoria </a>
                     </div>
                </div>
            </div>
        </div>`;
}
// const Counter = () =>{
//   return ` `;
// }





// const footer = document.getElementById('footer');









//  <!-- <div class="nav-item dropdown">
//                     <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                     <div class="dropdown-menu border-0 m-0">
//                         <a href="feature.html" class="dropdown-item">Our Features</a>
//                         <a href="project.html" class="dropdown-item">Our Projects</a>
//                         <a href="team.html" class="dropdown-item">Team Members</a>
//                         <a href="appointment.html" class="dropdown-item">Appointment</a>
//                         <a href="testimonial.html" class="dropdown-item">Testimonial</a>
//                         <a href="404.html" class="dropdown-item">404 Page</a>
//                     </div>
//                 </div> -->

// <--- form data -->

// (function () {
//     emailjs.init("OvbmmuXaAo_-4Qa_1"); // Replace with your EmailJS Public Key
// })();

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     emailjs.sendForm('service_9fli2tk', 'template_rixu9bd', this)
//         .then(function () {
//             alert('Message sent successfully!');
//             document.getElementById('contact-form').reset();
//         }, function (error) {
//             alert('Failed to send message. Please try again.');
//             console.error('Error:', error);
//         });
// });


// <-- team data -->
let apiUrl = "https://68495f9145f4c0f5ee712315.mockapi.io/nestoria";

  fetchTasks = async () => {
  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const tasks = await res.json();
    const [firstTask] = tasks;
const [firstFaq] = firstTask.faq;

console.log("Fetched QnA:", firstFaq.qna);
// console.log("Fetched team:", firstTask.team);

questiondata(firstFaq.qna);


    // Do something with the tasks here

  } catch (error) {
    console.error("Fetch error:", error.status);
  }
}

let accordion = document.getElementById('accordionFlushExample');

let questiondata = (data) => {
  accordion.innerHTML = ""; // Clear existing content

  data.forEach((q, i) => {
    // Create accordion item
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    // Header
    const header = document.createElement('h2');
    header.className = 'accordion-header';
    header.id = `flush-heading-${i}`;

    const button = document.createElement('button');
    button.className = 'accordion-button collapsed';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#flush-collapse-${i}`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `flush-collapse-${i}`);
    button.innerText = `Q ${i + 1}. ${q.question}`;

    // Collapse container
    const collapseDiv = document.createElement('div');
    collapseDiv.id = `flush-collapse-${i}`;
    collapseDiv.className = 'accordion-collapse collapse';
    collapseDiv.setAttribute('aria-labelledby', `flush-heading-${i}`);
    collapseDiv.setAttribute('data-bs-parent', '#accordionFlushExample');

    // Accordion body
    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML ="<b>ANS -</b> "+  q.answer;

    // Append all elements properly
    header.appendChild(button);
    collapseDiv.appendChild(body);
    accordionItem.appendChild(header);
    accordionItem.appendChild(collapseDiv);
    accordion.appendChild(accordionItem);
  });
};


// let teamdata = (team) =>{
//     console.log(team , " le bhosdike data")
// }



fetchTasks();
  const topbar = document.getElementById('Topbar');
  const loader = document.getElementById('spinner');
  const navbar = document.getElementById('nav');
  const footer = document.getElementById('footer');

if (navbar) {
  navbar.innerHTML = Navbar();
}
if (loader){
    loader.innerHTML = Loader();
}

if (topbar) {
  topbar.innerHTML = Topbar();
}

if (footer) {
  footer.innerHTML = Footer();
}

