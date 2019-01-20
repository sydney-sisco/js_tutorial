let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(urlify(state));
  });
  return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => urlify(state));
}
console.log(functionalMap(states));