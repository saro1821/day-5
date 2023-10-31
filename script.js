//1. For the given JSON iterate over all for loops (for, for in, for of, forEach)
//json
/*{
    "name": "John",
    "age": 30,
    "city": "New York"
  }*/
 // for in
  const json = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(`${key}: ${json[key]}`);
    }
  }
//for of

  const jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  const entries = Object.entries(jsonData);
  
  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
  
// 2, Create your own resume data in JSON format
const Json = {
    "name": "saravana",
    "contact": {
      "email": "saravanan7604975@gmail.com",
      "phone": "7604975840",
      "address": "48 thanthai periyar street mgr nagar chennai:600078"
    },
    "education": [
      {
        "degree": "Bachelor of Computer Application",
        "college": "MRG University",
        "graduationYear": "2023"
      }
    ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "Java",
      "Python",
      "SQL",
      "Git"
    ],
    "languages": ["English", "Tamil"]
  };
  console.log(json);
  