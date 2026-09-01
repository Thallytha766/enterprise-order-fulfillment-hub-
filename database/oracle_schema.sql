-- ==========================================================
-- ORACLE 19c/21c DDL - TABELAS TRANSACIONAIS DE PEDIDOS
-- ==========================================================

CREATE TABLE tb_pedidos (
    id_pedido VARCHAR2(36) PRIMARY KEY,
    id_cliente VARCHAR2(36) NOT NULL,
    valor_total NUMBER(15,2) NOT NULL,
    status_pedido VARCHAR2(30) DEFAULT 'CRIADO',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tb_itens_pedido (
    id_item NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_pedido VARCHAR2(36) NOT NULL,
    sku VARCHAR2(50) NOT NULL,
    quantidade NUMBER(6) NOT NULL,
    preco_unitario NUMBER(15,2) NOT NULL,
    CONSTRAINT fk_pedido_itens FOREIGN KEY (id_pedido) REFERENCES tb_pedidos(id_pedido)
);

CREATE INDEX idx_pedidos_cliente ON tb_pedidos(id_cliente);
CREATE INDEX idx_pedidos_status ON tb_pedidos(status_pedido);
