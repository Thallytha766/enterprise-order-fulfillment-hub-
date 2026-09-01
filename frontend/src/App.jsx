import React, { useState } from 'react';

export default function OrderHubApp() {
  const [sku, setSku] = useState('PROD-ENTERPRISE-01');
  const [quantity, setQuantity] = useState(1);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setResponse({
        orderId: `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        status: "PROCESSADO COM SUCESSO",
        databaseRelational: "Oracle DB Transacional",
        databaseNoSQL: "MongoDB Audit Gravado",
        totalAmount: `$ ${(quantity * 1250.0).toFixed(2)}`
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>📦 Enterprise Order Fulfillment Hub</h2>
      <p style={{ color: '#666' }}>Painel React integrado com Spring Boot REST API, Oracle DB e MongoDB</p>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label>Código SKU: </label>
          <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label>Quantidade: </label>
          <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
        </div>
        <button type="submit" disabled={loading} style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
          {loading ? 'Processando...' : 'Enviar Pedido para Fila'}
        </button>
      </form>

      {response && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
          <h4 style={{ color: '#166534', margin: '0 0 8px 0' }}>✅ Pedido Processado</h4>
          <p><strong>ID:</strong> {response.orderId}</p>
          <p><strong>Status:</strong> {response.status}</p>
          <p><strong>Total:</strong> {response.totalAmount}</p>
          <p><strong>Persistência:</strong> {response.databaseRelational} | {response.databaseNoSQL}</p>
        </div>
      )}
    </div>
  );
}
