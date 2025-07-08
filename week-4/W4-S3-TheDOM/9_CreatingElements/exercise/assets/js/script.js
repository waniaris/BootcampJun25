// TODO: Add 2 new items to the sidebar called "Register" and "Help".
var sideBarEl = document.querySelector(".sidebar ul");

// create first new list element
var newliEl = document.createElement("li");
newliEl.className = "newsidebar";
newliEl.textContent = "Register";

// create second new list element
var newliE2 = document.createElement("li");
newliE2.className = "newsidebar";
newliE2.textContent = "Help";

// append the new list to the main content
sideBarEl.appendChild(newliEl);
sideBarEl.appendChild(newliE2);




// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?
