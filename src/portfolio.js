import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/football.json";

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

const illustration = {
  animated: true 
};

const greeting = {
  username: "SB",
  title: "Swapnamoy Bhowmick",
  subTitle: emoji(
    "NYU MSCS'25 | Ex-Persistent Systems | COEP'21"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xHl8lyd7bAtWrNI4YucIApaDHH0ucI2x/view?usp=sharing",
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/swapnamoy17",
  linkedin: "https://www.linkedin.com/in/swapnamoy-bhowmick-9a1960182/",
  gmail: "swapnamoy31@gmail.com"
};

// Skills Section

const skillsSection = {
  title: "Skills",
  languageSkills: [
      {
        skillName: "Java",
        imgPath: require("./assets/images/java.png")
      },
      {
        skillName: "JavaScript",
        imgPath: require("./assets/images/javascript.png")
      },
      {
      skillName: "TypeScript",
      imgPath: require("./assets/images/typescript.png")
      },
      {
        skillName: "Python",
        imgPath: require("./assets/images/python.png")
      },
      {
        skillName: "C++",
        imgPath: require("./assets/images/c++.png")
      }
  ],
  frontendSkills:[
      {
        skillName: "React.Js",
        imgPath: require("./assets/images/react.png")
      },
      {
        skillName: "Redux",
        imgPath: require("./assets/images/redux.png")
      },
      {
        skillName: "HTML-5",
        imgPath: require("./assets/images/html5.png")
      },
      {
        skillName: "css3",
        imgPath: require("./assets/images/css3.png")
      },
      {
        skillName: "sass",
        imgPath: require("./assets/images/sass.png")
      },
  ],
  backendSkills:[
    {
      skillName: "Node.Js",
      imgPath: require("./assets/images/nodejs.png")
    },
    {
      skillName: "Spring Boot",
      imgPath: require("./assets/images/spring.png")
    },
    {
      skillName: "Django",
      imgPath: require("./assets/images/django.png")
    },
  ],
  databaseSkills:[
    {
      skillName: "Hibernate",
      imgPath: require("./assets/images/hibernate.png")
    },
    {
      skillName: "MongoDB",
      imgPath: require("./assets/images/mongo.png")
    },
    {
      skillName: "MySQL",
      imgPath: require("./assets/images/mysql.png")
    },
  ],
  mlSkills:[
    {
      skillName: "TensorFlow",
      imgPath: require("./assets/images/tf.png")
    },
    {
      skillName: "PyTorch",
      imgPath: require("./assets/images/pyt.png")
    },
    {
      skillName: "Hadoop",
      imgPath: require("./assets/images/hadoop.png")
    },
    {
      skillName: "Spark",
      imgPath: require("./assets/images/spark.png")
    }
  ],
  cloudSkills:[
    {
      skillName: "Lambda",
      imgPath: require("./assets/images/lambda.png")
    },
    {
      skillName: "S3",
      imgPath: require("./assets/images/s3.png")
    },
    {
      skillName: "Amazon Lex",
      imgPath: require("./assets/images/lex.png")
    },
    {
      skillName: "EC2",
      imgPath: require("./assets/images/ec2.png")
    },
    {
      skillName: "API Gateway",
      imgPath: require("./assets/images/gateway.png")
    },
    {
      skillName: "OpenSearch",
      imgPath: require("./assets/images/opensearch.png")
    },
    {
      skillName: "DynamoDB",
      imgPath: require("./assets/images/dynamo.png")
    },
    {
      skillName: "SQS",
      imgPath: require("./assets/images/sqs.png")
    }
  ],
  devopsSkills: [
      {
        skillName: "Docker",
        imgPath: require("./assets/images/docker.png")
      },
      {
        skillName: "Travis CI",
        imgPath: require("./assets/images/travisci.png")
      },
      {
        skillName: "Kubernetes",
        imgPath: require("./assets/images/kube.png")
      },
      {
        skillName: "Openshift",
        imgPath: require("./assets/images/openshift.png")
      }
  ],
  otherSkills: [
      {
        skillName: "Git",
        imgPath: require("./assets/images/git.png")
      },
      {
        skillName: "Elasticsearch",
        imgPath: require("./assets/images/elasticsearch.png")
      }
  ]
};

// Education Section

const educationInfo = {
  schools: [
    {
      schoolName: "New York University",
      logo: require("./assets/images/nyu2.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2025",
      desc: "CGPA: 3.89/4\n\nCourses: Cloud Computing, Machine Learning, Big Data, Design and Analysis of Algorithms",
    },
    {
      schoolName: "College of Engineering, Pune",
      logo: require("./assets/images/coep.jpeg"),
      subHeader: "Bachelor of Technology in Electronics and Telecommunications",
      duration: "August 2017 - May 2021",
      desc: "CGPA: 8.80/10 | Rank: 7\n\nCourses: Image Processing, Speech Processing, Data Structures & Algorithms, Database Systems, Internet Technologies, Computer Networks\n",
      descBullets: ["COEP Hyperloop - Co-Lead (April 2019 - May 2021)\nLed a research group of 30+ students working on the future of transport - Hyperloop.",
                    "COEP Soccer Team (2017 - 2021)"]
    }
  ]
};

// Work experience section

const workExperiences = {
  experience: [
    {
      role: "DevOps Engineer Intern",
      company: "Blockhouse",
      companylogo: require("./assets/images/blockhouse.jpeg"),
      date: "Sept 2024 – Dec 2024",
      desc: "Led the DevOps team, automating deployment pipelines and optimizing cloud infrastructure for improved efficiency and scalability.",
      // descBullets: [
      //   "Developed scalable and reliable solutions with the help of CI/CD tools like Travis CI and Openshift.",
      //   "Automation of UI test cases using Codecept.js and wrote Junits for API"
      // ]
    },
    {
      role: "IT Technologist Intern",
      company: "New York University IT",
      companylogo: require("./assets/images/nyu.png"),
      date: "Jan 2024 – May 2025",
      desc: "Part of the Data Enterprise Management team, developing a dashboard using AWS for reporting data from Snowflake data warehouses.",
      // descBullets: [
      //   "Developed scalable and reliable solutions with the help of CI/CD tools like Travis CI and Openshift.",
      //   "Automation of UI test cases using Codecept.js and wrote Junits for API"
      // ]
    },
    {
      role: "Software Engineer",
      company: "Persistent Systems",
      companylogo: require("./assets/images/persistent.jpeg"),
      date: "May 2021 – July 2023",
      desc: "Built a presales engagement portal as a Full-Stack Developer using React.Js, Redux, SpringBoot, Docker and Openshift.",
      // descBullets: [
      //   "Developed scalable and reliable solutions with the help of CI/CD tools like Travis CI and Openshift.",
      //   "Automation of UI test cases using Codecept.js and wrote Junits for API"
      // ]
    },
    {
      role: "Research Intern",
      company: `College of Engineering,\nPune`,
      companylogo: require("./assets/images/coep.jpeg"),
      date: "May 2020 – August 2020",
      desc: "Focused on extracting multi-lingual text from natural scene images, outperforming existing Hindi Scene Text Detectors by ~12% through hyperparameter fine-tuning."
    },
    {
      role: "Summer Intern",
      company: "Reliance Jio Infocomm Ltd.",
      companylogo: require("./assets/images/jio.png"),
      date: "June 2019 – July 2019",
      desc: "Built an end-to-end weather monitoring system, integrating AWS IoT, Elasticsearch, and Kibana for sensor data visualization and processing."
    }
  ]
};

// Some big projects you have worked on

const projects = {
  title: "Research / Academic Projects",
  projects: [
    {
      image: require("./assets/images/elearning.webp"),
      title: "E-Learning Platform",
      subtitle: "Developed a serverless SaaS online learning platform with scalable video content delivery via S3, and CloudFront.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/swapnamoy17/EduNimbus"
        }
      ]
    },
    {
      image: require("./assets/images/gmaps.png"),
      title: "Safe Route Web App",
      subtitle: "Engineered a web platform, focusing on safer route identification, using Apache Spark to process and analyze NYC Crime Dataset.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/manavparikh01/BigDataProject"
        }
      ]
    },
    {
      image: require("./assets/images/grf.jpeg"),
      title: "Google Research Football",
      subtitle: "Trained an AI-based agent to play soccer in a simulated environment for the Google Football Kaggle Competition",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/swapnamoy17/Google-Man-City"
        },
        {
          name: "Published Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/9708400"
        }
      ]
    },
    {
      image: require("./assets/images/east.png"),
      title: "Natural Scene Text Detection and Recognition",
      subtitle: "An end-to-end system to detect and extract text instances from natural scene images.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/swapnamoy17/EAST-DenseNet"
        },
        {
          name: "Published Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/9418116"
        }
      ]
    },
    {
      image: require("./assets/images/medicare.jpg"),
      title: "MediCare",
      subtitle: "A versatile hospital web app catering to patients, doctors, and hospital administrators, offering real-time bed/room availability tracking and bookings, as well as doctor appointment scheduling.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/swapnamoy17/MediCare"
        }
      ]
    },
    {
      image: require("./assets/images/speeechrecog3.jpeg"),
      title: "Speaker Identification",
      subtitle: "An end-to-end system for identifying the speaker based on the audio recorded by MFCC and GFCC feature extraction.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/swapnamoy17/Speaker-Identification"
        }
      ]
    },
    {
      image: require("./assets/images/vpd.webp"),
      title: "Vehicle Plate Detection",
      subtitle: "An Automatic Vehicle Plate Detection system using Sobel Edge Detection on MATLAB.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/swapnamoy17/Vehicle-Plate-Detection"
        }
      ]
    }
  ],
};

const achievementSection = {
  title: emoji("Awards & Certifications 🏆 "),

  achievementsCards: [
    {
      title: "Bravo Award",
      subtitle: "Received the Bravo Award at Persistent Systems (2022 Q3) for timely deliveries and displaying strong team commitment. ",
      image: require("./assets/images/persistent.jpeg"),
      imageAlt: "Persistent"
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "Completed the Azure Fundamentals (AZ-900) Certifcation from Microsoft.",
      image: require("./assets/images/azure7.png"),
      imageAlt: "Azure Logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/62f541fd-8e47-4c9a-a0f8-b665d59f40d6"},
      ]
    },
    {
      title: "TechGig Code Gladiators",
      subtitle: "Semi-Finalist in the 2022 Code Gladiator Competition.",
      image: require("./assets/images/codegladiators.jpeg"),
      imageAlt: "Code Gladiators",
      footerLink: [
        {name: "Competition", url: "https://www.techgig.com/codegladiators2022/event-result?round=open"},
      ]
    }
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi?",
  email_address: "swapnamoy31@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  projects,
  achievementSection,
  contactInfo
};
