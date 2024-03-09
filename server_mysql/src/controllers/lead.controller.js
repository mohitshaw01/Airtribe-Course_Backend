import Lead from '../models/lead.model.js';

const registerLead = async (req, res) => {
  try {
    const { course_id, name, email, phone_number, linkedin_profile } = req.body;
    const lead = await Lead.create({ course_id, name, email, phone_number, linkedin_profile });
    res.status(201).json(lead);
  } catch (err) {
    console.error('Error registering for course:', err);
    res.status(500).send('Internal Server Error');
  }
};

const updateLead = async (req, res) => {
  try {
    const leadId = req.params.leadId;
    const { status } = req.body;
    await Lead.update({ status }, { where: { lead_id: leadId } });
    res.status(200).send('Lead status updated successfully');
  } catch (err) {
    console.error('Error updating lead status:', err);
    res.status(500).send('Internal Server Error');
  }
};

const searchLeads = async (req, res) => {
  try {
    const { name, email } = req.query;
    let whereClause = {};
    if (name) whereClause.name = name;
    if (email) whereClause.email = email;
    const leads = await Lead.findAll({ where: whereClause });
    res.status(200).json(leads);
  } catch (err) {
    console.error('Error searching leads:', err);
    res.status(500).send('Internal Server Error');
  }
};

export default { registerLead, updateLead, searchLeads }