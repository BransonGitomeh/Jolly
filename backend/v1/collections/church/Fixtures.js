module.exports = function(faker){
  var items = [],counter = 0;

  while(counter < 10){
    var item = {
      abbreviation:faker.hacker.abbreviation(),
      phrase:faker.company.catchPhrase()
    };
    counter++
    items.push(item)
  }

  return {
    model:"church",
    items:items
  }
}
