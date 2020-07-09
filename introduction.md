# Introduction

## Purpose of the Target Model

In keeping with its mandate to “assist Canadian museums in documenting, managing, and sharing information about their collections”, the Canadian Heritage Information Network (CHIN) plans to provide the resources it creates and the data it aggregates in linked open data (LOD) [(Canadian Heritage Information Network (CHIN) 2019)](https://www.zotero.org/google-docs/?SqR3pI). This is in order to contribute to the breaking of data silos and give better access to Canadian heritage information online. Before modernising Artefacts Canada (AC) by converting it in accordance with LOD principles, CHIN will work on a smaller scale project titled *SemMuse Actors* (Actors), which will later be part of the larger Collections model supporting Artefacts Canada.

The scope of this project is to consolidate, in unique records, the information pertaining to actors related to objects from Canadian museums collections. An actor includes any individual (artist, artisan, etc.) or group (manufacturer, group of artists, etc.) who took part in the creation of or is related to artefacts collected by Canadian museums.

That said, specific museums may document targeted or niche aspects of an actor's life or object, aspects that are relevant solely to that museum (e.g. a museum dedicated to firefighters might document the level of first-aid training an actor received). The Actors and/or Collections models will not model such specific information in order to  avoid unnecessary complexity as many museums will have individual needs that are not shared by their counterparts. See the closed Issue #19 for the detailed discussion about this topic.

>🔎To Be Discussed
>This is discussed on CHIN’s [Github Issue #19](https://github.com/chin-rcip/chin-rcip/issues/19)

The first challenge will be to standardize into a single format data that will be varied in structure, format and languages when collecting and aggregating them. The second and most ambitious challenge will be to reconcile data coming from numerous and varied sources. Reconciling, here, implies two main steps:

1. Identifying single entities amongst different entries that manifest the same information;
2. Attributing to these entries unique identifiers that relate them to those single entities.

To succeed in those objectives, two major steps are required:

1. Conversion of inputed GLAM data to a unique format and structure (XML);
2. Conversion of uniquely formatted data to structured RDF.

To accomplish these successfully, CHIN has already developed an intended Data Pipeline [Documentation](https://drive.google.com/open?id=1W_vsT_Br86BRR92SWEqFX90861Nu3mUTmx_fAyuOE5A) and [Schema](https://drive.google.com/open?id=1qalobG-9YmV3cQ9-pBRYxRW9wQP2PrAg). This process relies on two major tools: the [Reference Documentation](https://drive.google.com/open?id=1-9B8plo0LZg-5H643mgJumzy6XEF3PYlAwGTFuHaxKA) and the Target Model.

The Reference Documentation, as its name suggests, will be the reference for Canadian institutions to map their data to. It describes the fields needed by CHIN to convert structural data to LOD standards through the Target Model. The Reference Documentation will guide the mapping of museums’ data—whose structures and formats are varied—to a single framework (whether it be in JSON-LD, RDF/XML or other formats). The main benefit of the Reference Documentation is its user-friendliness: by not relying directly on complex LOD structures, the Reference Documentation makes the mapping process easier for non-specialists.  

The Target Model __ complies with LOD standards and, as such, will guide the transfer from the aforementioned unique format to RDF. In this process, museums’ data that is generally represented in tables or arborescences will be converted into a [Knowledge Graph](https://en.wikipedia.org/wiki/Knowledge_Graph) in accordance with the structure and rules of Semantic Web Ontologies (e.g. [CIDOC CRM](http://www.cidoc-crm.org/), [FOAF](http://xmlns.com/foaf/spec/), [Schema.org](https://schema.org/)).

## Methods and Sources

This model has been developed using an incremental modeling framework informed by Linked Open Data principles, most notably interoperability, semantic richness and meaningfulness, shareability, usability, transparency, and collaboration. In accordance with the latter, the following best practices were adopted from the start:

1. Use[ URIs](https://en.wikipedia.org/wiki/Uniform_resource_identifier) to identify elements;
2. Use open standards such as[ RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) or [SPARQL](https://en.wikipedia.org/wiki/SPARQL);
3. Refer to other elements using their[ URIs](https://en.wikipedia.org/wiki/HTTP) whenever possible.

In addition, in order to facilitate collaboration and reuse, a transparent approach to development has been adopted whereas issues pertaining to the model are publically displayed and discussed on [Github](https://github.com/chin-rcip/chin-rcip) where the model’s implementation will eventually be published as well, along with relevant documentation.

This model is being developed using a prototyping and iterative approach whereas a first version will be tested in the following manner:

1. Testing a first version of the model using datasets that are already accessible online.
2. Revising the model accordingly.
3. Testing the model with a collaborating institution willing to provide a suitable dataset as well as feedback in order to test CHIN’s [Data Pipeline](https://drive.google.com/open?id=1W_vsT_Br86BRR92SWEqFX90861Nu3mUTmx_fAyuOE5A) and model, from the ingestion of the data to its publication.
4. Revising the model accordingly.
5. Testing the model with another collaborating institution and revising accordingly as many times as necessary.
6. Publishing the data in LOD (SPARQL endpoint, public interface) as well as the model officially along with the relevant documentation.
7. Expanding the model with an Objects Facet using the same approach and having learned from the development of the Actors Facet. This will likely entail starting over this same process at a larger scale as well as updating the Actors Facet where necessary.

Even though CHIN intends to develop a model that will account for both Objects and Actors from Canadian collections, it has for now focused on the representation of Actors in order to allow for an incremental development of the Collections model where Actors and Objects facets will be equal and interrelated.

For the purposes of this model, an actor encompasses any individual or group who took part in the creation of or is related to artefacts collected by museums. This includes creators (artists, artisans, manufacturers, groups of artists, etc.) as well as other important actors such as owners, patrons, persons depicted, etc. (please note that although all such profiles will be accounted for, only data that is compliant with privacy and legal legislation as well as the data provider’s wishes will be published).

CHIN has elected to develop Actors first as it is a smaller ensemble to modelise and because relationships are likely to be amongst the most complex parts of the final model so that tackling these first will give a good overview of the challenges to come.

Because this Actors Facet will be a small but determining aspect of the Collections model in general, it has been developed accordingly and the choice of an ontology has been reliant on three key factors that take the whole model into consideration:  

1. Adoption by the heritage semantic community in order to foster interoperability;
2. Richness and sustainability of the ontology;
3. Adequate representation of institutional data that is largely focused on objects rather than people.

In this context, CHIN elected to work with the CIDOC CRM ontology. Because it has been developed by the International Council of Museums (ICOM) for museums and with their needs in mind, it is by far the most used within this field. For this reason and because it is under ICOM’s custody, CIDOC CRM also appears to be a sustainable choice. It is regularly updated and adapted to the needs of said community, thus offering a rich and precise framework to work with. Finally, as an event-based ontology, it is suited to adequately represent both Actors and Objects by linking instances (people, objects, etc.) together through events that can be situated in time and space.

Relationships are amongst the most difficult events to represent in CIDOC CRM as their complexity renders many patterns suitable to represent a single event. As such, treating the Actors Facet first seems to be preferable considering the Objects Facet will be more in line with what CIDOC CRM is usually utilised for: representing data pertaining to heritage or historical objects.

More information about CIDOC CRM can be found on their [website](http://www.cidoc-crm.org/).

The current model, focused on actors related to objects from Canadian museums’ collections, consolidates the information pertaining to them in unique, non-authoritative records. Although CHIN is the custodian of the data that will be submitted to the model, this data will be provided by outside contributors (museums, libraries, researchers, etc.). As such, CHIN does not claim authority over the data content of records, nor does it intervene in museums’ data beyond mapping, cleaning and reconciliation as well as the creation of unique identifiers. CHIN’s role in cohering these data will be that of a custodian with no expert status on the information they represent.

## Modeling Conventions

The following conventions will be used when representing modeling patterns in this document.

### Patterns

The ontological relationships between classes have been represented diagrammatically where the structure of triples is visualised instead of the triples themselves.

It is important to note that in reality it is the instances that are connected to each other through properties, not the classes themselves like the diagrams might imply. For clarity and visibility sake however, modeling patterns will not display instances (they will be represented in examples however, as shown below).

<iframe frameborder="0" style="width:100%;height:283px;" src="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Conventions_0.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1tP4V68oU1n7l5HedZXb5nFrfnYu2yHXg%26export%3Ddownload"></iframe>

For example, the diagram below illustrates that any instance of the class `E21 Person` can be linked to an instance of the class `E55 Type` through the property `P2 has type`.

<iframe frameborder="0" style="width:100%;height:393px;" src="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Convention_1.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1xYoDbLQATAwctGv0fto-jThgQ6wxm6D7%26export%3Ddownload"></iframe>

To facilitate understanding and visually convey how CIDOC CRM entities are used to model different kinds of information, the colour conventions below have been adopted to represent top-level classes along with their subclasses.

<iframe frameborder="0" style="width:100%;height:243px;" src="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Convention_colors.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1LMF5iRQKFyNoq5BkehhjQUy8xv1HVs8u%26export%3Ddownload"></iframe>

In addition, fields defined in the Reference Documentation are indicated in bold above their respective class name, as shown below:

<iframe frameborder="0" style="width:100%;height:543px;" src="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Conventions_2.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1HILva7PuFDfsCg5daNYxTva-BtlwTjBg%26export%3Ddownload"></iframe>

In the above diagram, the “Birth Place”,  “Birth Date Begin” and “Birth Date End” fields from the Reference Documentation are denoted in bold. In addition to facilitating the understanding of both the Target Model and its Reference Documentation, this also illustrates how the translation of the data to a semantic framework generates several new elements such as `E67 Birth` event and `E52 Time-Span`.

Sometimes, an `E55 Type` can only have a single instance in a specific pattern. In such a case, it is named in quotation marks underneath the name of the class, as follows:

<iframe frameborder="0" style="width:100%;height:243px;" src="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Conventions_3.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1qnZZqU6wsy-5dMs86vKqeWtJ-iuNHTlS%26export%3Ddownload"></iframe>

The diagram above represents the gender pattern. The middle element corresponds to the Reference Documentation “Gender” field (hence it is in bold) to signal that the content found in this field indicates the gender of the person (e.g. male, female, two-spirit, …). This information is then typed with another `E55 Type` that always has the “Gender” value to indicate that the aforementioned data (e.g. male, female, two-spirit, …) concerns gender. For example, Jean Paul Riopelle has the type “Male”, and this type has the type “Gender”.

### Examples

Throughout the documentation each example is represented in a pattern where instances are illustrated (in ovals rather than rectangles) in addition to their structured diagrams. Instances are represented in the examples, unlike in the modeling patterns where they are not.

For example, the triples mapped to the gender pattern mentioned above would look like the following:

<iframe frameborder="0" style="width:100%;height:323px;" src="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Conventions_4.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1C8p1lpiLNDykkf1HUK4SVfJ6jf0p6UQ5%26export%3Ddownload"></iframe>

In this diagram, each instance (the instances of Jean Paul Riopelle, of the gender Male, and of the type Gender) are linked together through properties in accordance with the structure of the corresponding pattern in the model.
<script src="https://cdn.jsdelivr.net/npm/mermaid@8.5.2/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({startOnLoad:true});</script>
<div class="mermaid">
graph TD
      	A1(https://chin-rcip.ca/e39/0000001) -->|crm:P98i_was_born| B1(https://chin-rcip.ca/event/start/0000001)
		B1(https://chin-rcip.ca/event/start/0000001):::Temporal_Entity -->|rdf:type| C1[crm:E67_Birth]:::Temporal_Entity
		B1(https://chin-rcip.ca/event/start/0000001) -->|rdfs:label| C2("Événement de naissance de Atget, Eugène@fr")
		B1(https://chin-rcip.ca/event/start/0000001) -->|crm:P7_took_place_at| C3(geo:2998517)
		C3(geo:2998517):::Place -->|rdf:type| D1[crm:E53_Place]:::Place
		C3(geo:2998517) -->|rdfs:label| D2("Libourne, France@fr")
		B1(https://chin-rcip.ca/event/start/0000001) -->|crm:P4_has_time-span| C4(urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec)
		C4(urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec) -->|rdfs:label| D3("Time-Span of Birth of Atget, Eugène@en")
		C4(urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec) -->|crm:P82b_end_of_the_end| D4("1856-02-12T23:59:59Z")
		C4(urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec) -->|rdfs:label| D5("Durée de l’événement de naissance de Atget, Eugène@fr")
		C4(urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec):::Time-Span -->|rdf:type| D6[crm:E52_Time-Span]:::Time-Span
		C4(urn:uuid:dad2b7e8-cb47-4b79-be8d-30d29290bfec) -->|crm:P82a_begin_of_the_begin| D7("1856-02-12T00:00:00Z")
		B1(https://chin-rcip.ca/event/start/0000001) -->|rdfs:label| C5("Birth event of Atget, Eugène@en")
		A1(https://chin-rcip.ca/e39/0000001) -->|rdfs:label| B2("Eugène Atget@fr")
		A1(https://chin-rcip.ca/e39/0000001):::Actor -->|rdf:type| B3[crm:E21_Person]:::Actor

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
</div>    
