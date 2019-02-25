{
    /**
     * @author Marcos Gallardo Pérez
     */

    let inputDom;

    function init() {
        let actions = "";
        $("#url").val("main.html");
        $("#mostar").click((e) => {
            e.preventDefault();
            $.ajax({
                method: "GET",
                url: $("#url").val(),
                beforeSend: () => {
                    $("#estado").html("<br>No inicializada")
                } ,
                complete: () => {
                    $("#estado").append("<br>Completada");
                   
                },
                success: (data) => {
                    $("#sugerencia").text(data);
                    $("#estado").append("<br>Éxito");
                },
                error: () => {$("#estado").append("<br>Fallo")
                $("#sugerencia").text("");
            }
            });
        });
    }
    $(init);

}