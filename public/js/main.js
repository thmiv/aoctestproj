/****** main layout javascript file *****/

$(document).ready(function () {
  //console.log("Ready");
  $("#submitBtn").on("click", function () {
    //console.log($("#inputtext").val());
    //dayOneAoc($("#inputtext").val());
    $(".answer-field").show();
    $("#day1answer").val(dayOneAoc($("#inputtext").val()));
  });
  /* Get the image and insert it inside the modal ---
   $('.img-link').on('click', function (event) {
      var $img = $(this).find('img'),
         src = $img.attr('src'),
         alt = $img.attr('alt');
      $('#imgModal').find('img').attr('src', src);
      $('#imgModal').find('img').attr('alt', alt);
   });

   $('#imgModal').on('shown.bs.modal', function (e) {
      var $img = $('#imgModal').find('img');
      var imgalt = $img.attr('alt');
      $('#imageModalLabel').text(imgalt);
      $img.css({ width: '100%' });
      $('.modal-title').css({
         'font-family': 'Orbitron'
      });
   });*/
});

function dayOneAoc(day1input) {
  var totals_array = [];
  var array_one = day1input.split("\n\n");
  //console.log(array_one.length);

  array_one.forEach(function (elf, index) {
    var cal_total = 0;
    var calories = elf.split("\n");
    calories.forEach(function (calitem) {
      cal_total += parseInt(calitem);
    });
    totals_array[index] = cal_total;
    //console.log(cal_total);
  });
  //console.log(totals_array);
  var elf_max = Math.max(...totals_array);
  //console.log(elf_max);
  return elf_max;
}
