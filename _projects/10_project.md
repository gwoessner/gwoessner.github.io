---
layout: page
title: projet-test
description: description tbd
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Un ami m’a demandé mon avis sur la [vidéo](https://www.youtube.com/watch?v=6OenzW3ODsI) de Ismaïl Ouslimani (Le Raptor) au sujet du climat. Au cas où ça intéresserait quelqu’un, autant partager le fruit de ma documentation.  

Plusieurs créateurs ont déjà produit des réponses de qualités diverses. A mon humble avis, si certaines sont très bonnes, d’autres tapent à côté des arguments d'Ismaïl ou s’attardent sur des détails. Dans ces conditions, aucune chance de convaincre les indécis qui, j’en connais, existent. C’est pourquoi j’ai choisi de ne répondre qu’aux points cruciaux de l'argumentation d'Ismaïl, en restant le plus concis et factuel possible sur ses faiblesses.  

Pour être précis, le profil à qui je m’adresse est celui d’un diplômé en sciences «dures» plutôt de droite ; sceptique -et parfois on peut le comprendre- sur certains discours du monde politique et médiatique portant sur le climat ou d’autres thèmes scientifiques comme le Covid ; pour qui l’argumentaire en apparence scientifiquement solide et (plus ou moins…) sourcé d'Ismaïl peut paraître convaincant. Ce profil est fréquent dans le public d'Ismaïl, et sa formation scientifique lui donne parfois le sentiment de pouvoir aborder d’autres domaines des sciences facilement. D’ailleurs Ismaïl, diplômé de Saint-Cyr, en est un bon exemple.

## I. Les bases
Dans la première partie Ismaïl présente les bases de la climatologie : évolution du climat, effet de serre et rôle du GIEC. Il n’y a pas grand-chose à redire, les choses sont plutôt factuelles et correctes. Toutefois, quelque chose transparaît de son discours : l’idée que le climat a toujours fluctué, et que ce serait peut-être toujours le cas aujourd’hui. Par exemple la Figure 1 [1, p296] tirée de la vidéo abonde dans ce sens.

Or, à ce stade du changement climatique, ce n’est pas tant l’ampleur des évolutions du climat qu’il est important de comparer, mais plutôt la vitesse (pour les matheux, il faut regarder $f’$ et pas $f$). À cet égard la Figure 1 ne permet rien de conclure pour deux raisons. D’une part, il faut faire attention car l’échelle temporelle n’est pas la même entre les périodes et donne l’impression à gauche de variations très brutales. D’autre part car le graphique est trop peu précis pour voir l’évolution depuis la Révolution Industrielle. La Figure 2 [1, p301] met clairement en évidence que l’ampleur des phénomènes à l’œuvre de nos jours est sans précédent et qu’ils sont concomitants avec le début de nos activités industrielles.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_pics/climat-1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_pics/climat-2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A gauche la Figure 1, à droite la Figure 2.
</div>

Enfin, certains pourraient à juste titre rétorquer que la Figure 2 représente l’évolution de la concentration de gaz à effet de serre (d’ici abrégé GES) plutôt que la température. Mais Ismaïl lui même ne nie pas l’effet réchauffant des GES, expliqué dans [cette vidéo](https://www.youtube.com/watch?v=ewc8FBtEKPs), et concernant la température, une image vaut 1000 mots :

<div class="container mt-3">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                {% include video.liquid
                    path="assets/video/climat-video.mp4"
                    class="position-absolute w-100 h-100"
                    controls=true
                    style="object-fit: contain; cursor: zoom-in;"
                    onclick="this.style.cursor='zoom-out'; this.style.objectFit='fill';"
                    onmouseout="this.style.cursor='zoom-in';"
                %}
            </div>
            <div class="caption mt-2 text-center" style="font-size: 0.9em; color: #666;">
                Une animation de l'évolution de la température moyenne sur Terre de 1880 à nos jours, tirée de <a href="https://svs.gsfc.nasa.gov/4975" target="_blank">NASA Scientific Visualization Studio</a>.
            </div>
        </div>
    </div>
</div>

En bref, la concentration de GES comme les températures augmentent à un rythme jamais vu dans l'histoire, et il s'agit maintenant de jauger les explications avancées.


### Abbréviations
* GES : Gaz à effet de serre (CO2, CH4, etc),
* RCP : scénario d’anticipation du GIEC, classés par le réchauffement maximal atteint. RCP2,6 est le scénario optimiste, où le monde arrive à limiter ses émissions de GES et le réchauffement. RCP8,5 est le scénario pessimiste où rien n’est fait.



### Bibliographie
* <a name="AR6WG1FR"></a>[1] : [AR6 WG1 FR](https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_FullReport.pdf)
* <a name="AR6WG2FR"></a>[2] : [AR6 WG2 FR](https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_FullReport.pdf)



</div>
```

{% endraw %}
