/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  // Load data from JSON file
  $.getJSON("assets/data.json", function (data) {
    // Populate website with JSON data
    populateWebsite(data);
  }).fail(function (jqxhr, textStatus, error) {
    console.error("Error loading JSON data: " + textStatus + ", " + error);
  });

  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

// Function to populate website content from JSON
function populateWebsite(data) {
  // Populate navigation
  populateNavigation(data.navigation);

  // Populate header section
  populateHeader(data.header);

  // Populate about section
  populateAbout(data.about);

  // Populate services section
  populateServices(data.services);

  // Populate portfolio section
  populatePortfolio(data.portfolio);

  // Populate pricing section
  populatePricing(data.pricing);

  // Populate CTA section
  populateCTA(data.cta);

  // Populate testimonials section
  populateTestimonials(data.testimonials);

  // Populate blog section
  populateBlog(data.blog);

  // Populate contact section
  populateContact(data.contact);

  // Populate footer
  populateFooter(data.footer);
}

// Populate navigation
function populateNavigation(data) {
  // Set brand name
  $(".logo").text(data.brand);

  // Clear and populate navigation links
  var navList = $(".nav");
  navList.empty();

  // Add nav items from JSON
  data.links.forEach(function (item) {
    navList.append(`
            <li class="item">
                <a class="link" href="${item.href}">${item.text}</a>
            </li>
        `);
  });
}

// Populate header section
function populateHeader(data) {
  // Set header title
  $(".header-title .up").text(data.title.up);
  $(".header-title .down").text(data.title.down);

  // Set header subtitle
  $(".header-subtitle").text(data.subtitle);

  // Set CTA button text
  $(".header .btn").text(data.cta);
}

// Populate about section
function populateAbout(data) {
  // Set about image
  $(".about-img").attr("src", data.image);

  // Set section subtitle
  $("#about .section-subtitle").text(data.subtitle);

  // Set section title
  $("#about .section-title").text(data.title);

  // Set about description
  $("#about .about-caption p:not(.section-subtitle):not(.section-title)").html(
    data.description.replace(/\n/g, "<br>")
  );

  // Set CTA button text
  $("#about .btn-rounded").text(data.cta);
}

// Populate services section
function populateServices(data) {
  // Set section subtitle
  $("#service .section-subtitle").text(data.subtitle);

  // Set section title
  $("#service .section-title").text(data.title);

  // Clear services container
  var servicesRow = $("#service .row");
  servicesRow.empty();

  // Add service items from JSON
  data.items.forEach(function (item) {
    servicesRow.append(`
            <div class="col-md-6 col-lg-3">
                <div class="service-card">
                    <div class="body">
                        <img src="${item.icon}" class="icon">
                        <h6 class="title">${item.title}</h6>
                        <p class="subtitle">${item.description}</p>
                    </div>
                </div>
            </div>
        `);
  });
}

// Populate portfolio section
function populatePortfolio(data) {
  // Set section subtitle
  $("#portfolio .section-subtitle").text(data.subtitle);

  // Set section title
  $("#portfolio .section-title").text(data.title);

  // Clear portfolio container
  var portfolioRow = $("#portfolio .row");
  portfolioRow.empty();

  // Add portfolio items from JSON
  data.items.forEach(function (item) {
    portfolioRow.append(`
            <div class="col-md-4">
                <a href="#" class="portfolio-card">
                    <img src="${item.image}" class="portfolio-card-img">
                    <span class="portfolio-card-overlay">
                        <span class="portfolio-card-caption">
                            <h4>${item.title}</h4>
                            <p class="font-weight-normal">${item.category}</p>
                        </span>
                    </span>
                </a>
            </div>
        `);
  });
}

