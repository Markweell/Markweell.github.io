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
                beforeSend: () => $("#estado").html("No inicializada") ,
                complete: () => {
                    $("#estado").html("Completada");
                    $("#showState").html(actions);
                },
                success: (data) => {
                    $("#sugerencia").text(data);
                    $("#estado").html("Éxito");
                },
                error: () => $("#estado").html("Fallo")
            });
        });
    }
    $(init);

}