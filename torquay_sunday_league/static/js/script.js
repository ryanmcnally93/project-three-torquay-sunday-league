document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  });