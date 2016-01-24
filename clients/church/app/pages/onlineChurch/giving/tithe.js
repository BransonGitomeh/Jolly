var footer = require("../../../peices/footer")
var topbar = require("../../../peices/topbar")
var infocard = require("../../../peices/infocard")


var queryMeta = {}

function root(tokens) {
    queryMeta.type = tokens[0].split(":")[0].split("(")[0];

    // check if its a single value or a range being asked by the query
    if(tokens[0].split(":")[0].split("(")[1] === "range"){
      queryMeta.rangeStart=tokens[0].split(":")[1].split(")")[0].split("-")[0];
      queryMeta.rangeEnd=tokens[0].split(":")[1].split(")")[0].split("-")[1];
    }else{
      queryMeta.param = tokens[0].split(":")[0].split("(")[1];
      queryMeta.paramValue = tokens[0].split(":")[1].split(")")[0];
    }

    queryMeta.fields = fields(tokens, {index:2})

    return queryMeta;
}

function fields(tokens, state) {
    var res = []
    console.log(tokens)
    console.log(state)
    //look for relation
    //look for other route thats not a while loop

    while (tokens[state.index] !== '}') {
            var index = state.index++
            if (tokens[state.index + 1] === '{') {
                console.log("relation detected")
                res.push(relation(tokens, state))
            } else {
                res.push({
                  type: 'field',
                  value: tokens[index],
                  params:tokens[index]
                })
            }
    }
        state.index++
        return res
}

function relation(tokens, state) {
    return {
        type:'relation',
        name: tokens[(state.index++)],
        fields: (state.index++ && fields(tokens, state))
    }
}

var re = /\{|\}|[^{}\s]+/g

function tokenize(query) {
    var res = [], match
    while (match = re.exec(query)) res.push(match[0])
    return res
}

var queryString = `user(name:branson){
                            name
                            age
                            avatar(size:50px,shape:roundedEdges)
                            students{
                              name
                              payments{
                                ammount
                              }
                            }
                  }`


var MultiqueryString = `student(range:20-30) {
                            name
                            age
                            students{
                              name
                              payments{
                                ammount
                              }
                            }
                        }`


// var splitable =  "  The quick brown fox jumps over the lazy dog. "




module.exports = {
        view:function(){


            return [
                // console.log(tokenize(queryString)),
                console.log(root(tokenize(queryString))),
                // console.log(queryString.match(/\S+/g)),
                // console.log("i am parrrrsring"),
                m(topbar),
                // m(hero),
                m(".row center card-panel",[

                  m(".col s12 l12",[
                    m(".col s12 l12",[
                      m("h3","tithe")
                    ])
                  ])
                ]),
                m(footer)

            ]
        }
      }
