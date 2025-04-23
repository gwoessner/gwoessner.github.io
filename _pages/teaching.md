---
layout: page
permalink: /teaching/
title: Enseignement
description: Mes documents de cours, à disposition de quiconque le souhaiterait. La dernière date où les documents ont été utilisés -et donc où ils sont à jour- est spécifiée.
nav: true
nav_order: 1
---

Voici les cours que j'enseigne :

{% for course in site.courses %}
  <div>
    <h2><a href="{{ course.url }}">{{ course.title }}</a></h2>
    <p>{{ course.description }}</p>
  </div>
{% endfor %}
