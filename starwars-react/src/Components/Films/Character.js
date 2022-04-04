import { useEffect,useState } from "react";

export const ListCharacters =(filmSearch)=>{
    const list = [];
    
    useEffect(() => {
      const searchEach = async () => {
        const list2 = await filmSearch;
        const long = await list2.length;
        console.log(list2);
        for(let i=0; i< long ;i++){
          const response = await fetch(list2[i]);
          const data = await response.json();
          list.push(data.name);  
        }
    };
          searchEach(); 
    },  []);
    
    console.log(list);
    
  return (list);
    };

