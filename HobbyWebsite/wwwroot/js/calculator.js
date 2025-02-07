$(document).ready(function () {
    console.log("Calculator script loaded!"); // Debugging log

    $("#calculate").click(function () {
        console.log("Calculate button clicked!"); // Debugging log

        var hours = $("#hours").val();
        var rate = $("#rate").val();

        console.log("Hours entered:", hours); // Debugging log
        console.log("Hourly rate:", rate); // Debugging log

        if (hours === "" || isNaN(hours) || Number(hours) <= 0) {
            alert("Please enter a valid positive number for hours.");
            $("#total").val("");
            return;
        }

        var total = Number(hours) * Number(rate);
        $("#total").val(total.toFixed(2));
    });
});
