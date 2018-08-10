$( document ).ready(function() {

    $("#form").submit(function(e) {
      //  e.preventDefault();
        var formData = {}
        formData.email = $("#emailInput").val();
        formData.password = $("#passwordInput").val();
        console.log(formData)
        // $.post("/loginAuth",formData, (res) => {
        //     console.log(res);
        // });
    });
});
