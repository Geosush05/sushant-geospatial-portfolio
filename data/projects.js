window.PORTFOLIO_DATA = {
  profile: {
    name: "Sushant Gurav",
    headline: "GIS Analyst | Remote Sensing | Environmental GIS | Forest & Wildlife GIS | Python/ArcPy Automation | Web GIS",
    shortHeadline: "GIS Analyst · Remote Sensing · Environmental GIS",
    location: "Mumbai, Maharashtra, India",
    email: "geosushant05@gmail.com",
    phone: "+91 93732 59980",
    linkedin: "https://www.linkedin.com/in/sushant-gurav/",
    intro: "I work with spatial data, remote sensing and GIS workflows across municipal, environmental and forest/wildlife contexts, with hands-on experience in Python/ArcPy automation, field GIS and Web GIS.",
    focus: ["Spatial analysis", "Remote sensing", "Environmental GIS", "Python / ArcPy", "Web GIS"]
  },

  experience: [
    {
      role: "GIS Analyst",
      organization: "Sthapatya Consultants Pvt. Ltd. · Thane Municipal Corporation GIS Project",
      period: "Since 04/2025",
      location: "Thane",
      kind: "Professional Experience",
      summary: "Municipal GIS delivery spanning spatial data maintenance, digitisation, QA/QC, field workflows, automation and Web GIS support.",
      bullets: [
        "Managed and maintained large municipal GIS datasets supporting property tax assessment, urban planning and infrastructure mapping.",
        "Executed building-footprint digitisation, parcel-boundary validation and spatial attribute updates using ArcGIS Pro and QGIS.",
        "Performed GIS QA/QC, topology validation, spatial verification and error correction across municipal geospatial databases.",
        "Automated repetitive GIS workflows using Python and ArcPy.",
        "Developed QField mobile GIS projects for field verification and synchronised spatial updates.",
        "Supported Web GIS applications using ArcGIS Online and Experience Builder."
      ],
      evidence: ["Municipal GIS", "ArcGIS Pro", "QGIS", "QA/QC", "Topology", "Python / ArcPy", "QField", "ArcGIS Online", "Experience Builder"]
    },
    {
      role: "GIS Intern",
      organization: "Sahyadri Tiger Reserve",
      period: "05/2024 – 06/2024",
      location: "Karad",
      kind: "Environmental / Forest & Wildlife GIS",
      summary: "Geospatial work supporting wildlife habitat monitoring and biodiversity-conservation activities.",
      bullets: [
        "Collected, processed and managed geospatial datasets for wildlife habitat monitoring and biodiversity conservation.",
        "Performed LULC mapping and NDVI analysis using remote-sensing techniques.",
        "Prepared thematic maps and cartographic outputs, and assisted with geodatabase management and field data collection."
      ],
      evidence: ["Forest & Wildlife GIS", "LULC", "NDVI", "Remote Sensing", "Cartography", "Field Data"]
    }
  ],

  projects: [
    {
      id: "landslide-ml",
      title: "Landslide Susceptibility Mapping with Machine Learning",
      shortTitle: "Landslide ML",
      type: "M.Sc. Geoinformatics Project",
      year: "2024–25",
      featured: true,
      priority: 1,
      categories: ["Machine Learning", "Remote Sensing", "Environmental GIS", "GIS"],
      studyArea: "Hilly belt from Chandoli Dam to Tilari Dam, Kolhapur district, Maharashtra",
      summary: "A GIS and remote-sensing susceptibility study comparing Random Forest, SVM and XGBoost using terrain, vegetation, geological, hydrological and rainfall predictors.",
      objective: "Collect and preprocess landslide-conditioning factors, compare three machine-learning models, and generate spatial susceptibility maps for landslide-risk assessment.",
      data: [
        "ALOS PALSAR DEM (12.5 m) for relief, slope, aspect, plan/profile curvature, SPI and TWI",
        "Sentinel-2 imagery for NDVI and LULC",
        "Bhukosh / Geological Survey sources for geomorphology, lineament and lithology",
        "CRU rainfall data aggregated across 1991–2023",
        "839 georeferenced landslide inventory points interpreted with Google Earth Pro"
      ],
      tools: ["ArcGIS / ArcMap", "QGIS", "Python", "scikit-learn", "XGBoost", "Google Earth Pro"],
      methods: [
        "Raster preprocessing and factor standardisation",
        "Pearson correlation, Mutual Information and Information Gain Ratio",
        "70/30 training/testing split",
        "Random Forest, Support Vector Machine and XGBoost classification",
        "Hyperparameter tuning and model evaluation",
        "Five-class susceptibility mapping"
      ],
      skills: ["Terrain analysis", "Remote sensing", "Feature selection", "Machine learning", "Spatial modelling", "Hazard mapping", "Cartography"],
      results: [
        { value: "93.41%", label: "XGBoost accuracy" },
        { value: "0.9320", label: "XGBoost F1-score" },
        { value: "0.8684", label: "XGBoost Kappa" },
        { value: "839", label: "Mapped landslide points" }
      ],
      findings: [
        "The main results section identifies XGBoost as the best overall model across accuracy, F1-score and Kappa, followed closely by Random Forest.",
        "Slope and rainfall repeatedly emerge among the strongest conditioning factors across feature-selection analyses.",
        "The final outputs classify the study area into Very Low, Low, Moderate, High and Very High susceptibility zones."
      ],
      heroImage: { src: "assets/projects/landslide-ml/xgboost-map.webp", alt: "XGBoost landslide susceptibility map from the M.Sc. Geoinformatics project", caption: "Final XGBoost susceptibility map" },
      gallery: [
        { src: "assets/projects/landslide-ml/study-area.webp", alt: "Study area map extending from Chandoli Dam to Tilari Dam", caption: "Study area" },
        { src: "assets/projects/landslide-ml/factors-topography.webp", alt: "Composite maps of relief, aspect, slope and NDVI", caption: "Terrain and NDVI conditioning factors" },
        { src: "assets/projects/landslide-ml/factors-hydrology.webp", alt: "Composite maps of plan curvature, profile curvature, SPI and TWI", caption: "Curvature and hydrological factors" },
        { src: "assets/projects/landslide-ml/factors-geology-lulc.webp", alt: "Composite maps of geomorphology, lineament, lithology and LULC", caption: "Geology, geomorphology and LULC" },
        { src: "assets/projects/landslide-ml/rainfall.webp", alt: "Rainfall distribution map used in landslide susceptibility modelling", caption: "Rainfall factor" },
        { src: "assets/projects/landslide-ml/landslide-inventory.webp", alt: "Landslide inventory map showing mapped occurrence points", caption: "Landslide inventory" },
        { src: "assets/projects/landslide-ml/methodology.webp", alt: "Machine-learning landslide susceptibility methodology workflow", caption: "Methodology workflow" },
        { src: "assets/projects/landslide-ml/pearson.webp", alt: "Pearson correlation feature-selection chart", caption: "Pearson correlation" },
        { src: "assets/projects/landslide-ml/mutual-information.webp", alt: "Mutual Information feature-selection chart", caption: "Mutual Information" },
        { src: "assets/projects/landslide-ml/information-gain.webp", alt: "Information Gain Ratio feature-selection chart", caption: "Information Gain Ratio" },
        { src: "assets/projects/landslide-ml/roc.webp", alt: "ROC curves comparing Random Forest, SVM and XGBoost", caption: "ROC comparison" },
        { src: "assets/projects/landslide-ml/random-forest-map.webp", alt: "Random Forest landslide susceptibility map", caption: "Random Forest susceptibility" },
        { src: "assets/projects/landslide-ml/svm-map.webp", alt: "Support Vector Machine landslide susceptibility map", caption: "SVM susceptibility" },
        { src: "assets/projects/landslide-ml/xgboost-map.webp", alt: "XGBoost landslide susceptibility map", caption: "XGBoost susceptibility" }
      ],
      report: "documents/landslide-ml-msc-project.pdf",
      reportLabel: "Read M.Sc. Project Report",
      evidenceNote: "Report note: the ROC figure/main model-evaluation section reports XGBoost AUC 0.9812, while a later hyperparameter-tuning discussion reports 0.9621. This portfolio therefore uses the internally consistent XGBoost Accuracy (93.41%), F1 (0.9320) and Kappa (0.8684) as headline metrics rather than presenting one AUC value as definitive."
    },

    {
      id: "drought-arcpy",
      title: "GIS-Based Drought Monitoring Tool",
      shortTitle: "Drought ArcPy Tool",
      type: "Academic Case Study · ArcPy Script Tool",
      year: "M.Sc. Lab 11",
      featured: true,
      priority: 2,
      categories: ["Python / ArcPy", "Remote Sensing", "Environmental GIS", "GIS"],
      studyArea: "Study-area name is not stated in the submitted lab report",
      summary: "A custom ArcGIS Pro script tool that automates drought-indicator generation from satellite raster bands using ArcPy and Spatial Analyst.",
      objective: "Develop a GIS-based tool to monitor drought conditions using vegetation and temperature indices.",
      data: [
        "Required Red, NIR and Green raster bands",
        "Optional Land Surface Temperature raster",
        "Optional clipping shapefile",
        "User-defined output workspace"
      ],
      tools: ["ArcGIS Pro", "Python", "ArcPy", "Spatial Analyst"],
      methods: ["Raster input validation", "Optional Extract By Mask clipping", "NDVI", "NDWI", "NDMI", "VCI", "VHI", "Optional TCI when LST is supplied"],
      skills: ["GIS automation", "ArcPy", "Raster algebra", "Remote sensing indices", "Script tool design"],
      results: [
        { value: "6", label: "Index outputs supported" },
        { value: "ArcPy", label: "Automation layer" },
        { value: "VHI", label: "Vegetation-health output" }
      ],
      findings: [
        "The tool packages multiple drought-related raster calculations into a repeatable ArcGIS Pro geoprocessing workflow.",
        "The submitted report shows the script-tool interface, embedded ArcPy code and generated VHI/NDWI raster outputs."
      ],
      heroImage: { src: "assets/projects/drought-tool/vhi-output.webp", alt: "Vegetation Health Index raster output generated by the DroughtMetrics tool", caption: "VHI output from the ArcPy tool" },
      gallery: [
        { src: "assets/projects/drought-tool/tool-overview.webp", alt: "ArcGIS Pro DroughtMetrics script tool properties", caption: "Tool definition" },
        { src: "assets/projects/drought-tool/parameters.webp", alt: "DroughtMetrics input parameter configuration", caption: "Input parameters" },
        { src: "assets/projects/drought-tool/arcpy-code.webp", alt: "ArcPy code embedded in the drought monitoring tool", caption: "ArcPy implementation" },
        { src: "assets/projects/drought-tool/vhi-output.webp", alt: "VHI raster output in ArcGIS Pro", caption: "VHI output" },
        { src: "assets/projects/drought-tool/ndwi-output.webp", alt: "NDWI raster output in ArcGIS Pro", caption: "NDWI output" }
      ],
      report: "documents/drought-monitoring-arcpy-tool.pdf",
      reportLabel: "Read Tool Case Study"
    },

    {
      id: "urban-heat-island",
      title: "Urban Heat Island / Land Surface Temperature Analysis",
      shortTitle: "Urban Heat Island",
      type: "Academic Remote Sensing Lab",
      year: "M.Sc. Lab 3",
      featured: true,
      priority: 3,
      categories: ["Remote Sensing", "Environmental GIS", "GIS"],
      studyArea: "Kochi District",
      summary: "A thermal remote-sensing workflow deriving Land Surface Temperature through radiance, brightness temperature, NDVI and emissivity calculations.",
      objective: "Derive and map land surface temperature as an Urban Heat Island analysis output.",
      data: ["Thermal and multispectral raster bands", "Scene metadata constants used in radiance/temperature conversion"],
      tools: ["ArcGIS / ArcMap", "Raster Calculator", "Remote Sensing"],
      methods: ["DN to Top-of-Atmosphere radiance", "Radiance to brightness temperature", "NDVI calculation", "Land Surface Emissivity estimation", "Land Surface Temperature calculation"],
      skills: ["Thermal remote sensing", "Raster algebra", "NDVI", "LST", "Environmental mapping"],
      results: [
        { value: "LST", label: "Final mapped output" },
        { value: "5-step", label: "Thermal processing workflow" }
      ],
      findings: ["The lab culminates in a mapped Kochi District Land Surface Temperature result derived through a complete thermal preprocessing chain."],
      heroImage: { src: "assets/projects/urban-heat-island/lst-map.webp", alt: "Kochi District Land Surface Temperature result map", caption: "Kochi District LST result" },
      gallery: [
        { src: "assets/projects/urban-heat-island/bt-processing.webp", alt: "Raster Calculator step for brightness-temperature processing", caption: "Brightness-temperature processing" },
        { src: "assets/projects/urban-heat-island/lst-processing.webp", alt: "Raster Calculator step for Land Surface Temperature", caption: "LST processing" },
        { src: "assets/projects/urban-heat-island/lst-map.webp", alt: "Final Kochi District Land Surface Temperature map", caption: "Final LST map" }
      ],
      report: "documents/urban-heat-island.pdf",
      reportLabel: "Read UHI Lab Report"
    },

    {
      id: "frequency-ratio",
      title: "Frequency Ratio Landslide Susceptibility Mapping",
      shortTitle: "Frequency Ratio LSM",
      type: "Academic GIS Project",
      year: "M.Sc. Geoinformatics",
      featured: false,
      priority: 4,
      categories: ["Environmental GIS", "Remote Sensing", "GIS"],
      studyArea: "Upper Koyana region, Western Ghats, Maharashtra",
      summary: "A statistical susceptibility model integrating twelve conditioning factors and a landslide inventory through Frequency Ratio weighting and GIS overlay.",
      objective: "Assess landslide susceptibility in Upper Koyana by quantifying the relationship between past landslides and terrain, hydrological, geological, vegetation and rainfall factors.",
      data: ["Landslide inventory from Google Earth imagery and historical records", "DEM-derived terrain factors", "Satellite-derived LULC and NDVI", "IMD rainfall", "Bhukosh lineament data", "Geomorphology"],
      tools: ["ArcGIS 10.8", "Google Earth", "Remote Sensing"],
      methods: ["Raster standardisation and reclassification", "Frequency Ratio calculation by factor class", "Weight assignment", "Weighted overlay", "Five-class susceptibility mapping"],
      skills: ["Statistical susceptibility modelling", "Weighted overlay", "Terrain analysis", "NDVI / LULC", "Hazard cartography"],
      results: [{ value: "12", label: "Conditioning factors" }, { value: "5", label: "Susceptibility classes" }],
      findings: ["The final map classifies the study area from low through high susceptibility and is presented as a planning/disaster-preparedness support output."],
      heroImage: { src: "assets/projects/frequency-ratio/susceptibility-map.webp", alt: "Final Frequency Ratio landslide susceptibility map for the Upper Koyana region", caption: "Final Frequency Ratio susceptibility map" },
      gallery: [
        { src: "assets/projects/frequency-ratio/inventory.webp", alt: "Landslide inventory map of Upper Koyana", caption: "Landslide inventory" },
        { src: "assets/projects/frequency-ratio/factors-a.webp", alt: "Composite thematic factor maps used in the Frequency Ratio model", caption: "Conditioning factors — set 1" },
        { src: "assets/projects/frequency-ratio/factors-b.webp", alt: "Additional thematic factor maps used in the Frequency Ratio model", caption: "Conditioning factors — set 2" },
        { src: "assets/projects/frequency-ratio/susceptibility-map.webp", alt: "Frequency Ratio landslide susceptibility map", caption: "Final susceptibility map" }
      ],
      report: "documents/landslide-frequency-ratio.pdf",
      reportLabel: "Read Frequency Ratio Report"
    },

    {
      id: "lulc-change",
      title: "LULC Change Detection: 2016–2024",
      shortTitle: "LULC Change",
      type: "Academic Remote Sensing / GIS Lab",
      year: "M.Sc. Lab 1",
      featured: false,
      priority: 5,
      categories: ["Remote Sensing", "Environmental GIS", "GIS"],
      studyArea: "Study-area name is not stated in the submitted lab report",
      summary: "A two-date LULC comparison that converts classifications to vectors, dissolves classes, intersects the dates and calculates class-transition and area change.",
      objective: "Identify, describe and quantify land-use/land-cover change between 2016 and 2024.",
      data: ["LULC classification — 2016", "LULC classification — 2024"],
      tools: ["ArcMap", "Raster to Vector", "Dissolve", "Intersect", "Field Calculator", "Calculate Geometry"],
      methods: ["Two-date classification comparison", "Vector conversion", "Class dissolve", "Overlay/intersect", "Transition labelling", "Area-change calculation"],
      skills: ["Change detection", "LULC", "Vector overlay", "Attribute calculation", "Temporal analysis"],
      results: [
        { value: "+22.42", label: "Built-up area change reported from tables" },
        { value: "−15.73", label: "Forest area change reported from tables" },
        { value: "2016→2024", label: "Comparison period" }
      ],
      findings: [
        "Based on the report's class-area tables, built-up area rises from 11.0207 to 33.4382 while forest area falls from 271.02 to 255.288 in the report's mapped area units.",
        "The workflow also produces a transition chart showing class-to-class changes between the two dates."
      ],
      heroImage: { src: "assets/projects/lulc-change/change-chart.webp", alt: "Graph of LULC change between 2016 and 2024", caption: "Class-transition result chart" },
      compare: {
        before: { src: "assets/projects/lulc-change/lulc-2016.webp", alt: "LULC classification for 2016", label: "2016" },
        after: { src: "assets/projects/lulc-change/lulc-2024.webp", alt: "LULC classification for 2024", label: "2024" }
      },
      gallery: [
        { src: "assets/projects/lulc-change/lulc-2016.webp", alt: "ArcMap view of LULC 2016", caption: "LULC 2016" },
        { src: "assets/projects/lulc-change/lulc-2024.webp", alt: "ArcMap view of LULC 2024", caption: "LULC 2024" },
        { src: "assets/projects/lulc-change/change-chart.webp", alt: "Chart of LULC class transitions from 2016 to 2024", caption: "LULC transition chart" }
      ],
      report: "documents/lulc-change-detection.pdf",
      reportLabel: "Read Change Detection Report",
      evidenceNote: "Area-change numbers shown here are calculated directly from the class-area tables visible in the submitted report. The study-area name is not stated in that report, so none is inferred."
    },

    {
      id: "watershed",
      title: "Watershed Delineation & Sub-Watershed Prioritization",
      shortTitle: "Watershed Priority",
      type: "Academic GIS Project",
      year: "M.Sc. Geoinformatics",
      featured: false,
      priority: 6,
      categories: ["Environmental GIS", "GIS", "Terrain / Drone"],
      studyArea: "Doodhganga Basin (as labelled on the final priority map)",
      summary: "An ArcMap workflow delineating sub-watersheds from SRTM DEM and ranking them for soil/water conservation using morphometric parameters.",
      objective: "Delineate drainage/sub-watershed units and prioritize them based on erosion/runoff susceptibility using morphometric analysis.",
      data: ["SRTM 30 m DEM", "Drainage network", "Watershed boundary", "Field observations if available"],
      tools: ["ArcMap 10.8.2", "Spatial Analyst"],
      methods: ["Fill sinks", "Flow direction", "Flow accumulation", "Stream extraction", "Pour points", "Sub-watershed delineation", "Linear/areal/relief morphometry", "Compound ranking"],
      skills: ["Hydrology", "DEM analysis", "Watershed delineation", "Morphometry", "Prioritization", "Cartography"],
      results: [{ value: "8", label: "Sub-watersheds analysed" }, { value: "3", label: "Priority classes" }],
      findings: ["The final output is a sub-watershed-wise High/Medium/Low priority map intended to focus soil- and water-conservation intervention."],
      heroImage: { src: "assets/projects/watershed/priority-map.webp", alt: "Sub-watershed-wise priority map of the Doodhganga Basin", caption: "Final sub-watershed priority map" },
      gallery: [{ src: "assets/projects/watershed/priority-map.webp", alt: "Doodhganga Basin sub-watershed priority map", caption: "High / Medium / Low priority map" }],
      report: "documents/watershed-delineation-prioritization.pdf",
      reportLabel: "Read Watershed Report"
    },

    {
      id: "uav-photogrammetry",
      title: "UAV Photogrammetry Workflow Series",
      shortTitle: "UAV Photogrammetry",
      type: "Academic Lab Series",
      year: "M.Sc. Geoinformatics",
      featured: false,
      priority: 7,
      categories: ["Terrain / Drone", "GIS"],
      studyArea: "Multiple academic UAV / close-range photogrammetry datasets",
      summary: "Five related photogrammetry labs combined into one evidence-led case study: DEM, DSM/DTM, orthomosaic, contours and a textured 3D model.",
      objective: "Process UAV/close-range imagery through standard photogrammetric workflows and export GIS/3D deliverables.",
      data: ["UAV image sets", "Dense point clouds", "DEM / surface products", "Multi-angle close-range photos"],
      tools: ["Agisoft Metashape Professional", "ArcMap"],
      methods: ["Photo alignment", "Dense cloud generation", "Mesh generation", "Ground-point classification", "DEM / DSM / DTM generation", "Orthomosaic generation", "Contour extraction", "Texture generation and 3D export"],
      skills: ["Photogrammetry", "Point clouds", "Elevation models", "Orthomosaic", "Contours", "3D modelling"],
      results: [{ value: "6", label: "Web-displayed outputs" }, { value: "UAV→GIS", label: "End-to-end workflow" }],
      findings: ["The lab series demonstrates the full path from image alignment and dense-cloud processing to raster, vector and 3D deliverables."],
      heroImage: { src: "assets/projects/drone/orthomosaic.webp", alt: "Orthomosaic generated in Agisoft Metashape", caption: "Orthomosaic output" },
      gallery: [
        { src: "assets/projects/drone/dem.webp", alt: "Drone-derived Digital Elevation Model in Agisoft Metashape", caption: "DEM" },
        { src: "assets/projects/drone/dtm.webp", alt: "Digital Terrain Model generated after ground-point classification", caption: "DTM" },
        { src: "assets/projects/drone/dsm.webp", alt: "Digital Surface Model from UAV data", caption: "DSM" },
        { src: "assets/projects/drone/orthomosaic.webp", alt: "Orthomosaic from UAV imagery", caption: "Orthomosaic" },
        { src: "assets/projects/drone/contours.webp", alt: "Contour lines generated from a drone-derived DEM", caption: "Contours" },
        { src: "assets/projects/drone/model-3d.webp", alt: "Textured 3D photogrammetric model opened in a 3D viewer", caption: "Textured 3D model" }
      ],
      reports: [
        { href: "documents/drone-dem.pdf", label: "DEM Lab" },
        { href: "documents/drone-dsm-dtm.pdf", label: "DSM / DTM Lab" },
        { href: "documents/drone-orthomosaic.pdf", label: "Orthomosaic Lab" },
        { href: "documents/drone-contours.pdf", label: "Contour Lab" },
        { href: "documents/drone-3d-model.pdf", label: "3D Model Lab" }
      ]
    },

    {
      id: "municipal-web-gis",
      title: "Municipal Property Tax Web GIS",
      shortTitle: "Municipal Web GIS",
      type: "Professional Experience",
      year: "Since 04/2025",
      featured: false,
      priority: 8,
      categories: ["Web GIS", "GIS", "Python / ArcPy"],
      studyArea: "Thane Municipal Corporation project",
      summary: "Applied Web GIS support for municipal property visualization and management, backed by building, parcel and attribute data workflows.",
      objective: "Support interactive municipal property visualization through published web maps and configured application functions.",
      data: ["Building footprints", "Parcels", "Property/spatial attributes"],
      tools: ["ArcGIS Pro", "ArcGIS Online", "Experience Builder", "QGIS", "QField", "Python / ArcPy"],
      methods: ["Spatial data preparation", "QA/QC and topology", "Publishing web maps", "Search and pop-up configuration", "Layer control", "Field verification workflows"],
      skills: ["Municipal GIS", "Web GIS", "Spatial databases", "QA/QC", "Field GIS", "Automation"],
      results: [{ value: "Web GIS", label: "Applied professional workflow" }, { value: "QField", label: "Field verification" }],
      findings: ["This work demonstrates production-oriented GIS delivery across desktop, field and web environments."],
      heroImage: null,
      gallery: [],
      confidentiality: "Production/client GIS maps and property data are intentionally not reproduced in this public portfolio."
    }
  ],

  skillEvidence: [
    {
      name: "Python / ArcPy Automation",
      level: "Applied",
      evidence: ["DroughtMetrics ArcGIS Pro script tool", "Municipal GIS workflow automation"],
      projectIds: ["drought-arcpy", "municipal-web-gis"]
    },
    {
      name: "Remote Sensing",
      level: "Applied",
      evidence: ["Sentinel-2 NDVI/LULC in landslide ML", "Kochi LST analysis", "LULC change detection", "Drought indices"],
      projectIds: ["landslide-ml", "urban-heat-island", "lulc-change", "drought-arcpy"]
    },
    {
      name: "Machine Learning / GeoAI",
      level: "Project evidence",
      evidence: ["RF vs SVM vs XGBoost landslide susceptibility", "Feature selection and model evaluation"],
      projectIds: ["landslide-ml"]
    },
    {
      name: "Environmental & Forest / Wildlife GIS",
      level: "Applied + project evidence",
      evidence: ["Sahyadri Tiger Reserve internship", "Landslide, watershed, heat and drought analyses"],
      projectIds: ["landslide-ml", "watershed", "urban-heat-island", "drought-arcpy"]
    },
    {
      name: "Web GIS & Field GIS",
      level: "Professional experience",
      evidence: ["ArcGIS Online / Experience Builder", "QField field-verification projects"],
      projectIds: ["municipal-web-gis"]
    },
    {
      name: "Terrain, Hydrology & Photogrammetry",
      level: "Project evidence",
      evidence: ["DEM terrain factors and landslide models", "Watershed delineation", "UAV DEM/DSM/DTM/orthomosaic/contours/3D"],
      projectIds: ["landslide-ml", "watershed", "uav-photogrammetry"]
    }
  ],

  journey: [
    { period: "2021–2023", title: "Geography Foundation", detail: "M.A. Geography — foundation in landscapes, settlement and spatial relationships." },
    { period: "2023–2025", title: "M.Sc. Geoinformatics", detail: "Technical specialization in GIS, remote sensing, spatial analysis, automation and applied geospatial projects." },
    { period: "05–06/2024", title: "Environmental / Wildlife GIS", detail: "GIS internship at Sahyadri Tiger Reserve with LULC, NDVI, cartography, geodatabases and field data." },
    { period: "2024–25", title: "Remote Sensing, ArcPy & Machine Learning", detail: "Academic work expanded into thermal analysis, change detection, drought automation, terrain modelling and ML landslide susceptibility." },
    { period: "Since 04/2025", title: "Professional Municipal GIS", detail: "GIS Analyst role covering spatial databases, digitisation, QA/QC, topology, QField, Python/ArcPy automation and Web GIS support." }
  ]
};
