let produits = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function Container() {
    return (

    <div>
         <Form/>
         <Titres/>
         <Tableau/>
    </div>
      
    )
}

function Form () {

        return (

    <div className="flex_colum">
                <h1>Chez Dédé y'a tout s'ky Fo</h1>

            <div className="titre flex">
                <input type="text" placeholder="Filtres"/>
                <input type="checkbox"/>Uniquement en stock
            </div>

    </div>
        )
    }


function Titres () {

        return (

          <div className="subtitre flex">
              <p>Nom</p>
              <p>Prix</p>
          </div>

         
        )
    }


function Tableau() {
    let lesCategories= [...new Map(produits.map(item => [item["category"], item])).values()];

        return (
            
        <div >
              
              {lesCategories.map((elem, key) => <Categories key={key} nom={elem.category}/>)}
              
          </div>
          
        )
}


function Categories(props){
    let lesProduits= produits.filter(elem => elem.category == props.nom)

    return (
            
        <div className="table">

              <div className="subti flex"><p>{props.nom}</p><p></p></div>
              {lesProduits.map((elem, key) => <Article key={key} obj={elem}/>)}
              
          </div>
          
        )

}



function Article(props){
    let lesArticles= "flex "

    if (props.obj.stocked == false){
        lesArticles +="purple"
    }

    return (
        <div className={lesArticles}><p>{props.obj.name}</p> <p>{props.obj.price}</p></div>
    )
}
             
              
    

ReactDOM.render(<Container/>, document.getElementById("app"))

