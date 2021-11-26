let produits = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class Container extends React.Component {
    constructor(props){
        super(props)
        this.state = {texte:"",check:false,lesProduits:[...produits]}
        this.chgCheck=this.chgCheck.bind(this)
        this.chgTexte=this.chgTexte.bind(this)
    }
    chgTexte(event){
        this.setState({texte:event.target.value},()=>{
            this.setState({lesProduits:[...this.filtre()]})
        })
        
    }
    chgCheck(event){
        this.setState({check:event.target.checked},()=>{
            this.setState({lesProduits:[...this.filtre()]})
        })
        //console.log(this.filtre());
    }
    filtre() {
        return produits.filter(elem => {
            if(this.state.check==true){
                return elem.name.indexOf(this.state.texte)!=-1 && elem.stocked==true
            }
            else {
                return elem.name.indexOf(this.state.texte)!=-1
            }
        })
    }
    render() {
        return (
            <div className="conteneur">
                <Form etat={this.state} chgT={this.chgTexte} chgC={this.chgCheck}/>
                <Titres/>
                <Tableau prods={this.state.lesProduits}/>
            </div>
        )
    }
}
// function Container() {
//     return (

//     <div>
//          <Form etat={this.state} chgT={this.chgTexte} chgC={this.chgCheck}/>
//          <Titres/>
//          <Tableau prods={this.state.tabFiltre}/>
//     </div>
      
//     )
// }

function Form (props) {

        return (

    <div className="flex_colum">
                <h1>Chez Dédé y'a tout s'ky Fo</h1>

            <div className="titre flex">
                <input type="text" placeholder="Filtres" value={props.etat.texte} onChange={props.chgT}/>
                <input type="checkbox" checked={props.etat.check} onChange={props.chgC}/>Uniquement en stock
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


function Tableau(props) {
    let lesCategories= [...new Map(props.prods.map(item => [item["category"], item])).values()];

        return (
            
        <div >
              
              {lesCategories.map((elem, key) => <Categories key={key} nom={elem.category} prods={props.prods} />)}
              
          </div>
          
        )
}


function Categories(props){
    let lesProduits= props.prods.filter(elem => elem.category == props.nom)

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

