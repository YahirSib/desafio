			   //[       0,         1,       2,        3,        4,        5,        6,        7,        8,         9,        10]
			   var order =  [       0,         0,       0,        0,        0,        0,        0,        0,        0,         0,         0] 
			   var orderP = ["Sala 1", "Sala 2", "Sala 3", "Sala 4", "Sala 5", "Sala 6", "Sala 7", "Sala 8", "Sala 9", "Sala 10", "Sala 11"]
			   var orderV = [     225,      450,      100,      100,      225,      450,      100,      100,      225,       450,       100]
			   var orderC = [       0,         0,       0,        0,        0,        0,        0,        0,        0,         0,         0]  
			   function Buy(p, c){
		   
				   document.getElementById("ordenFinal").innerHTML = ""
				   for (var i = 0; i < 11; i++) {
					   if(p==orderP[i]){
						   orderC[i] += c;
						   orderC.splice(i, 1, orderC[i])
						   orderP.splice(i, 1, orderP[i])
						   order.splice(i, 1, orderV[i]*orderC[i])
						   break
					   }
				   }
				   rec = 0;
				   for (var j = 0; j <= 11; j++) {
					   
					   if (orderC[j] != 0) {
						   switch(orderP[j]){
							   case "Sala 1":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(0, 1)'>+</button><button  class='mP2' onclick='ModP(0, 2)'>-</button></td><td><button class='mP3' onclick='ModP(0, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 2":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(1, 1)'>+</button><button  class='mP2' onclick='ModP(1, 2)'>-</button></td><td><button class='mP3' onclick='ModP(1, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 3":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(2, 1)'>+</button><button  class='mP2' onclick='ModP(2, 2)'>-</button></td><td><button class='mP3' onclick='ModP(2, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 4":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(3, 1)'>+</button><button  class='mP2' onclick='ModP(3, 2)'>-</button></td><td><button class='mP3' onclick='ModP(3, 3)'>x</button></td></tr>"
								   break;
		   
							   case "Sala 5":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(4, 1)'>+</button><button  class='mP2' onclick='ModP(4, 2)'>-</button></td><td><button class='mP3' onclick='ModP(4, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 6":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(5, 1)'>+</button><button  class='mP2' onclick='ModP(5, 2)'>-</button></td><td><button class='mP3' onclick='ModP(5, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 7":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(6, 1)'>+</button><button  class='mP2' onclick='ModP(6, 2)'>-</button></td><td><button class='mP3' onclick='ModP(6, 3)'>x</button></td></tr>"
								   break;
		   
							   case "Sala 8":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(7, 1)'>+</button><button  class='mP2' onclick='ModP(7, 2)'>-</button></td><td><button class='mP3' onclick='ModP(7, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 9":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(8, 1)'>+</button><button  class='mP2' onclick='ModP(8, 2)'>-</button></td><td><button class='mP3' onclick='ModP(8, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 10":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(9, 1)'>+</button><button  class='mP2' onclick='ModP(9, 2)'>-</button></td><td><button class='mP3' onclick='ModP(9, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 11":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[j] + "</td><td>" + orderC[j] + "</td><td> $" + order[j] + "</td><td><button class='mP1' onclick='ModP(10, 1)'>+</button><button  class='mP2' onclick='ModP(10, 2)'>-</button></td><td><button class='mP3' onclick='ModP(10, 3)'>x</button></td></tr>"
								   break;
						   }
						   
					   }
				   } 
			   document.getElementById("factura").innerHTML = "$ " + (order[0] + order[1] + order[2] + order[3] + order[4] + order[5] + order[6] + order[7] + order[8] + order[9] + order[10]);	
			   document.getElementById("finAble").innerHTML = "<button class ='mP4'  onclick='Toad()'>Finalizar pedido</button>"
			   var contenido = document.getElementById("factura").textContent
		   
			   if(contenido=="$ 0"){
				   document.getElementById("finAble").innerHTML = ""
			   }
		   
			   }
		   function ModP(id, act){
						   document.getElementById("ordenFinal").innerHTML = ""
						   switch(act){
							   case 1:
							   orderC[id]+=1
								   break;
							   case 2:
							   orderC[id]-=1
								   break;
							   case 3:
							   orderC[id]=0
								   break;
						   }
				   for (var i = 0; i <= 11; i++) {
					   if (orderC[i] != 0) {
						   switch(orderP[i]){
							   case "Sala 1":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(0, 1)'>+</button><button  class='mP2' onclick='ModP(0, 2)'>-</button></td><td><button class='mP3' onclick='ModP(0, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 2":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(1, 1)'>+</button><button  class='mP2' onclick='ModP(1, 2)'>-</button></td><td><button class='mP3' onclick='ModP(1, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 3":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(2, 1)'>+</button><button  class='mP2' onclick='ModP(2, 2)'>-</button></td><td><button class='mP3' onclick='ModP(2, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 4":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(3, 1)'>+</button><button  class='mP2' onclick='ModP(3, 2)'>-</button></td><td><button class='mP3' onclick='ModP(3, 3)'>x</button></td></tr>"
								   break;
		   
		   
							   case "Sala 5":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(4, 1)'>+</button><button  class='mP2' onclick='ModP(4, 2)'>-</button></td><td><button class='mP3' onclick='ModP(4, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 6":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(5, 1)'>+</button><button  class='mP2' onclick='ModP(5, 2)'>-</button></td><td><button class='mP3' onclick='ModP(5, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 7":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(6, 1)'>+</button><button  class='mP2' onclick='ModP(6, 2)'>-</button></td><td><button class='mP3' onclick='ModP(6, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 8":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(7, 1)'>+</button><button  class='mP2' onclick='ModP(7, 2)'>-</button></td><td><button class='mP3' onclick='ModP(7, 3)'>x</button></td></tr>"
								   break;
		   
							   case "Sala 9":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(8, 1)'>+</button><button  class='mP2' onclick='ModP(8, 2)'>-</button></td><td><button class='mP3' onclick='ModP(8, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 10":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(9, 1)'>+</button><button  class='mP2' onclick='ModP(9, 2)'>-</button></td><td><button class='mP3' onclick='ModP(9, 3)'>x</button></td></tr>"
								   break;
							   case "Sala 11":
								   document.getElementById("ordenFinal").innerHTML += "<tr><td>" + orderP[i] + "</td><td>" + orderC[i] + "</td><td> $" + (orderC[i] * orderV[i]) + "</td><td><button class='mP1' onclick='ModP(10, 1)'>+</button><button  class='mP2' onclick='ModP(10, 2)'>-</button></td><td><button class='mP3' onclick='ModP(10, 3)'>x</button></td></tr>"
								   break;
		   
					   
		   
						   }orderC.splice(i, 1, orderC[i])
						   var fin = (orderC[i]*orderV[i])
		   
						   order.splice(i, 1, fin)
		   
		   
					   var sum = (orderC[0]*orderV[0])+(orderC[1]*orderV[1])+(orderC[2]*orderV[2])+(orderC[3]*orderV[3])+(orderC[4]*orderV[4])+(orderC[5]*orderV[5])+(orderC[6]*orderV[6])+(orderC[7]*orderV[7])+(orderC[8]*orderV[8])+(orderC[9]*orderV[9])+(orderC[10]*orderV[10])
					   }
				   }
				   document.getElementById("factura").innerHTML =  "$" + sum;	
		   document.getElementById("finAble").innerHTML = "<button class ='mP4' onclick='Toad()'>Finalizar pedido</button>";
			   var contenido = document.getElementById("factura").textContent
		   
			   if(contenido=="$0"){
				   document.getElementById("finAble").innerHTML = " ";
			   }
		   
			   }
		   
		   function Toad(){
			   document.getElementById("final2").style.display = "flex";
			   document.getElementById("container").style.display = "none";
			   document.getElementById("kart").style.display = "none";
			   document.getElementById("MENUSOTE").style.visibility="hidden";
			   document.getElementById("cabeza").style.display="none";
			   document.getElementById("fot").style.display="none";
			   document.getElementById("cot").style.display="none";
		   
			   setTimeout("alert('Su pedido está en proceso, por favor espere')", 2000);
		   
			   setTimeout("document.getElementById('final1').style.display = 'flex';", 4000)
			   setTimeout("document.getElementById('final2').style.display = 'none';", 4000)
		   
		   
		   }
		   
		   function HoySi() {
			   setTimeout("document.getElementById('final2').style.display = 'flex';", 0)
			   setTimeout("document.getElementById('final1').style.display = 'none';", 0)
			   setTimeout("document.getElementById('MENUSOTE').style.visibility = 'visible';", 0)
		   
			   var userJ = document.getElementById("name").value
			   var correoJ = document.getElementById("mail").value
			   var yanoweyJ = (order[0] + order[1] + order[2] + order[3] + order[4] + order[5] + order[6] + order[7] + order[8] + order[9] + order[10]);
			   var ivaJ = (yanoweyJ * 0.13);
			   var compraFinalJ = (yanoweyJ)+(ivaJ)
		   
			   var newContent_userJ = "Muchas gracias por tu compra " + userJ + ".";
			   var newContent_correoJ = "Correo: " + correoJ;
			   var newContent_yanoweyJ = "Total en tus productos ordenados: $" + yanoweyJ;
			   var newContent_ivaJ = "IVA: $" + ivaJ;
			   var newContent_compraFinalJ = "Total a pagar (+ IVA): $" + compraFinalJ;
		   
			   document.getElementById("user").innerHTML = newContent_userJ
			   document.getElementById("correo").innerHTML = newContent_correoJ
			   document.getElementById("yanowey").innerHTML = newContent_yanoweyJ
			   document.getElementById("iva").innerHTML = newContent_ivaJ
			   document.getElementById("compraFinal").innerHTML = newContent_compraFinalJ
		   
			   setTimeout("document.getElementById('final3').style.display = 'flex';", 2000)
			   setTimeout("document.getElementById('final2').style.display = 'none';", 2000)
		   }