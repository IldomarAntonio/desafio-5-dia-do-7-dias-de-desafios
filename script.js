let shoppingList = {
    'Frutas': [],
    'Laticínios': [],
    'Congelados': [],
    'Doces': []
};

let step = 0;
let currentFood = '';
const categories = ['Frutas', 'Laticínios', 'Congelados', 'Doces'];

function handleResponse() {
    const response = document.getElementById('response').value.trim().toLowerCase();
    const questionElement = document.getElementById('question');
    const responseElement = document.getElementById('response');
    
    responseElement.value = '';
    
    if (step === 0) {
        if (response === 'sim') {
            questionElement.textContent = 'Qual comida você deseja inserir?';
            step++;
        } else if (response === 'não' || response === 'nao') {
            displayList();
        } else {
            alert('Por favor, responda com "sim" ou "não".');
        }
    } else if (step === 1) {
        currentFood = response;
        questionElement.textContent = 'Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces)';
        step++;
    } else if (step === 2) {
        if (categories.includes(response.charAt(0).toUpperCase() + response.slice(1))) {
            shoppingList[response.charAt(0).toUpperCase() + response.slice(1)].push(currentFood);
            questionElement.textContent = 'Você deseja adicionar uma comida na sua lista de compras? (sim/não)';
            step = 0;
        } else {
            alert('Por favor, escolha uma categoria válida: Frutas, Laticínios, Congelados, Doces.');
        }
    }
}

function displayList() {
    document.getElementById('input-section').style.display = 'none';
    const listSection = document.getElementById('list-section');
    const shoppingListDiv = document.getElementById('shopping-list');

    for (const category in shoppingList) {
        const items = shoppingList[category];
        if (items.length > 0) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<strong>${category}:</strong> ${items.join(', ')}`;
            shoppingListDiv.appendChild(categoryDiv);
        }
    }

    listSection.style.display = 'block';
}
