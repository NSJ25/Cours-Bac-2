// Initialisation de la page 
function init() {
  console.log("Page chargée");
};

// Récupère l'élément par son ID
function getId(id){
    return document.getElementById(id); 
}

// Récupère l'élément via un selecteur css
function getSelector(selector){
    return document.querySelector(selector);
}

// Récupère les éléments pvia un selecteur css
function getSelectorAll(selector){
    return document.querySelectorAll(selector);
}

// Affiche la fenêtre de dialogue avec l'ID spécifié
function afficherPopup(id) {
    return document.getElementById(id).showModal();
}

// Ferme la fenêtre de dialogue avec l'ID spécifié
function fermerPopup(id) {
    return document.getElementById(id).close();
}
 let e = {en: "", fr: "", info:{role:"", grammarRole:"", structure:"", example:"", note:""}};

const mots = [
    { en: "who", fr: "qui",
        info: {
            role: "personne",
            grammarRole: "sujet",
            structure: "Who + verbe (ou Who + auxiliaire + sujet + verbe)",
            example: "Who is coming?",
            note: "Who est utilisé pour le sujet. Pour l’objet, on utilise plutôt whom."
        }
    },
    { en: "whom", fr: "qui",
        info: {
            role: "personne",
            grammarRole: "objet",
            structure: "Whom + auxiliaire + sujet + verbe",
            example: "Whom did you see?",
            note: "Forme formelle surtout à l’écrit ; souvent remplacé par who à l’oral."
        }
    },
    { en: "whose", fr: "à qui / de qui",
        info: {
            role: "possessif",
            grammarRole: "possession",
            structure: "Whose + nom",
            example: "Whose book is this?",
            note: "Indique la possession ; toujours suivi d’un nom."
        }
    },
    { en: "what", fr: "quoi / que",
        info: {
            role: "chose",
            grammarRole: "objet",
            structure: "What + auxiliaire + sujet + verbe",
            example: "What do you want?",
            note: "Utilisé pour les objets ou idées. Pour un choix limité, utilisez 'which'."
        }
    },
    { en: "which", fr: "lequel / laquelle",
        info: {
            role: "choix",
            grammarRole: "objet",
            structure: "Which + nom / Which + auxiliaire + sujet + verbe",
            example: "Which color do you like?",
            note: "Choix limité entre plusieurs options. Peut aussi être suivi directement d’un nom."
        }
    },
    { en: "when", fr: "quand",
        info: {
            role: "temps",
            grammarRole: "moment / date",
            structure: "When + auxiliaire + sujet + verbe",
            example: "When does he arrive?",
            note: "Indique le moment ou la date d’une action."
        }
    },
    { en: "where", fr: "où",
        info: {
            role: "lieu",
            grammarRole: "endroit",
            structure: "Where + auxiliaire + sujet + verbe",
            example: "Where do you live?",
            note: "Indique le lieu ou la position."
        }
    },
    { en: "why", fr: "pourquoi",
        info: {
            role: "cause",
            grammarRole: "raison / motif",
            structure: "Why + auxiliaire + sujet + verbe",
            example: "Why are you late?",
            note: "Demande la cause ou la raison d’une action."
        }
    },
    { en: "how", fr: "comment",
        info: {
            role: "manière",
            grammarRole: "méthode / façon",
            structure: "How + auxiliaire + sujet + verbe",
            example: "How do you make this?",
            note: "Peut être combiné avec adjectif ou adverbe : How fast?, How beautiful?"
        }
    }
];

function WHwords(){
      
    let tableau = `<thead>`;
        tableau += `<tr>`
        tableau += `<th> English words </th>`
        tableau += `<th> French words </th>`
        tableau += `<th> Infos </th>`
        tableau += `</tr>`
        tableau += `</thead>`
        tableau += `<tbody id="tbody">`;
        tableau += `</tbody>`;
    getId("table").innerHTML = tableau;
    
    let tbody = "";
    for (let index in mots){
        tbody += `<tr>`;
        tbody += `<td> ${mots[index].en} </td>`;
        tbody += `<td> ${mots[index].fr} </td>`;
        tbody += `<td> <button onclick="infosPlus(${index});"> Infos </button> </td>`;
        tbody += `</tr>`;
    }
    getId("tbody").innerHTML = tbody;
}

function infosPlus(index){
    afficherPopup('popup');
    let mot = mots[index];
    let msg =`
        <p> Role : ${mot.info.role} </p>
        <p> Role grammaticale : ${mot.info.grammarRole} </p>
        <p> Structure : ${mot.info.structure} </p>
        <p> Example : ${mot.info.example} </p>
        <p> Note : ${mot.info.note} </p>
        `;
    
    getId("message").innerHTML = msg;
    return msg;
}










































