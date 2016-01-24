module.exports = {
  view:function(ctrl,args){
    return m(".card hoverable",[
      m("a",{
        href:args.cardLink,
        config:m.route
      },[
          m(".card-image waves-effect waves-block waves-light",[
            m("img",{
              class:"activator",
              src:args.url
            })
          ]),

          m(".card-content",[
            m("span",{class:"card-title activator grey-text text-darken-4"},args.text)
          ])
      ]),



    ])
  }
}
