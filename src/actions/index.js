export const handleChange = e => { 
        
  return {
     type: "HANDLE_CHANGE",
     value: e.target.value,
     name: e.target.name,
    };
}