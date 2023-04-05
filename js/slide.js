var intervalo = 5000;

function slide1(){
	document.getElementById('banner').src="./img/slide/fundoti.png";
	setTimeout("slide2()", intervalo)
}
 
function slide2(){
	document.getElementById('banner').src="https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg";
	setTimeout("slide3()", intervalo)
}
 
function slide3(){
	document.getElementById('banner').src="https://ita24horas.com.br/blog/wp-content/uploads/2017/05/90226-descubra-a-importancia-do-uso-da-tecnologia-para-seguranca-da-empresa-entregar-em-1705.jpg";
	setTimeout("slide1()", intervalo)
}