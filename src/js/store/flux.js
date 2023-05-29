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
			favorites: [],
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
					setStore({planet: response.result.properties})
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
			setFavoritesCharacters: (character) => {
				const store = getStore()
				const favoriteCharacterAlreadyExist = store.favorites.includes(character)
				if (!favoriteCharacterAlreadyExist) {
					setStore({favorites: [...store.favorites, character]})
				}
			},
			setFavoritesPlanets: (planet) => {
				const store = getStore()
				const favoritePlanetAlreadyExist = store.favorites.includes(planet)
				if (!favoritePlanetAlreadyExist){
					setStore({favorites: [...store.favorites, planet]})
				}
			},
			setFavoritesVehicles: (vehicle) => {
				const store = getStore();
				const favoriteVehicleAlreadyExist = store.favorites.includes(vehicle)
				if (!favoriteVehicleAlreadyExist) {
					setStore({favorites: [...store.favorites, vehicle]})
				}
			},
			deleteFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites];
				updatedFavorites.splice(index, 1);
				setStore({ favorites: updatedFavorites });
			  }
		}
	};
};

export default getState;
