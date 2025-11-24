---
layout: page
icon: "/assets/trafficmapper-purple.png"
title: "Traffic Mapper"
---
## Traffic Mappper
I spend a lot of time in traffic. That's Washington, D.C. for you. 

So, I used the Google Maps API's free tier plus SMTP to monitor traffic conditions 
and shoot myself a notification if traffic is looking worse than usual, i.e. if there was an accident on 495. 

I also conducted a longitudinal study on my daily route's traffic patterns. I set up a `cron` job on my Raspberry Pi 
to ping Google Maps every 30 minutes for traffic estimates to and from work, then store estimates in a database. 
Over the course of ~3 months I collected roughly 4,000 entries.

### Visualizations
The very first thing I did was bucket and visualize the traffic pattern data using a heatmap. The following graphic 
tracks average commute time (in minutes) from my home to my work, and from my work to my home, over
a 24-hour period and each day of the week.

|                      ![](/assets/heatmaps.png)                      |

I then explored the distributions of each day's traffic, looking into percentiles, means, medians, variance. A sample
is shown below for Monday, displaying percentile-based shading for upper and lower bounds on the traffic 
distribution. 

<div style="display: flex; gap: 10px; justify-content: center; align-items: flex-start;">
    <img src="/assets/htw-shaded-line.png" alt="Average traffic pattern A" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
    <img src="/assets/wth-shaded-line.png" alt="Average traffic pattern B" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
</div>
<br/><br/>

When comparing several days at once, I experimented with mapping medians (solid lines) against means
(dotted lines) and color-coding by day. I omitted the legend, for simplicity. 

<div style="display: flex; gap: 10px; justify-content: center; align-items: flex-start;">
    <img src="/assets/htw-multilines.png" alt="Average traffic pattern A" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
    <img src="/assets/wth-multilines.png" alt="Average traffic pattern B" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
</div>
<br/><br/>

Then, I just started having fun with ways to combine and represent the information. First, I threw together 
graphics comparing the distributions via density ridges,

<div style="display: flex; gap: 10px; justify-content: center; align-items: flex-start;">
    <img src="/assets/htw-topo.png" alt="Average traffic pattern A" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
    <img src="/assets/wth-topo.png" alt="Average traffic pattern B" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
</div>
<br/><br/>

And later put together scatterplots and LOESS curves.

<div style="display: flex; gap: 10px; justify-content: center; align-items: flex-start;">
    <img src="/assets/htw-dots.png" alt="Average traffic pattern A" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
    <img src="/assets/wth-dots.png" alt="Average traffic pattern B" style="width: 48%; height: auto; object-fit: contain; margin-bottom: 0;">
</div>
<br/><br/>

I'm really just shuffling around the same information, and not really using the data to uncover new insights. But I 
enjoyed playing around with the presentation. And even basic data visualization 
highlighted obvious peaks, troughs, and trends for traffic change over time.

### Traffic Notifications and Anomaly Detection
My alert script is built on two APIs: Google Maps and Gmail. I used the former to check traffic estimates, and the 
latter as part of an SMTP setup to auto-generate texts and emails to myself. 

I then created a few toy models for time-series analysis of traffic patterns, e.g. comparing a current estimate 
against data from my longitudinal study as a form of anomaly detection. I also looked at creating models for 
what my likelihood was to arrive given a time `T`, as shown below.

|                      ![](/assets/htw-probs.png)                      |

Since the time that I threw this together, I've had a few friends ask me to set up similar
analyses and notifications for them. 
I may one day turn this into a basic (free) service for friends, since it is trivially easy to run. We'll see! 

### Code
All code can be found on my Github [here](https://github.com/TimothyFDavison/Traffic-Mapper). 
