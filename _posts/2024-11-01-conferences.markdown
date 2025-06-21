---
layout: page
icon: "/assets/conferencemapper-orange.png"
title: "Conference Mapper"
---
## Conference Mapper
I built a widget to scrape the locations of academic conferences and plot them on a map. The idea is that one can 
browse places they would like to travel, then find conferences in those places to attend or apply to. 

My friends in academia, the military, and the medical fields have found this application to be especially useful, 
 as they often travel to conferences as part of their job.

All code can be found on my Github [here](https://github.com/TimothyFDavison/Conference-Mapper). At the time of writing,
the website is live and can be visited [here](https://conference-mapper.com).


### Background
I was inspired to build the Conference Mapper after hearing about my coworker's trip to Paris to attend 
a professional symposium. I, meanwhile, was on my 12th work trip to Fayetteville, NC. Fayetteville has
a charm of its own, but in that particular moment I felt some good-natured envy of my coworker's arrangements. 

Having now built the Conference Mapper, I am delighted to announce that I have been accepted to co-chair a minitrack at
the Hawaii International Conference on System Sciences (HICSS 2026)! My employer has agreed to fund this endeavor.

### Implementation
The website is a full-stack application in four parts: 
- A module which scrapes [WikiCFP](https://www.wikicfp.com/cfp/home) for conference names, dates, and locations,
organized by WikiCFP's categories. 
- A postgres database to receive raw data obtained by the scraper, as well as a set of tables for that data once 
cleaned and processed.
- A Flask API serving as an intermediary between the database and the frontend.
- A React frontend which plots the scraped data and offers filters to the user.

I used `scrapy` to build the scraper and attached it to a cron job running nightly on an AWS EC2 instance. A database 
management script clears out old and de-conflicts incoming conference data. The map frontend is built on `leaflet`, and 
provides interactive markers to show a user a given conference's name, location, dates, and call-for-papers deadline. 
Filters are provided to allow a user to select categories and dates of interest. The system is fully Dockerized and 
can be deployed with a single `docker compose up` command. The system is currently deployed via AWS, although it can 
be run locally quite easily. 

This implementation has a few notable drawbacks. I only source conferences from WikiCFP, so I'm limited to the 
selection offered by that website and to their conference categorization schema. Conferences without listed locations
or whose formatting is incompatible with my scraper's design are dropped from the record. 
I considered extending this system for robustness and to incorporate new data sources, but found that the
proof-of-concept was sufficient for my personal usage. 

### Code
All code can be found on my Github [here](https://github.com/TimothyFDavison/Conference-Mapper).
