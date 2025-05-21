---
permalink: /tabs
---
<script>
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      this.classList.add('active');
      document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
  });
});
</script>
<style>
.tabs {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px solid var(--primary-color);
  margin-bottom: 1rem;
  list-style: none;
  padding-left: 0;
}

.tab-button {
  background-color: var(--parchment-light);
  border: 1px solid var(--primary-color);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 1rem;
  margin-right: 5px;
  margin-bottom: -2px;
  padding: 0.5rem 1rem;
}

.tab-button.active {
  background-color: var(--primary-color);
  color: white;
}

.tab-content {
  display: none;
  background-color: var(--parchment-light);
  border: 1px solid var(--primary-color);
  border-top: none;
  border-radius: 0 0 4px 4px;
  padding: 1rem;
}

.tab-content.active {
  display: block;
}
</style>

<div class="tab-container">
  <ul class="tabs">
    <li><button class="tab-button active" data-tab="tab1">Tab 1</button></li>
    <li><button class="tab-button" data-tab="tab2">Tab 2</button></li>
    <li><button class="tab-button" data-tab="tab3">Tab 3</button></li>
  </ul>

<div id="tab1" class="tab-content active">

    
# Slide A

# Navigate

<span style="color:#304852">Even when you cannot prevent a collision\, braking can help slow your car down before it collides with another car\.</span>

<span style="color:#304852"> __With your class__ </span>

<span style="color:#304852">How will the speed of a vehicle at the moment of first contact in a collision affect the outcomes?</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_0.png)

---

Navigate. Display slide A. Say, Even when you can’t prevent a collision, braking can help slow your car down some before it collides with another car. How do you predict the speed of your vehicle at the moment of first contact in a collision will affect the outcomes? 

Give students half a minute to consider the question on their own and then ask for ideas. Accept all responses. Some anticipated student responses include:
It will be more severe if you don’t slow down.
There will be more damage to the car if you don’t slow down, and less if you do.
There will be a higher chance of injury (or death) to the person the faster you are going.
Maybe it depends on how fast the other car is moving too.
The car that is moving faster will have more (kinetic) energy and therefore more energy will be transferred to all parts of the system (all car parts and all people).

Navigate to looking at a scale model of the system. Say, We can’t use real cars to test out all our ideas. But we can use a model of a system of two cars that has been scaled down. Some people call these carts, because they do not have engines. They have to be pushed, like a shopping cart.

# Slide B

# Analyze Data

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_1.png)

<span style="color:#304852">Make some initial observations of what happens when two carts collide together in three different collisions\.</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_2.png)

---

Make initial observations. Display slide B. Say, Let’s take a look at a short video showing three different collisions between two carts and see what we notice happening as a result of the collision in each case. Show video. Students may feel that the videos went too quickly. Do not spend time replaying them right now, rather validate students' complaints, and ask them to describe what they noticed happened to the speed of each cart. Take under two minutes for this brief discussion. See the prompts in the teacher guide for support.

# Slide C

# Construct Initial Explanations

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_3.png)

<span style="color:#304852">What is happening during these collisions that is </span>  <span style="color:#304852"> _causing_ </span>  <span style="color:#304852"> the yellow\-green cart \(left\) to slow down and the blue cart \(right\) to speed up?</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_4.png)

<span style="color:#304852">Be ready to share your ideas with the whole class\.</span>

---

Share Initial Explanations. Display slide C. Give students 1 minute to discuss the question on the side with a partner (in the prompt response table below). After 2 minutes, discuss this question as a class for another 2 minutes to generate a few different initial ideas. See the prompts in the teacher guide for support.

Connect to student sense making from their prior unit. Say, We’ve heard a few different ways we could try to explain what is causing the changes occuring in the system. Many of these are similar to the ways in which we attempted to explain other types of phenomena in our previous unit, [material:pf.n]. In that unit we developed a model that showed how energy transfer from one object/system to another was the result of force interactions. 

