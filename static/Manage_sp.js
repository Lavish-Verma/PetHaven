document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".approve-btn").forEach(button => {
        button.addEventListener("click", function () {
            let url = this.getAttribute("data-url");
            let card = this.closest(".card");

            fetch(url, { method: "POST" })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        card.remove(); // ✅ Remove the card from UI
                    } else {
                        alert("Error: " + data.message);
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    });

    document.querySelectorAll(".reject-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let url = this.getAttribute("data-url");

            fetch(url, { method: "POST" })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        window.location.href = "/admin_dashboard"; // ✅ Redirect after rejection
                    } else {
                        alert("Error: " + data.message);
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    });
});
