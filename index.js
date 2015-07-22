$.ajax({
  type: 'POST',
  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  data: {
    
  }
}).done(function(response) {
  console.log(response);
});