Reference the M-E-F triangle . Remind students that we developed this M-E-F triangle in our prior unit ([material:PF.n]). Ask for a quick show of hands about which perspective might be helpful for thinking about collisions. 

Discuss the time scale over which these interactions appear to be happening. Use the following prompt to elicit student ideas. See the prompts in the teacher guide for support.

Say, Since we are claiming that the carts make contact for a relatively brief period of time during a collision, let’s consider a forces perspective and think about how the contact forces between the two cars during that time could help explain the outcomes we observed. 

# Slide D

# Make Predictions

<span style="color:#304852"> __With your class__ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_5.png)

<span style="color:#304852"> __Take a poll:  __ </span>  <span style="color:#304852">If we could measure the contact force\(s\) between the carts during the collision how would we expect they would compare?  </span>

<span style="color:#304852">Only cart A would be pushed on by the other cart\.</span>

<span style="color:#304852">Only cart B would be pushed on by the other cart</span>

<span style="color:#304852">Both carts A and B would be pushed on\, but the strength of the forces on each would be different\. </span>

<span style="color:#304852">Both carts A and B  would be pushed on\, and the strength of the forces on each would be the same\. </span>

---

Make Predictions. Display slide D. Say, Let’s make some predictions about how the forces would compare on both carts during the brief period of time contact occurs during the collision. Read the question for the poll and all four possible responses. 

Only cart A would be pushed on by the other cart.
Only cart B would be pushed on by the other cart
Both carts A and B would be pushed on, but the strength of the forces on each would be different. 
Both carts A and B  would be pushed on, and the strength of the forces on each would be the same. 

Give students half a minute to consider what their own response would be on their own. Then take the poll as a class.
You will likely find that the majority of responses are either for predictions #3 or #4, though you may also have a few responses for #2. Use the differences in predictions to emphasize that our different thinking on this is interesting, and that this seems like an important area of competing ideas to resolve in order to make progress on the questions on our driving question board. Suggest that we will need to investigate this further in order to get the data we need to resolve this. 
In the less likely possibility that there is no controversy in predictions, frame the next step as us (as a class) needing to get some evidence to help support our thinking, so we can build evidence based arguments and design solutions related to what we wanted to figure out on our Driving Question Board. 



# Slide E

# Analyze and Interpret Data

<span style="color:#304852"> __With your class__ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_6.png)

_[Watch the short video](https://www.youtube.com/watch?v=oU7cI4sSMbQ&list=PLSLDxqPb5NQmc9aOPrh0SjG_BRiZsVdWA&index=3)_  <span style="color:#304852"> to orient to the how sensors these carts collect force and velocity data before\, during\, and after a collision\. </span>

---

Foreground ideas about scale as a cross-cutting concept. Show slide E. Say, In our prior unit, we discovered that if we observe what is happening in a system at a much smaller or much larger scale then we can directly observe, it helped us see different patterns, which then helped us explain cause and effect relationships for what we could see. In this collision cart system we couldn’t see what was happening during the collision, because of the relatively short time scale over which the carts make contact. Let’s learn more about how different sensors were used in this system to collect force measurements during the collision between the two carts and speed of the carts before, during, and after they make contact. 

Orient to the Detectors Used in the Collision Cart System. Play video. 


# Slide F

# Analyze and interpret data

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_7.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_8.png)

<span style="color:#304852">Annotate your handout to help identify any patterns you notice across the three collisions\.</span>

<span style="color:#304852">Be to share with the whole class\.</span>

---

Prepare to analyze data. Show slide F. Distribute a copy of the handout to each student. Project a digital version of the handout to provide a color reference.

Say, A smaller section of the graphs you saw being produced by the sensors on the carts in the video for collision A, B, and C are included on your handout. These graphs are all for a 0.8 second period of time that includes the data collected from right before, during, and right after the collisions.

Analyze Data with a partner using the prompt on slide F. Encourage students to annotate the handout to highlight any pattern they uncover in the data. Give students 7 minutes for this analysis.  

