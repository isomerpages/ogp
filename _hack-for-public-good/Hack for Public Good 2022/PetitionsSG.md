---
title: PetitionsSG
permalink: /hackathon/2022/petitionssg
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vSFw6QpgwYmcHobOLJ9xHB4xiku19xYwh5AdOfOw4pDLZg1sl2GkLfPk-x-Tmi7LWeDuBilAQxnlkcI/embed?start=false&loop=false&delayms=3000" ></iframe>

Watch our Finale presentation on [YouTube](https://youtu.be/x5DB0eyw2cc)!

#### What is PetitionsSG?
PetitionsSG is a government platform for citizens to push for change that matters, connecting the most important sentiments from the ground to ministries.

#### What motivated you to build this product?
We conducted almost 50 user interviews with residents in Singapore and members of NGOs in Singapore where we saw one common theme: an increasing feeling of disconnection between people and government. These were due to four pain points in our user interviews:

1.  Afraid of speaking out due to potential repercussions: Most Singaporeans are afraid of speaking out or supporting concerns for fear of having their personal or professional life affected.

2. No assurance of reply from the government: There are no existing platforms where citizens can have an assurance that they will be heard and provided with a follow up. The usual channels such as writing to ministries would at most garner a “thank you for your feedback”.

3. Conversations with government are top down: If there are public feedback sessions, members of the public feel that conversations with ministries are often one way, top-down with ministries posing the questions and proposing policy changes while members of the public only answer – narrowing down the scope of possible responses – with a similar outcome as point 2.

4. Members of the public feel unheard. They don’t feel like the government cares about their sentiment or thoughts

On the other side, in our user interviews with directors in charge of engagement in the ministry, we heard concerns about legitimacy, authenticity, and astroturfing on the large variety of online platforms Singaporeans were using to voice out. 
 
These stories and pain points drove us to create PetitionsSG, a largely self-moderated platform where members of the public could push for change and have their voice heard.

#### What tech stack did you use?
React.js is used for the frontend with Chakra as a styling library. On the backend, we use Nest, a framework built on top of Node.js with an AWS relational SQL database. 
 
To enable authenticity of opinions from members of the public while allowing an anonymity option for signees, we used sgID (an API Open Government Products developed for SingPass) for authentication. This way, we could verify members of the public with SingPass with a unique identifying ID (not NRIC) and only their name – both pieces of data that would not be stored if a member of the public chose to sign anonymously.

#### What were the key challenges you faced in building PetitionsSG? 

##### 1. Designing for assurance
 
The main challenge we faced for design was surrounding the emotional aspect of petitions: ensuring that users felt at ease with initiating petitions and supporting causes they cared about.
 
The perception of being a government based platform worked both for and against us. Whilst it provided a sense of legitimacy to the platform, users also felt uneasy knowing that the platform was controlled / owned by the government. 
 
The worry was that the government might be able to retrieve the names and information even if a user had selected to stay anonymous, leading to fear that their employability or professional development might be affected.
 
Hesitating to support a petition was a very real concern: some users did not feel comfortable revealing their name as they don’t feel that they are able to support causes openly, especially causes that are more controversial in nature. This led to a lot of self-censorship.
 
At the same time, we heard the need from ministries to get authentic sentiments from citizens and to prevent astroturfing as much as possible. They needed real people, with real identities. 
 
Providing users a choice to remain anonymous when they were signing a petition and convincing users that their identity was protected still remains one of the biggest challenges we face. Educating and explaining to users our efforts to ensure their data remains secure will be a long drawn and ongoing process.
 

#####  2. Engineering for Anonymity
 A user should be able to sign petitions without leaving any digital trace. To achieve this goal, we had to keep a few considerations in mind: 
 
We needed a mechanism to know if a user has already signed a petition, so that there are no duplicate signatures. We wanted to reduce traceability between the user and their signed petitions. 
 
At first blush, these two considerations may seem antithetical – the former requires some degree of transparency into user actions, but the latter requires us to maintain some degree of opacity. To achieve this balance of limited knowledge, we make use of (a) cryptographic hashes and (b) JSON web tokens. These allow Petitions to know whether a user has signed a petition only when they are about to sign a petition; under other circumstances, Petitions will not be able to trace user behaviour.
 
###### Using cryptographic hashes
We generated a unique salt for each petition and hash it together with the user’s sgid (i.e. unique identifying ID generated by sgID).
 
 hashedUserSgid = hash ( petition salt + user sgid )
 
As hashes are a one-way function, it is computationally infeasible to derive the original user sgid from the hashed user sgid. This allows us to know if a user has already signed a petition, while allowing us to retain limited knowledge about the actual user in our database.
 

######  Using JSON web tokens
However, it is still possible to trace the user’s actions as long as we have access to both the salt and sgid (e.g. brute force dictionary search). This means that we cannot have a permanent user table that stores sgid anywhere in the database. 
 
JSON web tokens (JWT) work by providing the client (i.e. users) with a set of credentials that are cryptographically signed by the server (i.e. Petitions). The client will use this JWT as a proof of identity to make authenticated requests to the server, thus allowing them to sign petitions with their verified identities. Throughout these transactions, Petitions does not store these JWTs, thus ensuring that our databases have zero-knowledge about the raw user sgid.
 

#####  3. Ministry Engagement
 
 When we brought up the petitions platform to ministry officials, a few of them would respond with the rebuttal: “but the Singapore government does not rule by numbers”. It was a challenge of framing and communication to make sure the petitions platform was not seen as enabling “rule by numbers” but a platform that would connect the most important sentiments to ministries to work towards a better Singapore.

 Furthermore, it is challenging navigating bureaucratic processes and stakeholders in government to drive this idea forward as it could be seen as politically sensitive in Singapore’s context.
 
Currently, we’re exploring collaborations with the engagement divisions in the Ministry of Culture, Communications, and Youth as well as the Ministry of Communication and Information working out a final product that would enable us to move forward with key decision makers.

#### What is the product vision for PetitionsSG? 
Our vision is for this platform to connect sentiments from members of the public to ministries, bridging people and government. A platform that would empower members of the public to speak up and advocate for a better future in a more inclusive process with the government.
 
 In the future, we hope that this can be a platform that enables digital petitions with very significant support to be debated in parliament, further encouraging Singapore’s civic participation landscape.
 
 Our hope is that this platform can bring about a greater sense of empowerment, engagement, and inclusion in Singapore among members of the public to work towards a better Singapore.

#### Fun facts!
**An interesting finding:**

**An increasing need for a more inclusive and open government**
 
Most of the Singaporeans we interviewed, especially the younger generations, wanted a more inclusive civic participation landscape in Singapore. There was a consistent theme that material needs were not enough; people need to feel heard and cared by the Singapore government. 
 
**An “Us and Them” mentality we had to reframe**
 
Our conversations with people working in government showed that there were worries that this platform could encourage citizens to be against the government openly. Surprisingly, citizens saw it differently – they perceived the platform as a step forward for Singapore, seeing hope in a more collaborative process to tackle the more complex issues that Singapore faces and would face. 

**One thing you'd have done differently:**\\
Either get more stakeholders on board and refine requirements before building, or figure out a way forward without having to navigate the bureaucracy so we can launch then slowly gather ministry stakeholder buy-in.

**Takeaway/learnings:**\\
Through our chats with petition creators, we really felt their passion and conviction to the cause they were petitioning for and the struggles they had to go through such as garnering support for niche causes, having to craft a sound petition whilst having challenges with their command of English and more. 
 
We also learned about ministry concerns around anonymous comments and are working to find the right balance between the safety anonymity provides and the increased authenticity by having a person’s name down.

![PetitionsSG product demo image](/images/petitionsg-snapshot.jpeg)