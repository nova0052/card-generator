const template = document.getElementById("card-body").innerHTML;
const compiled = Handlebars.compile(template);

function generate(input){
    let cardlist = JSON.parse(input.value);
    let cards = [];
    
    cardlist.forEach(card => {
        if(card.hasOwnProperty("power")){
            switch(card.element){
                case "Earth":
                    card.dmgType = "https://drive.google.com/thumbnail?id=1Ip8QXdFC5_bOPkLH7UwfJNNNaxYyoKRv";
                    break;
                case "Fire":
                    card.dmgType = "https://drive.google.com/thumbnail?id=1qRXE1ONqJuW-ycDRTJbjMkWY6zcCo_D9";
                    break;
                case "Storm":
                    card.dmgType = "https://drive.google.com/thumbnail?id=1sfpJkxypdIXPznrhF_WqiyN9izWiLZXu";
                    break;
                case "Frost":
                    card.dmgType = "https://drive.google.com/thumbnail?id=1oYqTss4rrsac0JwC3cg5uNx_4NLbf_FU";
                    break;
                case "Light":
                    card.dmgType = "https://drive.google.com/thumbnail?id=1-NqL9vo-uS71tqw9ezLLD7urxTY10mIn";
                    break;
                case "Shadow":
                    card.dmgType = "https://drive.google.com/thumbnail?id=1wvTyAdn9LS9r4Bo52HiLqKUwbOwdckxM";
                    break;
                default:
                    card.dmgType = "https://drive.google.com/thumbnail?id=17KJ-dWeGEchhuB3MBuKy5i6AjgNyytos";
            };
        }
        if(card.hasOwnProperty("rarity")){
            switch(card.rarity){
                case "Common":
                    card.border = "black";
                    break;
                case "Uncommon":
                    card.border = "darkgrey";
                    break;
                case "Rare":
                    card.border = "goldenrod";
                    break;
                default:
                    card.border = "black";
            };
        }
        if(card.hasOwnProperty("count")){
            for(let y = 0; y < card.count; y++){
                cards.push(card);
            }
        }
        else{
            cards.push(card);
        }
    });
    let context = {
        cards : cards
    };
    console.log("cards", cards);
    document.getElementById("cards").innerHTML = compiled(context);
};