# Slide G

  </div>

  <div id="tab2" class="tab-content">
    
    What in tarnation is this??
    Why would anyone put this here?
    Who didn't clean up after themselves?
    
  </div>

  <div id="tab3" class="tab-content">
    <h3>Content for Tab 3</h3>
    <p>This is the content for the third tab.</p>
  </div>
</div>




# Analyze and interpret data

<span style="color:#304852"> __With your class__ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_9.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_10.png)

<span style="color:#304852">Summarize the patterns you noticed across the three collisions in this part of the data\.</span>

---

Share patterns noticed as a class. Show slide G. This slide will orient students to discuss the top row of graphs first.




# Slide H

# Interpreting “Negative Force”

<span style="color:#304852"> __Turn and Talk__ </span>

<span style="color:#304852">What does a negative force mean?</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_11.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_12.png)

---

Foreground the opposing values of the forces on each cart. Show slide H. Say, we noticed that the force measured on the green cart is negative and the force measured on the blue cart is positive. Turn and talk quickly, what could a negative force mean? Listen in on a couple of conversations.

After no more than a minute, bring back everyone’s attention and say, I heard some ideas about direction. This difference in sign is related to which direction the force is acting, in other words, what direction the cart is being pushed. The negative sign indicates a force is being applied toward the left, a push to the left, like here  on the green cart, and the positive force is being applied to the right, like this indicating a push to the right on the blue cart. 

Connect to prior work with forces as vectors. Say, This sign helps us think about these forces as vectors. We thought about forces as vectors in our prior unit, [material:pf.n], when we paid attention to the direction of forces on an object sliding down an incline,  as well as the relative strength of those forces. Here the positive and negative signs can help us keep track of which direction the force is acting along a single dimension - the horizontal dimension that the track is oriented in. It is totally arbitrary which direction is positive, but we are sticking with the convention that we use in graphing, that to the right is positive, and to the left is negative.

Review the word magnitude. Say, When scientists compare the relative strength of forces without being concerned about the direction they are in, they will ignore the negative and positive sign associated with the force, and just compare its absolute value. When they compare the absolute value of the force, they refer to that as the magnitude of the force. 

Record the following near the front of the classroom.

Force:
It is a vector quantity; it has size (magnitude) and direction.
magnitude = the absolute value of a quantity (ignoring its direction).
forces acting in opposite directions are assigned opposite signs.

Make an explicit connection to how we can figure out the length of time the carts were in contact from the graph. 

Explain that the subscript indicates first which object is applying the force, and then which object the force is being applied to. Say, We saw some interesting symmetry in these two forces as well as symmetry related to when those forces are applied. Tape this card to the left side of the poster as shown.

Introduce the Δt card. Say, let’s identify a variable to represent the length of time over which the forces are applied as well. Hold up the card (page 2 of the teacher reference). Read the definition on it. 

Say, So in this case delta t represents the difference between the time at which the collision starts and when it ends, which is the duration of the collision. start and the end of the collision, represents a change in or difference in t, or time. Tape this card to the left side of the poster as shown.

Add a large post-it note or half sheet of paper as shown to indicate there was symmetry in these variables on both objects.

Record the following near the front of the classroom:
Δ is a delta symbol. It stands for a change in something or difference in a quantity.

# Slide I

# Analyze and interpret data

<span style="color:#304852"> __With your class__ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_13.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_14.png)

<span style="color:#304852">Summarize the patterns you noticed across the three collisions in this part of the data\.</span>

---

Share patterns in speeds that we noticed as a class. Show slide I.





# Slide J

# Interpreting “Negative Speed”

<span style="color:#304852"> __Turn and Talk__ </span>

<span style="color:#304852">What does a negative speed mean?</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_15.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_16.png)

---

Foreground the difference in signs on the speeds for collision C. Present slide J. Ask students why the initial speed of green is negative before the collision and the blue cart is negative after the collision as well as what that negative sign tells us about the direction it is moving. Students should say it indicates that it is moving in the opposite direction as the other cart or that it is moving to the left, rather than to the right.

