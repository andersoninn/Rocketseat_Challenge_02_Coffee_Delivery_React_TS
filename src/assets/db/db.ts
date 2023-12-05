
export default function db (){

const dbJson = [
        
            {
                "id": 1, 
                "img": "Expresso-Tradicional.png", 
                "type": ["TRADICIONAL"],
                "name": "Expresso Tradicional",
                "description": "O tradicional café feito com água quente e grãos moídos", 
                "value": 9.90
            },        
            {
                "id": 2, 
                "img": "Expresso-Americano.png", 
                "type": ["TRADICIONAL"],
                "name": "Expresso Americano",
                "description": "Expresso diluído, menos intenso que o tradicional",
                "value": 9.90
            },
            {
                "id": 3, 
                "img": "Expresso-Cremoso.png", 
                "type": ["TRADICIONAL"],
                "name": "Expresso Cremoso",
                "description": "Café expresso tradicional com espuma cremosa",
                "value": 9.90
            },
            {
                "id": 4, 
                "img": "Expresso-Gelado.png", 
                "type": ["TRADICIONAL","GELADO" ],
                "name": "Expresso Cremoso",
                "description": "Café expresso tradicional com espuma cremosa",
                "value": 9.90
            },
            {
                "id": 5, 
                "img": "Cafe-com-leite.png", 
                "type": ["TRADICIONAL","COM LEITE" ],
                "name": "Café com Leite",
                "description": "Meio a meio de expresso tradicional com leite vaporizado",
                "value": 9.90
            },
            {
                "id": 6, 
                "img": "Latte.png", 
                "type": ["TRADICIONAL","COM LEITE" ],
                "name": "Latte",
                "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
                "value": 9.90
            },
            {
                "id": 7, 
                "img": "Capuccino.png", 
                "type": ["TRADICIONAL","COM LEITE" ],
                "name": "Capuccino",
                "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
                "value": 9.90
            },
            {
                "id": 8, 
                "img": "Macchiato.png", 
                "type": ["TRADICIONAL","COM LEITE" ],
                "name": "Macchiato",
                "description": "Café expresso misturado com um pouco de leite quente e espuma",
                "value": 9.90
            },
            {
                "id": 9, 
                "img": "Mocaccino.png", 
                "type": ["TRADICIONAL","COM LEITE" ],
                "name": "Mocaccino",
                "description": "Café expresso com calda de chocolate, pouco leite e espuma",
                "value": 9.90
            },
            {
                "id": 10, 
                "img": "Chocolate-Quente.png", 
                "type": ["ESPECIAL","COM LEITE" ],
                "name": "Chocolate Quente",
                "description": "Bebida feita com chocolate dissolvido no leite quente e café",
                "value": 9.90
            },
            {
                "id": 11, 
                "img": "Cubano.png", 
                "type": ["ESPECIAL","ALCOÓLICO", "GELADO" ],
                "name": "Cubano",
                "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
                "value": 9.90
            },
            {
                "id": 12, 
                "img": "Havaiano.png", 
                "type": ["ESPECIAL"],
                "name": "Havaiano",
                "description": "Bebida adocicada preparada com café e leite de coco",
                "value": 9.90
            }, 
            {
                "id": 13, 
                "img": "Arabe.png", 
                "type": ["ESPECIAL"],
                "name": "Árabe",
                "description": "Bebida preparada com grãos de café árabe e especiarias",
                "value": 9.90
            },
            {
                "id": 14, 
                "img": "Irlandes.png", 
                "type": ["ESPECIAL", "ALCOÓLICO"],
                "name": "Irlandês",
                "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
                "value": 9.90
            }

        ];

    return dbJson;
}