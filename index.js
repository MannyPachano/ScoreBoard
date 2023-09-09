 let homeScoreText = document.getElementById("home-score")
 homeScoreText.innerText = 0
 
let guestScoreText = document.getElementById("guest-score")
 guestScoreText.innerText = 0
 
 let homeScore = 0
 let guestScore = 0
 
 function add1Home() {
    homeScore += 1
    homeScoreText.innerText = homeScore
 }
 
  function add2Home() {
    homeScore += 2
    homeScoreText.innerText = homeScore
 }
 
  function add3Home() {
    homeScore += 3
    homeScoreText.innerText = homeScore
 }
 
  function add1Guest() {
    guestScore += 1
    guestScoreText.innerText = guestScore
 }
 
  function add2Guest() {
    guestScore += 2
    guestScoreText.innerText = guestScore
 }
 
  function add3Guest() {
    guestScore += 3
    guestScoreText.innerText = guestScore
 }