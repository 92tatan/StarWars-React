import { useEffect } from "react";

export const ListToSearch =(linklist)=>{
    const list = [];
    
    useEffect(() => {
      const searchEach = async () => {
        const list2 = await linklist;
        const long = await list2.length;
        console.log(list2);
        for(let i=0; i< long ;i++){
          const response = await fetch(list2[i]);
          const data = await response.json();
          list.push(data);  
        }
    };
        searchEach(); 
    },  []);
    console.log(list);
    return (list);
};