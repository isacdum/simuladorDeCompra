

function calc() {
   


    let p_price = document.querySelector('.ipt_price') //valor do produto
    let p_prepay = document.querySelector('.ipt_prepay') //entrada
    let sel_installments = document.querySelector('.sel_installments') //porcentagem
    let installments_count = sel_installments.options[sel_installments.selectedIndex]
    let installments_conv = installments_count.text
    let installments_int = parseInt(installments_conv) //qtd parcelas
    let p_fees = (p_price.value - p_prepay.value) * sel_installments.value / 100 //calculo acrescimo
    let p_liquid = (p_price.value - p_prepay.value) + p_fees
    //let p_final = p_liquid * installments_int
    let p_installments = p_liquid / installments_int
    let result_div = document.querySelector('.result')
    
    if (p_price.value == 0) {
        alert('Por favor insira o valor do produto!')
    }else {
        if  (sel_installments.value == "select") {
            alert('Por favor insira o numero de parcelas!')    
        }else {

            result_div.innerHTML = ` 
                                    <div class="item_result"><h3>Acréscimo</h3> <h2>R$${p_fees.toFixed(2).replace(".",",")}</h2></div>
                                    <div class="item_result"><h3>Você vai pagar um total de</h3> <h2>R$${p_liquid.toFixed(2).replace(".",",")}</h2></div>
                                    <div class="item_result"><h3>Parcelas</h3> <h2>${installments_int}X ${p_installments.toFixed(2).replace(".",",")}</h2></div>`
        }
    }
    
}