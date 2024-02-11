const nav = document.querySelector('nav ul');
const navBtns = document.querySelectorAll('.btn');
const icons = document.querySelectorAll('.icon');

const createTooltip = (e) => {
	const tooltipParent = e.target;
	const tooltipText = e.target.dataset.tooltip;
	const newTooltip = document.createElement('span');
	newTooltip.className = 'tooltip';
	newTooltip.innerHTML = tooltipText;
	tooltipParent.appendChild(newTooltip);
};

const removeTooltip = (e) => {
	const tooltip = e.target.querySelector('.tooltip');
	if (tooltip) {
		tooltip.remove();
	}
};

icons.forEach((icon) => icon.addEventListener('mouseenter', createTooltip));
icons.forEach((icon) => icon.addEventListener('mouseleave', removeTooltip));

navBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		navBtns[0].classList.toggle('hide');
		navBtns[1].classList.toggle('active');
		nav.classList.toggle('show');
		document.body.classList.toggle('overflow');
	});
});

const liItems = document.querySelectorAll('nav ul li');

liItems.forEach((li) => {
	li.addEventListener('click', () => {
		nav.classList.remove('show');
		navBtns[0].classList.remove('hide');
		navBtns[1].classList.remove('active');
		document.body.classList.remove('overflow');

		const sectionId = li.getAttribute('data-section-id');
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	});
});
