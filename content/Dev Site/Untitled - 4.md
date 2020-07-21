---
title: "dev site"
cover: ""
date: "2020-07-10"
tags:
	- project log
	- web development
---
### Projects Page
I'm working on setting up the projects page. Which immediately leads to the question of: how I want to _add_ projects?

Do I want to manually add code to `projects.jsx` every time I create or change a project? Or do I want to use markdown and use graphQL separate the projects from the project logs and blog posts?

I've gone with option two, but that leads to further questions of how to set it up.  I've decided to restore the 'category' field that I eliminated earlier. I'm still not going to set up category pages, at least, not yet. But I can use the category field to identify project pages and treat them completely differently from other content. testing