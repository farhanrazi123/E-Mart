const cart = [];

const handleCart =(state = cart, Action) =>{
    const product = Action.payload;
    switch (Action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if(exist){
                return state.map((x)=>x.id === product.id ? {...x, qry: x.qty +1} : x );

            }else{
                const product = Action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

            case "DELITEM":
                const exist1 = state.find((x) => x.id === product.id);
                if(exist1.qty === 1){
                    return state.filter((x)=>x.id !== exist1.id);
    
                }else{
                    return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;

                default:
                    break;
}}