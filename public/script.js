$('.btn').click(()=>{

  if( $('#trueUrl').val() !== ''){

    $.post('/', { trueUrl: $('#trueUrl').val() }, response =>{

      $('.shortenUrl').text( 'http://localhost:8081/r/' + response )

      console.log($('#trueUrl').val())

    })
  }  
})