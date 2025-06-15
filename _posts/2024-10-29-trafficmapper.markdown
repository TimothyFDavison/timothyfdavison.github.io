---
layout: post
icon: "/assets/trafficmapper.jpg"
title: "Traffic Mapper"
date: 2024-10-29 12:00:00 -0400
categories: [projects, tools]
---
## Traffic Mappper
Washington, D.C. traffic is notorious. This is a quick script I threw together to make my daily commute just a little 
bit less hellish. 

The idea is that I'll use the Google Maps API's free tier plus SMTP to monitor traffic conditions 
and shoot myself a notification if traffic is looking worse than usual, i.e. if there was an accident on 495. Then I 
can make plans accordingly, i.e. work out at my office's gym to let the traffic die down before my commute home.

### Overview
The script is built on two APIs: Google Maps and Gmail. I use the former to check traffic estimates, and the latter 
as part of an SMTP setup to auto-generate texts and emails to myself. I store my API keys and personal information as
environment variables, so it should be pretty quick to deploy if anyone else wants to try the scripts out.

I'm thinking of tracking traffic estimates over time and at various periods of the day, then conducting some aggregate 
analysis to find optimal departure times (if there is such a thing). Then also running the script via `cron` to 
catch myself before leaving if traffic looks bad on a given evening.


### Code
All code can be found on my Github [here](https://github.com/TimothyFDavison/Traffic-Mapper).
