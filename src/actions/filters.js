
// setTextFilter
export const setTextFilter = (text ='')  => ({
    type: 'SET_TEXT_FILTER',
    text
});

// sortByAmount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// sortByDate 
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// startDate
export const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
})

// EndDate
export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
})