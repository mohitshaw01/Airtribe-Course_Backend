const Lead = require('../models/lead');

const leadController = {
  getAllLeads: async (req, res) => {
    try {
      const leads = await Lead.find();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getLeadById: async (req, res) => {
    try {
      const lead = await Lead.findById(req.params.id);
      if (lead) {
        res.json(lead);
      } else {
        res.status(404).json({ message: 'Lead not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createLead: async (req, res) => {
    const lead = new Lead({
      course_id: req.body.course_id,
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      linkedin_profile: req.body.linkedin_profile,
      status: req.body.status,
      // other fields
    });
    try {
      const newLead = await lead.save();
      res.status(201).json(newLead);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Add other CRUD operations as needed
};

module.exports = leadController;
