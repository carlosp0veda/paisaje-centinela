import {ACTIONS} from './actions'

const initialState = {

    publicaciones: [],
    totalPages:1,
    currentPage: 1,
    pagination: {
    pageSize: 12,
  },
};


const nextPage = (state, action) => {
  return { ...state, currentPage: state.currentPage+1};
};

const prevPage = (state, action) => {
  return { ...state, currentPage: state.currentPage-1};
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.NEXT:
      return nextPage(state,action);
    case ACTIONS.PREV:
      return prevPage(state,action)
    default:
        state
  }
};

export default reducer;






