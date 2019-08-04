(function ($) {
  'use strict';
  $(function () {

    //basic config

    if ($("#js-grid-mis-cursos").length) {
      $("#js-grid-mis-cursos").jsGrid({
        width: "100%",
        height: "650px",

        // filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,

        pageSize: 15,
        pageButtonCount: 5,
        // deleteConfirm: "Do you really want to delete the client?",
        data: db.alumnos,
        fields: [{
          name: "Nombre",
          type: "hide",
          width: 150
        },
        {
          name: "PC1",
          type: "number",
          width: 50
        },
        {
          name: "PC2",
          type: "number",
          width: 50
        },
        {
          name: "PC3",
          type: "number",
          width: 50
        },
        {
          name: "PC4",
          type: "number",
          width: 50
        },
        {
          type: "control", deleteButton: false
        }
        ]
      });
    }

  //   jsGrid.validators.time = {
  //     message: "Please enter a valid time, between 00:00 and 23:59",
  //     validator: function(value, item) {
  //         return /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(value);
  //     }
  // }

    if ($("#js-grid-horarios").length) {
      $("#js-grid-horarios").jsGrid({
        width: "100%",
        height: "440px",

        // filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,

        pageSize: 15,
        pageButtonCount: 5,
        // deleteConfirm: "Do you really want to delete the client?",
        data: db.dias,
        fields: [{
          name: "DIA",
          type: "hide",
          width: 60
        },
        {
          name: "Hora Inicio",
          type: "text",
          width: 60
        },
        {
          name: "Hora Fin",
          type: "text",
          width: 60
        },
        {
          name: "Activo",
          title: "Activo",
          width:30,
          itemTemplate: function (value, item) {
            return $("<div>")
              .addClass("form-check mt-0")
              .append(
                $("<label>").addClass("form-check-label")
                  .append(
                    $("<input>").attr("type", "checkbox")
                      .addClass("form-check-input")
                      .attr("checked", value || item.Checked)
                      .on("change", function () {
                        item.Checked = $(this).is(":checked");
                      })
                  )
                  .append('<i class="input-helper"></i>')
              );
          }
        },
        {
          type: "control", deleteButton: false
        }
        ]
      });
    }

    // $(".config-panel input[type=checkbox]").on("click", function () {
    //   var $cb = $(this);
    //   $("#js-grid-mis-cursos").jsGrid("option", $cb.attr("id"), $cb.is(":checked"));
    // });

    //basic config
    if ($("#js-grid").length) {
      $("#js-grid").jsGrid({
        height: "500px",
        width: "100%",

        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,

        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        data: db.clients,
        fields: [{
          name: "Name",
          type: "text",
          width: 150
        },
        {
          name: "Age",
          type: "number",
          width: 50
        },
        {
          name: "Address",
          type: "text",
          width: 200
        },
        {
          name: "Country",
          type: "select",
          items: db.countries,
          valueField: "Id",
          textField: "Name"
        },
        {
          name: "Married",
          title: "Is Married",
          itemTemplate: function (value, item) {
            return $("<div>")
              .addClass("form-check mt-0")
              .append(
                $("<label>").addClass("form-check-label")
                  .append(
                    $("<input>").attr("type", "checkbox")
                      .addClass("form-check-input")
                      .attr("checked", value || item.Checked)
                      .on("change", function () {
                        item.Checked = $(this).is(":checked");
                      })
                  )
                  .append('<i class="input-helper"></i>')
              );
          }
        },
        {
          type: "control"
        }
        ]
      });
    }


    //Static
    if ($("#js-grid-static").length) {
      $("#js-grid-static").jsGrid({
        height: "500px",
        width: "100%",

        sorting: true,
        paging: true,

        data: db.clients,

        fields: [{
          name: "Name",
          type: "text",
          width: 150
        },
        {
          name: "Age",
          type: "number",
          width: 50
        },
        {
          name: "Address",
          type: "text",
          width: 200
        },
        {
          name: "Country",
          type: "select",
          items: db.countries,
          valueField: "Id",
          textField: "Name"
        },
        {
          name: "Married",
          title: "Is Married",
          itemTemplate: function (value, item) {
            return $("<div>")
              .addClass("form-check mt-0")
              .append(
                $("<label>").addClass("form-check-label")
                  .append(
                    $("<input>").attr("type", "checkbox")
                      .addClass("form-check-input")
                      .attr("checked", value || item.Checked)
                      .on("change", function () {
                        item.Checked = $(this).is(":checked");
                      })
                  )
                  .append('<i class="input-helper"></i>')
              );
          }
        }
        ]
      });
    }

    //sortable
    if ($("#js-grid-sortable").length) {
      $("#js-grid-sortable").jsGrid({
        height: "500px",
        width: "100%",

        autoload: true,
        selecting: false,

        controller: db,

        fields: [{
          name: "Name",
          type: "text",
          width: 150
        },
        {
          name: "Age",
          type: "number",
          width: 50
        },
        {
          name: "Address",
          type: "text",
          width: 200
        },
        {
          name: "Country",
          type: "select",
          items: db.countries,
          valueField: "Id",
          textField: "Name"
        },
        {
          name: "Married",
          title: "Is Married",
          itemTemplate: function (value, item) {
            return $("<div>")
              .addClass("form-check mt-0")
              .append(
                $("<label>").addClass("form-check-label")
                  .append(
                    $("<input>").attr("type", "checkbox")
                      .addClass("form-check-input")
                      .attr("checked", value || item.Checked)
                      .on("change", function () {
                        item.Checked = $(this).is(":checked");
                      })
                  )
                  .append('<i class="input-helper"></i>')
              );
          }
        }
        ]
      });
    }

    if ($("#sort").length) {
      $("#sort").on("click", function () {
        var field = $("#sortingField").val();
        $("#js-grid-sortable").jsGrid("sort", field);
      });
    }

  });
})(jQuery);