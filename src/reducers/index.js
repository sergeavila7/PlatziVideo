const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: state.myList.some((items) => items.id === action.payload.id)
          ? [...state.myList]
          : [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          [...state.trends, ...state.originals].find(
            (item) => item.id === Number(action.payload)
          ) || [],
      };
    case 'SEARCH_VIDEO':
      const videos = [...state.trends, ...state.originals];

      if (action.payload === '') {
        return {
          ...state,
          searchVideo: [],
        };
      }

      return {
        ...state,
        searchVideo: videos.filter((item) =>
          item.title.toLowerCase().includes(action.payload)
        ),
      };
    default:
      return state;
  }
};

export default reducer;
