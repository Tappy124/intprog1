const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
  education: {
    year: '2nd Year Student (2023-2024)',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    university: 'University of Southern Philippines Foundation (USPF)'.
    highschool: 'University of Southern Philippines Foundation (USPF)',
    year: '(2019-2020'
  },
  skills: [
    'Team Collaboration',
    'Time Management',
    'Communication',
    'JavaScript',
    'Node.js',
    'Express.js',
    'React',
    'HTML',
    'CSS',
    'Git',
    'SQL'
  ],
  
  experience: [
    {
        'position': 'Intern',
        'company': 'Software Startup',
        'year': 'Summer 2014',
        'responsibilities': [
          'Assisted senior developers in building prototypes and proof-of-concept applications',
          'Worked on front-end and back-end tasks, gaining hands-on experience with HTML, CSS, and JavaScript',
          'Participated in team meetings and contributed ideas to improve project workflows',
          'Learned about software development best practices and industry tools',
          'kusug mukaon '
        ]
      }
  ],
  awards: [
    'Best Hackathon Project - Coding Club (2014)',
    'Scholarship for Academic Excellence - University of Example (2014)'
    
  ],
  personalInfo: {
    name: 'Tapilot, Ian Christian Lopez',
    address: 'Busay, Cebu City',
    phoneNumber: '09950744085',
    email: 'itapilot_ccs@uspf.edu.ph',
    birthdate: 'January 24, 2003',
    sex: 'Male'
  }
};

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json(profile);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});