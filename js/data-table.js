(function ($) {
   'use strict';
   $(function () {
      $('#list-teacher').DataTable({
         "aLengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
         ],
         "iDisplayLength": 5,
         "columnDefs": [{
            className: 'control',
            orderable: false,
            targets: -1
         }],
         "language": {
            // search: ""
            "url": "../js/json/lang.json",
         }
      });

      $('#list-student').DataTable({
         "aLengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
         ],
         "iDisplayLength": 5,
         "columnDefs": [{
            className: 'control',
            orderable: false,
            targets: -1
         }],
         "language": {
            // search: ""
            "url": "../js/json/lang.json",
         }
      });

      $('#list-matriculas').DataTable({
         "aLengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
         ],
         "iDisplayLength": 5,
         "columnDefs": [{
            className: 'control',
            orderable: false,
            targets: -1
         }],
         "language": {
            // search: ""
            "url": "../js/json/lang.json",
         }
      });
      
      $('#list-student-cursos').DataTable({
         "aLengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
         ],
         "iDisplayLength": 5,
         // "columnDefs": [{
         //    className: 'control',
         //    orderable: false,
         //    targets: -1
         // }],
         "language": {
            // search: ""
            "url": "../js/json/lang.json",
         }
      });




      /*$('#order-listing').each(function () {
        var datatable = $(this);
        // SEARCH - Add the placeholder for Search and Turn this into in-line form control
        var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
        search_input.attr('placeholder', 'Search');
        search_input.removeClass('form-control-sm');
        // LENGTH - Inline-Form control
        var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
        length_sel.removeClass('form-control-sm');
      });*/
   });
})(jQuery);