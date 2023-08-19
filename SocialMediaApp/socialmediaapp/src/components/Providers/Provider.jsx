import { createContext } from "react";
// this craeteContext is a method helps us to create a brand new context

const Postcontext = createContext([]);
 
//what this createContext actually helps us to do is it will actually holds the data which we want to share between the differnt components
// so it will helps to create a context object that will store some data and it can be shared everywhere

export default Postcontext;