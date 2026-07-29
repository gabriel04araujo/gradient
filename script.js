// Busca de elementos do html
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const range = document.getElementById("range");
const angle = document.getElementById("angle");
const preview = document.getElementById("preview");
const cssDisplay = document.getElementById("css-display");
const btn = document.getElementById("btn");
const inputs = document.querySelectorAll(".edit");

// funções: 
function getValues() {
    // tem como objetivo receber os valores que o usuario escolhe e salvar
    let values = {
        color1 : color1.value,
        color2 : color2.value,
        angle : range.value
    };

    return values;
};

function generateGradient(col1, col2, angle) {
    let property = `linear-gradient(${angle}deg,${col1},${col2})`;
    return property;
    // gera a string do gradient selecionado
};

function updateGradient() {
    // atualiza o preview, fundo, angulo em texto, e linha de CSS para copiar
    let values = getValues();
    let gradient = generateGradient(values.color1, values.color2, values.angle);

    document.getElementById('preview').style.background = gradient;
    document.getElementById('back').style.background = gradient;
    document.getElementById('angle').textContent = `${values.angle}°`;
    document.getElementById('css-display').textContent = gradient;
};

function copyText() {
    // copia o texto para colar no CSS
    let text = cssDisplay.textContent;
    let copied = navigator.clipboard.writeText(text);
    alert("Texto copiado!");
    return copied;
};

// funcionalidades:
// percorre a lista de inputs e atualiza conforme o usuario faz alterações
inputs.forEach(function(input) {
    input.addEventListener("input", updateGradient);
});

// chama a função ao clicar no botão
btn.addEventListener("click", copyText);
