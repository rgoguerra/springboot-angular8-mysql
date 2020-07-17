package com.omni.de.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.omni.de.model.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long>{
	



}
