const initial = {
  Fetching: false,
  Courts: ["محكمة التنفيذ", "المحكمة العامة", "المحكمة التجارية"],
  Lawsuits: [
    {
      ClientsName: "وائل",
      ClientsDescription: "مدعي",
      ClientsAddress: "الرياض",
      OpponentsName: "علي",
      OpponentsDescription: "مدعى عليه",
      OpponentsAddress: "الرياض",
      Subject: "دعوى مالية",
      Court: "المحكمة التجارية"
    },
    {
      ClientsName: "وائل",
      ClientsDescription: "مدعي",
      ClientsAddress: "الرياض",
      OpponentsName: "علي",
      OpponentsDescription: "مدعى عليه",
      OpponentsAddress: "الرياض",
      Subject: "دعوى مالية",
      Court: "المحكمة التجارية"
    },
    {
      ClientsName: "وائل",
      ClientsDescription: "مدعي",
      ClientsAddress: "الرياض",
      OpponentsName: "علي",
      OpponentsDescription: "مدعى عليه",
      OpponentsAddress: "الرياض",
      Subject: "دعوى مالية",
      Court: "المحكمة التجارية"
    },
    {
      ClientsName: "وائل",
      ClientsDescription: "مدعي",
      ClientsAddress: "الرياض",
      OpponentsName: "علي",
      OpponentsDescription: "مدعى عليه",
      OpponentsAddress: "الرياض",
      Subject: "دعوى مالية",
      Court: "المحكمة التجارية"
    },
  ],
  Clients:[{Cname:'',Caddress:'',Cphone:'',Cemail:''}]
};

export default (state = initial, action) => {
  switch (action.type) {
    //if the action is fetch data reducer change Fetching state to True help fire the spinner
    case "FETCHREST":
      return { ...state, Fetching: true };
    //if data is recieved reducer updates the restaurant data and change Fetching state to false to stop the spinner
    case "FOUNDREST":
      return { ...state, Fetching: false };
    //if error accured reducer updates restaurant state that include error object to be used properly
    case "ERROR":
      return { ...state, Fetching: false };
    //when action is calling reducer return the cuurrent state
    default:
      return { ...state };
  }
};
