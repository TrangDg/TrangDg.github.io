          
# Birth/Death of People and Formation/Dissolution of Groups

### Description of the information documented

Among the information documenting actors, the dates and places of the creation and ending of an actor are particularly important. Indeed, this kind of information is often used to distinguish an individual between homonyms. Therefore, the patterns pertaining to the birth and death of people, and formation and dissolution of groups should be straightforward and follow the standard CIDOC CRM modellisation.

In this pattern, the place and date of the creation of the actor are recorded, as well as the actors involved in the formation and dissolution of groups. The burial location of an individual is included in this pattern.

However, parents are not recorded in this pattern. Although it is possible to document biological filiation with the use of the properties `P96_from_mother` and `P97_from_father` between the birth events and the parents, it has been decided that it is best to have consistency throughout the model and document family relationships in the [Relationship pattern](https://chin-rcip.github.io/collections-model/en/target-model/current/social-bonds#relationships). Moreover, it is best to document relationships as social constructs, rather than to document biological parenthood. For more information, see [github issue #16](https://github.com/chin-rcip/collections-model/issues/16).

### Description of the pattern

The Birth/Death and Formation/Dissolution patterns use the same modelling approach where an event embodies the “creation” and “ending” of an `E39_Actor` (per CIDOC CRM custom). Those events are then linked to the places and dates they happened.

Instances of the event `E67_Birth` are linked to instances of `E21_Person` through the property `P98_brought_into_life`, while instances of `E74_Group` are linked to instances of the event `E66_Formation` with the property `P95_has_formed`. Similarly, instances of the events `E69_Death` and `E68_Dissolution` are respectively linked to instances of `E21_Person` and `E74_Group` with the properties `P100_was_death_of` and `P99_dissolved`.

Instances of the events are then linked to instances of `E53_Place` and `E52_Time`-Span likewise other patterns. For a more detailed account on date modellisation, see the [Dates pattern](https://chin-rcip.github.io/collections-model/en/target-model/current/general-concepts#dates-pattern).

The formation of a group can be enacted by any instances of `E39_Actor` (i.e. this actor does not *have* to be the *official* founder of the group, and can be either instances of `E21_Person` or `E74_Group`). Instances of the event `E66_Formation` would be linked to instances of this founding `E39_Actor` through the property `P14_carried_out_by`. Similarly, the dissolution of a group can be the doing of a `E39_Actor` (including another group).

In association with the `E69_Death` event, the accounting of the location of the remains of a deceased individual is necessary, as it is information often recorded, especially in the case of famous people.

There are two ways to model such information:
- with an `E24_Physical_Human-Made_Thing` instance representing the grave;
- through a `E9_Move` event of the `E21_Person` instance to the location of their grave after their death.
The main challenge with creating an `E24_Physical_Human-Made_Thing` as a representation of the grave is to link this `E24_Physical_Human-Made_Thing` instance with the `E21_Person` instance cannot be done simply.

Representing the post-death move of the `E21_Person` to their grave through an `E9_Move` event is easier to model, but it is conceptually problematic as a dead person is technically no longer an `E21_Person` capable of carrying out activities such as moving. The logic of CIDOC CRM dictates the creation of a new `E20_Biological_Object` to replace the `E21_Person`. Technically, it would be necessary to create an `E5_Event` to represent the transformation of the `E21_Person` into an `E18_Physical_Thing` through an `E81_transformation` so that it is not induced that the person was buried alive. In the absence of a simple solution and because of the complexity and heaviness such a pattern would entail, CHIN has decided to compromise on semantic preciseness and to adopt a simpler model, assuming actors will be buried whilst dead: a `E9_Move` event has been chosen to represent the location of the grave, without creating a new `E20_Biological_Object` in place of the `E21_Person`.

The project [linked.art](https://linked.art/model/actor/#birth-and-death-formation-and-dissolution) came to the same conclusion and stated that:

>“After death, people are still instances of Person which is a subclass of Actor, even though they can no longer carry out activities. People in comas or otherwise completely incapacitated also cannot carry out activities, but are not temporarily non-Actors. The modeling that death is a transformation from an instance of Person to an instance of Thing adds complexity for the sake of purity, but does not add any actual value. Thus a burial activity ([aat:300263485](http://vocab.getty.edu/aat/300263485)) buries a Person, not a Thing-that-used-to-be-a-Person. However if the skeleton is then dug up and exhibited, it is exhibited as a Thing. There is, therefore, a transition at some undetermined point.”


<a name="039_Pattern_BirthDeath_p"></a>039_Pattern_BirthDeath_p
<iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=039_Pattern_BirthDeath_p.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D107d_h_4kMQ-nrshmNQv2YpY3ZFIMXs-j%26export%3Ddownload"></iframe>

<a name="042_Pattern_GroupFormationDissolution_p"></a>042_Pattern_GroupFormationDissolution_p
<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=042_Pattern_GroupFormationDissolution_p.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1P7hRu-rR8y22b1OOxripnPIqsD4pP2BW%26export%3Ddownload"></iframe>

*Mermaid diagram*

<div class="mermaid" onclick="sizeToggle(this)">
graph TD
classDef Literal fill:#FFFFFF,stroke:#000000;
classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
classDef Temporal_Entity fill:#82C3EC, stroke:#000000;
classDef Type fill:#FAB565, stroke:#000000;
classDef Time-Span fill:#86BCC8, stroke:#000000;
classDef Appellation fill:#FEF3BA, stroke:#000000;
classDef Place fill:#94CC7D, stroke:#000000;
classDef Persistent_Item fill:#FFFFFF, stroke:#000000;
classDef Conceptual_Object fill:#FDDC34, stroke:#000000;
classDef Physical_Thing fill:#E1BA9C, stroke:#000000;
classDef Actor fill:#ffbdca, stroke:#000000;
classDef PC_Classes fill:#cc80ff, stroke:#000000;
classDef Multi fill:#cccccc,stroke:#000000;
0["crm:E67_Birth"]:::Temporal_Entity -->|crm:P4_has_time-span| 1["crm:E52_Time-Span"]:::Time-Span
0["crm:E67_Birth"]:::Temporal_Entity -->|crm:P7_took_place_at| 2["Birth Place<br>crm:E53_Place"]:::Place
4["crm:E69_Death"]:::Temporal_Entity -->|crm:P7_took_place_at| 5["Death Place<br>crm:E53_Place"]:::Place
1["crm:E52_Time-Span"]:::Time-Span -->|crm:P82b_end_of_the_end| 11[Birth Date End<br>rdfs:Literal]:::Literal
12["crm:E52_Time-Span"]:::Time-Span -->|crm:P82b_end_of_the_end| 13[Death Date End<br>rdfs:Literal]:::Literal
1["crm:E52_Time-Span"]:::Time-Span -->|crm:P82a_begin_of_the_begin| 22[Birth Date Begin<br>rdfs:Literal]:::Literal
7["crm:E21_Person"]:::Actor -->|crm:P100i_died_in| 4["crm:E69_Death"]:::Temporal_Entity
16["crm:E9_Move"]:::Temporal_Entity -->|crm:P26_moved_to| 20["Final Disposition Place<br>crm:E53_Place"]:::Place
12["crm:E52_Time-Span"]:::Time-Span -->|crm:P82a_begin_of_the_begin| 25[Death Date Begin<br>rdfs:Literal]:::Literal
4["crm:E69_Death"]:::Temporal_Entity -->|crm:P120_occurs_before| 16["crm:E9_Move"]:::Temporal_Entity
7["crm:E21_Person"]:::Actor -->|crm:P98i_was_born| 0["crm:E67_Birth"]:::Temporal_Entity
16["crm:E9_Move"]:::Temporal_Entity -->|crm:P25_moved| 7["crm:E21_Person"]:::Actor
4["crm:E69_Death"]:::Temporal_Entity -->|crm:P4_has_time-span| 12["crm:E52_Time-Span"]:::Time-Span
16["crm:E9_Move"]:::Temporal_Entity -->|crm:P27_moved_from| 5["Death Place<br>crm:E53_Place"]:::Place
click 2 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-place" _blank
click 5 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-place" _blank
click 20 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#final-disposition-place" _blank
click 22 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-date-begin" _blank
click 11 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-date-end" _blank
click 13 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-date-end" _blank
click 25 href "https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-date-begin" _blank
</div>

### Challenges and limits of this pattern

This pattern is relatively standard, as birth and death are important parts of the documentation of actors, and therefore widely used by other projects, such as Linked.art or SARI. Nonetheless, the modellisation of the final resting location, and especially the use of the `E9_Move` event, is ontologically discutable, as in the pure CIDOC CRM logic, an extra step of stating that the `E21_Person` has become a `E20_Biological_Object` have been omitted.

|***For further information***<br/><br/>![GitHub Mark](https://user-images.githubusercontent.com/48293227/104475587-49182180-558d-11eb-87fc-9f95190cb332.png)*Related Github Issues:*<br/>- [Issue #16 - Do we need a family relationship pattern? And what to do with parents?](https://github.com/chin-rcip/chin-rcip/issues/16)<br/><br/>*Equivalent external data models:*<br/>- Linked.art model: [Birth and Death/Formation and Dissolution pattern](https://linked.art/model/actor/#birth-and-death-formation-and-dissolution).<br/>- SARI model: [Person existence](https://docs.swissartresearch.net/et/persons/#existence) and [group existence](https://docs.swissartresearch.net/et/group/#existence) patterns.|

### Examples

*Birth and Death of Emily Carr*

<div id="tabs-1">
  <ul class="tabs-buttons">
    <li name="tabs-1-graph" class="tab active">Instances graph</li>
    <li name="tabs-1-ttl" class="tab">Turtle</li>
    <li name="tabs-1-json" class="tab">JSON-LD</li>
  </ul>
<div class="tabs-content">
<div id="tabs-1-graph" class="mermaid" onclick="sizeToggle(this)">
graph TD
classDef Literal fill:#ffffff,stroke:#000000;
classDef CRM_Entity fill:#ffffff,stroke:#000000;
classDef CRM_Entity_URI fill:#ffffff,stroke:#000000;
classDef Temporal_Entity fill:#82c3ec, stroke:#000000;
classDef Temporal_Entity_URI fill:#d2e9f9,stroke:#000000;
classDef Type fill:#fab565, stroke:#000000;
classDef Type_URI fill:#fde7ce,stroke:#000000;
classDef Time-Span fill:#86bcc8, stroke:#000000;
classDef Time-Span_URI fill:#dcebef,stroke:#000000;
classDef Appellation fill:#fef3ba, stroke:#000000;
classDef Appellation_URI fill:#fffae6,stroke:#000000;
classDef Place fill:#94cc7d, stroke:#000000;
classDef Place_URI fill:#e1f1da,stroke:#000000;
classDef Persistent_Item fill:#ffffff, stroke:#000000;
classDef Persistent_Item_URI fill:#ffffff,stroke:#000000;
classDef Conceptual_Object fill:#fddc34, stroke:#000000;
classDef Conceptual_Object_URI fill:#fef6cd,stroke:#000000;
classDef Physical_Thing fill:#e1ba9c, stroke:#000000;
classDef Physical_Thing_URI fill:#f3e5d8,stroke:#000000;
classDef Actor fill:#ffbdca, stroke:#000000;
classDef Actor_URI fill:#ffe6eb,stroke:#000000;
classDef PC_Classes fill:#cc80ff, stroke:#000000;
classDef PC_Classes_URI fill:#ebccff,stroke:#000000;
classDef Multi_URI fill:#cccccc,stroke:#000000;
0(["https://dopheda.info/crm_e64/0001_0302"]) -->|rdfs:label| 1(["''Death event of Emily Carr''@en"]):::Literal
2(["https://dopheda.info/crm_e39/0001_0285"]):::Actor_URI -->|rdf:type| 3["crm:E21_Person"]:::Actor
0(["https://dopheda.info/crm_e64/0001_0302"]) -->|crm:P120_occurs_before| 4(["https://dopheda.info/crm_e5/0001_0346"])
5(["https://dopheda.info/crm_e52/0001_0275"]) -->|rdfs:label| 6(["''Time-Span of Death of Emily Carr''@en"]):::Literal
0(["https://dopheda.info/crm_e64/0001_0302"]) -->|rdfs:label| 7(["''Événement de mort de Emily Carr''@fr"]):::Literal
8(["wd:Q7369187"]):::Place_URI -->|rdf:type| 9["crm:E53_Place"]:::Place
10(["https://dopheda.info/crm_e63/0001_0338"]) -->|crm:P7_took_place_at| 11(["geo:6174041"])
10(["https://dopheda.info/crm_e63/0001_0338"]):::Temporal_Entity_URI -->|rdf:type| 12["crm:E67_Birth"]:::Temporal_Entity
4(["https://dopheda.info/crm_e5/0001_0346"]) -->|rdfs:label| 13(["''Move to burial place of Emily Carr''"]):::Literal
0(["https://dopheda.info/crm_e64/0001_0302"]) -->|crm:P7_took_place_at| 11(["geo:6174041"])
5(["https://dopheda.info/crm_e52/0001_0275"]) -->|crm:P82b_end_of_the_end| 14(["''1945-03-02T23:59:59Z''"]):::Literal
4(["https://dopheda.info/crm_e5/0001_0346"]):::Temporal_Entity_URI -->|rdf:type| 15["crm:E9_Move"]:::Temporal_Entity
4(["https://dopheda.info/crm_e5/0001_0346"]) -->|crm:P25_moved| 2(["https://dopheda.info/crm_e39/0001_0285"])
2(["https://dopheda.info/crm_e39/0001_0285"]) -->|crm:P100i_died_in| 0(["https://dopheda.info/crm_e64/0001_0302"])
5(["https://dopheda.info/crm_e52/0001_0275"]):::Time-Span_URI -->|rdf:type| 16["crm:E52_Time-Span"]:::Time-Span
10(["https://dopheda.info/crm_e63/0001_0338"]) -->|crm:P4_has_time-span| 17(["https://dopheda.info/crm_e52/0001_0281"])
8(["wd:Q7369187"]) -->|rdfs:label| 18(["''cimetière de Ross Bay''@fr"]):::Literal
2(["https://dopheda.info/crm_e39/0001_0285"]) -->|crm:P98i_was_born| 10(["https://dopheda.info/crm_e63/0001_0338"])
17(["https://dopheda.info/crm_e52/0001_0281"]) -->|rdfs:label| 19(["''Durée de l’événement de naissance de Emily Carr''@fr"]):::Literal
11(["geo:6174041"]):::Place_URI -->|rdf:type| 20["crm:E53_Place"]:::Place
17(["https://dopheda.info/crm_e52/0001_0281"]) -->|crm:P82b_end_of_the_end| 21(["''1871-12-13T23:59:59Z''"]):::Literal
0(["https://dopheda.info/crm_e64/0001_0302"]) -->|crm:P4_has_time-span| 5(["https://dopheda.info/crm_e52/0001_0275"])
5(["https://dopheda.info/crm_e52/0001_0275"]) -->|crm:P82a_begin_of_the_begin| 22(["''1945-03-02T00:00:00Z''"]):::Literal
8(["wd:Q7369187"]) -->|rdfs:label| 23(["''Ross Bay Cemetery''@en"]):::Literal
17(["https://dopheda.info/crm_e52/0001_0281"]) -->|crm:P82a_begin_of_the_begin| 24(["''1871-12-13T00:00:00Z''"]):::Literal
5(["https://dopheda.info/crm_e52/0001_0275"]) -->|rdfs:label| 25(["''Durée de l’événement de mort de Emily Carr''@fr"]):::Literal
10(["https://dopheda.info/crm_e63/0001_0338"]) -->|rdfs:label| 26(["''Événement de naissance de Emily Carr''@fr"]):::Literal
4(["https://dopheda.info/crm_e5/0001_0346"]) -->|crm:P27_moved_from| 11(["geo:6174041"])
17(["https://dopheda.info/crm_e52/0001_0281"]) -->|rdfs:label| 27(["''Time-Span of Birth of Emily Carr''@en"]):::Literal
4(["https://dopheda.info/crm_e5/0001_0346"]) -->|crm:P26_moved_to| 8(["wd:Q7369187"])
2(["https://dopheda.info/crm_e39/0001_0285"]) -->|rdfs:label| 28(["''Emily Carr''@en"]):::Literal
11(["geo:6174041"]) -->|rdfs:label| 29(["''Victoria''@fr"]):::Literal
11(["geo:6174041"]) -->|rdfs:label| 30(["''Victoria''@en"]):::Literal
17(["https://dopheda.info/crm_e52/0001_0281"]):::Time-Span_URI -->|rdf:type| 31["crm:E52_Time-Span"]:::Time-Span
10(["https://dopheda.info/crm_e63/0001_0338"]) -->|rdfs:label| 32(["''Birth event of Emily Carr''@en"]):::Literal
0(["https://dopheda.info/crm_e64/0001_0302"]):::Temporal_Entity_URI -->|rdf:type| 33["crm:E69_Death"]:::Temporal_Entity


</div>
  <div id="tabs-1-ttl" style="display:none" markdown="1">
   
```turtle
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix geo: <https://www.geonames.org/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix wd: <https://www.wikidata.org/wiki/> .

<https://dopheda.info/crm_e39/0001_0285> a crm:E21_Person ;
    rdfs:label "Emily Carr"@en ;
    crm:P100i_died_in <https://dopheda.info/crm_e64/0001_0302> ;
    crm:P98i_was_born <https://dopheda.info/crm_e63/0001_0338> .

<https://dopheda.info/crm_e5/0001_0346> a crm:E9_Move ;
    rdfs:label "Move to burial place of Emily Carr" ;
    crm:P25_moved <https://dopheda.info/crm_e39/0001_0285> ;
    crm:P26_moved_to wd:Q7369187 ;
    crm:P27_moved_from geo:6174041 .

<https://dopheda.info/crm_e52/0001_0275> a crm:E52_Time-Span ;
    rdfs:label "Time-Span of Death of Emily Carr"@en,
        "Durée de l’événement de mort de Emily Carr"@fr ;
    crm:P82a_begin_of_the_begin "1945-03-02T00:00:00Z" ;
    crm:P82b_end_of_the_end "1945-03-02T23:59:59Z" .

<https://dopheda.info/crm_e52/0001_0281> a crm:E52_Time-Span ;
    rdfs:label "Time-Span of Birth of Emily Carr"@en,
        "Durée de l’événement de naissance de Emily Carr"@fr ;
    crm:P82a_begin_of_the_begin "1871-12-13T00:00:00Z" ;
    crm:P82b_end_of_the_end "1871-12-13T23:59:59Z" .

<https://dopheda.info/crm_e63/0001_0338> a crm:E67_Birth ;
    rdfs:label "Birth event of Emily Carr"@en,
        "Événement de naissance de Emily Carr"@fr ;
    crm:P4_has_time-span <https://dopheda.info/crm_e52/0001_0281> ;
    crm:P7_took_place_at geo:6174041 .

<https://dopheda.info/crm_e64/0001_0302> a crm:E69_Death ;
    rdfs:label "Death event of Emily Carr"@en,
        "Événement de mort de Emily Carr"@fr ;
    crm:P120_occurs_before <https://dopheda.info/crm_e5/0001_0346> ;
    crm:P4_has_time-span <https://dopheda.info/crm_e52/0001_0275> ;
    crm:P7_took_place_at geo:6174041 .

wd:Q7369187 a crm:E53_Place ;
    rdfs:label "Ross Bay Cemetery"@en,
        "cimetière de Ross Bay"@fr .

geo:6174041 a crm:E53_Place ;
    rdfs:label "Victoria"@en,
        "Victoria"@fr .
```
  </div>
  <div id="tabs-1-json" style="display:none" markdown="1">

```json
[
  {
    "@id": "https://dopheda.info/crm_e63/0001_0338",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E67_Birth"
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P4_has_time-span": [
      {
        "@id": "https://dopheda.info/crm_e52/0001_0281"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at": [
      {
        "@id": "https://www.geonames.org/6174041"
      }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "fr",
        "@value": "Événement de naissance de Emily Carr"
      },
      {
        "@language": "en",
        "@value": "Birth event of Emily Carr"
      }
    ]
  },
  {
    "@id": "https://dopheda.info/crm_e39/0001_0285",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E21_Person"
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P100i_died_in": [
      {
        "@id": "https://dopheda.info/crm_e64/0001_0302"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P98i_was_born": [
      {
        "@id": "https://dopheda.info/crm_e63/0001_0338"
      }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "en",
        "@value": "Emily Carr"
      }
    ]
  },
  {
    "@id": "https://dopheda.info/crm_e64/0001_0302",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E69_Death"
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P120_occurs_before": [
      {
        "@id": "https://dopheda.info/crm_e5/0001_0346"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P4_has_time-span": [
      {
        "@id": "https://dopheda.info/crm_e52/0001_0275"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at": [
      {
        "@id": "https://www.geonames.org/6174041"
      }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "fr",
        "@value": "Événement de mort de Emily Carr"
      },
      {
        "@language": "en",
        "@value": "Death event of Emily Carr"
      }
    ]
  },
  {
    "@id": "https://dopheda.info/crm_e52/0001_0281",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E52_Time-Span"
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P82a_begin_of_the_begin": [
      {
        "@value": "1871-12-13T00:00:00Z"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P82b_end_of_the_end": [
      {
        "@value": "1871-12-13T23:59:59Z"
      }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "fr",
        "@value": "Durée de l’événement de naissance de Emily Carr"
      },
      {
        "@language": "en",
        "@value": "Time-Span of Birth of Emily Carr"
      }
    ]
  },
  {
    "@id": "https://dopheda.info/crm_e52/0001_0275",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E52_Time-Span"
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P82a_begin_of_the_begin": [
      {
        "@value": "1945-03-02T00:00:00Z"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P82b_end_of_the_end": [
      {
        "@value": "1945-03-02T23:59:59Z"
      }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "en",
        "@value": "Time-Span of Death of Emily Carr"
      },
      {
        "@language": "fr",
        "@value": "Durée de l’événement de mort de Emily Carr"
      }
    ]
  },
  {
    "@id": "https://dopheda.info/crm_e5/0001_0346",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E9_Move"
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P25_moved": [
      {
        "@id": "https://dopheda.info/crm_e39/0001_0285"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P26_moved_to": [
      {
        "@id": "https://www.wikidata.org/wiki/Q7369187"
      }
    ],
    "http://www.cidoc-crm.org/cidoc-crm/P27_moved_from": [
      {
        "@id": "https://www.geonames.org/6174041"
      }
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@value": "Move to burial place of Emily Carr"
      }
    ]
  },
  {
    "@id": "https://www.geonames.org/6174041",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E53_Place"
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "fr",
        "@value": "Victoria"
      },
      {
        "@language": "en",
        "@value": "Victoria"
      }
    ]
  },
  {
    "@id": "https://www.wikidata.org/wiki/Q7369187",
    "@type": [
      "http://www.cidoc-crm.org/cidoc-crm/E53_Place"
    ],
    "http://www.w3.org/2000/01/rdf-schema#label": [
      {
        "@language": "fr",
        "@value": "cimetière de Ross Bay"
      },
      {
        "@language": "en",
        "@value": "Ross Bay Cemetery"
      }
    ]
  }
]
```

  </div>

</div>

</div>




<style>
	.tabs-buttons {
		display: flex;
		list-style-type: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
	}
	.tabs-buttons li {
		border: solid 1px #cccccc;
        margin-top: 0;
        padding: 5px;
	}
	.tab.active {
		background-color: lightblue;
	}
	.tabs-content {
		border: 1px dashed #808080;
	    border-radius: 5px;
	    /*margin: 10px;*/
	    padding: 3px;
	    max-height: 400px;
	    overflow: auto;
	}
    .mermaid {
        overflow: auto;
    }
	svg {
		/*width: 100%;
		height: 100%;*/
		cursor: zoom-in;
	}
	.clickable:hover > * {
        stroke-width: 3px !important;
    }
	/*main {
		display: flex;
		flex-flow: row;
	}*/

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/mermaid@8.9.2/dist/mermaid.min.js"></script>
<!-- <script>mermaid.initialize({startOnLoad:true});</script> -->
<script>
    var config = {
        startOnLoad:true,
        flowchart:{
                // useMaxWidth:true,
                htmlLabels:true,
                curve:'basis',
                rankSpacing:50
        },
        securityLevel:'loose',
    };
    mermaid.initialize(config);
</script>

<script type="text/javascript">
	function sizeToggle(element) {
		var svg = element.firstChild;
		if ($(svg).attr("width") === "100%") {
            $(svg).css("cursor", 'zoom-out');
			$(svg).attr("width", svg.style.maxWidth);
		} else {
            $(svg).css("cursor", 'zoom-in');
			$(svg).attr("width", "100%");
		}
	};

	$(".tab").on("click", function(){
		var tab_id = $(this).attr("name");
		console.log(tab_id)
		$("#"+tab_id).show();
		$("#"+tab_id).siblings().hide();
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	})
</script>

