module.exports = {
  view: function(args){
    // return ("div","footer")
    return m("footer",{class:"page-footer blue"},[
      m("div",{class:"footer-copyright container"},"Copyright © 2015. Premier ECDE Teachers College. P.O. BOX 3279 Kigali, Rwanda",[
        m("span",{class:"right"},"<App-Version: 0.2.2/>")
      ])
    ])
  }
}
