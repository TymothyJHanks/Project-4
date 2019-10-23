import React from 'react' //importing react

export const ScrapeContext = React.createContext(); //this allows us to put our data at a higher level to be able to be consumed by lower level components

export const ScrapeProvider = ScrapeContext.Provider; //putting the createContent into a variable/component to be able to pass data through as props to go to ourside component - data is being passed in our Page.js