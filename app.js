const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Serve static files from public folder
app.use(express.static('public'));

// Define routes
const indexRouter = require('./routes/index');
const aboutUsRouter = require('./routes/aboutus');
const servicesRouter = require('./routes/services');
const ictConsultingRouter = require('./routes/ict-consulting');

app.use('/', indexRouter);
app.use('/aboutus', aboutUsRouter);
app.use('/services', servicesRouter);
app.use('/ict-consulting', ictConsultingRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});