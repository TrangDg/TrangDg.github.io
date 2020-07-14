# Visualization of RDF data using Mermaid JS

### Philippe's RDF example of Existence pattern

```html
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
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

#### Diagram

<div class="mermaid" onclick="sizeToggle(this)">
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

### Other examples from MAC dataset

#### Diagram of Identifier and Applellation of <i>Eugène Atget</i>:

<div class="mermaid" onclick="sizeToggle(this)">
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
0([https://chin-rcip.ca/e39/0000001]):::Actor_URI -->|rdf:type| 1["crm:E21_Person"]:::Actor
0([https://chin-rcip.ca/e39/0000001]) -->|crm:P1_is_identified_by| 2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988])
0([https://chin-rcip.ca/e39/0000001]) -->|crm:P1_is_identified_by| 3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38])
2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|crm:P2_has_type| 4([https://chin-rcip.ca/type/id/MAC_Artistes_ID])
2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]):::Appellation_URI -->|rdf:type| 5["crm:E42_Identifier"]:::Appellation
2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|rdfs:label| 6(["''Identifier of Atget, Eugène''@en"]):::Literal
2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|rdfs:label| 7(["''Identifiant de Atget, Eugène''@fr"]):::Literal
2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|crm:P190_has_symbolic_content| 8(["''380''@en"]):::Literal
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P106_is_composed_of| 9([urn:uuid:31944458-26ee-49eb-987a-e969e391b397])
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|rdfs:label| 10(["''Full appellation of Atget, Eugène''@en"]):::Literal
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|rdfs:label| 11(["''Appellation complète de Atget, Eugène''@fr"]):::Literal
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P190_has_symbolic_content| 12(["''Atget, Eugène''@fr"]):::Literal
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]):::Conceptual_Object_URI -->|rdf:type| 13["crm:E33_Linguistic_Object"]:::Conceptual_Object
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]):::Multi_URI -->|rdf:type| 14["crm:E41_Appellation"]:::Appellation
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P106_is_composed_of| 15([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339])
3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P2_has_type| 16(["aat:300404688"])
4([https://chin-rcip.ca/type/id/MAC_Artistes_ID]):::Type_URI -->|rdf:type| 17["crm:E55_Type"]:::Type
4([https://chin-rcip.ca/type/id/MAC_Artistes_ID]) -->|rdfs:label| 18(["''MAC_Artistes_ID''@en"]):::Literal
9([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]) -->|crm:P190_has_symbolic_content| 19(["''Eugène''@fr"]):::Literal
9([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]) -->|rdfs:label| 20(["''Part of the full appellation of Atget, Eugène''@en"]):::Literal
9([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]):::Appellation_URI -->|rdf:type| 21["crm:E41_Appellation"]:::Appellation
9([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]) -->|rdfs:label| 22(["''Partie de l’appellation complète de Atget, Eugène''@fr"]):::Literal
15([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]):::Appellation_URI -->|rdf:type| 23["crm:E41_Appellation"]:::Appellation
15([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|rdfs:label| 24(["''Part of the full appellation of Atget, Eugène''@en"]):::Literal
15([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|crm:P2_has_type| 25(["aat:300404652"])
15([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|crm:P190_has_symbolic_content| 26(["''Atget''@fr"]):::Literal
15([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|rdfs:label| 27(["''Partie de l’appellation complète de Atget, Eugène''@fr"]):::Literal
16(["aat:300404688"]) -->|crm:P2_has_type| 28([https://chin-rcip.ca/type/appellation_type])
16(["aat:300404688"]) -->|rdfs:label| 29(["''full name''@en"]):::Literal
16(["aat:300404688"]):::Type_URI -->|rdf:type| 30["crm:E55_Type"]:::Type
25(["aat:300404652"]):::Type_URI -->|rdf:type| 31["crm:E55_Type"]:::Type
25(["aat:300404652"]) -->|rdfs:label| 32(["''last name''@en"]):::Literal
25(["aat:300404652"]) -->|crm:P2_has_type| 33([https://chin-rcip.ca/type/appellation_part_type])
28([https://chin-rcip.ca/type/appellation_type]) -->|rdfs:label| 34(["''Appellation Type''@en"]):::Literal
28([https://chin-rcip.ca/type/appellation_type]):::Type_URI -->|rdf:type| 35["crm:E55_Type"]:::Type
33([https://chin-rcip.ca/type/appellation_part_type]) -->|rdfs:label| 36(["''Appellation Part Type''@en"]):::Literal
33([https://chin-rcip.ca/type/appellation_part_type]):::Type_URI -->|rdf:type| 37["crm:E55_Type"]:::Type
0([https://chin-rcip.ca/e39/0000001]) -->|rdf:label| 38(["Eugène Atget"]):::Literal


</div>

####  Diagram of the Birth Event pattern of <i>Eugène Atget</i>:

<div class="mermaid" onclick="sizeToggle(this)">
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
0([https://chin-rcip.ca/e39/0000001]):::Actor_URI -->|rdf:type| 1["crm:E21_Person"]:::Actor
0([https://chin-rcip.ca/e39/0000001]) -->|crm:P98i_was_born| 2([https://chin-rcip.ca/event/start/0000001])
2([https://chin-rcip.ca/event/start/0000001]) -->|crm:P4_has_time-span| 3([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec])
2([https://chin-rcip.ca/event/start/0000001]) -->|rdfs:label| 4(["''Événement de naissance de Atget, Eugène''@fr"]):::Literal
2([https://chin-rcip.ca/event/start/0000001]) -->|rdfs:label| 5(["''Birth event of Atget, Eugène''@en"]):::Literal
2([https://chin-rcip.ca/event/start/0000001]):::Temporal_Entity_URI -->|rdf:type| 6["crm:E67_Birth"]:::Temporal_Entity
2([https://chin-rcip.ca/event/start/0000001]) -->|crm:P7_took_place_at| 7(["geo:2998517"])
3([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]) -->|rdfs:label| 8(["''Time-Span of Birth of Atget, Eugène''@en"]):::Literal
3([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]) -->|crm:P82b_end_of_the_end| 9(["''1856-02-12T23:59:59Z''"]):::Literal
3([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]):::Time-Span_URI -->|rdf:type| 10["crm:E52_Time-Span"]:::Time-Span
3([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]) -->|rdfs:label| 11(["''Durée de l’événement de naissance de Atget, Eugène''@fr"]):::Literal
3([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]) -->|crm:P82a_begin_of_the_begin| 12(["''1856-02-12T00:00:00Z''"]):::Literal
7(["geo:2998517"]):::Place_URI -->|rdf:type| 13["crm:E53_Place"]:::Place
7(["geo:2998517"]) -->|rdfs:label| 14(["''Libourne, France''@fr"]):::Literal
0([https://chin-rcip.ca/e39/0000001]) -->|rdf:label| 15(["Eugène Atget"]):::Literal


</div>

####  Diagram of the Relationship pattern of <i>François Baillairgé</i>and <i>William-Duval Baillairgé</i>:

<div class="mermaid" onclick="sizeToggle(this)">
	graph TD
classDef Literal fill:#f2f2f2,stroke:#a6a6a6;
classDef URI fill:#cccccc,stroke:#000000;
classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
classDef Temporal_Entity fill:#00C9E6, stroke:#000000;
classDef Type fill:#E18312, stroke:#000000;
classDef Time-Span fill:#2C9C91, stroke:#000000;
classDef Appellation fill:#FFEB7F, stroke:#000000;
classDef Place fill:#008836, stroke:#000000;
classDef Persistent_Item fill:#B266B2, stroke:#000000;
classDef Conceptual_Object fill:#FFD700, stroke:#000000;
classDef Physical_Object fill:#D2B48C, stroke:#000000;
classDef Actor fill:#F9A8C2, stroke:#000000;
classDef PC_Classes fill:#bbff99, stroke:#000000;
A1([https://chin-rcip.ca/e39/0000002]):::URI -->|crm:P02i_is_range_of| B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::Literal
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::URI -->|rdfs:label| C1(["''Role of Baillairgé, François in the relationship with Baillairgé, William-Duval''@en"]):::Literal
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::URI -->|crm:P14.1_in_the_role_of| C2([https://chin-rcip.ca/type/role/related%20to]):::Literal
C2([https://chin-rcip.ca/type/role/related%20to]) -->|rdf:type| D1[crm:E55_Type]:::Type
C2([https://chin-rcip.ca/type/role/related%20to]):::URI -->|rdfs:label| D2(["''related to''@en"]):::Literal
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::URI -->|crm:P01_has_domain| C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::Literal
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::URI -->|crm:P01i_is_domain_of| D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::Literal
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::URI -->|crm:P14.1_in_the_role_of| E1([https://chin-rcip.ca/type/role/related%20to]):::Literal
E1([https://chin-rcip.ca/type/role/related%20to]) -->|rdf:type| F1[crm:E55_Type]:::Type
E1([https://chin-rcip.ca/type/role/related%20to]):::URI -->|rdfs:label| F2(["''related to''@en"]):::Literal
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::URI -->|rdfs:label| E2(["''Role of Baillairgé, William-Duval in the relationship with Baillairgé, François''@en"]):::Literal
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]) -->|rdf:type| E3[crm:PC14_carried_out_by]:::PC_Classes
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::URI -->|crm:P02_has_range| E4([http://vocab.getty.edu/ulan/500123204]):::Literal
E4([http://vocab.getty.edu/ulan/500123204]) -->|rdf:type| F3[crm:E21_Person]:::Actor
E4([http://vocab.getty.edu/ulan/500123204]):::URI -->|rdfs:label| F4(["''Baillairgé, William-Duval''@en"]):::Literal
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::URI -->|crm:P2_has_type| D4([https://chin-rcip.ca/type/relationship/Family]):::Literal
D4([https://chin-rcip.ca/type/relationship/Family]):::URI -->|rdfs:label| E5(["''Family''@en"]):::Literal
D4([https://chin-rcip.ca/type/relationship/Family]) -->|rdf:type| E6[crm:E55_Type]:::Type
D4([https://chin-rcip.ca/type/relationship/Family]):::URI -->|crm:P2_has_type| E7([https://chin-rcip.ca/type/relationship]):::Literal
E7([https://chin-rcip.ca/type/relationship]):::URI -->|rdfs:label| F5(["''Relationship''@en"]):::Literal
E7([https://chin-rcip.ca/type/relationship]) -->|rdf:type| F6[crm:E55_Type]:::Type
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::URI -->|rdfs:label| D5(["''Family relationship event between Baillairgé, François and Baillairgé, William-Duval''@en"]):::Literal
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]) -->|rdf:type| D6[crm:E7_Activity]:::Temporal_Entity
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]) -->|rdf:type| C4[crm:PC14_carried_out_by]:::PC_Classes
A1([https://chin-rcip.ca/e39/0000002]):::URI -->|rdfs:label| B2(["''François Baillairgé''@fr"]):::Literal
A1([https://chin-rcip.ca/e39/0000002]) -->|rdf:type| B3[crm:E21_Person]:::Actor
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
	
</style>

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
</script>