Build off students’ ideas to introduce velocity to capture direction and speed. Say, As you suggested the differences in sign indicates the differences in the direction the cart is moving. Negative values indicate movement to the left and positive values indicate movement to the right. Scientists use the term velocity when they think about the speed of an object as a vector. 

Velocity :
It is the directional speed of a object
It is a vector quantity; it possesses magnitude (size) and direction.
Opposite directions are assigned opposite signs.

Replace speed with velocity on the graphs. Have students cross out the labels on the y-axis on all the speed graphs of the carts on the handout and replace the word “speed” with “velocity” to more accurately reflect what is being plotted on those graphs. 

# Slide K

# Recording a Definition of Velocity

<span style="color:#304852"> __On your own__ </span>

<span style="color:#304852">Add entries to your personal glossaries to reflect these ideas\.</span>

<span style="color:#304852">How is </span>  <span style="color:#304852"> _velocity_ </span>  <span style="color:#304852"> different from </span>  <span style="color:#304852"> _speed_ </span>  <span style="color:#304852">? </span>

<span style="color:#304852">How have we expanded on our understanding of </span>  <span style="color:#304852"> _force_ </span>  <span style="color:#304852"> since the last unit? </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_17.png)

---

Present slide K. Record the following near the front of the classroom, and give students a moment to add  new entries to their personal glossaries, for speed, velocity, and force.

# Slide L

# Use Mathematical Thinking

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_18.png)

<span style="color:#304852">Record these on your exit ticket as well as on the bottom of your handout and store your handout in your notebook\.</span>

<span style="color:#304852">Which collision produced the largest velocity change \(ΔV\) for each cart?</span>

<span style="color:#304852">How much did the velocity of each cart change in that collision?</span>

<span style="color:#304852">Be ready to share with the whole class\.</span>

---

Administer an Exit Ticket. Display slide L. Ask students to take a minute to look at their graphs again and determine which collision produced the largest changes in velocity for each cart and how much the velocity of both the carts changed in those collisions. Point out that the symbol shown in the first prompt uses a delta (Δ), which again signifies a change in or difference in a quantity, so in this prompt Δ(V), is shorthand for a difference in v, or a change in velocity. 

Prompt students to record a response to these questions on the bottom of the handout and either collect this as an exit ticket or have students turn in a copy of these responses on a separate sheet of paper as well.




# Slide M

# Use Mathematical Thinking

<span style="color:#304852"> __With your class __ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_19.png)

<span style="color:#304852">Which collision produced the largest velocity change \(ΔV\) for each cart?</span>

<span style="color:#304852">How much did the velocity of each cart change in that collision?</span>

<span style="color:#304852">Be ready to share with the whole class\.</span>

---

Share responses from the Exit Ticket. Display slide M. Distribute the handout, which you collected last class. Ask students to look back at the responses they recorded on the bottom of the page to prepare to share their answers to the questions on the slide. After doing so, have students share out.

Add velocity change cards to the poster. Say, Since we’ve started calculating and comparing the changes in the velocities of the two objects as another way to analyze the outcomes of the collision, let’s add these variables to our poster too. 

Hold up page 3 of the teacher reference. Add the velocity change cards to the poster.  Point out the delta sign again represents a change in the quantity v, which represents velocity.

Establish some initial relationships between the variables on the poster. Ask students to consider how the variables on the left side of the poster appear to be related to the variables on the right side of the poster. Suggest that they look back at the three collisions and rank order them from where the velocity changes were the largest to the smallest and then compare the magnitude of the forces across the duration of the collision. 

# Slide N

# Analyze data

<span style="color:#304852"> __With your class __ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_20.png)

<span style="color:#304852">Rank order the 3 collision them from where the velocity changes were the largest to the smallest</span>

<span style="color:#304852">How do the magnitude of the forces on the carts compare for this ranking?</span>

<span style="color:#304852">Be ready to share with the whole class\.</span>

---

Display slide N, if needed, to prompt this. Give students 1 minute to do this. Then discuss what patterns they noticed. 

