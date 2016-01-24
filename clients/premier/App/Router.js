m.route.mode = "hash";

m.route(document.body,'/',{
  "/":require('./pages/home'),
  "/contactus":require('./pages/contactus'),
  // //academics
  "/academics/ecd":require('./pages/ecd'),
  "/academics/calender":require('./pages/calender'),
  "/academics/admissions":require('./pages/admissions'),
  "/academics/examinations":require('./pages/examinations'),
  "/academics/liblary":require('./pages/liblary'),

  //operations
  "/operations/service_charter":require('./pages/service_charter'),
  "/operations/governance":require('./pages/governance'),
  "/operations/HR":require('./pages/hr'),
  "/operations/finance":require('./pages/finance'),
  "/operations/downloads":require('./pages/downloads'),
  //proffessional_development
  "/proffessional_development/ctdc":require('./pages/ctdc'),
  "/proffessional_development/shortcourses":require('./pages/shortcourses'),
  "/proffessional_development/bronchure":require('./pages/bronchure'),
  "/proffessional_development/productinformation":require('./pages/productinformation')


});
