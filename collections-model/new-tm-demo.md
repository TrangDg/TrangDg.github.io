<head>
<link href="https://cdn.jsdelivr.net/npm/prismjs@1.24.1/themes/prism.css" rel="stylesheet" />
</head>

# Birth and Death of a Person
## At glance
This pattern can be used to represent the information pertaining to the lifespan of a person (birth and death) .  This includes: 
Date and location of the birth of a person;
Biological parents of a person; 
Date and location of the death of a person; 
Location of the remains (burial place) of a person. 
It pertains specifically to the vital information of persons and not to their relationships, or to the vital information of non-human agents (e.g. animals or groups) or non-living humans (e.g. human remains). As such, it does not include: 
Adoptive parents of a person (use the [relationship](/collections-model/en/target-model/current/relationships) pattern instead); 
Relationship of a person to their parents (i.e. the pattern describes biological parenthood rather than the social bond between the person and their parents) (use the [relationship](/collections-model/en/target-model/current/relationships) pattern instead);
Belonging of a person to a family (use the [family belonging](/collections-model/en/target-model/current/family-belonging) pattern instead);
Cause of the death of the person;
Date and location of the birth of a non-human agent such as an animal or thing;
Date and location of the birth and death of a non-human agent such as an animal or thing; 
Location of the remains (burial place) of a non-human agent such as an animal or thing.  

