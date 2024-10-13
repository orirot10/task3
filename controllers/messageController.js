// messageController.js

// Initialize messages array
const messages = [
    { text: "Hi there!", user: "Amando", added: new Date() },
    { text: "Hello World!", user: "Charles", added: new Date() },
    { text: "Hello rishon!", user: "Ori", added: new Date() }
  ];
  
  // Controller to get all messages
  exports.getMessages = (req, res) => {
    res.render('index', { messages });
  };
  
  // Controller to render the "new message" form
  exports.renderNewMessageForm = (req, res) => {
    res.render('new');
  };
  
  // Controller to add a new message
  exports.addNewMessage = (req, res) => {
    const { user, text } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
  };
  