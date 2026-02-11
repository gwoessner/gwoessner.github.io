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


## III. L’économétrie et ses outils
L’objectif de ce billet est donc d’expliquer comment les économistes peuvent affirmer que le contrôle des loyers cause une baisse de l’offre de logements disponibles. Or, une branche de l’économie a précisément pour but de mettre en évidence des relations de cause à effet : **l’économétrie**.

### A. L’objectif de l’économétrie
L’outil de base de l’économètre est la **régression linéaire**. L’idée est simple. Si on veut étudier l'impact du contrôle des loyers sur l'offre de logements, on commence par collecter des données sur des dizaines de villes. On place ensuite ces points sur un graphique (en ordonnée l’offre de logements, en abscisse l'intensité de la régulation[^3]) et on trace la droite qui passe « au plus près »[^4] de tous ces points, comme sur la Figure 3 (données fictives). Si la droite descend, l'économètre pourrait être tenté d’affirmer « Plus le contrôle est fort, plus l’offre baisse ».

<div class="container mt-3">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="text-center p-3" style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: inline-block;">
                {% include figure.liquid
                    loading="eager"
                    path="assets/img/blog_pics/econometrie-3.png"
                    class="img-fluid rounded z-depth-1"
                    zoomable=true
                    style="max-width: 400px; height: auto; cursor: zoom-in;"
                %}
                <div class="caption mt-2" style="font-size: 0.9em; color: #666;">
                    Figure 3, données fictives.
                </div>
            </div>
        </div>
    </div>
</div>

On représente cette regression avec l'équation $\text{Offre} = \beta \cdot \text{Regulation}$, et c'est $\beta$ (la pente de la droite de régression) qui quantifie l'effet de la la régulation sur l'offre.

Or, un tel raisonnement serait évidemment faux. Cette régression ne met en évidence qu'une corrélation, pas une causalité. C’est à cause du problème des variables omises. Imaginons que les villes qui mettent en place un contrôle des loyers soient précisément celles qui subissent une démographie explosive. Dans ce cas, ce n'est pas forcément le contrôle des loyers qui « cause » la rareté ; c'est la rareté préexistante qui a « causé » l'adoption politique du contrôle.

On pourrait imaginer faire une régression où on prendrait en compte l’intensité de la régulation et les variables omises (la démographie, et les autres variables auxquelles on pourrait penser) en même temps. On ferait alors ce qu'on appelle une régression multiple, mais le problème de la corrélation demeurerait. En effet, comment être sûr de n’avoir manqué aucune variable omise ? De manière plus générale, comment démontrer une causalité en sciences économiques ?

### B. L’approche structurale

Dans les années 30, les économistes de la Commission Cowles ont développé une première solution au problème de la corrélation : l’approche structurale. L’idée était de partir d’un modèle mathématique décrivant l’ensemble du système économique étudié. Par exemple pour le marché du logement ils pourraient écrire[^5]

$$\text{Demande} = \beta_1 \cdot \text{Loyer} + \beta_2 \cdot \text{Revenus}, \text{la demande dépend du prix du logement et des revenus de la population}.$$
$$\text{Offre} = \beta_3 \cdot \text{Loyer} + \beta_2 \cdot \text{Coûts}, \text{l'offre dépend du prix du logement et des coûts de construction}.$$

On aimerait bien connaitre $\beta_3$, qui représente la façon dont l’offre réagit à un changement de prix. Le problème est qu'une régression classique ne peut pas estimer directement ces paramètres. En effet, le prix et l'offre s'influencent mutuellement : si une ville lance de grands travaux immobiliers, l’offre grimpe, ce qui fait baisser les loyers. Ici, c'est l'offre qui cause le prix, et non l'inverse. 

Pour résoudre ce problème on utilise le fait qu’au prix d’équilibre l’offre et la demande sont égales. Un simple calcul nous donne $\text{Loyer} = \pi_1 \cdot \text{Revenus} + \pi_2 \cdot \text{Coûts}$. Dans cette equation, tout est "propre" : le revenu et les coûts de construction sont des variables qui viennent de l'extérieur du système et qui ne dépendent pas du prix. On peut donc utiliser une régression classique pour obtenir les coefficients $\pi_1$ et $\pi_2$.




## Notes de bas de page

[^1]: Certains économistes rejettent ces lois au motif qu’elles seraient mathématiquement incohérentes, reposeraient sur des hypothèses absurdes, et seraient infalsifiables. Ces critiques ne me semblent pas tenir, mais je développerai ces points dans un futur billet.

[^2]: Ces lois sont parfois critiquées car elles ne semblent pas tenir compte des pénuries organisées ou des ententes sur les prix. S’il est vrai que les cartels existent, le modèle de base ne cherche pas à décrire toutes les dérives, mais à isoler un mécanisme fondamental : celui de la concurrence pure et parfaite. Sous cette hypothèse, toute tentative d'une ou plusieurs entreprise de maintenir un prix artificiellement haut crée une opportunité de profit pour un nouveau concurrent. Ce dernier entrera sur le marché pour répondre au besoin, capturer la clientèle et, mécaniquement, ramener le prix vers son niveau d'équilibre.

[^3]: Cette intensité peut être rendu objective : par exemple en prenant l’écart entre le loyer moyen du marché et le plafond légal imposé, ou encore la part du parc locatif effectivement soumise à la loi. De même pour la notion d'offre.

[^4]: Le terme « au plus près » a un sens mathématique précis, pour en savoir plus voir [méthode des moindres carrés](https://fr.wikipedia.org/wiki/M%C3%A9thode_des_moindres_carr%C3%A9s).

[^5]: C'est bien sûr un exemple simple pour expliquer les mécanismes en jeu au lecteur, pas un modèle tiré de la recherche économique.
