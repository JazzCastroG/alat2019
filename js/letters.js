$(function () { // carta invitacion
  var date = new Date(),
      op = { year: 'numeric', month: 'long', day: 'numeric' },
      fecha = date.toLocaleDateString('es-MX', op),
      name = '',
      wait = '<i class="text-pink fa fa-spinner fa-pulse fa-2x"></i>',
      ok = '<i class="text-purple fa fa-check fa-2x"></i>';

  $('#getLetter input').keyup(function () {
      input = $(this).val()

      if (input.length >= 5) {
          $('#getLetter button[type=button]').attr('disabled', false)
          $('#getLetter button[type=button] i').addClass('activeBtn')
          name = input
      } else {
          $('#getLetter button[type=button]').attr('disabled', true)
          $('#getLetter button[type=button] i').removeClass('activeBtn')
      }
  })

  $('#getLetter button[type=button]').click(function () {
      $('#getLetter button[type=button]').html(wait)

      var doc = new jsPDF()

      doc.setFont('helvetica')
      doc.setFontType('normal')
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(15)
      doc.addImage(imageData, 'JPEG', 0, 0, 218, 280)
      doc.text(132, 57, fecha)
      doc.text(68, 77, name)
      doc.save('invitacion.pdf')


      setTimeout(function () {
          name = ''

          $('#getLetter input').val('')

          $('#getLetter button[type=button]').html(ok)
          $('#getLetter button[type=button] i').removeClass('activeBtn')
          $('#getLetter button[type=button]').attr('disabled', true)
      }, 2000)
  })
})
$(function () { // carta trabajos libres
  var date = new Date(),
      op = { year: 'numeric', month: 'long', day: 'numeric' },
      fecha = date.toLocaleDateString('es-MX', op),
      name = '',
      work = '',
      wait = '<i class="text-pink fa fa-spinner fa-pulse fa-2x"></i>',
      ok = '<i class="text-purple fa fa-check fa-2x"></i>',
      nameI = $('#nameAbstracts'),
      workI = $('#workAbstracts');

  nameI.keyup(function () {
      var nameInput = $(this).val()

      if (nameInput.length >= 5 && workI.val().length >= 5) {
          $('#getLetterAbstracts button[type=button]').attr('disabled', false)
          $('#getLetterAbstracts button[type=button] i').addClass('activeBtn')
          name = nameInput
      } else {
          $('#getLetterAbstracts button[type=button]').attr('disabled', true)
          $('#getLetterAbstracts button[type=button] i').removeClass('activeBtn')
      }
  });

  workI.keyup(function () {
    var workInput = $(this).val()
    
    if (workInput.length >= 5 && nameI.val().length >= 5) {
        $('#getLetterAbstracts button[type=button]').attr('disabled', false)
        $('#getLetterAbstracts button[type=button] i').addClass('activeBtn')
        work = workInput
    } else {
        $('#getLetterAbstracts button[type=button]').attr('disabled', true)
        $('#getLetterAbstracts button[type=button] i').removeClass('activeBtn')
    }
});

  $('#getLetterAbstracts button[type=button]').click(function () {
      $('#getLetterAbstracts button[type=button]').html(wait)

      var doc = new jsPDF()

      doc.setFont('helvetica')
      doc.setFontType('normal')
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(15)
      doc.addImage(imageDataTrabajosLibres, 'JPEG', 0, 0, 218, 280)
      doc.text(132, 57, fecha)
      doc.text(68, 77, name)
      doc.text(73, 77, work)
      doc.save('invitacion-trabajos-cientificos.pdf')


      setTimeout(function () {
          name = ''

          $('#getLetterAbstracts input').val('')

          $('#getLetterAbstracts button[type=button]').html(ok)
          $('#getLetterAbstracts button[type=button] i').removeClass('activeBtn')
          $('#getLetterAbstracts button[type=button]').attr('disabled', true)
      }, 2000)
  })
})
$(function () {
  window.onload
  {
      with (document.getElementsByTagName("head")[0].appendChild(document.createElement("script"))) {
          setAttribute("id", "getLetter", 0);
          setAttribute("type", "text/javascript", 0);
          setAttribute("src", "js/bg.js", 0);
          setAttribute("async", "true", 0);
      }

      with (document.getElementsByTagName("head")[0].appendChild(document.createElement("script"))) {
        setAttribute("type", "text/javascript", 0);
        setAttribute("src", "js/bg-trabajos-libres.js", 0);
        setAttribute("async", "true", 0);
    }
  }
})