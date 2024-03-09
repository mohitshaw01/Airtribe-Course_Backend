const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// GET all leads
router.get('/', leadController.getAllLeads);

// GET lead by ID
router.get('/:id', leadController.getLeadById);

// POST create new lead
router.post('/', leadController.createLead);

// Add other routes for update and delete operations if needed

module.exports = router;
