document.addEventListener('scroll', ()=>{
	if(window.scrollY > 70){
		let nav = document.querySelector('nav')
		nav.style.backdropFilter = 'blur(3px)'
	}
	else{
		let nav = document.querySelector('nav')
		nav.style.backdropFilter = 'blur(0px)'
	}
})

let left_arrow = document.getElementById("left-arrow")
let right_arrow = document.getElementById("right-arrow")

left_arrow.addEventListener("click", ()=>{
	let project_with = document.querySelector(".project").offsetWidth;
	let projects_element = document.querySelector(".projects-element")
	
	scrolldiv(projects_element, project_with, "left")
})

right_arrow.addEventListener("click", ()=>{
	let project_with = document.querySelector(".project").offsetWidth;
	let projects_element = document.querySelector(".projects-element")
	
	scrolldiv(projects_element, project_with, "right")
})

let form_answer = document.getElementById("send-form")

form_answer.addEventListener("click", send_mail)

const navbarelement = {
	home: document.querySelector('.navbar-home').addEventListener('click', ()=>scrolltoelement(document.getElementById('home'))),
	about: document.querySelector('.navbar-about').addEventListener('click', ()=>scrolltoelement(document.getElementById('about'))),
	skills: document.querySelector('.navbar-skills').addEventListener('click', ()=>scrolltoelement(document.getElementById('skills'))),
	projects: document.querySelector('.navbar-projects').addEventListener('click', ()=>scrolltoelement(document.getElementById('projects'))),
	contact: document.querySelector('.navbar-contact').addEventListener('click', ()=>scrolltoelement(document.getElementById('contact'))),
}


function scrolltoelement(element){
	window.scrollTo({
		top: element.offsetTop,
		left: 0,
		behavior: 'smooth'
	})
}

function scrolldiv(element, step, direction){
	
	if(direction === "right"){
		let position = element.scrollLeft
		element.scrollTo({
			left: position += step,
			behavior: 'smooth'
		})	
	}
	else if(direction === "left"){
		let position = element.scrollLeft  
		element.scrollTo({
			left: position -= step,
			behavior: 'smooth'
		})	
	}
	else{
		console.log("Direction is not defined")
	}
	
}

function send_mail(){

	let contact = {
		name: 'ola me chamo ' + document.getElementById('contact-name').value,
		about: 'gostaria de conversar sobre ' + document.getElementById('contact-about').value,
		message: document.getElementById('contact-message').value
	} 

	console.log(contact);

	window.open(`mailto:elianrodrigues3@gmail.com?subject=${contact.about}&body=${contact.message}`)
}