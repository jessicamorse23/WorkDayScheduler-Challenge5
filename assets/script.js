// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// Use Moment for this
let showDay = moment().format("LLLL");
$("#currentDay").text(showDay);
console.log(showDay);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
let saveBtn = document.querySelectorAll("saveBtn");
let appointment = document.querySelectorAll("textarea").value;
// console.log(appointment);
// function saveEvent() {
  saveBtn.addEventListener(("click", (event) => {
    // event.preventDefault();
    if (event.target.matches(".saveBtn")){
        console.log(event.target.dataset.time);
        var timeSlot = event.target.dataset.time;
        console.log(event.target.parentElement.children[1].children[0].value);
        var dataInSlot = event.target.parentElement.children[1].children[0].value;
    }
    localStorage.setItem("timeSlot-" +timeSlot, dataInSlot);


// WHEN I refresh the page
// THEN the saved events persist