// Populate pricing section
function populatePricing(data) {
  // Set section subtitle
  $("#pricing .section-subtitle").text(data.subtitle);

  // Set section title
  $("#pricing .section-title").text(data.title);

  // Clear pricing container
  var pricingWrapper = $(".pricing-wrapper");
  pricingWrapper.empty();

  // Add pricing plans from JSON
  data.plans.forEach(function (plan) {
    // Create features list
    var featuresList = "";
    plan.features.forEach(function (feature) {
      if (feature.available) {
        featuresList += `<p>${feature.text}</p>`;
      } else {
        featuresList += `<p><i class="ti-close"></i></p>`;
      }
    });

    pricingWrapper.append(`
            <div class="pricing-card">
                <div class="pricing-card-header">
                    <img class="pricing-card-icon" src="${plan.icon}">
                </div>
                <div class="pricing-card-body">
                    <h6 class="pricing-card-title">${plan.title}</h6>
                    <div class="pricing-card-list">
                        ${featuresList}
                    </div>
                </div>
                <div class="pricing-card-footer">
                    <span>${plan.price.currency}</span>
                    <span>${plan.price.amount}</span>
                </div>
                <a href="#" class="btn btn-primary mt-3 pricing-card-btn">${plan.cta}</a>
            </div>
        `);
  });
}

// Populate CTA section
function populateCTA(data) {
  // Set CTA title
  $(".section-sm .title").text(data.title);

  // Set CTA subtitle
  $(".section-sm .m-0").text(data.subtitle);

  // Set CTA button text
  $(".section-sm .btn").text(data.buttonText);
}

// Populate testimonials section
function populateTestimonials(data) {
  // Set section subtitle
  $("#testmonial .section-subtitle").text(data.subtitle);

  // Set section title
  $("#testmonial .section-title").text(data.title);

  // Clear testimonials container
  var testimonialRow = $("#testmonial .row");
  testimonialRow.empty();

  // Add testimonial items from JSON
  data.items.forEach(function (item) {
    testimonialRow.append(`
            <div class="col-md-6">
                <div class="testimonial-card">
                    <div class="testimonial-card-img-holder">
                        <img src="${item.image}" class="testimonial-card-img">
                    </div>
                    <div class="testimonial-card-body">
                        <p class="testimonial-card-subtitle">${item.comment}</p>
                        <h6 class="testimonial-card-title">${item.name}</h6>
                    </div>
                </div>
            </div>
        `);
  });
}

// Populate blog section
function populateBlog(data) {
  // Set section subtitle
  $("#blog .section-subtitle").text(data.subtitle);

  // Set section title
  $("#blog .section-title").text(data.title);

  // Clear blog container
  $("#blog .blog-card").remove();

  // Add blog posts from JSON
  data.posts.forEach(function (post) {
    var highlightHTML = post.highlight ? `<p><b>${post.highlight}</b></p>` : "";
    var additionalContentHTML = post.additionalContent
      ? `<p>${post.additionalContent}</p>`
      : "";

    $("#blog .container").append(`
            <div class="blog-card">
                <div class="blog-card-header">
                    <img src="${post.image}" class="blog-card-img">
                </div>
                <div class="blog-card-body">
                    <h5 class="blog-card-title">${post.title}</h5>
                    <p class="blog-card-caption">
                        <a href="#">By: ${post.author}</a>
                        <a href="#"><i class="ti-heart text-danger"></i> ${post.likes}</a>
                        <a href="#"><i class="ti-comment"></i> ${post.comments}</a>
                    </p>
                    <p>${post.content}</p>
                    ${highlightHTML}
                    ${additionalContentHTML}
                    <a href="#" class="blog-card-link">Read more <i class="ti-angle-double-right"></i></a>
                </div>
            </div>
        `);
  });
}

// Populate contact section
function populateContact(data) {
  // Set section subtitle
  $("#contact .section-subtitle").text(data.subtitle);

  // Set section title
  $("#contact .section-title").text(data.title);

  // Set submit button text
  $('#contact input[type="submit"]').val(data.submitText);
}

// Populate footer
function populateFooter(data) {
  // Set copyright text with current year
  var copyright = data.copyright.replace("{{YEAR}}", new Date().getFullYear());
  $(".footer p.mb-0").html(copyright);

  // Clear social links
  var socialLinks = $(".social-links");
  socialLinks.empty();

  // Add social links from JSON
  data.socialLinks.forEach(function (link) {
    socialLinks.append(`
            <a href="${link.url}" class="link" target="_blank"><i class="${link.icon}"></i></a>
        `);
  });
}
