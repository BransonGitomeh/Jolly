var navbar = require("./navbar");
var map = require("./map");

module.exports={
        view:function(){
            return  m("header",[
              m("div",{id:"index-banner",class:"section no-pad-bot " + color + " hide-on-med-and-down"},[
                    m(".container row center-on-small-only ",[
                      // logo area
                      m(".col l3 s12 white-text center-align",[
                        m("br"),
                        m("img",{
                          class:"materialboxed",
                          "data-caption":"Our Sanctuary",
                          width:"250",
                          src:"/build/assets/img/orgFace/gathering_logo.png",
                          config:function(){
                            $('.materialboxed').materialbox();
                          }
                        }),
                      ]),

                      // services
                      m(".col l3 s12 white-text",[
                          m("h5","Sunday services"),
                          m(".divider"),
                          // m("p","Sunday morning worship",[
                          //   m("b",": 8.00am"),
                          //   m("span"," to "),
                          //   m("b","8.00pm "),
                          // ]),
                          // m("p","Sunday evening worship",[
                          //   m("b",": 6.00pm")
                          // ])
                      ]),

                      // location
                      m(".col l3 s12 white-text",[
                          m("h5","Location"),
                          m(".divider"),
                          // m("p","78024 joska")
                          // m(map,{location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815598306964!2d37.093902214421924!3d-1.2845778990630647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x52c11944d2787634!2sJoska+Kangundo+RD!5e0!3m2!1sen!2ske!4v1453728814983"})

                      ]),

                      // Contact
                      m(".col l3 s12 white-text",[
                          m("h5","Contact"),
                          m(".divider"),
                          // m("p","Pastor: 0711122523")
                      ]),
                    ])
                  ]),
                  m(navbar),
            ])


        }
    }
