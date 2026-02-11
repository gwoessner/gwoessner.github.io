---
layout: post
title: Qu'est-ce que l'économie ? (EN COURS)
date: 2026-02-01 21:00:00
description: Comment les économistes évaluent les politiques de contrôle des loyers ?
tags: economie
thumbnail: assets/img/blog_pics/econometrie-cover.png
toc:
  beginning: true
---

Ce billet se place dans la continuité d’un [billet précédent](www.woessner.ovh/blog/epistemologie), où je défendais l’idée que la seule manière de savoir si une discipline pouvait être qualifiée de scientifique était d’analyser en détail si les raisonnements justifiaient véritablement les théories avancées, et si les critiques étaient évaluées et prises en compte. 
Pour ce faire, j’ai choisi d’étudier comment les économistes évaluent les effets des politiques de contrôle des loyers.


## I. Un exemple récent
Avant de se plonger dans la littérature, je propose de se pencher sur deux pays qui ont appliqué des politiques sur le logement radicalement différentes dans les dernières années.
[À Buenos Aires](https://www.cronista.com/negocios/murio-la-ley-de-alquileres-ya-se-duplico-la-oferta-de-departamentos-en-caba-y-caen-los-precios/), la loi de contrôle des loyers en vigueur depuis 2020 a été abrogée fin 2023 par décret, et dans l’année qui a suivi l’offre locative disponible a explosée, certaines estimations allant jusqu'à [une multiplication par 12](https://lecourrier.es/rozados-loffre-locative-en-argentine-a-ete-multipliee-par-plus-de-12-apres-labrogation-du-controle-des-prix/?utm_source=chatgpt.com), ce qui a contribué à rééquilibrer le marché locatif après une période de pénurie. [En Catalogne](https://www.eleconomista.es/vivienda-inmobiliario/noticias/12768461/04/24/primer-impacto-del-control-del-alquiler-en-cataluna-la-oferta-de-vivienda-cae-un-14-y-el-precio-sube-un-46-en-barcelona.html), l’entrée en vigueur en 2024 d’un plafonnement des loyers dans les zones de marché tendu a été associée à une réduction allant jusqu’à 13 % du stock de logements disponibles à la location permanente dans certains cas et des signes que des propriétaires retirent des biens du marché locatif classique.
Pour un analyse de la situation en France, je ne ferais pas mieux que Vincent Benard dans [son article](https://contrepoints-archives.org/controle-des-loyers-vers-un-desastre-locatif-a-paris/) et [le thread](https://x.com/vbenard/status/1127614917199134722) qu’il en a tiré, que je conseille fortement au lecteur.





## II. Les bases théoriques

Pour commencer, il est fondamental d’aborder le cœur de la théorie économique moderne, la Loi de l’offre et de la demande. Elle s’articule en 3 parties.

<ul class="simple-highlight-list">
  <li><strong>La Loi de la Demande :</strong> quand le prix d'une marchandise augmente, sa demande diminue.</li>
  <li><strong>La Loi de l'Offre :</strong> quand le prix d'une marchandise augmente, son offre diminue.</li>
  <li><strong>Le Prix d'équilibre :</strong> le prix de la marchandise est celui qui équilibre l’offre et la demande.</li>
</ul>

Ces lois sont résumées dans la Figure 1. On voit qu’elles semblent plutôt raisonnables[^1], rares sont ceux qui vont acheter plus de pâtes lorsque leur prix augmente ! De même, plus élevé est le prix (et donc le profit), plus nombreux sont les acteurs à investir sur le marché. Enfin, on comprend la 3è loi avec la Figure 2, c’est la situation optimale pour les deux parties, celle où il y a le plus d’échanges[^2].


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_pics/econometrie-1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_pics/econometrie-2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A gauche la Figure 1, à droite la Figure 2.
</div>

On voit alors l’effet d’un plafonnement des prix sur la Figure 3. A ce niveau de prix, il y a moins d’offre que de demande, et on a **une conséquence principale : la pénurie de logements à louer**. Or, cette dernière, déjà délétère en soi, peut avoir d’autres conséquences qui vont à l’encontre des objectifs des défenseurs du contrôle des loyers. Moins de logements sur le marché pourrait augmenter le nombre de sans-abris. Des familles pourraient renoncer à leur désir d’enfant faute de pouvoir se loger dans plus grand. Des étudiants seraient impactés dans leurs études par un logement trop éloigné de la ville. Les propriétaires pourraient moins facilement entretenir et investir dans leurs logements, en baissant la qualité. Et le plus paradoxal pour une politique défendue par la gauche : les gens les plus pauvres ne trouveraient pas de logement, mais les gens plus riches, déjà dans un logement à leur convenance, bénéficieraient d’un loyer au rabais.

Du point de vue de la société on peut citer d’autres effets négatifs. Une telle mesure générerait de la bureaucratie qui ont un coût sur les finances publiques. La construction serait découragée. La mobilité des gens seraient entravée, les travailleurs pouvant moins facilement se loger là où le travail existe, provoquant une baisse de l’activité économique.

Toutes ces conséquences et bien d’autres sont envisagées et étudiées par les économistes. On en trouvera une liste plus exhaustive et une revue de la littérature [ici](https://www.diw.de/de/diw_01.c.833179.de/publikationen/roundup/2022_0139/rent_control_effects_through_the_lens_of_empirical_research.html#:~:text=controlling%20housing%20rents%20and%20to,impacting%20both%20landlords%20and%20tenants). Dans ce billet, je propose de me restreindre à l’impact du plafonnement des loyers sur l’offre de logements, en exposant et analysant les outils que les économistes utilisent pour évaluer cet impact.



## Notes de bas de page

[^1]: Certains économistes rejettent ces lois au motif qu’elles seraient mathématiquement incohérentes, reposeraient sur des hypothèses absurdes, et seraient infalsifiables. Ces critiques ne me semblent pas tenir, mais je développerai ces points dans un futur billet.

[^2]: Ces lois sont parfois critiquées car elles ne semblent pas tenir compte des pénuries organisées ou des ententes sur les prix. S’il est vrai que les cartels existent, le modèle de base ne cherche pas à décrire toutes les dérives, mais à isoler un mécanisme fondamental : celui de la concurrence pure et parfaite. Sous cette hypothèse, toute tentative d'une ou plusieurs entreprise de maintenir un prix artificiellement haut crée une opportunité de profit pour un nouveau concurrent. Ce dernier entrera sur le marché pour répondre au besoin, capturer la clientèle et, mécaniquement, ramener le prix vers son niveau d'équilibre.
