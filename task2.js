let products=[
    {prod:'Pepsi',price:15},
    {prod:'Coke',price:18},
    {prod:'Maggi',price:10},
    {prod:'Nescafe',price:40},
    ];
    function showDetails(){
        showProductDetails();
    }
    function showProductDetails(){
    const proMap=products.map(function(pro){
        let str='<tr>';
        str+='<td class="col1">'+pro.prod+'</td>';
        str+='<td class="col1">'+pro.price+'</td>';
        str+='<td class="col1"><button class="btn" onclick=remove("'+pro.prod+'")>Remove</button></td>';
        str+='<td class="col1"><button class="btn1" onclick=edit("'+pro.prod+'")>Edit</button></td>';
        str+='</tr>';
        return str;
    });    
    let html='<h3 >List Of Product</h3>'
    html+='<table class="table1">'+proMap.join('')+'</table>';
    let ele=document.getElementById('ShowProduct');
    ele.innerHTML=html;
    // return html;
    }
    function remove(prod){
        console.log(prod);
        let index=products.findIndex(function(pro){
            return pro.prod==prod;
        });
        if(index>=0){
            products.splice(index,1);
        }
        showDetails();
        
    }

    function addProduct(){
       let st={};
       st.prod=document.getElementById('prod').value;
       st.price=document.getElementById('price').value;
       products.push(st);
       showDetails()
       let tex1=document.getElementById('prod');
       let tex2=document.getElementById('price');
       tex1.value="";
       tex2.value="";
    
    }

    function edit(prod){
        let st=products.find(function(st1){
            return st1.prod==prod;
        });
       let str='Name : <input type="text" id="prod" value=\''+st.prod+'\'><br>';
        str+='Quantity : <input type="text" id="price" value=\''+st.price+'\'><br>';
        str+='<button onclick="update()">Update</button>';
        let div=document.getElementById('addUpdate');
        div.innerHTML=str;
    }

    function update(){
        let prod=document.getElementById('prod').value;
        let st=products.find(function(st1){
            return st1.prod==prod;
        });
        st.price=document.getElementById('price').value;
        showDetails();
        let tex1=document.getElementById('prod');
        let tex2=document.getElementById('price');
        let str='Name : <input type="text" id="prod"><br>';
        str+='Quantity : <input type="text" id="price"><br>';
        str+='<button onclick="addProduct()" > Add Product</button>';
       let div=document.getElementById('addUpdate');
       div.innerHTML=str;

    }