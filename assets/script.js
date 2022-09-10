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


// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
let saveBtns = document.querySelectorAll(".saveBtn");

let appointment = document.querySelector("textarea").value;
// console.log(appointment);
// function saveEvent() {
  saveBtns.forEach((eachSaveBtn)=>{

    eachSaveBtn.addEventListener("click", (event) => {

      const parentRow = event.currentTarget.closest('tr') //get the parent tr of the button (event.currentTarget)
      const text = parentRow.querySelector('textarea').value
      const _timeSlot = parentRow.querySelector('.time-block').textContent.trim()

      localStorage.setItem(_timeSlot, text);

      alert(`Success: timeSlot: ${_timeSlot} text: ${localStorage.getItem(_timeSlot)}`)

    })
  }
  )





// WHEN I refresh the page
// THEN the saved events persist