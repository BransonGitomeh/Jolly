var navbar = require("../peices/navbar");
var hero = require("../peices/hero");
var fancypics = require("../peices/fancypics");
var footer = require("../peices/footer");
var topbar = require("../peices/topbar");
var infocard = require("../peices/infocard")

// var m = require("mithril")


module.exports = {
  view:function(){
      return [
          m(topbar),

          // m(hero),
          // custom component with unique content per page
          m(".row",[

            m(".col l9",[
              m("br"),
              m("br"),
            // slider here
                m("div",{
                  id:"slider",
                  config:function(){
                    var slider = new IdealImageSlider.Slider('#slider');
                  	slider.start();
                  }
                },[
                  m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),
                  m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),

                  // m("img",{src:"/build/assets/img/2.png",alt:"slide 1"}),
                  // m("img",{src:"/build/assets/img/3.png",alt:"slide 1"}),
                  // m("img",{src:"img/4.jpg",alt:"slide 1"}),
                  // m("img",{src:"img/5.jpg",alt:"slide 1"})
                ]),

            ]),

            m(".col l3 ",[
              m("br"),
              m("br"),
              m(".card-panel",[
                m("h5",{class:"center"},"Events"),
                m("ul",{class:"table-of-contents"},[
                  m("li",[
                    m("a",{class:"active"},"Event happening on 20th of may, Please avail yourselves!")
                  ])
                ])
              ])
            ]),

            m("div",{class:"col l12"},[
              m("br"),
              m(".divider"),
              m("h5","Upcoming Events"),
              m(".divider"),

              m(".row",[
                m(".col l3",[
                  m(infocard,{
                    cardLink:"/aweosme",
                    url:"/build/assets/img/icons/worship.jpg",
                    text:"Seminars"
                  })
                ]),
                 m(".col l3",[
                   m(infocard,{
                    cardLink:"/aweosme",
                    url:"/build/assets/img/icons/worship.jpg",
                    text:"Keshas"
                  })
                ]),
                m(".col l3",[
                   m(infocard,{
                    cardLink:"/aweosme",
                    url:"/build/assets/img/icons/worship.jpg",
                    text:"Meetings"
                  })
                ]),
                m(".col l3",[
                   m(infocard,{
                    cardLink:"/aweosme",
                    url:"/build/assets/img/icons/worship.jpg",
                    text:"Celebrations"
                  })
                ]),

              ]),
            ]),

            m("div",{class:"col l12"},[
                          m(".divider"),
                          m("h5","Recent News"),
                          m(".divider"),

                          m(".row",[
                            m(".col l3",[
                              m(infocard,{
                                cardLink:"/aweosme",
                                url:"/build/assets/img/icons/worship.jpg",
                                text:"Development"
                              })
                            ]),
                             m(".col l3",[
                               m(infocard,{
                                cardLink:"/aweosme",
                                url:"/build/assets/img/icons/worship.jpg",
                                text:"Ministry"
                              })
                            ]),
                            m(".col l3",[
                               m(infocard,{
                                cardLink:"/aweosme",
                                url:"/build/assets/img/icons/worship.jpg",
                                text:"Youth"
                              })
                            ]),
                            m(".col l3",[
                               m(infocard,{
                                cardLink:"/aweosme",
                                url:"/build/assets/img/icons/worship.jpg",
                                text:"Announcements"
                              })
                            ]),

                          ]),
                        



                        ])
          ]),

          m(footer)
      ]
  }
}
