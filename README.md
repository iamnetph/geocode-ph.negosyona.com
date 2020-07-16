# Philippine Standard Geographical Code JSON
*from March 31, 2020 [PSGC](https://psa.gov.ph/classification/psgc/)*

JSON Arrays of code-name pairs
1. province.json
	* Masterlist provinces
	* Includes region and island group attribute
	* Special case for NCR, which is a region/province and has a code 130000000
2. citylist
	* JSON array of city/municipality under a province code (from province.json)
		> e.g. city/municipality list of 160300000 (Agusan Del Sur) citylist/160306000.json
	* NCR cities are merged as one list under one list, citylist/130000000.json
3. barangaylist
	* JSON array of barangays under city/municipality (from corresponding code in citylist entry)
		> e.g. barangay list of 160306000 (Prosperidad, Agusan Del Sur) barangaylist/160306000.json


