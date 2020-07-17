package com.omni.de.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omni.de.exception.ResourceNotFoundException;
import com.omni.de.model.Contacto;
import com.omni.de.repository.ContactoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ContactoController {
	
	@Autowired
	private ContactoRepository contactoRepository;

	@GetMapping("/contactos")
	public List<Contacto> getAllContactos() {
		return contactoRepository.findAll();
	}
	
	@GetMapping("contactos/{id}")
	public ResponseEntity<Contacto> getContactoById(@PathVariable(value ="id") Long contactoId) 
		throws ResourceNotFoundException {
		
		Contacto cotacto = contactoRepository.findById(contactoId)
				.orElseThrow(() -> new ResourceNotFoundException("Contacto no encontrado para este id :: " + contactoId));
		return ResponseEntity.ok().body(cotacto);
		
	}
	
	@PostMapping("contactos")
	public Contacto createContactos(@Valid @RequestBody Contacto contacto) {
		return contactoRepository.save(contacto);
	}
	
	@PutMapping("/contactos/{id}")
	public ResponseEntity<Contacto> updateContacto(@PathVariable(value = "id") Long contactoId, 
			@Valid @RequestBody Contacto contactoDetails) throws ResourceNotFoundException {
		Contacto contacto = contactoRepository.findById(contactoId)
				.orElseThrow(() -> new ResourceNotFoundException("Contacto no encontrado para este id :: " + contactoId));

		contacto.setEmailId(contactoDetails.getEmailId());
		contacto.setLastName(contactoDetails.getLastName());
		contacto.setFirstName(contactoDetails.getFirstName());
		final Contacto updatedEmployee = contactoRepository.save(contacto);
		return ResponseEntity.ok(updatedEmployee);
		
	}
	
	@DeleteMapping("/contactos/{id}")
	public Map<String, Boolean> deleteContacto(@PathVariable(value = "id") Long contactoId)
			throws ResourceNotFoundException {
		Contacto contacto = contactoRepository.findById(contactoId)
				.orElseThrow(() -> new ResourceNotFoundException("Contacto no encontrado para este id :: " + contactoId));

		contactoRepository.delete(contacto);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
}