## Introduction and context
### Statement of need
The recording of vital statistics pertaining to the birth and death of people dates back to Antiquity when such information was used by states to determine taxation and estimate military manpower (Brumberg & al 2012, 407). It is a statistically and culturally important part of heritage data that is often used to situate actors within larger societal and demographic trends, and is a key element of genealogy and family history research (Library and Archives Canada 2020 §Births, Marriages and Deaths Recorded in Canada§). 
Such data is useful to visualize trends in family composition, genealogical lineage, localization of actors in space and time, or national belonging (i.e. since polities can change over time, for example Yousuf Karsh was born in modern-day Turkey at a time when it was the Ottoman Empire (Editors of Encyclopaedia Britannica n.d., “Yousuf Karsh” §Yousuf Karsh§)). Burial locations, in particular, can be indicative of social mores and practices surrounding death, and are increasingly recorded by players interested in genealogy or heritage data such as [Wikidata](https://www.wikidata.org/wiki/Property:P119) (Wikidata 2021 §place of burial (P119)§) or [genealogical institutes](https://www.familysearch.org/wiki/en/Canada_Cemeteries) (FamilySearch 2020 §Canada Cemeteries§).
Yet, it is important to keep in mind that vital information is often inconsistently or problematically recorded, and census data is heavily framed by census methodology so that any such use of vital information must be heavily pondered (Hamilton 2008 §“Anyone not on the list might as well be dead”: Aboriginal Peoples and the Censuses of Canada, 1851–1916§). For example, colonial records of Indigenous ancestry are notoriously flawed and have often either not recorded Indigenous actors, or done so using colonial methods of collecting, recording, and archiving that do not encompass the traditions and concepts deemed relevant to their ancestry by Indigenous Peoples (Devlin & Cuggy 2017 §Settler Records, Indigenous Histories: Challenges in Indigenous Genealogical Research§; Royal British Columbia Museum 2018 §Resources for First Nations Genealogical Research at the BC Archives§). As such, such uses of vital records should be done critically and cautiously. 
It is not only statistically meaningful, but also crucial to the disambiguation of actors (i.e. two different people might have the same name by happenstance, or a single person might be associated to several names or spellings of a name) as it can be used to confirm someone’s identity (OCLC 2019, 4 §Virtual International Authority File Guidelines§). 
Because such information is commonly used by heritage institutions as well as relied upon for disambiguation purposes, it is likely to be amongst the most widely documented. This, in turn, means that such vital data will predictably be amongst the most subject to exchange and mobilization by several providers. Interoperability with other relevant models is thus of importance in the development of these patterns.  
This indicates a need for an identification of who was born when, where, and to whom (biological mother and father), as well as when and where they died, and where their remains are located. 
## Description of the pattern
The Birth and Death pattern is based on a modelling approach where an event embodies the “creation” and “ending” of the entity (an `E21_Person` instance). 
The birth of a person is modelled as follows :
A `E21_Person` instance is linked fromto their `E67_Birth`instance through the property `P98_brought_into_life` that is linked to an instance of `E21_Person` representing the person’s biological mother using the property `P96_by_mother` to link to the `E21_Person`instance of said mother, identified by an instance of both `E41_Appellation` and `E33_Linguistic_Object`pointing to the mother’s name value entered in the [mother appellation](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#mother-appellation) entry node. 
Similarly, from the same instance of `E67_Birth`, the person is linked to an instance of `E21_Person` representing their biological father using the property `P97_from_father` to link to the `E21_Person`instance of said father, identified by an instance of both `E41_Appellation` and `E33_Linguistic_Object`pointing to the father’s name value entered in the [father appellation](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#father-appellation) entry node. 
Where the birth occurred is indicated by an instance of `E53_Place` whose value is entered in the [Birth Place](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-place) entry node. The instance of `E53_Place` is linked to the instance of`E67_Birth`through the property `P7_took_place_at` .
When it occurred is indicated by a [datation pattern](/collections-model/en/target-model/current/datation) linked to the `E67_Birth`instance through the property `P4_has_time-span`. 
The death of a person is modelled as follows: 
A `E21_Person` instance is linked to their `E69_Death`instance through the property `P100_was_death_of` as well as to an `E9_Move`instance using the property `P25_moved`, together with the property `P26_moved_to` tothat captures the moving of the deceased’s body from their last location to their [final disposition place](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#final-disposition-place), which is indicated as a `E55_Type`instance of “Burial Place” through the property `P2_has_type`. 
The `E69_Death` instance is indicated as having necessarily occurred *before* the `E9_Move` instance by using the CRMarcheo property `AP28_occurs_before`. 
Where the death occurred is indicated an instance of `E53_Place` whose value is entered in the [Death Place](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-place) entry node. This instance of `E53_Place` is linked to the instance of `E69_Death` through the property `P7_took_place_at`, as well as also linked to the `E9_Move`instance through the property of `P27_moved_from`. 
When the death occurred is indicated by a [datation pattern](/collections-model/en/target-model/current/datation) linked to the `E69_Death`instance through the property `P4_has_time-span`.  

## Diagram
<a name="039_Pattern_BirthDeath_p"></a>039_Pattern_BirthDeath_p
<iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=039_Pattern_BirthDeath_p.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D107d_h_4kMQ-nrshmNQv2YpY3ZFIMXs-j%26export%3Ddownload"></iframe>

## Examples
### Typical cases
#### Example 1
Yousuf Karsh (Actor Appellation) was born on the 23 of December 1908 (Birth Date Begin, Birth Date End))  in Mardin (Ottoman Empire) (Birth Place) to Bahiyah Nakash (Mother Appellation) and Massih Karsh (Father Appellation). He died on the 13th of July 2002 Death Date Begin, Death Date End) in Boston (MA, USA) (Death Place) and is buried at Notre-Dame Cemetery (Final Disposition Place) in Ottawa (ON, Canada) (Editors of Encyclopaedia Britannica n.d. §Yousuf Karsh§; Skidmore [2010] 2015 §Yousuf Karsh§).

<div id="0001_100_birth-death" class="example">
  <ul class="tabs-buttons">
    <li name="0001_100_birth-death_graph" class="tab active">Instances graph</li>
    <li name="0001_100_birth-death_ttl" class="tab">Turtle</li>
    <li name="0001_100_birth-death_json" class="tab">JSON-LD</li>
  </ul>
<div class="tabs-content">
<div id="0001_100_birth-death_graph" class="mermaid" onclick="sizeToggle(this)">
</div>
<div id="0001_100_birth-death_ttl" class="turtle" style="display:none" markdown="1">
<pre><code class="language-turtle"></code></pre>
</div>
<div id="0001_100_birth-death_json" class="json" style="display:none" markdown="1">
<pre><code class="language-json"></code></pre>
</div>
</div>
</div>


#### Example 2
Emily Carr (Actor Appellation) was born on the 13th of December 1871 in Victoria (BC, Canada) was born to Emily (Saunders) Carr (Mother Appellation) and Richard Carr (Father Appellation). She died on the 2nd of March 1945, also in Victoria (BC, Canada), and was buried at Ross Bay Cemetery (Victoria, BC, Canada) (Baldissera 2015, 4  §Emily Carr: Life & Work§).

<div id="0001_106_birth-death" class="example">
  <ul class="tabs-buttons">
    <li name="0001_106_birth-death_graph" class="tab active">Instances graph</li>
    <li name="0001_106_birth-death_ttl" class="tab">Turtle</li>
    <li name="0001_106_birth-death_json" class="tab">JSON-LD</li>
  </ul>
<div class="tabs-content">
<div id="0001_106_birth-death_graph" class="mermaid" onclick="sizeToggle(this)">
</div>
<div id="0001_106_birth-death_ttl" class="turtle" style="display:none" markdown="1">
<pre><code class="language-turtle"></code></pre>
</div>
<div id="0001_106_birth-death_json" class="json" style="display:none" markdown="1">
<pre><code class="language-json"></code></pre>
</div>
</div>
</div>


#### Example 3
David Altmejd (Actor Appellation) was born in 1974 in Montréal (QC, Canada) (Musée d’art contemporain de Montréal 2015 §David Altmejd§). 

<div id="0001_109_birth-death" class="example">
  <ul class="tabs-buttons">
    <li name="0001_109_birth-death_graph" class="tab active">Instances graph</li>
    <li name="0001_109_birth-death_ttl" class="tab">Turtle</li>
    <li name="0001_109_birth-death_json" class="tab">JSON-LD</li>
  </ul>
<div class="tabs-content">
<div id="0001_109_birth-death_graph" class="mermaid" onclick="sizeToggle(this)">
</div>
<div id="0001_109_birth-death_ttl" class="turtle" style="display:none" markdown="1">
<pre><code class="language-turtle"></code></pre>
</div>
<div id="0001_109_birth-death_json" class="json" style="display:none" markdown="1">
<pre><code class="language-json"></code></pre>
</div>
</div>
</div>


### Edge cases
#### Example 4
The Unknown Soldier (Actor Appellation) died in France as a soldier during the First World War. Their death thus occurred between the 3rd of October 1914 (when the first Canadian contingent sailed for Europe) and the 11th of November 1918 (when fighting stopped for Canadians, though the war ended officially with the Treaty of Versailles on the 28th of June 1919). They were buried at the Cabaret-Rouge War Cemetery near Vimy (France) before the moving of their remains in a commemorative sarcophagus in Ottawa (ON, Canada). At the moment, their move from their place of death to their burial place would not represent their passage in Cabaret-Rouge and only indicate a move from France (where they died between 1914 and 1917) to Canada (in 2000) (Foot 2018 §Canada’s Unknown Soldier§). 
#### Example 5
Ramses II died around 1213 BCE according to the egyptian chronology (Hornung & al. 2006, 476-478). His body was embalmed and deposited in tomb KV7 in the Valley of Kings (modern-day Egypt), but was soon moved and transferred into other tombs by Egyptian priests to protect it from looting, and finally discovered in tomb TT320 in 1881 (Wikipedia 2021).
In this example, the mummy transferred, or at least discovered by archæologists, should no longer be considered a `E21_Person` but rather a `E20_Biological_Object` which could be moved. At the moment, this transformation is not documented as part of the death pattern. .

## Related documentation

### External models

- Linked.art’s [birth and death/formation and dissolution](https://linked.art/model/actor/#birth-and-death-formation-and-dissolution) pattern
- Digital Object Reference Data Model’s [person existence](https://docs.swissartresearch.net/et/persons/#existence) pattern


### Entry nodes
This pattern contains the following nodes:

- [Birth/Formation Date Begin](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-date-begin)
- [Birth/Formation Date Begin Qualifier](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-date-begin-qualifier)
- [Birth/Formation Date End](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-date-end)
- [Birth/Formation Date End Qualifier](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-date-end-qualifier)
- [Birth/Formation Place](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#birthformation-place)
- [Death/Dissolution Date Begin](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-date-begin)
- [Death/Dissolution Date Begin Qualifier](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-date-begin-qualifier)
- [Death/Dissolution Date End](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-date-end)
- [Death/Dissolution Date End Qualifier](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-date-end-qualifier)
- [Death/Dissolution Place](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#deathdissolution-place)
- [Father Appellation](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#father-appellation)
- [Final Disposition Place](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#final-disposition-place)
- [Mother Appellation](https://chin-rcip.github.io/collections-model/en/semantic-paths-specification/current/entry-nodes#mother-appellation)

### CIDOC CRM Entities

- `E9_Move`
- `E21_Person`
- `E33_Linguistic_Object`
- `E41_Appellation`
- `E52_Time-Span`
- `E53_Place`
- `E55_Type`
- `E67_Birth`
- `E69_Death`
- `P1_is_identified_by`
- `P2_has_type`
- `P4_has_time-span`
- `P7_took_place_at`
- `P25_moved`
- `P26_moved_to`
- `P27_moved_from`
- `P79_beginning_is_qualified_by`
- `P80_end_is_qualified_by`
- `P82a_at_some_time_within`
- `P82b_at_some_time_within`
- `P96_by_mother`
- `P97_from_father`
- `P98_brought_into_life`
- `P100_was_death_of`
- `P190_has_symbolic_content`
- `AP28_occurs_before`(`P120_occurs_before`)

## Discussion

### Rationale
The distinction between biological filiation (i.e. biologically being the mother and father of a person) and parentship (i.e. the social relationship the person has to their parents and vice-versa) are considered distinct in the context of this model so that each type of parental affiliation can be precisely and accurately recorded. The recording of parental and family interactions is modelled using the [relationship pattern](https://chin-rcip.github.io/collections-model/en/target-model/current/social-bonds#relationships). As such, the biological lineage modelling addressed in this pattern should be employed when the goal is to document *genealogical* information. 
The modelling of the final resting location, and especially the use of the `E9_Move` event, is ontologically disputable. Representing the post-death move of the `E21_Person` to their grave through an `E9_Move` event is the simplest modelling solution to the representation of the intentional moving of human remains. However, it is conceptually problematic since the remains of the dead person are technically no longer fully this `E21_Person` instance. The logic of CIDOC CRM dictates the creation of a `E20_Biological_Object` instance to replace the `E21_Person` instance through an instance of `E81_Transformation`. This is because, otherwise, the pattern (as it currently stands) indicates that the person was moved and buried alive. However, this longer and more precise modelling is highly complex and would create nodes that would considerably weigh down the model, significantly complexify queries, and unnecessarily burden users. Because there are very few examples of alive people being buried that are recorded (especially as such) in heritage collections, it seems preferable to compromise on semantic preciseness and adopt a simpler model, assuming actors will be buried whilst dead. This is discussed in the [issue #72](https://github.com/chin-rcip/collections-model/issues/72)

### Related Github issues

- [16 “Do we need a family relationship pattern? And what to do with parents?”](https://github.com/chin-rcip/collections-model/issues/16)
- [72 “How to model Resting Place?”](https://github.com/chin-rcip/collections-model/issues/72)

## Bibliography

Baldissera, Lisa. Emily Carr: Life & Work. Canadian Online Art Book Project. Toronto, CA-ON: Art Canada Institute / Institut de l’art canadien, 2015. https://www.aci-iac.ca/art-books/emily-carr/. 

Brumberg, H. L., D. Dozor, and S. G. Golombek. ‘History of the Birth Certificate: From Inception to the Future of Electronic Data’. Journal of Perinatology 32, no. 6 (June 2012): 407–11. https://doi.org/10.1038/jp.2012.3.

Devlin, Stacy, and Emily Cuggy. ‘Settler Records, Indigenous Histories: Challenges in Indigenous Genealogical Research’. Active History (blog), 7 December 2017. https://activehistory.ca/2017/12/settler-records-indigenous-histories-challenges-in-indigenous-genealogical-research/.

Doerr, Martin, and Christian Emil Ore, eds. Definition of the CIDOC Conceptual Reference Model. CIDOC CRM Documentations, 7.0.1. Paris, FR: International Council of Museums (ICOM), 2020. http://www.cidoc-crm.org/sites/default/files/CIDOC%20CRM_v.7.0.1_%2018-10-2020.pdf.

Editors of Encyclopaedia Britannica. ‘Yousuf Karsh’. In Encyclopedia Britannica. London, GB: Britannica, n.d. https://www.britannica.com/biography/Yousuf-Karsh.

FamilySearch. ‘Canada Cemeteries’. FamilySearch Wiki, 7 April 2020. https://www.familysearch.org/wiki/en/Canada_Cemeteries.

Foot, Richard. ‘Canada’s Unknown Soldier’. In The Canadian Encyclopedia. 2014. Reprint, Toronto, CA-ON: Historica Canada, 3 October 2018. https://www.thecanadianencyclopedia.ca/en/article/unknown-soldier.

Hamilton, Michelle. ‘“Anyone Not on the List Might as Well Be Dead”: Aboriginal Peoples and the Censuses of Canada, 1851–1916’. Journal of the Canadian Historical Association / Revue de La Société Historique Du Canada 18, no. 1 (2007): 57–79. https://doi.org/10.7202/018254ar.

Hornung, Erik, Rolf Krauss, and David A. Warburton, eds. 2006. Ancient Egyptian Chronology. Leiden, NL-ZH; Boston, US-MA: Brill.

Library and Archives Canada. ‘Births, Marriages and Deaths Recorded in Canada’. Library and Archives Canada, 9 September 2020. https://www.bac-lac.gc.ca/eng/discover/vital-statistics-births-marriages-deaths/births-marriages-deaths-recorded/Pages/births-marriages-deaths-recorded.aspx.

linked.art. ‘Linked Art Data Model’. linked.art, 2021. https://linked.art/model/index.html.

Musée d’art contemporain de Montréal. ‘David Altmejd’. MAC Montréal, 2015. http://staging.macm.org/en/exhibitions/david-altmejd/.

OCLC. Virtual International Authority File Guidelines. 2015. Reprint, Dublin, US-OH: OCLC, 2019. https://www.oclc.org/content/dam/oclc/viaf/VIAF%20Guidelines.pdf.

Royal British Columbia Museum. ‘Resources for First Nations Genealogical Research at the BC Archives’. Royal British Columbia Museum, November 2018. https://royalbcmuseum.bc.ca/sites/default/files/sites/default/files/images/resources_for_first_nations_genealogical_research_at_the_bcarchives_2018.pdf.

Shadbolt, Doris. ‘Emily Carr’. In The Canadian Encyclopedia. 2013. Reprint, Toronto, CA-ON: Historica Canada, 28 August 2015. https://www.thecanadianencyclopedia.ca/en/article/emily-carr.

Skidmore, Colleen. ‘Yousuf Karsh’. In The Canadian Encyclopedia. 2010. Reprint, Toronto, CA-ON: Historica Canada, 4 March 2015. https://www.thecanadianencyclopedia.ca/en/article/yousuf-karsh.

Wikidata. ‘Place of Burial (P119)’. Wikidata, 9 April 2021. https://www.wikidata.org/wiki/Property:P119.

Wikipedia. 2021. “Ramesses II.” In Wikipedia. San Francisco, US-CA: Wikipedia. https://en.wikipedia.org/wiki/Ramesses_II.





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
                useMaxWidth:true,
                htmlLabels:true,
                curve:'basis',
                rankSpacing:50
        },
        securityLevel:'loose',
    };
    
    var example = $(".example"), y;
    for (y = 0; y < example.length; y++){
        let exId = $(example[y]).attr("id");
        fetch('./examples/mmd/'+exId+'.txt')
        .then(response1 => response1.text())
         .then((data1) => $("#"+exId+"_graph").text(data1));
        fetch('./examples/turtle/'+exId+'.ttl')
        .then(response2 => response2.text())
         .then((data2) => $("#"+exId+"_ttl code").text(data2));
        fetch('./examples/json-ld/'+exId+'.json')
        .then(response3 => response3.text())
         .then((data3) => $("#"+exId+"_json code").text(data3));
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

<script src="https://cdn.jsdelivr.net/npm/prismjs@1.24.1/components/prism-core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>