// filter for expense
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //리턴값에 항상 true를 전달하기 위해 어떤값을 입력받든 true가되는 식을만듬
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    //check sort function in MDN https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    }).sort((a, b) => {
        // 비교후 -1이면 a의 인덱스를 작은값으로 즉 a가 앞으로정렬 1이면 a인덱스를 큰값으로
        if(sortBy === 'date') {
            //최신 순으로 정렬
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount') {
            // amount가 높은 순으로 정렬
            return a.amount > b.amount ? -1: 1
        }
    });
}
