package com.alos.deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alos.deliver.entities.Order;

public interface OrderRepository2 extends JpaRepository<Order, Long>{
	
}
