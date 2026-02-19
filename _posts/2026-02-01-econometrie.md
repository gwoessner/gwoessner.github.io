---
layout: post
title: Qu'est-ce que l'économie ?
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

[À Buenos Aires](https://www.cronista.com/negocios/murio-la-ley-de-alquileres-ya-se-duplico-la-oferta-de-departamentos-en-caba-y-caen-los-precios/), la loi de contrôle des loyers en vigueur depuis 2020 a été abrogée fin 2023 par décret, et dans l’année qui a suivi l’offre locative disponible a explosé, certaines estimations allant jusqu'à [une multiplication par 12](https://lecourrier.es/rozados-loffre-locative-en-argentine-a-ete-multipliee-par-plus-de-12-apres-labrogation-du-controle-des-prix/?utm_source=chatgpt.com), ce qui a contribué à rééquilibrer le marché locatif après une période de pénurie. [En Catalogne](https://www.eleconomista.es/vivienda-inmobiliario/noticias/12768461/04/24/primer-impacto-del-control-del-alquiler-en-cataluna-la-oferta-de-vivienda-cae-un-14-y-el-precio-sube-un-46-en-barcelona.html), l’entrée en vigueur en 2024 d’un plafonnement des loyers dans les zones de marché tendu a été associée à une réduction allant jusqu’à 13 % du stock de logements disponibles à la location permanente dans certains cas et des signes que des propriétaires retirent des biens du marché locatif classique.

Pour une analyse de la situation en France, je ne ferais pas mieux que Vincent Benard dans [son article](https://contrepoints-archives.org/controle-des-loyers-vers-un-desastre-locatif-a-paris/) et [le thread](https://x.com/vbenard/status/1127614917199134722) qu’il en a tiré, que je conseille fortement au lecteur.





## II. Les bases théoriques

Pour commencer, il est fondamental d’aborder le cœur de la théorie économique moderne, la Loi de l’offre et de la demande. Elle s’articule en 3 parties.

<ul class="simple-highlight-list">
  <li><strong>La Loi de la Demande :</strong> quand le prix d'une marchandise augmente, sa demande diminue.</li>
  <li><strong>La Loi de l'Offre :</strong> quand le prix d'une marchandise augmente, son offre augmente.</li>
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

Du point de vue de la société on peut citer d’autres effets négatifs. Une telle mesure générerait de la bureaucratie qui ont un coût sur les finances publiques. La construction serait découragée. La mobilité des gens serait entravée, les travailleurs pouvant moins facilement se loger là où le travail existe, provoquant une baisse de l’activité économique.

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

#### Présentation

Dans les années 30, les économistes de la Commission Cowles ont développé une première solution au problème de la corrélation : l’approche structurale. L’idée était de partir d’un modèle mathématique décrivant l’ensemble du système économique étudié. Par exemple pour le marché du logement ils pourraient écrire[^5]

La demande dépend du prix du logement et des revenus de la population :

$$\text{Demande} = \beta_1 \cdot \text{Loyer} + \beta_2 \cdot \text{Revenus}.$$

L'offre dépend du prix du logement et des coûts de construction :

$$\text{Offre} = \beta_3 \cdot \text{Loyer} + \beta_4 \cdot \text{Coûts}.$$

On aimerait bien connaitre $\beta_3$, qui représente la façon dont l’offre réagit à un changement de prix. Le problème est qu'une régression classique ne peut pas estimer directement ces paramètres. En effet, le prix et l'offre s'influencent mutuellement : si une ville lance de grands travaux immobiliers, l’offre grimpe, ce qui fait baisser les loyers. Ici, c'est l'offre qui cause le prix, et non l'inverse. 

Pour résoudre ce problème[^6] on utilise le fait qu’au prix d’équilibre l’offre et la demande sont égales. Un simple calcul nous donne $\text{Loyer} = \pi_1 \cdot \text{Revenus} + \pi_2 \cdot \text{Coûts}$. Dans cette equation, tout est "propre" : le revenu et les coûts de construction sont des variables qui viennent de l'extérieur du système et qui ne dépendent pas du prix. On peut donc utiliser une régression classique pour obtenir les coefficients $\pi_1$ et $\pi_2$.

L’idée est alors de réécrire l’équation de l’offre par, $\text{Offre} = b_3 \cdot \bar{\text{Loyer}} + b_4 \cdot \text{Coûts}$, où $\bar{\text{Loyer}} = \pi_1 \cdot \text{Revenus}$ est la partie du loyer expliquée uniquement le facteur extérieur du revenu de la population. Ainsi on obtient $b_3$ qui décrit bien comment l’offre réagit à un changement de prix *imposé de l’extérieur*. Si $b_3$ n’est pas nul, on a bien mis en évidence un lien de causalité entre le prix et l’offre de logement ! En particulier on peut quantifier l’impact d’un plafonnement de loyer sur le nombre de logements disponibles.

#### Limites
Cette méthode n'est pourtant pas sans failles, ce qui explique pourquoi elle a parfois perdu du terrain.

<ul class="simple-highlight-list">
  <li><strong>Perte d'information :</strong> En utilisant le prix prédit $\bar{\text{Loyer}}$ au lieu du prix réel, on jette volontairement une grande partie des données. On ne garde que la fraction du prix expliquée par nos variables extérieures (ici le revenu). Si ces variables sont "faibles" et n'expliquent qu'une infime partie du loyer, le modèle devient très imprécis.</li>
  <li><strong>La théorie avant les données :</strong> La méthode ne permet pas de remettre en question le système. Elle supposait que les économistes connaissaient déjà la « vraie » structure du monde et n'utilisaient les données que pour remplir les blancs.</li>
  <li><strong>Complexité :</strong> Passer du réel à l'équation demande de simplifier énormément la psychologie humaine. Comme le dira plus tard la Critique de Lucas, si les gens anticipent les changements de politique, ils changent leur comportement, et les coefficients​ supposés être "fixes" se mettent à bouger, rendant les prédictions caduques. Par exemple, si les propriétaires anticipent une future régulation encore plus stricte dès qu'ils voient la première loi passer.</li>
   <li><strong>Hypothèses fortes :</strong> Le modèle ne tient que si on est certain que le revenu n'influence l’offre que par l'intermédiaire du prix. Si une hausse du revenu influence directement le moral des constructeurs ou facilite l'accès au crédit pour bâtir (indépendamment du prix du loyer), alors le revenu influe l'offre par deux chemins différents et la structure s'effondre.</li>
   <li><strong>Faiblesses empiriques :</strong> Dans les années 60, les modèles structuraux (comme le modèle Brookings qui comptait des centaines d'équations) faisaient consensus. Puis est arrivé le choc pétrolier de 1973. Il y a eu à la fois de l'inflation et du chômage (la stagflation). Ces modèles n'avaient jamais "vu" cela dans les données passées. Ils ont été incapables de prédire la crise ou de donner des solutions. Des modèles statistiques très simples, sans aucune théorie économique (les modèles de séries temporelles de type Box-Jenkins), se sont mis à faire de meilleures prédictions que les modèles géants à plusieurs millions de dollars de la Commission Cowles. Similairement, l’article de LaLonde (1986) a mis en évidence l’incapacité des modèles structurels à identifier correctement des effets causaux.</li>
   </ul>

### C. La révolution de la crédibilité

Pour répondre aux limites que nous venons d'évoquer, une nouvelle école a émergé dans les années 90 et a insufflé ce qu'on a appelé la révolution de la crédibilité (RC). L'idée est de se passer d'un modèle du fonctionnement de l'économie, mais plutôt de chercher directement dans le réel une situation où un "hasard" a créé deux groupes comparables, et de l'analyser avec un outil adapté. L'économètre se comporte alors un peu comme un biologiste en laboratoire. Les trois grandes familles de techniques sont les suivantes.

#### Les variables instrumentales

De manière comparable aux méthodes structurelles, lorsqu'on tente d'estimer l'effet causal d'une variable $X$ (comme le loyer) sur une autre variable $Y$ (comme la demande de logements), un instrument (IV) est une troisième variable $Z$ qui n'influence $Y$ qu'à travers son effet sur $X$. 

En revanche, cette fois-ci l'économètre va utiliser comme variable $Z$ le pourcentage de terrain constructible lié à la topographie de la ville. C'est un choix d'instrument raisonnable pour mesurer la demande car la géographie (pentes, présence de lacs ou de marécages) contraint physiquement l'offre, ce qui fait varier le prix, mais on part du principe qu'elle n'influence pas directement l'envie ou le besoin des gens de se loger. Si le chercheur constate que dans les zones géographiquement contraintes, les loyers sont plus hauts et la consommation de logement baisse, cela peut être considéré comme une preuve que les variations de prix causent réellement un changement de comportement chez les demandeurs. 

La justification est ici ancrée dans une réalité physique locale et ne provient pas d'un modèle général préexistant, ce qui relativise *le problème des hypothèses fortes* évoqué plus haut. Toutefois, *le problème de la perte d'information* demeure : on ne regarde le marché qu'à travers le prisme étroit des contraintes géographiques.

#### Les doubles différences {#DD}

La méthode de la Double Différence (DD) permet le plus souvent d'exploiter des changements politiques. On cherche à comparer un groupe « traité » par une nouvelle règle à un groupe « témoin » qui y échappe. À San Francisco en 1994, une loi a soudainement imposé le contrôle des loyers aux immeubles de moins de 5 appartements, alors que les plus gros immeubles y étaient déjà soumis. En comparant l'évolution du nombre de logements disponibles dans les immeubles de 4 appartements avec celle des immeubles de 5 appartements sur la même période, on peut déduire l'impact net de la législation. Si la construction ou l'entretien chute uniquement pour les petits immeubles après 1994, la loi est désignée comme la cause directe du changement. On appelle ce genre de situation une **expérience naturelle**

Il arrive même que l'expérience soit **pure**, dans le sens où il arrive que il arrive que les chercheurs ou les pouvoirs publics créent eux-mêmes le hasard de toutes pièces pour tester une politique. Le cas le plus célèbre concerne les aides au logement aux États-Unis : comme les fonds sont insuffisants pour aider tout le monde, les autorités attribuent parfois les « vouchers » (bons de réduction de loyer) par tirage au sort. De la même manière, pour tester l'impact du revenu universel, certaines organisations tirent au sort les bénéficiaires parmi une population de volontaires.


#### La régression sur discontinuité

La régression sur discontinuité (RD) exploite les seuils arbitraires fixés par l'administration pour isoler un effet causal. L'idée est de comparer des biens situés de part et d'autre d'une frontière, comme celle des districts scolaires. Deux maisons situées dans la même rue, mais séparées par la limite de secteur d'une école réputée, partagent le même quartier, les mêmes parcs et la même sécurité. La seule différence brutale est l'école où iront les enfants. Le « saut » de prix constaté au moment précis où l'on franchit cette ligne invisible permet de mesurer la valeur exacte que le marché accorde à la qualité de l'éducation, éliminant ainsi tous les facteurs de confusion liés au quartier.


### D. Les limites de la révolution de la crédibilité

Ces approches se heurtent d'abord au **problème de la généralisation**. Comme elles reposent sur l'analyse du passé, elles sont incapables de prédire l'effet d'une politique totalement inédite. De plus, leurs résultats sont souvent purement locaux : ce qui est prouvé pour un quartier spécifique à San Francisco n'est pas forcément exportable à Paris ou Berlin. Tandis que l'approche structurale, en cherchant à identifier des paramètres de comportement universels (les fameux $c_i$​), évitait cet écueil.

La seconde limite réside dans **l'absence d'explication des mécanismes**. Ces méthodes mesurent l'effet (le "quoi") mais occultent le mécanisme (le "pourquoi"). On prouve ainsi la baisse de l'offre sans savoir si elle vient d'une vente massive, d'un gel des travaux ou d'un changement de stratégie. À l'inverse, l'approche structurale décode la logique interne des agents pour éviter que l'économie ne devienne une "boîte noire" statistique dépourvue de théorie humaine.

Enfin, lorsqu'elles sont locales, ces approches sont par essence **aveugles aux effets macroéconomiques**. Elles sont aveugles aux :
<ul class="simple-highlight-list">
  <li><strong>Effet de déplacement :</strong> L'expérience peut prouver qu'une aide ciblée a permis à un groupe de locataires de se loger. Mais si le stock de logements est fixe, ce succès microéconomique n'est qu'un déplacement : le gain des uns se fait au détriment d'autres familles restées dans l'ombre du "groupe témoin". Au niveau macro, la pénurie reste inchangée.</li>
  <li><strong>Effet de bouclage :</strong> Une étude locale ne peut pas prédire ce qui se passe quand on généralise une mesure à tout un pays. Prenez l'exemple du SMIC : si on l'augmente dans une seule ville, on ne verra que le surcoût pour les patrons locaux. Mais si on l'augmente partout, le pouvoir d'achat global bondit, les carnets de commandes se remplissent et l'activité repart. Ce "retour positif" est invisible dans une expérience locale.</li>
</ul>


### E. Les approches modernes

Pour réconcilier l'école structuraliste avec celle de la RC, l'économétrie moderne privilégie désormais une synthèse qui allie la force prédictive du structurel à la rigueur des expériences naturelles. Une première voie consiste à utiliser les outils de la RC pour calibrer les paramètres fondamentaux d'un modèle : ainsi on ne postule plus que certaines variables $Z$ sont liées aux unes $X$ mais pas aux autres $Y$ par des arguments théoriques, on utilise une preuve de terrain pour s'en assurer (Heckman, 2010). Une seconde approche, dite des statistiques suffisantes, simplifie le système en démontrant mathématiquement que l'impact d'une loi peut être résumé par quelques indicateurs clés ; on utilise alors une expérience naturelle pour mesurer uniquement ces chiffres cruciaux, ce qui permet de prédire les effets sur le bien-être social sans avoir à modéliser chaque rouage complexe du marché.


## IV. Résumé d'un article

Nous avons enfin les outils pour comprendre un article d'économétrie. Pour illustrer ce billet, j'ai choisi [l'article de Diamond, McQuade et Qian (2019)](https://www.aeaweb.org/articles?id=10.1257/aer.20181289), qu'on a déjà évoqué dans [ce paragraphe](#DD) est devenu l’étude de référence moderne sur le contrôle des loyers. Elle s'appuie sur l'expérience naturelle de San Francisco en 1994, que nous avons détaillée [plus haut](#DD). En comparant les immeubles soudainement régulés à un groupe témoin, les auteurs parviennent à isoler l'impact causal de la loi.

Les résultats révèlent une chute massive de l'offre : le contrôle des loyers a provoqué une **baisse de 15 %** du nombre de logements locatifs dans les immeubles concernés. Loins de simplement accepter une baisse de rentabilité, les propriétaires ont massivement adopté des stratégies d'évitement : conversion des appartements en copropriétés à vendre, démolition pour reconstruction de logements neufs (exemptés par la loi) ou reprise du logement pour usage personnel. Ces mécanismes ont transformé le parc locatif social ou intermédiaire en un marché plus haut de gamme, accélérant paradoxalement la gentrification que la loi prétendait combattre.

Pour estimer la perte financière subie par les propriétaires, les auteurs utilisent un modèle structural. L’approche est moderne car, au lieu de deviner la psychologie des agents, ils calibrent les paramètres du modèle (comme le coût de conversion d'un immeuble) pour qu’il reproduise exactement les -15 % d'offre obtenus par l'expérience naturelle. La perte est estimée à 3 milliards de dollars.

Suivant une logique similaire (en calibrant cette fois le modèle sur la baisse de mobilité observée) les auteurs ont calculé le bénéfice pour les locataires déjà en place au moment de la réforme. Le gain total s’élève à 3 milliards de dollars, représentant à la fois l'économie de loyer et la "valeur d'assurance" (la tranquillité de ne pas subir d'expulsion par les prix).

Cette protection ne bénéficie toutefois pas à tous les résidents : à San Francisco, le loyer n'est bloqué que pendant la durée d'occupation d'un bail, et le propriétaire peut le réinitialiser librement lors d'un changement de locataire. Par ailleurs, il ne concernait que les immeubles construits avant 1980. En suivant une approche identique, le modèle structural "contraint" par l'expérience naturelle, montre que la raréfaction des biens a provoqué une **hausse mécanique des loyers de 5,1 %** à l'échelle de la ville. Pour ces futurs locataires, la facture s’élève aussi à 3 milliards de dollars.

En somme, le contrôle des loyers à San Francisco s'apparente à une assurance sociale généreuse pour les habitants en place, mais dont la facture est secrètement envoyée aux générations futures : pour chaque dollar de pouvoir d'achat préservé chez un locataire protégé, l'économie de la ville en détruit deux à travers la raréfaction de l'offre et l'envolée des prix pour les nouveaux arrivants.


## V. Conclusion

Arrivés au terme de ce billet, nous pouvons revenir à la question posée dans l'introduction : l'économie répond-elle aux critères d'une démarche scientifique ? Au vu de la manière dont elle produit son savoir, il me semble que oui.

L'étude du marché immobilier de San Francisco montre que les raisonnements déployés par les économètres sont rationnels, et ouvrent la possibilité d'être mis en défaut. Plus important encore pour qualifier une discipline de scientifique : l'économie montre une réelle capacité à prendre en compte ses propres critiques pour se corriger. Face au problème de la corrélation, l'économie développe des approches structurelles. Face aux fragilités des anciens modèles structuraux, la discipline a d'abord réagi par la « révolution de la crédibilité » pour exiger des preuves causales strictes. Puis, reconnaissant les limites de cette approche purement empirique, elle a développé la synthèse moderne actuelle pour tenter de réconcilier la solidité de l'expérience avec la nécessité d'un modèle théorique.

Bien sûr, d'importantes limites demeurent, et l'économie peinera toujours à offrir des certitudes absolues. Mais ces difficultés semblent moins relever d'un vice méthodologique que de la nature même de l'objet étudié : les sociétés humaines. Ce n'est d'ailleurs pas un hasard si l'on retrouve des débats épistémologiques très similaires dans d'autres sciences humaines. La sociologie, par exemple, est également traversée par des tensions entre des approches cherchant à dégager des régularités structurales et d’autres privilégiant l’analyse fine des interactions et des processus de construction sociale[^7]. Ces débats n'invalident pas la scientificité de la sociologie, ils reflètent simplement la difficulté d'étudier l'humain.

Enfin, les obstacles liés à la mise en évidence de la causalité plutôt que de simples corrélations ne sont pas propres à l'économie. L'épidémiologie fait face à des défis presque identiques : lorsqu'il est impossible (ou contraire à l'éthique) de mener des expériences contrôlées en laboratoire pour isoler les causes d'une maladie, les épidémiologistes utilisent des méthodes statistiques observationnelles extrêmement proches de celles des économètres.

Mais, il serait incomplet d'évaluer la scientificité de l'économie sans évoquer une dernière secousse qui traverse la discipline : [la crise de la reproductibilité](https://fr.wikipedia.org/wiki/Crise_de_la_reproductibilit%C3%A9). Ces dernières années [des études](https://www.alternatives-economiques.fr/une-science-economique-de-credible/00111396) jetant le doute sur la robustesse de nombreux travaux empiriques, soulignant que de légers changements dans les paramètres pouvaient parfois bouleverser les résultats. Faut-il pour autant tout jeter à la poubelle ? Je propose deux réponses. D'une part cette crise n'est en rien une exception économique. La psychologie, la sociologie, et même des sciences "dures" comme la médecine ou la cancérologie affrontent des remises en question similaires, parfois bien plus graves. L'émergence de ces critiques n'est donc pas le signe d'une "fausse science", mais plutôt la preuve d'une discipline qui audite ses propres pratiques pour élever ses standards. D'autre part, comme le soulignent des chercheurs tels que [Sylvain Catherine](https://x.com/sc_cath/status/1828667015294288350), il convient de nuancer cette critique. Déjà, il faut distinguer la stricte reproductibilité (relancer le même code sur les mêmes données donne bien le même résultat, ce qui est très souvent le cas en économie) de la réplicabilité (l'application à d'autres contextes). Ensuite, montrer qu'un résultat change en modifiant les choix méthodologiques ne prouve pas que l'étude initiale a tort : tous les choix statistiques ne se valent pas. 

Finalement, l'économie avance avec les contraintes de son objet. Elle reste une science imparfaite, sujette au débat, mais dont la démarche de fond — lorsqu'elle cherche honnêtement à isoler des causes et à éprouver ses modèles au contact du réel — s'inscrit bien dans le cadre d'une démarche scientifique rationnelle.

## VI. Ouverture

Je souhaite clarifier un point concernant mon propos. Il ne faut pas conclure de cet article qu'il faille être contre les politiques des controles de loyer. Mon objectif était simplement de présenter la démarche économique, et de montrer qu'elle faisait sens. En effet, je vois plusieurs angles par lesquels on pourrait continuer à défendre le contrôle des loyers :
<ul class="simple-highlight-list">
  <li><strong>1.</strong> On pourrait faire l'arbitrage que le jeu (la baisse des loyers contrôlés) en vaut la chandelle (la baisse de l'offre).</li>
  <li><strong>2.</strong> On pourrait défendre une politique plus radicale, dans laquelle l'Etat devrait contrôler les loyers ET l'offre, par exemple dans une perspective communiste. Mon billet, évaluant les politiques de contrôle de loyers au sein d'économies capitalistes, ne répond pas vraiment à ces affirmations. Tout au plus montre-t-il qu'une petite dose de socialisme peut être contre-productive pour les populations visées si elle ne se place pas dans un changement plus large de paradigme.</li>
  <li><strong>3.</strong> On peut considérer que la méthodologie économétrique n'est pas parfaite, ou pas suffisamment bien appliquée, ou souffre de trop de biais comme celui [de publication](https://fr.wikipedia.org/wiki/Biais_de_publication), bref, que la thèse n'est pas suffisamment bien défendue pour vous convaincre.[^8]</li>
</ul>
Bien entendu ces critiques ne me convainquent pas, mais ce billet n'est pas le lieu pour développer ces problématiques.

## Notes de bas de page

[^1]: Certains économistes rejettent ces lois au motif qu’elles seraient mathématiquement incohérentes, reposeraient sur des hypothèses absurdes, et seraient infalsifiables. Ces critiques ne me semblent pas tenir, mais je développerai ces points dans un futur billet.

[^2]: Ces lois sont parfois critiquées car elles ne semblent pas tenir compte des pénuries organisées ou des ententes sur les prix. S’il est vrai que les cartels existent, le modèle de base ne cherche pas à décrire toutes les dérives, mais à isoler un mécanisme fondamental : celui de la concurrence pure et parfaite. Sous cette hypothèse, toute tentative d'une ou plusieurs entreprise de maintenir un prix artificiellement haut crée une opportunité de profit pour un nouveau concurrent. Ce dernier entrera sur le marché pour répondre au besoin, capturer la clientèle et, mécaniquement, ramener le prix vers son niveau d'équilibre.

[^3]: Cette intensité peut être rendue objective : par exemple en prenant l’écart entre le loyer moyen du marché et le plafond légal imposé, ou encore la part du parc locatif effectivement soumise à la loi. De même pour la notion d'offre.

[^4]: Le terme « au plus près » a un sens mathématique précis, pour en savoir plus voir [méthode des moindres carrés](https://fr.wikipedia.org/wiki/M%C3%A9thode_des_moindres_carr%C3%A9s).

[^5]: C'est bien sûr un exemple simple pour expliquer les mécanismes en jeu au lecteur, pas un modèle tiré de la recherche économique.

[^6]: La technique exposée est un raffinement de la méthode des moindres carrés, appelée [méthode des doubles moindres carrés](https://fr.wikipedia.org/wiki/M%C3%A9thode_des_doubles_moindres_carr%C3%A9s).

[^7]: Je m'y connais peu en sociologie, donc peut-être mes affirmations sur cette discipline sont-elles fausses, auquel cas je serais heureux de me corriger si le lecteur versé en sociologie m'en faisait la remarque.

[^8]: Comme je l'ai dit dans la conclusion, dans ce dernier cas de figure il faudrait en revanche également porter la critique sur d'autres discipline (psychologie, sociologie, médecine).

