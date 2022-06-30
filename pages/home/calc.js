function daysMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}


function dateDiff(date1, date2) {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
	y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
    if (d1 < d2) {
        m1--;
        d1 += daysMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}

function calage(){
	const date = new Date;

	const calDay = 21;
	const calMon = 11;
	const calYear = 2020;
	
	const cald = new Date(calYear,calMon-1,calDay);

	let result = dateDiff(date,cald);
	let string = "";
	
	if((date.getDate()==calDay)&&(date.getMonth()==calMon)){
		string = "Parabéns: Feliz Aniversário de "+result[0]+" anos";
	}else{
		string =  result[0] ? result[0] + (result[0] == 1 ? " ano, " : " anos ") : " e ";
		string += result[1] ? result[1] + (result[1] == 1 ? " mes e " : " meses e ") : " e ";
		string += result[2] ? result[2] + (result[2] == 1 ? " dia " : " dias ") : "";
	}

	document.getElementById("vai").innerHTML = string;
}
