const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			characters2:[],
			characters3:[],
			characters4:[],
			favs:[]
		},
		actions: {
			
			    getCharacterGryffindor: () => {
					const store = getStore();
					fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
					.then(response => response.json())
					.then(result => {setStore({characters:[...result]}),console.log(result)})
					.catch(error => console.log('error', error));
				},
			    getCharacterSlytherin: () => {
					const store = getStore();
					fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
					.then(response => response.json())
					.then(result => {setStore({characters2:[...result]}),console.log(result)})
					.catch(error => console.log('error', error));
				},
				getCharacterHufflepuff: () => {
					const store = getStore();
					fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
					.then(response => response.json())
					.then(result => {setStore({characters3:[...result]}),console.log(result)})
					.catch(error => console.log('error', error));
				},
				getCharacterRavenclaw: () => {
					const store = getStore();
					fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
					.then(response => response.json())
					.then(result => {setStore({characters4:[...result]}),console.log(result)})
					.catch(error => console.log('error', error));
				},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: function(name) {
				const store = getStore();
				if(!(store.favs.includes(name))){
					setStore(store.favs.push(name))
					
				}
				
			},
			deleteFavorites: function(name){
				const store = getStore();
				setStore({favs: store.favs.filter((value)=>{return(value != name)})})
				
			}

		}
	};
};

export default getState;
