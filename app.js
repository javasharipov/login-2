let user = JSON.parse(localStorage.getItem('user')) || []

const popUpEl = document.querySelector('.login__form')

function showPopUp() {
	popUpEl.style.display = 'block'
}

function closePopUp() {
	popUpEl.style.display = 'none'
}

document.querySelector('.login').addEventListener('submit', e => {
	e.preventDefault()

	const fnameEl = document.querySelector('.fname').value.trim()
	const lnameEl = document.querySelector('.lname').value.trim()
	const ageEl = document.querySelector('.age').value.trim()
	const eduEl = document.querySelector('.education').value.trim()
	const profEl = document.querySelector('.prof').value.trim()
	const gender = document.querySelector('.gender').value.trim().toLowerCase()

	const maleImage = 'https://cdn-icons-png.freepik.com/512/18/18148.png'
	const femaleImage =
		'https://cdn0.iconfinder.com/data/icons/woman-user-human-avatar-person-profile-business/100/02-1User_14-512.png'
	const genderImage = gender === 'male' ? maleImage : femaleImage

	const newUser = {
		fname: fnameEl,
		lname: lnameEl,
		profession: profEl,
		age: ageEl,
		education: eduEl,
		gender,
		image: genderImage,
	}

	user.push(newUser)
	localStorage.setItem('user', JSON.stringify(user))

	const cardEl = document.createElement('div')
	cardEl.classList.add('card')
	cardEl.innerHTML = `
      <img src="${genderImage}" alt="${gender}">
      <h3>${lnameEl} ${fnameEl}</h3>
      <span>${profEl}</span>
      <span>${ageEl} years old</span>
      <p>${eduEl}</p>
      <div class="social-icons">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa fa-globe"></i></a>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
      </div>
      <a href="#" class="contact-button">More about him/her</a>
    `

	document.querySelector('.card__wrapper').appendChild(cardEl)

	document.querySelector('.fname').value = ''
	document.querySelector('.lname').value = ''
	document.querySelector('.age').value = ''
	document.querySelector('.gender').value = ''
	document.querySelector('.education').value = ''
	document.querySelector('.prof').value = ''

	closePopUp()
})

function loadUsers() {
	user.forEach(user => {
		const cardEl = document.createElement('div')
		cardEl.classList.add('card')
		cardEl.innerHTML = `
          <img src="${user.image}" alt="${user.gender}">
          <h3>${user.lname} ${user.fname}</h3>
          <span>${user.profession}</span>
          <span>${user.age} years old</span>
          <p>${user.education}</p>
          <div class="social-icons">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa fa-globe"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
          </div>
          <a href="#" class="contact-button">More about him/her</a>
        `

		document.querySelector('.card__wrapper').appendChild(cardEl)
	})
}

if (user.length > 0) loadUsers()
