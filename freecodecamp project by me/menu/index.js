const all = document.getElementById('all')
const breakfast = document.getElementById('breakfast')
const lunch = document.getElementById('lunch')
const snaks = document.getElementById('snakes')
const grid = document.querySelectorAll('.grid-box')

// grid.forEach((a)=>{console.log(a.children[1].children[1])})

breakfast.addEventListener('click',(event)=>{
	show()
	grid.forEach((a)=>{
		let num = a.children[1].children[1].innerText;
		num = num.toString();
		console.log(num)

		if(!num.includes('break')){
			a.style.display = 'none';
		}

	})

})


lunch.addEventListener('click',(event)=>{
	show()
	grid.forEach((a)=>{
		let num = a.children[1].children[1].innerText;
		num = num.toString();
		console.log(num)

		if(!num.includes('lunch')){
			a.style.display = 'none';
		}

	})

})
snaks.addEventListener('click',(event)=>{
	show()	
	grid.forEach((a)=>{
		let num = a.children[1].children[1].innerText;
		num = num.toString();
		console.log(num)

		if(!num.includes('snaks')){
			a.style.display = 'none';
		}

	})

})


all.addEventListener('click',(event)=>{
	grid.forEach((a)=>{
	
	a.style.display = 'flex';
	
	})

})



function show () {
	grid.forEach((a)=>{
	
	a.style.display = 'flex';
	
	})

}

































