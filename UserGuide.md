User Guide for NodeBB Team Wooshiland Features

Overview of Features

In this sprint, we developed two new features for NodeBB. First, we created the ability to post as a anonymous user and we also create an Office Hours Queue Page on NodeBB to be used by teaching staff and students.

Installation

Have NodeBB repository and the Team Wooshiland frontend repository downloaded on your local machine and running on your local host port.
See instructions here:
Installing NodeBB locally: https://cmu-313.github.io/projects/P1/1_checkpoint/#getting-started
Team Wooshiland Front-end repository: 
Setting up front-end repository: https://docs.google.com/document/d/1HCb6FL6noy3CYv2HG1Ea3ZHHN1uLghwcArk_c2TSrzg/edit?usp=sharing

Features Front-end Testing Step-by-Step

Posting as an Anonymous User
1. Go to the forum you want to post in
2. Click the New Topic Button
3. Add the post (topic title, post content)
4. Click the "Post Anonymously" Button and ensure it is on (button is gray and shows the text "Posting Anonymously")
5. Submit the post

OH Queue
1. Navigate to the left menu bar
2. If the page does not appear intially, please refresh.
3. Click the "helping Hands" icon to go to the OH Queue Page
4. Click the blue "Join Queue" button - you should see yourself added to the queue and the number of people in the queue count should increase.
5. Click the red "Leave Queue" button - you should see yourself removed from the queue and the number of people in the queue count should decrease.

Automated Tests
Testing for OH Queue Controller and Page Route - test/controllers.js
- The main changes have been made in the front end repository, the backend test is used to ensure the page loaded properly.

Testing for User Viewing Permissions - test/posts.js
- In this test, an anonymous post is created, as well as a sample admin user and a sample regular user. This test checks that for the admin user, when they view the anonymous post, they should see the username. In addition, the test checks that when the regular user sees the post, they should only see the username as "Anonymous User".

Testing for Anonymous Data Fields - test/posts.js
- the backend test is used to ensure that the anonymous data field exists.


