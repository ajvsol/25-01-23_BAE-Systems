import { createContext, useContext, useState } from 'react';

export const StateContext = createContext();

// Context provider
export function StateContextProvider(children) {
	
	const [selectedAdvert, setSelectedAdvert] = useState('')

	// Note: because using array destructuring need to array destructure out EVERY value on pages it's imported on, otherwise the values will get mixed up due to index order
	return <StateContext.Provider value={{selectedAdvert, setSelectedAdvert}} >
		{children}
	</StateContext.Provider>
}

// Custom hook
export function useStateContext() {
	return useContext(StateContext)
}