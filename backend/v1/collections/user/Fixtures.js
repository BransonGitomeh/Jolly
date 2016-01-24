module.exports = function(faker){
  var items = [],counter = 0;

  while(counter < 10){
    var item = {
      email:faker.internet.email(),
      name:faker.internet.userName()
    };
    counter++
    items.push(item)
  }

  return {
    model:"user",
    items:items
  }
}
