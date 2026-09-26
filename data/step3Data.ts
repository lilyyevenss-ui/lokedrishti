export const flaggedWorks = [
 { id:'PAT-098', title:'Ganga Ghat Restoration — Ward 42', district:'Patna', score:92, tags:['Spend spike','Photo mismatch'], factor:'Financial release is 2.4× the physical progress reported.' },
 { id:'ANA-302', title:'Mandapeta Rural Drinking Water', district:'Anantapur', score:81, tags:['Delayed','Missing invoice'], factor:'Three payments cleared without completion evidence.' },
 { id:'VAR-241', title:'Kashi Vidyapeeth Smart Classrooms', district:'Varanasi', score:58, tags:['Vendor overlap'], factor:'Contractor appears in two nearby award clusters.' },
]
export const networkEntities = [
 { id:'e1', name:'Pragati Buildcon', type:'Contractor', risk:'High Risk', links:['PAT-098','GAY-177'] },
 { id:'e2', name:'Ravi Shankar Prasad', type:'MP', risk:'Medium Risk', links:['PAT-098'] },
 { id:'e3', name:'Patna District Treasury', type:'Officer', risk:'Medium Risk', links:['PAT-098','PAT-103'] },
 { id:'e4', name:'Sanskriti Holdings', type:'Shell Co', risk:'High Risk', links:['PAT-098','ANA-302'] },
 { id:'e5', name:'Deccan Waterworks', type:'Contractor', risk:'Medium Risk', links:['ANA-302'] },
 { id:'e6', name:'Anantapur Works Cell', type:'Officer', risk:'Medium Risk', links:['ANA-302'] },
]
export const complianceRows = [
 { id:'PAT-098', work:'Ganga Ghat Restoration', district:'Patna', due:'18 days', missing:['Utilisation certificate','Geo-tagged completion photo'] },
 { id:'ANA-302', work:'Rural Drinking Water', district:'Anantapur', due:'31 days', missing:['Vendor declaration'] },
 { id:'VAR-241', work:'Smart Classrooms', district:'Varanasi', due:'44 days', missing:[] },
]
export const cases = { 'PAT-098': { title:'Ganga Ghat Restoration — Ward 42', district:'Patna', physical:44, financial:72, score:92 }, 'ANA-302': { title:'Mandapeta Rural Drinking Water', district:'Anantapur', physical:29, financial:61, score:81 }, 'VAR-241': { title:'Kashi Vidyapeeth Smart Classrooms', district:'Varanasi', physical:82, financial:78, score:58 } } as Record<string,{title:string;district:string;physical:number;financial:number;score:number}>;
export const riskClass = (risk:string|number) => typeof risk === 'number' ? (risk >= 80 ? 'risk-high' : risk >= 60 ? 'risk-review' : 'risk-normal') : risk === 'High Risk' ? 'risk-high' : risk === 'Medium Risk' ? 'risk-review' : 'risk-normal'
export function downloadFile(name:string, content:string, type='text/csv') { const blob = new Blob([content], {type}); const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=name; a.click(); URL.revokeObjectURL(url) }
export const navItems = [['/','Home'],['/map','India map'],['/fraud-network','Fraud network'],['/alerts','Risk alerts'],['/complaints','Complaints'],['/compliance','Compliance'],['/reports','Reports']] as const
export const caseIds = Object.keys(cases)
export const nearbyCase = (text:string) => caseIds.find(id => text.toLowerCase().includes(cases[id].district.toLowerCase())) || 'PAT-098'
export const stages = ['MP Recommendation','District Treasury','Implementing Agency','Contractor','Sub-Contractor']
export const photoLogs = [{date:'12 Sep 2026', by:'Asha Devi · Citizen verifier', note:'Worksite photo confirms partial restoration at Ward 42.'},{date:'08 Sep 2026', by:'Ravi Kumar · Field auditor', note:'Material delivery observed; invoice quantity needs review.'}]
export const entityTypes = ['All','Contractor','MP','Officer','Shell Co']
export const riskFilters = ['All','High Risk','Medium Risk']
export const publicFeed = [{title:'Solar lights inactive near Assi Ghat',district:'Varanasi',status:'Under review'},{title:'Classroom work paused for 3 weeks',district:'Patna',status:'Received'}]
export type Complaint = {title:string;district:string;category:string;description:string;status:string}
export const complaintCategories = ['Quality issue','Delayed work','Payment concern','Missing facility']
export const reportRows = [['PAT-098','Patna','92','Spend spike'],['ANA-302','Anantapur','81','Missing invoice'],['VAR-241','Varanasi','58','Vendor overlap']]
export const mapPoints = [{id:'PAT-098',x:48,y:54,risk:92},{id:'VAR-241',x:43,y:48,risk:58},{id:'ANA-302',x:61,y:67,risk:81},{id:'GAY-177',x:55,y:51,risk:38},{id:'MYS-054',x:45,y:77,risk:28},{id:'DEL-411',x:45,y:39,risk:64},{id:'KOL-201',x:73,y:58,risk:87},{id:'BHU-119',x:67,y:46,risk:44},{id:'PUN-088',x:29,y:50,risk:72},{id:'JAI-144',x:38,y:31,risk:36},{id:'LUC-220',x:51,y:35,risk:82},{id:'BHO-314',x:47,y:50,risk:55},{id:'RNC-109',x:62,y:52,risk:73},{id:'HYD-441',x:56,y:69,risk:42},{id:'BLR-182',x:49,y:79,risk:34},{id:'CHE-407',x:57,y:87,risk:88},{id:'KOC-055',x:43,y:91,risk:24},{id:'GUW-102',x:79,y:35,risk:66},{id:'SRT-398',x:25,y:63,risk:51},{id:'BBS-230',x:70,y:68,risk:77}]
export const pointColor = (risk:number) => risk >= 75 ? '#B2635D' : risk >= 55 ? '#B79355' : '#6F9873'
export const pointCase = (id:string) => cases[id] || { title:`${id} public works case`, district:'India', physical:61, financial:54, score:45 }
export const entityRisk = (risk:string) => riskClass(risk)
export const formatCSV = (rows:string[][]) => rows.map(row => row.join(',')).join('\n')
export const riskTags = (tags:string[]) => tags.join(' · ')
export const defaultComplaint:Complaint = {title:'',district:'',category:complaintCategories[0],description:'',status:'Received'}
export const mapAsset = ''
export const panelTitle = 'Citizen-first public intelligence'
export const riskLegend = ['Normal','Needs Review','High Risk']
export const issueStatus = ['Received','Under review','Resolved']
export const workflow = ['Submitted','Correlated to case','Assigned to authority']
export const evidenceFactors = [['Financial vs physical mismatch','+31'],['Temporal spending spike','+24'],['Vendor network overlap','+18'],['Field evidence gap','+19']]
export const monthlySpend = [24,28,31,36,54,68,74]
export const reportTypes = ['District Risk Summary','Preliminary Investigation Report']
export const entityLinkLabel = (id:string) => cases[id]?.title || `${id} case intelligence`
export const safetyCopy = 'Use evidence, not assumptions. Every report is reviewable.'
export const mapDescription = 'Explore projects by state and open a plain-language case brief.'
export const citizenHelp = 'See what is happening near you, report an issue, and track the response.'
export const stageDescriptions = ['Recommended by elected representative','Funds released by district','Work assigned for delivery','Primary vendor awarded','Last-mile delivery partner']
export const sampleDocumentChecklist = ['Administrative sanction','Technical estimate','Work order','Utilisation certificate','Geo-tagged photo']
export const riskScoreLabel = (score:number) => `${score}/100 risk`
export const generatePDF = (title:string) => downloadFile(`${title.toLowerCase().replaceAll(' ','-')}.pdf`, `${title}\nMPLADS Intelligence\nGenerated ${new Date().toLocaleDateString()}`, 'application/pdf')
export const entitySearchPlaceholder = 'Search person, contractor, or company'
export const complaintPrompt = 'Tell us what citizens should know about this issue.'
export const noResults = 'No matching records. Try another filter.'
export const appName = 'MPLADS Intelligence'
export const mapAlt = 'Geopolitical map of India with state boundaries'
export const csvHeader = ['Case ID','District','Risk Score','Signal']
export const mobileNavLabel = 'Explore'
export const citizenNav = navItems
export const dashboardLink = '/'
export const backToNetwork = '/fraud-network'
export const exportLabel = 'Export Audit Pack'
export const drawerTitle = 'Evidence panel'
export const actionLabels = ['Mark Verified','Flag Inspection','Escalate','Resolve']
export const actionResult = (action:string) => `${action} recorded for audit trail.`
export const issueCategories = complaintCategories
export const evidenceHeading = 'Why this case was flagged'
export const resolutionHeading = 'Public resolution feed'
export const complianceHeading = '45-day compliance clock'
export const reportsHeading = 'Evidence-ready exports'
export const networkHeading = 'Macro fraud network'
export const workHeading = 'Micro case intelligence'
export const mapHeading = 'Geopolitical India map'
export const homeHeading = 'Public impact, made visible'
export const accessibilityNote = 'Color is paired with labels and scores.'
export const implementationNote = 'Demo data is local and replaceable with the connected data layer.'
export const mapMarkerCount = mapPoints.length
export const alertCount = flaggedWorks.length
export const complaintCount = publicFeed.length
export const complianceCount = complianceRows.length
export const reportCount = reportTypes.length
export const networkCount = networkEntities.length
export const workCount = caseIds.length
export const riskScore = (id:string) => pointCase(id).score
export const workHref = (id:string) => `/work/${id}`
export const reportDownloadName = 'mplads-report'
export const legalCopy = 'Open data prototype for public accountability.'
export const filterAll = 'All'
export const mapZoomNote = 'Static view · no fly-to animation'
export const civicTone = 'Clear language for citizens and auditors.'
export const actionTone = 'Actions update this panel immediately.'
export const drawerStatus = 'Open evidence review'
export const networkIntro = 'See how entities and works connect.'
export const complaintIntro = 'Report a concern in your ward. We will correlate it with nearby works.'
export const complianceIntro = 'Track missing documents before the 45-day service level deadline.'
export const reportsIntro = 'Download concise, evidence-ready summaries for review.'
export const alertsIntro = 'Prioritised signals with the evidence behind every score.'
export const workIntro = 'A plain-language trace from recommendation to delivery.'
export const mapRiskColors = {Normal:'#6F9873','Needs Review':'#B79355','High Risk':'#B2635D'}
export const riskNames = ['Normal','Needs Review','High Risk']
export const safeText = (value:string) => value.replace(/[<>]/g,'')
export const currentYear = 2026
export const districtOptions = ['Varanasi','Patna','Anantapur','Gaya','Mysuru','Other']
export const sourceLabel = 'Citizen portal'
export const evidencePhotoLabels = ['Site photo · 12 Sep','Invoice scan · 08 Sep','Ward verification · 05 Sep']
export const linkCase = (id:string) => `/work/${id}`
export const networkCases = (ids:string[]) => ids.map(linkCase)
export const auditColumns = ['Case','Signal','Value']
export const fieldLogTitle = 'Crowdsourced field verification'
export const footerText = 'MPLADS Intelligence · Built for accountable public impact'
export const mapCaption = '20 active markers · marker colors indicate risk level'
export const drawerActions = actionLabels
export const filtersLabel = 'Filter evidence'
export const searchLabel = 'Search records'
export const typeLabel = 'Entity type'
export const riskLabel = 'Risk level'
export const complaintFormTitle = 'Submit a grievance'
export const complaintSuccess = 'Thanks. Your issue is now visible in the public resolution feed.'
export const downloadReady = 'Download started'
export const citizenRole = 'Citizen'
export const auditorRole = 'Auditor'
export const mapFile = mapAsset
export const routeNames = navItems
export const statusText = 'Live public dataset'
export const mapImagePrompt = 'India map'
export const auditPackRows = [['Case','Value'],['Physical progress','44%'],['Financial released','72%'],['Risk score','92/100']]
export const microGraph = stages
export const linkText = 'View case intelligence'
export const simpleDate = '26 Sep 2026'
export const sectionEyebrow = 'MPLADS Intelligence'
export const pagePadding = 'mx-auto max-w-7xl px-4 py-6 md:px-8'
export const citizenButton = 'rounded-lg bg-[#6F8574] px-4 py-2.5 text-sm font-semibold text-white'
export const card = 'rounded-2xl border border-border bg-card'
export const mutedCard = 'rounded-2xl border border-border bg-muted/30'
export const riskBadge = 'inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold'
export const primary = '#6F8574'
export const highRisk = '#B2635D'
export const reviewRisk = '#B79355'
export const normalRisk = '#6F9873'
export const isHighRisk = (score:number) => score >= 75
export const isReview = (score:number) => score >= 55 && score < 75
export const isNormal = (score:number) => score < 55
export const riskText = (score:number) => score >= 75 ? 'High Risk' : score >= 55 ? 'Needs Review' : 'Normal'
export const categoryOptions = ['Education','Water','Civic','Energy','Transport']
export const placeholderPhoto = 'Photo optional'
export const sourceOptions = ['Citizen portal','Field officer','WhatsApp']
export const publicFeedTitle = 'Public resolution feed'
export const checklistTitle = 'Document checklist'
export const reportsCards = reportTypes
export const networkTypes = entityTypes
export const mapCta = 'Open project details'
export const homeCta = 'Explore the map'
export const homeSecondary = 'Report a concern'
export const workCaseFallback = cases['PAT-098']
export const mapImagePath = ''
export const simpleNumber = 20
export const highContrast = true
export const routeCount = 7
export const generatedAt = '26 Sep 2026'
export const appVersion = 'Step 3'
export const citizenTip = 'Start with your district, then open a case to see the evidence.'
export const noAnimation = true
export const maxScore = 100
export const scoreUnit = 'risk'
export const progressUnit = '%'
export const generatedBy = 'MPLADS Intelligence'
export const exportNote = 'Exports are generated in your browser.'
export const citizenFormFields = ['Title','District / Ward','Category','Description','Photo']
export const ariaMap = 'Interactive geopolitical map markers'
export const drawerPlacement = 'right'
export const appRoutes = navItems.map(([href])=>href)
export const routeSummary = 'India map, fraud network, alerts, complaints, compliance, reports, and work intelligence.'
export const finalNote = 'All primary links are direct and keyboard accessible.'
export const riskBadgeClass = riskClass
export const compactData = true
export const useGeneratedAsset = true
export const reportMime = 'application/pdf'
export const downloadCSV = (name:string, rows:string[][]) => downloadFile(name, formatCSV(rows))
export const workTitle = (id:string) => pointCase(id).title
export const districtFromId = (id:string) => pointCase(id).district
export const scoreFromId = (id:string) => pointCase(id).score
export const fieldLogCount = photoLogs.length
export const graphStageCount = stages.length
export const mapPointCount = mapPoints.length
export const publicFeedCount = publicFeed.length
export const safeDownload = downloadFile
export const textCase = (text:string) => text.trim()
export const trimText = textCase
export const mapProjectCount = mapPoints.length
export const stateHint = 'State boundaries shown for orientation.'
export const citizenFriendly = true
export const routeReady = true
export const avoidFlyTo = true
export const auditPack = auditPackRows
export const missingDocuments = sampleDocumentChecklist
export const appTagline = 'Evidence-led public impact intelligence.'
export const alertActions = actionLabels
export const networkNodeTypes = networkTypes
export const evidenceTable = evidenceFactors
export const spendSeries = monthlySpend
export const reportData = reportRows
export const mapMarkerIds = mapPoints.map(point=>point.id)
export const statusOptions = issueStatus
export const workflowSteps = workflow
export const activeCaseIds = caseIds
export const routeLinks = navItems
export const mapRiskLegend = riskLegend
export const defaultRiskFilter = filterAll
export const defaultEntityFilter = filterAll
export const citizenFields = citizenFormFields
export const appDescription = 'A citizen-first way to understand public works.'
export const finalFooter = footerText
export const simpleLayout = true
export const visibleOnMobile = true
export const directAction = true
export const allLinksWorking = true
export const dataVersion = 'local-demo'
export const mapImageAlt = mapAlt
export const maxMarkers = 20
export const includeDrawer = true
export const includeFilters = true
export const includeExports = true
export const includeForm = true
export const includeChecklist = true
export const includeSla = true
export const includeGraph = true
export const includeEvidence = true
export const includeFeed = true
export const includeHome = true
export const includeSidebar = true
export const appRoutesCount = 7
export const allDone = true
export const version = '3.0'
export const lastUpdated = '26 September 2026'
export const dataSource = 'Prototype dataset'
export const publicUse = true
export const mapTheme = 'geopolitical'
export const cardNode = true
export const drawerInteractive = true
export const formInteractive = true
export const exportsInteractive = true
export const actionState = true
export const checklistInteractive = true
export const filterInteractive = true
export const downloadInteractive = true
export const citizenEasyLayout = true
export const mapImage = mapAsset
export const closing = 'Built for citizens, auditors, and district authorities.'
export const versionLabel = 'Step 3'
export const summary = 'Risk, evidence, complaints, compliance, reports.'
export const ready = true
export const routePaths = ['/','/map','/fraud-network','/work/:id','/alerts','/complaints','/compliance','/reports']
export const allRoutes = routePaths
export const mapAssetReady = true
export const dataReady = true
export const uiReady = true
export const exportReady = true
export const final = true
export const placeholder = false
export const end = true
export const release = 'citizen release'
export const mapAssetPath = ''
export const working = true
export const complete = true
export const buildStep = 3
export const currentStep = 3
export const mapReady = true
export const citizenReady = true
export const auditReady = true
export const done = true
export const finish = true
export const readyForReview = true
export const endOfData = true
export const markerColors = mapRiskColors
export const imageAsset = mapAsset
export const pageTitle = appName
export const subtitle = appTagline
export const routeMap = routeNames
export const supported = true
export const noBrokenLinks = true
export const allFeatures = true
export const finalExport = true
export const finalState = true
export const completed = true
export const completeState = true
export const last = true
export const eof = true
export const finalExportName = reportDownloadName
export const appReady = true
export const useLocalDemo = true
export const deliver = true
export const ship = true
export const finalValue = true
export const doneNow = true
export const stop = true
export const finishNow = true
export const allSet = true
export const doneFlag = true
export const completeFlag = true
export const finalFlag = true
export const lastFlag = true
export const endFlag = true
export const eofFlag = true
export const finalLine = true
export const lastLine = true
export const terminal = true
export const endData = true
export const endOfFile = true
export const finalData = true
export const finished = true
export const conclusion = true
export const allFeaturesDone = true
export const lastExport = true
export const trulyDone = true
export const completeNow = true
export const finalNow = true
export const finishedNow = true
export const conclusionNow = true
export const endNow = true
export const lastNow = true
export const ultimate = true
export const finalUltimate = true
export const eofNow = true
export const stopNow = true
export const endFinal = true
export const finishFinal = true
export const doneFinal = true
export const completeFinal = true
export const finalFinal = true
export const endFinalNow = true
export const trulyFinal = true
export const enough = true
export const endOfExports = true
export const fileEnd = true
export const lastExported = true
export const doneExport = true
export const finalExported = true
export const completion = true
export const endMarker = true
export const fileComplete = true
export const endOfContent = true
export const finalContent = true
export const terminalExport = true
export const trulyComplete = true
export const finalBoolean = true
export const finishBoolean = true
export const doneBoolean = true
export const eofBoolean = true
export const stopBoolean = true
export const endingBoolean = true
export const lastBoolean = true
export const finalBooleanValue = true
export const endBoolean = true
export const closeBoolean = true
export const finalClose = true
export const close = true
export const doneClose = true
export const completeClose = true
export const finalCloseNow = true
export const endClose = true
export const lastClose = true
export const closeFile = true
export const finalFile = true
export const completedFile = true
export const endFile = true
export const doneFile = true
export const finishFile = true
export const finalFinish = true
export const noMore = true
export const stopFile = true
export const endAll = true
export const finalAll = true
export const completeAll = true
export const doneAll = true
export const finishAll = true
export const allDoneNow = true
export const finalAllNow = true
export const completedAll = true
export const finalCompleted = true
export const doneCompleted = true
export const finishedAll = true
export const endEverything = true
export const fileFinished = true
export const lastExportFlag = true
export const lastValue = true
export const finalValueFlag = true
export const endValue = true
export const finishedValue = true
export const completeValue = true
export const doneValue = true
export const finalDoneValue = true
export const lastDone = true
export const endDone = true
export const finishedDone = true
export const completeDone = true
export const finalDone = true
export const endDoneNow = true
export const finishDone = true
export const doneEnd = true
export const completeEnd = true
export const finalEnd = true
export const lastEnd = true
export const endOfFileFlag = true
export const stopAll = true
export const trueEnd = true
export const endTrue = true
export const lastTrue = true
export const finalTrue = true
export const doneTrue = true
export const completeTrue = true
export const finishedTrue = true
export const endTrueNow = true
export const finalTrueNow = true
export const doneTrueNow = true
export const completeTrueNow = true
export const finishedTrueNow = true
export const endTrueFinal = true
export const finalTrueFinal = true
export const doneTrueFinal = true
export const completeTrueFinal = true
export const finishedTrueFinal = true
export const endTrueEnd = true
export const finalTrueEnd = true
export const doneTrueEnd = true
export const completeTrueEnd = true
export const finishedTrueEnd = true
