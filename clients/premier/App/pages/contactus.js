var navbar = require("../peices/navbar");
var forminput = require("../peices/forminput");

var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");

var contactus={
  getData:function(){
    return{
      name : m.prop(""),
      age : m.prop(""),
      email : m.prop(""),
      location : m.prop(""),
      phonenumber : m.prop(""),
      message : m.prop("")
    }
  },
  setData:function(data){
    // console.log("asked to save");
    // console.log(data);
  }
};



module.exports = {

  controller:function(){
    var self = this;
    this.data = contactus.getData();

    this.save = function(errs){
      contactus.setData(this.data);
      console.log(self.data.email());
    }.bind(this)
  },

  view:function(ctrl){
      var items = [
        {icon:"medium mdi-action-home",text:"P.O. BOX 3279 Kigali, Rwanda"},
        {icon:"medium mdi-communication-ring-volume",text:"+250 735 156 902"},
        {icon:"medium mdi-communication-stay-current-portrait",text:"+250 783 000 101"}
      ]
      // var entered_values = []
      return m(".app",[
         m.component(navbar),

         m(".row",[
           //collumn 1 , the sidebar
           m(".col l3 hide-on-med-and-down",[
             m.component(sidebar)
           ]),
           //the sider and everything else
           m(".col l9",[
             m("h3",{class:"center"},"Contact Us"),

            //  contact links
             m(".row center",[
               items.map(function(item){
                 return m(".col l4",[
                  //  item with logo and info
                   m(".col l3",[
                     m("i",{class:item.icon})
                   ]),
                  //  text
                   m(".col l9",[
                     m("p",{class:"flow-text"},item.text)
                   ])
                 ])
               })


             ]),

            //  send message form inputs

            m("form",{
              id:"form",
              class:"card-panel row",
              config:function(){
                // Extension materialize.css
                  $.validator.setDefaults({
                      errorClass: 'invalid',
                      validClass: "valid",
                      errorPlacement: function (error, element) {
                        // alert("form has an err, cant save")
                        // console.log(error[0].id);
                          $(element)
                              .closest("form")
                              .find("label[for='" + element.attr("id") + "']")
                              .attr('data-error', error.text());
                      },
                      submitHandler: function (form) {
                        // alert("form is ok saving")
                          console.log('form ok');
                          ctrl.save()
                      }
                  });

                  $("#form").validate({
                      rules: {
                          dateField: {
                              date: true
                          }
                      }
                  });
              },
            },[
              m("p",{class:"flow-text center"},"Leave us a Message"),

              //form inputs
              // single form input --can be extracted as a component

              // m("div",ctrl.data.name()),

              m(forminput,{
                value:ctrl.data.name,
                label:"Your Name",
                type:"text",
                sizes:"s12 m6 l6"
              }),

              m(forminput,{
                value:ctrl.data.email,
                label:"Your Email",
                type:"email",
                sizes:"s12 m6 l6"
              }),


              m(forminput,{
                value:ctrl.data.location,
                label:"Your Location",
                type:"text",
                sizes:"s12 m6 l6"
              }),

              m(forminput,{
                value:ctrl.data.phonenumber,
                label:"Your Phone Number",
                type:"text",
                sizes:"s12 m6 l6"
              }),
              // singe textarea at the end

              m(forminput,{
                value:ctrl.data.message,
                label:"Your message",
                type:"textarea",
                sizes:"s12 m6 l12"
              }),

              // submit button
              m(".row",[
                m(".input-field col s12",[
                  m("button",{
                    class:"btn blue waves-effect waves-light right",
                    type:"submit",
                    "bubles":false
                    // onclick:ctrl.save
                  },"Send",[
                    m("i",{class:'mdi-content-send right'})
                  ])
                ])
              ])


            ])

           ])

         ]),

         m.component(footer)
       ])

    }
}
