(() => {
  const loginModal = $('#login-modal')
  loginModal.hide()


  $(".login-button").on('click', () => {
    loginModal.show()
  })

  $("#login-form").on('submit', event => {
    event.preventDefault()
    let credentials = $('#login-form').serializeArray()
    console.log(credentials)
    
    if (credentials[0].value === VIOLET.username && credentials[1].value === VIOLET.password) {
      // alert('Login Successful!')

      document.getElementById('login-link').click()
      // $('#login-link').trigger('click')
      console.log($("#login-link"))
    } else {
      alert('Incorrect login information.')
    }
  })



  const VIOLET = {
    story:   
    `My name is Violet, and I am six years old. For the past few months I have been having severe stomach aches, and eventually found out I had a tumor as big as my fist, near my kidney. I was diagnosis with Stage 4 neuroblastoma. All over my body was exposed to the cancer. I was quickly admitted into Lady Cilento Hospital, Brisbane. I lost my ability to walk, and quickly went through heavy chemo. I had a surgery to remove most of the tumor, and am currently goring through radiation.`,
    name: 'Violet',
    username: 'violet',
    password: 'password',
  }
  
})()  


