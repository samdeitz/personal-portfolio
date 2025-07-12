import { createContext, useContext } from 'react';

// context in a separate file ensures that HMR will be updated correctly
// and not recreate context
export const AppContext = createContext(undefined);
export const useApp = () => useContext(AppContext);
