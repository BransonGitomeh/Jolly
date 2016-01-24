var footer = require("../peices/footer")
var topbar = require("../peices/topbar")

module.exports = {
        view:function(){
            return [
                m(topbar),
                // m(hero),
                m(".row center card-panel",[
                  // m("h1","about us")
                  m(".col l5",[
                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

                  ]),

                  m(".col l7",[
                    m(".card-panelx",[
                      m("h3","Our ministries Article"),
                      m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
                    ])
                  ])
                ]),
                // custom component with unique content per page
                m(footer)
            ]
        }
    }

    // m.mount(document.body,homapage)
