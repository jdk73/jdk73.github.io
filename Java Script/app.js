$(document).ready(function(){

  var btn = $('button#suma');
  btn.click(function() {

            var n1 = $('input#num1').val();
            var n2 = $('input#num2').val();
            var sum = (n1-0) + (n2-0);
            $('input#wynik').val(sum);

  });
  var btn = $('button#odejmowanie');
  btn.click(function() {

            var n1 = $('input#num1').val();
            var n2 = $('input#num2').val();
            var sum = (n1-0) - (n2-0);
            $('input#wynik').val(sum);

  });
  var btn = $('button#iloraz');
  btn.click(function() {

            var n1 = $('input#num1').val();
            var n2 = $('input#num2').val();
            var sum = (n1-0) / (n2-0);
            $('input#wynik').val(sum);

  });
  var btn = $('button#iloczyn');
  btn.click(function() {

            var n1 = $('input#num1').val();
            var n2 = $('input#num2').val();
            var sum = (n1-0) * (n2-0);
            $('input#wynik').val(sum);

  });
});
