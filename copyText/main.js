const copyToClipboard = (element) => {
    const $tempInput = $("<input>");

    $("body").append($tempInput);
    $tempInput.val($(element).text()).select();
    document.execCommand("copy");
    $tempInput.remove();

    tooltipFunction();
};

const tooltipFunction = () => {  
    const tooltip = document.getElementById("tooltip");

    tooltip.classList.add('active');
    setTimeout(() => {
       tooltip.classList.remove('active');
    }, 1500);
}

$('.input_copy .icon').click(function() {
    copyToClipboard('.input_copy .text');

    // With text marked.
    textField.addClass('input_copy_selected');
});

const textField = $('.input_copy .text');
const text = "Hello, Proyectos Beta!!!";

textField.text(text);