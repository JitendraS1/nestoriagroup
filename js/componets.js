const loader = document.getElementById('spinner');
const topbar = document.getElementById('Topbar');
const navbar = document.getElementById('nav');
const header = document.getElementById('header');
const footer = document.getElementById('footer');


topbar.innerHTML = `<div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                    <a class="text-body px-2" href="tel:+0123456789"><i
                            class="fa fa-phone-alt text-primary me-2"></i>+919274691910</a>
                    <a class="text-body px-2" href="mailto:info@example.com"><i
                            class="fa fa-envelope-open text-primary me-2"></i>info@nestoriagroup.com</a>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                 <div class="h-100 d-inline-flex align-items-center py-3 me-2">
                    <a class="text-body px-2" onclick="openBrochure()" href="#">Newsletters</a>
                    <a class="text-body px-2" href="#">Brochure</a>
                </div>
                <div class="h-100 d-inline-flex align-items-center" id="medialinks">
                   <a class="btn btn-square btn-outline-body me-1" target="_blank" href="https://www.facebook.com/share/1Ai3udDNR4/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" target="_blank" href="https://www.instagram.com/nestoria.group?igsh=MTlod3kxYWlmc2Njcw=="><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" target="_blank" href="https://www.youtube.com/@nestoriagroup"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-body me-0" target="_blank" href="https://www.linkedin.com/company/nestoriagroup/"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>`;

loader.innerHTML = `<div class="spinner-border position-relative text-primary" style="width: 6rem; height: 6rem;" role="status">
        </div>
        <img class="position-absolute top-50 start-50 translate-middle" height="60" src="img/logo.png" alt="Icon">`;

navbar.innerHTML = ` <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
            <img class="me-1" src="https://ik.imagekit.io/bhadoriyaji/logo2.png?updatedAt=1749496082721" height="50"
                alt="Icon">
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <!-- <a href="about.html" class="nav-item nav-link">About</a> -->
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                    <div class="dropdown-menu border-0 m-0">
                        <a href="about.html" class="dropdown-item">About</a>
                        <a href="about-dholera.html" class="dropdown-item">About Dholera SIR</a>
                        <a href="feature.html" class="dropdown-item">Our Features</a>
                        <a href="project.html" class="dropdown-item">Our Projects</a>
                        <a href="team.html" class="dropdown-item">Team Members</a>
                        <!-- <a href="appointment.html" class="dropdown-item">Appointment</a> -->
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <!-- <a href="404.html" class="dropdown-item">404 Page</a> -->
                    </div>
                </div>
                
                <a href="project.html" class="nav-item nav-link">Project's</a>
                <a href="#" class="nav-item nav-link">Blog</a>
                <a href="faq.html" class="nav-item nav-link">Faq's</a>
            </div>
            <a href="contact.html" class="btn btn-primary py-2 px-4 d-none d-lg-block">Contect Us</a>
        </div>`;


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
console.log("Fetched team:", firstTask.team);

questiondata(firstFaq.qna);


    // Do something with the tasks here

  } catch (error) {
    console.error("Fetch error:", error.status);
  }
}

fetchTasks();
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



// <-- pdf Viwe -->

function openBrochure() {
    window.open('brochure.html', '_blank');
  }
