// Clicking an area button highlights that area's skills; clicking it again
// clears the filter.
document.querySelectorAll(".skill-list-section").forEach(function (section) {
    var buttons = section.querySelectorAll(".skill-filter__button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var area = button.getAttribute("data-area");
            var active = section.getAttribute("data-active") === area;

            if (active) {
                section.removeAttribute("data-active");
            } else {
                section.setAttribute("data-active", area);
            }

            buttons.forEach(function (other) {
                var pressed = !active && other === button;
                other.setAttribute("aria-pressed", pressed ? "true" : "false");
            });
        });
    });
});
