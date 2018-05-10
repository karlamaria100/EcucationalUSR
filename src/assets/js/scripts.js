// Empty JS for your own code to be here

$('button.edit').on('click', function() {
  console.log("Merge");
  var myModal = $('#editModal');

  // now get the values from the table
  var nume = $(this).closest('tr').find('td.nume').html();
  var prenume = $(this).closest('tr').find('td.prenume').html();
//....

  // and set them in the modal:
  $('.nume', myModal).val(nume);
  $('.prenume', myModal).val(prenume);
//....

  // and finally show the modal
  myModal.modal({ show: true });

  return false;
});
