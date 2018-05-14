(() => {

  const messageForm = $('#message-composition-form')
  let counter = 0

  messageForm.on('submit', messaging)


  function messaging(event) {
    event.preventDefault()

    let raw_message = messageForm.serializeArray()

    let messageContent = raw_message[0].value
    console.log(messageContent)

    let newMessage = generateOutgoingMessage(messageContent)
    $('.app-conversation-message-list').append(newMessage)
    $('#message-composition-box').val('')
    $('html, body').scrollTop($(document).height());

    setTimeout(postIncomingMessage, 3000)

  }




  function generateOutgoingMessage(content) {
    let messageContainer = $('<div>')
    messageContainer.addClass('message-container')
    messageContainer.addClass('message-outgoing')
  
    let senderContainer = $('<div>')
    senderContainer.addClass('message-sender')
  
    let senderFigure = $('<figure>')
    let senderPic = $('<img src="assets/images/violet.jpg">')
    senderPic.addClass('rounded-circle message-sender-thumbnail')
  
    senderFigure.append(senderPic)
    senderContainer.append(senderFigure)
    messageContainer.append(senderContainer)
  
    let messageContent = $('<div>')
  
    messageContent.text(content)
  
    messageContainer.append(messageContent)
    return messageContainer
  }
  
  function postIncomingMessage() {
    let messageContainer = $('<div>')
    messageContainer.addClass('message-container')
    messageContainer.addClass('message-incoming')
  
    let senderContainer = $('<div>')
    senderContainer.addClass('message-sender')
  
    let senderFigure = $('<figure>')
    let senderPic = $('<img src="assets/images/mikey.jpg">')
    senderPic.addClass('rounded-circle message-sender-thumbnail')
  
    senderFigure.append(senderPic)
    senderContainer.append(senderFigure)
    messageContainer.append(senderContainer)
  
    let messageContent = $('<div>')
  
    messageContent.text(responses[counter])
    counter++
  
    messageContainer.append(messageContent)
    $('.app-conversation-message-list').append(messageContainer)
  }

  const responses = [
    "Hi Violet!",
    "I am good how are you?",
    "Sorry but I have to go right now. I'll talk to you later!"
  ]
})()




