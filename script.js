// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
const nam = document.getElementById("nom")
const price = document.getElementById("prix")
const btn = document.getElementById("submit-btn")
const useless = document.getElementById("etat-vide")
const placement = document.getElementById("liste-produits")

function addtocart() {
  let temp = {
  id : prochainId++,
  nom : nam.value,
  prix : price.value,
  }
  produits.push(temp)
  console.log(produits)

  addtopanel()
  nam.value=""
  price.value=""
}

function addtopanel() {
  placement.textContent = ""
  for (let i = 0; i < produits.length; i++) {
    const li = document.createElement("li")
    const div = document.createElement("div")
    const strong = document.createElement("strong")
    const span = document.createElement("span")
    const delbtn = document.createElement("button")

    strong.textContent = produits[i].nom
    strong.setAttribute("class", "nom-produit")

    span.textContent = produits[i].prix
    span.setAttribute("class", "prix-produit")

    li.setAttribute("class", "produit")

    delbtn.textContent = "retirer"
    delbtn.setAttribute("class", "supprimer")
    delbtn.setAttribute("onclick",`retreat("${(produits[i].id)}")`)

    div.append(strong)
    div.append(span)
    li.append(div)
    li.append(delbtn)
    placement.append(li)
  }
  console.log(produits)
}

btn.addEventListener("click",(e) =>{
  e.preventDefault()
  if (nam.value=="" || price.value=="") {
    window.alert("please fill the required field");
        return;
  }
  addtocart()
})

function retreat(a){
  for (let i = 0; i <= produits.length-1; i++) {
    if(produits[i].id==a){
      produits.splice(i,1)
      addtopanel()
    }
    
  }
}