Suggest that we make note of this relationship we noticed between the magnitude of velocity changes and the magnitude of the forces. 

Add a large post-it note or half sheet of paper as shown to indicate these variables are positively associated with each other. You will replace this paper later, so tape it to the poster for now.


# Slide O

# Develop Initial Explanations

<span style="color:#304852">In each collision:</span>

<span style="color:#304852">The magnitude \(size\) of the forces on both carts were equal to each other across every point in time\.</span>

<span style="color:#304852">The magnitude \(size\) of the velocity changes for both carts were equal\.</span>

<span style="color:#304852"> __With your class__ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_21.png)

<span style="color:#304852">What is happening during every collision that is causing this symmetry in outcomes?</span>

---

Discuss reasons for symmetry in forces and velocity changes on both carts. Display slide O. Read the top of the slide, to summarize the aspects of symmetry that were previously noted, and make sure everyone agrees with these statements. Then discuss the question on the slide.

Consider further connections to the masses of the carts. Say, if I were to hold the green cart in one hand and the blue cart in another hand, I would feel the same amount of force downward on each hand. Ask students why this would be. Look for students to suggest things like:
They have the same mass
Gravity pulls on them the same amount 
They weigh the same

Mention that we make note that the relationship we are suggesting is related to the masses of both carts are the same.

Add the mass card, from page 1 of the teacher reference to the poster. 

Make Predictions for different mass carts. Ask something like, But what do we predict would happen if we changed the mass of the carts in the system? What, if any, effect would that have on any or all of these other variables on our poster? Let’s individually think about this.



# Slide P

# Make Predictions

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_22.png)

<span style="color:#304852">Record your predictions for the 3 collision listed below on a new sheet for your notebook\.</span>

<span style="color:#304852"> _We will keep the initial velocities of the carts the same as in Collision A and change only the mass of the carts\._ </span>

<span style="color:#304852"> __Collision D:__ </span>  <span style="color:#304852">  we will double the mass of both carts\.</span>

<span style="color:#304852"> __Collision E:__ </span>  <span style="color:#304852">  we will double the mass of the green \(left\) cart but not the blue \(right\) cart\.</span>

<span style="color:#304852"> __Collision F:__ </span>  <span style="color:#304852">  we will double the mass of the blue \(right\) cart but not the green \(left\) cart\.</span>

---

Display slide P. Read through the slide. Give students three minutes to record their predictions in their notebook. 

Share predictions for both collision sets as a class. Discuss these for two to three minutes and accept all responses. 

Use the differences in predictions to emphasize that we have some competing ideas of how forces and changes in the mass and changes in velocity are related to each other in a collision. Suggest that we will need to resolve this in order to make progress on some of the questions on our driving question board. 

In the unlikely event that there is no controversy in predictions, frame the next step as us needing to get some data to help support (or confirm) our thinking, so we can build evidence based arguments and design solutions related to what we wanted to figure out on our Driving Question Board.

Refer to the representation of showing some uncertainty in the relationship students predicted. Add two half sheets of paper to the poster with double headed arrows on them in different colors, and suggest that we include the question “How are these related?” on each.


# Slide Q

# Analyze Data

<span style="color:#304852"> __With A Partner__ </span>

<span style="color:#304852">Watch the </span>  _[video](https://www.youtube.com/watch?v=DXFVadiFb_c&list=PLSLDxqPb5NQmc9aOPrh0SjG_BRiZsVdWA&index=4)_  _[ ](https://www.youtube.com/watch?v=DXFVadiFb_c&list=PLSLDxqPb5NQmc9aOPrh0SjG_BRiZsVdWA&index=4)_  _[of collisions D\, E\, & F](https://www.youtube.com/watch?v=DXFVadiFb_c&list=PLSLDxqPb5NQmc9aOPrh0SjG_BRiZsVdWA&index=4)_

<span style="color:#304852">Analyze the patterns in the related sensor data on the related handout and compare these to collision A\.</span>

<span style="color:#304852">Annotate the handout to help you figure out how changes in mass affected the outcomes of the collision\. </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_23.png)

