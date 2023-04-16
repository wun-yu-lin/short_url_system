$('.btn').click(()=>{

  if( $('#trueUrl').val() !== ''){

    $.post('/', { trueUrl: $('#trueUrl').val() }, response =>{

      $('.shortenUrl').text( 'https://shortenurl-383915.wm.r.appspot.com/r/' + response )

      console.log($('#trueUrl').val())

    })
  }  
})