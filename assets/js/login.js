$(window).on('load', () => {
  const loginModal = $('#login-modal')
  loginModal.hide()


  $(".login-button").on('click', () => {
    loginModal.show()
    $('.login-button-container').hide()
  })


  $("#login-form").on('submit', event => {
    event.preventDefault()
    let credentials = $('#login-form').serializeArray()

    if (credentials[0].value === VIOLET.username && credentials[1].value === VIOLET.password) {

      document.getElementById('login-link').click()
    } else {
      alert('Incorrect login information.')
    }
  })

  sessionStorage.removeItem('app_data')

  let app_data = {
    loggedIn: false,
    userData: {},
    messagedMikey: false,
  }
  
  function resetStorage() {

  }


})