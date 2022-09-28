let estoque: string[] = []

console.log ("Os itens disponíveis no estoque são: ")
estoque.push ('Regata', 'Camisa', 'Short', 'Meia', 'Boné', 'Moletom', 'Calça');

for (let i of estoque){
    console.log (i)
}

estoque.splice(1, 1);
    console.log("A Camisa está fora de estoque. Entre em contato com o fornecedor para marcar a próxima entrega desse produto.")

estoque.splice (5, 5);
    console.log("A Calça está fora de estoque. Entre em contato com o fornecedor para marcar a próxima entrega desse produto.")


console.log ("Os itens que permanceram dispoíveis no estoque após o fim do dia: ")
console.log (estoque)