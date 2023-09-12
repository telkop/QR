
// To Generate QR Code

var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 200,
  height: 200
});

function makeCode() {
  var studentNum = $("#studentNum").val();
  var firstName = $("#fName").val();
  var lastName = $("#lName").val();
  var StudentID = $("#sID").val();
  var elText =
    "Student Number : " +
    studentNum +
    " First Name : " +
    firstName +
    " Last Name : " +
    lastName +
    " Student ID : " +
    StudentID;
  qrcode.makeCode(elText);
}

makeCode();

$("#btn-Generate")
  .on("click", function() {
    makeCode();
    $("#studentNumber").empty();
    $("#first").empty();
    $("#last").empty();
    $("#stuID").empty();
    var studentNum = $("#studentNum").val();
    $("#studentNumber").text("Student Number : " + studentNum);
    var firstName = $("#fName").val();
    $("#first").text("First Name : " + firstName);
    var lastName = $("#lName").val();
    $("#last").text("Last Name: " + lastName);
    var StudentID = $("#sID").val();
    $("#stuID").text("Student ID : " + StudentID);
  })
  .on("keydown", function(e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });

// End of Generate QR Code

// To Print the QRCode
$('#btn-print').on("click", function () {
      $(".qrprint").printThis({
        base: "qrprint"
      });
    });


$('input[name="num"]').keyup(function(e) {
  if (/\D/g.test(this.value)) {
    this.value = this.value.replace(/\D/g, "");
  }
});

$('input[name="idstudent"]').keyup(function(e) {
  if (/\D/g.test(this.value)) {
    this.value = this.value.replace(/\D/g, "");
  }
});

// End of Print QR Code

$(document).ready(function() {
  $(".generate-qr").click(function() {
    var sNum = $("#studentNum").val();
    var sFname = $("#fName").val();
    var sLname = $("#lName").val();
    var sIden = $("#sID").val();
    var toTable =
      '<tr><td id="number">' +
      sNum +
      "</td><td>" +
      sFname +
      "</td> <td>" +
      sLname +
      "</td> <td>" +
      sIden +
      '</td> <td><button type="submit" class="delete-row btn btn-danger">Delete</button></td></tr>';
    $("table tbody").append(toTable);
  });

  $(".delete-row").click(function() {
    $("table tbody")
      .find('<td id="number">')
      .each(function() {
        if ($(this).is(":checked")) {
          $(this)
            .parents("tr")
            .remove();
        }
      });
  });
});

$("td#number").each(function(i, v) {
  $(v).text(i + 1);
});

var increaseID = 0;
