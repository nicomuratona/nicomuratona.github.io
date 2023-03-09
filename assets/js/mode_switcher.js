const switchButton = document.getElementById('switch');

const card = document.querySelectorAll('.card');
 
switchButton.addEventListener('click', () => {
	document.body.classList.toggle('light');

	card.forEach(c => {
		c.classList.toggle('text-bg-dark');
		c.classList.toggle('text-bg-light');
	});
	
	switchButton.classList.toggle('active');
});