# Source & Evidence Notes

This file records the source logic used to keep the portfolio accurate and honest.

## Professional experience

Source: the supplied existing portfolio HTML.

- **GIS Analyst — Sthapatya Consultants Pvt. Ltd. / Thane Municipal Corporation GIS Project**: municipal GIS datasets, building-footprint digitisation, parcel validation, QA/QC/topology, Python/ArcPy workflow automation, QField, ArcGIS Online and Experience Builder.
- **GIS Intern — Sahyadri Tiger Reserve**: wildlife-habitat/biodiversity geospatial data, LULC, NDVI, thematic mapping, geodatabase support and field-data work.
- **Municipal Property Tax Web GIS**: kept as a professional Web GIS item. Client/production maps are not reproduced because no publishable client imagery was supplied.

## Landslide Susceptibility Mapping Using Machine Learning

Primary published source: the supplied **55-page M.Sc. Geoinformatics project report**. A second 50-page report covers substantially the same project and was not duplicated in the public documents folder.

Portfolio evidence extracted from the report includes:

- study-area map
- ALOS PALSAR terrain derivatives
- Sentinel-2 NDVI and LULC
- geological/geomorphological factors
- rainfall and landslide-inventory maps
- methodology diagram
- Pearson, Mutual Information and Information Gain Ratio figures
- ROC comparison
- Random Forest, SVM and XGBoost susceptibility maps

### Metric consistency note

The report contains conflicting AUC values across sections. The main model-evaluation section/ROC figure reports:

- RF ROC-AUC: 0.9791
- SVM ROC-AUC: 0.9459
- XGBoost ROC-AUC: 0.9812

A later hyperparameter-tuning discussion reports lower ROC-AUC values (RF 0.9529, SVM 0.9309, XGBoost 0.9621), while the accuracy/F1/Kappa values remain consistent in the main results comparison. To avoid presenting one conflicting AUC as definitive, the website headlines the following internally consistent XGBoost metrics:

- Accuracy: **93.41%**
- F1-score: **0.9320**
- Kappa: **0.8684**

The ROC figure is still displayed as report evidence with the project note visible in the case study.

## Frequency Ratio Landslide Susceptibility

Source: supplied Upper Koyana Frequency Ratio report.

- Study area: Upper Koyana region, Western Ghats, Maharashtra.
- Twelve conditioning factors plus landslide inventory.
- ArcGIS 10.8 preprocessing, reclassification, Frequency Ratio weighting and weighted overlay.
- Final susceptibility output retained as the main visual evidence.

## Drought Monitoring Tool

Source: supplied Lab 11 case-study PDF plus the existing portfolio's matching ArcPy tool description.

- ArcGIS Pro custom tool using ArcPy / Spatial Analyst.
- Required red, NIR and green bands; optional LST and clip polygon.
- NDVI, NDWI, NDMI, VCI, VHI and optional TCI outputs.
- Tool interface, code screenshot and output maps are displayed.
- The study-area name is not stated in the submitted report and is therefore not invented.

## LULC Change Detection

Source: supplied Change Detection Analysis PDF.

The report compares 2016 and 2024 LULC using raster-to-vector conversion, dissolve, intersect, field calculation and geometry calculation.

Area-table values visible in the report were used to calculate the displayed changes:

- Built-up: 11.0207 → 33.4382, change +22.4175
- Forest: 271.02 → 255.288, change -15.732

The study-area name is not stated in the report; none is inferred.

## Urban Heat Island / LST

Source: supplied Urban Heat Island Lab 3 PDF.

Workflow represented as documented:

DN → TOA radiance → Brightness Temperature → NDVI → Land Surface Emissivity → Land Surface Temperature.

The final map is explicitly labelled as a **Kochi District Land Surface Temperature** result.

## Watershed Delineation & Prioritization

Source: supplied ArcMap 10.8 watershed report.

- SRTM 30 m DEM.
- Fill, flow direction, flow accumulation, stream extraction, pour points and sub-watersheds.
- Morphometric prioritization using linear, areal and relief parameters.
- Final map is labelled **Sub-Watershed-Wise Priority Map of Doodhganga Basin**.

## UAV Photogrammetry

Five related lab reports are combined into one portfolio case study because they form a single coherent workflow rather than five independent flagship projects:

- Drone DEM generation
- DSM / DTM generation
- Orthomosaic generation
- Contour generation
- Close-range / 3D photogrammetry

The public case study displays the final DEM, DTM, DSM, orthomosaic, contour and 3D-model outputs, while all five reports remain linked separately.

## Deliberately removed / de-emphasized material

The previous portfolio included demo-heavy sections such as a GIS Lab, Knowledge Hub, decorative GIS World network and placeholder Cartography slots. These were removed from the primary recruiter path because real maps and project evidence now perform the same role more credibly.

The previous portfolio also included an Urban Waterlogging project without a matching uploaded project report/result package in the supplied evidence set. It is not included in this version to avoid unsupported claims.
