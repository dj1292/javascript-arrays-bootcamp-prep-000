var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
var list = ['cars','boats','planes'];
var pets = ['cats','dogs','birds'];


function addElementToBeginningOfArray(list,foo) {
  return ['foo', ...list];
}

function destructivelyAddElementToBeginningOfArray(pets,foo) {
  return pets.unshift('foo');
}

var names = ['Dan','Amber','Jelly'];
var jobs = ['baker','clerk','janitor'];

function addElementToEndOfArray(names,foo) {
  return [...names,'foo'];
}

function destructivelyAddElementToEndOfArray(jobs,foo) {
  return jobs.push('foo');
}

var sounds = ['vroom','skrrt'];

function accessElementInArray(sounds,i) {
  return sounds[i];
}

function 