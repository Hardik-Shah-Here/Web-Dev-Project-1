window.addEventListener("load",startup);
function startup()
{
	burger = document.querySelector('.burger');
	navbar = document.querySelector('.navbar');
	rightNav = document.querySelector('.rightnav');
	navlist = document.querySelector('.nav-list');
	burger.addEventListener("click", listshow);
		
	
}

function listshow(){
	rightNav.classList.toggle('v-class-resp');
	navlist.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
}
