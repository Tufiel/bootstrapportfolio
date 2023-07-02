

document.body.addEventListener('contextmenu', e => e.preventDefault() & e.stopPropagation());
document.body.addEventListener('mousedown', onMouseDown);
document.body.addEventListener('touchstart', e => onMouseDown(e.touches[0]));
document.body.addEventListener('mouseup', onMouseUp);
document.body.addEventListener('touchend', e => onMouseUp(e.touches[0]));
document.body.addEventListener('mousemove', onMouseMove);
document.body.addEventListener('touchmove', e => onMouseMove(e.touches[0]));

let showing, anchorX, anchorY, min = 100;
const wheel = document.querySelector('.wheel');
const me = document.querySelector("#navpic");
const pages = document.querySelectorAll(".pages");

function onMouseDown({ clientX: x, clientY: y }) {
	showing = true;
	anchorX = x;
	anchorY = y;

	wheel.style.setProperty('--x', `${x}px`);
	wheel.style.setProperty('--y', `${y}px`);
	wheel.classList.add('on');
	navpic.style.display = "block";
}

function onMouseUp() {
	showing = false;
	wheel.setAttribute('data-chosen', 0);
	wheel.classList.remove('on');
	navpic.style.display = "none";
}

function onMouseMove({ clientX: x, clientY: y }) {
	if (!showing) return;

	let dx = x - anchorX;
	let dy = y - anchorY;
	let mag = Math.sqrt(dx * dx + dy * dy);
	let index = 0;

	if (mag >= min) {
		let deg = Math.atan2(dy, dx) + 0.625 * Math.PI;
		while (deg < 0) deg += Math.PI * 2;
		index = Math.floor(deg / Math.PI * 4) + 1;
	}

	wheel.setAttribute('data-chosen', index);
}

// FUNCTIONS
function hideAll()
{
	for(let i=0;i<pages.length;i++)
	pages[i].style.display = "none";
}

function home()
{
	hideAll();
	document.querySelector("#homepage").style.display = "block";
}

function skills()
{
	hideAll();
	document.querySelector("#skillspage").style.display = "block";
}

function resume()
{
	hideAll();
	document.querySelector("#resumepage").style.display = "block";
}

function contact()
{
	hideAll();
	document.querySelector("#contactpage").style.display = "block";
}

function about()
{
	hideAll();
	document.querySelector("#aboutpage").style.display = "block";
}

function services()
{
	hideAll();
	document.querySelector("#servicespage").style.display = "block";
}

function testimonials()
{
	hideAll();
	document.querySelector("#testimonialspage").style.display = "block";
}

function hobbies()
{
	hideAll();
	document.querySelector("#hobbiespage").style.display = "block";
}

writeSentence(" Programmar", "typing");
const cond1=true,cond2=false,con3=false;
function writeSentence(sentence, elementId) {
	const element = document.getElementById(elementId);
	let index = 0;
	const speed=350;
    element.style.color ="Yellow";

	element.innerHTML="";
	function typeCharacter() {
	  if (index < sentence.length) {
		element.innerHTML += sentence.charAt(index);
		index++;
		setTimeout(typeCharacter,speed); // Adjust the delay between characters here (in milliseconds)
	  }
	  else
	  {

		switch(sentence)
		{
			case " Programmar":
				writeSentence(" Designer", "typing");
				break;
			case " Designer":
				writeSentence(" Developer", "typing");
				break;
            case " Developer":
				writeSentence(" Freelancer","typing");
				break;
			case " Freelancer":
				setTimeout(()=>writeSentence(" Programmar", "typing"), 2000);
					
					break;

		}
	  }
	}
  
	typeCharacter();
  }

  setTimeout(()=>changeBackground(), 15000);
let num = 0;
  function changeBackground()
  {
	let wheel = document.querySelector("#wheel");
	  let heading = document.querySelector("#videoheading");
	  heading.style.color = getRandomColor();
	  if(num<3)
		num++;
		else
		num = 0;
	  let ele = document.querySelector("#backgroundvideo");
	  ele.src = "./video"+num+ ".mp4";
	  
		num==1?wheel.style.color = "yellow":wheel.style.color = "black";


	// alert(ele.src);
	  setTimeout(()=>changeBackground(), 10000);

  }

  function getRandomColor() {
	 // Generate random values for red, green, and blue (0-255)
	 var red = Math.floor(Math.random() * 256);
	 var green = Math.floor(Math.random() * 256);
	 var blue = Math.floor(Math.random() * 256);

	 // Create an RGB color string
	 var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

	 return color;
  }

  setTimeout(()=>{
	document.getElementById("howtouse").style.display="none";
  },5000);


  function hide(element) {
    element.classList.add('hidden');
  }

  function getGreeting() {
	var currentTime = new Date();
	var currentHour = currentTime.getHours();
    
	if (currentHour < 12) {
	  return "Good morning";
	} else if (currentHour < 18) {
	  return "Good afternoon";
	} else if (currentHour < 24) {
	  return "Good evening";
	} else {
	  return "Good night";
	}
  }

  document.querySelector("#greeting").innerHTML = getGreeting();
  
    /**
   * Easy selector helper function
   */
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
		  return [...document.querySelectorAll(el)]
		} else {
		  return document.querySelector(el)
		}
	  }

  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

   

  


