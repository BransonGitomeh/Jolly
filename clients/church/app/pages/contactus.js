var footer = require("../peices/footer")
var topbar = require("../peices/topbar")
var contactForm = require("../peices/contactForm")


module.exports = {
        view:function(){
            return [
                m(topbar),
                // m(hero),
                m(".row center card-panel",[
                  // m("h1","about us")
                  m(".col s12 l5",[
                    m("div","good welcoming picture to show we will respond")

                  ]),

                  m(".col s12 l7",[
                    m(".card-panel",[
                      m("h5","Leave us a message"),
                      m(contactForm)
                    ])
                  ])
                ]),
                // custom component with unique content per page
                m(footer)
            ]
        }
    }

    // m.mount(document.body,homapage)
