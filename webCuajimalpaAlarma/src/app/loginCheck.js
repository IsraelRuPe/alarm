const loggedOutLinks = document.querySelectorAll(".logged_out");
const loggedInLinks = document.querySelectorAll(".logged_in");

console.log(loggedOutLinks);
console.log(loggedInLinks);

export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "inline"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "inline"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  }
};
