$(document).ready( function () {
    $('#DataTable').DataTable({
        paging: false,
        //"dom": '<"controls"ipB>t<"controlsbottom"ipB>',   /* ie display info, pagination, buttons, table */
        //"dom": '<"row"<"col"i><"col right"<"activeToggle">Bp>>t<"row"<"col"i><"col right"Bp>>',
        "dom": 'fiti',
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ resources",
                      "infoFiltered":   "(filtered from _MAX_)" }
      });

} );
