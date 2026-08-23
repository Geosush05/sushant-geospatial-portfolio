window.PORTFOLIO_DATA = {
  profile: {
    name: "Sushant Gurav",
    fullName: "Sushant Bhikaji Gurav",
    headline: "Geospatial Analysis | Remote Sensing | Environmental Monitoring | GIS Automation",
    shortHeadline: "Geospatial Analysis · Remote Sensing · Environmental Monitoring · GIS Automation",
    subheadline: "Geospatial Analysis · Remote Sensing · Environmental Monitoring · GIS Automation · GeoAI & Hazard Modeling",
    location: "Kolhapur / Mumbai, Maharashtra, India",
    email: "geosushant05@gmail.com",
    phone: "+91 93732 59980",
    linkedin: "https://www.linkedin.com/in/sushant-gurav/",
    intro: "GIS Analyst and Remote Sensing specialist with practical experience in wildlife habitat monitoring, satellite Earth observation, machine-learning hazard modeling, and Python/ArcPy geoprocessing automation, backed by production municipal GIS delivery.",
    focus: [
      "Forest & Wildlife GIS",
      "Satellite Remote Sensing",
      "Python / ArcPy Automation",
      "Machine Learning & GeoAI",
      "Spatial & Terrain Analysis",
      "Web GIS & Field Operations"
    ],
    direction: {
      primary: "Environmental GIS & Earth Observation Professional",
      secondary: "Geospatial Analysis | Remote Sensing | Environmental Monitoring | GIS Automation",
      industry: "Production Municipal GIS, Spatial Data QA/QC, Topology, ArcPy Automation & Web GIS",
      education: "M.Sc. Geoinformatics (2023–2025) · M.A. Geography (2021–2023)"
    }
  },

  experience: [
    {
      id: "sthapatya-thane",
      role: "GIS Analyst",
      organization: "Sthapatya Consultants Pvt. Ltd. · Thane Municipal Corporation GIS Project",
      period: "Since 04/2025",
      location: "Thane, Maharashtra",
      kind: "Professional Experience · Municipal GIS",
      summary: "Municipal GIS delivery spanning spatial database maintenance, building footprint digitisation, parcel validation, QA/QC, Python/ArcPy automation, field verification and Web GIS support.",
      bullets: [
        "Managed and maintained large municipal GIS datasets supporting property tax assessment, urban planning, and infrastructure mapping.",
        "Executed high-precision building-footprint digitisation, parcel-boundary validation, and spatial attribute updates using ArcGIS Pro and QGIS.",
        "Performed rigorous GIS QA/QC, topology validation rules, spatial verification, and error correction across municipal geospatial databases.",
        "Automated repetitive geoprocessing workflows and spatial attribute validation using Python and ArcPy.",
        "Configured and deployed QField mobile GIS projects for field verification and synchronised field updates with the central GIS.",
        "Supported interactive Web GIS applications and spatial dashboards using ArcGIS Online and Experience Builder."
      ],
      evidence: ["Municipal GIS", "ArcGIS Pro", "QGIS", "QA/QC & Topology", "Python / ArcPy", "QField", "ArcGIS Online", "Experience Builder"]
    },
    {
      id: "sahyadri-internship",
      role: "GIS Intern",
      organization: "Sahyadri Tiger Reserve",
      period: "05/2024 – 06/2024",
      location: "Karad, Maharashtra",
      kind: "Applied Practice · Forest & Wildlife GIS",
      summary: "Geospatial analysis supporting wildlife habitat monitoring, biodiversity conservation, vegetation dynamics and protected area geodatabase management.",
      bullets: [
        "Collected, processed, and managed geospatial datasets for wildlife habitat monitoring and biodiversity conservation planning.",
        "Performed Land Use Land Cover (LULC) mapping and NDVI vegetation health analysis using multispectral remote-sensing techniques.",
        "Prepared thematic cartographic outputs for forest management, assisted with wildlife geodatabase maintenance, and supported field GPS data collection."
      ],
      evidence: ["Forest & Wildlife GIS", "Habitat Monitoring", "LULC Classification", "NDVI Dynamics", "Remote Sensing", "Field GPS Data"]
    }
  ],

  projects: [
    {
      id: "landslide-ml",
      title: "ML-Based Landslide Susceptibility Mapping",
      shortTitle: "Landslide ML",
      featuredOrder: "01",
      type: "M.Sc. Geoinformatics Flagship Research",
      year: "2024–25",
      featured: true,
      priority: 1,
      categories: ["Machine Learning", "Remote Sensing", "Environmental & Wildlife", "Spatial Analysis"],
      studyArea: "Hilly belt from Chandoli Dam to Tilari Dam, Kolhapur district, Maharashtra (Western Ghats)",
      summary: "An advanced geospatial hazard study comparing Random Forest, SVM and XGBoost using 12 conditioning factors derived from ALOS PALSAR, Sentinel-2, geological and long-term rainfall data across 839 mapped landslide points.",
      objective: "Develop a high-accuracy, data-driven landslide susceptibility framework in a landslide-prone Western Ghats corridor to assist disaster risk reduction and environmental conservation planning.",
      data: [
        "ALOS PALSAR DEM (12.5 m) for terrain derivatives: relief, slope, aspect, plan/profile curvature, SPI and TWI",
        "Sentinel-2 multispectral imagery for NDVI vegetation health and LULC classification",
        "Geological Survey of India / Bhukosh data for lithology, lineaments, and geomorphological units",
        "CRU gridded rainfall data aggregated over 32 years (1991–2023)",
        "839 georeferenced historical landslide inventory points mapped and validated via Google Earth Pro"
      ],
      workflow: [
        "Spatial database assembly & multi-source raster factor standardization at 12.5 m resolution",
        "Statistical multicollinearity & feature selection: Pearson Correlation, Mutual Information, and Information Gain Ratio",
        "Dataset partitioning (70% training, 30% validation) with spatial cross-validation",
        "Algorithm training: Random Forest (RF), Support Vector Machine (SVM), and Extreme Gradient Boosting (XGBoost)",
        "Hyperparameter tuning and comprehensive performance benchmarking (Accuracy, F1, Kappa, ROC-AUC)",
        "Raster susceptibility mapping classified into 5 standardized hazard zones (Very Low to Very High)"
      ],
      tools: ["ArcGIS / ArcMap", "QGIS", "Python", "scikit-learn", "XGBoost", "Google Earth Pro", "Raster Analysis"],
      analysis: "Evaluated 12 conditioning factors against 839 landslide inventory points. Feature-selection metrics confirmed slope gradient, rainfall intensity, lithology, and elevation as primary controlling drivers of slope instability in the Western Ghats corridor.",
      results: [
        { value: "93.41%", label: "XGBoost accuracy" },
        { value: "0.9320", label: "XGBoost F1-score" },
        { value: "0.8684", label: "XGBoost Kappa" },
        { value: "839", label: "Mapped landslide points" }
      ],
      application: "Enables regional disaster management authorities, forest departments, and infrastructure planners to identify high-risk zones, prevent habitat degradation, and plan resilient hill-road infrastructure.",
      findings: [
        "XGBoost demonstrated superior predictive accuracy (93.41%) and highest stability (Kappa 0.8684), closely followed by Random Forest.",
        "Slope angle (>25°) and heavy monsoon precipitation were identified as the leading trigger factors across all three feature-selection tests.",
        "Generated spatial hazard maps dividing the corridor into Very Low (31.2%), Low (24.6%), Moderate (21.4%), High (14.1%), and Very High (8.7%) susceptibility zones."
      ],
      heroImage: { src: "assets/projects/landslide-ml/xgboost-map.webp", alt: "XGBoost landslide susceptibility map from the M.Sc. Geoinformatics project", caption: "Final XGBoost susceptibility map (93.41% accuracy)" },
      gallery: [
        { src: "assets/projects/landslide-ml/study-area.webp", alt: "Study area map extending from Chandoli Dam to Tilari Dam", caption: "Study area · Chandoli to Tilari corridor" },
        { src: "assets/projects/landslide-ml/factors-topography.webp", alt: "Composite maps of relief, aspect, slope and NDVI", caption: "Terrain (ALOS PALSAR) & NDVI conditioning factors" },
        { src: "assets/projects/landslide-ml/factors-hydrology.webp", alt: "Composite maps of plan curvature, profile curvature, SPI and TWI", caption: "Hydrological & curvature indices" },
        { src: "assets/projects/landslide-ml/factors-geology-lulc.webp", alt: "Composite maps of geomorphology, lineament, lithology and LULC", caption: "Geological, lineament & LULC factors" },
        { src: "assets/projects/landslide-ml/rainfall.webp", alt: "Rainfall distribution map used in landslide susceptibility modelling", caption: "CRU rainfall distribution (1991–2023)" },
        { src: "assets/projects/landslide-ml/landslide-inventory.webp", alt: "Landslide inventory map showing mapped occurrence points", caption: "Landslide inventory (839 points)" },
        { src: "assets/projects/landslide-ml/methodology.webp", alt: "Machine-learning landslide susceptibility methodology workflow", caption: "Methodological workflow diagram" },
        { src: "assets/projects/landslide-ml/pearson.webp", alt: "Pearson correlation feature-selection chart", caption: "Pearson correlation feature evaluation" },
        { src: "assets/projects/landslide-ml/mutual-information.webp", alt: "Mutual Information feature-selection chart", caption: "Mutual Information gain scores" },
        { src: "assets/projects/landslide-ml/information-gain.webp", alt: "Information Gain Ratio feature-selection chart", caption: "Information Gain Ratio ranking" },
        { src: "assets/projects/landslide-ml/roc.webp", alt: "ROC curves comparing Random Forest, SVM and XGBoost", caption: "ROC-AUC comparison curve" },
        { src: "assets/projects/landslide-ml/random-forest-map.webp", alt: "Random Forest landslide susceptibility map", caption: "Random Forest model output" },
        { src: "assets/projects/landslide-ml/svm-map.webp", alt: "Support Vector Machine landslide susceptibility map", caption: "SVM model output" },
        { src: "assets/projects/landslide-ml/xgboost-map.webp", alt: "XGBoost landslide susceptibility map", caption: "XGBoost final susceptibility map" }
      ],
      report: "documents/landslide-frequency-ratio.pdf",
      reportLabel: "View Related Research PDF",
      evidenceNote: "Model Evaluation Note: The primary model-evaluation section reports XGBoost Accuracy of 93.41%, F1-score of 0.9320, and Kappa of 0.8684 across the full test inventory dataset."
    },

    {
      id: "uav-photogrammetry",
      title: "UAV Photogrammetry & 3D Terrain Modeling Series",
      shortTitle: "UAV Photogrammetry & 3D Terrain",
      featuredOrder: "02",
      type: "Applied Photogrammetric Lab & Field Series",
      year: "2024–25",
      featured: true,
      priority: 2,
      categories: ["Terrain & Drone", "Spatial Analysis", "Remote Sensing"],
      studyArea: "High-Resolution UAV Aerial Survey & Close-Range Photogrammetry Sites",
      summary: "An end-to-end Structure-from-Motion (SfM) photogrammetry pipeline transforming multi-angle aerial drone photography and ground survey control points (GCPs) into survey-grade bare-earth DTMs, Digital Surface Models (DSM), seamless sub-decimeter orthomosaics, vector contour line extractions, and textured 3D terrain mesh models.",
      objective: "Execute complete Structure-from-Motion (SfM) photogrammetry in Agisoft Metashape Professional to generate survey-grade 2D orthophotos, bare-earth elevation rasters (DTM/DSM), topographic contours, and 3D textured mesh terrain models.",
      data: [
        "Overlapping multi-angle UAV aerial photograph collections with high forward (>80%) and lateral (>75%) overlap",
        "Ground Control Points (GCP) and check points surveyed for precise coordinate georeferencing & spatial calibration",
        "High-resolution close-range photogrammetric images for fine-structure 3D reconstruction"
      ],
      workflow: [
        "01. Pre-Flight Survey & Camera Calibration: Flight path planning with high overlap (>80% forward, >75% lateral) and GCP distribution",
        "02. Image Alignment & Sparse Cloud (SfM): Feature extraction (SIFT), tie-point matching, camera position optimization, and bundle adjustment",
        "03. Dense Point Cloud Reconstruction: High-density depth map calculation and automated noise filtering",
        "04. Point Cloud Classification: Automated separation of ground points vs. vegetation, buildings, and above-ground obstacles",
        "05. Digital Elevation Models (DSM & DTM): Bare-earth terrain model (DTM) and top-surface model (DSM) raster generation",
        "06. Seamless Orthomosaic Generation: Orthorectification and radiometric color-blending across multi-angle imagery",
        "07. Vector Contour Derivation: Automated topographic contour generation at defined vertical elevation intervals",
        "08. 3D Polygonal Mesh & Texture: Textured 3D mesh model reconstruction and multi-format export (OBJ/PLY/FBX)"
      ],
      tools: ["Agisoft Metashape Professional", "ArcGIS / ArcMap", "SfM Algorithms", "Structure-from-Motion", "Raster Surface Analyst", "3D Mesh Engine"],
      analysis: "Achieved sub-decimeter ground sampling distance (GSD), demonstrating robust ground-surface separation from vegetation and structural features in complex terrain for high-accuracy slope, elevation, and 3D terrain visualization.",
      results: [
        { value: "Sub-dm", label: "Ground Sampling Distance (GSD)" },
        { value: "6 Outputs", label: "Ortho, DTM, DSM, Contours, Mesh, DEM" },
        { value: "SfM + GCP", label: "Survey calibration pipeline" },
        { value: "Agisoft Metashape", label: "Primary photogrammetry engine" }
      ],
      deliverables: [
        { title: "Orthomosaic", desc: "Seamless, geometrically corrected 2D aerial map with sub-decimeter resolution", img: "assets/projects/drone/orthomosaic.webp" },
        { title: "Digital Surface Model (DSM)", desc: "Captures natural canopy tops, buildings, and surface object heights", img: "assets/projects/drone/dsm.webp" },
        { title: "Digital Terrain Model (DTM)", desc: "Bare-earth model generated via automated ground-point classification", img: "assets/projects/drone/dtm.webp" },
        { title: "Digital Elevation Model (DEM)", desc: "Calibrated elevation raster for morphometric and slope analysis", img: "assets/projects/drone/dem.webp" },
        { title: "Vector Contours", desc: "Topographic contour line extractions at customized vertical intervals", img: "assets/projects/drone/contours.webp" },
        { title: "3D Textured Mesh", desc: "Full polygonal 3D terrain model with high-resolution texture map", img: "assets/projects/drone/model-3d.webp" }
      ],
      application: "Essential for high-precision topographic surveys, landslide volume estimation, open-cast mine volume calculation, corridor mapping, watershed planning, and 3D infrastructure modeling.",
      findings: [
        "Demonstrated the end-to-end progression from raw drone imagery to survey-grade elevation models, high-resolution orthomosaics, and textured 3D meshes.",
        "Ground classification successfully isolated bare-earth terrain even under dense vegetative canopy and structural overhangs.",
        "Produced 5 complete lab documentation deliverables covering every stage of the photogrammetric pipeline."
      ],
      heroImage: { src: "assets/projects/drone/orthomosaic.webp", alt: "High-resolution orthomosaic generated in Agisoft Metashape", caption: "High-resolution seamless orthomosaic · Agisoft Metashape" },
      gallery: [
        { src: "assets/projects/drone/orthomosaic.webp", alt: "Seamless Orthomosaic from UAV imagery", caption: "Seamless High-Resolution Orthomosaic" },
        { src: "assets/projects/drone/dsm.webp", alt: "Digital Surface Model from UAV data", caption: "Digital Surface Model (DSM)" },
        { src: "assets/projects/drone/dtm.webp", alt: "Digital Terrain Model generated after ground-point classification", caption: "Classified Bare-Earth Digital Terrain Model (DTM)" },
        { src: "assets/projects/drone/dem.webp", alt: "Drone-derived Digital Elevation Model in Agisoft Metashape", caption: "Digital Elevation Model (DEM)" },
        { src: "assets/projects/drone/contours.webp", alt: "Contour lines generated from a drone-derived DEM", caption: "Extracted Vector Topographic Contours" },
        { src: "assets/projects/drone/model-3d.webp", alt: "Textured 3D photogrammetric model opened in a 3D viewer", caption: "Textured 3D Photogrammetric Mesh Model" }
      ],
      reports: [
        { href: "documents/drone-orthomosaic.pdf", label: "Orthomosaic Lab PDF" },
        { href: "documents/drone-dsm-dtm.pdf", label: "DSM / DTM Lab PDF" },
        { href: "documents/drone-dem.pdf", label: "DEM Lab PDF" },
        { href: "documents/drone-contours.pdf", label: "Contour Lab PDF" },
        { href: "documents/drone-3d-model.pdf", label: "3D Model Lab PDF" }
      ]
    },

    {
      id: "sahyadri-conservation",
      title: "Wildlife Habitat & Conservation GIS Analysis",
      shortTitle: "Sahyadri Wildlife GIS",
      featuredOrder: "03",
      type: "Applied Wildlife & Forest GIS Practice",
      year: "2024",
      featured: true,
      priority: 3,
      categories: ["Environmental & Wildlife", "Remote Sensing", "Spatial Analysis"],
      studyArea: "Sahyadri Tiger Reserve (STR), Northern Western Ghats, Maharashtra",
      summary: "Applied geospatial workflows for tiger reserve management: multitemporal LULC classification, canopy & NDVI vegetation dynamics, wildlife habitat corridor mapping, and protected-area geodatabase integration.",
      objective: "Provide spatial intelligence for wildlife habitat monitoring, anti-poaching patrol zoning, canopy density assessment, and biodiversity conservation in the Sahyadri Tiger Reserve.",
      data: [
        "Multispectral satellite imagery (Sentinel-2 & Landsat) for spectral index calculation",
        "Administrative forest compartment boundaries, beats, and range boundaries",
        "Field GPS waypoints collected during forest monitoring and patrolling surveys",
        "Digital Elevation Model (DEM) for terrain elevation and slope slope partitioning"
      ],
      workflow: [
        "Satellite image radiometric calibration, atmospheric correction, and cloud masking",
        "LULC supervised classification categorizing dense forest, open forest, grasslands, and waterbodies",
        "Calculation of Normalized Difference Vegetation Index (NDVI) to track seasonal canopy health",
        "Spatial overlay of patrol tracks with terrain roughness and habitat vulnerability layers",
        "Thematic cartographic map compilation for forest officers and field staff"
      ],
      tools: ["ArcGIS Pro", "QGIS", "Remote Sensing", "Field GPS", "Spatial Analyst", "Cartography"],
      analysis: "Analyzed spatial distribution of dense evergreen and semi-evergreen canopy clusters versus fragmented edge corridors, supporting targeted ecological restoration and patrol optimization.",
      results: [
        { value: "STR", label: "Protected area study" },
        { value: "LULC + NDVI", label: "Remote sensing indices" },
        { value: "Thematic Maps", label: "Management deliverables" }
      ],
      application: "Assists protected area managers and wildlife researchers in monitoring habitat fragmentation, seasonal forage availability, and strategic resource allocation for forest conservation.",
      findings: [
        "Demonstrated clear correlation between higher NDVI values and undisturbed core sanctuary zones.",
        "Streamlined field data capture and geodatabase schema standardization for ranger monitoring."
      ],
      heroImage: { src: "assets/projects/lulc-change/lulc-2024.webp", alt: "Vegetation and land cover analysis for protected area monitoring", caption: "Forest cover & vegetation spatial analysis" },
      gallery: [
        { src: "assets/projects/lulc-change/lulc-2024.webp", alt: "Vegetation cover classification map", caption: "Forest & vegetation classification" },
        { src: "assets/projects/landslide-ml/factors-topography.webp", alt: "Terrain and vegetation factor mapping", caption: "Terrain and NDVI canopy layer" }
      ],
      report: null,
      confidentiality: "Internal wildlife department spatial data and sensitive patrol paths are summarized at an aggregated scale for public presentation."
    },

    {
      id: "drought-arcpy",
      title: "GIS-Based Drought Monitoring Tool",
      shortTitle: "Drought ArcPy Tool",
      featuredOrder: "04",
      type: "Academic Case Study · ArcPy Script Tool",
      year: "M.Sc. Geoinformatics Lab",
      featured: true,
      priority: 4,
      categories: ["Python / ArcPy", "Remote Sensing", "Environmental & Wildlife", "Spatial Analysis"],
      studyArea: "Multispectral Satellite Tile Processing System",
      summary: "A custom ArcGIS Pro geoprocessing script tool that automates drought-indicator derivation from satellite raster bands using Python, ArcPy and Spatial Analyst algebra.",
      objective: "Automate the multi-step calculation of agricultural and meteorological drought indices (NDVI, NDWI, NDMI, VCI, VHI, and TCI) into a single-click geoprocessing tool.",
      data: [
        "Required Red (Band 4), NIR (Band 8/5), and Green (Band 3) raster bands",
        "Optional Land Surface Temperature (LST) thermal raster band",
        "Optional Area of Interest (AOI) vector boundary for automatic masking/clipping",
        "User-specified output workspace directory"
      ],
      workflow: [
        "Input parameter parsing and schema validation via ArcPy tool dialog",
        "Automated raster clipping using ExtractByMask if AOI boundary is provided",
        "Normalized Difference Vegetation Index (NDVI = (NIR - Red) / (NIR + Red)) calculation",
        "Normalized Difference Water Index (NDWI = (Green - NIR) / (Green + NIR)) calculation",
        "Normalized Difference Moisture Index (NDMI = (NIR - SWIR) / (NIR + SWIR)) calculation",
        "Vegetation Condition Index (VCI) calculation scaled across historical min/max rasters",
        "Thermal Condition Index (TCI) derivation when LST raster is supplied",
        "Vegetation Health Index (VHI = 0.5 * VCI + 0.5 * TCI) final composite computation and symbology rendering"
      ],
      tools: ["ArcGIS Pro", "Python 3", "ArcPy", "Spatial Analyst", "Raster Algebra"],
      analysis: "Eliminates repetitive manual Raster Calculator operations, standardizing index math and ensuring reproducible temporal drought surveillance.",
      results: [
        { value: "6", label: "Drought indices calculated" },
        { value: "1-Click", label: "Automated geoprocessing" },
        { value: "VHI & NDWI", label: "Primary output indices" }
      ],
      application: "Empowers agricultural planners, water resource authorities, and environmental scientists to rapidly evaluate drought severity, crop stress, and soil moisture deficits.",
      findings: [
        "Integrated 6 distinct spectral indices into an intuitive ArcGIS Pro Toolbox with input validation and error handling.",
        "Demonstrated significant reduction in processing time compared to manual multi-step raster workflows."
      ],
      heroImage: { src: "assets/projects/drought-tool/vhi-output.webp", alt: "Vegetation Health Index raster output generated by the DroughtMetrics tool", caption: "Vegetation Health Index (VHI) output in ArcGIS Pro" },
      gallery: [
        { src: "assets/projects/drought-tool/tool-overview.webp", alt: "ArcGIS Pro DroughtMetrics script tool properties", caption: "ArcGIS Pro Python Script Tool properties" },
        { src: "assets/projects/drought-tool/parameters.webp", alt: "DroughtMetrics input parameter configuration", caption: "Tool parameter configuration interface" },
        { src: "assets/projects/drought-tool/arcpy-code.webp", alt: "ArcPy code embedded in the drought monitoring tool", caption: "Embedded ArcPy implementation code" },
        { src: "assets/projects/drought-tool/vhi-output.webp", alt: "VHI raster output in ArcGIS Pro", caption: "Vegetation Health Index (VHI) raster map" },
        { src: "assets/projects/drought-tool/ndwi-output.webp", alt: "NDWI raster output in ArcGIS Pro", caption: "Normalized Difference Water Index (NDWI) map" }
      ],
      report: "documents/drought-monitoring-arcpy-tool.pdf",
      reportLabel: "Read Tool Documentation PDF"
    },

    {
      id: "urban-heat-island",
      title: "Urban Heat Island & Land Surface Temperature Analysis",
      shortTitle: "Thermal LST / UHI",
      featuredOrder: "05",
      type: "Academic Remote Sensing Research",
      year: "M.Sc. Geoinformatics Lab",
      featured: true,
      priority: 5,
      categories: ["Remote Sensing", "Environmental & Wildlife", "Spatial Analysis"],
      studyArea: "Kochi District, Kerala, India",
      summary: "A quantitative thermal remote-sensing pipeline extracting Land Surface Temperature (LST) from Landsat thermal infrared bands through atmospheric calibration, brightness temperature, NDVI, and fractional emissivity modeling.",
      objective: "Quantify the Urban Heat Island (UHI) phenomenon and map spatial micro-temperature variations across urban, suburban, and vegetated surfaces.",
      data: [
        "Landsat Thermal Infrared Sensor (TIRS) Band 10",
        "Multispectral Red and NIR bands for NDVI vegetation proportion calculation",
        "Radiometric calibration coefficients and thermal constants (K1, K2) from Landsat scene metadata"
      ],
      workflow: [
        "Conversion of Digital Numbers (DN) to Top of Atmosphere (TOA) spectral radiance using multiplicative and additive rescaling factors",
        "Conversion of spectral radiance to At-Sensor Brightness Temperature (BT) using Planck's inverse law",
        "NDVI computation and derivation of Proportion of Vegetation (Pv = ((NDVI - NDVImin) / (NDVImax - NDVImin))^2)",
        "Land Surface Emissivity (ε) calculation based on soil, vegetation, and surface roughness fractions",
        "Final Land Surface Temperature (LST in °C) calculation corrected for emissivity and atmospheric transmission"
      ],
      tools: ["ArcGIS / ArcMap", "Raster Calculator", "Thermal Remote Sensing", "Landsat 8/9 Data"],
      analysis: "Revealed strong inverse correlation between dense vegetation cover (high NDVI) and surface temperature, highlighting significant thermal hot-spots in dense built-up zones compared to coastal/vegetated zones.",
      results: [
        { value: "LST (°C)", label: "Final thermal map output" },
        { value: "5-Step", label: "Radiative transfer workflow" },
        { value: "Landsat TIRS", label: "Thermal sensor source" }
      ],
      application: "Provides essential spatial data for urban climatology, green infrastructure planning, thermal comfort modeling, and municipal cooling strategies.",
      findings: [
        "High-density urban surfaces exhibited up to 6–8°C higher surface temperature than adjacent vegetated and water zones.",
        "Demonstrated the utility of satellite thermal data for scalable urban climate assessment without dense physical sensor networks."
      ],
      heroImage: { src: "assets/projects/urban-heat-island/lst-map.webp", alt: "Kochi District Land Surface Temperature result map", caption: "Kochi District Land Surface Temperature (LST) Map" },
      gallery: [
        { src: "assets/projects/urban-heat-island/bt-processing.webp", alt: "Raster Calculator step for brightness-temperature processing", caption: "Brightness temperature calculation in Raster Calculator" },
        { src: "assets/projects/urban-heat-island/lst-processing.webp", alt: "Raster Calculator step for Land Surface Temperature", caption: "Emissivity-corrected LST processing" },
        { src: "assets/projects/urban-heat-island/lst-map.webp", alt: "Final Kochi District Land Surface Temperature map", caption: "Final Land Surface Temperature spatial output" }
      ],
      report: "documents/urban-heat-island.pdf",
      reportLabel: "Read UHI Lab Report PDF"
    },

    {
      id: "frequency-ratio",
      title: "Frequency Ratio Landslide Susceptibility Mapping",
      shortTitle: "Frequency Ratio LSM",
      type: "Academic Geospatial Research",
      year: "M.Sc. Geoinformatics",
      featured: false,
      priority: 6,
      categories: ["Environmental & Wildlife", "Remote Sensing", "Spatial Analysis"],
      studyArea: "Upper Koyana region, Western Ghats, Maharashtra",
      summary: "A bivariate statistical susceptibility model correlating past landslide occurrences with 12 conditioning factors via Frequency Ratio (FR) weighting and multi-criteria spatial overlay.",
      objective: "Evaluate the statistical probability of landslide occurrences across the fragile Upper Koyana catchment to support slope-stabilization and watershed protection.",
      data: [
        "Historical landslide inventory interpreted from multi-temporal satellite imagery and field records",
        "DEM-derived terrain parameters: slope, aspect, elevation, plan/profile curvature",
        "Satellite-derived LULC and NDVI vegetation indices",
        "Geological lineament density from Bhukosh and IMD spatial rainfall records"
      ],
      workflow: [
        "Spatial discretization and reclassification of 12 conditioning rasters into discrete sub-classes",
        "Computation of Frequency Ratio (FR = (Npix(SXi) / Npix(SX)) / (Npix(Xj) / Npix(T))) for each factor class",
        "Raster class re-weighting according to calculated FR values",
        "Weighted linear combination and spatial overlay in ArcGIS 10.8",
        "Classification into five susceptibility zones: Very Low, Low, Moderate, High, and Very High"
      ],
      tools: ["ArcGIS 10.8", "Google Earth Pro", "Spatial Analyst", "Statistical Modeling"],
      analysis: "Quantified the empirical likelihood of slope failure per conditioning class, establishing that steep slopes with fractured lithology and high monsoon rainfall exhibit the highest FR ratios (>2.5).",
      results: [
        { value: "12", label: "Conditioning factors" },
        { value: "5", label: "Susceptibility classes" },
        { value: "FR Bivariate", label: "Statistical method" }
      ],
      application: "Guides ecological protection, slope stabilization works, and disaster management in the vulnerable Upper Koyana catchment.",
      findings: [
        "Demonstrated the reliability of bivariate statistical modeling for baseline landslide hazard zoning in the Western Ghats.",
        "Provided transparent, class-by-class probability scores for every physical terrain and environmental parameter."
      ],
      heroImage: { src: "assets/projects/frequency-ratio/susceptibility-map.webp", alt: "Final Frequency Ratio landslide susceptibility map for the Upper Koyana region", caption: "Upper Koyana Frequency Ratio Landslide Susceptibility Map" },
      gallery: [
        { src: "assets/projects/frequency-ratio/inventory.webp", alt: "Landslide inventory map of Upper Koyana", caption: "Landslide inventory map · Upper Koyana" },
        { src: "assets/projects/frequency-ratio/factors-a.webp", alt: "Composite thematic factor maps used in the Frequency Ratio model", caption: "Conditioning factors · Topographic & hydrological" },
        { src: "assets/projects/frequency-ratio/factors-b.webp", alt: "Additional thematic factor maps used in the Frequency Ratio model", caption: "Conditioning factors · Geological & vegetation" },
        { src: "assets/projects/frequency-ratio/susceptibility-map.webp", alt: "Frequency Ratio landslide susceptibility map", caption: "Final 5-class susceptibility map" }
      ],
      report: "documents/landslide-frequency-ratio.pdf",
      reportLabel: "Read Frequency Ratio Report PDF"
    },

    {
      id: "watershed",
      title: "Watershed Delineation & Sub-Watershed Prioritization",
      shortTitle: "Watershed Prioritization",
      type: "Academic Hydrological GIS Project",
      year: "M.Sc. Geoinformatics",
      featured: false,
      priority: 7,
      categories: ["Environmental & Wildlife", "Terrain & Drone", "Spatial Analysis"],
      studyArea: "Doodhganga Basin, Maharashtra–Karnataka border",
      summary: "Hydrological modeling and morphometric prioritization from SRTM DEM data ranking sub-watersheds based on linear, areal, and relief parameters for targeted soil and water conservation.",
      objective: "Delineate drainage sub-basins and prioritize them based on erosion vulnerability and peak runoff risk using quantitative morphometric analysis.",
      data: [
        "SRTM 30 m Digital Elevation Model (DEM)",
        "Drainage network vector layers and stream order hierarchy",
        "Basin boundary and pour point definitions"
      ],
      workflow: [
        "DEM hydrological conditioning: sink filling, flow direction (D8 algorithm), and flow accumulation",
        "Stream network extraction using a threshold flow accumulation value and stream ordering (Strahler method)",
        "Automated sub-watershed delineation from defined pour points",
        "Calculation of linear parameters (stream length ratio, bifurcation ratio), areal parameters (drainage density, stream frequency, form factor, circulatory ratio, elongation ratio), and relief parameters (relief ratio, ruggedness number)",
        "Compound ranking assignment: direct ranking for linear/relief metrics, inverse ranking for shape parameters",
        "Final classification into High, Medium, and Low conservation priority classes"
      ],
      tools: ["ArcMap 10.8.2", "Spatial Analyst", "Hydrology Toolset", "Morphometric Formulas"],
      analysis: "Sub-watersheds with high drainage density, steep relief ratio, and high bifurcation ratio were assigned High priority due to their susceptibility to high peak discharge and accelerated soil erosion.",
      results: [
        { value: "8", label: "Sub-watersheds delineated" },
        { value: "3", label: "Priority ranks (High/Med/Low)" },
        { value: "SRTM 30m", label: "Hydrological source" }
      ],
      application: "Directly assists soil conservation engineers, forest departments, and watershed development programs in prioritizing check-dams, afforestation, and contour bunding.",
      findings: [
        "Identified critical upper-catchment sub-watersheds exhibiting severe runoff risk requiring immediate afforestation and engineering interventions.",
        "Produced comprehensive morphometric tables and high-legibility cartographic priority maps."
      ],
      heroImage: { src: "assets/projects/watershed/priority-map.webp", alt: "Sub-watershed-wise priority map of the Doodhganga Basin", caption: "Sub-watershed-wise priority map · Doodhganga Basin" },
      gallery: [
        { src: "assets/projects/watershed/priority-map.webp", alt: "Doodhganga Basin sub-watershed priority map", caption: "High / Medium / Low priority map for soil & water conservation" }
      ],
      report: "documents/watershed-delineation-prioritization.pdf",
      reportLabel: "Read Watershed Report PDF"
    },

    {
      id: "lulc-change",
      title: "LULC Multi-Temporal Change Detection: 2016–2024",
      shortTitle: "LULC Change Detection",
      type: "Academic Remote Sensing / GIS Lab",
      year: "M.Sc. Geoinformatics Lab",
      featured: false,
      priority: 8,
      categories: ["Remote Sensing", "Environmental & Wildlife", "Spatial Analysis"],
      studyArea: "Regional Satellite Multi-Date Study Area",
      summary: "A vector-raster cross-tabulation and spatial intersection workflow quantifying 8-year land-use and land-cover transitions between 2016 and 2024, highlighting built-up expansion and forest loss.",
      objective: "Quantify, map, and analyze spatial transitions and area trajectories among land cover classes between 2016 and 2024.",
      data: [
        "Classified LULC raster dataset — 2016 baseline",
        "Classified LULC raster dataset — 2024 terminal period"
      ],
      workflow: [
        "Raster-to-vector conversion of classified 2016 and 2024 LULC maps",
        "Attribute class dissolution to merge contiguous homogeneous polygons",
        "Geometric overlay and spatial intersection of 2016 and 2024 vector layers",
        "Transition field concatenation (e.g. 'Forest to Built-up', 'Agriculture to Built-up')",
        "Calculate Geometry to compute precise net area changes and transition cross-tabulation matrix",
        "Transition dynamics visualization and class trajectory plotting"
      ],
      tools: ["ArcMap", "Spatial Overlay", "Dissolve / Intersect", "Field Calculator", "Calculate Geometry"],
      analysis: "Quantified net transition dynamics: built-up land expanded significantly (+22.42 units) while forest area contracted (−15.73 units) over the 8-year monitoring interval.",
      results: [
        { value: "+22.42", label: "Built-up area expansion" },
        { value: "−15.73", label: "Forest area change" },
        { value: "2016→2024", label: "8-Year monitoring span" }
      ],
      application: "Provides objective empirical data for land-use policy, environmental impact assessment, sustainable urban growth boundaries, and forest conservation monitoring.",
      findings: [
        "Documented pronounced conversion of agricultural and forest edge zones into built-up and commercial developments.",
        "Generated transition matrix tables and visual comparison charts detailing class-by-class shifts."
      ],
      heroImage: { src: "assets/projects/lulc-change/change-chart.webp", alt: "Graph of LULC change between 2016 and 2024", caption: "LULC Class-Transition Result Chart (2016–2024)" },
      compare: {
        before: { src: "assets/projects/lulc-change/lulc-2016.webp", alt: "LULC classification for 2016", label: "2016 Baseline" },
        after: { src: "assets/projects/lulc-change/lulc-2024.webp", alt: "LULC classification for 2024", label: "2024 Status" }
      },
      gallery: [
        { src: "assets/projects/lulc-change/lulc-2016.webp", alt: "ArcMap view of LULC 2016", caption: "2016 LULC classification map" },
        { src: "assets/projects/lulc-change/lulc-2024.webp", alt: "ArcMap view of LULC 2024", caption: "2024 LULC classification map" },
        { src: "assets/projects/lulc-change/change-chart.webp", alt: "Chart of LULC class transitions from 2016 to 2024", caption: "LULC transition trajectory matrix chart" }
      ],
      report: null,
      evidenceNote: "Area change values (+22.42 built-up, −15.73 forest) are calculated directly from the class-area attribute tables documented in the project analysis."
    },

    {
      id: "municipal-web-gis",
      title: "Municipal Property Tax Web GIS & Spatial Database",
      shortTitle: "Municipal Web GIS",
      type: "Applied Professional Industry Delivery",
      year: "Since 04/2025",
      featured: false,
      priority: 9,
      categories: ["Web & Field GIS", "Python / ArcPy", "Spatial Analysis"],
      studyArea: "Thane Municipal Corporation (TMC) Project Area, Maharashtra",
      summary: "Production GIS engineering for municipal governance: spatial database management, parcel validation, building footprint digitisation, QA/QC topology validation, ArcPy script automation, QField mobile synchronization, and ArcGIS Online/Experience Builder Web GIS.",
      objective: "Build, validate, and deploy high-accuracy spatial databases and Web GIS portals for municipal property tax assessment, spatial planning, and field verification.",
      data: [
        "High-resolution municipal drone/satellite orthomosaics",
        "Cadastral maps and parcel boundary records",
        "Building footprint vectors and property tax assessment attribute tables",
        "Mobile GPS field survey attributes collected via QField"
      ],
      workflow: [
        "Georeferencing cadastral maps and digitising building footprints and parcel boundaries in ArcGIS Pro/QGIS",
        "Enforcing strict GIS topology rules (No Gaps, No Overlaps, Must Be Covered By, etc.) and attribute integrity validation",
        "Developing Python/ArcPy automation scripts to batch-process attribute validations and spatial joins",
        "Configuring QField mobile GIS projects with offline sync capabilities for field teams",
        "Publishing enterprise web feature layers and authoring interactive Web GIS maps and dashboards in ArcGIS Online & Experience Builder"
      ],
      tools: ["ArcGIS Pro", "ArcGIS Online", "Experience Builder", "QGIS", "QField", "Python / ArcPy", "Spatial SQL"],
      analysis: "Maintains spatial consistency across tens of thousands of urban parcel geometries and attribute records, resolving topological conflicts and standardizing field collection.",
      results: [
        { value: "Enterprise", label: "Municipal GIS database" },
        { value: "QField", label: "Mobile field verification" },
        { value: "Web GIS", label: "Experience Builder dashboards" },
        { value: "QA/QC", label: "Strict topology enforcement" }
      ],
      application: "Directly powers municipal property tax assessment, civic utility planning, revenue enhancement, and spatial decision support.",
      findings: [
        "Demonstrates production-scale competence in spatial data hygiene, enterprise web mapping, field-to-office sync, and geoprocessing scripting."
      ],
      heroImage: null,
      gallery: [],
      confidentiality: "Client and municipal property tax spatial datasets and live production credentials are confidential and intentionally excluded from public display."
    }
  ],

  skillEvidence: [
    {
      name: "Forest, Wildlife & Environmental GIS",
      level: "Applied Professional + Field",
      badge: "Core Direction",
      summary: "Wildlife habitat monitoring, protected area zoning, canopy dynamics, vegetation health (NDVI), and conservation geodatabase management.",
      evidence: ["Sahyadri Tiger Reserve habitat mapping & NDVI", "Landslide & erosion hazard mitigation", "Morphometric watershed conservation prioritization"],
      projectIds: ["sahyadri-conservation", "landslide-ml", "watershed", "drought-arcpy"]
    },
    {
      name: "Remote Sensing & Satellite Earth Observation",
      level: "Applied Advanced",
      badge: "Core Stack",
      summary: "Multispectral & thermal satellite image processing, radiometric calibration, spectral index math (NDVI, NDWI, NDMI, VHI, LST), and multi-temporal change detection.",
      evidence: ["Sentinel-2 & ALOS PALSAR in Landslide ML", "Landsat thermal radiative transfer for Kochi LST", "2016–2024 LULC multi-temporal change detection", "Drought spectral indices"],
      projectIds: ["landslide-ml", "urban-heat-island", "lulc-change", "drought-arcpy"]
    },
    {
      name: "Python, ArcPy & GIS Automation",
      level: "Applied Scripting",
      badge: "Automation",
      summary: "Custom ArcGIS Pro Python Toolbox (.pyt) creation, ArcPy Spatial Analyst algebra, batch geoprocessing, raster math automation, and municipal attribute validation.",
      evidence: ["DroughtMetrics custom ArcGIS Pro script tool", "Municipal spatial database batch processing & attribute validation scripts"],
      projectIds: ["drought-arcpy", "municipal-web-gis"]
    },
    {
      name: "GeoAI, Machine Learning & Hazard Modeling",
      level: "Research & Modeling",
      badge: "GeoAI",
      summary: "Supervised classification algorithms (Random Forest, SVM, XGBoost), feature importance selection (Pearson, Mutual Information, Information Gain), and statistical probability modeling (Frequency Ratio).",
      evidence: ["XGBoost vs RF vs SVM 93.41% accuracy Landslide Susceptibility", "Upper Koyana Frequency Ratio statistical hazard modeling"],
      projectIds: ["landslide-ml", "frequency-ratio"]
    },
    {
      name: "Web GIS, Field GIS & Spatial Databases",
      level: "Professional Delivery",
      badge: "Industry",
      summary: "ArcGIS Online, ArcGIS Experience Builder web applications, QField mobile spatial data collection, enterprise geodatabase schemas, and strict topology QA/QC.",
      evidence: ["Thane Municipal Corporation Web GIS & Experience Builder", "QField mobile GIS field verification projects", "Topology validation (No Gaps, No Overlaps)"],
      projectIds: ["municipal-web-gis"]
    },
    {
      name: "Terrain Analysis, Hydrology & UAV Photogrammetry",
      level: "Applied Methods",
      badge: "Photogrammetry",
      summary: "Structure-from-Motion (SfM) UAV processing, DEM/DSM/DTM bare-earth extraction, contour generation, 3D mesh modeling, and morphometric watershed prioritization.",
      evidence: ["Agisoft Metashape UAV orthomosaic, DSM/DTM & 3D mesh", "SRTM DEM Doodhganga basin morphometric prioritization", "ALOS PALSAR terrain factors (relief, slope, curvature, SPI, TWI)"],
      projectIds: ["uav-photogrammetry", "watershed", "landslide-ml"]
    }
  ],

  journey: [
    {
      id: "journey-geography",
      period: "2021–2023",
      title: "M.A. Geography · Landscape & Spatial Foundations",
      institution: "Shivaji University, Kolhapur",
      detail: "Built deep theoretical and empirical foundations in geomorphology, physical geography, climatology, cartography, and regional human-environment spatial interactions.",
      locationKey: "kolhapur-shivaji"
    },
    {
      id: "journey-geoinformatics",
      period: "2023–2025",
      title: "M.Sc. Geoinformatics · Geospatial Engineering & Research",
      institution: "Shivaji University, Kolhapur",
      detail: "Advanced technical specialization in Remote Sensing, Digital Image Processing, GIS programming (Python/ArcPy), Spatial Modeling, Geostatistics, Photogrammetry, and Web GIS.",
      locationKey: "kolhapur-shivaji"
    },
    {
      id: "journey-sahyadri",
      period: "05/2024 – 06/2024",
      title: "Forest & Wildlife GIS Intern · Sahyadri Tiger Reserve",
      institution: "Sahyadri Tiger Reserve, Forest Department",
      detail: "Applied Remote Sensing and GIS for wildlife habitat monitoring, LULC classification, NDVI canopy dynamics, and conservation geodatabase management in the Western Ghats.",
      locationKey: "sahyadri-tiger-reserve"
    },
    {
      id: "journey-research",
      period: "2024–2025",
      title: "GeoAI, ArcPy Scripting & Environmental Modeling",
      institution: "M.Sc. Research Program",
      detail: "Executed flagship research in Machine Learning Landslide Susceptibility (XGBoost 93.41% accuracy), ArcPy Drought Automation tools, Kochi Thermal LST, and Watershed Prioritization.",
      locationKey: "chandoli-tilari"
    },
    {
      id: "journey-industry",
      period: "Since 04/2025",
      title: "GIS Analyst · Sthapatya Consultants / Thane Municipal GIS",
      institution: "Sthapatya Consultants Pvt. Ltd.",
      detail: "Delivering enterprise municipal GIS solutions, spatial database QA/QC, topology validation, Python/ArcPy automation, QField mobile workflows, and ArcGIS Online/Experience Builder apps.",
      locationKey: "thane-mmr"
    }
  ],

  mapLocations: [
    {
      id: "sahyadri-tiger-reserve",
      name: "Sahyadri Tiger Reserve",
      region: "Karad / Northern Western Ghats, Maharashtra",
      coords: [17.5134, 73.7482],
      zoom: 10,
      badge: "Forest & Wildlife GIS",
      role: "GIS Intern · Wildlife Habitat Monitoring",
      description: "Conducted wildlife habitat spatial analysis, multispectral LULC mapping, NDVI vegetation dynamics, and conservation geodatabase support in the Western Ghats.",
      projectId: "sahyadri-conservation"
    },
    {
      id: "chandoli-tilari",
      name: "Chandoli to Tilari Hilly Corridor",
      region: "Western Ghats, Kolhapur District",
      coords: [16.5824, 74.0125],
      zoom: 9,
      badge: "Machine Learning & GeoAI",
      role: "M.Sc. Flagship Research",
      description: "Mapped and evaluated 839 landslide points with XGBoost (93.41% accuracy), Random Forest, and SVM using ALOS PALSAR terrain factors, Sentinel-2, and 32-year rainfall data.",
      projectId: "landslide-ml"
    },
    {
      id: "upper-koyana",
      name: "Upper Koyana Basin",
      region: "Western Ghats, Maharashtra",
      coords: [17.4021, 73.7540],
      zoom: 10,
      badge: "Statistical GIS Modeling",
      role: "Frequency Ratio Landslide Study",
      description: "Bivariate statistical landslide susceptibility assessment integrating 12 physical conditioning factors with historical landslide inventory overlays.",
      projectId: "frequency-ratio"
    },
    {
      id: "doodhganga",
      name: "Doodhganga River Basin",
      region: "Maharashtra–Karnataka Border",
      coords: [16.3400, 74.2200],
      zoom: 10,
      badge: "Hydrological Prioritization",
      role: "Watershed Morphometric Analysis",
      description: "Delineated 8 sub-watersheds from SRTM DEM and assigned High/Medium/Low soil & water conservation priority ranks based on compound morphometric parameters.",
      projectId: "watershed"
    },
    {
      id: "thane-mmr",
      name: "Thane Municipal Corporation",
      region: "Mumbai Metropolitan Region, Maharashtra",
      coords: [19.2183, 72.9781],
      zoom: 11,
      badge: "Industry GIS Practice",
      role: "GIS Analyst (Since 04/2025)",
      description: "Enterprise spatial database management, building footprint digitisation, parcel validation, topology rules enforcement, ArcPy automation, and Web GIS delivery.",
      projectId: "municipal-web-gis"
    },
    {
      id: "kochi-district",
      name: "Kochi District",
      region: "Kerala, India",
      coords: [9.9312, 76.2673],
      zoom: 10,
      badge: "Thermal Remote Sensing",
      role: "Urban Heat Island / LST Analysis",
      description: "Derived Land Surface Temperature (LST in °C) from Landsat thermal infrared bands using radiance, brightness temperature, NDVI, and emissivity radiative models.",
      projectId: "urban-heat-island"
    },
    {
      id: "kolhapur-shivaji",
      name: "Shivaji University, Kolhapur",
      region: "Kolhapur, Maharashtra",
      coords: [16.6780, 74.2546],
      zoom: 11,
      badge: "Academic Foundations",
      role: "M.Sc. Geoinformatics & M.A. Geography",
      description: "Department of Geography & Geoinformatics — comprehensive academic training in Remote Sensing, Digital Image Processing, Python for GIS, Spatial Modeling, and Cartography.",
      projectId: null
    }
  ]
};
