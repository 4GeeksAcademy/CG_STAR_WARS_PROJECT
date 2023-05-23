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
			characters: [],
			planets: [],
			vehicles: [],
			character: null,
			planet: null,
			vehicle: null,
		},
		actions: {
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
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then (response => response.json())
				.then ((response) => {
					setStore({characters:response.results})
				})
			},
			loadPlanets: () => {
				fetch ("https://www.swapi.tech/api/planets/")
				.then (response => response.json())
				.then ((response) => {
					setStore({planets: response.results})
				})
			},
			loadVehicles: () => {
				fetch ("https://www.swapi.tech/api/vehicles/")
				.then (response => response.json())
				.then ((response) => {
					console.log(response)
					setStore({vehicles: response.results})
				})
			},
			getCharacter: (uid) => {
				fetch("https://www.swapi.tech/api/people/"+uid)
				.then (response => response.json())
				.then ((response) => {
					console.log(response.result.properties);
					setStore({character: response.result.properties})
				})
			},
			getPlanet: (uid) => {
				fetch("https://www.swapi.tech/api/planets/"+uid)
				.then (response => response.json())
				.then ((response) => {
					console.log(response.result.properties);
					setStore({character: response.result.properties})
				})
			},
			getvehicle: (uid) => {
				fetch("https://www.swapi.tech/api/vehicles/"+uid)
				.then (response => response.json())
				.then((response) => {
					console.log(response.result.properties)
					setStore ({vehicle: response.result.properties})
				})
			},
		}
	};
};

export default getState;
