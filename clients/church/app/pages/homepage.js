var navbar = require("../peices/navbar");
var hero = require("../peices/hero");
var fancypics = require("../peices/fancypics");
var footer = require("../peices/footer");
var topbar = require("../peices/topbar")




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
                  m("img",{src:"/build/assets/img/2.png",alt:"slide 1"}),
                  m("img",{src:"/build/assets/img/3.png",alt:"slide 1"}),
                  // m("img",{src:"img/4.jpg",alt:"slide 1"}),
                  // m("img",{src:"img/5.jpg",alt:"slide 1"})
                ]),

                // <ul class="table-of-contents">
                //   <li><a href="#download" class="active">Download</a></li>
                //   <li><a href="#setup">Setup</a></li>
                //   <li><a href="#templates">Templates</a></li>
                //   <li><a href="#third-party-options">Third-party Options</a></li>
                //   <li><a href="#sass">Sass</a></li>
                // </ul>



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

            m(".col l12 s12",[
              // <div class="parallax-container valign-wrapper">
              //   <div class="section no-pad-bot">
              //     <div class="container">
              //       <div class="row center">
              //         <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
              //       </div>
              //     </div>
              //   </div>
              //   <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3" style="display: block; transform: translate3d(-50%, 210px, 0px);"></div>
              // </div>

              // m(".parallax-container",[
              //   m(".parallax",{
              //     config:function(){
              //       $('.parallax').parallax();
              //     }
              //   },[
              //     m("img",{src:"/app/images/organogram.png"})
              //   ])
              // ]),


              // m(fancypics)
            ]),
            //
            m(".col l6 s12",[
               m("div",[
                //  m("h4",[
                //    m("u","Church Services")
                //  ]),
                //  m("table",{class:"striped"},[
                //    m("thead",[
                //      m("th","service"),
                //      m("th","start"),
                //      m("th","end")
                //    ]),
                //    m("tbody",[
                //      m("tr",[
                //        m("td","service 1"),
                //        m("td","1 am"),
                //        m("td","4 am"),
                //      ]),
                 //
                //      m("tr",[
                //        m("td","service 1"),
                //        m("td","1 am"),
                //        m("td","4 am"),
                //      ])
                //    ])
                //  ]),
                //  m("h5","we are located in xxxxx , feel free to join us at any time")
               ]),
               //
              //  m(require("./map"),{
              //    location:"https://maps.google.com/maps?hl=en&q=Joska, Nairobi City, Kenya&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed",
              //    height:"440",
              //    width:"650"
              //  })
            ])

          ]),

          m(footer)
      ]
  }
}
