// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsUrl = 'https://lambda-times-backend.herokuapp.com/topics';
let topicsEl = document.querySelector('.topics');

axios.get(topicsUrl).then(res => {
  let topics = res.data.topics;
  topics.forEach(topic => {
    topicsEl.appendChild(buildTab(topic));
  });
});

function buildTab(topicContent) {
  let topicEl = document.createElement('div');
  topicEl.classList.add('tab');
  topicEl.textContent = topicContent;
  return topicEl;
}
