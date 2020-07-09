# Visualization of RDF data using Mermaid JS

<script src="https://cdn.jsdelivr.net/npm/mermaid@8.5.2/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

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

<https://www.rdm.net/event/0002> a crm:E67_Birth ;
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

<div class="mermaid">
graph TD
classDef Literal fill:#f2f2f2,stroke:#a6a6a6;
classDef URI fill:#cccccc,stroke:#000000;
classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
classDef Temporal_Entity fill:#00C9E6, stroke:#000000;
classDef Type fill:#E18312, stroke:#000000;
classDef Time-Span fill:#2C9C91, stroke:#000000;
classDef Appellation fill:#FFEB7F, stroke:#000000;
classDef Place fill:#008836, stroke:#000000;
classDef Persistent_Item fill:#A4A0A3, stroke:#000000;
classDef Conceptual_Object fill:#FFD700, stroke:#000000;
classDef Physical_Object fill:#D2B48C, stroke:#000000;
classDef Actor fill:#F9A8C2, stroke:#000000;
classDef PC_Classes fill:#bbff99, stroke:#000000;
A1([https://www.rdm.net/person/0001]) -->|rdf:type| B1[crm:E21_Person]:::Actor
A1([https://www.rdm.net/person/0001]):::URI -->|crm:P100i_died_in| B2([https://www.rdm.net/event/0002]):::Literal
B2([https://www.rdm.net/event/0002]):::URI -->|crm:P7_took_place_at| C1([http://www.rdm.net/place/0002]):::Literal
C1([http://www.rdm.net/place/0002]) -->|rdf:type| D1[crm:E53_Place]:::Place
B2([https://www.rdm.net/event/0002]) -->|rdf:type| C2[crm:E67_Birth]:::Temporal_Entity
B2([https://www.rdm.net/event/0002]):::URI -->|crm:P4_has_time-span| C3([http://www.rdm.net/time-span/0002]):::Literal
C3([http://www.rdm.net/time-span/0002]) -->|rdf:type| D2[crm:E52_Time-Span]:::Time-Span
C3([http://www.rdm.net/time-span/0002]):::URI -->|crm:P82a_begin_of_the_begin| D3(["1985-12-25T00:00:00-04:00"^^xsd:dateTime]):::Literal
C3([http://www.rdm.net/time-span/0002]):::URI -->|crm:P82b_end_of_the_end| D4(["1985-12-25T23:59:59-04:00"^^xsd:dateTime]):::Literal
A1([https://www.rdm.net/person/0001]):::URI -->|crm:P98i_was_born| B3([https://www.rdm.net/event/0001]):::Literal
B3([https://www.rdm.net/event/0001]):::URI -->|crm:P4_has_time-span| C4([http://www.rdm.net/time-span/0001]):::Literal
C4([http://www.rdm.net/time-span/0001]) -->|rdf:type| D5[crm:E52_Time-Span]:::Time-Span
C4([http://www.rdm.net/time-span/0001]):::URI -->|crm:P82b_end_of_the_end| D6(["1900-02-20T23:59:59-04:00"^^xsd:dateTime]):::Literal
C4([http://www.rdm.net/time-span/0001]):::URI -->|crm:P82a_begin_of_the_begin| D7(["1900-02-20T00:00:00-04:00"^^xsd:dateTime]):::Literal
B3([https://www.rdm.net/event/0001]):::URI -->|crm:P7_took_place_at| C5([http://www.rdm.net/place/0001]):::Literal
C5([http://www.rdm.net/place/0001]) -->|rdf:type| D8[crm:E53_Place]:::Place
B3([https://www.rdm.net/event/0001]) -->|rdf:type| C6[crm:E67_Birth]:::Temporal_Entity
</div>

### Other examples from MAC dataset

#### Diagram of Identifier and Applellation of <i>Eugène Atget</i>:

<div class="mermaid">
	graph TD
   	classDef default fill:#FFFFFF,stroke:#000000;
		classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
		classDef Temporal_Entity fill:#00C9E6, stroke:#000000;
		classDef Type fill:#E18312, stroke:#000000;
		classDef Time-Span fill:#2C9C91, stroke:#000000;
		classDef Appellation fill:#FFEB7F, stroke:#000000;
		classDef Place fill:#008836, stroke:#000000;
		classDef Persistent_Item fill:#A4A0A3, stroke:#000000;
		classDef Conceptual_Object fill:#FFD700, stroke:#000000;
		classDef Physical_Object fill:#D2B48C, stroke:#000000;
		classDef Actor fill:#F9A8C2, stroke:#000000;
   	A1([https://chin-rcip.ca/e39/0000001]):::Actor -->|rdf:type| B1[crm:E21_Person]:::Actor
	A1([https://chin-rcip.ca/e39/0000001]) -->|crm:P1_is_identified_by| B2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988])
	B2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|crm:P2_has_type| C1([https://chin-rcip.ca/type/id/MAC_Artistes_ID])
	C1([https://chin-rcip.ca/type/id/MAC_Artistes_ID]):::Type -->|rdf:type| D1[crm:E55_Type]:::Type
	C1([https://chin-rcip.ca/type/id/MAC_Artistes_ID]) -->|rdfs:label| D2(["MAC_Artistes_ID@en"])
	B2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|rdfs:label| C2(["Identifiant de Atget, Eugène@fr"])
	B2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]):::Appellation -->|rdf:type| C3[crm:E42_Identifier]:::Appellation
	B2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|rdfs:label| C4(["Identifier of Atget, Eugène@en"])
	B2([urn:uuid:d15f3774-d59c-4fea-9de9-d67bb4f17988]) -->|crm:P190_has_symbolic_content| C5(["380@en"])
	A1([https://chin-rcip.ca/e39/0000001]) -->|crm:P1_is_identified_by| B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38])
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|rdfs:label| C6(["Appellation complète de Atget, Eugène@fr"])
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P106_is_composed_of| C7([urn:uuid:31944458-26ee-49eb-987a-e969e391b397])
	C7([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]) -->|rdfs:label| D3(["Partie de l’appellation complète de Atget, Eugène@fr"])
	C7([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]):::Appellation -->|rdf:type| D4[crm:E41_Appellation]:::Appellation
	C7([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]) -->|crm:P190_has_symbolic_content| D5(["Eugène@fr"])
	C7([urn:uuid:31944458-26ee-49eb-987a-e969e391b397]) -->|rdfs:label| D6(["Part of the full appellation of Atget, Eugène@en"])
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|rdfs:label| C8(["Full appellation of Atget, Eugène@en"])
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]):::Persistent_Item -->|rdf:type| C9[crm:E33_Linguistic_Object]:::Persistent_Item
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P190_has_symbolic_content| C10(["Atget, Eugène@fr"])
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P2_has_type| C11([aat:300404688])
	C11([aat:300404688]) -->|crm:P2_has_type| D7([https://chin-rcip.ca/type/appellation_type])
	D7([https://chin-rcip.ca/type/appellation_type]) -->|rdfs:label| E1(["Appellation Type@en"])
	D7([https://chin-rcip.ca/type/appellation_type]):::Type -->|rdf:type| E2[crm:E55_Type]:::Type
	C11([aat:300404688]) -->|rdfs:label| D8(["full name@en"])
	C11([aat:300404688]):::Type -->|rdf:type| D9[crm:E55_Type]:::Type
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]) -->|crm:P106_is_composed_of| C12([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339])
	C12([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]):::Appellation -->|rdf:type| D10[crm:E41_Appellation]:::Appellation
	C12([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|crm:P190_has_symbolic_content| D11(["Atget@fr"])
	C12([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|crm:P2_has_type| D12([aat:300404652])
	D12([aat:300404652]) -->|crm:P2_has_type| E3([https://chin-rcip.ca/type/appellation_part_type])
	D12([aat:300404652]) -->|rdfs:label| E4(["last name@en"])
	D12([aat:300404652]):::Type -->|rdf:type| E5[crm:E55_Type]:::Type
	C12([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|rdfs:label| D13(["Part of the full appellation of Atget, Eugène@en"])
	C12([urn:uuid:048747f0-daf7-4fae-bf5f-4d6cc4cce339]) -->|rdfs:label| D14(["Partie de l’appellation complète de Atget, Eugène@fr"])
	B3([urn:uuid:61ee1fcc-ab0a-42de-a97f-577c82daaa38]):::Appellation -->|rdf:type| C13[crm:E41_Appellation]:::Appellation
	A1([https://chin-rcip.ca/e39/0000001]) -->|rdfs:label| B4(["Eugène Atget@fr"])

</div>

####  Diagram of the Birth Event pattern of <i>Eugène Atget</i>:

<div class="mermaid">
	graph TD
classDef Literal fill:#ffcccc,stroke:#ff4d4d;
classDef URI fill:#ff9999,stroke:#000000;
classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
classDef Temporal_Entity fill:#00C9E6, stroke:#000000;
classDef Type fill:#E18312, stroke:#000000;
classDef Time-Span fill:#2C9C91, stroke:#000000;
classDef Appellation fill:#FFEB7F, stroke:#000000;
classDef Place fill:#008836, stroke:#000000;
classDef Persistent_Item fill:#A4A0A3, stroke:#000000;
classDef Conceptual_Object fill:#FFD700, stroke:#000000;
classDef Physical_Object fill:#D2B48C, stroke:#000000;
classDef Actor fill:#F9A8C2, stroke:#000000;
A1([https://chin-rcip.ca/e39/0000001]):::URI -->|crm:P98i_was_born| B1([https://chin-rcip.ca/event/start/0000001]):::Literal
B1([https://chin-rcip.ca/event/start/0000001]):::URI -->|crm:P4_has_time-span| C1([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]):::Literal
C1([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]):::URI -->|crm:P82a_begin_of_the_begin| D1(["1856-02-12T00:00:00Z"]):::Literal
C1([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]):::URI -->|crm:P82b_end_of_the_end| D2(["1856-02-12T23:59:59Z"]):::Literal
C1([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]):::URI -->|rdfs:label| D3(["Durée de l’événement de naissance de Atget, Eugène@fr"]):::Literal
C1([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]) -->|rdf:type| D4[crm:E52_Time-Span]:::Time-Span
C1([urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec]):::URI -->|rdfs:label| D5(["Time-Span of Birth of Atget, Eugène@en"]):::Literal
B1([https://chin-rcip.ca/event/start/0000001]) -->|rdf:type| C2[crm:E67_Birth]:::Temporal_Entity
B1([https://chin-rcip.ca/event/start/0000001]):::URI -->|rdfs:label| C3(["Birth event of Atget, Eugène@en"]):::Literal
B1([https://chin-rcip.ca/event/start/0000001]):::URI -->|crm:P7_took_place_at| C4([geo:2998517]):::Literal
C4([geo:2998517]):::URI -->|rdfs:label| D6(["Libourne, France@fr"]):::Literal
C4([geo:2998517]) -->|rdf:type| D7[crm:E53_Place]:::Place
B1([https://chin-rcip.ca/event/start/0000001]):::URI -->|rdfs:label| C5(["Événement de naissance de Atget, Eugène@fr"]):::Literal
A1([https://chin-rcip.ca/e39/0000001]) -->|rdf:type| B2[crm:E21_Person]:::Actor
A1([https://chin-rcip.ca/e39/0000001]):::URI -->|rdfs:label| B3(["Eugène Atget@fr"]):::Literal

</div>

####  Diagram of the Relationship pattern of <i>François Baillairgé</i>and <i>William-Duval Baillairgé</i>:

<div class="mermaid">
	graph TD
classDef Literal fill:#f2f2f2,stroke:#a6a6a6;
classDef URI fill:#cccccc,stroke:#000000;
classDef CRM_Entity fill:#FFFFFF,stroke:#000000;
classDef Temporal_Entity fill:#00C9E6, stroke:#000000;
classDef Type fill:#E18312, stroke:#000000;
classDef Time-Span fill:#2C9C91, stroke:#000000;
classDef Appellation fill:#FFEB7F, stroke:#000000;
classDef Place fill:#008836, stroke:#000000;
classDef Persistent_Item fill:#A4A0A3, stroke:#000000;
classDef Conceptual_Object fill:#FFD700, stroke:#000000;
classDef Physical_Object fill:#D2B48C, stroke:#000000;
classDef Actor fill:#F9A8C2, stroke:#000000;
classDef PC_Classes fill:#bbff99, stroke:#000000;
A1([https://chin-rcip.ca/e39/0000002]):::URI -->|crm:P02i_is_range_of| B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::Literal
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::URI -->|rdfs:label| C1(["Role of Baillairgé, François in the relationship with Baillairgé, William-Duval@en"]):::Literal
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::URI -->|crm:P14.1_in_the_role_of| C2([https://chin-rcip.ca/type/role/related%20to]):::Literal
C2([https://chin-rcip.ca/type/role/related%20to]) -->|rdf:type| D1[crm:E55_Type]:::Type
C2([https://chin-rcip.ca/type/role/related%20to]):::URI -->|rdfs:label| D2(["related to@en"]):::Literal
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]):::URI -->|crm:P01_has_domain| C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::Literal
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::URI -->|crm:P01i_is_domain_of| D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::Literal
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::URI -->|crm:P14.1_in_the_role_of| E1([https://chin-rcip.ca/type/role/related%20to]):::Literal
E1([https://chin-rcip.ca/type/role/related%20to]) -->|rdf:type| F1[crm:E55_Type]:::Type
E1([https://chin-rcip.ca/type/role/related%20to]):::URI -->|rdfs:label| F2(["related to@en"]):::Literal
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::URI -->|rdfs:label| E2(["Role of Baillairgé, William-Duval in the relationship with Baillairgé, François@en"]):::Literal
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]) -->|rdf:type| E3[crm:PC14_carried_out_by]:::PC_Classes
D3([urn:uuid:a7eed89f-b392-4fe5-b532-3bf054546920]):::URI -->|crm:P02_has_range| E4([http://vocab.getty.edu/ulan/500123204]):::Literal
E4([http://vocab.getty.edu/ulan/500123204]) -->|rdf:type| F3[crm:E21_Person]:::Actor
E4([http://vocab.getty.edu/ulan/500123204]):::URI -->|rdfs:label| F4(["Baillairgé, William-Duval@en"]):::Literal
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::URI -->|crm:P2_has_type| D4([https://chin-rcip.ca/type/relationship/Family]):::Literal
D4([https://chin-rcip.ca/type/relationship/Family]):::URI -->|rdfs:label| E5(["Family@en"]):::Literal
D4([https://chin-rcip.ca/type/relationship/Family]) -->|rdf:type| E6[crm:E55_Type]:::Type
D4([https://chin-rcip.ca/type/relationship/Family]):::URI -->|crm:P2_has_type| E7([https://chin-rcip.ca/type/relationship]):::Literal
E7([https://chin-rcip.ca/type/relationship]):::URI -->|rdfs:label| F5(["Relationship@en"]):::Literal
E7([https://chin-rcip.ca/type/relationship]) -->|rdf:type| F6[crm:E55_Type]:::Type
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]):::URI -->|rdfs:label| D5(["Family relationship event between Baillairgé, François and Baillairgé, William-Duval@en"]):::Literal
C3([urn:uuid:605caa81-dc27-4567-a0c2-a3f3481752b5]) -->|rdf:type| D6[crm:E7_Activity]:::Temporal_Entity
B1([urn:uuid:d672c449-1473-4a86-8969-0749a5e27f0c]) -->|rdf:type| C4[crm:PC14_carried_out_by]:::PC_Classes
A1([https://chin-rcip.ca/e39/0000002]):::URI -->|rdfs:label| B2(["François Baillairgé@fr"]):::Literal
A1([https://chin-rcip.ca/e39/0000002]) -->|rdf:type| B3[crm:E21_Person]:::Actor
</div>