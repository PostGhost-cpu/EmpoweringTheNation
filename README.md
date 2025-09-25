# Empowering the Nation Web Application
Empowering the Nation is a static web platform that provides accredited vocational training and resources for domestic workers and gardeners in South Africa. The project supports course browsing, an automated fee calculator with multi-course discounts, user registration, basic authentication, and a support section. The repository contains the HTML, CSS, JavaScript, and assets for the current version.

## Features
* Course catalog with six-month and six-week accredited programs.
* Courses included: First Aid, Sewing, Landscaping, Life Skills, Child Minding, Cooking, Garden Maintenance.
Automated fee calculator with multi-course discount tiers:
2 courses: 5% off
3 courses: 10% off
4 or more: 15% off

* User registration form collects name, surname, phone, and email.
* Simple login form for basic authentication.
* Support section with discount policy, privacy policy, FAQs, and terms and conditions.
* News and updates area for community posts and related media.
* Responsive design and mobile-friendly layouts.

## File structure (current version)
/
├── Home.html
├── Quote.html         <!-- fee calculator and application workflow -->
├── Login.html
├── Courses.html
├── FirstAid.html
├── ChildMinding.html
├── Cooking.html
├── GardenMaintenance.html
├── Landscaping.html
├── LifeSkills.html
├── Sewing.html
├── Support.html
├── About.html
├── css/               <!-- stylesheets -->
├── js/                <!-- fee calculator -->
├── Images/            <!-- images and media assets -->
└── README.md

### How the fee calculator works (summary)
* Each course checkbox uses a value attribute for price. Typical values used in this project:
* Six-month course: 1500
* Six-week course: 750

+ When the user applies, the script sums the values of checked courses.
+ The discount is chosen by the number of selected courses.
+ The final fee shown reflects subtotal minus discount.

## Getting started (light)
1. Clone the repository.
2. Open Home.html in a modern browser.
3. Use Quote.html to test the fee calculator and apply for courses.
4. Use Login.html to test the simple authentication flow.
No build tools are required for the current version. The project is static HTML, CSS, and JavaScript.
