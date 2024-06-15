import projectImgUrl1 from "./assets/project/automous_car.png";
import projectImgUrl2 from "./assets/project/capstone.png";
import projectImgUrl3 from "./assets/project/accidentDetection.jpeg";
import projectImgUrl4 from "./assets/project/ta.png";
import projectImgUrl5 from "./assets/project/SIR_model.png";
import projectImgUrl6 from "./assets/project/tweet_covid.png";
import projectImgUrl7 from "./assets/project/option_warn.png";
import projectImgUrl8 from "./assets/project/youtube_clone.png";
import projectImgUrl9 from "./assets/project/google_clone.png";
import projectImgUrl10 from "./assets/project/finvizfinance.png";
import projectImgUrl11 from "./assets/project/paddleGame.png";
import projectImgUrl12 from "./assets/project/covid_dash.png";
import projectImgUrl13 from "./assets/project/stock_market_app.png";
import projectImgUrl14 from "./assets/project/streamlit_webscrap_tool.png";
import projectImgUrl15 from "./assets/project/arktradetracker.png";
import projectImgUrl16 from "./assets/project/trump_tweet_analysis.png";
import projectImgUrl17 from "./assets/project/noaa-e0eHtnr7eeU-unsplash.jpg";
import projectImgUrl18 from "./assets/project/boken_fin.png";
import projectImgUrl19 from "./assets/project/st_img_label.gif";
import projectImgUrl20 from "./assets/project/postman-easy-team.png";
import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    projectName: "Autonomous Car",
    img: projectImgUrl1,
    select: ["miscellaneous ml/ds"],
    hashtag: ["embedded-systems", "computer-vision"],
    link: "https://github.com/lit26/Autonomous_Cars",
    tech: ["Python", "C"],
    description:
      "Build an autonomous car which will run autopilot when the system detect drowsiness of driver.",
    time: "Jan 2019 - Mar 2019",
  },
  {
    id: 2,
    projectName: "Internet of Life Saving Things (IoLST)",
    img: projectImgUrl2,
    select: ["miscellaneous"],
    hashtag: ["internet-of-things"],
    tech: ["Hardware Development", "Network Development", "Web Development"],
    link: "https://github.com/lit26/Internet-of-Life-Saving-Thing-IoLST-for-Firefighters",
    description:
      "Developed a prototype for the first responders (firemen) to help saving lives for firemen and people inside the fire scene. Explored the concept of the Internet of Thing (IoT)/ the Internet of Life Saving Things (IoLST) which consists of Devices/ Sensors, Connectivity, Data Storage and Analysis. Built a web dashboard to visualize data and provide immediate, actionable insights and analytics for the firemen.",
    time: "Jan 2019 - Jun 2019",
  },
  {
    id: 3,
    projectName: "Accident Detection",
    img: projectImgUrl3,
    select: ["ml/ds"],
    hashtag: ["computer-vision"],
    tech: ["Python"],
    link: "https://github.com/lit26/computer-vision/tree/master/AccidentDetection",
    description:
      "Classifying fire, robbery accident using Convolution Neural Network. Collect datasets from Google search images and open resources. Dataset contains 3 classes. Training accuracy: 93.2%, testing accuracy: 92.0%.",
    time: "Nov 2019 - Dec 2019",
  },
  {
    id: 4,
    projectName: "ta",
    img: projectImgUrl4,
    select: ["python_library", "quant"],
    hashtag: ["python-library"],
    tech: ["Python"],
    link: "https://github.com/lit26/ta",
    description:
      "Technical Analysis library to financial time series datasets. Major contributor to the Library. Implement indicator functions and plotly functions.",
    time: "Jun 2020 - Present",
  },
  {
    id: 5,
    projectName: "COVID-19 Epidemic Modeling",
    img: projectImgUrl5,
    select: ["ml/ds"],
    hashtag: ["data-analysis"],
    tech: ["Python"],
    link: "https://github.com/lit26/Novel-Corona-Virus-2019",
    description:
      "Perform data analysis on the COVID-19. Deep analysis China and US Cases using SIR model.",
    time: "Feb 2020 – Mar 2020",
  },
  {
    id: 6,
    projectName: "Tweet Analysis of COVID-19",
    img: projectImgUrl6,
    select: ["ml/ds"],
    hashtag: ["natural-language-processing"],
    tech: ["Python"],
    link: "https://github.com/lit26/Tweet_Analysis_COVID-19",
    description:
      "Perform sentiment analysis and topic modeling on twitter posts about COVID-19 across time.",
    time: "Apr 2020 – May 2020",
  },
  {
    id: 7,
    projectName: "Option Warning",
    img: projectImgUrl7,
    select: ["web"],
    hashtag: ["web-programming", "chrome-extension"],
    tech: ["React.js"],
    link: "https://github.com/lit26/Option_Warning",
    description:
      "Develop a website and Google Chrome Extension for options trading analysis. Calculate the max profit and the max loss for multiple options and warn the user if the max loss exceeds $10000.",
    time: "Apr 2020 – May 2020",
  },
  {
    id: 8,
    projectName: "youtube_clone",
    img: projectImgUrl8,
    select: ["web"],
    hashtag: ["web-programming"],
    tech: ["React.js"],
    link: "https://github.com/lit26/youtube_clone",
    description: "Develop a website which clone partial function of youtube. ",
    time: "Aug 2020 – Aug 2020",
  },
  {
    id: 9,
    projectName: "google_clone",
    img: projectImgUrl9,
    select: ["web"],
    hashtag: ["web-programming"],
    tech: ["React.js"],
    link: "https://github.com/lit26/google_clone",
    description: "Develop a website which clone style of google. ",
    time: "Aug 2020 – Aug 2020",
  },
  {
    id: 10,
    projectName: "finvizfinance",
    img: projectImgUrl10,
    select: ["python_library", "quant"],
    hashtag: ["python-library"],
    tech: ["Python"],
    link: "https://github.com/lit26/finvizfinance",
    description:
      "Develop a python package for fetching financial information. finvizfinance is a package which collects financial information from FinViz website. The library provides fundamental & technical information as well as stock charts, news, and insider trading data. Forex and crypto trading information and earning calls are also available in the library. Publish in Pypi.",
    time: "Jul 2020 – Present",
  },
  {
    id: 11,
    projectName: "PaddleGame",
    img: projectImgUrl11,
    select: ["ml/ds"],
    hashtag: ["reinforcement-learning"],
    tech: ["Python"],
    link: "https://github.com/lit26/ReinforcementLearningProjects/tree/main/PaddleGame",
    description:
      "Bulding an gym environment and reinforcement-learning agent to train the AI to play paddle game.",
    time: "Jul 2020 – Oct 2020",
  },
  {
    id: 12,
    projectName: "COVID-19 US Case Map",
    img: projectImgUrl12,
    select: ["data_viz", "web"],
    hashtag: ["web-programming", "data-visualization"],
    tech: ["Python-Dash", "React.js"],
    link: "https://github.com/lit26/COVID19_Dashboard",
    description:
      "Build data visualization dashboards with two version of Python-Dash and React.js. The dashboard will display the data maps, time-series data, and comparison based on different settings.",
    time: "Apr 2020 - Apr 2020",
  },
  {
    id: 13,
    projectName: "Stock Market App",
    img: projectImgUrl13,
    select: ["web", "quant"],
    hashtag: ["web-programming"],
    tech: ["React.js", "Django"],
    link: "https://github.com/lit26/Stock_Market_App",
    description:
      "Bulding a stock market app. Fetching stock data from yafoo finance and create an API using Django Rest Framework. Visulize the stock candlestick charts using React.js.",
    time: "Nov 2020 – Dec 2020",
  },
  {
    id: 14,
    projectName: "streamlit-webscrap-tool",
    img: projectImgUrl14,
    select: ["web", "python_library"],
    hashtag: ["app-development"],
    tech: ["React.js", "Python"],
    link: "https://github.com/lit26/streamlit-webscrap-tool",
    description:
      "Build a web scrap tool for assisting web scraping by visualizing the html code of the scrap result and its web display. Publish in Pypi.",
    time: "Dec 2020 – Dec 2020",
  },
  {
    id: 15,
    projectName: "Ark Trade Tracker",
    img: projectImgUrl15,
    select: ["web"],
    hashtag: ["web-programming"],
    tech: ["React.js", "Firebase", "Python"],
    link: "https://github.com/lit26/Ark_Trade_Tracker",
    description:
      "Developed a React.js platform for tracking Ark Invest ETFs and give insights for stock investing. Displayed the table and charts and updated the setting with React Redux. Prepared data with python and update daily through GitHub schedule actions. Deployed through firebase and experienced using Google Analytics to tracker the clients for improvements.",
    time: "Dec 2020 – Jan 2021",
  },
  {
    id: 16,
    projectName: "Trump Tweet Analysis",
    img: projectImgUrl16,
    select: ["ml/ds"],
    hashtag: ["natural-language-processing"],
    tech: ["Python"],
    link: "https://github.com/lit26/Trump_Tweet_Analysis",
    description:
      "Exploratory data analysis on Trump's tweets. Apply LDA Mallet model for topic modeling.",
    time: "Jan 2021 – Feb 2021",
  },
  {
    id: 17,
    projectName: "Titanic Kaggle Competition",
    img: projectImgUrl17,
    select: ["ml/ds"],
    hashtag: ["data-science"],
    tech: ["Python"],
    link: "https://github.com/lit26/TitanicKaggleCompetition",
    description:
      "Build a random forest classifier that classifies people who were more likely to survive.",
    time: "Jul 2021 – Jul 2021",
  },
  {
    id: 18,
    projectName: "bokeh_fin",
    img: projectImgUrl18,
    select: ["data_viz", "quant"],
    hashtag: ["data-visualization"],
    tech: ["Python"],
    link: "https://github.com/lit26/bokeh_fin",
    description:
      "Build interactive stock charts for technical analysis using bokeh.js.",
    time: "Dec 2021 – Jan 2022",
  },
  {
    id: 19,
    projectName: "streamlit-img-label",
    img: projectImgUrl19,
    select: ["web", "python_library"],
    hashtag: ["web-programming"],
    tech: ["Typescript", "Python", "Streamlit"],
    link: "https://github.com/lit26/streamlit-img-label",
    description:
      "streamlit-img-label is a graphical image annotation tool using streamlit. Annotations are saved as XML files in PASCAL VOC format. This tool is mainly used for computer vision preprocessing tasks.",
    time: "Jan 2022 – Feb 2022",
  },
  {
    id: 20,
    projectName: "postman-clone-easy-team",
    img: projectImgUrl20,
    select: ["web"],
    hashtag: ["web-programming"],
    tech: ["Typescript", "Firebase"],
    link: "https://github.com/lit26/postman-clone-easy-team",
    description:
      "This project is an easy postman web app that can be used for frontend and backend to test api endpoints. The app use Google firebase storage to store the requests and history and authenticate users with firebase authentication. Teams can test GET, POST, PUT, PATCH, and DELETE requests with request headers, body, paramsters and authentications securely.",
    time: "May 2022 – May 2022",
  },
];

export const hashtags = [
  { key: "all", text: "All" },
  { key: "ml/ds", text: "Machine Learning / Data Science" },
  { key: "web", text: "Web Development" },
  { key: "python_library", text: "Python Library" },
  { key: "data_viz", text: "Data Visualization" },
  { key: "quant", text: "Quant" },
  { key: "miscellaneous", text: "Miscellaneous" },
];
