function append_to_display(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clear_display() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculate_result() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
        setTimeout(clear_display, 1500); 
    }
}
