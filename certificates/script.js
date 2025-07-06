$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }
  });
});

document.addEventListener('visibilitychange',
  function () {
    if (document.visibilityState === "visible") {
      document.title = "Certificates | Portfolio Ravi Narayana";
      $("#favicon").attr("href", "/assets/images/favicon-32x32.png");
    }
    else {
      document.title = "Come Back To Portfolio";
      $("#favicon").attr("href", "/assets/images/favhand.png");
    }
  });


// fetch projects start
function fetchCertificates() {
  return fetch("certificates.json")
    .then(response => response.json())
    .then(data => {
      return data
    });
}


function displayCertificates(certificates) {
  const container = document.querySelector(".certificates .box-container");
  
  let certHTML = "";
  certificates.forEach(cert => {
    certHTML += `
        <div class="grid-item ${cert.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/certificates/${cert.image}.png" alt="Certificate" />
      <div class="content">
        <div class="tag">
        <h3>${cert.name}</h3>
        </div>
        <div class="desc">
          <p>${cert.desc}</p>
          <div class="btns">
            <a href="${cert.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${cert.links.download}" class="btn" target="_blank">Download <i class="fas fa-download"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
  });
  container.innerHTML = certHTML;

  // vanilla tilt.js
  // VanillaTilt.init(document.querySelectorAll(".tilt"), {
  //     max: 20,
  // });
  // // vanilla tilt.js  

  // /* ===== SCROLL REVEAL ANIMATION ===== */
  // const srtop = ScrollReveal({
  //     origin: 'bottom',
  //     distance: '80px',
  //     duration: 1000,
  //     reset: true
  // });

  // /* SCROLL PROJECTS */
  // srtop.reveal('.work .box', { interval: 200 });

  // isotope filter products
  var $grid = $('.box-container').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    masonry: {
      columnWidth: 200
    }
  });

  // filter items on button click
  $('.button-group').on('click', 'button', function () {
    $('.button-group').find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
}

fetchCertificates().then(data => {
  displayCertificates(data);
})
// fetch projects end

// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}