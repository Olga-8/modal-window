$(document).ready(function () {
    $(".promo__btn_dark").on("click", function () {
        $("div.modal").css({
            display: "block",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "999",
            position: "fixed",
        });

        $("div.modal__content").css({
            width: "50%",
            height: "50%",
            position: "absolute",
            zIndex: "99",
            top: "25%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            transform: "scale(1)",
            transition: "all 0.5s ease",
        });

        $("div.modal__close").css({
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "0",
            right: "0",
            cursor: "pointer",
        });

        $("h4.modal__title").css({
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
        });

        $("p.modal__text").css({
            fontSize: "1rem",
            textAlign: "center",
        });

        $("img.modal__img").css({
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "1px solid black",
        });

        $("div.modal__close").on("click", function () {
            $("div.modal").css({
                display: "none",
                transform: "scale(0)",
                transition: "all 0.5s ease",
            });
        });

        $("div.modal").on("click", function (event) {
            if (event.target === $("div.modal")) {
                $("div.modal").css({
                    display: "none",
                    transform: "scale(0)",
                    transition: "all 0.5s ease",
                });
            }
        });

        $("h4.modal__title").text("Lorem ipsum dolor sit amet.");
        $("p.modal__text").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.");
        $("img.modal__img").attr("src", "./img/1.jpg");
    });
});
