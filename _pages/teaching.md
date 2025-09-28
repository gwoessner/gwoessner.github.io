---
layout: page
permalink: /courses/
title: Enseignement
description: Mes documents de cours.
nav: true
nav_order: 1
---


{% for course in site.courses %}
  <div>
    <h2><a href="{{ course.url }}">{{ course.title }}</a></h2>
    <p>{{ course.description }}</p>
  </div>
{% endfor %}
