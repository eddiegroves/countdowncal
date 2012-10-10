to = moment('5 July 2012');
from = moment('16 April 2012');

(function() {
  $('h1 span').text(to.fromNow());

  var content = [];

  var date = moment(from);

  while (date < to) {
    displayMonth(date);
  }

  $('#cal').append(content.join(''));

  function displayMonth(date) {
      var month = date.month();
      content.push(formatMonth(date));
      content.push('<div class="month">');
      content.push(previousMonthsDays(date));

      while (month == date.month() && date < to) {
        content.push(day({
          num: to.diff(date, 'days'),
          day: date.date()
        }));

        date.add({days: 1});
      }


      if (date >= to) content.push('<div class="special day">' + date.date() + '</div>')
      content.push('</div>');
  }

  function day(countdown) {
    return '<div class="day"><span>' + countdown.num + '</span>' + countdown.day + '</div>';
  }

  function formatMonth(date) {
    return '<h2>' + date.format('MMMM') + '</h2>';
  }

  function previousMonthsDays(date) {
    var dayOfTheWeek = date.day(); // get date of the week from date
    var spaces = dayOfTheWeek - 1; // assuming first day of the week is sunday
    if (spaces === -1) spaces = 6;
    var spaceContent = []; 
    for (var i = 0; i < spaces; i += 1) {
      spaceContent.push('<div class="space"></div>');
    }

    return spaceContent.join('');
  }

})();
