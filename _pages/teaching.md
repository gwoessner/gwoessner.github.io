---
layout: page
permalink: /teaching/
title: Enseignement
description: Mes documents de cours.
nav: true
nav_order: 1
---

Ces ressources sont à disposition de tous. La dernière date où les documents ont été utilisés -et donc où je peux garantir qu'ils sont à jour- est spécifiée.

Seuls les .pdf sont mis en ligne. Pour recevoir la version LaTeX qui les a générés, ou pour me prévenir de toute erreur ou autre, vous pouvez me contacter à [prenom]@[nom].ovh.


{% for course in site.courses %}
  <div>
    <h2><a href="{{ course.url }}">{{ course.title }}</a></h2>
    <p>{{ course.description }}</p>
  </div>
{% endfor %}
