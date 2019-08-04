$(document).ready(function () {
    $('#cambiarContraseña').modal('toggle')

    $('#seeUser').click(function () {
        console.log("muestra");

        var myModal = $('#mostrarUsuario');
        myModal.modal('show');

    });
});

$('#list-users').on('click', '.btn', function () {
    var myModal = $('#mostrarUsuario');
    myModal.modal('show');
    let nombre = $(this).parent().parent().find('#nombres');
    let rol = $(this).parent().parent().find('#rol');
    let estado = $(this).parent().parent().find('#estado');
    let dni = $(this).parent().parent().find('#dni');

    myModal.find('#nombres').text(nombre.text());
    myModal.find('#rol').text(rol.text());
    myModal.find('#estado').html('<label class="badge badge-' + ((estado.text() == "Habilitado") ? "success" : "danger") + '">' + estado.text() + '</label>');
    // myModal.find('#estado').text(estado.text());
    myModal.find('#dni').text(dni.text());



})


$('#list-student-mis-cursos').on('click', 'a', function () {
    var myModal = $('#verCurso');
    myModal.modal('show');

    let a = $(this);
    let rol = $(this).parent().parent().find('#rol');
    let estado = $(this).parent().parent().find('#estado');

    myModal.find('#nombre').text(a.text());
    myModal.find('#estado').html('<label class="badge badge-' + ((estado.text() == "Habilitado") ? "success" : "danger") + '">' + estado.text() + '</label>');
    // myModal.find('#estado').text(estado.text());




})


$('.btn.eliminar').on('click', function () {
    if (confirm("Confirma la desactivacion?")) {
        var myModal = $('#mostrarUsuario');
        if (myModal != undefined) {
            myModal.modal('hide');
        }
    }


})

//$('#mostrarUsuario').modal('toggle')



// (function($) {
//     'use strict';
//     $('#mostrarUsuario').on('show.bs.modal', function(event) {
//       var button = $(event.relatedTarget) // Button that triggered the modal
//       var recipient = button.data('whatever') // Extract info from data-* attributes
//       // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//       // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//       var modal = $(this)
//       modal.find('.modal-title').text('New message to ' + recipient)
//       modal.find('.modal-body input').val(recipient)
//     })
//   })(jQuery);