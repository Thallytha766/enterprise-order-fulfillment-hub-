// ==========================================================
// MONGODB NOSQL SCHEMA & AUDIT COLLECTIONS
// ==========================================================

db.createCollection("order_audit_logs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["orderId", "eventType", "payload", "createdAt"],
      properties: {
        orderId: { bsonType: "string" },
        eventType: { bsonType: "string", enum: ["ORDER_CREATED", "PAYMENT_AUTHORIZED", "FULFILLMENT_SHIPPED"] },
        payload: { bsonType: "object" },
        createdAt: { bsonType: "date" }
      }
    }
  }
});

db.order_audit_logs.createIndex({ "orderId": 1, "createdAt": -1 });
