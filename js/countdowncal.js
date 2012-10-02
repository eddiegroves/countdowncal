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

})();
