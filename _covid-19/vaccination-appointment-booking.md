---
title: Vaccination Appointment Booking
permalink: /products/covid19vaccination
---
![Alt text for image on Isomer site](/images/VaccOps.png)
### Suite of systems built to accelerate vaccination throughput, enabling Singapore to achieve herd immunity against Covid-19



#### Background 

In late December 2020, Singapore commenced its first nation-wide vaccination rollout of the Covid-19 vaccine in phases for our population. Amidst vaccine supply uncertainty, there was a need to match demand and supply of vaccines with precision for different population segments, and across more than 80 vaccination centres island-wide. As this was an exercise of unprecedented scale for Singapore, there was a need to stand up a suite of systems that could support the operation end-to-end in quick time. 
There were a few challenges where technology could help, to support a smooth and effective rollout of the programme:
* The need to phase in demand by mobilising the population based on an order of priority, given availability of the vaccine
* A seamless user experience that would encourage users of all age groups to book, including seniors and other population segments that might be less digitally savvy
* Given the high volume anticipated, any solution will need to withstand exceptionally high traffic
* Public trust is paramount - any solution deployed will need to instil public confidence, and assure people that they will receive vaccines within a reasonable time frame 
* Reduction of no-show rates, by providing timely appointment reminders
* Accurate and consistent record-keeping of who had been vaccinated, with what brand of the vaccine, and when it was effective
* Need for real-time operational awareness for decision support amidst uncertainty



#### Solution

* **Vaccine.gov.sg -** A landing site that provides up-to-date information on the Covid-19 vaccination programme, and directs people to pre-register.
* **[Pre-registration system](http://preregister.vaccine.gov.sg) -** An online form where everyone registers once to be notified via SMS when their turn arrives to schedule appointments. This helps to titrate in demand based on different priority groups and vaccine availability. Every individual pre-registration is authenticated and only pre-registrations from Singapore residents can be successfully submitted. 
* **[National Appointment System (NAS)](http://appointments.vaccine.gov.sg) -** For patients whose turn to book appointments have come, they are sent a unique booking link to book appointments for both doses of the vaccine. The NAS does a few things - it:
	* Authenticates the patient 
	* Conducts a demographic and medical triage to ascertain that patient is medically fit to be administered the vaccine, and collects informed consent 
	* Directs the patient to secure two doses, 28 to 56 days apart, at their preferred vaccination site and preferred time slots
	* Shows which clinics have a shorter waiting time, to optimise matching of demand and supply
	* Sends a confirmation SMS with appointment details once both appointments are secured 
	* Sends appointment reminders via SMS to reduce no-show rates
	* Allows patients to cancel or reschedule their appointments 
* **Proxy booking system -** To ensure that less digitally savvy segments of the population can also access vaccines easily, we built a proxy booking system used by volunteers from People’s Association and Silver Generation Office to book appointments for seniors at Community Centres, or via house visits. 
* **Clinic administration system -** A clinic administration system is deployed across all 80 vaccination centres, polyclinics, and public health preparedness clinics (PHPCs) for tracking of daily appointments, patient rescheduling, and registration of walk-in patients. This enables vaccination centres to plan ahead for logistics and resupply, and helps patients without prior appointments to secure appointment slots for their second dose at point of a walk-in appointment (currently available for seniors).
* **Vaccination records -** Once the vaccination has been completed, records are validated to ensure that data is consistent, complete, and securely stored. Business logic is applied on these records to derive an accurate  vaccination status. Downstream systems such as TraceTogether and HealthHub are therefore able to pull vaccination statuses for display on their frontends.
* **Command-and-Control (C2) system -** For a complex mission with many moving pieces like a national vaccination rollout, decisions need to be guided by timely data. To enable data analysts and policymakers to monitor take-up across population segments and vaccination sites, we built a C2 system to provide an accurate and real-time read of the ground situation, and to better optimise demand and supply for vaccines. 



#### Impact

* Accelerated national rollout of Covid-19 vaccinations by facilitating the booking of 7 million appointments:
	* 80% of Singaporeans aged 12-39 have booked 
	* 73% of eligible persons aged 40-44 have booked 
	* 78% of eligible persons aged 45 to 59 have booked
	* 76% of eligible seniors aged 60 and above have booked
* Administered around 5.5 million doses of Covid-19 vaccine. A total of 2.1 million people have received their second dose and completed the full vaccination regimen.


#### Team

Chan Chi Ling <a href="https://github.com/chilingchan " style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Chong Zixin <a href="https://github.com/chongzixin" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Christabel Neo <a href="https://github.com/christabelneo" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Christabel Png <a href="https://github.com/belpng" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Foo Yongiie <a href="https://github.com/yong-jie" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Ian Chen <a href="https://github.com/pregnantboy" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Jackson Yap <a href="https://github.com/jacksonOGP" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Jean Tan <a href="https://github.com/jeantanzj" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Jessica Emily <a href="https://github.com/jessicaemily" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Lau Kar Rui <a href="https://github.com/karrui" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Leonard Loo <a href="https://github.com/leonardloo" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Li Hongyi <a href="https://github.com/fynyky" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Loh Li Wei <a href="" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Pallani Kumaran <a href="https://github.com/pallani" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a>| Preston Lim <a href="https://github.com/prestonlimlianjie" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a>| Seah Chin Ying <a href="https://github.com/chinying" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a>| Talitha Chin <a href="https://github.com/talithachin" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a>| Yixin Ang <a href="https://github.com/artylope" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Yong Kai Yi <a href="https://github.com/theMogget" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Suhaili Roslan<a href="https://github.com/sraelynn" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a>

#### Product Support Volunteers Team
Esther Wang <a href="" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Russell Chan <a href="https://github.com/russellwashere" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Samuel Koh <a href="" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a> | Sarah Espaldon <a href="https://github.com/cakesoccer" style="display: inline-block; width: 24px; height: 24px; margin-bottom: -5px; margin-left: 10px;">
    <img border="0" alt="Github account" src="/images/Github-Mark-32px.png">
</a>