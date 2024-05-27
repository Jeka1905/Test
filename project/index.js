function scrollToTableContainer() {
  var matchesBlock = document.getElementById("table-container");
  if (matchesBlock) {
    matchesBlock.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function scrollToTeams() {
  var matchesBlock = document.getElementById("teams");
  if (matchesBlock) {
    matchesBlock.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


function scrollToLeaguetable() {
  var matchesBlock = document.getElementById("Leaguetable");
  if (matchesBlock) {
    matchesBlock.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("scroll-left").addEventListener("click", function() {
      var matchesContainer = document.getElementById("matches-container");
      matchesContainer.scrollLeft -= 100; // Измените это значение по вашему усмотрению
  });

  document.getElementById("scroll-right").addEventListener("click", function() {
      var matchesContainer = document.getElementById("matches-container");
      matchesContainer.scrollLeft += 100; // Измените это значение по вашему усмотрению
  });
});


function changeLeague() {
  var selectedLeague = document.getElementById("league-selector").value;
  var tables = document.querySelectorAll('.league-table-content');
  tables.forEach(function(table) {
      table.style.display = 'none';
  });
  document.getElementById(selectedLeague + '-table').style.display = 'table';
}
document.getElementById("ukraine-table").style.display = 'table';