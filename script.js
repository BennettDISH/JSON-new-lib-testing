const activities = [
  {
    "type": "content-heading",
    "heading": "Why AI is so cool",
    "content": [
      "Artificial intelligence (AI) is a field of computer science that focuses on creating machines that can perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and language translation. The ability of machines to learn from data, improve over time, and make predictions has the potential to revolutionize many industries, from healthcare and finance to transportation and entertainment.",
      "AI can help us solve some of the biggest challenges facing humanity, such as climate change, poverty, and disease. By analyzing large amounts of data and identifying patterns and trends, AI can help us make better decisions and take actions that have a positive impact on society.",
      "AI is also driving innovation and creating new opportunities for businesses and individuals alike. From chatbots and virtual assistants to autonomous vehicles and smart homes, AI-powered technologies are transforming the way we live and work.",
      "In short, AI is cool because it has the power to change the world for the better, and we're only scratching the surface of what it can do."
    ]
  },  
  {
    "type": "text-grid",
    "heading": "What Makes a Cool Character?",
    "content": [
      "Their unique personality and traits",
      "Their ability to overcome challenges",
      "Their strength and skill in battle",
      "Their sense of humor and wit",
      "Their mysterious past or hidden agenda",
      "Their loyalty to their friends and allies",
      "Their willingness to take risks",
      "Their confidence and swagger",
      "Their charisma and charm",
      "Their iconic look or outfit"
    ]
  },
  {
    "type": "text-block",
    "heading": "Benefits of Regular Exercise",
    "content": [
      "Regular exercise has numerous benefits for both physical and mental health.",
      "Firstly, it can reduce the risk of chronic diseases such as heart disease, type 2 diabetes, and certain types of cancer.",
      "Exercise also helps to maintain a healthy weight and reduce the risk of obesity, which is a major risk factor for many health problems.",
      "In addition to physical benefits, exercise can also improve mood and reduce symptoms of anxiety and depression.",
      "It can also improve cognitive function and reduce the risk of cognitive decline as we age.",
      "Overall, incorporating regular exercise into your routine can have a significant positive impact on your health and wellbeing."
    ]
  }
  
];

const container = document.querySelector('.container');

activities.forEach(activity => {
  switch(activity.type) {
    case "text-block":
      const textBlock = document.createElement('div');
      textBlock.classList.add('text-block');
      if (activity.heading) {
        const h2 = document.createElement('h2');
        h2.textContent = activity.heading;
        container.appendChild(h2);
      }
      activity.content.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        textBlock.appendChild(p);
      });
      container.appendChild(textBlock);
      break;
    case "text-grid":
      const textGrid = document.createElement('div');
      textGrid.classList.add('text-grid');
      if (activity.heading) {
        const h2 = document.createElement('h2');
        h2.textContent = activity.heading;
        container.appendChild(h2);
      }
      activity.content.forEach(text => {
        const div = document.createElement('div');
        div.classList.add('text-grid-item');
        div.textContent = text;
        textGrid.appendChild(div);
      });
      container.appendChild(textGrid);
      break;
    case "content-heading":
      const contentHeading = document.createElement('div');
      contentHeading.classList.add('content-heading');
      contentHeading.textContent = activity.content[0];
      container.appendChild(contentHeading);
      break;
    default:
      console.log(`Unknown activity type: ${activity.type}`);
  }
});