---

Analyze videos of collision scenarios. Say, We have videos and the related set of graphs from the sensors on the carts from the 3 collisions we just made predictions about for us to analyze. Cue students to take out the handout as a reference document. Display slide Q. Review the directions on the slide. Share the video link with students to watch with a partner as you distribute a copy of the handout to each student.

Give students up to 8 minutes to analyze the data and work with a partner to annotate their handouts to make note of how changes in mass affected the outcomes of the collision.


# Slide R

# Argue from Evidence

<span style="color:#304852"> __With Your Class__ </span>

<span style="color:#304852">How does mass affect the forces on each object in a collision?</span>

<span style="color:#304852">How does mass affect the change in velocity of each object in a collision?</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_24.png)

---

Argue from evidence. Present slide R. Discuss the question on the slide: 
How does mass affect the forces on each object in a collision?
How does mass affect the change in velocity of each object in a collision?

Make it clear to students that we are arguing from evidence, and that your role in the discussion is to press them for evidence from the graphs of the collisions. 

Make a public record of our findings. Suggest that we add our two categories of discoveries to our poster. Say, One finding I heard you noticing was related to collision A, that increases in mass in the system resulted in increases in the magnitude of the forces. Add this summary on a half-sheet paper with an arrow pointing from the masses to the forces and swap it onto the poster over the spot on the left that previously said “How are these related?”

Then summarize the finding related to velocity changes by saying, I also heard you saying that when masses are unequal in a collision the smaller mass changes velocity more than the bigger mass. Add this summary on a half-sheet paper, with an arrow pointing from the masses to the changes in velocity and swap it onto the poster over the spot on the right that says “How are these related?”

# Slide S

# Looking for a Relationship

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_25.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_26.png)

---

Foreground a relationship between mass differences and velocity differences. Present slide S, which has the change in velocity results from collisions E and F.  

Say, In these collisions, the masses of the carts are not equal anymore. The ratio of our masses is no longer 1 to 1. What is the ratio of the masses here again?

 Calculate and record this ratio at the front of the room as shown for collision E and F.

Ask students how this compares to the ratios of the velocity changes for the two carts.  Write this symbolically on the board.

If students already noticed that the change in velocity was twice as large as the larger cart compared to the smaller one, remind them of this noticing. Suggest that we try to calculate the  amount of velocity change for each cart, using the initial and final velocities of both. 

# Slide T

# Looking for a Relationship

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_27.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_28.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_29.png)

<span style="color:#000000">v</span>  <span style="color:#000000">Gi </span>  <span style="color:#000000">=\.79 m/s</span>

__v__  __Gf __  __=\.33 m/s__

__v__  __Bi __  __=0 m/s__

__v__  __Bf __  __=\.92 m/s__

<span style="color:#000000">v</span>  <span style="color:#000000">Gi </span>  <span style="color:#000000">= \.8 m/s</span>

__v__  __Gf __  __=\-\.12 m/s__

__v__  __Bi __  __=0 m/s__

__v__  __Bf __  __=\.46 m/s__

---

Determine the exact values for initial and final velocities. Use slide T to provide the data students need to determine the exact values for initial and final velocities. Have half of the room determine the change in velocity for each cart for collision E and the other half determine it for collison F. Ask students to quickly do the math on their whiteboards to see if the changes in velocity really are double. 

Students should find that when the mass of one object in a collision is double that of the other object, the velocity change of that object is halved (and the velocity change of the smaller object is also doubled). Make sure to point out that this ratio has a negative sign.  Record this ratio at the front of the room as shown.  Ask them about which cart had a decrease in velocity in collision.  Students should say the green cart in both collision E and F.  Add a negative sign in front of the value of the numerator in collision to indicate this, and in front of the denominator of collision F to represent.  Then reduce these to the equivalent fractions.

