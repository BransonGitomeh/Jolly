var navbar = require("./navbar");

module.exports={
        view:function(){
            return  m("header",[
              m("div",{id:"index-banner",class:"section no-pad-bot " + color + " hide-on-med-and-down"},[
                    m(".container row center-on-small-only ",[
                      // logo area
                      m(".col l3 s12 white-text center-align",[
                        m("img",{
                          class:"materialboxed",
                          "data-caption":"Our Sanctuary",
                          width:"250",
                          src:"/app/images/gathering_logo.png",
                          config:function(){
                            $('.materialboxed').materialbox();
                          }
                        }),
                      ]),

                      // services
                      m(".col l3 s12 white-text",[
                          m("h5","Sunday services"),
                          m(".divider"),
                          m("p","Sunday morning worship",[
                            m("b",": 8.00am"),
                            m("span"," to "),
                            m("b","8.00pm "),
                          ]),
                          m("p","Sunday evening worship",[
                            m("b",": 6.00pm")
                          ])
                      ]),

                      // location
                      m(".col l3 s12 white-text",[
                          m("h5","Location"),
                          m(".divider"),
                          m("p","78024 joska")
                      ]),

                      // Contact
                      m(".col l3 s12 white-text",[
                          m("h5","Contact"),
                          m(".divider"),
                          m("p","Pastor: 0711122523")
                      ]),
                    ])
                  ]),
                  m(navbar),
            ])


        }
    }
