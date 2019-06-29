var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
var list = ['cars','boats','planes'];
var pets = ['cats','dogs','birds'];


function addElementToBeginningOfArray(list,trains) {
  return ['trains', ...list];
}

function destructivelyAddElementToBeginningOfArray(pets,hamsters) {
  return pets.unshift('hamsters');
}

var names = ['Dan','Amber','Jelly'];
var jobs = ['baker','clerk','janitor'];

function addElementToEndOfArray(names,Isiah) {
  return [...names,'Isiah'];
}

function destructivelyAddElementToEndOfArray(jobs,foo) {
  return jobs.push('foo');
}

var sounds = ['vroom','skrrt'];

function accessElementInArray(sounds) {
  return sounds[1];
}