Describe the relationship we discovered between these ratios symbolically. Write the mass ratio again symbolically as shown below.  Write the negative reciprocal of the change in velocity ratio on the other side of the equal side, as shown, asking students how this represents what we saw in the data.  Students should say the fraction for the ratio of the velocity changes is flipped and opposite sign compared to the fraction for the ratio of the masses.

Ask students what we call it when we flip a fraction like this. Students may remember that in math we call this a reciprocal fraction and with an opposite sign in front of it, we refer to it as a “negative reciprocal”. Write “negative reciprocal” at the front of the room in front of the fraction on the right side of the equation.

# Slide U

# Use Mathematical Thinking

<span style="color:#304852"> __Turn and Talk__ </span>

<span style="color:#304852">Based on the patterns we have figured out so far\, what do you predict would happen if the mass of one cart was </span>  <span style="color:#304852"> _five times_ </span>  <span style="color:#304852"> the mass of the other cart and they collided? </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_30.png)

<span style="color:#304852">Be ready to share with the whole class\.</span>

---

Make predictions in a Turn and Talk. Present slide U. Say, If we think this represents what happens when the mass of one object in a collision is doubled, what about other mass ratios? What do you predict would happen if the mass of one cart was five times the mass of the other cart and they collided? Give students a minute to discuss this with their partner. Then share out ideas as a whole class. Students should suggest that the ratio might hold true for other numbers, and that the velocity change of an object in the system will be five times that of the other object. Make sure to press students to identify which object will have the larger velocity change (the smaller mass object).




# Slide V

# Navigate

<span style="color:#304852"> __With your class__ </span>

<span style="color:#304852">What does this relationship predict the outcome would be for a more extreme mass ratio collison?</span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_31.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_32.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_33.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_34.png)

<span style="color:#000000"> _20 kg 	         20\,000 kg_ </span>

<span style="color:#304852">Be ready to share with the whole class\.</span>

---


Make connections to a real world collision scenario. Present slide V. Point to the equation on the slide, that we also have recorded at the front of the room. Ask, What does this equation mean in real life? Let’s see whether we think it has any application to a more extreme mass ratio situation. Push students to make connections to real life by grounding their understanding in a scenario, like the big truck and the shopping cart. Say, A big truck is approximately 20,000 kg and a shopping cart is approximately 20 kg.  So the truck has  1000 times the mass of a shopping cart. If the truck is coasting along at a constant velocity and hits a stationary shopping cart, does that mean that the shopping cart will really undergo a change in velocity that is 1000 times larger in magnitude than that of the truck?

Accept all ideas here. Some students may argue that it should because it matches the patterns we have seen so far. Some students may not be convinced, since it seems hard to believe. If there is disagreement here, highlight it, saying something like  It sounds like we are going to need more data in order to resolve this.  If there is consensus, say, It sounds like we think this relationship is going to hold even for these extreme scenarios. 

Motivate the need to test even more scenarios. Ask, And what about situations where we aren’t changing just mass ratios. Our empirical evidence is pretty limited right now. All we have different mass related data for is for collision E and F, both of which had one object that was moving initially and one that was stationary initially. What if both the objects are moving? What if they don’t bounce off each other, and instead they stick together, which is considered an “inelastic” collision?   Ask, Can you think of a collision where you’ve seen two things collide and they stuck together instead of bouncing off each other? Accept all ideas.





# Slide W

# Navigate

<span style="color:#304852"> __With your class__ </span>

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_35.png)

![](p3l3_images%5C00%20P3%20Lesson%204%20Slides_36.png)

<span style="color:#304852"> __Take a poll:__ </span>  <span style="color:#304852"> is there a similar mathematical relationship between the masses and the changes in velocity for two objects in any of these other collision conditions?</span>

---

Take a quick poll.  Display slide W.  Accept all responses, again emphasizing either areas of controversy or the need for additional data to support a prediction we are largely in agreement on.

Introduce the idea of using a simulation next time to explore this question further. Say, I do have a sim that we can use next time that will allow us to explore whether this relationship holds for any of these  other collision conditions we’ve been considering and/or determine what limitations it might have.






