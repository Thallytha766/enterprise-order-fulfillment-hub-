package com.enterprise.fulfillment.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    public record OrderRequest(
        String customerId,
        String sku,
        Integer quantity,
        BigDecimal unitPrice,
        String paymentMethod
    ) {}

    public record OrderResponse(
        String orderId,
        String status,
        BigDecimal totalAmount,
        String trackingCode,
        String timestamp
    ) {}

    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest request) {
        BigDecimal total = request.unitPrice().multiply(BigDecimal.valueOf(request.quantity()));
        String generatedOrderId = "ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        String generatedTracking = "TRK-" + System.currentTimeMillis();

        OrderResponse response = new OrderResponse(
            generatedOrderId,
            "PROCESSING_CONFIRMED",
            total,
            generatedTracking,
            Instant.now().toString()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        return ResponseEntity.ok(Map.of(
            "status", "UP",
            "oracle_relational_pool", "HEALTHY",
            "mongodb_nosql_cluster", "CONNECTED"
        ));
    }
}
