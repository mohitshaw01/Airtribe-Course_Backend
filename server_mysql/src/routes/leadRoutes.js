import express from 'express';
const router = express.Router();
import leadController from '../controllers/lead.controller.js';

// Course registration API
router.post('/', leadController.registerLead);

// Lead update API
router.put('/:leadId', leadController.updateLead);

// Lead search API
router.get('/', leadController.searchLeads);

export default router;
