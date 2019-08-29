let mission = 350000,
	income = '150000',
	money = +prompt('Ваш ежемесячный доход?', 100000),
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.', 'Еда, еда и еще раз еда))'),
	deposit = confirm('Есть ли у вас депозит в банке?');


const showTypeOf = function (data) {
	console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);

let costs = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
	howMuchCost = +prompt('Во сколько это обойдется?', 3500),
	costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
	howMuchCost2 = +prompt('Во сколько это обойдется?', 2000),
	budgetMonth = money - howMuchCost - howMuchCost2;


let budgetDay = Math.floor(budgetMonth / 30);

let getStatusIncome = function (){
	if (budgetDay >= 800){
		return('Высокий уровень дохода');
	}else if ((budgetDay >= 300) && (budgetDay < 800)){
	 return('Средний уровень дохода');
	}else if ((budgetDay >= 0) && (budgetDay < 300)){
	 return('Низкий уровень дохода');
	}else {
	 return('Что то пошло не так');
	}
   };
   	console.log(getStatusIncome());


	let getExpensesMonth = function() {
		return howMuchCost + howMuchCost2;
	};
		console.log(getExpensesMonth());
	let getAccumulatedMonth = function () {
		return money - getExpensesMonth();
	};
		console.log(getAccumulatedMonth());
	let getTargetMonth = function(){
		return mission / getAccumulatedMonth();
	};
		console.log(Math.floor(getTargetMonth()));