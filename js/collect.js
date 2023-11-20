var tabs = document.querySelectorAll(".tabs_wrap ul li");
var north = document.querySelectorAll(".north");
var south = document.querySelectorAll(".south");
var east = document.querySelectorAll(".east");
var west = document.querySelectorAll(".west");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "north"){
			north.forEach((north)=>{
				north.style.display = "block";
			})
		}
		else if(tabval == "south"){
			south.forEach((south)=>{
				south.style.display = "block";
			})
		}
    else if(tabval == "east"){
			east.forEach((east)=>{
				east.style.display = "block";
			})
		}
    else if(tabval == "west"){
			west.forEach((west)=>{
				west.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}
	})
})