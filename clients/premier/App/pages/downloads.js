// TODO make a nice table with b=versioning and cute download buttons and last updated list

var navbar = require("../peices/navbar");
var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");



module.exports = {
  view:function(ctrl){

    return m(".app",[
      m.component(navbar),

      m(".row",[
        //collumn 1 , the sidebar
        m(".col l3 hide-on-med-and-down",[
          m.component(sidebar)
        ]),
        //the sider and everything else
        m(".col l9",[
          m("h3",{class:"center blue-text"},"Downloads"),

          m("h5",{class:"center"},"the following files are available for download"),

          m("table",{class:"striped centered"},[
            m("tbody",[

              m("tr",[

                m("td",[
                  m("a",{href:'awesome'},"Application Form")
                ]),

                m("td",[
                  m("a",{href:'awesome'},"Academic calender 2015/2016")
                ]),

              ]),

              m("tr",[

                m("td",[
                  m("a",{href:'awesome'},"College Service charter")
                ]),

                m("td",[
                  m("a",{href:'awesome'},"Student Hand Book")
                ]),

              ]),

              m("tr",[

                m("td",[
                  m("a",{href:'awesome'},"General Examination Policy")
                ]),

                m("td",[
                  m("a",{href:'awesome'},"Library Rules and Regulations")
                ]),

              ]),

              m("tr",[

                m("td",[
                  m("a",{href:'awesome'},"College Bronchure")
                ]),

                m("td",[
                  m("a",{href:'awesome'},"Our services and Products")
                ]),

              ]),

            ])
          ])
        ])
     ]),

     m.component(footer)
   ])

  }
}
