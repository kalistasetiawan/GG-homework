  $('#submit').click(function () {
    let title = $('#title').val();
    let desc = $('#desc').val();
    alert("Good job! The title you entered = "+title+" and the description = " +desc);
    $('#judul').append(title);
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
    });
  });
