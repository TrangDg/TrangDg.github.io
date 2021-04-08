          
# Birth/Death of People and Formation/Dissolution of Groups

### Description of the information documented

Among the information documenting actors, the dates and places of the creation and ending of an actor are particularly important. Indeed, this kind of information is often used to distinguish an individual between homonyms. Therefore, the patterns pertaining to the birth and death of people, and formation and dissolution of groups should be straightforward and follow the standard CIDOC CRM modellisation.

In this pattern, the place and date of the creation of the actor are recorded, as well as the actors involved in the formation and dissolution of groups. The burial location of an individual is included in this pattern.

However, parents are not recorded in this pattern. Although it is possible to document biological filiation with the use of the properties P96_from_mother and P97_from_father between the birth events and the parents, it has been decided that it is best to have consistency throughout the model and document family relationships in the [Relationship pattern](https://chin-rcip.github.io/collections-model/en/target-model/current/social-bonds#relationships). Moreover, it is best to document relationships as social constructs, rather than to document biological parenthood. For more information, see [github issue #16](https://github.com/chin-rcip/collections-model/issues/16).

### Description of the pattern

The Birth/Death and Formation/Dissolution patterns use the same modelling approach where an event embodies the “creation” and “ending” of an `E39_Actor` (per CIDOC CRM custom). Those events are then linked to the places and dates they happened.

Instances of the event E67_Birth are linked to instances of E21_Person through the property P98_brought_into_life, while instances of E74_Group are linked to instances of the event E66_Formation with the property P95_has_formed. Similarly, instances of the events E69_Death and E68_Dissolution are respectively linked to instances of E21_Person and E74_Group with the properties P100_was_death_of and P99_dissolved.

Instances of the events are then linked to instances of E53_Place and E52_Time-Span likewise other patterns. For a more detailed account on date modellisation, see the [Dates pattern](https://chin-rcip.github.io/collections-model/en/target-model/current/general-concepts#dates-pattern).

The formation of a group can be enacted by any instances of `E39_Actor` (i.e. this actor does not *have* to be the *official* founder of the group, and can be either instances of E21_Person or E74_Group). Instances of the event E66_Formation would be linked to instances of this founding E39_Actor through the property P14_carried_out_by. Similarly, the dissolution of a group can be the doing of a E39_Actor (including another group).

In association with the E69_Death event, the accounting of the location of the remains of a deceased individual is necessary, as it is information often recorded, especially in the case of famous people.

There are two ways to model such information:
- with an `E24_Physical_Human-Made_Thing` instance representing the grave;
- through a E9_Move event of the `E21_Person` instance to the location of their grave after their death.
The main challenge with creating an `E24_Physical_Human-Made_Thing` as a representation of the grave is to link this `E24_Physical_Human-Made_Thing` instance with the `E21_Person` instance cannot be done simply.

Representing the post-death move of the `E21_Person` to their grave through an `E9_Move` event is easier to model, but it is conceptually problematic as a dead person is technically no longer an `E21_Person` capable of carrying out activities such as moving. The logic of CIDOC CRM dictates the creation of a new `E20_Biological_Object` to replace the `E21_Person`. Technically, it would be necessary to create an `E5_Event` to represent the transformation of the `E21_Person` into an `E18_Physical_Thing` through an `E81_transformation` so that it is not induced that the person was buried alive. In the absence of a simple solution and because of the complexity and heaviness such a pattern would entail, CHIN has decided to compromise on semantic preciseness and to adopt a simpler model, assuming actors will be buried whilst dead: a `E9_Move` event has been chosen to represent the location of the grave, without creating a new `E20_Biological_Object` in place of the `E21_Person`.

The project [linked.art](https://linked.art/model/actor/#birth-and-death-formation-and-dissolution) came to the same conclusion and stated that:
```
“After death, people are still instances of Person which is a subclass of Actor, even though they can no longer carry out activities. People in comas or otherwise completely incapacitated also cannot carry out activities, but are not temporarily non-Actors. The modeling that death is a transformation from an instance of Person to an instance of Thing adds complexity for the sake of purity, but does not add any actual value. Thus a burial activity ([aat:300263485](http://vocab.getty.edu/aat/300263485)) buries a Person, not a Thing-that-used-to-be-a-Person. However if the skeleton is then dug up and exhibited, it is exhibited as a Thing. There is, therefore, a transition at some undetermined point.”
```

<a name="039_Pattern_BirthDeath_p"></a>039_Pattern_BirthDeath_p
<iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=039_Pattern_BirthDeath_p.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D107d_h_4kMQ-nrshmNQv2YpY3ZFIMXs-j%26export%3Ddownload"></iframe>

<a name="042_Pattern_GroupFormationDissolution_p"></a>042_Pattern_GroupFormationDissolution_p
<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=042_Pattern_GroupFormationDissolution_p.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1P7hRu-rR8y22b1OOxripnPIqsD4pP2BW%26export%3Ddownload"></iframe>

### Challenges and limits of this pattern

This pattern is relatively standard, as birth and death are important parts of the documentation of actors, and therefore widely used by other projects, such as Linked.art or SARI. Nonetheless, the modellisation of the final resting location, and especially the use of the E9_Move event, is ontologically discutable, as in the pure CIDOC CRM logic, an extra step of stating that the E21_Person has become a E20_Biological_Object have been omitted.

|***For further information***<br/>![GitHub Mark](https://user-images.githubusercontent.com/48293227/104475587-49182180-558d-11eb-87fc-9f95190cb332.png)*Related Github Issues:*<br/>- [Issue #16 - Do we need a family relationship pattern? And what to do with parents?](https://github.com/chin-rcip/chin-rcip/issues/16)<br/>*Equivalent external data models:*<br/>- Linked.art model: [Birth and Death/Formation and Dissolution pattern](https://linked.art/model/actor/#birth-and-death-formation-and-dissolution).<br/>- SARI model: [Person existence](https://docs.swissartresearch.net/et/persons/#existence) and [group existence](https://docs.swissartresearch.net/et/group/#existence) patterns.|

### Examples

*Birth and Death of Emily Carr*

<div id="tabs-1">
  <ul>
    <li><a href="#tabs-1-graph" class="tab">Instances graph</a></li>
    <li><a href="#tabs-1-ttl" class="tab">Turle</a></li>
    <li><a href="#tabs-1-json" class="tab">JSON-LD</a></li>
  </ul>
<div class="tabs-content">
<div id="tabs-1-graph" class="mermaid" onclick="sizeToggle(this)">
graph TD
classDef Literal fill:#f2f2f2,stroke:#000000;
classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
classDef CRM_Entity_URI fill:#FFFFFF,stroke:#000000;
classDef Temporal_Entity fill:#00C9E6, stroke:#000000;
classDef Temporal_Entity_URI fill:#99f1ff,stroke:#000000;
classDef Type fill:#E18312, stroke:#000000;
classDef Type_URI fill:#f6c588,stroke:#000000;
classDef Time-Span fill:#2C9C91, stroke:#000000;
classDef Time-Span_URI fill:#9be4dc,stroke:#000000;
classDef Appellation fill:#FFEB7F, stroke:#000000;
classDef Appellation_URI fill:#fff6cc,stroke:#000000;
classDef Place fill:#008836, stroke:#000000;
classDef Place_URI fill:#33ff85,stroke:#000000;
classDef Persistent_Item fill:#B266B2, stroke:#000000;
classDef Persistent_Item_URI fill:#dcbcdc,stroke:#000000;
classDef Conceptual_Object fill:#FFD700, stroke:#000000;
classDef Conceptual_Object_URI fill:#fff099,stroke:#000000;
classDef Physical_Object fill:#D2B48C, stroke:#000000;
classDef Physical_Object_URI fill:#eadbc8,stroke:#000000;
classDef Actor fill:#f58aad, stroke:#000000;
classDef Actor_URI fill:#fbd0de,stroke:#000000;
classDef PC_Classes fill:#4ce600, stroke:#000000;
classDef PC_Classes_URI fill:#bbff99,stroke:#000000;
classDef Multi_URI fill:#cccccc,stroke:#000000;
0([https://www.rdm.net/person/0001]) -->|crm:P100i_died_in| 1([https://www.rdm.net/event/0002])
0([https://www.rdm.net/person/0001]):::Actor_URI -->|rdf:type| 2["crm:E21_Person"]:::Actor
0([https://www.rdm.net/person/0001]) -->|crm:P98i_was_born| 3([https://www.rdm.net/event/0001])
1([https://www.rdm.net/event/0002]) -->|crm:P7_took_place_at| 4([http://www.rdm.net/place/0002])
1([https://www.rdm.net/event/0002]) -->|crm:P4_has_time-span| 5([http://www.rdm.net/time-span/0002])
1([https://www.rdm.net/event/0002]):::Temporal_Entity_URI -->|rdf:type| 6["crm:E69_Death"]:::Temporal_Entity
3([https://www.rdm.net/event/0001]) -->|crm:P7_took_place_at| 7([http://www.rdm.net/place/0001])
3([https://www.rdm.net/event/0001]):::Temporal_Entity_URI -->|rdf:type| 8["crm:E67_Birth"]:::Temporal_Entity
3([https://www.rdm.net/event/0001]) -->|crm:P4_has_time-span| 9([http://www.rdm.net/time-span/0001])
4([http://www.rdm.net/place/0002]):::Place_URI -->|rdf:type| 10["crm:E53_Place"]:::Place
5([http://www.rdm.net/time-span/0002]) -->|crm:P82b_end_of_the_end| 11(["''1985-12-25T23:59:59-04:00''^^xsd:dateTime"]):::Literal
5([http://www.rdm.net/time-span/0002]) -->|crm:P82a_begin_of_the_begin| 12(["''1985-12-25T00:00:00-04:00''^^xsd:dateTime"]):::Literal
5([http://www.rdm.net/time-span/0002]):::Time-Span_URI -->|rdf:type| 13["crm:E52_Time-Span"]:::Time-Span
7([http://www.rdm.net/place/0001]):::Place_URI -->|rdf:type| 14["crm:E53_Place"]:::Place
9([http://www.rdm.net/time-span/0001]) -->|crm:P82a_begin_of_the_begin| 15(["''1900-02-20T00:00:00-04:00''^^xsd:dateTime"]):::Literal
9([http://www.rdm.net/time-span/0001]):::Time-Span_URI -->|rdf:type| 16["crm:E52_Time-Span"]:::Time-Span
9([http://www.rdm.net/time-span/0001]) -->|crm:P82b_end_of_the_end| 17(["''1900-02-20T23:59:59-04:00''^^xsd:dateTime"]):::Literal

</div>
  <div id="tabs-1-ttl" style="display:none" markdown="1">
   
```turtle
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.rdm.net/person/0001> a crm:E21_Person ;
	crm:P98i_was_born <https://www.rdm.net/event/0001> ;
	crm:P100i_died_in <https://www.rdm.net/event/0002> .

<https://www.rdm.net/event/0001> a crm:E67_Birth ;
	crm:P4_has_time-span <http://www.rdm.net/time-span/0001> ;
	crm:P7_took_place_at <http://www.rdm.net/place/0001> .

<https://www.rdm.net/event/0002> a crm:E69_Death ;
	crm:P4_has_time-span <http://www.rdm.net/time-span/0002> ;
	crm:P7_took_place_at <http://www.rdm.net/place/0002> .

<http://www.rdm.net/time-span/0001> a crm:E52_Time-Span ;
	crm:P82a_begin_of_the_begin "1900-02-20T00:00:00-04:00"^^xsd:dateTime ;
	crm:P82b_end_of_the_end "1900-02-20T23:59:59-04:00"^^xsd:dateTime .

<http://www.rdm.net/time-span/0002> a crm:E52_Time-Span ;
	crm:P82a_begin_of_the_begin "1985-12-25T00:00:00-04:00"^^xsd:dateTime ;
	crm:P82b_end_of_the_end "1985-12-25T23:59:59-04:00"^^xsd:dateTime .

<http://www.rdm.net/place/0001> a crm:E53_Place .

<http://www.rdm.net/place/0002> a crm:E53_Place .
```
  </div>
  <div id="tabs-1-json" style="display:none" markdown="1">

```json
{
    "@context": {
        "crm": "http://www.cidoc-crm.org/cidoc-crm/"
    },
    "@graph": [
        {
            "@id": "https://www.chin-rcip.ca/e52/0002",
            "@type": "crm:E52_Time-Span",
            "crm:P82a_begin_of_the_begin": {
                "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
                "@value": "1970-03-02T00:00:00"
            },
            "crm:P82b_end_of_the_end": {
                "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
                "@value": "1970-03-02T23:59:59"
            }
        },
        {
            "@id": "https://www.chin-rcip.ca/e39/0002",
            "@type": "crm:E21_Person",
            "http://www.w3.org/2000/01/rdf-schema#label": "Amanda Fortier (1861-1953)"
        },
        {
            "@id": "https://www.chin-rcip.ca/e39/0001",
            "@type": "crm:E21_Person",
            "crm:P100i_died_in": {
                "@id": "https://www.chin-rcip.ca/e2/0002"
            },
            "crm:P98i_was_born": {
                "@id": "https://www.chin-rcip.ca/e2/0001"
            },
            "http://www.w3.org/2000/01/rdf-schema#label": "Marc-Aurèle Fortin (1888-1970)"
        },
        {
            "@id": "https://www.chin-rcip.ca/e39/0003",
            "@type": "crm:E21_Person",
            "http://www.w3.org/2000/01/rdf-schema#label": "Thomas Fortin (1853-1933)"
        },
        {
            "@id": "https://www.chin-rcip.ca/e52/0001",
            "@type": "crm:E52_Time-Span",
            "crm:P82a_begin_of_the_begin": {
                "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
                "@value": "1888-03-14T00:00:00"
            },
            "crm:P82b_end_of_the_end": {
                "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
                "@value": "1888-03-14T23:59:59"
            }
        },
        {
            "@id": "https://www.chin-rcip.ca/e53/0001",
            "@type": "crm:E53_Place",
            "http://www.w3.org/2000/01/rdf-schema#label": "Laval, Québec"
        },
        {
            "@id": "https://www.chin-rcip.ca/e2/0002",
            "@type": "crm:E69_Death",
            "crm:P4_has_time-span": {
                "@id": "https://www.chin-rcip.ca/e52/0002"
            },
            "crm:P7_took_place_at": {
                "@id": "https://www.chin-rcip.ca/e53/0002"
            }
        },
        {
            "@id": "https://www.chin-rcip.ca/e2/0001",
            "@type": "crm:E67_Birth",
            "crm:P4_has_time-span": {
                "@id": "https://www.chin-rcip.ca/e52/0001"
            },
            "crm:P7_took_place_at": {
                "@id": "https://www.chin-rcip.ca/e53/0001"
            },
            "crm:P96_by_mother": {
                "@id": "https://www.chin-rcip.ca/e39/0002"
            },
            "crm:P97_from_father": {
                "@id": "https://www.chin-rcip.ca/e39/0003"
            }
        },
        {
            "@id": "https://www.chin-rcip.ca/e53/0002",
            "@type": "crm:E53_Place",
            "http://www.w3.org/2000/01/rdf-schema#label": "Macamic, Québec"
        }
    ]
}
```

  </div>

</div>

</div>




<style>
	.mermaid {
		border: 1px dashed #808080;
	    border-radius: 5px;
	    margin: 10px;
	    padding: 3px;
	    overflow: scroll;
	}
	svg {
		/*width: 100%;
		height: 100%;*/
		cursor: pointer;
	}
	
	main {
		display: flex;
		flex-flow: row;
	}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/mermaid@8.5.2/dist/mermaid.min.js"></script>
<!-- <script>mermaid.initialize({startOnLoad:true});</script> -->
<script>
    var config = {
        startOnLoad:true,
        flowchart:{
                useMaxWidth:true,
                htmlLabels:true,
                curve:'basis',
                rankSpacing:50
        }
    };
    mermaid.initialize(config);
</script>

<script type="text/javascript">
	function sizeToggle(element) {
		var svg = element.firstChild;
		if (svg.attributes.getNamedItem("width").value === "100%") {
			svg.getAttributeNode("width").value = svg.style.maxWidth;
		} else {
			svg.getAttributeNode("width").value =  "100%";
		}
	}

	$(".tab").on("click", function(){
		var tab_id = $(this).attr("href");
		console.log(tab_id)
		$(tab_id).show();
		$(tab_id).siblings().hide();
	})
</script>

