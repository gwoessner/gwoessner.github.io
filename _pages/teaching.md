---
layout: page
permalink: /teaching/
title: Enseignement
description: Mes documents de cours.
nav: true
nav_order: 1
---

Ces ressources sont disponibles pour quiconque le souhaiterait. La dernière date où les documents ont été utilisés -et donc où ils sont à jour- est spécifiée.
Seuls les .pdf sont mises en ligne. Pour avoir la version LaTeX qui les a généré, vous pouvez me contacter à [prenom]@[nom].ovh.


{% for course in site.courses %}
  <div>
    <h2><a href="{{ course.url }}">{{ course.title }}</a></h2>
    <p>{{ course.description }}</p>
  </div>
{% endfor %}
