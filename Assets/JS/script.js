//  Menu

const openSideMenu = () =>{
	document.querySelector("#side-menu").style.width = "250px";
	document.querySelector("#main").style.marginLeft = "250px";
};

const closeSideMenu = () =>{
	document.querySelector("#side-menu").style.width = "0";
	document.querySelector("#main").style.marginLeft = "0";
};

