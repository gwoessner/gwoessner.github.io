---
layout: page
permalink: /teaching/
title: Enseignement
description: Mes documents de cours.
nav: true
nav_order: 1
---

Ces ressources sont à disposition de tous. La dernière année où les documents ont été utilisés -et donc où je peux garantir qu'ils sont à jour- est spécifiée. Si vous êtes un de mes élèves : malheureusement les contrôles d'un cours que je suis en train d'enseigner ne sont pas disponibles tant que je ne les ai pas donnés.

Pour tout complément d'information, ou me prévenir de toute erreur, n'hésitez pas à m'écrire à [prenom]@[nom].ovh.


{% for course in site.courses %}
  <div>
    <h2><a href="{{ course.url }}">{{ course.title }}</a></h2>
    <p>{{ course.description }}</p>
  </div>
{% endfor %}
