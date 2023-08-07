const dadoPmt = document.getElementById("pmt");
const dadoJuros = document.getElementById("juros");
const dadoMeses = document.getElementById("meses");
const botaoCalcular = document.getElementById("calcular");
const resultados = document.getElementById("resultados");

const calculaJuros = (pmt, juros, meses) => {
	let montante = pmt;
	juros = juros / 100;
	meses--;
	while (meses > 0) {
		montante += pmt + montante * juros;
		meses--;
	}
	return Math.round(montante * 100) / 100;
};

const geraResultado = (pmt, juros, meses) => {
	resultados.style.opacity = 0;
	const resultado = `Resultado: O montante da aplicação de ${pmt} mensais ao longo de ${meses} meses, a juros de ${juros}% ao mês, é de ${calculaJuros(
		pmt,
		juros,
		meses
	)} R$.`;
	setTimeout(() => {
		resultados.innerHTML = resultado;
		resultados.style.opacity = 1;
	}, 1000);
};

botaoCalcular.addEventListener("click", () => {
	geraResultado(
		Number(dadoPmt.value),
		Number(dadoJuros.value),
		Number(dadoMeses.value)
	);
	dadoPmt.value = "";
	dadoJuros.value = "";
	dadoMeses.value = "";
});
