package com.startrek.startshipenterprise.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.startrek.startshipenterprise.dto.ResultadoDTO;
import com.startrek.startshipenterprise.service.StartShipService;

@RestController
@RequestMapping("startship")
public class StartShipRest {
	
	
	@Autowired
	private StartShipService service;
	
	@GetMapping("/resultados")
	@ResponseBody
	@CrossOrigin(origins = "*")
		public ResultadoDTO resultados(@RequestParam("danioA") double danioA,@RequestParam("danioB") double danioB,@RequestParam("danioC") double danioC, @RequestParam("velocidadLuz") double velocidadLuz) {	
		ResultadoDTO resultado = new ResultadoDTO();
		Object obj = service.Flujo(danioA, danioB, danioC, velocidadLuz);
		resultado.setMensaje(obj.toString());
		return resultado;
	}	
}
	
	

	

	
	

