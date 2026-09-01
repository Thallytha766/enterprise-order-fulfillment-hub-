const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/bff/v1/checkout', async (req, res) => {
    const { customerId, items, paymentMethod } = req.body;

    if (!customerId || !items || items.length === 0) {
        return res.status(400).json({ error: 'Dados de checkout inválidos' });
    }

    const checkoutSummary = {
        transactionId: `TX-${Date.now()}`,
        status: 'SUCCESS',
        fulfillmentRouting: 'HUB-SOUTHEAST-01',
        estimatedDeliveryDays: 3,
        processedAt: new Date().toISOString()
    };

    return res.status(200).json(checkoutSummary);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Node.js BFF Gateway running on port ${PORT}`);
});
