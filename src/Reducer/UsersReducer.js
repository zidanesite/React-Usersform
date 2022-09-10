let initialState = {
    users: [

        { name: "Zidane", email: "zidnaey@gmail.com", gen: "22", id: "sjhsjndcnd" },
        {
          name: "Zizou",
          email: "zidanwyy@gmail.com",
          gen: "22",
          id: "kjkdjskd",
        },
      ],
    };

    let UserReducer = ( state = initialState, action ) =>{
      switch(action.type){
          case "ADD_NEW_USER":
            return{...state, user: [...state.users, action.payload] };
          
            default:
                  return state;
      }
};

export default UserReducer;