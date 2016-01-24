m.route.mode = "hash";

m.route(document.body,'/',{
  "/":require('./js/App/pages/home'),
  "/contactus":require('./js/App/pages/contactus'),
  // //academics
  "/academics/ecd":require('./js/App/pages/ecd'),
  "/academics/calender":require('./js/App/pages/calender'),
  "/academics/admissions":require('./js/App/pages/admissions'),
  "/academics/examinations":require('./js/App/pages/examinations'),
  //operations
  "/operations/service_charter":require('./js/App/pages/service_charter'),
  "/operations/governance":require('./js/App/pages/governance'),
  "/operations/HR":require('./js/App/pages/hr'),
  "/operations/finance":require('./js/App/pages/finance'),
  "/operations/downloads":require('./js/App/pages/downloads'),
  //proffessional_development
  "/proffessional_development/ctdc":require('./js/App/pages/ctdc'),
  "/proffessional_development/shortcourses":require('./js/App/pages/shortcourses')
});
