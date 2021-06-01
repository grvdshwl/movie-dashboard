import {createSelector} from "reselect";

const selectDisplay = (state) => state.display;


export const selectSearchValue = createSelector([selectDisplay],
    (display)=> display.searchValue);


export const selectMoviesArray = createSelector([selectDisplay],
    (display)=> display.moviesArray);


    