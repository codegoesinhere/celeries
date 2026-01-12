/**
 * @typedef {Object} Agreement
 * @property {string} portfolio
 * @property {"ncce"|"cce"|"company"} entityType
 * @property {string} agency
 * @property {string} website
 * @property {string} eaUrl
 * @property {string} name
 * @property {string} clauses
 * @property {number|null} pageStart
 * @property {string} description - HTML allowed
 */

/** @type {Agreement[]} */
window.agreements = [
  {
    portfolio: "Agriculture, Fisheries and Forestry",
    entityType: "ncce",
    agency: "Department of Agriculture, Fisheries and Forestry",
    website: "https://www.agriculture.gov.au/",
    eaUrl: "https://www.agriculture.gov.au/sites/default/files/documents/DAFF-Enterprise-Agreement-2024-2027.pdf",
    name: "Department of Agriculture, Fisheries and Forestry Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "343 to 360",
    pageStart: 56,
    earlyClose: "No",
    description: "",
    htmlVer: "",
    extraStreams: "Meat Inspector, Meat Inspector Training, Training, Public Affairs Officers, Legal Officers, Research Scientist, Veterinary Stream, On Plant Veterinarian (OPV), Preserved Veterinary",
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Attorney-General's Department",
    website: "https://www.ag.gov.au/",
    eaUrl: "https://www.ag.gov.au/sites/default/files/2024-03/agd-enterprise-agreement-2024.PDF",
    name: "Attorney-General's Department Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown period",
    clauses: "6.37",
    pageStart: 60,
    earlyClose: "No",
    description: "",
    extraStreams: "Training classifications and Entry Level Program participants, Lawyer designation (AGS), Paralegal (AGS), Legal Practice Support (AGS), Entry Level Programs (AGS)",
    htmlVer: ""
  },
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "ncce",
    agency: "Department of Climate Change, Energy, the Environment and Water (CCEEW)",
    website: "https://www.dcceew.gov.au/",
    eaUrl: "https://www.dcceew.gov.au/sites/default/files/documents/dcceew-enterprise-agreement-2024-2027.pdf",
    name: "Department of Climate Change, Energy, the Environment and Water Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "4.93 to 4.98",
    pageStart: 31,
    earlyClose: "No",
    description: "",
    extraClass: "Legal Officer, Public Affairs Officer, Head Office Antarctic Medical Practitioner, Research Scientist",
    htmlVer: ""
  },
  {
    portfolio: "Defence",
    entityType: "ncce",
    agency: "Department of Defence",
    website: "https://www.defence.gov.au/",
    eaUrl: "https://www.defence.gov.au/sites/default/files/2024-04/Defence-Enterprise-Collective-Agreement-2024.pdf",
    name: "Defence Enterprise Collective Agreement 2024",
    eaHeading: "Christmas stand down",
    clauses: "E20",
    pageStart: 64,
    earlyClose: "No",
    description: "",
    extraClass: "Trainee APS (Administrative), Trainee APS (Technical)",
    extraStreams: "Science and Technology, Medical, Trainee, Trainee Advancement",
    htmlVer: ""
  },
  {
    portfolio: "Education",
    entityType: "ncce",
    agency: "Department of Education",
    website: "https://www.education.gov.au/",
    eaUrl: "https://www.education.gov.au/download/17938/department-education-enterprise-agreement-2024-2027/36431/document/pdf",
    name: "Department of Education Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "229 to 231",
    pageStart: 46,
    earlyClose: "12:30pm",
    description: "",
    extraStreams: "Training, Government Lawyer, Information Technology (IT) Specialist",
    htmlVer: ""
  },  
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "ncce",
    agency: "Department of Employment and Workplace Relations (DEWR)",
    website: "https://www.dewr.gov.au/",
    eaUrl: "https://www.dewr.gov.au/download/16195/dewr-enterprise-agreement-2024-2027/40617/dewr-enterprise-agreement-2024-2027/pdf",
    name: "Department of Employment and Workplace Relations Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "180 to 182",
    pageStart: 34,
    earlyClose: "12:30pm",
    description: "",
    extraStreams: "Training, Government Lawyer",
    htmlVer: ""
  },  
  {
    portfolio: "Finance",
    entityType: "ncce",
    agency: "Department of Finance",
    website: "https://www.finance.gov.au/",
    eaUrl: "https://www.finance.gov.au/sites/default/files/2024-02/department-of-finance-ea-2024-2027.pdf",
    name: "Department of Finance Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "266 to 269",
    pageStart: 46,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Foreign Affairs and Trade",
    entityType: "ncce",
    agency: "Department of Foreign Affairs and Trade (DFAT)",
    website: "https://www.dfat.gov.au/",
    eaUrl: "https://www.dfat.gov.au/sites/default/files/dfat-enterprise-agreement-2024.pdf",
    name: "Department of Foreign Affairs and Trade Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown and additional holidays",
    clauses: "182 to 183",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    extraStreams: "Medical Officer",
    htmlVer: ""
  },  
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Department of Health, Disability and Ageing",
    website: "https://www.health.gov.au/",
    eaUrl: "https://www.health.gov.au/sites/default/files/2025-11/enterprise-agreement-ea_0.pdf",
    name: "Department of Health and Aged Care Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown and early stand down",
    clauses: "215 to 219",
    pageStart: 36,
    earlyClose: "03:00pm",
    description: "",
    extraStreams: "Entry Level, Gradate, Professional 1, Medical Officer, Legal, Public Affairs Officer, Research Scientist",
    htmlVer: ""
  },  
  {
    portfolio: "Home Affairs",
    entityType: "ncce",
    agency: "Department of Home Affairs",
    website: "https://www.homeaffairs.gov.au/",
    eaUrl: "https://www.homeaffairs.gov.au/ea/Documents/enterprise-agreement-2024-27.pdf",
    name: "Department of Home Affairs Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "5.110 to 5.112",
    pageStart: 39,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal Officers, Public Affairs Officers, Medical Officers, Detector Dog Handler, Training",
    htmlVer: ""
  },  
  {
    portfolio: "Industry, Science and Resources",
    entityType: "ncce",
    agency: "Department of Industry, Science and Resources",
    website: "https://www.industry.gov.au/",
    eaUrl: "https://www.industry.gov.au/sites/default/files/2024-04/disr-enterprise-agreement-2024-2027.pdf",
    name: "Department of Industry, Science and Resources Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "209 to 210",
    pageStart: 37,
    earlyClose: "No",
    description: "",
    extraStreams: "Science and technical, Trade measurement, Legal",
    htmlVer: ""
  },  
  {
    portfolio: "Industry, Science and Resources",
    entityType: "ncce",
    agency: "Geoscience Australia",
    website: "https://www.ga.gov.au/",
    eaUrl: "https://www.ga.gov.au/__data/assets/pdf_file/0009/85716/Geoscience-Australia-Enterprise-Agreement-2024-2027.pdf",
    name: "Geoscience Australia Enterprise Agreement 2024-2027",
    eaHeading: "End of year closedown",
    clauses: "258 to 259",
    pageStart: 35,
    earlyClose: "No",
    description: "",
    extraStreams: "Graduate",
    htmlVer: ""
  },   
  {
    portfolio: "Industry, Science and Resources",
    entityType: "ncce",
    agency: "IP Australia",
    website: "https://www.ipaustralia.gov.au/",
    eaUrl: "https://www.ipaustralia.gov.au/careers/~/-/media/Project/IPA/IPAustralia/PDF/IP-Australia-Enterprise-Agreement-2024.pdf?rev=797c6397ec8a4545b500daa7cc2b82ef",
    name: "IP Australia Enterprise Agreement 2024",
    eaHeading: "Annual closedown",
    clauses: "220 to 221",
    pageStart: 40,
    earlyClose: "No",
    description: "",
    extraStreams: "Examiner of Patents (including Plant Breeder Rights), Trainee, Graduate, Examiner of Trade Marks, Examiner of Designs",
    htmlVer: ""
  }, 
  {
    portfolio: "Industry, Science and Resources",
    entityType: "ncce",
    agency: "Net Zero Economy Authority (NZEA)",
    website: "https://www.netzero.gov.au/",
    eaUrl: "https://www.pmc.gov.au/sites/default/files/resource/download/pmc-enterprise-agreement-2024-27_0.pdf",
    name: "PM&C Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "174 to 176",
    pageStart: 26,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "ncce",
    agency: "Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    website: "https://www.infrastructure.gov.au/",
    eaUrl: "https://www.infrastructure.gov.au/sites/default/files/documents/enterprise-agreement-2024.pdf",
    name: "Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "236 to 239",
    pageStart: 36,
    earlyClose: "No",
    description: "",
    extraStreams: "Graduate",
    htmlVer: ""
  },  
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "Department of Prime Minister and Cabinet (PM&C)",
    website: "https://www.pmc.gov.au/",
    eaUrl: "https://www.pmc.gov.au/sites/default/files/resource/download/pmc-enterprise-agreement-2024-27_0.pdf",
    name: "PM&C Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "174 to 176",
    pageStart: 26,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },                  
  {
    portfolio: "Social Services",
    entityType: "ncce",
    agency: "Department of Social Services (DSS)",
    website: "https://www.dss.gov.au/",
    eaUrl: "https://www.dss.gov.au/system/files/resources/dss-enterprise-agreement-2024-2027_0.pdf",
    name: "Department of Social Services Australia Enterprise Agreement 2024",
    eaHeading: "Christmas and Easter closedown",
    clauses: "187 to 193",
    pageStart: 35,
    earlyClose: "12:30pm",
    description: "",
    extraStreams: "Entry level, Legal, Public Affairs Officers",
    htmlVer: ""
  },
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Department of the Treasury",
    website: "https://www.treasury.gov.au/",
    eaUrl: "https://treasury.gov.au/sites/default/files/2024-01/treasury-enterprise-agreement-2024-2027.pdf",
    name: "Treasury Enterprise Agreement 2024",
    eaHeading: "Christmas closedown",
    clauses: "194 to 199",
    pageStart: 36, // null for nothing
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Veterans' Affairs (Defence portfolio)",
    entityType: "ncce",
    agency: "Department of Veterans' Affairs (DVA)",
    website: "https://www.dva.gov.au/",
    eaUrl: "https://www.dva.gov.au/sites/default/files/2024-04/dva-enterprise-agreement-2024-27.pdf",
    name: "DVA Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "211 to 214",
    pageStart: 40,
    earlyClose: "No",
    description: "",
    extraStreams: "Medical Officers, Grandfathered Transitional",
    htmlVer: ""
  },
  {
    portfolio: "Parliamentary Departments (not a portfolio)",
    entityType: "ncce",
    agency: "Department of Parliamentary Services",
    website: "https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Department_of_Parliamentary_Services",
    eaUrl: "https://www.aph.gov.au/-/media/05_About_Parliament/56_Employment/563_Dept_of_Parliamentary_Services/EA/Department_of_Parliamentary_Services_Enterprise_Agreement_2024.pdf",
    name: "Department of Parliamentary Services Enterprise Agreement 2024",
    eaHeading: "Close-down and Additional Holiday",
    clauses: "42.1 to 42.4",
    pageStart: 39,
    earlyClose: "No",
    description: "",
    extraStreams: "Landscape Services, Parliamentary Security Services, Electrical Mechanical and Fabric Services, Research Branch, Library Collections and Database, ParlAV, Hansard Editors, Graduates, Apprentices",
    htmlVer: ""
  },  
  {
    portfolio: "Parliamentary Departments (not a portfolio)",
    entityType: "ncce",
    agency: "Department of the House of Representatives",
    website: "https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Department_of_the_House_of_Representatives",
    eaUrl: "https://www.aph.gov.au/-/media/05_About_Parliament/56_Employment/562_House_of_Representatives/Department_of_the_House_of_Representatives_Enterprise_Agreement_2024-2026.pdf",
    name: "Department of the House of Representatives Enterprise Agreement 2024-2026",
    eaHeading: "Christmas closedown",
    clauses: "165",
    pageStart: 30,
    earlyClose: "no",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Parliamentary Departments (not a portfolio)",
    entityType: "ncce",
    agency: "Department of the Senate",
    website: "https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Department_of_the_Senate",
    eaUrl: "https://www.aph.gov.au//-/media/05_About_Parliament/54_Parliamentary_Depts/541_Dept_of_Senate/ea_2024-2026/DOS-Enterprise-Agreement-2024-2026.pdf",
    name: "Department of the Senate Enterprise Agreement 2024-2026",
    eaHeading: "Closedown days",
    clauses: "32.1",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  }, 
  {
    portfolio: "Parliamentary Departments (not a portfolio)",
    entityType: "ncce",
    agency: "Parliamentary Budget Office",
    website: "https://www.pbo.gov.au/",
    eaUrl: "https://www.pbo.gov.au/sites/default/files/2024-08/Employment%20conditions%20for%20non-SES%20employees.pdf",
    name: "Schedule of Terms and Conditions for non-SES Employees",
    eaHeading: "Christmas closedown",
    clauses: "17.16",
    pageStart: 12,
    earlyClose: "no",
    description: "",
    htmlVer: ""
  },         
  {
    portfolio: "Agriculture, Fisheries and Forestry",
    entityType: "ncce",
    agency: "Australian Fisheries Management Authority (AFMA)",
    website: "https://www.afma.gov.au/",
    eaUrl: "https://www.afma.gov.au/sites/default/files/2024-04/AFMA-Enterprise-Agreement-2024-27.pdf",
    name: "Australian Fisheries Management Authority Enterprise Agreement 2024–2027",
    eaHeading: "Christmas closedown",
    clauses: "176 to 183",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    extraStreams: "Casual Observers",
    htmlVer: ""
  },
  {
    portfolio: "Agriculture, Fisheries and Forestry",
    entityType: "cce",
    agency: "Australian Pesticides and Veterinary Medicines Authority",
    website: "https://www.apvma.gov.au/",
    eaUrl: "https://www.apvma.gov.au/sites/default/files/2024-05/APVMA%20Enterprise%20Agreement%202024%E2%80%9327.pdf",
    name: "APVMA Enterprise Agreement 2024-27",
    eaHeading: "Christmas closedown",
    clauses: "144 to 149",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    extraClass: "Graduate APS",
    htmlVer: ""
  },  
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Administrative Review Tribunal (ART)",
    website: "https://www.art.gov.au/",
    eaUrl: "https://www.art.gov.au/sites/default/files/2024-09/AAT_Enterprise_Agreement_2024-2027.pdf",
    name: "Administrative Appeals Tribunal Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "188 to 192",
    pageStart: 36,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Australia Law Reform Commission (ALRC)",
    website: "https://www.alrc.gov.au/",
    eaUrl: "https://www.alrc.gov.au/wp-content/uploads/2024/12/ALRC-2024-Enterprise-Agreement.pdf",
    name: "Australia Law Reform Commission Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "52.1 to 52.3",
    pageStart: 39,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Federal Court of Australia",
    website: "https://www.fedcourt.gov.au/",
    eaUrl: "https://www.fedcourt.gov.au/about/employment/enterprise-agreement/FCA-Enterprise-Agreement-2024-27-bookmarks.pdf",
    name: "Federal Court of Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "158 to 161",
    pageStart: 32,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "National Anti-Corruption Commission (NACC)",
    website: "https://www.nacc.gov.au/",
    eaUrl: "https://www.nacc.gov.au/sites/default/files/documents/2024-07/National%20Anti-Corruption%20Commission%20Enterprise%20Agreement%202024%20-%202027.pdf",
    name: "National Anti-Corruption Commission Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "37.1 to 37.3",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Office of the Australian Information Commissioner (OAIC)",
    website: "https://www.oaic.gov.au/",
    eaUrl: "https://www.oaic.gov.au/__data/assets/pdf_file/0028/174781/OAIC-Enterprise-Agreement-2024-2027.pdf",
    name: "Office of the Australian Information Commissioner Enterprise Agreeement 2024-2027",
    eaHeading: "Annual shutdown",
    clauses: "171 to 173",
    pageStart: 37,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Office of the Commonwealth Ombudsman",
    website: "https://www.ombudsman.gov.au/",
    eaUrl: "https://www.ombudsman.gov.au/__data/assets/pdf_file/0019/302950/The-Office-of-the-Commonwealth-Ombudsman-Enterprise-Agreement-2024-2027.pdf",
    name: "Office of the Commonwealth Ombudsman Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "176 to 178",
    pageStart: 45,
    earlyClose: "12:00pm",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Office of the Director of Public Prosecutions (CDPP)",
    website: "https://www.cdpp.gov.au/",
    eaUrl: "https://www.cdpp.gov.au/sites/default/files/CDPP%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Office of the Commonwealth Director of Public Prosecutions (CDPP) Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "163 to 167",
    pageStart: 29,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Office of the Inspector-General of Intelligence and Security",
    website: "https://www.igis.gov.au/",
    eaUrl: "https://www.igis.gov.au/sites/default/files/2024-08/OIGIS%20Enterprise%20Agreement%202024-2027%20with%20FWC%20Approval.pdf",
    name: "OIGIS Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "159 to 164",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "ncce",
    agency: "Office of Parliamentary Counsel (OPC)",
    website: "https://www.opc.gov.au/",
    eaUrl: "https://www.opc.gov.au/sites/default/files/2024-02/Office%20of%20Parliamentary%20Counsel%20Enterprise%20Agreement%202024%20-%202027%20_1.pdf",
    name: "Office of Parliamentary Counsel Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "45",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    extraStreams: "Drafters",
    htmlVer: ""
  },
  {
    portfolio: "Attorney-General's",
    entityType: "cce",
    agency: "Australian Human Rights Commission",
    website: "https://www.humanrights.gov.au/",
    eaUrl: "https://www.humanrights.gov.au/sites/default/files/ahrc-enterprise_agreement-2024-2027_0.pdf",
    name: "Australian Human Rights Commission Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "174 to 176",
    pageStart: 31,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "ncce",
    agency: "Bureau of Meteorology (BOM)",
    website: "https://www.bom.gov.au/",
    eaUrl: "https://www.fwc.gov.au/document-search/view/3/aHR0cHM6Ly9zYXNyY2RhdGFwcmRhdWVhYS5ibG9iLmNvcmUud2luZG93cy5uZXQvZW50ZXJwcmlzZWFncmVlbWVudHMvMjAyNC8zL2FlNTIzOTE1LnBkZg2?sid=",
    name: "Bureau of Meteorology Enterprise Agreement 2024",
    eaHeading: "Christmas closedown",
    clauses: "5.131 to 5.133",
    pageStart: 47,
    earlyClose: "No",
    description: "",
    extraClass: "EL2 - Senior Research Scientist, EL2 - Principal Research Scientist, EL2 - Senior Principal Research Scientist",
    issueLink: "https://github.com/codegoesinhere/celeries/issues",
    htmlVer: ""
  },
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "ncce",
    agency: "Clean Energy Regulator (CER)",
    website: "https://cer.gov.au/",
    eaUrl: "https://cer.gov.au/document/clean-energy-regulator-enterprise-agreement",
    name: "Clean Energy Regulator Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "193 to 196",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal, Training, Maintained salaries for existing DCCEE and ORER employees",
    htmlVer: ""
  },
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "ncce",
    agency: "Climate Change Authority",
    website: "https://www.climatechangeauthority.gov.au/",
    eaUrl: "https://www.climatechangeauthority.gov.au/sites/default/files/documents/2025-05/CCAEnterpriseAgreement%202024-2027.pdf",
    name: "Climate Change Authority Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "229 to 233",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal, Public Affairs, Research Scientists",
    htmlVer: ""
  },    
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "ncce",
    agency: "Great Barrier Reef Marine Park Authroity (GBRMPA)",
    website: "https://www2.gbrmpa.gov.au/",
    eaUrl: "https://elibrary.gbrmpa.gov.au/jspui/bitstream/11017/4042/1/Enterprise%20Agreement%202024-2027.pdf",
    name: "Great Barrier Reef Marine Park Authroity Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "238 to 241",
    pageStart: 36,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal",
    htmlVer: ""
  },  
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "cce",
    agency: "Murray-Darling Basin Authority (MDBA)",
    website: "https://www.mdba.gov.au/",
    eaUrl: "https://www.mdba.gov.au/sites/default/files/publications/murray-darling-basin-authority-enterprise-agreement-2024-2027.pdf",
    name: "Murray-Darling Basin Authority Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "174 to 181",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    extraStreams: "Graduate",
    htmlVer: ""
  },
  {
    portfolio: "Climate Change, Energy, the Environment and Water",
    entityType: "cce",
    agency: "Sydney Harbour Federation Trust",
    website: "http://www.harbourtrust.gov.au",
    eaUrl: "https://www.fwc.gov.au/document-search/view/3/aHR0cHM6Ly9zYXNyY2RhdGFwcmRhdWVhYS5ibG9iLmNvcmUud2luZG93cy5uZXQvZW50ZXJwcmlzZWFncmVlbWVudHMvMjAyNC80L2FlNTI0MzkxLnBkZg2?sid=",
    name: "Sydney Harbour Federation Trust Enterprise Agreement 2024-2027",
    eaHeading: "Christmas/New Year shutdown",
    clauses: "3.82 to 3.84",
    pageStart: 25,
    earlyClose: "No",
    description: "",
    extraStreams: "Trainee",
    htmlVer: ""
  },  
  {
    portfolio: "Defence",
    entityType: "ncce",
    agency: "Australian Signals Directorate (ASD)",
    website: "https://www.asd.gov.au/",
    eaUrl: "https://www.asd.gov.au/sites/default/files/2024-04/ASD-Terms-and-Conditions-of-Employment-non-SES-Determination-2024.pdf",
    name: "ASD Terms and Conditions of Employment (non-SES) Determination 2024",
    eaHeading: "Christmas stand down",
    clauses: "F17.1 to F17.6",
    pageStart: 59,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal, Technical, Professional, Academic, Public Affairs, Medical, Trainee",
    htmlVer: ""
  },
  {
    portfolio: "Defence",
    entityType: "ncce",
    agency: "Australian Submarine Agency",
    website: "https://www.asa.gov.au/",
    eaUrl: "https://www.asa.gov.au/sites/default/files/documents/2024-09/Australian%20Submarine%20Agency%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Submarine Agency Enterprise Agreement 2024-2027",
    eaHeading: "Christmas stand down",
    clauses: "E20.1 to E20.6",
    pageStart: 55,
    earlyClose: "No",
    description: "",
    extraStreams: "Science and Technology, Trainee",
    extraClass: "Trainee APS (Administrative), Trainee APS (Technical)",
    htmlVer: ""
  },
  {
    portfolio: "Defence",
    entityType: "cce",
    agency: "Defence Housing Australia (DHA)",
    website: "https://www.dha.gov.au/",
    eaUrl: "https://www.dha.gov.au/docs/default-source/human-resources-doco/careers-redevelopment/defence-housing-australia-enterprise-agreement-2024---2027.pdf?sfvrsn=22c96b81_1",
    name: "Defence Housing Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas stand down",
    clauses: "27.1 to 27.2",
    pageStart: 17,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },    
  {
    portfolio: "Education",
    entityType: "ncce",
    agency: "Australian Research Council (ARC)",
    website: "https://www.arc.gov.au/",
    eaUrl: "https://www.arc.gov.au/sites/default/files/2024-02/ARC%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Research Council Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "163 to 166",
    pageStart: 24,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Education",
    entityType: "ncce",
    agency: "Tertiary Education Quality and Standards Agency (TEQSA)",
    website: "https://www.teqsa.gov.au/",
    eaUrl: "https://www.teqsa.gov.au/sites/default/files/2024-03/TEQSA-Enterprise-Agreement-2024-2027.pdf",
    name: "TEQSA Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "158 to 161",
    pageStart: 36,
    earlyClose: "12:30pm",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "ncce",
    agency: "Australian Skills Quality Authority (ASQA)",
    website: "https://www.asqa.gov.au/",
    eaUrl: "https://www.asqa.gov.au/sites/default/files/2024-05/Australian%20Skills%20Quality%20Authority%20%28ASQA%29%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Skills Quality Authority (ASQA) Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "37.1 to 37.4",
    pageStart: 29,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "ncce",
    agency: "Asbestos and Silica Safety and Eradication Agency",
    website: "https://www.asbestossafety.gov.au/",
    eaUrl: "https://www.asbestossafety.gov.au/sites/default/files/2025-09/ASSEA%20EA%202024-2027%20-%20approved%203%20April%202024.pdf",
    name: "Asbestos and Silica Safety and Eradication Agency (ASSEA) Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "176 to 177",
    pageStart: 33,
    earlyClose: "12:30pm",
    description: "",
    extraClass: "EL2 - Section Head",
    htmlVer: ""
  },
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "ncce",
    agency: "Fair Work Commission (FWC)",
    website: "https://www.fwc.gov.au/",
    eaUrl: "https://www.fwc.gov.au/document-search/view/3/aHR0cHM6Ly9zYXNyY2RhdGFwcmRhdWVhYS5ibG9iLmNvcmUud2luZG93cy5uZXQvZW50ZXJwcmlzZWFncmVlbWVudHMvMjAyNC8zL2FlNTIzODQzLnBkZg2?sid=&q=",
    name: "Fair Work Commission Enterprise Agreement 2024-2027",
    eaHeading: "Public Holidays",
    clauses: "No closedown",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "ncce",
    agency: "Office of the Fair Work Ombudsman",
    website: "https://www.fairwork.gov.au/",
    eaUrl: "https://www.fairwork.gov.au/sites/default/files/2024-04/office-fair-work-ombudsman-enterprise-agreement-2024-2027.pdf",
    name: "Office of the Fair Work Ombudsman Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "190 to 192",
    pageStart: 33,
    earlyClose: "12:30pm",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "ncce",
    agency: "Safe Work Australia",
    website: "https://www.safeworkaustralia.gov.au/",
    eaUrl: "https://www.safeworkaustralia.gov.au/sites/default/files/2024-04/swa_-_final_enterprise_agreement_2024_-_2027_-_20240326_0.pdf",
    name: "Safe Work Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "177 to 182",
    pageStart: 31,
    earlyClose: "12:30pm",
    description: "",
    extraClass: "Public Affairs Officer EL1",
    extraStreams: "Government Lawyer, Training",
    htmlVer: ""
  },
  {
    portfolio: "Employment and Workplace Relations",
    entityType: "cce",
    agency: "Comcare",
    website: "https://www.comcare.gov.au/",
    eaUrl: "https://www.comcare.gov.au/about/forms-pubs/docs/pubs/corporate-publications/comcare-enterprise-agreement-2024-2027.pdf",
    name: "Comcare Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "200 to 204 ",
    pageStart: 35,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal Advisers, Graduate, Training",
    htmlVer: ""
  },
  {
    portfolio: "Finance",
    entityType: "ncce",
    agency: "Australian Electoral Commission (AEC)",
    website: "https://www.aec.gov.au/",
    eaUrl: "https://www.aec.gov.au/About_AEC/Publications/enterprise-agreement/files/aec-enterprise-agreement-2024-2027.pdf",
    name: "Australian Electoral Commission Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "223 to 230",
    pageStart: 37,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Finance",
    entityType: "ncce",
    agency: "Digital Transformation Agency (DTA)",
    website: "https://www.dta.gov.au/",
    eaUrl: "https://www.dta.gov.au/sites/default/files/documents/2025-05/DTA%20Enterprise%20Agreement%202024-2027.pdf",
    name: "DTA Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "197 to 200",
    pageStart: 35,
    earlyClose: "No",
    description: "",
    extraStreams: "Graduate, Training",
    htmlVer: ""
  },
  {
    portfolio: "Finance",
    entityType: "ncce",
    agency: "Independent Parliamentary Expenses Authority (IPEA)",
    website: "https://www.ipea.gov.au/",
    eaUrl: "https://www.ipea.gov.au/sites/default/files/2024-03/Independent%20Parliamentary%20Expenses%20Authority%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Independent Parliamentary Expenses Authority Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "179 to 181",
    pageStart: 32,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Finance",
    entityType: "ncce",
    agency: "Parliamentary Workplace Support Services (PWSS)",
    website: "https://www.pwss.gov.au/",
    eaUrl: "https://www.finance.gov.au/sites/default/files/2024-02/department-of-finance-ea-2024-2027.pdf", 
    name: "Department of Finance Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "266 to 269",
    pageStart: 46,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Finance",
    entityType: "ncce",
    agency: "Services Australia",
    website: "https://www.servicesaustralia.gov.au/",
    eaUrl: "https://www.servicesaustralia.gov.au/sites/default/files/2024-04/services-australia-agreement-2024-2027.pdf",
    name: "Services Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown and reduced activity period",
    clauses: "F18.1 to F18.11",
    pageStart: 57,
    earlyClose: "no",
    description: "",
    extraClass: "Deputy General Counsel (EL2), Rehabilitation consultant 2+ (APS6), Senior Rehabilitation consultant (APS6)",
    extraStreams: "Digital Trainee, Cadets, Digital and Data Cadet",
    htmlVer: ""
  },  
  {
    portfolio: "Foreign Affairs and Trade",
    entityType: "ncce",
    agency: "Australian Centre for International Agricultural Research (ACIAR)",
    website: "https://www.aciar.gov.au/",
    eaUrl: "https://www.aciar.gov.au/sites/default/files/2024-04/ACIAR%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Centre for International Agricultural Research Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "135 to 136",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    extraClass: "EL2 Specialist 1, EL2 Specialist 2",
    htmlVer: ""
  },
  {
    portfolio: "Foreign Affairs and Trade",
    entityType: "ncce",
    agency: "Australian Trade and Investment Commission (Austrade)",
    website: "https://www.austrade.gov.au/",
    eaUrl: "https://www.austrade.gov.au/content/dam/austrade-assets/global/wip/austrade/documents-about-us/austrade-enterprise-agreement-2024-with-fwc-decision.pdf",
    name: "Austrade Enterprise Agreement 2024",
    eaHeading: "December holiday period leave arrangements",
    clauses: "35",
    pageStart: 20,
    earlyClose: "No",
    description: "",
    extraClass: "EL2 Specialist, EL2.9 (Grandfathered)",
    extraStreams: "Entry-Level",
    htmlVer: ""
  },  
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Aged Care Quality and Safety Commission",
    website: "https://www.agedcarequality.gov.au/",
    eaUrl: "https://www.agedcarequality.gov.au/sites/default/files/media/acqsc-enterprise-agreement-2024-2027.pdf",
    name: "Aged Care Quality and Safety Commission Enterprise Agreement 2024-2027",
    eaHeading: "Essential Services During End of Year and Early Stand Down Periods",
    clauses: "211 to 217",
    pageStart: 45,
    earlyClose: "5.5 hours of work, finish no later than 3pm",
    description: "",
    extraStreams: "Entry Level Broadband, Professional 1, Medical Officer, Legal, Public Affairs Officer, Assessor/Senior Assessor",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Australian Radiation Protection and Nuclear Safety Agency (ARPANSA)",
    website: "https://www.arpansa.gov.au/",
    eaUrl: "https://www.arpansa.gov.au/sites/default/files/documents/2024-04/Approved%20by%20FWC%20-%20ARPANSA%20Enterprise%20Agreement%202024-%202027_1.pdf",
    name: "Australian Radiation Protection and Nuclear Safety Agency Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "208 to 209",
    pageStart: 38,
    earlyClose: "No",
    description: "",
    extraStreams: "ARPANSA Graduate",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Cancer Australia",
    website: "https://www.canceraustralia.gov.au/",
    eaUrl: "https://www.canceraustralia.gov.au/sites/default/files/2024-10/cancer-australia-enterprise-agreement-2024-2027.pdf",
    name: "Cancer Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "259 to 261",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    extraStreams: "Medical Officer, Public Affairs, Research Scientist",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "National Blood Authority",
    website: "https://www.blood.gov.au/",
    eaUrl: "https://www.blood.gov.au/sites/default/files/documents/2024-05/National%20Blood%20Authority%20Enterprise%20Agreement%202024-2027.pdf",
    name: "National Blood Authority Enterprise Agreement 2024-2027", 
    eaHeading: "Christmas closedown",
    clauses: "145 to 147",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "National Health and Medical Research Council (NHMRC)",
    website: "https://www.nhmrc.gov.au/",
    eaUrl: "https://www.nhmrc.gov.au/file/20518/download?token=JP_qBxwp",
    name: "National Health and Medical Research Council Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "166 to 168",
    pageStart: 26,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal, Research Scientist",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "National Health Funding Body (NHFB)",
    website: "https://www.publichospitalfunding.gov.au/",
    eaUrl: "https://www.publichospitalfunding.gov.au/sites/default/files/documents/2024-11/nhfb_enterprise_agreement_2024-2027_signed.pdf",
    name: "National Health Funding Body Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "180 to 183",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "NDIS Quality and Safeguards Commission",
    website: "https://www.ndiscommission.gov.au/",
    eaUrl: "https://www.ndiscommission.gov.au/sites/default/files/2024-09/Enterprise-Agreement-2024-2027.pdf",
    name: "NDIS Quality and Safeguards Commission Enterprise Agreement 2024-2027",
    eaHeading: "Christmas and Easter closedown",
    clauses: "5.107 to 5.112",
    pageStart: 41,
    earlyClose: "12:30pm",
    description: "",
    extraStreams: "Entry level, Legal",
    htmlVer: ""  
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Office of the Inspector-General of Aged Care (IGAC)",
    website: "https://www.igac.gov.au/",
    eaUrl: "https://www.igac.gov.au/sites/default/files/2024-07/enterprise-agreement-2024-2027-ea.pdf",
    name: "Office of the Inspector-General of Aged Care Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown and early stand down",
    clauses: "201 tp 204",
    pageStart: 36,
    earlyClose: "3:00pm",
    description: "",
    extraStreams: "Entry Level, Graduate, Legal",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Organ and Tissue Authority",
    website: "https://www.donatelife.gov.au/",
    eaUrl: "https://www.donatelife.gov.au/sites/default/files/2024-10/Organ%20and%20Tissue%20Authority%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Organ and Tissue Authority Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "157 to 161",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    extraClass: "Trainee APS, Graduate APS",
    extraStreams: "Senior Public Affairs Officer",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Professional Services Review (PSR)",
    website: "https://www.psr.gov.au/",
    eaUrl: "https://www.psr.gov.au/sites/default/files/2024-04/Enterprise%20Agreement%202024-2027_0.pdf",
    name: "Professional Services Review Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "180 to 182",
    pageStart: 37,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "cce",
    agency: "Australian Commission on Safety and Quality in Health Care",
    website: "https://www.safetyandquality.gov.au/",
    eaUrl: "https://www.safetyandquality.gov.au/sites/default/files/2024-03/acsqhc_enterprise_agreement_2024-2027.pdf",
    name: "Australian Commission on Safety and Quality in Health Care Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "175 to 179",
    pageStart: 32,
    earlyClose: "3:00pm",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "ncce",
    agency: "Australian Centre for Disease Control",
    website: "https://www.cdc.gov.au/",
    eaUrl: "https://www.health.gov.au/sites/default/files/2025-11/enterprise-agreement-ea_0.pdf",
    name: "Department of Health and Aged Care Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown and early stand down",
    clauses: "215 to 219",
    pageStart: 36,
    earlyClose: "03:00pm",
    description: "",
    extraStreams: "Entry Level, Gradate, Professional 1, Medical Officer, Legal, Public Affairs Officer, Research Scientist",
    htmlVer: ""
  },    
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "cce",
    agency: "Australian Digital Health Agency (ADHA)",
    website: "https://www.digitalhealth.gov.au/",
    eaUrl: "https://www.digitalhealth.gov.au/sites/default/files/documents/adha-ea-2024-2027.pdf",
    name: "Australian Digital Health Agency Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown and early stand down",
    clauses: "211 to 215",
    pageStart: 31,
    earlyClose: "3:00pm",
    description: "",
    extraStreams: "Entry Level, Medical Officer",
    htmlVer: ""
  },     
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "cce",
    agency: "Australian Institute of Health and Welfare (AIHW)",
    website: "https://www.aihw.gov.au/",
    eaUrl: "https://www.aihw.gov.au/getmedia/6317896c-4773-420f-9fce-853b75110c46/aihw-enterprise-agreement-2024-2027.pdf",
    name: "Australian Institute of Health and Welfare Enterprise Agreement 2024-2027",
    eaHeading: "End of year closure",
    clauses: "172 to 173",
    pageStart: 28,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  }, 
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "cce",
    agency: "Food Standards Australia New Zealand",
    website: "https://www.foodstandards.gov.au/",
    eaUrl: "https://www.foodstandards.gov.au/sites/default/files/2024-03/FSANZ%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Food Standards Australia New Zealand Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "160 to 163",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal",
    htmlVer: ""
  },     
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "cce",
    agency: "Independent Health and Aged Care Pricing Authority (IHACPA)",
    website: "https://www.ihacpa.gov.au/",
    eaUrl: "https://www.health.gov.au/sites/default/files/2025-11/enterprise-agreement-ea_0.pdf",
    name: "Department of Health and Aged Care Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown and early stand down",
    clauses: "215 to 219",
    pageStart: 36,
    earlyClose: "03:00pm",
    description: "",
    extraStreams: "Entry Level, Gradate, Professional 1, Medical Officer, Legal, Public Affairs Officer, Research Scientist",    
    htmlVer: ""
  }, 
  {
    portfolio: "Health, Disability and Ageing",
    entityType: "cce",
    agency: "National Disability Insurance Agency (NDIA)",
    website: "https://www.ndis.gov.au/",
    eaUrl: "https://www.ndis.gov.au/media/6952/download?attachment",
    name: "National Disability Insurance Agency - Enterprise Agreement 2024-2027",
    eaHeading: "Christmas – Reduced activity period arrangements",
    clauses: "240 to 245",
    pageStart: 52,
    earlyClose: "No",
    description: "",
    extraStreams: "Professional, Legal",
    htmlVer: ""
  },          
  {
    portfolio: "Home Affairs",
    entityType: "ncce",
    agency: "Australian Crime Commission (Australian Criminal Intelligence Commission)",
    website: "https://www.acic.gov.au/",
    eaUrl: "https://www.acic.gov.au/sites/default/files/2024-03/Australian%20Criminal%20Intelligence%20Commission%20Enterprise%20Agreement%202024-27%20pdf.pdf",
    name: "Australian Criminal Intelligence Commission Enterprise Agreement 2024-2027",
    eaHeading: "Agency shutdown",
    clauses: "213 to 215",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Home Affairs",
    entityType: "ncce",
    agency: "Australian Institute of Criminology",
    website: "https://www.aic.gov.au/",
    eaUrl: "https://www.acic.gov.au/sites/default/files/2024-03/Australian%20Criminal%20Intelligence%20Commission%20Enterprise%20Agreement%202024-27%20pdf.pdf",
    name: "Australian Criminal Intelligence Commission Enterprise Agreement 2024-2027",
    eaHeading: "Agency shutdown",
    clauses: "213 to 215",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Home Affairs",
    entityType: "ncce",
    agency: "Australian Transaction Reports and Analysis Centre (AUSTRAC)",
    website: "https://www.austrac.gov.au/",
    eaUrl: "https://www.austrac.gov.au/sites/default/files/2025-06/AUSTRAC_EA_2024-2027.pdf",
    name: "AUSTRAC Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "184 to 186",
    pageStart: 25,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal, Information and Technology Work Value, Graduate",
    htmlVer: ""
  },      
  {
    portfolio: "Home Affairs",
    entityType: "ncce",
    agency: "National Emergency Management Agency (NEMA)",
    website: "https://www.nema.gov.au/", 
    eaUrl: "https://www.nema.gov.au/sites/default/files/2024-08/fair-work-approved-nema-ea-19042024.pdf",
    name: "National Emergency Management Agency (NEMA) Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "212 to 214",
    pageStart: 41,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "ncce",
    agency: "Australian Communications and Media Authority (ACMA)",
    website: "https://www.acma.gov.au/",
    eaUrl: "https://www.acma.gov.au/sites/default/files/2024-04/ACMA%20Enterprise%20Agreement%202024-27.pdf",
    name: "Australian Communications and Media Authority Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "177 to 179",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "ncce",
    agency: "Australian Transport Safety Bureau (ATSB)",
    website: "https://www.atsb.gov.au/",
    eaUrl: "https://www.atsb.gov.au/sites/default/files/2024-04/ATSB%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Transport Safety Bureau Enterprise Agreement 2024‐2027",
    eaHeading: "Annual closedown",
    clauses: "196 to 198",
    pageStart: 31,
    earlyClose: "No",
    description: "",
    extraStreams: "Legal, Transport Safety Investigator",
    htmlVer: ""
  },
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "ncce",
    agency: "National Archives of Australia",
    website: "https://www.naa.gov.au/",
    eaUrl: "https://www.naa.gov.au/sites/default/files/2024-04/Enterprise-Agreement-2024-2027.pdf",
    name: "National Archives of Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "225 to 228",
    pageStart: 39,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "ncce",
    agency: "National Capital Authority (NCA)",
    website: "https://www.nca.gov.au/",
    eaUrl: "https://www.nca.gov.au/sites/default/files/2025-04/NCA%20EA%202024-2027.pdf",
    name: "National Capital Authority Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "38.1 to 38.4",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },    
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "ncce",
    agency: "Sport Integrity Australia",
    website: "https://www.sportintegrity.gov.au/",
    eaUrl: "https://www.sportintegrity.gov.au/sites/default/files/Sport%20Integrity%20Australia%20Enterprise%20Agreement%20-%20Ongoing%20and%20non-ongoing%20employees.pdf",
    name: "Sport Integrity Australia Enterprise Agreement 2024-2027",
    eaHeading: "End of Year Shutdown",
    clauses: "34.1 to 34.3",
    pageStart: 28,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },        
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "Australian National Maritime Museum (ANMM)",
    website: "https://www.anmm.gov.au/",
    eaUrl: "https://cms-web.seamuseum.net/sites/default/files/2024-07/anmm-enterprise-agreement-2024-2027.pdf",
    name: "Australian National Maritime Museum (ANMM) Enterprise Agreement 2024-2027",
    eaHeading: "Ordinary hours",
    clauses: "94",
    pageStart: 22,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },      
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "High Speed Rail Authority (HSRA)",
    website: "https://www.hsra.gov.au/",
    eaUrl: "https://media.caapp.com.au/3u9z4a.pdf",
    name: "High Speed Rail Authority Enterprise Agreement 2024-2027",
    eaHeading: "Annual closedown",
    clauses: "189 to 191",
    pageStart: 31,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },      
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "National Gallery of Australia (NGA)",
    website: "https://nga.gov.au/",
    eaUrl: "https://nga.gov.au/media/dd/documents/nga_enterprise_agreement_2024-2026.pdf",
    name: "National Gallery of Australia Enterprise Agreement 2024-2026",
    eaHeading: "Christmas closedown",
    clauses: "218 to 220",
    pageStart: 35,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },    
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "Screen Australia",
    website: "https://www.screenaustralia.gov.au/",
    eaUrl: "https://www.fwc.gov.au/document-search/view/3/aHR0cHM6Ly9zYXNyY2RhdGFwcmRhdWVhYS5ibG9iLmNvcmUud2luZG93cy5uZXQvZW50ZXJwcmlzZWFncmVlbWVudHMvMjAyNC80L2FlNTI0NDAyLnBkZg2?sid=",
    name: "Screen Australia Enterprise Agreement 2024-2027",
    eaHeading: "Annual Shutdown (Christmas Closedown)",
    clauses: "45",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },        
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "National Film and Sound Archive (NFSA)",
    website: "https://www.nfsa.gov.au/",
    eaUrl: "https://www.nfsa.gov.au/sites/default/files/2024-05/NFSA%20-%20Enterprise%20Agreement%202024%20to%202027.pdf",
    name: "National Film and Sound Archive Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "201 tp 204",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },   
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "National Library of Australia (NLA)",
    website: "https://www.library.gov.au/",
    eaUrl: "https://www.library.gov.au/sites/default/files/documents/2024-10/nla-enterprise-agreement-2024-2027.pdf",
    name: "National Library of Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown period",
    clauses: "179 to 183",
    pageStart: 32,
    earlyClose: "No",
    description: "",
    extraStreams: "Graduate",
    htmlVer: ""
  },   
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "National Museum Australia (NMA)",
    website: "https://www.nma.gov.au/",
    eaUrl: "https://www.nma.gov.au/__data/assets/pdf_file/0009/809325/AG2024-750-National-Museum-of-Australia-Enterprise-Agreement-2024-2027-1.pdf",
    name: "National Museum Australia Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown for non-rostered staff",
    clauses: "233 to 236",
    pageStart: 40,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },   
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "National Portrait Gallery of Australia",
    website: "https://www.portrait.gov.au/",
    eaUrl: "https://www.portrait.gov.au/document/741",
    name: "National Portrait Gallery Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "148 to 151",
    pageStart: 18,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },          
  {
    portfolio: "Infrastructure, Transport, Regional Development, Communications, Sport and the Arts",
    entityType: "cce",
    agency: "Old Parliament House (Museum of Australian Democracy at Old Parliament House)",
    website: "https://www.moadoph.gov.au/",
    eaUrl: "https://www.moadoph.gov.au/sites/default/files/2024-04/oph-enterprise-agreement-2024-2027.pdf",
    name: "Old Parliament House Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "227 to 230",
    pageStart: 39,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  }, 
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "Australian National Audit Office (ANAO)",
    website: "https://www.anao.gov.au/",
    eaUrl: "https://www.anao.gov.au/work/corporate/anao-enterprise-agreement-2024-27",
    name: "Australian National Audit Office (ANAO) Enterprise Agreement 2024–2027",
    eaHeading: "Christmas closedown",
    clauses: "155 to 156",
    pageStart: "Provided in HTML format",
    earlyClose: "No",
    description: "",
    extraStreams: "Graduate",
    htmlVer: "https://www.anao.gov.au/work/corporate/anao-enterprise-agreement-2024-27#38-1-christmasclosedown"
  },
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "Australian Public Service Commission (APSC)",
    website: "https://www.apsc.gov.au/",
    eaUrl: "https://www.apsc.gov.au/sites/default/files/2024-03/APSC%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Public Service Commission Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "188 to 190",
    pageStart: 34,
    earlyClose: "No",
    description: "",
    extraStreams: "GradAPSC",
    htmlVer: ""
  },
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "National Indigenous Australians Agency (NIAA)",
    website: "https://www.niaa.gov.au/",
    eaUrl: "https://www.niaa.gov.au/sites/default/files/documents/2024-03/NIAA-Enterprise-Agreement-2024-27.pdf",
    name: "National Indigenous Australians Agency Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "181 to 184",
    pageStart: 28,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "Office of National Intelligence (ONI)",
    website: "https://www.oni.gov.au/",
    eaUrl: "https://www.oni.gov.au/sites/default/files/documents/2024-04/Office%20of%20National%20Intelligence%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Office of National Intelligence Enterprise Agreement 2024-2027",
    eaHeading: "End of year closedown",
    clauses: "41.1 to 41.4",
    pageStart: 36,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "Official Secretary to the Governor-General",
    website: "https://www.gg.gov.au/",
    eaUrl: "https://www.gg.gov.au/sites/default/files/2025-03/OOSGG%202025-28%20Enterprise%20Agreement%20-%20FINAL.pdf",
    name: "Official Secretary to the Governor-General Enterprise Agreement 2025-2028",
    eaHeading: "Christmas closedown",
    clauses: "56",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    issueLink: "https://github.com/codegoesinhere/celeries/issues/5",
    htmlVer: ""
  },        
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "ncce",
    agency: "Workplace Gender Equality Agency (WGEA)",
    website: "https://www.wgea.gov.au/",
    eaUrl: "https://www.wgea.gov.au/sites/default/files/documents/20240223%20-%20Final%20Approved%20WGEA%20EA%202024-27%20%281%29_0.pdf",
    name: "Workplace Gender Equality Agency Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "174 to 175",
    pageStart: 31,
    earlyClose: "For the afternoon of the working day immediately prior to Christmas Day", 
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "cce",
    agency: "Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS)",
    website: "https://aiatsis.gov.au/",
    eaUrl: "https://aiatsis.gov.au/sites/default/files/2024-06/aiatsis-enterprise-agreement-2024-2027-1.pdf",
    name: "Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS) Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "194 to 196",
    pageStart: 33,
    earlyClose: "No", 
    description: "",
    htmlVer: ""
  },          
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "cce",
    agency: "Indigenous Business Australia",
    website: "https://iba.gov.au/",
    eaUrl: "https://iba.gov.au/wp-content/uploads/2025/04/2025-2028-Indigenous-Business-Australia-Enterprise-Agreement-005.pdf",
    name: "Indigenous Business Australia Enterprise Agreement 2025-2028",
    eaHeading: "Christmas closedown",
    clauses: "43.1 to 46.7",
    pageStart: 25,
    earlyClose: "No",
    description: "",
    issueLink: "https://github.com/codegoesinhere/celeries/issues/4",
    htmlVer: ""
  },             
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "cce",
    agency: "Torres Strait Regional Authority",
    website: "https://tsra.gov.au/",
    eaUrl: "https://tsra.gov.au/wp-content/uploads/2024/06/TSRA-Enterprise-Agreement-2024-2027.pdf",
    name: "Torres Strait Regional Authority Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "205 to 207",
    pageStart: 36,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },      
  {
    portfolio: "Prime Minister and Cabinet",
    entityType: "company",
    agency: "Aboriginal Hostels Limited (AHL)",
    website: "https://www.ahl.gov.au/",
    eaUrl: "https://www.ahl.gov.au/sites/default/files/2024-05/Approved%20AHL%20Enterprise%20Agreement%202024-2027%20-%20signed_0.pdf",
    name: "Aboriginal Hostels Limited Enterprise Agreement 2024-2027",
    eaHeading: "Miscellaneous leave in lieu of Christmas closedown",
    clauses: "No closedown",
    pageStart: 44,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },          
  {
    portfolio: "Social Services",
    entityType: "ncce",
    agency: "Australian Institute of Family Studies (AIFS)",
    website: "https://aifs.gov.au/",
    eaUrl: "https://aifs.gov.au/sites/default/files/2024-03/AIFS-Enterprise-Agreement-2024-2027-web.pdf",
    name: "Australian Institute of Family Studies Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "220 to 225",
    pageStart: 35,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },       
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Australian Bureau of Statistics (ABS)",
    website: "https://www.abs.gov.au/",
    eaUrl: "https://www.abs.gov.au/system/files/documents/7fded0e418a532c6822584875be269da/ABS%20Enterprise%20Agreement%202024-2027.pdf",
    name: "Australian Bureau of Statistics Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "231 to 233",
    pageStart: 41,
    earlyClose: "No",
    description: "",
    extraStreams: "Cadet ABS, Trainee APS",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Australian Competition & Consumer Commission (ACCC)",
    website: "https://www.accc.gov.au/",
    eaUrl: "https://www.accc.gov.au/system/files/accc-enterprise-agreement-2024-27.pdf",
    name: "ACCC Enterprise Agreement 2024-2027",
    eaHeading: "End of year closedown",
    clauses: "211 to 214",
    pageStart: 39,
    earlyClose: "12:00pm",
    description: "",
    extraStreams: "Internal Lawyer, Graduate APS, IAGDP",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Australian Financial Security Authority (AFSA)",
    website: "https://www.afsa.gov.au/",
    eaUrl: "https://www.afsa.gov.au/sites/default/files/2024-04/AFSA%20Enterprise%20Agreement%202024.pdf",
    name: "AFSA Enterprise Agreement 2024-27",
    eaHeading: "Christmas closedown",
    clauses: "49.1 to 49.4",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Australian Office of Financial Management (AOFM)",
    website: "https://www.aofm.gov.au/",
    eaUrl: "https://www.aofm.gov.au/sites/default/files/2024-04-12/AOFM%20Enterprise%20Agreement%202024-2027.pdf",
    name: "AOFM Enterprise Agreement 2024-2027",
    eaHeading: "End of Year Stand Down",
    clauses: "148 to 154",
    pageStart: 25,
    earlyClose: "No",
    description: "",
    extraClass: "EL2 Practice Leader, EL2 Director",
    issueLink: "https://github.com/codegoesinhere/celeries/issues/2",
    htmlVer: ""
  },   
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Australian Securities and Investments Commission (ASIC)",
    website: "https://www.asic.gov.au/",
    eaUrl: "https://careers.asic.gov.au/pdf/ASIC+EA+2024+2026.pdf",
    name: "Australian Securities and Investments Commission Enterprise Agreement 2024-2026",
    eaHeading: "Christmas closedown", 
    clauses: "63.1 to 63.4",
    pageStart: 42,
    earlyClose: "No",
    description: "",
    issueLink: "https://github.com/codegoesinhere/celeries/issues/3",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Australian Tax Office (ATO)",
    website: "https://www.ato.gov.au/",
    eaUrl: "https://www.ato.gov.au/api/public/content/01fcfb1c6cc7422bb22ce8abe476d134?v=509d2f2f",
    name: "Australian Taxation Office (ATO) Enterprise Agreement 2024",
    eaHeading: "Christmas closedown",
    clauses: "57.1 to 57.4",
    pageStart: 61,
    earlyClose: "noon",
    description: "",
    extraClass: "Cadet (Whilst Undertaking Study), Cadet APS (Whilst Undertaking Practical Training in the Workplace",
    extraStreams: "Information Technology Officer Class 1, Public Affairs Officer Grade 3, Graduate Administrative Assistant",
    htmlVer: "https://www.ato.gov.au/careers/why-join-us/salary-leave-and-conditions/ato-enterprise-agreement-2024/section-e-balancing-work-and-personal-life#ato-57Christmasclosedown"
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Commonwealth Grants Commission (CGC)",
    website: "https://www.cgc.gov.au/",
    eaUrl: "https://www.cgc.gov.au/sites/default/files/2024-08/CGC-EA.pdf",
    name: "Commonwealth Grants Commission Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "152 to 154",
    pageStart: 27,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },    
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Inspector General of Taxation (Tax Ombudsman)",
    website: "https://www.taxombudsman.gov.au/",
    eaUrl: "https://www.taxombudsman.gov.au/wp-content/uploads/2025/07/Tax-Ombudsman-Enterprise-Agreement-2024-2027.pdf",
    name: "Inspector General of Taxation Enterprise Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "166 to 171",
    pageStart: 32,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "National Competition Council",
    website: "https://ncc.gov.au/",
    eaUrl: "https://www.accc.gov.au/system/files/accc-enterprise-agreement-2024-27.pdf",
    name: "ACCC Enterprise Agreement 2024-2027",
    eaHeading: "End of year closedown",
    clauses: "211 to 214",
    pageStart: 39,
    earlyClose: "12:00pm",
    description: "",
    extraStreams: "Internal Lawyer, Graduate APS, IAGDP",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Productivity Commission",
    website: "https://www.pc.gov.au/",
    eaUrl: "https://assets.pc.gov.au/careers/enterprise-agreement/enterprise-agreement-2024-2027.pdf",
    name: "Productivity Commission Enterprise Agreement 2024–2027",
    eaHeading: "End of year closedown",
    clauses: "161 to 162",
    pageStart: 25,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
  {
    portfolio: "Treasury",
    entityType: "ncce",
    agency: "Royal Australian Mint",
    website: "https://www.ramint.gov.au/",
    eaUrl: "https://www.ramint.gov.au/sites/default/files/2025-01/Royal%20Australian%20Mint%20Enterprise%20Agreement%202024-2027%20%28PDF%29.pdf",
    name: "Royal Australian Mint Enterprise Agreement 2024–2027",
    eaHeading: "Annual closedown",
    clauses: "193 to 194",
    pageStart: 30,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },        
  {
    portfolio: "Treasury",
    entityType: "cce",
    agency: "Australian Reinsurance Pool Corporation (ARPC)",
    website: "https://arpc.gov.au/",
    eaUrl: "https://arpc.gov.au/wp-content/uploads/2024/04/Enterprise-Agreement-2024-2027.pdf",
    name: "Australian Reinsurance Pool Corporation Enterprise Agreement 2024-2027",
    eaHeading: "Christmas shutdown",
    clauses: "16.1 to 16.3",
    pageStart: 7,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },
  {
    portfolio: "Veterans' Affairs (Defence portfolio)",
    entityType: "cce",
    agency: "Australian War Memorial",
    website: "https://www.awm.gov.au/",
    eaUrl: "https://www.awm.gov.au/sites/default/files/154191/files/awm-teamwork-agreement-2024-2027-final.pdf",
    name: "AWM Teamwork Agreement 2024-2027",
    eaHeading: "Christmas closedown",
    clauses: "220 to 224",
    pageStart: 33,
    earlyClose: "No",
    description: "",
    htmlVer: ""
  },  
];

// === PAY RATES (supports min/max guidepoints + steps, multiple named sets) ===
window.payRates = [
  // “General” streams
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56015 },
      { kind: "step", step: 3, rate: 60677 },                 
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57920 },
      { kind: "step", step: 3, rate: 62740 },        
    ]
  },   
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [       
      { kind: "step", step: 4, rate: 64241 }, 
      { kind: "step", step: 5, rate: 68460 },      
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 4, rate: 66425 }, 
      { kind: "step", step: 5, rate: 70788 },   
    ]
  }, 
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 68946 },
      { kind: "step", step: 2, rate: 71015 },
      { kind: "step", step: 3, rate: 74443 },
      { kind: "step", step: 4, rate: 77125 },        
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71290 },
      { kind: "step", step: 2, rate: 73430 },
      { kind: "step", step: 3, rate: 76974 },
      { kind: "step", step: 4, rate: 79747 },                               
    ]
  }, 
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77728 },
      { kind: "step", step: 2, rate: 79931 },
      { kind: "step", step: 3, rate: 84619 },             
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80371 },
      { kind: "step", step: 2, rate: 82649 },
      { kind: "step", step: 3, rate: 87496 },           
    ]
  },     
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84794 },
      { kind: "step", step: 2, rate: 87335 },
      { kind: "step", step: 3, rate: 93020 },
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90304 },
      { kind: "step", step: 3, rate: 96183 },
      { kind: "step", step: 4, rate: 96829 },          
    ]
  }, 
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95438 },
      { kind: "step", step: 2, rate: 98298 },
      { kind: "step", step: 3, rate: 102935 },
      { kind: "step", step: 4, rate: 108360 },                     
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 101640 },
      { kind: "step", step: 3, rate: 106435 },
      { kind: "step", step: 4, rate: 112044 },                                
    ]
  },    
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 124861 },
      { kind: "step", step: 2, rate: 128249 },
      { kind: "step", step: 3, rate: 134295 },                           
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 129106 },
      { kind: "step", step: 2, rate: 132609 },
      { kind: "step", step: 3, rate: 138861 },                      
    ]
  }, 
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 146942 },
      { kind: "step", step: 2, rate: 151352 },
      { kind: "step", step: 3, rate: 155891 },
      { kind: "step", step: 4, rate: 165095 },                           
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|department-of-agriculture-fisheries-and-forestry",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 151938 },
      { kind: "step", step: 2, rate: 156498 },
      { kind: "step", step: 3, rate: 161191 },
      { kind: "step", step: 4, rate: 170708 },                 
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 57164 },
      { kind: "step", step: 3, rate: 61602 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59108 },
      { kind: "step", step: 3, rate: 63696 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66043 },
      { kind: "step", step: 2, rate: 68264 },
      { kind: "step", step: 3, rate: 70491 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68288 },
      { kind: "step", step: 2, rate: 70585 },
      { kind: "step", step: 3, rate: 72888 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72292 },
      { kind: "step", step: 2, rate: 75428 },
      { kind: "step", step: 3, rate: 78568 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74750 },
      { kind: "step", step: 2, rate: 77993 },
      { kind: "step", step: 3, rate: 81239 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81702 },
      { kind: "step", step: 2, rate: 84842 },
      { kind: "step", step: 3, rate: 87354 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84480 },
      { kind: "step", step: 2, rate: 87727 },
      { kind: "step", step: 3, rate: 90324 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90042 },
      { kind: "step", step: 2, rate: 95368 },
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93103 },
      { kind: "step", step: 2, rate: 98611 },
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 100690 },
      { kind: "step", step: 2, rate: 106021 },
      { kind: "step", step: 3, rate: 111345 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104113 },
      { kind: "step", step: 2, rate: 109626 },
      { kind: "step", step: 3, rate: 115131 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123864 },
      { kind: "step", step: 2, rate: 129483 },
      { kind: "step", step: 3, rate: 133139 },   
      { kind: "step", step: 4, rate: 137667 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 128075 },
      { kind: "step", step: 2, rate: 133885 },
      { kind: "step", step: 3, rate: 137666 },   
      { kind: "step", step: 4, rate: 142348 },    
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 145318 },
      { kind: "step", step: 2, rate: 153793 },
      { kind: "step", step: 3, rate: 161731 },   
      { kind: "step", step: 4, rate: 169418 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-fisheries-management-authority-afma",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 150259 },
      { kind: "step", step: 2, rate: 159022 },
      { kind: "step", step: 3, rate: 167230 },   
      { kind: "step", step: 4, rate: 175178 },    
    ]
  },   
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 58277 },
      { kind: "step", step: 2, rate: 59760 },
      { kind: "step", step: 3, rate: 61242 },   
      { kind: "step", step: 4, rate: 61772 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 60258 },
      { kind: "step", step: 2, rate: 61792 },
      { kind: "step", step: 3, rate: 63324 },
      { kind: "step", step: 4, rate: 63872 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64767 },
      { kind: "step", step: 2, rate: 66849 },
      { kind: "step", step: 3, rate: 68930 },
      { kind: "step", step: 4, rate: 71013 },
      { kind: "step", step: 5, rate: 71628 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66969 },
      { kind: "step", step: 2, rate: 69122 },
      { kind: "step", step: 3, rate: 71274 },   
      { kind: "step", step: 4, rate: 73427 },
      { kind: "step", step: 5, rate: 74063 }, 
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71642 },
      { kind: "step", step: 2, rate: 73942 },
      { kind: "step", step: 3, rate: 77615 },     
      { kind: "step", step: 4, rate: 80720 },
      { kind: "step", step: 5, rate: 81420 },          
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74078 },
      { kind: "step", step: 2, rate: 76456 },
      { kind: "step", step: 3, rate: 80254 },
      { kind: "step", step: 4, rate: 83464 },
      { kind: "step", step: 5, rate: 84188 },    
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81290 },
      { kind: "step", step: 2, rate: 84046 },
      { kind: "step", step: 3, rate: 86801 },
      { kind: "step", step: 4, rate: 89557 },
      { kind: "step", step: 5, rate: 90333 },               
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84054 },
      { kind: "step", step: 2, rate: 86904 },
      { kind: "step", step: 3, rate: 89752 }, 
      { kind: "step", step: 4, rate: 92602 },
      { kind: "step", step: 5, rate: 93404 },           
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 92311 },
      { kind: "step", step: 2, rate: 96905 },
      { kind: "step", step: 3, rate: 99785 }, 
      { kind: "step", step: 4, rate: 101415 },
      { kind: "step", step: 5, rate: 102294 },                      
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 95450 },
      { kind: "step", step: 2, rate: 100200 },
      { kind: "step", step: 3, rate: 103178 }, 
      { kind: "step", step: 4, rate: 104863 },
      { kind: "step", step: 5, rate: 105772 },           
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 104942 },
      { kind: "step", step: 2, rate: 108383 },
      { kind: "step", step: 3, rate: 111831 },
      { kind: "step", step: 4, rate: 115274 },
      { kind: "step", step: 5, rate: 117151 },
      { kind: "step", step: 6, rate: 118166 },                       
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 108510 },
      { kind: "step", step: 2, rate: 112068 },
      { kind: "step", step: 3, rate: 115633 },
      { kind: "step", step: 4, rate: 119193 },
      { kind: "step", step: 5, rate: 121134 },  
      { kind: "step", step: 6, rate: 122184 },          
    ]
  },  
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 126984 },
      { kind: "step", step: 2, rate: 130887 },
      { kind: "step", step: 3, rate: 135023 },
      { kind: "step", step: 4, rate: 139072 },
      { kind: "step", step: 5, rate: 142997 },  
      { kind: "step", step: 6, rate: 144236 },                     
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 131301 },
      { kind: "step", step: 2, rate: 135337 },
      { kind: "step", step: 3, rate: 139614 }, 
      { kind: "step", step: 4, rate: 143800 },
      { kind: "step", step: 5, rate: 147859 },  
      { kind: "step", step: 6, rate: 149140 },         
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 149030 },
      { kind: "step", step: 2, rate: 153264 },
      { kind: "step", step: 3, rate: 158446 }, 
      { kind: "step", step: 4, rate: 166484 },
      { kind: "step", step: 5, rate: 170969 },  
      { kind: "step", step: 6, rate: 172450 },                    
    ]
  },
  {
    agencyId: "agriculture-fisheries-and-forestry|australian-pesticides-and-veterinary-medicines-authority",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 154097 },
      { kind: "step", step: 2, rate: 158847 },
      { kind: "step", step: 3, rate: 163833 },
      { kind: "step", step: 4, rate: 172144 },
      { kind: "step", step: 5, rate: 176782 },  
      { kind: "step", step: 6, rate: 178313 },          
    ]
  },          
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55038 },
      { kind: "step", step: 2, rate: 56886 },
      { kind: "step", step: 3, rate: 58426 },
      { kind: "step", step: 4, rate: 60826 },                
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58820 },
      { kind: "step", step: 3, rate: 60412 },
      { kind: "step", step: 4, rate: 62894 },      
    ]
  },   
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62288 },
      { kind: "step", step: 2, rate: 64003 },
      { kind: "step", step: 3, rate: 65680 },
      { kind: "step", step: 4, rate: 67388 }, 
      { kind: "step", step: 5, rate: 69071 },       
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64406 },
      { kind: "step", step: 2, rate: 66179 },
      { kind: "step", step: 3, rate: 67913 },
      { kind: "step", step: 4, rate: 69679 }, 
      { kind: "step", step: 5, rate: 71419 },   
    ]
  }, 
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69554 },
      { kind: "step", step: 2, rate: 71359 },
      { kind: "step", step: 3, rate: 73172 },
      { kind: "step", step: 4, rate: 75065 },          
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71919 },
      { kind: "step", step: 2, rate: 73785 },
      { kind: "step", step: 3, rate: 75660 },
      { kind: "step", step: 4, rate: 77617 },                              
    ]
  }, 
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77517 },
      { kind: "step", step: 2, rate: 79982 },
      { kind: "step", step: 3, rate: 82065 },
      { kind: "step", step: 4, rate: 84166 },             
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80153 },
      { kind: "step", step: 2, rate: 82701 },
      { kind: "step", step: 3, rate: 84855 },
      { kind: "step", step: 4, rate: 87028 },    
    ]
  },     
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [       
      { kind: "step", step: 1, rate: 86464 },
      { kind: "step", step: 2, rate: 91683 },
      { kind: "step", step: 3, rate: 91809 },      
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89404 },
      { kind: "step", step: 2, rate: 94800 },
      { kind: "step", step: 3, rate: 96829 },     
    ]
  }, 
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98329 },
      { kind: "step", step: 2, rate: 103272 },
      { kind: "step", step: 3, rate: 109684 },                    
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101672 },
      { kind: "step", step: 2, rate: 106783 },
      { kind: "step", step: 3, rate: 113413 },                                 
    ]
  },    
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119142 },
      { kind: "step", step: 2, rate: 128650 },
      { kind: "step", step: 3, rate: 136803 },
      { kind: "step", step: 4, rate: 144964 },                                
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123193 },
      { kind: "step", step: 2, rate: 133024 },
      { kind: "step", step: 3, rate: 141454 },
      { kind: "step", step: 4, rate: 149893 },                   
    ]
  }, 
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144964 },
      { kind: "step", step: 2, rate: 155789 },
      { kind: "step", step: 3, rate: 160995 },
      { kind: "step", step: 4, rate: 165112 },                         
    ]
  },
  {
    agencyId: "attorney-generals|attorney-generals-department",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149893 },
      { kind: "step", step: 2, rate: 161086 },
      { kind: "step", step: 3, rate: 166469 },
      { kind: "step", step: 4, rate: 170726 },                      
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56338 },
      { kind: "step", step: 3, rate: 59148 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58253 },
      { kind: "step", step: 3, rate: 61159 },    
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60567 },
      { kind: "step", step: 2, rate: 64352 },
      { kind: "step", step: 3, rate: 68135 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 66540 },
      { kind: "step", step: 3, rate: 70452 },    
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71720 },
      { kind: "step", step: 2, rate: 74460 },              
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71720 },
      { kind: "step", step: 2, rate: 74460 },  
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 74158 },
      { kind: "step", step: 2, rate: 76992 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76887 },
      { kind: "step", step: 2, rate: 80271 },
      { kind: "step", step: 3, rate: 83480 },    
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85755 },
      { kind: "step", step: 2, rate: 88444 },
      { kind: "step", step: 3, rate: 91809 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91451 },
      { kind: "step", step: 3, rate: 96829 },    
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 97527 },
      { kind: "step", step: 3, rate: 106394 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 100843 },
      { kind: "step", step: 3, rate: 111701 },    
    ]
  },  
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117655 },
      { kind: "step", step: 2, rate: 124945 },
      { kind: "step", step: 3, rate: 138493 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 129193 },
      { kind: "step", step: 3, rate: 143202 },    
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140890 },
      { kind: "step", step: 2, rate: 151060 },
      { kind: "step", step: 3, rate: 160176 },               
    ]
  },
  {
    agencyId: "attorney-generals|administrative-review-tribunal-art",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145680 },
      { kind: "step", step: 2, rate: 156196 },
      { kind: "step", step: 3, rate: 165622 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 56105 },  
      { kind: "step", step: 4, rate: 57789 },  
      { kind: "step", step: 5, rate: 59523 }, 
      { kind: "step", step: 6, rate: 61308 },                                 
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58013 }, 
      { kind: "step", step: 4, rate: 59754 },  
      { kind: "step", step: 5, rate: 61547 }, 
      { kind: "step", step: 6, rate: 63392 },            
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63148 },
      { kind: "step", step: 2, rate: 65041 },
      { kind: "step", step: 3, rate: 66994 },
      { kind: "step", step: 4, rate: 69001 },               
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65295 },
      { kind: "step", step: 2, rate: 67252 },
      { kind: "step", step: 3, rate: 69272 }, 
      { kind: "step", step: 4, rate: 71347 },   
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71074 },
      { kind: "step", step: 2, rate: 73204 },
      { kind: "step", step: 3, rate: 75400 }, 
      { kind: "step", step: 4, rate: 77663 },              
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73491 },
      { kind: "step", step: 2, rate: 75693 },
      { kind: "step", step: 3, rate: 77964 },  
      { kind: "step", step: 4, rate: 80304 },  
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 79990 },
      { kind: "step", step: 2, rate: 82393 },
      { kind: "step", step: 3, rate: 84866 }, 
      { kind: "step", step: 4, rate: 87411 },              
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82710 },
      { kind: "step", step: 2, rate: 85194 },
      { kind: "step", step: 3, rate: 87751 },  
      { kind: "step", step: 4, rate: 90383 },  
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90034 },
      { kind: "step", step: 2, rate: 92736 },
      { kind: "step", step: 3, rate: 95515 },               
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93095 },
      { kind: "step", step: 2, rate: 95889 },
      { kind: "step", step: 3, rate: 98763 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98381 },
      { kind: "step", step: 2, rate: 101311 },
      { kind: "step", step: 3, rate: 104372 }, 
      { kind: "step", step: 4, rate: 107506 },  
      { kind: "step", step: 5, rate: 110727 }, 
      { kind: "step", step: 6, rate: 114049 },                    
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101726 },
      { kind: "step", step: 2, rate: 104776 },
      { kind: "step", step: 3, rate: 107921 },  
      { kind: "step", step: 4, rate: 111161 },  
      { kind: "step", step: 5, rate: 114492 }, 
      { kind: "step", step: 6, rate: 117927 },         
    ]
  },  
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119752 },
      { kind: "step", step: 2, rate: 123345 },
      { kind: "step", step: 3, rate: 127047 },  
      { kind: "step", step: 4, rate: 130857 },  
      { kind: "step", step: 5, rate: 134784 }, 
      { kind: "step", step: 6, rate: 138828 },                    
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123824 },
      { kind: "step", step: 2, rate: 127539 },
      { kind: "step", step: 3, rate: 131367 }, 
      { kind: "step", step: 4, rate: 135306 },  
      { kind: "step", step: 5, rate: 139367 }, 
      { kind: "step", step: 6, rate: 143548 },          
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 160937 },
      { kind: "step", step: 2, rate: 165764 },
      { kind: "step", step: 3, rate: 170736 },               
    ]
  },
  {
    agencyId: "attorney-generals|australia-law-reform-commission-alrc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 166409 },
      { kind: "step", step: 2, rate: 171400 },
      { kind: "step", step: 3, rate: 176541 },    
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 54751 },    
      { kind: "step", step: 4, rate: 56999 },
      { kind: "step", step: 5, rate: 57787 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 57497 },
      { kind: "step", step: 4, rate: 58937 },
      { kind: "step", step: 5, rate: 59752 },
      { kind: "step", step: 6, rate: 60946 },          
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59510 },
      { kind: "step", step: 2, rate: 59977 },
      { kind: "step", step: 3, rate: 61547 },   
      { kind: "step", step: 4, rate: 63149 },
      { kind: "step", step: 5, rate: 64877 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 62775 },
      { kind: "step", step: 3, rate: 63640 }, 
      { kind: "step", step: 4, rate: 65296 },
      { kind: "step", step: 5, rate: 67083 },
      { kind: "step", step: 6, rate: 68425 },         
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 68207 },
      { kind: "step", step: 3, rate: 69946 },   
      { kind: "step", step: 4, rate: 72837 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 72324 },
      { kind: "step", step: 3, rate: 74195 }, 
      { kind: "step", step: 4, rate: 75313 },
      { kind: "step", step: 5, rate: 76820 },
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 76453 },
      { kind: "step", step: 3, rate: 78446 },  
      { kind: "step", step: 4, rate: 80455 },
      { kind: "step", step: 5, rate: 81775 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 79125 },
      { kind: "step", step: 3, rate: 81113 },
      { kind: "step", step: 4, rate: 83190 },
      { kind: "step", step: 5, rate: 84555 },
      { kind: "step", step: 6, rate: 86246 },         
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 85236 },
      { kind: "step", step: 3, rate: 87634 },   
      { kind: "step", step: 4, rate: 90900 },
      { kind: "step", step: 5, rate: 91809 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 90614 }, 
      { kind: "step", step: 4, rate: 93991 },
      { kind: "step", step: 5, rate: 96829 },
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 3, rate: 94563 },
      { kind: "step", step: 4, rate: 98716 },
      { kind: "step", step: 5, rate: 102538 },
      { kind: "step", step: 6, rate: 104861 },
      { kind: "step", step: 7, rate: 105910 },                   
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 99734 },   
      { kind: "step", step: 4, rate: 102072 },
      { kind: "step", step: 5, rate: 106024 },
      { kind: "step", step: 6, rate: 108426 },
      { kind: "step", step: 7, rate: 111701 },
    ]
  },  
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 117680 },
      { kind: "step", step: 3, rate: 123387 },  
      { kind: "step", step: 4, rate: 125832 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 121755 },
      { kind: "step", step: 3, rate: 127582 },  
      { kind: "step", step: 4, rate: 130110 },
      { kind: "step", step: 5, rate: 132713 },
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 133382 },
      { kind: "step", step: 2, rate: 138965 },
      { kind: "step", step: 3, rate: 149358 },
      { kind: "step", step: 4, rate: 154359 },               
    ]
  },
  {
    agencyId: "attorney-generals|federal-court-of-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 143690 },
      { kind: "step", step: 3, rate: 154436 },
      { kind: "step", step: 4, rate: 159607 },          
    ]
  },    
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55772 },
      { kind: "step", step: 2, rate: 57469 },
      { kind: "step", step: 3, rate: 59355 }, 
      { kind: "step", step: 4, rate: 60781 },              
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57668 },
      { kind: "step", step: 2, rate: 59423 },
      { kind: "step", step: 3, rate: 61373 },
      { kind: "step", step: 4, rate: 62848 },    
    ]
  },  
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60781 },
      { kind: "step", step: 2, rate: 62984 },
      { kind: "step", step: 3, rate: 65192 },
      { kind: "step", step: 4, rate: 67397 },               
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62848 },
      { kind: "step", step: 2, rate: 65125 },
      { kind: "step", step: 3, rate: 67409 },
      { kind: "step", step: 4, rate: 69688 },    
    ]
  },  
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69228 },
      { kind: "step", step: 2, rate: 71056 },
      { kind: "step", step: 3, rate: 72888 },
      { kind: "step", step: 4, rate: 74718 },               
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71582 },
      { kind: "step", step: 2, rate: 73472 },
      { kind: "step", step: 3, rate: 75366 },
      { kind: "step", step: 4, rate: 77258 },    
    ]
  },  
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77154 },
      { kind: "step", step: 2, rate: 79362 },
      { kind: "step", step: 3, rate: 81567 },
      { kind: "step", step: 4, rate: 83775 },               
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79777 },
      { kind: "step", step: 2, rate: 82060 },
      { kind: "step", step: 3, rate: 84340 },
      { kind: "step", step: 4, rate: 86623 },    
    ]
  },  
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86059 },
      { kind: "step", step: 2, rate: 87788 },
      { kind: "step", step: 3, rate: 89670 },
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88985 },
      { kind: "step", step: 2, rate: 90773 },
      { kind: "step", step: 3, rate: 92719 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },    
    ]
  },  
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 97553 },
      { kind: "step", step: 3, rate: 102161 }, 
      { kind: "step", step: 4, rate: 106769 },             
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102684 },
      { kind: "step", step: 3, rate: 105634 },
      { kind: "step", step: 4, rate: 110399 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 118549 },
      { kind: "step", step: 2, rate: 124927 },
      { kind: "step", step: 3, rate: 131306 },
      { kind: "step", step: 4, rate: 137688 },
      { kind: "step", step: 5, rate: 144065 },               
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122580 },
      { kind: "step", step: 2, rate: 129175 },
      { kind: "step", step: 3, rate: 135770 },  
      { kind: "step", step: 4, rate: 142369 },
      { kind: "step", step: 5, rate: 148963 }, 
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 145737 },
      { kind: "step", step: 2, rate: 151895 },
      { kind: "step", step: 3, rate: 158056 },
      { kind: "step", step: 4, rate: 164217 },               
    ]
  },
  {
    agencyId: "attorney-generals|national-anti-corruption-commission-nacc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 150692 },
      { kind: "step", step: 2, rate: 157059 },
      { kind: "step", step: 3, rate: 163430 },
      { kind: "step", step: 4, rate: 169800 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55901 },
      { kind: "step", step: 2, rate: 57776 },
      { kind: "step", step: 3, rate: 59341 },
      { kind: "step", step: 4, rate: 61781 }, 
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57802 },
      { kind: "step", step: 2, rate: 59740 },
      { kind: "step", step: 3, rate: 61359 }, 
      { kind: "step", step: 4, rate: 63882 }, 
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63261 },
      { kind: "step", step: 2, rate: 65004 },
      { kind: "step", step: 3, rate: 66712 },
      { kind: "step", step: 4, rate: 68444 }, 
      { kind: "step", step: 5, rate: 70154 },                
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65412 },
      { kind: "step", step: 2, rate: 67214 },
      { kind: "step", step: 3, rate: 68980 },
      { kind: "step", step: 4, rate: 70771 }, 
      { kind: "step", step: 5, rate: 72539 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72056 },
      { kind: "step", step: 2, rate: 73929 },
      { kind: "step", step: 3, rate: 75807 },
      { kind: "step", step: 4, rate: 77772 },                
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74506 },
      { kind: "step", step: 2, rate: 76443 },
      { kind: "step", step: 3, rate: 78384 },
      { kind: "step", step: 4, rate: 80416 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80309 },
      { kind: "step", step: 2, rate: 82864 },
      { kind: "step", step: 3, rate: 85018 },
      { kind: "step", step: 4, rate: 87198 },                
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83040 },
      { kind: "step", step: 2, rate: 85681 },
      { kind: "step", step: 3, rate: 87909 },
      { kind: "step", step: 4, rate: 90163 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89573 },
      { kind: "step", step: 2, rate: 92384 },
      { kind: "step", step: 3, rate: 94986 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92618 },
      { kind: "step", step: 2, rate: 95525 },
      { kind: "step", step: 3, rate: 98216 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96747 },
      { kind: "step", step: 2, rate: 99156 },
      { kind: "step", step: 3, rate: 101870 },
      { kind: "step", step: 4, rate: 106991 }, 
      { kind: "step", step: 5, rate: 111136 },                
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100036 },
      { kind: "step", step: 2, rate: 102527 },
      { kind: "step", step: 3, rate: 105334 },
      { kind: "step", step: 4, rate: 110629 }, 
      { kind: "step", step: 5, rate: 114915 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122946 },
      { kind: "step", step: 2, rate: 132844 },
      { kind: "step", step: 3, rate: 141423 },
      { kind: "step", step: 4, rate: 149287 },                
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127126 },
      { kind: "step", step: 2, rate: 137361 },
      { kind: "step", step: 3, rate: 146231 },
      { kind: "step", step: 4, rate: 154363 },     
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141423 },
      { kind: "step", step: 2, rate: 149287 },
      { kind: "step", step: 3, rate: 160553 }, 
      { kind: "step", step: 4, rate: 165975 }, 
      { kind: "step", step: 5, rate: 170260 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-parliamentary-counsel-opc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146231 },
      { kind: "step", step: 2, rate: 154363 },
      { kind: "step", step: 3, rate: 166012 },
      { kind: "step", step: 4, rate: 171618 }, 
      { kind: "step", step: 5, rate: 176049 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54971 },
      { kind: "step", step: 3, rate: 56459 },
      { kind: "step", step: 4, rate: 60304 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58379 }, 
      { kind: "step", step: 4, rate: 62354 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61846 },
      { kind: "step", step: 2, rate: 63470 },
      { kind: "step", step: 3, rate: 65120 },  
      { kind: "step", step: 4, rate: 66748 },              
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63949 },
      { kind: "step", step: 2, rate: 65628 },
      { kind: "step", step: 3, rate: 67334 }, 
      { kind: "step", step: 4, rate: 69017 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 68558 },
      { kind: "step", step: 2, rate: 70338 },
      { kind: "step", step: 3, rate: 72124 },
      { kind: "step", step: 4, rate: 73995 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70889 },
      { kind: "step", step: 2, rate: 72729 },
      { kind: "step", step: 3, rate: 74756 }, 
      { kind: "step", step: 4, rate: 76820 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78840 },
      { kind: "step", step: 2, rate: 80451 },
      { kind: "step", step: 3, rate: 82097 }, 
      { kind: "step", step: 4, rate: 83771 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81521 },
      { kind: "step", step: 2, rate: 83186 },
      { kind: "step", step: 3, rate: 84888 }, 
      { kind: "step", step: 4, rate: 86619 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87895 },
      { kind: "step", step: 2, rate: 89547 },
      { kind: "step", step: 3, rate: 91230 },  
      { kind: "step", step: 4, rate: 92922 },              
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90883 },
      { kind: "step", step: 2, rate: 92592 },
      { kind: "step", step: 3, rate: 94332 },
      { kind: "step", step: 4, rate: 96829 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96920 },
      { kind: "step", step: 2, rate: 100081 },
      { kind: "step", step: 3, rate: 103343 },
      { kind: "step", step: 4, rate: 106728 },                
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100215 },
      { kind: "step", step: 2, rate: 103484 },
      { kind: "step", step: 3, rate: 106857 },  
      { kind: "step", step: 4, rate: 110357 }, 
      { kind: "step", step: 5, rate: 111702 },   
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122146 },
      { kind: "step", step: 2, rate: 124918 },
      { kind: "step", step: 3, rate: 127754 }, 
      { kind: "step", step: 4, rate: 130659 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126299 },
      { kind: "step", step: 2, rate: 129165 },
      { kind: "step", step: 3, rate: 132098 },
      { kind: "step", step: 4, rate: 135101 },     
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141876 },
      { kind: "step", step: 2, rate: 148262 },
      { kind: "step", step: 3, rate: 154934 }, 
      { kind: "step", step: 4, rate: 161916 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-australian-information-commissioner-oaic",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146700 },
      { kind: "step", step: 2, rate: 153303 },
      { kind: "step", step: 3, rate: 160202 },
      { kind: "step", step: 4, rate: 167421 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56416 },
      { kind: "step", step: 3, rate: 58738 },
      { kind: "step", step: 4, rate: 60145 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 0 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58334 },
      { kind: "step", step: 4, rate: 60946 },     
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60145 },
      { kind: "step", step: 2, rate: 61800 },
      { kind: "step", step: 3, rate: 63426 },
      { kind: "step", step: 4, rate: 65071 },
      { kind: "step", step: 5, rate: 66695 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 63901 },
      { kind: "step", step: 3, rate: 65582 },
      { kind: "step", step: 4, rate: 67283 },
      { kind: "step", step: 5, rate: 68963 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 68505 },
      { kind: "step", step: 2, rate: 70286 },
      { kind: "step", step: 3, rate: 72070 },
      { kind: "step", step: 4, rate: 73939 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70834 },
      { kind: "step", step: 2, rate: 72676 },
      { kind: "step", step: 3, rate: 74520 },
      { kind: "step", step: 4, rate: 76820 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 76351 },
      { kind: "step", step: 2, rate: 78780 },
      { kind: "step", step: 3, rate: 80828 }, 
      { kind: "step", step: 4, rate: 82898 },              
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 78947 },
      { kind: "step", step: 2, rate: 81459 },
      { kind: "step", step: 3, rate: 83576 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85155 },
      { kind: "step", step: 2, rate: 87829 },
      { kind: "step", step: 3, rate: 90300 },
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90815 },
      { kind: "step", step: 3, rate: 93370 },   
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 }, 
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 96844 }, 
      { kind: "step", step: 4, rate: 101714 },
      { kind: "step", step: 5, rate: 105910 },
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 100137 }, 
      { kind: "step", step: 4, rate: 105172 },
      { kind: "step", step: 5, rate: 109511 },
      { kind: "step", step: 6, rate: 111701 },   
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117908 },
      { kind: "step", step: 2, rate: 127324 },
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121917 },
      { kind: "step", step: 2, rate: 131653 },
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 137289 },
      { kind: "step", step: 2, rate: 144799 },
      { kind: "step", step: 3, rate: 155611 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-commonwealth-ombudsman",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 141957 },
      { kind: "step", step: 2, rate: 149722 },
      { kind: "step", step: 3, rate: 160902 },    
    ]
  }, 
    {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 5, rate: 54516 },
      { kind: "step", step: 6, rate: 55742 },
      { kind: "step", step: 7, rate: 59149 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 5, rate: 57497 },
      { kind: "step", step: 6, rate: 57637 },
      { kind: "step", step: 7, rate: 61160 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60971 },
      { kind: "step", step: 2, rate: 63243 },
      { kind: "step", step: 3, rate: 67038 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63044 },
      { kind: "step", step: 2, rate: 65393 },
      { kind: "step", step: 3, rate: 69317 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67492 },
      { kind: "step", step: 2, rate: 69517 },
      { kind: "step", step: 3, rate: 74215 },        
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 71880 },
      { kind: "step", step: 3, rate: 76738 },
      { kind: "step", step: 4, rate: 76820 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75119 },
      { kind: "step", step: 2, rate: 79205 },
      { kind: "step", step: 3, rate: 83101 }, 
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 81898 },
      { kind: "step", step: 3, rate: 85927 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 86276 },
      { kind: "step", step: 3, rate: 90440 },   
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 89210 },
      { kind: "step", step: 3, rate: 93515 }, 
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },   
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 95595 },
      { kind: "step", step: 3, rate: 105661 }, 
      { kind: "step", step: 4, rate: 105910 },              
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 109254 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 116497 },
      { kind: "step", step: 2, rate: 127140 },
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 131463 },
      { kind: "step", step: 3, rate: 132713 },    
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140369 },
      { kind: "step", step: 2, rate: 150782 },
      { kind: "step", step: 3, rate: 158880 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-director-of-public-prosecutions-cdpp",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145141 },
      { kind: "step", step: 2, rate: 155909 },
      { kind: "step", step: 3, rate: 164282 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56516 },
      { kind: "step", step: 2, rate: 56573 },
      { kind: "step", step: 3, rate: 58063 },
      { kind: "step", step: 4, rate: 60544 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58438 },
      { kind: "step", step: 2, rate: 58496 },
      { kind: "step", step: 3, rate: 60037 }, 
      { kind: "step", step: 4, rate: 62602 },  
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62031 },
      { kind: "step", step: 2, rate: 64017 },
      { kind: "step", step: 3, rate: 66999 },  
      { kind: "step", step: 4, rate: 68979 },             
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64140 },
      { kind: "step", step: 2, rate: 66194 },
      { kind: "step", step: 3, rate: 69277 }, 
      { kind: "step", step: 4, rate: 71324 },   
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70968 },
      { kind: "step", step: 2, rate: 72453 },
      { kind: "step", step: 3, rate: 74439 },
      { kind: "step", step: 4, rate: 76425 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73381 },
      { kind: "step", step: 2, rate: 74916 },
      { kind: "step", step: 3, rate: 76970 },
      { kind: "step", step: 4, rate: 79023 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78908 },
      { kind: "step", step: 2, rate: 81839 },
      { kind: "step", step: 3, rate: 83370 },
      { kind: "step", step: 4, rate: 85853 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81591 },
      { kind: "step", step: 2, rate: 84156 },
      { kind: "step", step: 3, rate: 86205 },
      { kind: "step", step: 4, rate: 88772 },    
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87840 },
      { kind: "step", step: 2, rate: 90814 },
      { kind: "step", step: 3, rate: 93295 },
      { kind: "step", step: 4, rate: 95284 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90827 },
      { kind: "step", step: 2, rate: 93602 },
      { kind: "step", step: 3, rate: 96467 }, 
      { kind: "step", step: 4, rate: 98524 },   
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 100244 },
      { kind: "step", step: 2, rate: 105209 },
      { kind: "step", step: 3, rate: 109179 },
      { kind: "step", step: 4, rate: 112652 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 103652 },
      { kind: "step", step: 2, rate: 108786 },
      { kind: "step", step: 3, rate: 112891 }, 
      { kind: "step", step: 4, rate: 116482 },   
    ]
  },  
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 121089 },
      { kind: "step", step: 2, rate: 126050 },
      { kind: "step", step: 3, rate: 131010 },
      { kind: "step", step: 4, rate: 134987 },               
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125206 },
      { kind: "step", step: 2, rate: 130336 },
      { kind: "step", step: 3, rate: 135464 },
      { kind: "step", step: 4, rate: 139577 },    
    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140938 },
      { kind: "step", step: 2, rate: 144975 },
      { kind: "step", step: 3, rate: 149011 }, 
      { kind: "step", step: 4, rate: 154800 },              
      { kind: "step", step: 5, rate: 160588 },
      { kind: "step", step: 6, rate: 163764 },
      { kind: "step", step: 7, rate: 167436 },

    ]
  },
  {
    agencyId: "attorney-generals|office-of-the-inspector-general-of-intelligence-and-security",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145730 },
      { kind: "step", step: 2, rate: 149904 },
      { kind: "step", step: 3, rate: 154077 },
      { kind: "step", step: 4, rate: 160063 },
      { kind: "step", step: 5, rate: 166048 },
      { kind: "step", step: 6, rate: 169332 },
      { kind: "step", step: 7, rate: 173129 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55546 },
      { kind: "step", step: 3, rate: 58860 },               
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 60946 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60741 },
      { kind: "step", step: 2, rate: 63789 },
      { kind: "step", step: 3, rate: 66838 },               
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62806 },
      { kind: "step", step: 2, rate: 65958 },
      { kind: "step", step: 3, rate: 69110 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67331 },
      { kind: "step", step: 2, rate: 70713 },
      { kind: "step", step: 3, rate: 74093 },               
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 73117 },
      { kind: "step", step: 3, rate: 76820 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75041 },
      { kind: "step", step: 2, rate: 79056 },
      { kind: "step", step: 3, rate: 83074 },
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 81744 },
      { kind: "step", step: 3, rate: 85899 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 87935 },
      { kind: "step", step: 3, rate: 92172 },               
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90925 },
      { kind: "step", step: 3, rate: 96829 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 99265 },
      { kind: "step", step: 3, rate: 105910 },
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102640 },
      { kind: "step", step: 3, rate: 109478 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115892 },
      { kind: "step", step: 2, rate: 122737 },
      { kind: "step", step: 3, rate: 129580 },               
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 126910 },
      { kind: "step", step: 3, rate: 133986 },    
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139336 },
      { kind: "step", step: 2, rate: 154591 },
      { kind: "step", step: 3, rate: 163754 },               
    ]
  },
  {
    agencyId: "attorney-generals|australian-human-rights-commission",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 144073 },
      { kind: "step", step: 2, rate: 159847 },
      { kind: "step", step: 3, rate: 169322 },    
    ]
  },     
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55673 },
      { kind: "step", step: 2, rate: 59409 },
      { kind: "step", step: 3, rate: 63146 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57566 },
      { kind: "step", step: 2, rate: 61429 },
      { kind: "step", step: 3, rate: 65293 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66306 },
      { kind: "step", step: 2, rate: 68530 },
      { kind: "step", step: 3, rate: 70752 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68560 },
      { kind: "step", step: 2, rate: 70860 },
      { kind: "step", step: 3, rate: 73158 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 73793 },
      { kind: "step", step: 2, rate: 76459 },
      { kind: "step", step: 3, rate: 79882 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76302 },
      { kind: "step", step: 2, rate: 79059 },
      { kind: "step", step: 3, rate: 82598 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 82926 },
      { kind: "step", step: 2, rate: 85208 },
      { kind: "step", step: 3, rate: 87490 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 85745 },
      { kind: "step", step: 2, rate: 88105 },
      { kind: "step", step: 3, rate: 90465 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90534 },
      { kind: "step", step: 2, rate: 92816 },
      { kind: "step", step: 3, rate: 95099 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93612 },
      { kind: "step", step: 2, rate: 95972 },
      { kind: "step", step: 3, rate: 98332 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98905 },
      { kind: "step", step: 2, rate: 105747 },
      { kind: "step", step: 3, rate: 112596 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102268 },
      { kind: "step", step: 2, rate: 109342 },
      { kind: "step", step: 3, rate: 116424 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 121724 },
      { kind: "step", step: 2, rate: 130092 },
      { kind: "step", step: 3, rate: 138463 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125863 },
      { kind: "step", step: 2, rate: 134515 },
      { kind: "step", step: 3, rate: 143171 },    
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 145311 },
      { kind: "step", step: 2, rate: 158241 },
      { kind: "step", step: 3, rate: 171175 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|clean-energy-regulator-cer",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 150252 },
      { kind: "step", step: 2, rate: 163621 },
      { kind: "step", step: 3, rate: 176995 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 66823 },
      { kind: "step", step: 3, rate: 69653 },
      { kind: "step", step: 4, rate: 72116 },
      { kind: "step", step: 5, rate: 72837 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 70477 },
      { kind: "step", step: 3, rate: 72021 },
      { kind: "step", step: 4, rate: 74568 },
      { kind: "step", step: 5, rate: 76820 },   
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 75022 },
      { kind: "step", step: 3, rate: 76287 },
      { kind: "step", step: 4, rate: 80965 }, 
      { kind: "step", step: 5, rate: 81775 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 79125 },
      { kind: "step", step: 3, rate: 81389 },
      { kind: "step", step: 4, rate: 83718 },
      { kind: "step", step: 5, rate: 86246 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 3, rate: 84228 }, 
      { kind: "step", step: 4, rate: 86755 },
      { kind: "step", step: 5, rate: 89358 },
      { kind: "step", step: 6, rate: 91809 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 88834 }, 
      { kind: "step", step: 4, rate: 91499 },
      { kind: "step", step: 5, rate: 94244 },
      { kind: "step", step: 6, rate: 96829 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 98598 }, 
      { kind: "step", step: 4, rate: 104861 },
      { kind: "step", step: 5, rate: 105910 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99733 },
      { kind: "step", step: 3, rate: 103989 }, 
      { kind: "step", step: 4, rate: 108426 },
      { kind: "step", step: 5, rate: 111701 },   
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 115442 },
      { kind: "step", step: 3, rate: 120732 },
      { kind: "step", step: 4, rate: 125561 },
      { kind: "step", step: 5, rate: 130391 },
      { kind: "step", step: 6, rate: 135219 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 121755 },
      { kind: "step", step: 3, rate: 125728 },
      { kind: "step", step: 4, rate: 129830 },
      { kind: "step", step: 5, rate: 134824 },
      { kind: "step", step: 6, rate: 139816 },    
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 133381 },
      { kind: "step", step: 2, rate: 139705 },
      { kind: "step", step: 3, rate: 149256 }, 
      { kind: "step", step: 4, rate: 155228 },
      { kind: "step", step: 5, rate: 161198 },              
      { kind: "step", step: 6, rate: 167167 },
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|climate-change-authority",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 147344 },
      { kind: "step", step: 3, rate: 154331 },
      { kind: "step", step: 4, rate: 160506 },
      { kind: "step", step: 5, rate: 166679 },
      { kind: "step", step: 6, rate: 172851 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 59618 },
      { kind: "step", step: 3, rate: 60732 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 61645 },
      { kind: "step", step: 3, rate: 62797 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60975 },
      { kind: "step", step: 2, rate: 63077 },
      { kind: "step", step: 3, rate: 65181 },  
      { kind: "step", step: 4, rate: 67283 }, 
      { kind: "step", step: "Performance Point", rate: 68540 },                
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63048 },
      { kind: "step", step: 2, rate: 65222 },
      { kind: "step", step: 3, rate: 67397 },
      { kind: "step", step: 4, rate: 69571 }, 
      { kind: "step", step: "Performance Point", rate: 70870 },           
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69027 },
      { kind: "step", step: 2, rate: 70741 },
      { kind: "step", step: 3, rate: 72462 }, 
      { kind: "step", step: 4, rate: 74261 }, 
      { kind: "step", step: "Performance Point", rate: 75650 },                    
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71374 },
      { kind: "step", step: 2, rate: 73146 },
      { kind: "step", step: 3, rate: 74926 },
      { kind: "step", step: 4, rate: 79786 }, 
      { kind: "step", step: "Performance Point", rate: 78222 },           
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 76583 },
      { kind: "step", step: 2, rate: 79815 },
      { kind: "step", step: 3, rate: 80900 },
      { kind: "step", step: 4, rate: 82895 }, 
      { kind: "step", step: "Performance Point", rate: 84443 },                      
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79187 },
      { kind: "step", step: 2, rate: 82529 },
      { kind: "step", step: 3, rate: 83651 },
      { kind: "step", step: 4, rate: 85713 }, 
      { kind: "step", step: "Performance Point", rate: 87713 },           
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85072 },
      { kind: "step", step: 2, rate: 87258 },
      { kind: "step", step: 3, rate: 89445 }, 
      { kind: "step", step: 4, rate: 91641 }, 
      { kind: "step", step: "Performance Point", rate: 93353 },                     
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88833 },
      { kind: "step", step: 2, rate: 90225 },
      { kind: "step", step: 3, rate: 92486 },
      { kind: "step", step: 4, rate: 94757 }, 
      { kind: "step", step: "Performance Point", rate: 96829 },           
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 96330 },
      { kind: "step", step: 3, rate: 101021 }, 
      { kind: "step", step: 4, rate: 104814 }, 
      { kind: "step", step: "Performance Point", rate: 106775 },                     
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99733 },
      { kind: "step", step: 2, rate: 104456 },
      { kind: "step", step: 3, rate: 108378 }, 
      { kind: "step", step: 4, rate: 110405 }, 
      { kind: "step", step: "Performance Point", rate: 111702 },          
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117323 },
      { kind: "step", step: 2, rate: 120295 },
      { kind: "step", step: 3, rate: 123260 }, 
      { kind: "step", step: 4, rate: 126227 }, 
      { kind: "step", step: "Performance Point", rate: 128590 },                     
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121312 },
      { kind: "step", step: 2, rate: 124382 },
      { kind: "step", step: 3, rate: 127451 },
      { kind: "step", step: 4, rate: 130519 }, 
      { kind: "step", step: "Performance Point", rate: 132962 },           
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 137405 },
      { kind: "step", step: 2, rate: 144353 },
      { kind: "step", step: 3, rate: 149262 }, 
      { kind: "step", step: 4, rate: 154302 },
      { kind: "step", step: 5, rate: 159395 }, 
      { kind: "step", step: "Performance Point", rate: 162377 },                     
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|great-barrier-reef-marine-park-authroity-gbrmpa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 142077 },
      { kind: "step", step: 2, rate: 149261 },
      { kind: "step", step: 3, rate: 154337 }, 
      { kind: "step", step: 4, rate: 159548 },
      { kind: "step", step: 5, rate: 164814 }, 
      { kind: "step", step: "Performance Point", rate: 167898 },          
    ]
  },                      
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56015 },
      { kind: "step", step: 3, rate: 57215 },
      { kind: "step", step: 4, rate: 57877 },                  
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57920 },
      { kind: "step", step: 3, rate: 59160 },
      { kind: "step", step: 4, rate: 60946 },        
    ]
  },   
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 5, rate: 60677 },
      { kind: "step", step: 6, rate: 64241 },
      { kind: "step", step: 7, rate: 68460 },
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 5, rate: 62740 },
      { kind: "step", step: 6, rate: 66425 },
      { kind: "step", step: 7, rate: 70788 },     
    ]
  }, 
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 8, rate: 68946 },
      { kind: "step", step: 9, rate: 71015 },
      { kind: "step", step: 10, rate: 74443 },
      { kind: "step", step: 11, rate: 77125 },
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 8, rate: 71290 },
      { kind: "step", step: 9, rate: 73430 },
      { kind: "step", step: 10, rate: 76974 },
      { kind: "step", step: 11, rate: 79747 },                               
    ]
  }, 
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77728 },
      { kind: "step", step: 2, rate: 79931 },
      { kind: "step", step: 3, rate: 84619 },                 
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80371 },
      { kind: "step", step: 2, rate: 82649 },
      { kind: "step", step: 3, rate: 87496 },           
    ]
  },     
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84794 },
      { kind: "step", step: 2, rate: 87335 },
      { kind: "step", step: 3, rate: 93020 },       
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90304 },
      { kind: "step", step: 3, rate: 96183 },
      { kind: "step", step: 4, rate: 96829 },           
    ]
  }, 
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [       
      { kind: "step", step: 1, rate: 95438 },
      { kind: "step", step: 2, rate: 98298 },
      { kind: "step", step: 3, rate: 102935 },
      { kind: "step", step: 4, rate: 108360 },
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 101640 },
      { kind: "step", step: 3, rate: 106435 },
      { kind: "step", step: 4, rate: 112044 },
    ]
  },    
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 124861 },
      { kind: "step", step: 2, rate: 128249 },
      { kind: "step", step: 3, rate: 134295 },  
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 129106 },
      { kind: "step", step: 2, rate: 132609 },
      { kind: "step", step: 3, rate: 138861 },                        
    ]
  }, 
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 146942 },
      { kind: "step", step: 2, rate: 151352 },
      { kind: "step", step: 3, rate: 155891 },
      { kind: "step", step: 4, rate: 165095 }, 
      { kind: "step", step: 5, rate: 170725 },                           
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|department-of-climate-change-energy-the-environment-and-water-cceew",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 151938 },
      { kind: "step", step: 2, rate: 156498 },
      { kind: "step", step: 3, rate: 161191 },
      { kind: "step", step: 4, rate: 170708 }, 
      { kind: "step", step: 5, rate: 176530 },                        
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 57688 },
      { kind: "step", step: 3, rate: 57787 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59649 },
      { kind: "step", step: 3, rate: 60946 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59857 },
      { kind: "step", step: 2, rate: 61412 },
      { kind: "step", step: 3, rate: 65602 },
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 63500 },
      { kind: "step", step: 3, rate: 67832 }, 
      { kind: "step", step: 4, rate: 68425 },   
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 68016 },
      { kind: "step", step: 3, rate: 72516 },
      { kind: "step", step: 4, rate: 72837 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 70477 },
      { kind: "step", step: 3, rate: 75121 }, 
      { kind: "step", step: 4, rate: 76820 },   
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 76287 },
      { kind: "step", step: 3, rate: 71538 },
      { kind: "step", step: 4, rate: 81775 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 79125 },
      { kind: "step", step: 3, rate: 84310 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 85225 },
      { kind: "step", step: 3, rate: 90337 },
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 93408 }, 
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },   
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 96000 },
      { kind: "step", step: 3, rate: 103922 },
      { kind: "step", step: 4, rate: 105910 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 107455 },
      { kind: "step", step: 4, rate: 109511 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 115725 },
      { kind: "step", step: 3, rate: 125348 },   
      { kind: "step", step: 4, rate: 125832 },            
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|bureau-of-meteorology-bom",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 121755 },
      { kind: "step", step: 3, rate: 129611 },
      { kind: "step", step: 4, rate: 132713 },    
    ]
  },   
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55775 },
      { kind: "step", step: 3, rate: 57371 },
      { kind: "step", step: 4, rate: 59013 },                
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57671 },
      { kind: "step", step: 3, rate: 59322 }, 
      { kind: "step", step: 4, rate: 61019 },   
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62439 },
      { kind: "step", step: 2, rate: 64226 },
      { kind: "step", step: 3, rate: 66061 },
      { kind: "step", step: 4, rate: 67951 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64652 },
      { kind: "step", step: 2, rate: 66410 },
      { kind: "step", step: 3, rate: 68307 },
      { kind: "step", step: 4, rate: 70261 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71814 },
      { kind: "step", step: 2, rate: 73824 },
      { kind: "step", step: 3, rate: 75891 },
      { kind: "step", step: 4, rate: 78017 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74256 },
      { kind: "step", step: 2, rate: 76334 },
      { kind: "step", step: 3, rate: 78471 },
      { kind: "step", step: 4, rate: 80670 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80202 },
      { kind: "step", step: 2, rate: 82445 },
      { kind: "step", step: 3, rate: 84753 }, 
      { kind: "step", step: 4, rate: 87129 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82929 },
      { kind: "step", step: 2, rate: 85248 },
      { kind: "step", step: 3, rate: 87635 },
      { kind: "step", step: 4, rate: 90091 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90052 },
      { kind: "step", step: 2, rate: 92973 },
      { kind: "step", step: 3, rate: 95989 }, 
      { kind: "step", step: 4, rate: 99107 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93114 },
      { kind: "step", step: 2, rate: 96134 },
      { kind: "step", step: 3, rate: 99253 },
      { kind: "step", step: 4, rate: 102477 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 102321 },
      { kind: "step", step: 2, rate: 105641 },
      { kind: "step", step: 3, rate: 109071 }, 
      { kind: "step", step: 4, rate: 112615 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 105800 },
      { kind: "step", step: 2, rate: 109233 },
      { kind: "step", step: 3, rate: 112779 },
      { kind: "step", step: 4, rate: 116444 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122535 },
      { kind: "step", step: 2, rate: 129414 },
      { kind: "step", step: 3, rate: 134805 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126701 },
      { kind: "step", step: 2, rate: 133814 },
      { kind: "step", step: 3, rate: 139388 },    
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 142541 },
      { kind: "step", step: 2, rate: 150726 },
      { kind: "step", step: 3, rate: 159376 }, 
      { kind: "step", step: 4, rate: 162066 },
      { kind: "step", step: 5, rate: 167990 },              
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|murray-darling-basin-authority-mdba",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 147387 },
      { kind: "step", step: 2, rate: 155851 },
      { kind: "step", step: 3, rate: 164795 },
      { kind: "step", step: 4, rate: 167576 },
      { kind: "step", step: 5, rate: 173702 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66158 },         
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68408 },
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70296 },            
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72686 },  
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71804 },
      { kind: "step", step: 2, rate: 73631 },
      { kind: "step", step: 3, rate: 79078 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74246 },
      { kind: "step", step: 2, rate: 76134 },
      { kind: "step", step: 3, rate: 81767 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80481 },
      { kind: "step", step: 2, rate: 82576 },
      { kind: "step", step: 3, rate: 86851 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83218 },
      { kind: "step", step: 2, rate: 85383 },
      { kind: "step", step: 3, rate: 89804 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88079 },
      { kind: "step", step: 2, rate: 89913 },
      { kind: "step", step: 3, rate: 94409 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91704 },
      { kind: "step", step: 2, rate: 92970 },
      { kind: "step", step: 3, rate: 97619 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96068 },
      { kind: "step", step: 2, rate: 102545 },
      { kind: "step", step: 3, rate: 111180 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99334 },
      { kind: "step", step: 2, rate: 106031 },
      { kind: "step", step: 3, rate: 114960 },    
    ]
  },  
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120459 },
      { kind: "step", step: 2, rate: 130078 },
      { kind: "step", step: 3, rate: 133846 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124555 },
      { kind: "step", step: 2, rate: 134500 },
      { kind: "step", step: 3, rate: 139397 },    
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 138936 },
      { kind: "step", step: 2, rate: 146572 },
      { kind: "step", step: 3, rate: 157515 },
      { kind: "step", step: 4, rate: 162781 },               
    ]
  },
  {
    agencyId: "climate-change-energy-the-environment-and-water|sydney-harbour-federation-trust",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 143660 },
      { kind: "step", step: 2, rate: 151555 },
      { kind: "step", step: 3, rate: 162870 },
      { kind: "step", step: 4, rate: 168315 },    
    ]
  },        
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS1",
    agencyClassification: "DHA Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 57071 },  
      { kind: "step", step: "Max", rate: 64995 },              
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS1",
    agencyClassification: "DHA Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 59011 },         
      { kind: "step", step: "Max", rate: 67725 },              
    ]
  },   
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS2",
    agencyClassification: "DHA Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 59640 },         
      { kind: "step", step: "Max", rate: 66749 },              
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS2",
    agencyClassification: "DHA Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 61668 },         
      { kind: "step", step: "Max", rate: 69018 },      
    ]
  }, 
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS3",
    agencyClassification: "DHA Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 67905 },         
      { kind: "step", step: "Max", rate: 73371 },        
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS3",
    agencyClassification: "DHA Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 70214 },         
      { kind: "step", step: "Max", rate: 75866 },                            
    ]
  }, 
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS4",
    agencyClassification: "DHA Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 84157 },         
      { kind: "step", step: "Max", rate: 90998 },                 
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS4",
    agencyClassification: "DHA Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 87018 },         
      { kind: "step", step: "Max", rate: 94092 },          
    ]
  },     
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS5",
    agencyClassification: "DHA Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 92155 },         
      { kind: "step", step: "Max", rate: 100140 },        
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS5",
    agencyClassification: "DHA Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 95288 },         
      { kind: "step", step: "Max", rate: 103545 },         
    ]
  }, 
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS6",
    agencyClassification: "DHA Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 101295 },         
      { kind: "step", step: "Max", rate: 116452 },                    
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "APS6",
    agencyClassification: "DHA Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 104793 },         
      { kind: "step", step: "Max", rate: 120411 },                                  
    ]
  },    
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 122963 },         
      { kind: "step", step: "Max", rate: 150065 },                                  
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 127144 },            
      { kind: "step", step: "Max", rate: 155167 },                           
    ]
  }, 
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 152378 },         
      { kind: "step", step: "Max", rate: 187494 },                          
    ]
  },
  {
    agencyId: "defence|defence-housing-australia-dha",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 157559 },             
      { kind: "step", step: "Max", rate: 193869 },                       
    ]
  }, 
  {
    agencyId: "defence|department-of-defence",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 54516 },  
      { kind: "step", step: "Top", rate: 60865 },              
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 57497 },         
      { kind: "step", step: "Top", rate: 62934 },              
    ]
  },   
  {
    agencyId: "defence|department-of-defence",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 61363 },         
      { kind: "step", step: "Top", rate: 68984 },              
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 63449 },         
      { kind: "step", step: "Top", rate: 71329 },      
    ]
  }, 
  {
    agencyId: "defence|department-of-defence",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 69898 },         
      { kind: "step", step: "Top", rate: 77016 },        
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 72275 },         
      { kind: "step", step: "Top", rate: 79635 },                            
    ]
  }, 
  {
    agencyId: "defence|department-of-defence",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 79176 },         
      { kind: "step", step: "Top", rate: 86438 },                 
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 81868 },         
      { kind: "step", step: "Top", rate: 89377 },          
    ]
  },     
  {
    agencyId: "defence|department-of-defence",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 86887 },         
      { kind: "step", step: "Top", rate: 93066 },        
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 89841 },         
      { kind: "step", step: "Top", rate: 96829 },         
    ]
  }, 
  {
    agencyId: "defence|department-of-defence",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 95187 },         
      { kind: "step", step: "Top", rate: 108734 },                    
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 99733 },         
      { kind: "step", step: "Top", rate: 112431 },                                  
    ]
  },    
  {
    agencyId: "defence|department-of-defence",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 120303 },         
      { kind: "step", step: "Top", rate: 135701 },                                  
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 124393 },            
      { kind: "step", step: "Top", rate: 140315 },                           
    ]
  }, 
  {
    agencyId: "defence|department-of-defence",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 139681 },         
      { kind: "step", step: "Top", rate: 167659 },                          
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 144430 },             
      { kind: "step", step: "Top", rate: 173359 },                       
    ]
  },  
  {
    agencyId: "defence|department-of-defence",
    classification: "EL2.1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 167660 },         
      { kind: "step", step: "Top", rate: 199525 },                          
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "EL2.1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 173360 },             
      { kind: "step", step: "Top", rate: 206309 },                       
    ]
  },  
  {
    agencyId: "defence|department-of-defence",
    classification: "EL2.2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 199526 },         
      { kind: "step", step: "Top", rate: 224464 },                          
    ]
  },
  {
    agencyId: "defence|department-of-defence",
    classification: "EL2.2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 206310 },             
      { kind: "step", step: "Top", rate: 232096 },                       
    ]
  },   
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS1",
    agencyClassification: "ASD Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 54516 },         
      { kind: "step", step: "Top", rate: 59683 },                  
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS1",
    agencyClassification: "ASD Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 57497 },         
      { kind: "step", step: "Top", rate: 61713 },           
    ]
  },   
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS2",
    agencyClassification: "ASD Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 60171 },         
      { kind: "step", step: "Top", rate: 67645 },      
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS2",
    agencyClassification: "ASD Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 62775 },         
      { kind: "step", step: "Top", rate: 69945 },       
    ]
  }, 
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS3",
    agencyClassification: "ASD Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 68541 },         
      { kind: "step", step: "Top", rate: 75521 },          
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS3",
    agencyClassification: "ASD Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 70871 },         
      { kind: "step", step: "Top", rate: 78089 },                              
    ]
  }, 
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS4",
    agencyClassification: "ASD Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 77638 },         
      { kind: "step", step: "Top", rate: 84760 },               
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS4",
    agencyClassification: "ASD Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 80278 },         
      { kind: "step", step: "Top", rate: 87641 },            
    ]
  },     
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS5",
    agencyClassification: "ASD Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 85200 },         
      { kind: "step", step: "Top", rate: 91809 },         
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS5",
    agencyClassification: "ASD Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 88834 },         
      { kind: "step", step: "Top", rate: 96829 },         
    ]
  }, 
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS6",
    agencyClassification: "ASD Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 94563 },         
      { kind: "step", step: "Top", rate: 106622 },                     
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "APS6",
    agencyClassification: "ASD Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 99734 },         
      { kind: "step", step: "Top", rate: 111701 },                                  
    ]
  },    
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL1",
    agencyClassification: "ASD Executive Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 117967 },         
      { kind: "step", step: "Top", rate: 133066 },                                  
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL1",
    agencyClassification: "ASD Executive Level 1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 121978 },         
      { kind: "step", step: "Top", rate: 137590 },                           
    ]
  }, 
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL2",
    agencyClassification: "ASD Executive Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 136967 },           
      { kind: "step", step: "Top", rate: 164403 },                          
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL2",
    agencyClassification: "ASD Executive Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 141624 },             
      { kind: "step", step: "Top", rate: 169993 },                       
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL2.1",
    agencyClassification: "ASD Executive Level 2.1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 164404 },           
      { kind: "step", step: "Top", rate: 195651 },                          
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL2.1",
    agencyClassification: "ASD Executive Level 2.1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 169994 },             
      { kind: "step", step: "Top", rate: 202303 },                       
    ]
  },  
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL2.2",
    agencyClassification: "ASD Executive Level 2.2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 195652 },           
      { kind: "step", step: "Top", rate: 220107 },                          
    ]
  },
  {
    agencyId: "defence|australian-signals-directorate-asd",
    classification: "EL2.2",
    agencyClassification: "ASD Executive Level 2.2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 202304 },             
      { kind: "step", step: "Top", rate: 227590 },                       
    ]
  },  

  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 54516 },  
      { kind: "step", step: "Top", rate: 60865 },              
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 57497 },         
      { kind: "step", step: "Top", rate: 62934 },              
    ]
  },   
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 61363 },         
      { kind: "step", step: "Top", rate: 68984 },              
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 63449 },         
      { kind: "step", step: "Top", rate: 71329 },      
    ]
  }, 
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 69898 },         
      { kind: "step", step: "Top", rate: 77016 },        
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 72275 },         
      { kind: "step", step: "Top", rate: 79635 },                            
    ]
  }, 
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 79176 },         
      { kind: "step", step: "Top", rate: 86438 },                 
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 81868 },         
      { kind: "step", step: "Top", rate: 89377 },          
    ]
  },     
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 86887 },         
      { kind: "step", step: "Top", rate: 93066 },        
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 89841 },         
      { kind: "step", step: "Top", rate: 96829 },         
    ]
  }, 
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 95187 },         
      { kind: "step", step: "Top", rate: 108734 },                    
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 99733 },         
      { kind: "step", step: "Top", rate: 112431 },                                  
    ]
  },    
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 120303 },         
      { kind: "step", step: "Top", rate: 135701 },                                  
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 124393 },            
      { kind: "step", step: "Top", rate: 140315 },                           
    ]
  }, 
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 139681 },         
      { kind: "step", step: "Top", rate: 167659 },                          
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 144430 },             
      { kind: "step", step: "Top", rate: 173359 },                       
    ]
  },  
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL2.1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 167660 },         
      { kind: "step", step: "Top", rate: 199525 },                          
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL2.1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 173360 },             
      { kind: "step", step: "Top", rate: 206309 },                       
    ]
  },  
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL2.2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Base", rate: 199526 },         
      { kind: "step", step: "Top", rate: 224464 },                          
    ]
  },
  {
    agencyId: "defence|australian-submarine-agency",
    classification: "EL2.2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Base", rate: 206310 },             
      { kind: "step", step: "Top", rate: 232096 },                       
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 62868 },           
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59452 },
      { kind: "step", step: 2, rate: 65006 },       
    ]
  },   
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67532 },
      { kind: "step", step: 2, rate: 70637 },
      { kind: "step", step: 3, rate: 71966 },  
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 69828 },
      { kind: "step", step: 2, rate: 73039 },
      { kind: "step", step: 3, rate: 74419 },  
    ]
  }, 
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75419 },
      { kind: "step", step: 2, rate: 78554 },       
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 77983 },
      { kind: "step", step: 2, rate: 81225 },                        
    ]
  }, 
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 82039 },
      { kind: "step", step: 2, rate: 84327 },
      { kind: "step", step: 3, rate: 87737 },             
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84828 },
      { kind: "step", step: 2, rate: 87194 },
      { kind: "step", step: 3, rate: 90720 },       
    ]
  },     
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90580 },
      { kind: "step", step: 2, rate: 92510 },
      { kind: "step", step: 3, rate: 96839 },       
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93660 },
      { kind: "step", step: 2, rate: 95655 },
      { kind: "step", step: 3, rate: 100132 },   
    ]
  }, 
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101833 },
      { kind: "step", step: 2, rate: 105146 },
      { kind: "step", step: 3, rate: 111979 },                 
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 105295 },
      { kind: "step", step: 2, rate: 108721 },
      { kind: "step", step: 3, rate: 115786 },                                
    ]
  },    
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 125220 },
      { kind: "step", step: 2, rate: 128226 },
      { kind: "step", step: 3, rate: 131437 },
      { kind: "step", step: 4, rate: 138394 },                              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 129477 },
      { kind: "step", step: 2, rate: 132586 },
      { kind: "step", step: 3, rate: 135906 },
      { kind: "step", step: 4, rate: 143099 },                  
    ]
  }, 
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147352 },
      { kind: "step", step: 2, rate: 156258 },
      { kind: "step", step: 3, rate: 165620 },
      { kind: "step", step: 4, rate: 176877 },     
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|department-of-employment-and-workplace-relations-dewr",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152362 },
      { kind: "step", step: 2, rate: 161571 },
      { kind: "step", step: 3, rate: 171251 },
      { kind: "step", step: 4, rate: 182891 }, 
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56086 },
      { kind: "step", step: 2, rate: 61322 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57993 },
      { kind: "step", step: 2, rate: 63407 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 65875 },
      { kind: "step", step: 2, rate: 68899 },
      { kind: "step", step: 3, rate: 70196 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68115 },
      { kind: "step", step: 2, rate: 71242 },
      { kind: "step", step: 3, rate: 72583 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 73565 },
      { kind: "step", step: 2, rate: 76623 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76066 },
      { kind: "step", step: 2, rate: 79228 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80023 },
      { kind: "step", step: 2, rate: 82254 },
      { kind: "step", step: 3, rate: 85851 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82744 },
      { kind: "step", step: 2, rate: 85051 },
      { kind: "step", step: 3, rate: 88491 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88355 },
      { kind: "step", step: 2, rate: 90237 },
      { kind: "step", step: 3, rate: 94459 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91359 },
      { kind: "step", step: 2, rate: 93305 },
      { kind: "step", step: 3, rate: 97671 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 99328 },
      { kind: "step", step: 2, rate: 102561 },
      { kind: "step", step: 3, rate: 109228 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102705 },
      { kind: "step", step: 2, rate: 106048 },
      { kind: "step", step: 3, rate: 112942 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122141 },
      { kind: "step", step: 2, rate: 125075 },
      { kind: "step", step: 3, rate: 128208 },
      { kind: "step", step: 4, rate: 134992 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126294 },
      { kind: "step", step: 2, rate: 129328 },
      { kind: "step", step: 3, rate: 132567 },
      { kind: "step", step: 4, rate: 139582 },    
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143731 },
      { kind: "step", step: 2, rate: 152419 },
      { kind: "step", step: 3, rate: 161549 },
      { kind: "step", step: 4, rate: 172530 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|asbestos-and-silica-safety-and-eradication-agency",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148618 },
      { kind: "step", step: 2, rate: 157601 },
      { kind: "step", step: 3, rate: 167042 },
      { kind: "step", step: 4, rate: 178396 },    
    ]
  },    
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57740 },
      { kind: "step", step: 2, rate: 58701 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59703 },
      { kind: "step", step: 2, rate: 60946 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64878 },
      { kind: "step", step: 2, rate: 66096 },
      { kind: "step", step: 3, rate: 67195 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 67084 },
      { kind: "step", step: 2, rate: 68343 },
      { kind: "step", step: 3, rate: 69480 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72149 },
      { kind: "step", step: 2, rate: 73345 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74602 },
      { kind: "step", step: 2, rate: 76820 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77452 },
      { kind: "step", step: 2, rate: 80583 },
      { kind: "step", step: 3, rate: 81920 }, 
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80085 },
      { kind: "step", step: 2, rate: 83323 },
      { kind: "step", step: 3, rate: 84705 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84965 },
      { kind: "step", step: 2, rate: 88944 },
      { kind: "step", step: 3, rate: 90900 }, 
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91968 },
      { kind: "step", step: 3, rate: 93991 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96572 },
      { kind: "step", step: 2, rate: 102850 },
      { kind: "step", step: 3, rate: 105910 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99855 },
      { kind: "step", step: 2, rate: 106347 },
      { kind: "step", step: 3, rate: 109511 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117774 },
      { kind: "step", step: 2, rate: 120718 },
      { kind: "step", step: 3, rate: 127110 },
      { kind: "step", step: 4, rate: 129220 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121778 },
      { kind: "step", step: 2, rate: 124822 },
      { kind: "step", step: 3, rate: 131432 }, 
      { kind: "step", step: 4, rate: 133613 },   
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143517 },
      { kind: "step", step: 2, rate: 152115 },
      { kind: "step", step: 3, rate: 162456 }, 
      { kind: "step", step: 4, rate: 165154 },              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|australian-skills-quality-authority-asqa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148397 },
      { kind: "step", step: 2, rate: 157287 },
      { kind: "step", step: 3, rate: 167980 },
      { kind: "step", step: 4, rate: 170769 },    
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56587 },
      { kind: "step", step: 2, rate: 58821 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58511 },
      { kind: "step", step: 2, rate: 60947 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64180 },
      { kind: "step", step: 2, rate: 65928 },
      { kind: "step", step: 3, rate: 67749 },
      { kind: "step", step: 4, rate: 70287 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66362 },
      { kind: "step", step: 2, rate: 68170 },
      { kind: "step", step: 3, rate: 70052 },
      { kind: "step", step: 4, rate: 72677 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72222 },
      { kind: "step", step: 2, rate: 73984 },
      { kind: "step", step: 3, rate: 75829 }, 
      { kind: "step", step: 4, rate: 77881 },              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74678 },
      { kind: "step", step: 2, rate: 76499 },
      { kind: "step", step: 3, rate: 78407 },
      { kind: "step", step: 4, rate: 80529 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80412 },
      { kind: "step", step: 2, rate: 82851 },
      { kind: "step", step: 3, rate: 84980 },
      { kind: "step", step: 4, rate: 87262 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83146 },
      { kind: "step", step: 2, rate: 85668 },
      { kind: "step", step: 3, rate: 87869 },
      { kind: "step", step: 4, rate: 90229 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89645 },
      { kind: "step", step: 2, rate: 92374 },
      { kind: "step", step: 3, rate: 95005 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92693 },
      { kind: "step", step: 2, rate: 95515 },
      { kind: "step", step: 3, rate: 98235 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 97090 },
      { kind: "step", step: 2, rate: 99822 },
      { kind: "step", step: 3, rate: 102586 },
      { kind: "step", step: 4, rate: 106727 },
      { kind: "step", step: 5, rate: 111682 },                     
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100391 },
      { kind: "step", step: 2, rate: 103216 },
      { kind: "step", step: 3, rate: 106074 },
      { kind: "step", step: 4, rate: 110356 },
      { kind: "step", step: 5, rate: 115479 },   
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123597 },
      { kind: "step", step: 2, rate: 128479 },
      { kind: "step", step: 3, rate: 133756 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127799 },
      { kind: "step", step: 2, rate: 132847 },
      { kind: "step", step: 3, rate: 138304 },    
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 142508 },
      { kind: "step", step: 2, rate: 147831 },
      { kind: "step", step: 3, rate: 153261 },
      { kind: "step", step: 4, rate: 161468 },
      { kind: "step", step: 5, rate: 166782 },                     
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|fair-work-commission-fwc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 147353 },
      { kind: "step", step: 2, rate: 152857 },
      { kind: "step", step: 3, rate: 158472 },
      { kind: "step", step: 4, rate: 166958 },
      { kind: "step", step: 5, rate: 172453 },          
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 58779 },
      { kind: "step", step: 2, rate: 61081 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 60777 },
      { kind: "step", step: 2, rate: 63158 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66601 },
      { kind: "step", step: 2, rate: 68398 },
      { kind: "step", step: 3, rate: 70276 },
      { kind: "step", step: 4, rate: 72889 },                
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68865 },
      { kind: "step", step: 2, rate: 70724 },
      { kind: "step", step: 3, rate: 72665 },
      { kind: "step", step: 4, rate: 75367 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 74881 },
      { kind: "step", step: 2, rate: 76699 },
      { kind: "step", step: 3, rate: 78597 },
      { kind: "step", step: 4, rate: 80713 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 77427 },
      { kind: "step", step: 2, rate: 79307 },
      { kind: "step", step: 3, rate: 81269 },
      { kind: "step", step: 4, rate: 83457 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 83317 },
      { kind: "step", step: 2, rate: 85830 },
      { kind: "step", step: 3, rate: 88022 },
      { kind: "step", step: 4, rate: 90372 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 86150 },
      { kind: "step", step: 2, rate: 88748 },
      { kind: "step", step: 3, rate: 91015 },
      { kind: "step", step: 4, rate: 93445 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 92824 },
      { kind: "step", step: 2, rate: 95635 },
      { kind: "step", step: 3, rate: 98346 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 95980 },
      { kind: "step", step: 2, rate: 98887 },
      { kind: "step", step: 3, rate: 101690 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 100493 },
      { kind: "step", step: 2, rate: 103308 },
      { kind: "step", step: 3, rate: 106154 },
      { kind: "step", step: 4, rate: 110420 },
      { kind: "step", step: 5, rate: 115525 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 103910 },
      { kind: "step", step: 2, rate: 106820 },
      { kind: "step", step: 3, rate: 109763 },
      { kind: "step", step: 4, rate: 114174 },
      { kind: "step", step: 5, rate: 119453 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 127792 },
      { kind: "step", step: 2, rate: 132820 },
      { kind: "step", step: 3, rate: 137915 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 132137 },
      { kind: "step", step: 2, rate: 137336 },
      { kind: "step", step: 3, rate: 142604 },    
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147269 },
      { kind: "step", step: 2, rate: 152752 },
      { kind: "step", step: 3, rate: 158345 }, 
      { kind: "step", step: 4, rate: 166796 },
      { kind: "step", step: 5, rate: 172270 },              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|office-of-the-fair-work-ombudsman",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152276 },
      { kind: "step", step: 2, rate: 157946 },
      { kind: "step", step: 3, rate: 163729 },
      { kind: "step", step: 4, rate: 172467 },
      { kind: "step", step: 5, rate: 178127 },          
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57828 },
      { kind: "step", step: 2, rate: 63231 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59794 },
      { kind: "step", step: 2, rate: 65381 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67922 },
      { kind: "step", step: 2, rate: 71052 },
      { kind: "step", step: 3, rate: 72417 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70231 },
      { kind: "step", step: 2, rate: 73468 },
      { kind: "step", step: 3, rate: 74879 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75844 },
      { kind: "step", step: 2, rate: 78990 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 78423 },
      { kind: "step", step: 2, rate: 81676 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 82498 },
      { kind: "step", step: 2, rate: 84681 },
      { kind: "step", step: 3, rate: 88764 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 85303 },
      { kind: "step", step: 2, rate: 87560 },
      { kind: "step", step: 3, rate: 91782 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 91117 },
      { kind: "step", step: 2, rate: 92897 },
      { kind: "step", step: 3, rate: 97255 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 94215 },
      { kind: "step", step: 2, rate: 96055 },
      { kind: "step", step: 3, rate: 100562 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 102353 },
      { kind: "step", step: 2, rate: 105594 },
      { kind: "step", step: 3, rate: 112763 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 105833 },
      { kind: "step", step: 2, rate: 109184 },
      { kind: "step", step: 3, rate: 116597 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 125811 },
      { kind: "step", step: 2, rate: 128796 },
      { kind: "step", step: 3, rate: 132020 },
      { kind: "step", step: 4, rate: 139900 },              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 130089 },
      { kind: "step", step: 2, rate: 133175 },
      { kind: "step", step: 3, rate: 136509 },
      { kind: "step", step: 4, rate: 144657 },    
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 148255 },
      { kind: "step", step: 2, rate: 156887 },
      { kind: "step", step: 3, rate: 166335 },
      { kind: "step", step: 4, rate: 177713 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|safe-work-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 153296 },
      { kind: "step", step: 2, rate: 162221 },
      { kind: "step", step: 3, rate: 171990 },
      { kind: "step", step: 4, rate: 183755 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55662 },
      { kind: "step", step: 2, rate: 57152 },
      { kind: "step", step: 3, rate: 59478 },
      { kind: "step", step: 4, rate: 60885 },
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57555 },
      { kind: "step", step: 2, rate: 59095 },
      { kind: "step", step: 3, rate: 61500 },
      { kind: "step", step: 4, rate: 62995 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62548 },
      { kind: "step", step: 2, rate: 64173 },
      { kind: "step", step: 3, rate: 65821 },
      { kind: "step", step: 4, rate: 67449 },
      { kind: "step", step: 5, rate: 69260 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64675 },
      { kind: "step", step: 2, rate: 66355 },
      { kind: "step", step: 3, rate: 68059 },
      { kind: "step", step: 4, rate: 69742 },
      { kind: "step", step: 5, rate: 71615 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71386 },
      { kind: "step", step: 2, rate: 73181 },
      { kind: "step", step: 3, rate: 75065 },
      { kind: "step", step: 4, rate: 77491 },              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73813 },
      { kind: "step", step: 2, rate: 75669 },
      { kind: "step", step: 3, rate: 77617 },
      { kind: "step", step: 4, rate: 80126 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 79552 },
      { kind: "step", step: 2, rate: 81603 },
      { kind: "step", step: 3, rate: 83680 },
      { kind: "step", step: 4, rate: 87004 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82257 },
      { kind: "step", step: 2, rate: 84378 },
      { kind: "step", step: 3, rate: 86525 },
      { kind: "step", step: 4, rate: 89962 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89709 },
      { kind: "step", step: 2, rate: 81603 },
      { kind: "step", step: 3, rate: 83680 },
      { kind: "step", step: 4, rate: 87004 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92759 },
      { kind: "step", step: 2, rate: 95355 },
      { kind: "step", step: 3, rate: 97112 },
      { kind: "step", step: 4, rate: 99511 },    
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 99985 },
      { kind: "step", step: 2, rate: 103799 },
      { kind: "step", step: 3, rate: 107789 }, 
      { kind: "step", step: 4, rate: 110946 },              
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 103384 },
      { kind: "step", step: 2, rate: 107328 },
      { kind: "step", step: 3, rate: 111454 },
      { kind: "step", step: 4, rate: 114718 },
    ]
  },  
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123660 },
      { kind: "step", step: 2, rate: 128799 },
      { kind: "step", step: 3, rate: 134984 },
      { kind: "step", step: 4, rate: 141165 },
      { kind: "step", step: 5, rate: 147347 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127864 },
      { kind: "step", step: 2, rate: 133178 },
      { kind: "step", step: 3, rate: 139573 }, 
      { kind: "step", step: 4, rate: 145965 },
      { kind: "step", step: 5, rate: 152357 },   
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 154708 },
      { kind: "step", step: 2, rate: 161657 },
      { kind: "step", step: 3, rate: 168604 },
      { kind: "step", step: 4, rate: 175555 },               
    ]
  },
  {
    agencyId: "employment-and-workplace-relations|comcare",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 159968 },
      { kind: "step", step: 2, rate: 167153 },
      { kind: "step", step: 3, rate: 174337 },
      { kind: "step", step: 4, rate: 181524 },    
    ]
  },                                    
  {
    agencyId: "finance|department-of-finance",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 55495 },         
      { kind: "step", step: 1, rate: 56332 },
      { kind: "step", step: 2, rate: 57168 },
      { kind: "step", step: 3, rate: 58424 },
      { kind: "step", step: 4, rate: 60096 }, 
      { kind: "step", step: 5, rate: 61908 },   
      { kind: "step", step: 6, rate: 64003 },                  
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 57497 },         
      { kind: "step", step: 1, rate: 58247 },
      { kind: "step", step: 2, rate: 59112 },
      { kind: "step", step: 3, rate: 60410 },
      { kind: "step", step: 4, rate: 62139 }, 
      { kind: "step", step: 5, rate: 64013 },   
      { kind: "step", step: 6, rate: 66179 },           
    ]
  },   
  {
    agencyId: "finance|department-of-finance",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 63723 },         
      { kind: "step", step: 1, rate: 64836 },
      { kind: "step", step: 2, rate: 66090 },
      { kind: "step", step: 3, rate: 67348 },
      { kind: "step", step: 4, rate: 68883 }, 
      { kind: "step", step: 5, rate: 70834 },   
      { kind: "step", step: 6, rate: 72926 },  
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 65890 },         
      { kind: "step", step: 1, rate: 67040 },
      { kind: "step", step: 2, rate: 68337 },
      { kind: "step", step: 3, rate: 69638 },
      { kind: "step", step: 4, rate: 71225 }, 
      { kind: "step", step: 5, rate: 73242 },   
      { kind: "step", step: 6, rate: 75405 },               
    ]
  }, 
  {
    agencyId: "finance|department-of-finance",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 70834 },         
      { kind: "step", step: 1, rate: 72645 },
      { kind: "step", step: 2, rate: 74599 },
      { kind: "step", step: 3, rate: 76271 },
      { kind: "step", step: 4, rate: 78224 }, 
      { kind: "step", step: 5, rate: 79897 },   
      { kind: "step", step: 6, rate: 81709 },           
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 73242 },         
      { kind: "step", step: 1, rate: 75115 },
      { kind: "step", step: 2, rate: 77135 },
      { kind: "step", step: 3, rate: 78864 },
      { kind: "step", step: 4, rate: 80884 }, 
      { kind: "step", step: 5, rate: 82613 },   
      { kind: "step", step: 6, rate: 84487 },                               
    ]
  }, 
  {
    agencyId: "finance|department-of-finance",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 79827 },         
      { kind: "step", step: 1, rate: 81847 },
      { kind: "step", step: 2, rate: 83383 },
      { kind: "step", step: 3, rate: 85473 },
      { kind: "step", step: 4, rate: 87147 }, 
      { kind: "step", step: 5, rate: 89098 },   
      { kind: "step", step: 6, rate: 91189 },                 
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 82613 },         
      { kind: "step", step: 1, rate: 84630 },
      { kind: "step", step: 2, rate: 86218 },
      { kind: "step", step: 3, rate: 88379 },
      { kind: "step", step: 4, rate: 90110 }, 
      { kind: "step", step: 5, rate: 92127 },   
      { kind: "step", step: 6, rate: 94289 },            
    ]
  },     
  {
    agencyId: "finance|department-of-finance",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 89098 },         
      { kind: "step", step: 1, rate: 90631 },
      { kind: "step", step: 2, rate: 92725 },
      { kind: "step", step: 3, rate: 94398 },
      { kind: "step", step: 4, rate: 96209 }, 
      { kind: "step", step: 5, rate: 98022 },   
      { kind: "step", step: 6, rate: 99973 },         
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 92127 },
      { kind: "step", step: 1, rate: 93712 },         
      { kind: "step", step: 2, rate: 95878 },
      { kind: "step", step: 3, rate: 97608 },
      { kind: "step", step: 4, rate: 99480 },
      { kind: "step", step: 5, rate: 101355 }, 
      { kind: "step", step: 6, rate: 103372 },           
    ]
  }, 
  {
    agencyId: "finance|department-of-finance",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 98022 },         
      { kind: "step", step: 1, rate: 100392 },
      { kind: "step", step: 2, rate: 102624 },
      { kind: "step", step: 3, rate: 105133 },
      { kind: "step", step: 4, rate: 107363 }, 
      { kind: "step", step: 5, rate: 109733 },   
      { kind: "step", step: 6, rate: 112106 },       
      { kind: "step", step: 7, rate: 119634 },
      { kind: "step", step: "Maximum guidepoint", rate: 127719 },                        
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 101355 },         
      { kind: "step", step: 1, rate: 103805 },
      { kind: "step", step: 2, rate: 106113 },
      { kind: "step", step: 3, rate: 108708 },
      { kind: "step", step: 4, rate: 111013 }, 
      { kind: "step", step: 5, rate: 113464 },   
      { kind: "step", step: 6, rate: 115918 },     
      { kind: "step", step: 7, rate: 123702 },
      { kind: "step", step: "Maximum guidepoint", rate: 132061 },                                      
    ]
  },    
  {
    agencyId: "finance|department-of-finance",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 126885 },         
      { kind: "step", step: 1, rate: 129534 },
      { kind: "step", step: 2, rate: 132044 },
      { kind: "step", step: 3, rate: 134832 },
      { kind: "step", step: 4, rate: 137702 }, 
      { kind: "step", step: 5, rate: 139992 },   
      { kind: "step", step: 6, rate: 144312 },  
      { kind: "step", step: 7, rate: 153655 },
      { kind: "step", step: "Maximum guidepoint", rate: 163694 },                                  
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 131199 },         
      { kind: "step", step: 1, rate: 133938 },
      { kind: "step", step: 2, rate: 136533 },
      { kind: "step", step: 3, rate: 139416 },
      { kind: "step", step: 4, rate: 141867 }, 
      { kind: "step", step: 5, rate: 144752 },   
      { kind: "step", step: 6, rate: 149219 },   
      { kind: "step", step: 7, rate: 158879 },      
      { kind: "step", step: "Maximum guidepoint", rate: 169260 },                           
    ]
  }, 
  {
    agencyId: "finance|department-of-finance",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 154910 },         
      { kind: "step", step: 1, rate: 157419 },
      { kind: "step", step: 2, rate: 160486 },
      { kind: "step", step: 3, rate: 163555 },
      { kind: "step", step: 4, rate: 166343 }, 
      { kind: "step", step: 5, rate: 169410 },   
      { kind: "step", step: 6, rate: 172339 },
      { kind: "step", step: 7, rate: 182377 },      
      { kind: "step", step: "Maximum guidepoint", rate: 192974 },                          
    ]
  },
  {
    agencyId: "finance|department-of-finance",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 160177 },         
      { kind: "step", step: 1, rate: 162771 },
      { kind: "step", step: 2, rate: 165943 },
      { kind: "step", step: 3, rate: 169116 },
      { kind: "step", step: 4, rate: 171999 }, 
      { kind: "step", step: 5, rate: 175170 },   
      { kind: "step", step: 6, rate: 178199 }, 
      { kind: "step", step: 7, rate: 188578 },      
      { kind: "step", step: "Maximum guidepoint", rate: 199535 },                       
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55125 },
      { kind: "step", step: 3, rate: 56618 },
      { kind: "step", step: 4, rate: 58946 },              
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58543 },
      { kind: "step", step: 4, rate: 60950 },        
    ]
  },   
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60360 },
      { kind: "step", step: 2, rate: 62474 },
      { kind: "step", step: 3, rate: 64595 },
      { kind: "step", step: 4, rate: 66934 },   
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64598 },
      { kind: "step", step: 3, rate: 66791 },
      { kind: "step", step: 4, rate: 69210 },  
    ]
  }, 
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 68750 },
      { kind: "step", step: 2, rate: 70948 },
      { kind: "step", step: 3, rate: 73148 },
      { kind: "step", step: 4, rate: 75343 },    
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71088 },
      { kind: "step", step: 2, rate: 73360 },
      { kind: "step", step: 3, rate: 75635 },
      { kind: "step", step: 4, rate: 77905 },                              
    ]
  }, 
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 76626 },
      { kind: "step", step: 2, rate: 79076 },
      { kind: "step", step: 3, rate: 81526 },
      { kind: "step", step: 4, rate: 83970 },             
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79231 },
      { kind: "step", step: 2, rate: 81765 },
      { kind: "step", step: 3, rate: 84298 },
      { kind: "step", step: 4, rate: 86825 },        
    ]
  },     
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85465 },
      { kind: "step", step: 2, rate: 88199 },
      { kind: "step", step: 3, rate: 90937 },
      { kind: "step", step: 4, rate: 93663 },     
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91198 },
      { kind: "step", step: 3, rate: 94029 },
      { kind: "step", step: 4, rate: 96848 },         
    ]
  }, 
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94603 },
      { kind: "step", step: 2, rate: 97193 },
      { kind: "step", step: 3, rate: 102079 },
      { kind: "step", step: 4, rate: 106034 }, 
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 100498 },
      { kind: "step", step: 3, rate: 105550 },
      { kind: "step", step: 4, rate: 109639 }, 
      { kind: "step", step: 5, rate: 111701 },                               
    ]
  },    
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 118146 },
      { kind: "step", step: 2, rate: 121929 },
      { kind: "step", step: 3, rate: 127593 },
      { kind: "step", step: 4, rate: 131417 }, 
      { kind: "step", step: 5, rate: 133138 },                                
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122163 },
      { kind: "step", step: 2, rate: 126075 },
      { kind: "step", step: 3, rate: 131931 },
      { kind: "step", step: 4, rate: 135885 }, 
      { kind: "step", step: 5, rate: 137665 },                             
    ]
  }, 
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139681 },
      { kind: "step", step: 2, rate: 140833 },
      { kind: "step", step: 3, rate: 145480 },
      { kind: "step", step: 4, rate: 150140 }, 
      { kind: "step", step: 5, rate: 154450 },   
      { kind: "step", step: 6, rate: 164008 },  
    ]
  },
  {
    agencyId: "finance|australian-electoral-commission-aec",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 144430 },
      { kind: "step", step: 2, rate: 145621 },
      { kind: "step", step: 3, rate: 150426 },
      { kind: "step", step: 4, rate: 155245 }, 
      { kind: "step", step: 5, rate: 159701 },   
      { kind: "step", step: 6, rate: 169584 },                     
    ]
  },  
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55808 },
      { kind: "step", step: 3, rate: 58103 },
      { kind: "step", step: 4, rate: 59673 },               
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57705 },
      { kind: "step", step: 3, rate: 60079 },
      { kind: "step", step: 4, rate: 61702 },     
    ]
  },   
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61133 },
      { kind: "step", step: 2, rate: 62741 },
      { kind: "step", step: 3, rate: 64371 },
      { kind: "step", step: 4, rate: 65976 }, 
      { kind: "step", step: 5, rate: 67761 },   
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63212 },
      { kind: "step", step: 2, rate: 64874 },
      { kind: "step", step: 3, rate: 66560 },
      { kind: "step", step: 4, rate: 68219 }, 
      { kind: "step", step: 5, rate: 70065 },    
    ]
  }, 
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69527 },
      { kind: "step", step: 2, rate: 71296 },
      { kind: "step", step: 3, rate: 73139 },
      { kind: "step", step: 4, rate: 75117 },     
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71891 },
      { kind: "step", step: 2, rate: 73720 },
      { kind: "step", step: 3, rate: 75626 },
      { kind: "step", step: 4, rate: 77671 },                           
    ]
  }, 
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77931 },
      { kind: "step", step: 2, rate: 79957 },
      { kind: "step", step: 3, rate: 82009 },
      { kind: "step", step: 4, rate: 84223 },             
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80581 },
      { kind: "step", step: 2, rate: 82676 },
      { kind: "step", step: 3, rate: 84797 },
      { kind: "step", step: 4, rate: 87087 },          
    ]
  },     
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86882 },
      { kind: "step", step: 2, rate: 89329 },
      { kind: "step", step: 3, rate: 91742 },
      { kind: "step", step: 4, rate: 94673 },     
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89836 },
      { kind: "step", step: 2, rate: 92366 },
      { kind: "step", step: 3, rate: 94861 },
      { kind: "step", step: 4, rate: 97892 },         
    ]
  }, 
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95804 },
      { kind: "step", step: 2, rate: 100623 },
      { kind: "step", step: 3, rate: 104521 },
      { kind: "step", step: 4, rate: 107342 }, 
      { kind: "step", step: 5, rate: 112517 },                    
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 104044 },
      { kind: "step", step: 3, rate: 108075 },
      { kind: "step", step: 4, rate: 110992 }, 
      { kind: "step", step: 5, rate: 116343 },                                 
    ]
  },    
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 124015 },
      { kind: "step", step: 2, rate: 133324 },
      { kind: "step", step: 3, rate: 137475 },                             
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 128232 },
      { kind: "step", step: 2, rate: 137857 },
      { kind: "step", step: 3, rate: 142149 },                     
    ]
  }, 
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143080 },
      { kind: "step", step: 2, rate: 151268 },
      { kind: "step", step: 3, rate: 161862 },
      { kind: "step", step: 4, rate: 166962 }, 
      { kind: "step", step: 5, rate: 170540 },                           
    ]
  },
  {
    agencyId: "finance|digital-transformation-agency-dta",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148762 },
      { kind: "step", step: 2, rate: 156411 },
      { kind: "step", step: 3, rate: 167365 },
      { kind: "step", step: 4, rate: 172639 }, 
      { kind: "step", step: 5, rate: 176338 },                        
    ]
  },  
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55227 },
      { kind: "step", step: 3, rate: 56047 },
      { kind: "step", step: 4, rate: 57278 }, 
      { kind: "step", step: 5, rate: 58918 },   
      { kind: "step", step: 6, rate: 60696 },
      { kind: "step", step: 7, rate: 62747 },                        
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57947 },
      { kind: "step", step: 2, rate: 57105 },
      { kind: "step", step: 3, rate: 57953 },
      { kind: "step", step: 4, rate: 59225 }, 
      { kind: "step", step: 5, rate: 60921 },   
      { kind: "step", step: 6, rate: 62760 },
      { kind: "step", step: 7, rate: 64880 },                 
    ]
  },   
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62473 },
      { kind: "step", step: 2, rate: 63564 },
      { kind: "step", step: 3, rate: 64795 },
      { kind: "step", step: 4, rate: 66025 }, 
      { kind: "step", step: 5, rate: 67350 },   
      { kind: "step", step: 6, rate: 69444 },
      { kind: "step", step: 7, rate: 71494 },            
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64597 },
      { kind: "step", step: 2, rate: 65725 },
      { kind: "step", step: 3, rate: 66998 },
      { kind: "step", step: 4, rate: 68270 }, 
      { kind: "step", step: 5, rate: 69826 },   
      { kind: "step", step: 6, rate: 71805 },   
      { kind: "step", step: 7, rate: 73925 },          
    ]
  }, 
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69444 },
      { kind: "step", step: 2, rate: 71221 },
      { kind: "step", step: 3, rate: 73135 },
      { kind: "step", step: 4, rate: 74776 }, 
      { kind: "step", step: 5, rate: 76690 },   
      { kind: "step", step: 6, rate: 78330 },  
      { kind: "step", step: 7, rate: 80105 },               
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71805 },
      { kind: "step", step: 2, rate: 73643 },
      { kind: "step", step: 3, rate: 75622 },
      { kind: "step", step: 4, rate: 77318 }, 
      { kind: "step", step: 5, rate: 79297 },   
      { kind: "step", step: 6, rate: 80993 }, 
      { kind: "step", step: 7, rate: 82829 },                                    
    ]
  }, 
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78330 },
      { kind: "step", step: 2, rate: 80243 },
      { kind: "step", step: 3, rate: 81748 },
      { kind: "step", step: 4, rate: 83798 }, 
      { kind: "step", step: 5, rate: 85439 },   
      { kind: "step", step: 6, rate: 87352 },    
      { kind: "step", step: 7, rate: 89401 },                   
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80993 },
      { kind: "step", step: 2, rate: 82971 },
      { kind: "step", step: 3, rate: 84527 },
      { kind: "step", step: 4, rate: 86647 }, 
      { kind: "step", step: 5, rate: 88344 },   
      { kind: "step", step: 6, rate: 90322 },        
      { kind: "step", step: 7, rate: 92441 },          
    ]
  },     
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87352 },
      { kind: "step", step: 2, rate: 88854 },
      { kind: "step", step: 3, rate: 90904 },
      { kind: "step", step: 4, rate: 92545 }, 
      { kind: "step", step: 5, rate: 94323 },   
      { kind: "step", step: 6, rate: 96101 },  
      { kind: "step", step: 7, rate: 98013 },             
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90322 },
      { kind: "step", step: 2, rate: 91875 },
      { kind: "step", step: 3, rate: 93995 },
      { kind: "step", step: 4, rate: 95692 }, 
      { kind: "step", step: 5, rate: 97530 },   
      { kind: "step", step: 6, rate: 99368 },   
      { kind: "step", step: 7, rate: 101345 },
    ]
  }, 
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96101 },
      { kind: "step", step: 2, rate: 98423 },
      { kind: "step", step: 3, rate: 100611 },
      { kind: "step", step: 4, rate: 103069 }, 
      { kind: "step", step: 5, rate: 105258 },   
      { kind: "step", step: 6, rate: 107580 },
      { kind: "step", step: 7, rate: 109906 },
      { kind: "step", step: 8, rate: 117289 },
      { kind: "step", step: "Maximum guidepoint", rate: 125215 },                                        
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 101769 },
      { kind: "step", step: 3, rate: 104032 },
      { kind: "step", step: 4, rate: 106573 }, 
      { kind: "step", step: 5, rate: 108837 },   
      { kind: "step", step: 6, rate: 111238 },
      { kind: "step", step: 7, rate: 113643 },
      { kind: "step", step: 8, rate: 121277 },
      { kind: "step", step: "Maximum guidepoint", rate: 129472 },                                        
    ]
  },    
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 124395 },
      { kind: "step", step: 2, rate: 126993 },
      { kind: "step", step: 3, rate: 129454 },
      { kind: "step", step: 4, rate: 132189 }, 
      { kind: "step", step: 5, rate: 134510 },   
      { kind: "step", step: 6, rate: 137246 },  
      { kind: "step", step: 7, rate: 141481 },
      { kind: "step", step: 8, rate: 150642 },
      { kind: "step", step: "Maximum guidepoint", rate: 160482 },                                  
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 128624 },
      { kind: "step", step: 2, rate: 131311 },
      { kind: "step", step: 3, rate: 133855 },
      { kind: "step", step: 4, rate: 136683 }, 
      { kind: "step", step: 5, rate: 139083 },   
      { kind: "step", step: 6, rate: 141912 },   
      { kind: "step", step: 7, rate: 146291 },
      { kind: "step", step: 8, rate: 155764 },
      { kind: "step", step: "Maximum guidepoint", rate: 165938 },                           
    ]
  }, 
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 151871 },
      { kind: "step", step: 2, rate: 154332 },
      { kind: "step", step: 3, rate: 157338 },
      { kind: "step", step: 4, rate: 160345 }, 
      { kind: "step", step: 5, rate: 163081 },   
      { kind: "step", step: 6, rate: 166087 },
      { kind: "step", step: 7, rate: 168959 },
      { kind: "step", step: 8, rate: 178799 },
      { kind: "step", step: "Maximum guidepoint", rate: 189189 },                          
    ]
  },
  {
    agencyId: "finance|independent-parliamentary-expenses-authority-ipea",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 157035 },
      { kind: "step", step: 2, rate: 159579 },
      { kind: "step", step: 3, rate: 162687 },
      { kind: "step", step: 4, rate: 165797 }, 
      { kind: "step", step: 5, rate: 168626 },   
      { kind: "step", step: 6, rate: 171734 }, 
      { kind: "step", step: 7, rate: 174704 },
      { kind: "step", step: 8, rate: 184878 },
      { kind: "step", step: "Maximum guidepoint", rate: 195621 },                      
    ]
  },  
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 55495 },         
      { kind: "step", step: 1, rate: 56332 },
      { kind: "step", step: 2, rate: 57168 },
      { kind: "step", step: 3, rate: 58424 },
      { kind: "step", step: 4, rate: 60096 }, 
      { kind: "step", step: 5, rate: 61908 },   
      { kind: "step", step: 6, rate: 64003 },                  
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 57497 },         
      { kind: "step", step: 1, rate: 58247 },
      { kind: "step", step: 2, rate: 59112 },
      { kind: "step", step: 3, rate: 60410 },
      { kind: "step", step: 4, rate: 62139 }, 
      { kind: "step", step: 5, rate: 64013 },   
      { kind: "step", step: 6, rate: 66179 },           
    ]
  },   
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 63723 },         
      { kind: "step", step: 1, rate: 64836 },
      { kind: "step", step: 2, rate: 66090 },
      { kind: "step", step: 3, rate: 67348 },
      { kind: "step", step: 4, rate: 68883 }, 
      { kind: "step", step: 5, rate: 70834 },   
      { kind: "step", step: 6, rate: 72926 },  
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 65890 },         
      { kind: "step", step: 1, rate: 67040 },
      { kind: "step", step: 2, rate: 68337 },
      { kind: "step", step: 3, rate: 69638 },
      { kind: "step", step: 4, rate: 71225 }, 
      { kind: "step", step: 5, rate: 73242 },   
      { kind: "step", step: 6, rate: 75405 },               
    ]
  }, 
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 70834 },         
      { kind: "step", step: 1, rate: 72645 },
      { kind: "step", step: 2, rate: 74599 },
      { kind: "step", step: 3, rate: 76271 },
      { kind: "step", step: 4, rate: 78224 }, 
      { kind: "step", step: 5, rate: 79897 },   
      { kind: "step", step: 6, rate: 81709 },           
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 73242 },         
      { kind: "step", step: 1, rate: 75115 },
      { kind: "step", step: 2, rate: 77135 },
      { kind: "step", step: 3, rate: 78864 },
      { kind: "step", step: 4, rate: 80884 }, 
      { kind: "step", step: 5, rate: 82613 },   
      { kind: "step", step: 6, rate: 84487 },                               
    ]
  }, 
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 79827 },         
      { kind: "step", step: 1, rate: 81847 },
      { kind: "step", step: 2, rate: 83383 },
      { kind: "step", step: 3, rate: 85473 },
      { kind: "step", step: 4, rate: 87147 }, 
      { kind: "step", step: 5, rate: 89098 },   
      { kind: "step", step: 6, rate: 91189 },                 
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 82613 },         
      { kind: "step", step: 1, rate: 84630 },
      { kind: "step", step: 2, rate: 86218 },
      { kind: "step", step: 3, rate: 88379 },
      { kind: "step", step: 4, rate: 90110 }, 
      { kind: "step", step: 5, rate: 92127 },   
      { kind: "step", step: 6, rate: 94289 },            
    ]
  },     
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 89098 },         
      { kind: "step", step: 1, rate: 90631 },
      { kind: "step", step: 2, rate: 92725 },
      { kind: "step", step: 3, rate: 94398 },
      { kind: "step", step: 4, rate: 96209 }, 
      { kind: "step", step: 5, rate: 98022 },   
      { kind: "step", step: 6, rate: 99973 },         
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 92127 },
      { kind: "step", step: 1, rate: 93712 },         
      { kind: "step", step: 2, rate: 95878 },
      { kind: "step", step: 3, rate: 97608 },
      { kind: "step", step: 4, rate: 99480 },
      { kind: "step", step: 5, rate: 101355 }, 
      { kind: "step", step: 6, rate: 103372 },           
    ]
  }, 
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 98022 },         
      { kind: "step", step: 1, rate: 100392 },
      { kind: "step", step: 2, rate: 102624 },
      { kind: "step", step: 3, rate: 105133 },
      { kind: "step", step: 4, rate: 107363 }, 
      { kind: "step", step: 5, rate: 109733 },   
      { kind: "step", step: 6, rate: 112106 },       
      { kind: "step", step: 7, rate: 119634 },
      { kind: "step", step: "Maximum guidepoint", rate: 127719 },                        
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 101355 },         
      { kind: "step", step: 1, rate: 103805 },
      { kind: "step", step: 2, rate: 106113 },
      { kind: "step", step: 3, rate: 108708 },
      { kind: "step", step: 4, rate: 111013 }, 
      { kind: "step", step: 5, rate: 113464 },   
      { kind: "step", step: 6, rate: 115918 },     
      { kind: "step", step: 7, rate: 123702 },
      { kind: "step", step: "Maximum guidepoint", rate: 132061 },                                      
    ]
  },    
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 126885 },         
      { kind: "step", step: 1, rate: 129534 },
      { kind: "step", step: 2, rate: 132044 },
      { kind: "step", step: 3, rate: 134832 },
      { kind: "step", step: 4, rate: 137702 }, 
      { kind: "step", step: 5, rate: 139992 },   
      { kind: "step", step: 6, rate: 144312 },  
      { kind: "step", step: 7, rate: 153655 },
      { kind: "step", step: "Maximum guidepoint", rate: 163694 },                                  
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 131199 },         
      { kind: "step", step: 1, rate: 133938 },
      { kind: "step", step: 2, rate: 136533 },
      { kind: "step", step: 3, rate: 139416 },
      { kind: "step", step: 4, rate: 141867 }, 
      { kind: "step", step: 5, rate: 144752 },   
      { kind: "step", step: 6, rate: 149219 },   
      { kind: "step", step: 7, rate: 158879 },      
      { kind: "step", step: "Maximum guidepoint", rate: 169260 },                           
    ]
  }, 
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 154910 },         
      { kind: "step", step: 1, rate: 157419 },
      { kind: "step", step: 2, rate: 160486 },
      { kind: "step", step: 3, rate: 163555 },
      { kind: "step", step: 4, rate: 166343 }, 
      { kind: "step", step: 5, rate: 169410 },   
      { kind: "step", step: 6, rate: 172339 },
      { kind: "step", step: 7, rate: 182377 },      
      { kind: "step", step: "Maximum guidepoint", rate: 192974 },                          
    ]
  },
  {
    agencyId: "finance|parliamentary-workplace-support-services-pwss",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Minimum guidepoint", rate: 160177 },         
      { kind: "step", step: 1, rate: 162771 },
      { kind: "step", step: 2, rate: 165943 },
      { kind: "step", step: 3, rate: 169116 },
      { kind: "step", step: 4, rate: 171999 }, 
      { kind: "step", step: 5, rate: 175170 },   
      { kind: "step", step: 6, rate: 178199 }, 
      { kind: "step", step: 7, rate: 188578 },      
      { kind: "step", step: "Maximum guidepoint", rate: 199535 },                       
    ]
  },  
  {
    agencyId: "finance|services-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 55564 },
      { kind: "step", step: "Max", rate: 57497 },    
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 59577 },
      { kind: "step", step: "Max", rate: 61603 },          
    ]
  },   
  {
    agencyId: "finance|services-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 62091 },
      { kind: "step", step: "Max", rate: 67010 },       
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 64202 },
      { kind: "step", step: "Max", rate: 69288 },         
    ]
  }, 
  {
    agencyId: "finance|services-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 68830 },
      { kind: "step", step: "Max", rate: 76712 },              
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 71170 },
      { kind: "step", step: "Max", rate: 79320 },                 
    ]
  }, 
  {
    agencyId: "finance|services-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 76714 },
      { kind: "step", step: "Max", rate: 84996 },                    
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 79322 },
      { kind: "step", step: "Max", rate: 87886 },    
    ]
  },     
  {
    agencyId: "finance|services-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 85559 },
      { kind: "step", step: "Max", rate: 92324 },          
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 88834 },
      { kind: "step", step: "Max", rate: 96829 },           
    ]
  }, 
  {
    agencyId: "finance|services-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 94711 },
      { kind: "step", step: "Max", rate: 109518 },       
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 99734 },
      { kind: "step", step: "Max", rate: 113242 },                
    ]
  },    
  {
    agencyId: "finance|services-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 118465 },
      { kind: "step", step: "Max", rate: 131268 },                
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 122493 },
      { kind: "step", step: "Max", rate: 135731 },          
    ]
  }, 
  {
    agencyId: "finance|services-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 137090 },
      { kind: "step", step: "Max", rate: 163028 },      
    ]
  },
  {
    agencyId: "finance|services-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 141751 },
      { kind: "step", step: "Max", rate: 168571 },     
    ]
  },          
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55336 },
      { kind: "step", step: 2, rate: 60434 },            
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 62489 },       
    ]
  },   
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64061 },
      { kind: "step", step: 2, rate: 66295 },  
      { kind: "step", step: 3, rate: 69182 },      
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66239 },
      { kind: "step", step: 2, rate: 68549 },
      { kind: "step", step: 3, rate: 71534 },            
    ]
  }, 
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72597 },
      { kind: "step", step: 2, rate: 79127 },
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75065 },
      { kind: "step", step: 2, rate: 81817 },                          
    ]
  }, 
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81349 },
      { kind: "step", step: 2, rate: 86724 },              
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84115 },
      { kind: "step", step: 2, rate: 89673 },         
    ]
  },     
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89703 },
      { kind: "step", step: 2, rate: 92460 },
      { kind: "step", step: 3, rate: 95854 },       
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92753 },
      { kind: "step", step: 2, rate: 95604 },
      { kind: "step", step: 3, rate: 99113 },         
    ]
  }, 
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98903 },
      { kind: "step", step: 2, rate: 104832 },
      { kind: "step", step: 3, rate: 111207 },                   
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102266 },
      { kind: "step", step: 2, rate: 108396 },
      { kind: "step", step: 3, rate: 114988 },                              
    ]
  },    
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123163 },
      { kind: "step", step: 2, rate: 129716 },
      { kind: "step", step: 3, rate: 134167 },
      { kind: "step", step: 4, rate: 137768 },                                  
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127351 },
      { kind: "step", step: 2, rate: 134126 },
      { kind: "step", step: 3, rate: 138729 },
      { kind: "step", step: 4, rate: 142452 },                          
    ]
  }, 
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 148793 },
      { kind: "step", step: 2, rate: 158302 },
      { kind: "step", step: 3, rate: 163420 },
      { kind: "step", step: 4, rate: 168046 },                           
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|department-of-foreign-affairs-and-trade-dfat",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 153852 },
      { kind: "step", step: 2, rate: 163684 },
      { kind: "step", step: 3, rate: 168976 },
      { kind: "step", step: 4, rate: 173760 },                        
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54923 },
      { kind: "step", step: 2, rate: 56782 },
      { kind: "step", step: 3, rate: 58639 }, 
      { kind: "step", step: 4, rate: 60499 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 56791 },
      { kind: "step", step: 2, rate: 58712 },
      { kind: "step", step: 3, rate: 60632 },
      { kind: "step", step: 4, rate: 62556 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61902 },
      { kind: "step", step: 2, rate: 64078 },
      { kind: "step", step: 3, rate: 66255 },
      { kind: "step", step: 4, rate: 68434 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64006 },
      { kind: "step", step: 2, rate: 66257 },
      { kind: "step", step: 3, rate: 68507 },
      { kind: "step", step: 4, rate: 70760 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70237 },
      { kind: "step", step: 2, rate: 72042 },
      { kind: "step", step: 3, rate: 73850 }, 
      { kind: "step", step: 4, rate: 75657 },              
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72625 },
      { kind: "step", step: 2, rate: 74492 },
      { kind: "step", step: 3, rate: 76360 },
      { kind: "step", step: 4, rate: 78229 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80240 },
      { kind: "step", step: 2, rate: 82415 },
      { kind: "step", step: 3, rate: 84594 },
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82968 },
      { kind: "step", step: 2, rate: 85217 },
      { kind: "step", step: 3, rate: 87470 },
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88555 },
      { kind: "step", step: 2, rate: 90267 },
      { kind: "step", step: 3, rate: 91972 },
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91566 },
      { kind: "step", step: 2, rate: 93336 },
      { kind: "step", step: 3, rate: 95099 }, 
      { kind: "step", step: 4, rate: 96829 },   
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 97054 },
      { kind: "step", step: 2, rate: 100463 },
      { kind: "step", step: 3, rate: 103871 }, 
      { kind: "step", step: 4, rate: 107283 },
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100354 },
      { kind: "step", step: 2, rate: 103879 },
      { kind: "step", step: 3, rate: 107403 },
      { kind: "step", step: 4, rate: 110931 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122633 },
      { kind: "step", step: 2, rate: 125761 },
      { kind: "step", step: 3, rate: 128889 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126803 },
      { kind: "step", step: 2, rate: 130036 },
      { kind: "step", step: 3, rate: 133271 },    
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 152968 },
      { kind: "step", step: 2, rate: 156280 },
      { kind: "step", step: 3, rate: 159596 },
      { kind: "step", step: 4, rate: 162909 },
      { kind: "step", step: 5, rate: 166222 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-centre-for-international-agricultural-research-aciar",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 158169 },
      { kind: "step", step: 2, rate: 161593 },
      { kind: "step", step: 3, rate: 165023 }, 
      { kind: "step", step: 4, rate: 168448 },
      { kind: "step", step: 5, rate: 171874 },   
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60366 },             
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62418 },   
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62778 },
      { kind: "step", step: 2, rate: 65290 },
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64912 },
      { kind: "step", step: 2, rate: 67510 },
      { kind: "step", step: 3, rate: 68425 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67902 },
      { kind: "step", step: 2, rate: 70617 },
      { kind: "step", step: 3, rate: 73446 },
      { kind: "step", step: 4, rate: 76383 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 73018 },
      { kind: "step", step: 3, rate: 75943 },
      { kind: "step", step: 4, rate: 78980 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 79435 },
      { kind: "step", step: 2, rate: 82812 },
      { kind: "step", step: 3, rate: 86320 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82136 },
      { kind: "step", step: 2, rate: 85628 },
      { kind: "step", step: 3, rate: 89255 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89771 },
      { kind: "step", step: 2, rate: 93364 },
      { kind: "step", step: 3, rate: 97261 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92823 },
      { kind: "step", step: 2, rate: 96538 },
      { kind: "step", step: 3, rate: 100568 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101322 },
      { kind: "step", step: 2, rate: 105551 },
      { kind: "step", step: 3, rate: 110006 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104767 },
      { kind: "step", step: 2, rate: 109140 },
      { kind: "step", step: 3, rate: 113746 },    
    ]
  },  
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117157 },
      { kind: "step", step: 2, rate: 121841 },
      { kind: "step", step: 3, rate: 126716 },
      { kind: "step", step: 4, rate: 131786 },               
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 125984 },
      { kind: "step", step: 3, rate: 131024 },
      { kind: "step", step: 4, rate: 136267 },    
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 137054 },
      { kind: "step", step: 2, rate: 142403 },
      { kind: "step", step: 3, rate: 147957 }, 
      { kind: "step", step: 4, rate: 153726 },
      { kind: "step", step: 5, rate: 159720 },          
    ]
  },
  {
    agencyId: "foreign-affairs-and-trade|australian-trade-and-investment-commission-austrade",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 141714 },
      { kind: "step", step: 2, rate: 147245 },
      { kind: "step", step: 3, rate: 152988 },
      { kind: "step", step: 4, rate: 158953 },
      { kind: "step", step: 5, rate: 165150 },          
    ]
  },      
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55452 },
      { kind: "step", step: 3, rate: 57351 },
      { kind: "step", step: 4, rate: 60150 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59301 },
      { kind: "step", step: 3, rate: 62195 },
    ]
  },   
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62595 },
      { kind: "step", step: 2, rate: 64473 },
      { kind: "step", step: 3, rate: 66410 },
      { kind: "step", step: 4, rate: 68307 },  
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64723 },
      { kind: "step", step: 2, rate: 66665 },
      { kind: "step", step: 3, rate: 68668 },
      { kind: "step", step: 4, rate: 70629 },   
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72336 },
      { kind: "step", step: 2, rate: 74384 },
      { kind: "step", step: 3, rate: 76542 },
      { kind: "step", step: 4, rate: 80179 },         
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74795 },
      { kind: "step", step: 2, rate: 76913 },
      { kind: "step", step: 3, rate: 79144 },
      { kind: "step", step: 4, rate: 82905 },                               
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81954 },
      { kind: "step", step: 2, rate: 84209 },
      { kind: "step", step: 3, rate: 86594 },             
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84740 },
      { kind: "step", step: 2, rate: 87072 },
      { kind: "step", step: 3, rate: 89538 },         
    ]
  },     
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87843 },
      { kind: "step", step: 2, rate: 90231 },
      { kind: "step", step: 3, rate: 94998 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90830 },
      { kind: "step", step: 2, rate: 93299 },
      { kind: "step", step: 3, rate: 98229 },       
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98336 },
      { kind: "step", step: 2, rate: 103106 },
      { kind: "step", step: 3, rate: 108509 },
      { kind: "step", step: 4, rate: 110937 },                     
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101679 },
      { kind: "step", step: 2, rate: 106612 },
      { kind: "step", step: 3, rate: 112198 },
      { kind: "step", step: 4, rate: 114709 },                               
    ]
  },    
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120842 },
      { kind: "step", step: 2, rate: 126100 },
      { kind: "step", step: 3, rate: 132368 },
      { kind: "step", step: 4, rate: 137823 },                                 
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124951 },
      { kind: "step", step: 2, rate: 130387 },
      { kind: "step", step: 3, rate: 136869 },
      { kind: "step", step: 4, rate: 142509 },                        
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144175 },
      { kind: "step", step: 2, rate: 157252 },
      { kind: "step", step: 3, rate: 162501 },
      { kind: "step", step: 4, rate: 170695 },                       
    ]
  },
  {
    agencyId: "health-disability-and-ageing|department-of-health-disability-and-ageing",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149077 },
      { kind: "step", step: 2, rate: 162599 },
      { kind: "step", step: 3, rate: 168026 },
      { kind: "step", step: 4, rate: 176499 },                       
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 56282 },
      { kind: "step", step: 4, rate: 59029 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58196 }, 
      { kind: "step", step: 4, rate: 61036 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61427 },
      { kind: "step", step: 2, rate: 63270 },
      { kind: "step", step: 3, rate: 65171 },
      { kind: "step", step: 4, rate: 67034 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63516 },
      { kind: "step", step: 2, rate: 65421 },
      { kind: "step", step: 3, rate: 67387 }, 
      { kind: "step", step: 4, rate: 69313 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70987 },
      { kind: "step", step: 2, rate: 72997 },
      { kind: "step", step: 3, rate: 75116 }, 
      { kind: "step", step: 4, rate: 78685 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73401 },
      { kind: "step", step: 2, rate: 75479 },
      { kind: "step", step: 3, rate: 77670 },
      { kind: "step", step: 4, rate: 81360 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80425 },
      { kind: "step", step: 2, rate: 82639 },
      { kind: "step", step: 3, rate: 84980 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83159 },
      { kind: "step", step: 2, rate: 85449 },
      { kind: "step", step: 3, rate: 87869 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86204 },
      { kind: "step", step: 2, rate: 88550 },
      { kind: "step", step: 3, rate: 93226 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89135 },
      { kind: "step", step: 2, rate: 91561 },
      { kind: "step", step: 3, rate: 96396 }, 
      { kind: "step", step: 4, rate: 96829 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96503 },
      { kind: "step", step: 2, rate: 101182 },
      { kind: "step", step: 3, rate: 106485 }, 
      { kind: "step", step: 4, rate: 108869 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99784 },
      { kind: "step", step: 2, rate: 104622 },
      { kind: "step", step: 3, rate: 110105 },
      { kind: "step", step: 4, rate: 112571 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [   
      { kind: "step", step: 1, rate: 118588 },
      { kind: "step", step: 2, rate: 123749 },
      { kind: "step", step: 3, rate: 129901 },
      { kind: "step", step: 4, rate: 135251 },                   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122620 },
      { kind: "step", step: 2, rate: 127956 },
      { kind: "step", step: 3, rate: 134318 },
      { kind: "step", step: 4, rate: 139850 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141487 },
      { kind: "step", step: 2, rate: 154319 },
      { kind: "step", step: 3, rate: 159472 }, 
      { kind: "step", step: 4, rate: 167513 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|aged-care-quality-and-safety-commission",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146298 },
      { kind: "step", step: 2, rate: 159566 },
      { kind: "step", step: 3, rate: 164894 }, 
      { kind: "step", step: 4, rate: 173208 },   
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS1",
    agencyClassification: "ARPANSA Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 57277 },
      { kind: "step", step: 3, rate: 59411 },
      { kind: "step", step: 4, rate: 61548 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS1",
    agencyClassification: "ARPANSA Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59224 },
      { kind: "step", step: 3, rate: 61431 },
      { kind: "step", step: 4, rate: 63641 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS2",
    agencyClassification: "ARPANSA Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63385 },
      { kind: "step", step: 2, rate: 65442 },
      { kind: "step", step: 3, rate: 67499 },
      { kind: "step", step: 4, rate: 69555 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS2",
    agencyClassification: "ARPANSA Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65540 },
      { kind: "step", step: 2, rate: 67667 },
      { kind: "step", step: 3, rate: 69794 },
      { kind: "step", step: 4, rate: 71920 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS3",
    agencyClassification: "ARPANSA Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72134 },
      { kind: "step", step: 2, rate: 74983 },
      { kind: "step", step: 3, rate: 77829 },
      { kind: "step", step: 4, rate: 80678 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS3",
    agencyClassification: "ARPANSA Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74587 },
      { kind: "step", step: 2, rate: 77532 },
      { kind: "step", step: 3, rate: 80475 },
      { kind: "step", step: 4, rate: 83421 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS4",
    agencyClassification: "ARPANSA Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 83092 },
      { kind: "step", step: 2, rate: 84953 },
      { kind: "step", step: 3, rate: 86815 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS4",
    agencyClassification: "ARPANSA Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 85917 },
      { kind: "step", step: 2, rate: 87841 },
      { kind: "step", step: 3, rate: 89767 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS5",
    agencyClassification: "ARPANSA Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89410 },
      { kind: "step", step: 2, rate: 91636 },
      { kind: "step", step: 3, rate: 93861 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS5",
    agencyClassification: "ARPANSA Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92450 },
      { kind: "step", step: 2, rate: 94752 },
      { kind: "step", step: 3, rate: 97052 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS6",
    agencyClassification: "ARPANSA Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96669 },
      { kind: "step", step: 2, rate: 101290 },
      { kind: "step", step: 3, rate: 105910 },
      { kind: "step", step: 4, rate: 110532 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "APS6",
    agencyClassification: "ARPANSA Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99956 },
      { kind: "step", step: 2, rate: 104734 },
      { kind: "step", step: 3, rate: 109511 },
      { kind: "step", step: 4, rate: 114290 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "EL1",
    agencyClassification: "ARPANSA Executive Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119358 },
      { kind: "step", step: 2, rate: 126023 },
      { kind: "step", step: 3, rate: 132681 },
      { kind: "step", step: 4, rate: 137290 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-radiation-protection-and-nuclear-safety-agency-arpansa",
    classification: "EL1",
    agencyClassification: "ARPANSA Executive Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123416 },
      { kind: "step", step: 2, rate: 130308 },
      { kind: "step", step: 3, rate: 137192 },
      { kind: "step", step: 4, rate: 141958 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 56110 },
      { kind: "step", step: 4, rate: 58849 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58018 }, 
      { kind: "step", step: 4, rate: 60850 },   
      { kind: "step", step: 5, rate: 60947 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61242 },
      { kind: "step", step: 2, rate: 63079 },
      { kind: "step", step: 3, rate: 64975 },
      { kind: "step", step: 4, rate: 66831 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63324 },
      { kind: "step", step: 2, rate: 65224 },
      { kind: "step", step: 3, rate: 67184 },
      { kind: "step", step: 4, rate: 69103 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70774 },
      { kind: "step", step: 2, rate: 72777 },
      { kind: "step", step: 3, rate: 74888 },
      { kind: "step", step: 4, rate: 78448 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73180 },
      { kind: "step", step: 2, rate: 75251 },
      { kind: "step", step: 3, rate: 77434 },
      { kind: "step", step: 4, rate: 81115 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80183 },
      { kind: "step", step: 2, rate: 82389 },
      { kind: "step", step: 3, rate: 84723 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82909 },
      { kind: "step", step: 2, rate: 85190 },
      { kind: "step", step: 3, rate: 87604 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87213 },
      { kind: "step", step: 2, rate: 89585 },
      { kind: "step", step: 3, rate: 92051 }, 
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90178 },
      { kind: "step", step: 2, rate: 92631 },
      { kind: "step", step: 3, rate: 95181 },
      { kind: "step", step: 4, rate: 96829 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96211 },
      { kind: "step", step: 2, rate: 100877 },
      { kind: "step", step: 3, rate: 106162 }, 
      { kind: "step", step: 4, rate: 108543 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99733 },
      { kind: "step", step: 2, rate: 104307 },
      { kind: "step", step: 3, rate: 109772 },
      { kind: "step", step: 4, rate: 112233 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 118230 },
      { kind: "step", step: 2, rate: 123377 },
      { kind: "step", step: 3, rate: 129508 },
      { kind: "step", step: 4, rate: 134845 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122250 },
      { kind: "step", step: 2, rate: 127572 },
      { kind: "step", step: 3, rate: 133911 }, 
      { kind: "step", step: 4, rate: 139430 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141062 },
      { kind: "step", step: 2, rate: 153854 },
      { kind: "step", step: 3, rate: 158991 },
      { kind: "step", step: 4, rate: 167007 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|cancer-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145858 },
      { kind: "step", step: 2, rate: 159085 },
      { kind: "step", step: 3, rate: 164397 }, 
      { kind: "step", step: 4, rate: 172685 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55720 },
      { kind: "step", step: 3, rate: 57594 },
      { kind: "step", step: 4, rate: 60358 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57614 },
      { kind: "step", step: 3, rate: 59552 }, 
      { kind: "step", step: 4, rate: 62410 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62777 },
      { kind: "step", step: 2, rate: 64634 },
      { kind: "step", step: 3, rate: 66544 },
      { kind: "step", step: 4, rate: 68419 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64911 },
      { kind: "step", step: 2, rate: 66832 },
      { kind: "step", step: 3, rate: 68806 },    
      { kind: "step", step: 4, rate: 70745 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72399 },
      { kind: "step", step: 2, rate: 75104 },
      { kind: "step", step: 3, rate: 76555 },
      { kind: "step", step: 4, rate: 80151 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74861 },
      { kind: "step", step: 2, rate: 77658 },
      { kind: "step", step: 3, rate: 79158 },
      { kind: "step", step: 4, rate: 82876 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81904 },
      { kind: "step", step: 2, rate: 84131 },
      { kind: "step", step: 3, rate: 86490 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84689 },
      { kind: "step", step: 2, rate: 86991 },
      { kind: "step", step: 3, rate: 89431 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89002 },
      { kind: "step", step: 2, rate: 91394 },
      { kind: "step", step: 3, rate: 93886 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92028 },
      { kind: "step", step: 2, rate: 94501 },
      { kind: "step", step: 3, rate: 97078 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98086 },
      { kind: "step", step: 2, rate: 102796 },
      { kind: "step", step: 3, rate: 108137 },
      { kind: "step", step: 4, rate: 110535 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101421 },
      { kind: "step", step: 2, rate: 106291 },
      { kind: "step", step: 3, rate: 111814 }, 
      { kind: "step", step: 4, rate: 114293 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120844 },
      { kind: "step", step: 2, rate: 125517 },
      { kind: "step", step: 3, rate: 131711 }, 
      { kind: "step", step: 4, rate: 137123 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124953 },
      { kind: "step", step: 2, rate: 129785 },
      { kind: "step", step: 3, rate: 136189 }, 
      { kind: "step", step: 4, rate: 141785 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143434 },
      { kind: "step", step: 2, rate: 156296 },
      { kind: "step", step: 3, rate: 161482 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-blood-authority",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148311 },
      { kind: "step", step: 2, rate: 161610 },
      { kind: "step", step: 3, rate: 166972 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55679 },
      { kind: "step", step: 3, rate: 58398 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57572 },
      { kind: "step", step: 3, rate: 60384 }, 
      { kind: "step", step: 4, rate: 60964 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60775 },
      { kind: "step", step: 2, rate: 62595 },
      { kind: "step", step: 3, rate: 64477 },
      { kind: "step", step: 4, rate: 66319 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62841 },
      { kind: "step", step: 2, rate: 64723 },
      { kind: "step", step: 3, rate: 66669 },
      { kind: "step", step: 4, rate: 68574 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70232 },
      { kind: "step", step: 2, rate: 72221 },
      { kind: "step", step: 3, rate: 74315 },
      { kind: "step", step: 4, rate: 77845 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72620 },
      { kind: "step", step: 2, rate: 74677 },
      { kind: "step", step: 3, rate: 76842 }, 
      { kind: "step", step: 4, rate: 80492 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 79571 },
      { kind: "step", step: 2, rate: 81758 },
      { kind: "step", step: 3, rate: 84073 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82276 },
      { kind: "step", step: 2, rate: 84538 },
      { kind: "step", step: 3, rate: 86931 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86546 },
      { kind: "step", step: 2, rate: 88900 },
      { kind: "step", step: 3, rate: 91346 },
      { kind: "step", step: 4, rate: 91809 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89489 },
      { kind: "step", step: 2, rate: 91923 },
      { kind: "step", step: 3, rate: 94452 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95475 },
      { kind: "step", step: 2, rate: 100103 },
      { kind: "step", step: 3, rate: 105351 }, 
      { kind: "step", step: 4, rate: 107708 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103507 },
      { kind: "step", step: 3, rate: 108933 }, 
      { kind: "step", step: 4, rate: 111701 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117662 },
      { kind: "step", step: 2, rate: 122430 },
      { kind: "step", step: 3, rate: 128515 }, 
      { kind: "step", step: 4, rate: 133859 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 126593 },
      { kind: "step", step: 3, rate: 132885 },
      { kind: "step", step: 4, rate: 138410 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139979 },
      { kind: "step", step: 2, rate: 152674 },
      { kind: "step", step: 3, rate: 157773 },
      { kind: "step", step: 4, rate: 165728 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-and-medical-research-council-nhmrc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 144738 },
      { kind: "step", step: 2, rate: 157865 },
      { kind: "step", step: 3, rate: 163137 }, 
      { kind: "step", step: 4, rate: 171363 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 52554 },
      { kind: "step", step: 2, rate: 54413 },
      { kind: "step", step: 3, rate: 56277 },
      { kind: "step", step: 4, rate: 59023 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 54341 },
      { kind: "step", step: 2, rate: 56263 },
      { kind: "step", step: 3, rate: 58190 }, 
      { kind: "step", step: 4, rate: 61030 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61422 },
      { kind: "step", step: 2, rate: 63265 },
      { kind: "step", step: 3, rate: 65164 },
      { kind: "step", step: 4, rate: 67027 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63510 },
      { kind: "step", step: 2, rate: 65416 },
      { kind: "step", step: 3, rate: 67380 }, 
      { kind: "step", step: 4, rate: 69306 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70981 },
      { kind: "step", step: 2, rate: 72991 },
      { kind: "step", step: 3, rate: 75109 },
      { kind: "step", step: 4, rate: 78676 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73394 },
      { kind: "step", step: 2, rate: 75473 },
      { kind: "step", step: 3, rate: 77663 },
      { kind: "step", step: 4, rate: 81351 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80419 },
      { kind: "step", step: 2, rate: 82632 },
      { kind: "step", step: 3, rate: 84971 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83153 },
      { kind: "step", step: 2, rate: 85441 },
      { kind: "step", step: 3, rate: 87860 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86197 },
      { kind: "step", step: 2, rate: 88541 },
      { kind: "step", step: 3, rate: 93217 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89128 },
      { kind: "step", step: 2, rate: 91551 },
      { kind: "step", step: 3, rate: 96386 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96492 },
      { kind: "step", step: 2, rate: 101174 },
      { kind: "step", step: 3, rate: 106474 }, 
      { kind: "step", step: 4, rate: 108859 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99773 },
      { kind: "step", step: 2, rate: 104614 },
      { kind: "step", step: 3, rate: 110094 },
      { kind: "step", step: 4, rate: 112560 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 118577 },
      { kind: "step", step: 2, rate: 123738 },
      { kind: "step", step: 3, rate: 129887 },
      { kind: "step", step: 4, rate: 135239 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122609 },
      { kind: "step", step: 2, rate: 127945 },
      { kind: "step", step: 3, rate: 134303 },
      { kind: "step", step: 4, rate: 139837 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141473 },
      { kind: "step", step: 2, rate: 154305 },
      { kind: "step", step: 3, rate: 159457 },
      { kind: "step", step: 4, rate: 167498 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-health-funding-body-nhfb",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146283 },
      { kind: "step", step: 2, rate: 159551 },
      { kind: "step", step: 3, rate: 164879 },
      { kind: "step", step: 4, rate: 173193 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 56173 }, 
      { kind: "step", step: 4, rate: 58700 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58083 }, 
      { kind: "step", step: 4, rate: 60696 },
      { kind: "step", step: 5, rate: 60946 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61306 },
      { kind: "step", step: 2, rate: 63148 },
      { kind: "step", step: 3, rate: 67388 }, 
      { kind: "step", step: 4, rate: 68220 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63390 },
      { kind: "step", step: 2, rate: 65295 },
      { kind: "step", step: 3, rate: 69679 }, 
      { kind: "step", step: 4, rate: 70540 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70850 },
      { kind: "step", step: 2, rate: 72854 },
      { kind: "step", step: 3, rate: 75987 },
      { kind: "step", step: 4, rate: 76874 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73259 },
      { kind: "step", step: 2, rate: 75331 },
      { kind: "step", step: 3, rate: 78571 },
      { kind: "step", step: 4, rate: 79487 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80270 },
      { kind: "step", step: 2, rate: 82476 },
      { kind: "step", step: 3, rate: 85015 },
      { kind: "step", step: 4, rate: 86280 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82999 },
      { kind: "step", step: 2, rate: 85281 },
      { kind: "step", step: 3, rate: 87906 },
      { kind: "step", step: 4, rate: 89213 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88155 },
      { kind: "step", step: 2, rate: 89774 },
      { kind: "step", step: 3, rate: 93081 },
      { kind: "step", step: 4, rate: 94143 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91152 },
      { kind: "step", step: 2, rate: 92826 },
      { kind: "step", step: 3, rate: 96245 },
      { kind: "step", step: 4, rate: 97344 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96558 },
      { kind: "step", step: 2, rate: 100985 },
      { kind: "step", step: 3, rate: 106748 }, 
      { kind: "step", step: 4, rate: 108532 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99841 },
      { kind: "step", step: 2, rate: 104418 },
      { kind: "step", step: 3, rate: 110378 },
      { kind: "step", step: 4, rate: 112222 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120307 },
      { kind: "step", step: 2, rate: 126791 },
      { kind: "step", step: 3, rate: 131674 },
      { kind: "step", step: 4, rate: 136563 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124398 },
      { kind: "step", step: 2, rate: 131102 },
      { kind: "step", step: 3, rate: 136151 },
      { kind: "step", step: 4, rate: 141206 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141800 },
      { kind: "step", step: 2, rate: 154016 },
      { kind: "step", step: 3, rate: 160989 },
      { kind: "step", step: 4, rate: 167184 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|ndis-quality-and-safeguards-commission",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146622 },
      { kind: "step", step: 2, rate: 159253 },
      { kind: "step", step: 3, rate: 166462 },
      { kind: "step", step: 4, rate: 172868 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55452 },
      { kind: "step", step: 3, rate: 57351 },
      { kind: "step", step: 4, rate: 60150 },                
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59301 }, 
      { kind: "step", step: 4, rate: 62195 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62595 },
      { kind: "step", step: 2, rate: 64473 },
      { kind: "step", step: 3, rate: 66410 }, 
      { kind: "step", step: 4, rate: 68307 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64723 },
      { kind: "step", step: 2, rate: 66665 },
      { kind: "step", step: 3, rate: 68668 },
      { kind: "step", step: 4, rate: 70629 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72336 },
      { kind: "step", step: 2, rate: 74384 },
      { kind: "step", step: 3, rate: 76542 },
      { kind: "step", step: 4, rate: 80179 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74795 },
      { kind: "step", step: 2, rate: 76913 },
      { kind: "step", step: 3, rate: 79144 }, 
      { kind: "step", step: 4, rate: 82905 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81954 },
      { kind: "step", step: 2, rate: 84209 },
      { kind: "step", step: 3, rate: 86594 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84740 },
      { kind: "step", step: 2, rate: 87072 },
      { kind: "step", step: 3, rate: 89538 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87843 },
      { kind: "step", step: 2, rate: 90231 },
      { kind: "step", step: 3, rate: 94998 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90830 },
      { kind: "step", step: 2, rate: 93299 },
      { kind: "step", step: 3, rate: 98229 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98336 },
      { kind: "step", step: 2, rate: 103106 },
      { kind: "step", step: 3, rate: 108509 },
      { kind: "step", step: 4, rate: 110937 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101679 },
      { kind: "step", step: 2, rate: 106612 },
      { kind: "step", step: 3, rate: 112198 },
      { kind: "step", step: 4, rate: 114709 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120842 },
      { kind: "step", step: 2, rate: 126100 },
      { kind: "step", step: 3, rate: 132368 },
      { kind: "step", step: 4, rate: 137823 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124951 },
      { kind: "step", step: 2, rate: 130387 },
      { kind: "step", step: 3, rate: 136869 },
      { kind: "step", step: 4, rate: 142509 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144175 },
      { kind: "step", step: 2, rate: 157252 },
      { kind: "step", step: 3, rate: 162501 },
      { kind: "step", step: 4, rate: 170695 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|office-of-the-inspector-general-of-aged-care-igac",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149077 },
      { kind: "step", step: 2, rate: 162599 },
      { kind: "step", step: 3, rate: 168026 }, 
      { kind: "step", step: 4, rate: 176499 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55453 },
      { kind: "step", step: 3, rate: 57351 },
      { kind: "step", step: 4, rate: 60150 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59301 }, 
      { kind: "step", step: 4, rate: 62195 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62596 },
      { kind: "step", step: 2, rate: 64474 },
      { kind: "step", step: 3, rate: 66410 },
      { kind: "step", step: 4, rate: 68308 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64724 },
      { kind: "step", step: 2, rate: 66666 },
      { kind: "step", step: 3, rate: 68668 },
      { kind: "step", step: 4, rate: 70630 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72337 },
      { kind: "step", step: 2, rate: 74385 },
      { kind: "step", step: 3, rate: 76542 }, 
      { kind: "step", step: 4, rate: 80180 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74796 },
      { kind: "step", step: 2, rate: 76914 },
      { kind: "step", step: 3, rate: 79144 }, 
      { kind: "step", step: 4, rate: 82906 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81955 },
      { kind: "step", step: 2, rate: 84211 },
      { kind: "step", step: 3, rate: 86595 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84741 },
      { kind: "step", step: 2, rate: 87074 },
      { kind: "step", step: 3, rate: 89539 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89140 },
      { kind: "step", step: 2, rate: 91563 },
      { kind: "step", step: 3, rate: 94084 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92171 },
      { kind: "step", step: 2, rate: 94676 },
      { kind: "step", step: 3, rate: 97283 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98337 },
      { kind: "step", step: 2, rate: 103107 },
      { kind: "step", step: 3, rate: 108510 },
      { kind: "step", step: 4, rate: 110939 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101680 },
      { kind: "step", step: 2, rate: 106613 },
      { kind: "step", step: 3, rate: 112199 }, 
      { kind: "step", step: 4, rate: 114711 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120844 },
      { kind: "step", step: 2, rate: 126102 },
      { kind: "step", step: 3, rate: 132370 },
      { kind: "step", step: 4, rate: 137825 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124953 },
      { kind: "step", step: 2, rate: 130389 },
      { kind: "step", step: 3, rate: 136871 },
      { kind: "step", step: 4, rate: 142511 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144179 },
      { kind: "step", step: 2, rate: 157254 },
      { kind: "step", step: 3, rate: 162503 },
      { kind: "step", step: 4, rate: 170699 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|organ-and-tissue-authority",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149081 },
      { kind: "step", step: 2, rate: 162601 },
      { kind: "step", step: 3, rate: 168028 },
      { kind: "step", step: 4, rate: 176503 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 55453 },
      { kind: "step", step: 4, rate: 58158 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 57497 },
      { kind: "step", step: 4, rate: 60135 },
      { kind: "step", step: 5, rate: 60946 },          
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59827 },
      { kind: "step", step: 2, rate: 62339 },
      { kind: "step", step: 3, rate: 64210 }, 
      { kind: "step", step: 4, rate: 66045 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64459 },
      { kind: "step", step: 3, rate: 66393 }, 
      { kind: "step", step: 4, rate: 68291 },
      { kind: "step", step: 5, rate: 68425 },         
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69252 },
      { kind: "step", step: 2, rate: 71219 },
      { kind: "step", step: 3, rate: 73458 },
      { kind: "step", step: 4, rate: 76595 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71607 },
      { kind: "step", step: 2, rate: 73640 },
      { kind: "step", step: 3, rate: 75956 },
      { kind: "step", step: 4, rate: 79199 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78308 },
      { kind: "step", step: 2, rate: 80472 },
      { kind: "step", step: 3, rate: 82929 },
      { kind: "step", step: 4, rate: 84067 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80970 },
      { kind: "step", step: 2, rate: 83208 },
      { kind: "step", step: 3, rate: 85749 }, 
      { kind: "step", step: 4, rate: 86925 },
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85204 },
      { kind: "step", step: 2, rate: 87531 },
      { kind: "step", step: 3, rate: 90117 },
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90507 },
      { kind: "step", step: 3, rate: 93181 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },          
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 98960 },
      { kind: "step", step: 3, rate: 104138 },
      { kind: "step", step: 4, rate: 106118 },
      { kind: "step", step: 5, rate: 110876 },                     
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102325 },
      { kind: "step", step: 3, rate: 107679 },
      { kind: "step", step: 4, rate: 109726 },
      { kind: "step", step: 5, rate: 114646 },          
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119257 },
      { kind: "step", step: 2, rate: 125469 },
      { kind: "step", step: 3, rate: 130874 },
      { kind: "step", step: 4, rate: 133159 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123312 },
      { kind: "step", step: 2, rate: 129735 },
      { kind: "step", step: 3, rate: 135324 },
      { kind: "step", step: 4, rate: 137686 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 133597 },
      { kind: "step", step: 2, rate: 142461 },
      { kind: "step", step: 3, rate: 155047 },
      { kind: "step", step: 4, rate: 160128 },
      { kind: "step", step: 5, rate: 165213 },                     
    ]
  },
  {
    agencyId: "health-disability-and-ageing|professional-services-review-psr",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 147305 },
      { kind: "step", step: 3, rate: 160319 },
      { kind: "step", step: 4, rate: 165572 },
      { kind: "step", step: 5, rate: 170830 },          
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55452 },
      { kind: "step", step: 3, rate: 57351 },
      { kind: "step", step: 4, rate: 60150 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59301 },
      { kind: "step", step: 3, rate: 62195 },
    ]
  },   
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62595 },
      { kind: "step", step: 2, rate: 64473 },
      { kind: "step", step: 3, rate: 66410 },
      { kind: "step", step: 4, rate: 68307 },  
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64723 },
      { kind: "step", step: 2, rate: 66665 },
      { kind: "step", step: 3, rate: 68668 },
      { kind: "step", step: 4, rate: 70629 },   
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72336 },
      { kind: "step", step: 2, rate: 74384 },
      { kind: "step", step: 3, rate: 76542 },
      { kind: "step", step: 4, rate: 80179 },         
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74795 },
      { kind: "step", step: 2, rate: 76913 },
      { kind: "step", step: 3, rate: 79144 },
      { kind: "step", step: 4, rate: 82905 },                               
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81954 },
      { kind: "step", step: 2, rate: 84209 },
      { kind: "step", step: 3, rate: 86594 },             
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84740 },
      { kind: "step", step: 2, rate: 87072 },
      { kind: "step", step: 3, rate: 89538 },         
    ]
  },     
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87843 },
      { kind: "step", step: 2, rate: 90231 },
      { kind: "step", step: 3, rate: 94998 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90830 },
      { kind: "step", step: 2, rate: 93299 },
      { kind: "step", step: 3, rate: 98229 },       
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98336 },
      { kind: "step", step: 2, rate: 103106 },
      { kind: "step", step: 3, rate: 108509 },
      { kind: "step", step: 4, rate: 110937 },                     
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101679 },
      { kind: "step", step: 2, rate: 106612 },
      { kind: "step", step: 3, rate: 112198 },
      { kind: "step", step: 4, rate: 114709 },                               
    ]
  },    
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120842 },
      { kind: "step", step: 2, rate: 126100 },
      { kind: "step", step: 3, rate: 132368 },
      { kind: "step", step: 4, rate: 137823 },                                 
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124951 },
      { kind: "step", step: 2, rate: 130387 },
      { kind: "step", step: 3, rate: 136869 },
      { kind: "step", step: 4, rate: 142509 },                        
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144175 },
      { kind: "step", step: 2, rate: 157252 },
      { kind: "step", step: 3, rate: 162501 },
      { kind: "step", step: 4, rate: 170695 },                       
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-centre-for-disease-control",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149077 },
      { kind: "step", step: 2, rate: 162599 },
      { kind: "step", step: 3, rate: 168026 },
      { kind: "step", step: 4, rate: 176499 },                       
    ]
  },   
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55446 },
      { kind: "step", step: 3, rate: 57346 },
      { kind: "step", step: 4, rate: 60145 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59296 },
      { kind: "step", step: 4, rate: 62190 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62589 },
      { kind: "step", step: 2, rate: 64466 },
      { kind: "step", step: 3, rate: 66401 },
      { kind: "step", step: 4, rate: 68300 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64717 },
      { kind: "step", step: 2, rate: 66658 },
      { kind: "step", step: 3, rate: 68659 },
      { kind: "step", step: 4, rate: 70622 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72330 },
      { kind: "step", step: 2, rate: 74789 },
      { kind: "step", step: 3, rate: 76535 }, 
      { kind: "step", step: 4, rate: 80171 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74789 },
      { kind: "step", step: 2, rate: 76906 },
      { kind: "step", step: 3, rate: 79137 },
      { kind: "step", step: 4, rate: 82897 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81946 },
      { kind: "step", step: 2, rate: 84202 },
      { kind: "step", step: 3, rate: 86586 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84732 },
      { kind: "step", step: 2, rate: 87065 },
      { kind: "step", step: 3, rate: 89530 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87835 },
      { kind: "step", step: 2, rate: 90223 },
      { kind: "step", step: 3, rate: 94989 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90821 },
      { kind: "step", step: 2, rate: 93291 },
      { kind: "step", step: 3, rate: 98219 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98327 },
      { kind: "step", step: 2, rate: 103096 },
      { kind: "step", step: 3, rate: 108497 },
      { kind: "step", step: 4, rate: 110927 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101670 },
      { kind: "step", step: 2, rate: 106601 },
      { kind: "step", step: 3, rate: 112186 }, 
      { kind: "step", step: 4, rate: 114699 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120829 },
      { kind: "step", step: 2, rate: 126089 },
      { kind: "step", step: 3, rate: 132354 },
      { kind: "step", step: 4, rate: 137808 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124937 },
      { kind: "step", step: 2, rate: 130376 },
      { kind: "step", step: 3, rate: 136854 }, 
      { kind: "step", step: 4, rate: 142493 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144162 },
      { kind: "step", step: 2, rate: 157236 },
      { kind: "step", step: 3, rate: 162487 },
      { kind: "step", step: 4, rate: 170679 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-commission-on-safety-and-quality-in-health-care",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149064 },
      { kind: "step", step: 2, rate: 162582 },
      { kind: "step", step: 3, rate: 168012 }, 
      { kind: "step", step: 4, rate: 176482 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 53401 },
      { kind: "step", step: 2, rate: 55289 },
      { kind: "step", step: 3, rate: 57183 },
      { kind: "step", step: 4, rate: 59973 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 55217 },
      { kind: "step", step: 2, rate: 57169 },
      { kind: "step", step: 3, rate: 59127 },
      { kind: "step", step: 4, rate: 62012 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62412 },
      { kind: "step", step: 2, rate: 64282 },
      { kind: "step", step: 3, rate: 66212 }, 
      { kind: "step", step: 4, rate: 68107 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64534 },
      { kind: "step", step: 2, rate: 66468 },
      { kind: "step", step: 3, rate: 68463 },
      { kind: "step", step: 4, rate: 70423 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72123 },
      { kind: "step", step: 2, rate: 74165 },
      { kind: "step", step: 3, rate: 76318 }, 
      { kind: "step", step: 4, rate: 79943 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74575 },
      { kind: "step", step: 2, rate: 76687 },
      { kind: "step", step: 3, rate: 78913 },
      { kind: "step", step: 4, rate: 82661 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81714 },
      { kind: "step", step: 2, rate: 83961 },
      { kind: "step", step: 3, rate: 86341 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84492 },
      { kind: "step", step: 2, rate: 86816 },
      { kind: "step", step: 3, rate: 89277 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87584 },
      { kind: "step", step: 2, rate: 89967 },
      { kind: "step", step: 3, rate: 94719 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90562 },
      { kind: "step", step: 2, rate: 93026 },
      { kind: "step", step: 3, rate: 97939 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98045 },
      { kind: "step", step: 2, rate: 102802 },
      { kind: "step", step: 3, rate: 108189 },
      { kind: "step", step: 4, rate: 110612 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101379 },
      { kind: "step", step: 2, rate: 106297 },
      { kind: "step", step: 3, rate: 111867 },
      { kind: "step", step: 4, rate: 114373 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120486 },
      { kind: "step", step: 2, rate: 125730 },
      { kind: "step", step: 3, rate: 131979 }, 
      { kind: "step", step: 4, rate: 137417 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124583 },
      { kind: "step", step: 2, rate: 130005 },
      { kind: "step", step: 3, rate: 136466 },
      { kind: "step", step: 4, rate: 142089 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143753 },
      { kind: "step", step: 2, rate: 156789 },
      { kind: "step", step: 3, rate: 162025 },
      { kind: "step", step: 4, rate: 170194 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-digital-health-agency-adha",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148641 },
      { kind: "step", step: 2, rate: 162120 },
      { kind: "step", step: 3, rate: 167534 },
      { kind: "step", step: 4, rate: 175981 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55216 },
      { kind: "step", step: 3, rate: 59130 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59319 },
      { kind: "step", step: 3, rate: 61140 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61293 },
      { kind: "step", step: 2, rate: 63722 },
      { kind: "step", step: 3, rate: 67140 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63377 },
      { kind: "step", step: 2, rate: 65889 },
      { kind: "step", step: 3, rate: 69423 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69710 },
      { kind: "step", step: 2, rate: 72956 },
      { kind: "step", step: 3, rate: 76272 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72080 },
      { kind: "step", step: 2, rate: 75437 },
      { kind: "step", step: 3, rate: 78865 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78134 },
      { kind: "step", step: 2, rate: 81808 },
      { kind: "step", step: 3, rate: 84626 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80791 },
      { kind: "step", step: 2, rate: 84589 },
      { kind: "step", step: 3, rate: 87503 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87110 },
      { kind: "step", step: 2, rate: 90902 },
      { kind: "step", step: 3, rate: 93303 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90072 },
      { kind: "step", step: 2, rate: 93993 },
      { kind: "step", step: 3, rate: 96829 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 97702 },
      { kind: "step", step: 2, rate: 102531 },
      { kind: "step", step: 3, rate: 108007 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101024 },
      { kind: "step", step: 2, rate: 106017 },
      { kind: "step", step: 3, rate: 111701 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119501 },
      { kind: "step", step: 2, rate: 126387 },
      { kind: "step", step: 3, rate: 133305 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123564 },
      { kind: "step", step: 2, rate: 130684 },
      { kind: "step", step: 3, rate: 137837 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 146246 },
      { kind: "step", step: 2, rate: 155301 },
      { kind: "step", step: 3, rate: 164355 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|australian-institute-of-health-and-welfare-aihw",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 151218 },
      { kind: "step", step: 2, rate: 160581 },
      { kind: "step", step: 3, rate: 169943 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55179 },
      { kind: "step", step: 3, rate: 56671 },
      { kind: "step", step: 4, rate: 59879 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58598 },
      { kind: "step", step: 4, rate: 61915 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60416 },
      { kind: "step", step: 2, rate: 62078 },
      { kind: "step", step: 3, rate: 63709 },
      { kind: "step", step: 4, rate: 65366 },
      { kind: "step", step: 5, rate: 67991 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64189 },
      { kind: "step", step: 3, rate: 65875 },
      { kind: "step", step: 4, rate: 67588 },
      { kind: "step", step: 5, rate: 70303 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 68815 },
      { kind: "step", step: 2, rate: 70601 },
      { kind: "step", step: 3, rate: 72392 }, 
      { kind: "step", step: 4, rate: 75893 },              
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71155 },
      { kind: "step", step: 2, rate: 73001 },
      { kind: "step", step: 3, rate: 74853 }, 
      { kind: "step", step: 4, rate: 78473 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 76698 },
      { kind: "step", step: 2, rate: 79138 },
      { kind: "step", step: 3, rate: 81191 },
      { kind: "step", step: 4, rate: 84510 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79306 },
      { kind: "step", step: 2, rate: 81829 },
      { kind: "step", step: 3, rate: 83951 },
      { kind: "step", step: 4, rate: 87383 },   
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85545 },
      { kind: "step", step: 2, rate: 88222 },
      { kind: "step", step: 3, rate: 92053 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91222 },
      { kind: "step", step: 3, rate: 95183 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94694 },
      { kind: "step", step: 2, rate: 97288 },
      { kind: "step", step: 3, rate: 102176 },
      { kind: "step", step: 4, rate: 107708 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 100596 },
      { kind: "step", step: 3, rate: 105650 },
      { kind: "step", step: 4, rate: 111370 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 118446 },
      { kind: "step", step: 2, rate: 125193 },
      { kind: "step", step: 3, rate: 131940 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122473 },
      { kind: "step", step: 2, rate: 129450 },
      { kind: "step", step: 3, rate: 136426 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139827 },
      { kind: "step", step: 2, rate: 148445 },
      { kind: "step", step: 3, rate: 157174 },
      { kind: "step", step: 4, rate: 162432 },
      { kind: "step", step: 5, rate: 169376 },
      { kind: "step", step: 6, rate: 172353 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|food-standards-australia-new-zealand",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 144581 },
      { kind: "step", step: 2, rate: 153492 },
      { kind: "step", step: 3, rate: 162518 },
      { kind: "step", step: 4, rate: 167955 },
      { kind: "step", step: 5, rate: 175135 },
      { kind: "step", step: 6, rate: 178213 },           
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55452 },
      { kind: "step", step: 3, rate: 57351 },
      { kind: "step", step: 4, rate: 60150 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59301 },
      { kind: "step", step: 3, rate: 62195 },
    ]
  },   
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62595 },
      { kind: "step", step: 2, rate: 64473 },
      { kind: "step", step: 3, rate: 66410 },
      { kind: "step", step: 4, rate: 68307 },  
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64723 },
      { kind: "step", step: 2, rate: 66665 },
      { kind: "step", step: 3, rate: 68668 },
      { kind: "step", step: 4, rate: 70629 },   
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72336 },
      { kind: "step", step: 2, rate: 74384 },
      { kind: "step", step: 3, rate: 76542 },
      { kind: "step", step: 4, rate: 80179 },         
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74795 },
      { kind: "step", step: 2, rate: 76913 },
      { kind: "step", step: 3, rate: 79144 },
      { kind: "step", step: 4, rate: 82905 },                               
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81954 },
      { kind: "step", step: 2, rate: 84209 },
      { kind: "step", step: 3, rate: 86594 },             
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84740 },
      { kind: "step", step: 2, rate: 87072 },
      { kind: "step", step: 3, rate: 89538 },         
    ]
  },     
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87843 },
      { kind: "step", step: 2, rate: 90231 },
      { kind: "step", step: 3, rate: 94998 },   
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90830 },
      { kind: "step", step: 2, rate: 93299 },
      { kind: "step", step: 3, rate: 98229 },       
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98336 },
      { kind: "step", step: 2, rate: 103106 },
      { kind: "step", step: 3, rate: 108509 },
      { kind: "step", step: 4, rate: 110937 },                     
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101679 },
      { kind: "step", step: 2, rate: 106612 },
      { kind: "step", step: 3, rate: 112198 },
      { kind: "step", step: 4, rate: 114709 },                               
    ]
  },    
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120842 },
      { kind: "step", step: 2, rate: 126100 },
      { kind: "step", step: 3, rate: 132368 },
      { kind: "step", step: 4, rate: 137823 },                                 
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124951 },
      { kind: "step", step: 2, rate: 130387 },
      { kind: "step", step: 3, rate: 136869 },
      { kind: "step", step: 4, rate: 142509 },                        
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144175 },
      { kind: "step", step: 2, rate: 157252 },
      { kind: "step", step: 3, rate: 162501 },
      { kind: "step", step: 4, rate: 170695 },                       
    ]
  },
  {
    agencyId: "health-disability-and-ageing|independent-health-and-aged-care-pricing-authority-ihacpa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149077 },
      { kind: "step", step: 2, rate: 162599 },
      { kind: "step", step: 3, rate: 168026 },
      { kind: "step", step: 4, rate: 176499 },                       
    ]
  }, 
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 58810 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 60946 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59830 },
      { kind: "step", step: 2, rate: 62641 },
      { kind: "step", step: 3, rate: 67516 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64771 },
      { kind: "step", step: 3, rate: 69812 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67974 },
      { kind: "step", step: 2, rate: 70892 },
      { kind: "step", step: 3, rate: 76130 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 73302 },
      { kind: "step", step: 3, rate: 78718 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 76737 },
      { kind: "step", step: 2, rate: 79658 },
      { kind: "step", step: 3, rate: 85174 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79346 },
      { kind: "step", step: 2, rate: 82366 },
      { kind: "step", step: 3, rate: 88070 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86624 },
      { kind: "step", step: 2, rate: 89943 },
      { kind: "step", step: 3, rate: 93253 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89569 },
      { kind: "step", step: 2, rate: 93001 },
      { kind: "step", step: 3, rate: 96829 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96737 },
      { kind: "step", step: 2, rate: 100215 },
      { kind: "step", step: 3, rate: 106950 },
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100026 },
      { kind: "step", step: 2, rate: 103622 },
      { kind: "step", step: 3, rate: 110586 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120530 },
      { kind: "step", step: 2, rate: 127027 },
      { kind: "step", step: 3, rate: 131919 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124628 },
      { kind: "step", step: 2, rate: 131346 },
      { kind: "step", step: 3, rate: 136404 },    
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 142064 },
      { kind: "step", step: 2, rate: 151322 },
      { kind: "step", step: 3, rate: 161291 },               
    ]
  },
  {
    agencyId: "health-disability-and-ageing|national-disability-insurance-agency-ndia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146894 },
      { kind: "step", step: 2, rate: 156467 },
      { kind: "step", step: 3, rate: 166775 },    
    ]
  },                              
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS1",
    agencyClassification: "DHA Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 54516 },  
      { kind: "step", step: "Max", rate: 58247 },              
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS1",
    agencyClassification: "DHA Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 57497 },         
      { kind: "step", step: "Max", rate: 60946 },              
    ]
  },   
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS2",
    agencyClassification: "DHA Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 59520 },         
      { kind: "step", step: "Max", rate: 66115 },              
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS2",
    agencyClassification: "DHA Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 62775 },         
      { kind: "step", step: "Max", rate: 68425 },      
    ]
  }, 
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS3",
    agencyClassification: "DHA Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 66839 },         
      { kind: "step", step: "Max", rate: 76792 },        
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS3",
    agencyClassification: "DHA Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 70477 },         
      { kind: "step", step: "Max", rate: 79403 },                            
    ]
  }, 
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS4",
    agencyClassification: "DHA Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 76863 },         
      { kind: "step", step: "Max", rate: 82906 },                 
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS4",
    agencyClassification: "DHA Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 79476 },         
      { kind: "step", step: "Max", rate: 86246 },          
    ]
  },     
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS5",
    agencyClassification: "DHA Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 84228 },         
      { kind: "step", step: "Max", rate: 91809 },        
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS5",
    agencyClassification: "DHA Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 88834 },         
      { kind: "step", step: "Max", rate: 96829 },         
    ]
  }, 
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS6",
    agencyClassification: "DHA Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 94563 },         
      { kind: "step", step: "Max", rate: 107713 },                    
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "APS6",
    agencyClassification: "DHA Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 99734 },         
      { kind: "step", step: "Max", rate: 111701 },                                  
    ]
  },    
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 115443 },         
      { kind: "step", step: "Max", rate: 134865 },                                  
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 121755 },            
      { kind: "step", step: "Max", rate: 139450 },                           
    ]
  }, 
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "Min", rate: 136260 },         
      { kind: "step", step: "Max", rate: 177318 },                          
    ]
  },
  {
    agencyId: "home-affairs|department-of-home-affairs",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "Min", rate: 140893 },             
      { kind: "step", step: "Max", rate: 183347 },                       
    ]
  }, 
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54733 },
      { kind: "step", step: 3, rate: 56586 },
      { kind: "step", step: 4, rate: 58446 },
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58510 },
      { kind: "step", step: 3, rate: 60433 },
      { kind: "step", step: 4, rate: 60947 },
    ]
  },  
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 60748 },
      { kind: "step", step: 2, rate: 62948 },
      { kind: "step", step: 3, rate: 65156 },
      { kind: "step", step: 4, rate: 67361 },              
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62813 },
      { kind: "step", step: 2, rate: 65088 },
      { kind: "step", step: 3, rate: 67371 },
      { kind: "step", step: 4, rate: 69651 },         
    ]
  },  
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 70280 },
      { kind: "step", step: 2, rate: 72138 },
      { kind: "step", step: 3, rate: 73995 },
      { kind: "step", step: 4, rate: 75854 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72670 },
      { kind: "step", step: 2, rate: 74591 },
      { kind: "step", step: 3, rate: 76511 },
      { kind: "step", step: 4, rate: 78433 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 77250 },
      { kind: "step", step: 2, rate: 79463 },
      { kind: "step", step: 3, rate: 81670 },
      { kind: "step", step: 4, rate: 83878 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79877 },
      { kind: "step", step: 2, rate: 82165 },
      { kind: "step", step: 3, rate: 84447 },
      { kind: "step", step: 4, rate: 86730 },         
    ]
  },  
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 85534 },
      { kind: "step", step: 2, rate: 87254 },
      { kind: "step", step: 3, rate: 89125 },
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88833 },
      { kind: "step", step: 2, rate: 90221 },
      { kind: "step", step: 3, rate: 92155 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 96500 },
      { kind: "step", step: 3, rate: 101058 },
      { kind: "step", step: 4, rate: 105909 },
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99733 },
      { kind: "step", step: 2, rate: 99781 },
      { kind: "step", step: 3, rate: 104494 },
      { kind: "step", step: 4, rate: 109202 },
      { kind: "step", step: 5, rate: 111702 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 117662 },
      { kind: "step", step: 2, rate: 125102 },
      { kind: "step", step: 3, rate: 133478 },
      { kind: "step", step: 4, rate: 141853 },               
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121756 },
      { kind: "step", step: 2, rate: 129355 },
      { kind: "step", step: 3, rate: 138016 }, 
      { kind: "step", step: 4, rate: 146676 },      
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 147006 },
      { kind: "step", step: 2, rate: 156321 },
      { kind: "step", step: 3, rate: 165631 },                   
    ]
  },
  {
    agencyId: "home-affairs|australian-crime-commission-australian-criminal-intelligence-commission",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152004 },
      { kind: "step", step: 2, rate: 161636 },
      { kind: "step", step: 3, rate: 171262 },       
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54733 },
      { kind: "step", step: 3, rate: 56586 },
      { kind: "step", step: 4, rate: 58446 },
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58510 },
      { kind: "step", step: 3, rate: 60433 },
      { kind: "step", step: 4, rate: 60947 },
    ]
  },  
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 60748 },
      { kind: "step", step: 2, rate: 62948 },
      { kind: "step", step: 3, rate: 65156 },
      { kind: "step", step: 4, rate: 67361 },              
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62813 },
      { kind: "step", step: 2, rate: 65088 },
      { kind: "step", step: 3, rate: 67371 },
      { kind: "step", step: 4, rate: 69651 },         
    ]
  },  
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 70280 },
      { kind: "step", step: 2, rate: 72138 },
      { kind: "step", step: 3, rate: 73995 },
      { kind: "step", step: 4, rate: 75854 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72670 },
      { kind: "step", step: 2, rate: 74591 },
      { kind: "step", step: 3, rate: 76511 },
      { kind: "step", step: 4, rate: 78433 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 77250 },
      { kind: "step", step: 2, rate: 79463 },
      { kind: "step", step: 3, rate: 81670 },
      { kind: "step", step: 4, rate: 83878 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79877 },
      { kind: "step", step: 2, rate: 82165 },
      { kind: "step", step: 3, rate: 84447 },
      { kind: "step", step: 4, rate: 86730 },         
    ]
  },  
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 85534 },
      { kind: "step", step: 2, rate: 87254 },
      { kind: "step", step: 3, rate: 89125 },
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88833 },
      { kind: "step", step: 2, rate: 90221 },
      { kind: "step", step: 3, rate: 92155 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 96500 },
      { kind: "step", step: 3, rate: 101058 },
      { kind: "step", step: 4, rate: 105909 },
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99733 },
      { kind: "step", step: 2, rate: 99781 },
      { kind: "step", step: 3, rate: 104494 },
      { kind: "step", step: 4, rate: 109202 },
      { kind: "step", step: 5, rate: 111702 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 117662 },
      { kind: "step", step: 2, rate: 125102 },
      { kind: "step", step: 3, rate: 133478 },
      { kind: "step", step: 4, rate: 141853 },               
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121756 },
      { kind: "step", step: 2, rate: 129355 },
      { kind: "step", step: 3, rate: 138016 }, 
      { kind: "step", step: 4, rate: 146676 },      
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-29",
    effectiveTo: "2026-04-28",
    points: [
      { kind: "step", step: 1, rate: 147006 },
      { kind: "step", step: 2, rate: 156321 },
      { kind: "step", step: 3, rate: 165631 },                   
    ]
  },
  {
    agencyId: "home-affairs|australian-institute-of-criminology",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-29",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152004 },
      { kind: "step", step: 2, rate: 161636 },
      { kind: "step", step: 3, rate: 171262 },       
    ]
  },   
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57734 },
      { kind: "step", step: 2, rate: 58819 },
      { kind: "step", step: 3, rate: 59910 }, 
      { kind: "step", step: 4, rate: 61003 },
      { kind: "step", step: 5, rate: 62091 },
      { kind: "step", step: 6, rate: 63179 },
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59697 },
      { kind: "step", step: 2, rate: 60819 },
      { kind: "step", step: 3, rate: 61947 },
      { kind: "step", step: 4, rate: 63077 },
      { kind: "step", step: 5, rate: 64202 },
      { kind: "step", step: 6, rate: 65327 },
    ]
  },  
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 65357 },
      { kind: "step", step: 2, rate: 66445 },
      { kind: "step", step: 3, rate: 67535 },
      { kind: "step", step: 4, rate: 68626 },
      { kind: "step", step: 5, rate: 69714 },
      { kind: "step", step: 6, rate: 70804 },
      { kind: "step", step: 7, rate: 71893 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 67579 },
      { kind: "step", step: 2, rate: 68704 },
      { kind: "step", step: 3, rate: 69831 },
      { kind: "step", step: 4, rate: 70959 },
      { kind: "step", step: 5, rate: 72084 },
      { kind: "step", step: 6, rate: 73211 },
      { kind: "step", step: 7, rate: 74337 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72980 },
      { kind: "step", step: 2, rate: 66445 },
      { kind: "step", step: 3, rate: 67535 },
      { kind: "step", step: 4, rate: 68626 },
      { kind: "step", step: 5, rate: 69714 },
      { kind: "step", step: 6, rate: 70804 },
      { kind: "step", step: 7, rate: 71893 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75461 },
      { kind: "step", step: 2, rate: 76591 },
      { kind: "step", step: 3, rate: 77715 },
      { kind: "step", step: 4, rate: 78841 },
      { kind: "step", step: 5, rate: 79969 },
      { kind: "step", step: 6, rate: 81094 },
      { kind: "step", step: 7, rate: 82220 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80608 },
      { kind: "step", step: 2, rate: 81695 },
      { kind: "step", step: 3, rate: 83330 },
      { kind: "step", step: 4, rate: 84963 },
      { kind: "step", step: 5, rate: 86052 },
      { kind: "step", step: 6, rate: 87686 },
      { kind: "step", step: 7, rate: 89323 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83349 },
      { kind: "step", step: 2, rate: 84473 },
      { kind: "step", step: 3, rate: 86163 },
      { kind: "step", step: 4, rate: 87852 },
      { kind: "step", step: 5, rate: 88978 },
      { kind: "step", step: 6, rate: 90667 },
      { kind: "step", step: 7, rate: 92360 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90411 },
      { kind: "step", step: 2, rate: 91498 },
      { kind: "step", step: 3, rate: 92589 },
      { kind: "step", step: 4, rate: 93677 },
      { kind: "step", step: 5, rate: 94765 },
      { kind: "step", step: 6, rate: 95857 },
      { kind: "step", step: 7, rate: 96946 },
      { kind: "step", step: 8, rate: 99126 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93485 },
      { kind: "step", step: 2, rate: 94609 },
      { kind: "step", step: 3, rate: 95737 },
      { kind: "step", step: 4, rate: 96862 },
      { kind: "step", step: 5, rate: 97987 },
      { kind: "step", step: 6, rate: 99116 },
      { kind: "step", step: 7, rate: 100242 },
      { kind: "step", step: 8, rate: 102496 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101303 },
      { kind: "step", step: 2, rate: 103480 },
      { kind: "step", step: 3, rate: 105661 },
      { kind: "step", step: 4, rate: 107838 },
      { kind: "step", step: 5, rate: 110019 },
      { kind: "step", step: 6, rate: 112713 },
      { kind: "step", step: 7, rate: 115406 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104747 },
      { kind: "step", step: 2, rate: 106998 },
      { kind: "step", step: 3, rate: 109253 },
      { kind: "step", step: 4, rate: 111504 },
      { kind: "step", step: 5, rate: 113760 },
      { kind: "step", step: 6, rate: 116545 },
      { kind: "step", step: 7, rate: 119330 },          
    ]
  },  
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123799 },
      { kind: "step", step: 2, rate: 125687 },
      { kind: "step", step: 3, rate: 127781 },
      { kind: "step", step: 4, rate: 129877 },
      { kind: "step", step: 5, rate: 132496 },
      { kind: "step", step: 6, rate: 135111 },
      { kind: "step", step: 7, rate: 137210 },
      { kind: "step", step: 8, rate: 140935 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 128008 },
      { kind: "step", step: 2, rate: 129960 },
      { kind: "step", step: 3, rate: 132126 },
      { kind: "step", step: 4, rate: 134293 },
      { kind: "step", step: 5, rate: 137001 },
      { kind: "step", step: 6, rate: 139705 },
      { kind: "step", step: 7, rate: 141875 },
      { kind: "step", step: 8, rate: 145727 },          
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144299 },
      { kind: "step", step: 2, rate: 148141 },
      { kind: "step", step: 3, rate: 151408 },
      { kind: "step", step: 4, rate: 154677 },
      { kind: "step", step: 5, rate: 159036 },
      { kind: "step", step: 6, rate: 162305 },
      { kind: "step", step: 7, rate: 165570 },
      { kind: "step", step: 8, rate: 170488 },                     
    ]
  },
  {
    agencyId: "home-affairs|australian-transaction-reports-and-analysis-centre-austrac",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149205 },
      { kind: "step", step: 2, rate: 153178 },
      { kind: "step", step: 3, rate: 156556 },
      { kind: "step", step: 4, rate: 159936 },
      { kind: "step", step: 5, rate: 164443 },
      { kind: "step", step: 6, rate: 167823 },
      { kind: "step", step: 7, rate: 171199 },
      { kind: "step", step: 8, rate: 176285 },          
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 57501 },
      { kind: "step", step: 3, rate: 59473 },               
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59456 },
      { kind: "step", step: 3, rate: 61495 },    
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63885 },
      { kind: "step", step: 2, rate: 65441 },
      { kind: "step", step: 3, rate: 66821 },
      { kind: "step", step: 4, rate: 68078 },               
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66057 },
      { kind: "step", step: 2, rate: 67666 },
      { kind: "step", step: 3, rate: 69093 },
      { kind: "step", step: 4, rate: 70393 },    
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71344 },
      { kind: "step", step: 2, rate: 73095 },
      { kind: "step", step: 3, rate: 74310 },               
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73770 },
      { kind: "step", step: 2, rate: 75580 },
      { kind: "step", step: 3, rate: 76837 },    
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77607 },
      { kind: "step", step: 2, rate: 79772 },
      { kind: "step", step: 3, rate: 81205 }, 
      { kind: "step", step: 4, rate: 82997 },              
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80246 },
      { kind: "step", step: 2, rate: 82484 },
      { kind: "step", step: 3, rate: 83966 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85687 },
      { kind: "step", step: 2, rate: 87514 },
      { kind: "step", step: 3, rate: 89559 }, 
      { kind: "step", step: 4, rate: 91607 },
      { kind: "step", step: 5, rate: 91809 },              
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90489 },
      { kind: "step", step: 3, rate: 92604 },
      { kind: "step", step: 4, rate: 94722 },
      { kind: "step", step: 5, rate: 96829 },    
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94775 },
      { kind: "step", step: 2, rate: 99469 },
      { kind: "step", step: 3, rate: 103222 },
      { kind: "step", step: 4, rate: 106505 },               
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102851 },
      { kind: "step", step: 3, rate: 106732 },
      { kind: "step", step: 4, rate: 110126 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 121794 },
      { kind: "step", step: 2, rate: 127466 },
      { kind: "step", step: 3, rate: 133138 }, 
      { kind: "step", step: 4, rate: 138811 },              
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125935 },
      { kind: "step", step: 2, rate: 131800 },
      { kind: "step", step: 3, rate: 137665 }, 
      { kind: "step", step: 4, rate: 143531 },   
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141759 },
      { kind: "step", step: 2, rate: 150744 },
      { kind: "step", step: 3, rate: 159732 },
      { kind: "step", step: 4, rate: 168716 },               
    ]
  },
  {
    agencyId: "home-affairs|national-emergency-management-agency-nema",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146579 },
      { kind: "step", step: 2, rate: 155869 },
      { kind: "step", step: 3, rate: 165163 },
      { kind: "step", step: 4, rate: 174452 },    
    ]
  },             
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55639 },
      { kind: "step", step: 3, rate: 57297 },
      { kind: "step", step: 4, rate: 59470 },                 
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57531 },
      { kind: "step", step: 3, rate: 59245 },
      { kind: "step", step: 4, rate: 61492 },        
    ]
  },   
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61147 },
      { kind: "step", step: 2, rate: 62986 },
      { kind: "step", step: 3, rate: 65059 },
      { kind: "step", step: 4, rate: 67503 },     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63226 },
      { kind: "step", step: 2, rate: 65128 },
      { kind: "step", step: 3, rate: 67271 },
      { kind: "step", step: 4, rate: 69798 },   
    ]
  }, 
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69761 },
      { kind: "step", step: 2, rate: 71560 },
      { kind: "step", step: 3, rate: 73362 },
      { kind: "step", step: 4, rate: 75327 },           
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72133 },
      { kind: "step", step: 2, rate: 73993 },
      { kind: "step", step: 3, rate: 75856 },
      { kind: "step", step: 4, rate: 77888 },                           
    ]
  }, 
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77294 },
      { kind: "step", step: 2, rate: 79758 },
      { kind: "step", step: 3, rate: 81823 },
      { kind: "step", step: 4, rate: 83994 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79922 },
      { kind: "step", step: 2, rate: 82470 },
      { kind: "step", step: 3, rate: 84605 },
      { kind: "step", step: 4, rate: 86850 },      
    ]
  },     
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86291 },
      { kind: "step", step: 2, rate: 89012 },
      { kind: "step", step: 3, rate: 91497 },
      { kind: "step", step: 4, rate: 91809 },      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89225 },
      { kind: "step", step: 2, rate: 92038 },
      { kind: "step", step: 3, rate: 94608 },
      { kind: "step", step: 4, rate: 96829 },          
    ]
  }, 
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95501 },
      { kind: "step", step: 2, rate: 99823 },
      { kind: "step", step: 3, rate: 103938 },
      { kind: "step", step: 4, rate: 107040 }, 
      { kind: "step", step: 5, rate: 108951 },   
      { kind: "step", step: 6, rate: 114201 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99733 },
      { kind: "step", step: 2, rate: 103217 },
      { kind: "step", step: 3, rate: 107472 },
      { kind: "step", step: 4, rate: 110679 }, 
      { kind: "step", step: 5, rate: 112655 },   
      { kind: "step", step: 6, rate: 118084 },                                  
    ]
  },    
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122667 },
      { kind: "step", step: 2, rate: 125700 },
      { kind: "step", step: 3, rate: 129425 },
      { kind: "step", step: 4, rate: 135320 }, 
      { kind: "step", step: 5, rate: 139534 },                                    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126838 },
      { kind: "step", step: 2, rate: 129974 },
      { kind: "step", step: 3, rate: 133825 },
      { kind: "step", step: 4, rate: 139921 }, 
      { kind: "step", step: 5, rate: 144278 },                           
    ]
  }, 
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144716 },
      { kind: "step", step: 2, rate: 151086 },
      { kind: "step", step: 3, rate: 158914 },
      { kind: "step", step: 4, rate: 162627 }, 
      { kind: "step", step: 5, rate: 164285 },   
      { kind: "step", step: 6, rate: 169461 },
      { kind: "step", step: 7, rate: 173095 },      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|department-of-infrastructure-transport-regional-development-communications-sport-and-the-arts",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149636 },
      { kind: "step", step: 2, rate: 156223 },
      { kind: "step", step: 3, rate: 164317 },
      { kind: "step", step: 4, rate: 168156 }, 
      { kind: "step", step: 5, rate: 169871 },   
      { kind: "step", step: 6, rate: 175223 }, 
      { kind: "step", step: 7, rate: 178980 },      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 59369 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 61388 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60557 },
      { kind: "step", step: 2, rate: 66798 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 69069 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 68817 },
      { kind: "step", step: 2, rate: 70548 },
      { kind: "step", step: 3, rate: 74837 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71157 },
      { kind: "step", step: 2, rate: 72947 },
      { kind: "step", step: 3, rate: 77381 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77079 },
      { kind: "step", step: 2, rate: 79069 },
      { kind: "step", step: 3, rate: 83783 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79700 },
      { kind: "step", step: 2, rate: 81757 },
      { kind: "step", step: 3, rate: 86632 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85883 },
      { kind: "step", step: 2, rate: 88414 },
      { kind: "step", step: 3, rate: 92730 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91420 },
      { kind: "step", step: 3, rate: 95883 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94658 },
      { kind: "step", step: 2, rate: 99392 },
      { kind: "step", step: 3, rate: 106898 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102772 },
      { kind: "step", step: 3, rate: 110533 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 120970 },
      { kind: "step", step: 3, rate: 129706 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 125083 },
      { kind: "step", step: 3, rate: 134116 },    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139146 },
      { kind: "step", step: 2, rate: 148450 },
      { kind: "step", step: 3, rate: 157728 },
      { kind: "step", step: 4, rate: 164602 },
      { kind: "step", step: 5, rate: 168468 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-communications-and-media-authority-acma",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 143877 },
      { kind: "step", step: 2, rate: 153497 },
      { kind: "step", step: 3, rate: 163091 },
      { kind: "step", step: 4, rate: 170198 },
      { kind: "step", step: 5, rate: 174196 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55758 },
      { kind: "step", step: 3, rate: 57419 },
      { kind: "step", step: 4, rate: 59594 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57654 },
      { kind: "step", step: 3, rate: 59371 }, 
      { kind: "step", step: 4, rate: 61620 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61273 },
      { kind: "step", step: 2, rate: 63118 },
      { kind: "step", step: 3, rate: 65196 },
      { kind: "step", step: 4, rate: 67647 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63356 },
      { kind: "step", step: 2, rate: 65264 },
      { kind: "step", step: 3, rate: 67413 },
      { kind: "step", step: 4, rate: 69947 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69907 },
      { kind: "step", step: 2, rate: 71710 },
      { kind: "step", step: 3, rate: 73513 }, 
      { kind: "step", step: 4, rate: 75485 },              
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72284 },
      { kind: "step", step: 2, rate: 74148 },
      { kind: "step", step: 3, rate: 76012 },
      { kind: "step", step: 4, rate: 78051 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77459 },
      { kind: "step", step: 2, rate: 79924 },
      { kind: "step", step: 3, rate: 81995 }, 
      { kind: "step", step: 4, rate: 84169 },              
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80093 },
      { kind: "step", step: 2, rate: 82641 },
      { kind: "step", step: 3, rate: 84783 },
      { kind: "step", step: 4, rate: 87031 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86474 },
      { kind: "step", step: 2, rate: 89199 },
      { kind: "step", step: 3, rate: 91695 },
      { kind: "step", step: 4, rate: 93372 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89414 },
      { kind: "step", step: 2, rate: 92232 },
      { kind: "step", step: 3, rate: 94812 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95575 },
      { kind: "step", step: 2, rate: 100075 },
      { kind: "step", step: 3, rate: 104577 },
      { kind: "step", step: 4, rate: 109082 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103478 },
      { kind: "step", step: 3, rate: 108133 },
      { kind: "step", step: 4, rate: 112791 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120154 },
      { kind: "step", step: 2, rate: 124692 },
      { kind: "step", step: 3, rate: 129697 },
      { kind: "step", step: 4, rate: 132630 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124239 },
      { kind: "step", step: 2, rate: 128932 },
      { kind: "step", step: 3, rate: 134107 },
      { kind: "step", step: 4, rate: 137139 },    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 142785 },
      { kind: "step", step: 2, rate: 148471 },
      { kind: "step", step: 3, rate: 156456 },
      { kind: "step", step: 4, rate: 162970 },              
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-transport-safety-bureau-atsb",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 147640 },
      { kind: "step", step: 2, rate: 153519 },
      { kind: "step", step: 3, rate: 161776 },
      { kind: "step", step: 4, rate: 168511 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56119 },
      { kind: "step", step: 3, rate: 58106 },
      { kind: "step", step: 4, rate: 59559 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58027 },
      { kind: "step", step: 3, rate: 60082 },
      { kind: "step", step: 4, rate: 61584 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61880 },
      { kind: "step", step: 2, rate: 63868 },
      { kind: "step", step: 3, rate: 65853 },
      { kind: "step", step: 4, rate: 67500 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63984 },
      { kind: "step", step: 2, rate: 66040 },
      { kind: "step", step: 3, rate: 68092 },
      { kind: "step", step: 4, rate: 69795 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69530 },
      { kind: "step", step: 2, rate: 71516 },
      { kind: "step", step: 3, rate: 73499 },
      { kind: "step", step: 4, rate: 75339 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71894 },
      { kind: "step", step: 2, rate: 73948 },
      { kind: "step", step: 3, rate: 75998 },
      { kind: "step", step: 4, rate: 77901 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77474 },
      { kind: "step", step: 2, rate: 79460 },
      { kind: "step", step: 3, rate: 81448 },
      { kind: "step", step: 4, rate: 83483 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80108 },
      { kind: "step", step: 2, rate: 82162 },
      { kind: "step", step: 3, rate: 84217 }, 
      { kind: "step", step: 4, rate: 86321 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85418 },
      { kind: "step", step: 2, rate: 87408 },
      { kind: "step", step: 3, rate: 89393 }, 
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90380 },
      { kind: "step", step: 3, rate: 92432 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96344 },
      { kind: "step", step: 2, rate: 100321 },
      { kind: "step", step: 3, rate: 104292 }, 
      { kind: "step", step: 4, rate: 106899 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103732 },
      { kind: "step", step: 3, rate: 107838 },
      { kind: "step", step: 4, rate: 110534 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119189 },
      { kind: "step", step: 2, rate: 125150 },
      { kind: "step", step: 3, rate: 128279 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123241 },
      { kind: "step", step: 2, rate: 129405 },
      { kind: "step", step: 3, rate: 132713 },    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143026 },
      { kind: "step", step: 2, rate: 150972 },
      { kind: "step", step: 3, rate: 154745 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-archives-of-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 147889 },
      { kind: "step", step: 2, rate: 156105 },
      { kind: "step", step: 3, rate: 160006 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 3, rate: 54516 },
      { kind: "step", step: 4, rate: 56151 },
      { kind: "step", step: 5, rate: 57787 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 57497 },
      { kind: "step", step: 4, rate: 59222 },
      { kind: "step", step: 5, rate: 60946 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 59521 },
      { kind: "step", step: 3, rate: 61710 },
      { kind: "step", step: 4, rate: 63560 },
      { kind: "step", step: 5, rate: 63987 },
      { kind: "step", step: 6, rate: 64877 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 62775 },
      { kind: "step", step: 4, rate: 63808 },
      { kind: "step", step: 5, rate: 65721 },
      { kind: "step", step: 6, rate: 67083 },
      { kind: "step", step: 7, rate: 68425 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 66823 },
      { kind: "step", step: 3, rate: 68407 },
      { kind: "step", step: 4, rate: 70458 },
      { kind: "step", step: 5, rate: 72116 },
      { kind: "step", step: 6, rate: 72837 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 70477 },
      { kind: "step", step: 3, rate: 70733 },
      { kind: "step", step: 4, rate: 72854 },
      { kind: "step", step: 5, rate: 74568 },
      { kind: "step", step: 6, rate: 76820 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 75022 },
      { kind: "step", step: 3, rate: 76701 },
      { kind: "step", step: 4, rate: 79003 },
      { kind: "step", step: 5, rate: 80965 },
      { kind: "step", step: 6, rate: 81775 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 79125 },
      { kind: "step", step: 3, rate: 79309 },
      { kind: "step", step: 4, rate: 81689 },
      { kind: "step", step: 5, rate: 83718 },
      { kind: "step", step: 6, rate: 86246 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 84228 },
      { kind: "step", step: 3, rate: 86669 }, 
      { kind: "step", step: 4, rate: 90900 },
      { kind: "step", step: 5, rate: 91809 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 89616 }, 
      { kind: "step", step: 4, rate: 93991 },
      { kind: "step", step: 5, rate: 96829 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 97752 }, 
      { kind: "step", step: 4, rate: 102124 },
      { kind: "step", step: 5, rate: 107497 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 101076 },
      { kind: "step", step: 4, rate: 105596 },
      { kind: "step", step: 5, rate: 111152 },
      { kind: "step", step: 6, rate: 111702 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 117802 },
      { kind: "step", step: 3, rate: 120935 },
      { kind: "step", step: 4, rate: 122280 },
      { kind: "step", step: 5, rate: 124967 },
      { kind: "step", step: 6, rate: 125832 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 125047 },
      { kind: "step", step: 3, rate: 126438 },
      { kind: "step", step: 4, rate: 129216 },
      { kind: "step", step: 5, rate: 130110 },
      { kind: "step", step: 6, rate: 132713 },          
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 133910 },
      { kind: "step", step: 2, rate: 142650 },
      { kind: "step", step: 3, rate: 147419 }, 
      { kind: "step", step: 4, rate: 149930 },
      { kind: "step", step: 5, rate: 155873 },
      { kind: "step", step: 6, rate: 163934 },
      { kind: "step", step: 7, rate: 171998 },                    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-capital-authority-nca",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 147500 },
      { kind: "step", step: 3, rate: 152431 },
      { kind: "step", step: 4, rate: 155028 },
      { kind: "step", step: 5, rate: 161173 },
      { kind: "step", step: 6, rate: 169508 },
      { kind: "step", step: 7, rate: 177846 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54833 },
      { kind: "step", step: 3, rate: 57215 },
      { kind: "step", step: 4, rate: 57787 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59160 },
      { kind: "step", step: 4, rate: 59752 },
      { kind: "step", step: 5, rate: 60946 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 61169 },
      { kind: "step", step: 3, rate: 64563 }, 
      { kind: "step", step: 4, rate: 68219 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 63249 },
      { kind: "step", step: 3, rate: 66758 },
      { kind: "step", step: 4, rate: 70538 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70471 },
      { kind: "step", step: 2, rate: 73291 },
      { kind: "step", step: 3, rate: 76112 },
      { kind: "step", step: 4, rate: 79048 },
      { kind: "step", step: 5, rate: 80287 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72867 },
      { kind: "step", step: 2, rate: 75783 },
      { kind: "step", step: 3, rate: 78700 },
      { kind: "step", step: 4, rate: 81736 },
      { kind: "step", step: 5, rate: 83017 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 83505 },
      { kind: "step", step: 2, rate: 86019 },
      { kind: "step", step: 3, rate: 88853 },
      { kind: "step", step: 4, rate: 91824 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 86344 },
      { kind: "step", step: 2, rate: 88944 },
      { kind: "step", step: 3, rate: 91874 }, 
      { kind: "step", step: 4, rate: 94946 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94199 },
      { kind: "step", step: 2, rate: 96529 },
      { kind: "step", step: 3, rate: 99220 },
      { kind: "step", step: 4, rate: 102269 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 97402 },
      { kind: "step", step: 2, rate: 99811 },
      { kind: "step", step: 3, rate: 102593 }, 
      { kind: "step", step: 4, rate: 105746 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 105907 },
      { kind: "step", step: 2, rate: 108715 },
      { kind: "step", step: 3, rate: 111927 },
      { kind: "step", step: 4, rate: 115583 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 109508 },
      { kind: "step", step: 2, rate: 112411 },
      { kind: "step", step: 3, rate: 115733 }, 
      { kind: "step", step: 4, rate: 119513 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 121683 },
      { kind: "step", step: 2, rate: 125053 },
      { kind: "step", step: 3, rate: 128797 },
      { kind: "step", step: 4, rate: 132618 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125820 },
      { kind: "step", step: 2, rate: 129305 },
      { kind: "step", step: 3, rate: 133176 },
      { kind: "step", step: 4, rate: 137127 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 137562 },
      { kind: "step", step: 2, rate: 147011 },
      { kind: "step", step: 3, rate: 157396 },
      { kind: "step", step: 4, rate: 165995 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|sport-integrity-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 142239 },
      { kind: "step", step: 2, rate: 152009 },
      { kind: "step", step: 3, rate: 162747 },
      { kind: "step", step: 4, rate: 171639 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55334 },
      { kind: "step", step: 3, rate: 56164 },
      { kind: "step", step: 4, rate: 57006 }, 
      { kind: "step", step: 5, rate: 57787 },                
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58359 },
      { kind: "step", step: 3, rate: 59234 },
      { kind: "step", step: 4, rate: 60123 }, 
      { kind: "step", step: 5, rate: 60946 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 60591 },
      { kind: "step", step: 3, rate: 61682 },
      { kind: "step", step: 4, rate: 62792 }, 
      { kind: "step", step: 5, rate: 63922 },
      { kind: "step", step: 6, rate: 64877 }, 
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 63905 },
      { kind: "step", step: 3, rate: 65055 },
      { kind: "step", step: 4, rate: 66266 }, 
      { kind: "step", step: 5, rate: 67418 },
      { kind: "step", step: 6, rate: 68425 },                
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 68293 },
      { kind: "step", step: 3, rate: 69795 },
      { kind: "step", step: 4, rate: 71330 }, 
      { kind: "step", step: 5, rate: 72837 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 72027 },
      { kind: "step", step: 3, rate: 73612 },
      { kind: "step", step: 4, rate: 75231 }, 
      { kind: "step", step: 5, rate: 76820 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 76672 },
      { kind: "step", step: 3, rate: 78359 }, 
      { kind: "step", step: 4, rate: 80083 }, 
      { kind: "step", step: 5, rate: 81775 },                    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 80866 },
      { kind: "step", step: 3, rate: 82645 },
      { kind: "step", step: 4, rate: 84463 }, 
      { kind: "step", step: 5, rate: 86246 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 86081 },
      { kind: "step", step: 3, rate: 87975 },
      { kind: "step", step: 4, rate: 89910 }, 
      { kind: "step", step: 5, rate: 91809 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90788 },
      { kind: "step", step: 3, rate: 92785 },
      { kind: "step", step: 4, rate: 94826 }, 
      { kind: "step", step: 5, rate: 96829 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 96738 },
      { kind: "step", step: 3, rate: 98963 },
      { kind: "step", step: 4, rate: 101239 }, 
      { kind: "step", step: 5, rate: 103567 },
      { kind: "step", step: 6, rate: 105910 },                           
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102028 },
      { kind: "step", step: 3, rate: 104375 },
      { kind: "step", step: 4, rate: 106776 }, 
      { kind: "step", step: 5, rate: 109232 },
      { kind: "step", step: 6, rate: 111701 }, 
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 117983 },
      { kind: "step", step: 3, rate: 120579 },
      { kind: "step", step: 4, rate: 123232 }, 
      { kind: "step", step: 5, rate: 125832 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 124434 },
      { kind: "step", step: 3, rate: 127172 }, 
      { kind: "step", step: 4, rate: 129970 }, 
      { kind: "step", step: 5, rate: 132713 },         
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 133382 },
      { kind: "step", step: 2, rate: 141167 },
      { kind: "step", step: 3, rate: 145386 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|australian-national-maritime-museum-anmm",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 145967 },
      { kind: "step", step: 3, rate: 150329 },
      { kind: "step", step: 4, rate: 153336 }, 
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55639 },
      { kind: "step", step: 3, rate: 57297 },
      { kind: "step", step: 4, rate: 59470 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57531 },
      { kind: "step", step: 3, rate: 59245 },
      { kind: "step", step: 4, rate: 61492 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61147 },
      { kind: "step", step: 2, rate: 62986 },
      { kind: "step", step: 3, rate: 65059 },
      { kind: "step", step: 4, rate: 67503 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63226 },
      { kind: "step", step: 2, rate: 65128 },
      { kind: "step", step: 3, rate: 67271 },
      { kind: "step", step: 4, rate: 69798 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69761 },
      { kind: "step", step: 2, rate: 71560 },
      { kind: "step", step: 3, rate: 73362 },
      { kind: "step", step: 4, rate: 75327 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72133 },
      { kind: "step", step: 2, rate: 73993 },
      { kind: "step", step: 3, rate: 75856 },
      { kind: "step", step: 4, rate: 77888 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77294 },
      { kind: "step", step: 2, rate: 79758 },
      { kind: "step", step: 3, rate: 81823 }, 
      { kind: "step", step: 4, rate: 83994 },              
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79922 },
      { kind: "step", step: 2, rate: 82470 },
      { kind: "step", step: 3, rate: 84605 },
      { kind: "step", step: 4, rate: 86850 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86291 },
      { kind: "step", step: 2, rate: 89012 },
      { kind: "step", step: 3, rate: 91497 },
      { kind: "step", step: 4, rate: 91809 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89225 },
      { kind: "step", step: 2, rate: 92038 },
      { kind: "step", step: 3, rate: 94608 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95501 },
      { kind: "step", step: 2, rate: 99823 },
      { kind: "step", step: 3, rate: 103938 },
      { kind: "step", step: 4, rate: 107040 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103217 },
      { kind: "step", step: 3, rate: 107472 },
      { kind: "step", step: 4, rate: 110679 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122667 },
      { kind: "step", step: 2, rate: 125700 },
      { kind: "step", step: 3, rate: 129425 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126838 },
      { kind: "step", step: 2, rate: 129974 },
      { kind: "step", step: 3, rate: 133825 },    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144716 },
      { kind: "step", step: 2, rate: 151086 },
      { kind: "step", step: 3, rate: 158914 },
      { kind: "step", step: 4, rate: 162627 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|high-speed-rail-authority-hsra",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149636 },
      { kind: "step", step: 2, rate: 156223 },
      { kind: "step", step: 3, rate: 164317 },
      { kind: "step", step: 4, rate: 168156 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 3, rate: 54986 },
      { kind: "step", step: 4, rate: 57215 },
      { kind: "step", step: 5, rate: 57787 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 57497 },   
      { kind: "step", step: 4, rate: 59160 },
      { kind: "step", step: 5, rate: 60946 },        
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 60094 },
      { kind: "step", step: 3, rate: 61645 },
      { kind: "step", step: 4, rate: 63227 },
      { kind: "step", step: 5, rate: 64877 }, 
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 62775 },
      { kind: "step", step: 3, rate: 63741 }, 
      { kind: "step", step: 4, rate: 65377 },
      { kind: "step", step: 5, rate: 67083 },
      { kind: "step", step: 6, rate: 68425 },         
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 68225 },
      { kind: "step", step: 3, rate: 69936 },
      { kind: "step", step: 4, rate: 71985 },
      { kind: "step", step: 5, rate: 74307 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 70545 },
      { kind: "step", step: 3, rate: 72314 }, 
      { kind: "step", step: 4, rate: 74432 },
      { kind: "step", step: 5, rate: 76833 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75281 },
      { kind: "step", step: 2, rate: 77217 },
      { kind: "step", step: 3, rate: 79716 }, 
      { kind: "step", step: 4, rate: 80965 },
      { kind: "step", step: 5, rate: 81775 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 79842 },
      { kind: "step", step: 3, rate: 81868 },
      { kind: "step", step: 4, rate: 83718 },
      { kind: "step", step: 5, rate: 86246 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 85039 },
      { kind: "step", step: 3, rate: 87412 },
      { kind: "step", step: 4, rate: 88328 },
      { kind: "step", step: 5, rate: 90900 },
      { kind: "step", step: 6, rate: 91809 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 90384 }, 
      { kind: "step", step: 4, rate: 91331 },
      { kind: "step", step: 5, rate: 93991 },
      { kind: "step", step: 6, rate: 96829 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 98457 },
      { kind: "step", step: 4, rate: 102645 },
      { kind: "step", step: 5, rate: 105910 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 101805 }, 
      { kind: "step", step: 4, rate: 106135 },
      { kind: "step", step: 5, rate: 109511 },
      { kind: "step", step: 6, rate: 111701 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 116221 },
      { kind: "step", step: 2, rate: 118903 },
      { kind: "step", step: 3, rate: 124311 },
      { kind: "step", step: 4, rate: 125832 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 122946 },
      { kind: "step", step: 3, rate: 128938 },    
      { kind: "step", step: 4, rate: 132713 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 137956 },
      { kind: "step", step: 2, rate: 148072 },
      { kind: "step", step: 3, rate: 153017 },                   
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-film-and-sound-archive-nfsa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 142647 },
      { kind: "step", step: 2, rate: 153106 },
      { kind: "step", step: 3, rate: 158220 },       
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS1",
    agencyClassification: "NGA Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 54147 },
      { kind: "step", step: 2, rate: 54147 },
      { kind: "step", step: 3, rate: 56151 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS1",
    agencyClassification: "NGA Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 55988 },
      { kind: "step", step: 2, rate: 55988 },
      { kind: "step", step: 3, rate: 58060 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS2",
    agencyClassification: "NGA Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 58625 },
      { kind: "step", step: 2, rate: 60046 },
      { kind: "step", step: 3, rate: 63685 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS2",
    agencyClassification: "NGA Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 60618 },
      { kind: "step", step: 2, rate: 65850 },
      { kind: "step", step: 3, rate: 67130 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS3",
    agencyClassification: "NGA Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 64923 },
      { kind: "step", step: 2, rate: 66562 },
      { kind: "step", step: 3, rate: 70612 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS3",
    agencyClassification: "NGA Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 67130 },
      { kind: "step", step: 2, rate: 68825 },
      { kind: "step", step: 3, rate: 73013 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS4",
    agencyClassification: "NGA Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 72803 },
      { kind: "step", step: 2, rate: 74623 },
      { kind: "step", step: 3, rate: 79139 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS4",
    agencyClassification: "NGA Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75279 },
      { kind: "step", step: 2, rate: 77161 },
      { kind: "step", step: 3, rate: 81830 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS5",
    agencyClassification: "NGA Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 80349 },
      { kind: "step", step: 2, rate: 81881 },
      { kind: "step", step: 3, rate: 86206 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS5",
    agencyClassification: "NGA Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83081 },
      { kind: "step", step: 2, rate: 84665 },
      { kind: "step", step: 3, rate: 89137 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS6",
    agencyClassification: "NGA Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 89133 },
      { kind: "step", step: 2, rate: 95208 },
      { kind: "step", step: 3, rate: 103028 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "APS6",
    agencyClassification: "NGA Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92164 },
      { kind: "step", step: 2, rate: 98445 },
      { kind: "step", step: 3, rate: 103253 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 112438 },
      { kind: "step", step: 2, rate: 116517 },
      { kind: "step", step: 3, rate: 128298 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 116261 },
      { kind: "step", step: 2, rate: 120479 },
      { kind: "step", step: 3, rate: 132660 },    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 131025 },
      { kind: "step", step: 2, rate: 140909 },
      { kind: "step", step: 3, rate: 149744 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-gallery-of-australia-nga",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 135480 },
      { kind: "step", step: 2, rate: 145700 },
      { kind: "step", step: 3, rate: 154835 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55594 },
      { kind: "step", step: 3, rate: 57419 },
      { kind: "step", step: 4, rate: 57787 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59371 },
      { kind: "step", step: 4, rate: 60946 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59705 },
      { kind: "step", step: 2, rate: 61701 },
      { kind: "step", step: 3, rate: 63700 },
      { kind: "step", step: 4, rate: 65696 },
      { kind: "step", step: 5, rate: 67692 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 63799 },
      { kind: "step", step: 3, rate: 65866 },
      { kind: "step", step: 4, rate: 67930 },
      { kind: "step", step: 5, rate: 69994 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69134 },
      { kind: "step", step: 2, rate: 71036 },
      { kind: "step", step: 3, rate: 72975 }, 
      { kind: "step", step: 4, rate: 74674 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71485 },
      { kind: "step", step: 2, rate: 73451 },
      { kind: "step", step: 3, rate: 75456 }, 
      { kind: "step", step: 4, rate: 77213 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75936 },
      { kind: "step", step: 2, rate: 77613 },
      { kind: "step", step: 3, rate: 79700 },
      { kind: "step", step: 4, rate: 81994 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 80252 },
      { kind: "step", step: 3, rate: 82410 },
      { kind: "step", step: 4, rate: 84782 },
      { kind: "step", step: 5, rate: 86246 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84500 },
      { kind: "step", step: 2, rate: 86317 },
      { kind: "step", step: 3, rate: 88160 },
      { kind: "step", step: 4, rate: 90073 },
      { kind: "step", step: 5, rate: 91809 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91157 },
      { kind: "step", step: 3, rate: 93135 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95375 },
      { kind: "step", step: 2, rate: 98220 },
      { kind: "step", step: 3, rate: 101143 },
      { kind: "step", step: 4, rate: 105910 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 101559 },
      { kind: "step", step: 3, rate: 104582 },
      { kind: "step", step: 4, rate: 111701 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 119532 },
      { kind: "step", step: 3, rate: 123872 }, 
      { kind: "step", step: 4, rate: 128215 },
      { kind: "step", step: 5, rate: 132557 },
      { kind: "step", step: 6, rate: 136900 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 123596 },
      { kind: "step", step: 3, rate: 128084 },
      { kind: "step", step: 4, rate: 132574 },
      { kind: "step", step: 5, rate: 137064 },
      { kind: "step", step: 6, rate: 141555 },          
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140660 },
      { kind: "step", step: 2, rate: 147269 },
      { kind: "step", step: 3, rate: 153879 },
      { kind: "step", step: 4, rate: 160488 },
      { kind: "step", step: 5, rate: 167098 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-library-of-australia-nla",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145442 },
      { kind: "step", step: 2, rate: 152276 },
      { kind: "step", step: 3, rate: 159111 },
      { kind: "step", step: 4, rate: 165945 },
      { kind: "step", step: 5, rate: 172779 },           
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 3, rate: 54532 },
      { kind: "step", step: 4, rate: 57215 },
      { kind: "step", step: 5, rate: 57787 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 57497 },
      { kind: "step", step: 4, rate: 59160 },
      { kind: "step", step: 5, rate: 60946 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 59735 },
      { kind: "step", step: 3, rate: 61302 },
      { kind: "step", step: 4, rate: 62898 },
      { kind: "step", step: 5, rate: 64468 },
      { kind: "step", step: 6, rate: 64877 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 62775 },
      { kind: "step", step: 3, rate: 63386 }, 
      { kind: "step", step: 4, rate: 65037 },
      { kind: "step", step: 5, rate: 66660 },
      { kind: "step", step: 6, rate: 68425 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 67936 },
      { kind: "step", step: 3, rate: 69662 },
      { kind: "step", step: 4, rate: 71467 },
      { kind: "step", step: 5, rate: 72837 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 70477 },
      { kind: "step", step: 3, rate: 72031 },
      { kind: "step", step: 4, rate: 73897 },
      { kind: "step", step: 5, rate: 75313 },
      { kind: "step", step: 6, rate: 76820 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 76149 },
      { kind: "step", step: 3, rate: 78127 },
      { kind: "step", step: 4, rate: 80132 },
      { kind: "step", step: 5, rate: 81775 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 79125 },
      { kind: "step", step: 3, rate: 80783 },
      { kind: "step", step: 4, rate: 82856 },
      { kind: "step", step: 5, rate: 84555 },
      { kind: "step", step: 6, rate: 86246 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 84896 },
      { kind: "step", step: 3, rate: 87284 }, 
      { kind: "step", step: 4, rate: 91809 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 90252 },
      { kind: "step", step: 4, rate: 94931 },
      { kind: "step", step: 5, rate: 96829 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 98320 },
      { kind: "step", step: 4, rate: 102127 },
      { kind: "step", step: 5, rate: 104861 },
      { kind: "step", step: 6, rate: 105910 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 101663 },
      { kind: "step", step: 4, rate: 105599 },
      { kind: "step", step: 5, rate: 108426 },
      { kind: "step", step: 6, rate: 111701 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 118256 },
      { kind: "step", step: 2, rate: 122803 },
      { kind: "step", step: 3, rate: 126927 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 122277 },
      { kind: "step", step: 2, rate: 126978 },
      { kind: "step", step: 3, rate: 131243 }, 
      { kind: "step", step: 4, rate: 132713 },        
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 138272 },
      { kind: "step", step: 2, rate: 148628 },
      { kind: "step", step: 3, rate: 153608 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-museum-australia-nma",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 142973 },
      { kind: "step", step: 2, rate: 153681 },
      { kind: "step", step: 3, rate: 158831 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55050 },
      { kind: "step", step: 2, rate: 56896 },
      { kind: "step", step: 3, rate: 58832 }, 
      { kind: "step", step: 4, rate: 60837 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58830 },
      { kind: "step", step: 3, rate: 60832 },
      { kind: "step", step: 4, rate: 62905 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62299 },
      { kind: "step", step: 2, rate: 64014 },
      { kind: "step", step: 3, rate: 65693 }, 
      { kind: "step", step: 4, rate: 67401 },              
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64417 },
      { kind: "step", step: 2, rate: 66190 },
      { kind: "step", step: 3, rate: 67927 }, 
      { kind: "step", step: 4, rate: 69693 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69570 },
      { kind: "step", step: 2, rate: 71374 },
      { kind: "step", step: 3, rate: 73186 },
      { kind: "step", step: 4, rate: 75082 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71935 },
      { kind: "step", step: 2, rate: 73801 },
      { kind: "step", step: 3, rate: 75674 },
      { kind: "step", step: 4, rate: 77635 },   
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77532 },
      { kind: "step", step: 2, rate: 79624 },
      { kind: "step", step: 3, rate: 81854 },
      { kind: "step", step: 4, rate: 84183 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80168 },
      { kind: "step", step: 2, rate: 82331 },
      { kind: "step", step: 3, rate: 84637 },
      { kind: "step", step: 4, rate: 87045 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86305 },
      { kind: "step", step: 2, rate: 88478 },
      { kind: "step", step: 3, rate: 90706 },
      { kind: "step", step: 4, rate: 92991 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89239 },
      { kind: "step", step: 2, rate: 91486 },
      { kind: "step", step: 3, rate: 93790 },
      { kind: "step", step: 4, rate: 96153 },
      { kind: "step", step: 5, rate: 96829 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96236 },
      { kind: "step", step: 2, rate: 99363 },
      { kind: "step", step: 3, rate: 102591 }, 
      { kind: "step", step: 4, rate: 105925 },
      { kind: "step", step: 5, rate: 109365 },
      { kind: "step", step: 6, rate: 112919 },                          
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102741 },
      { kind: "step", step: 3, rate: 106079 },
      { kind: "step", step: 4, rate: 109526 },
      { kind: "step", step: 5, rate: 113083 },
      { kind: "step", step: 6, rate: 116758 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119560 },
      { kind: "step", step: 2, rate: 123546 },
      { kind: "step", step: 3, rate: 127531 },
      { kind: "step", step: 4, rate: 131516 },
      { kind: "step", step: 5, rate: 135987 },
      { kind: "step", step: 6, rate: 140814 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123625 },
      { kind: "step", step: 2, rate: 127747 },
      { kind: "step", step: 3, rate: 131867 }, 
      { kind: "step", step: 4, rate: 135988 },
      { kind: "step", step: 5, rate: 140611 },
      { kind: "step", step: 6, rate: 145602 },         
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 145412 },
      { kind: "step", step: 2, rate: 149160 },
      { kind: "step", step: 3, rate: 153003 },
      { kind: "step", step: 4, rate: 156947 },
      { kind: "step", step: 5, rate: 160991 },
      { kind: "step", step: 6, rate: 165142 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|national-portrait-gallery-of-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 150356 },
      { kind: "step", step: 2, rate: 154231 },
      { kind: "step", step: 3, rate: 158205 },
      { kind: "step", step: 4, rate: 162283 },
      { kind: "step", step: 5, rate: 166465 },
      { kind: "step", step: 6, rate: 170757 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS1",
    agencyClassification: "APL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 57680 },
      { kind: "step", step: 4, rate: 57786 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS1",
    agencyClassification: "APL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59641 },
      { kind: "step", step: 4, rate: 60946 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS2",
    agencyClassification: "APL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61139 },
      { kind: "step", step: 2, rate: 64810 },
      { kind: "step", step: 3, rate: 64877 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS2",
    agencyClassification: "APL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63218 },
      { kind: "step", step: 2, rate: 67014 },
      { kind: "step", step: 3, rate: 68435 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS3",
    agencyClassification: "APL3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66975 },
      { kind: "step", step: 2, rate: 68988 },
      { kind: "step", step: 3, rate: 71052 },
      { kind: "step", step: 4, rate: 73185 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS3",
    agencyClassification: "APL3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 71334 },
      { kind: "step", step: 3, rate: 73468 },
      { kind: "step", step: 4, rate: 75673 },
      { kind: "step", step: 5, rate: 76820 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS4",
    agencyClassification: "APL4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75385 },
      { kind: "step", step: 2, rate: 77647 },
      { kind: "step", step: 3, rate: 81317 },
      { kind: "step", step: 4, rate: 81775 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS4",
    agencyClassification: "APL4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 80287 },
      { kind: "step", step: 3, rate: 84082 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS5",
    agencyClassification: "APL5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84229 },
      { kind: "step", step: 2, rate: 84843 },
      { kind: "step", step: 3, rate: 87386 },
      { kind: "step", step: 4, rate: 90900 },
      { kind: "step", step: 5, rate: 91808 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS5",
    agencyClassification: "APL5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88833 }, 
      { kind: "step", step: 3, rate: 90357 },
      { kind: "step", step: 4, rate: 93991 },  
      { kind: "step", step: 5, rate: 96829 },         
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS6",
    agencyClassification: "APL6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 95492 },
      { kind: "step", step: 4, rate: 98357 },
      { kind: "step", step: 5, rate: 103638 }, 
      { kind: "step", step: 6, rate: 105910 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "APS6",
    agencyClassification: "APL6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 99733 },
      { kind: "step", step: 4, rate: 101701 },
      { kind: "step", step: 5, rate: 107162 }, 
      { kind: "step", step: 6, rate: 109511 },
      { kind: "step", step: 7, rate: 111702 },                 
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "EL1",
    agencyClassification: "EXL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 116070 },
      { kind: "step", step: 3, rate: 119223 },
      { kind: "step", step: 4, rate: 125494 },
      { kind: "step", step: 5, rate: 125832 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "EL1",
    agencyClassification: "EXL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 121756 },
      { kind: "step", step: 3, rate: 123277 },
      { kind: "step", step: 4, rate: 129761 },
      { kind: "step", step: 5, rate: 132713 },           
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "EL2",
    agencyClassification: "EXL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140697 },
      { kind: "step", step: 2, rate: 144920 },
      { kind: "step", step: 3, rate: 151864 },
      { kind: "step", step: 4, rate: 159837 },
      { kind: "step", step: 5, rate: 165302 },                      
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|old-parliament-house-museum-of-australian-democracy-at-old-parliament-house",
    classification: "EL2",
    agencyClassification: "EXL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145481 },
      { kind: "step", step: 2, rate: 149847 },
      { kind: "step", step: 3, rate: 157027 }, 
      { kind: "step", step: 4, rate: 165271 },
      { kind: "step", step: 5, rate: 170922 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS1",
    agencyClassification: "SA Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 54709 }, 
      { kind: "step", step: 4, rate: 56900 },
      { kind: "step", step: 5, rate: 57787 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS1",
    agencyClassification: "SA Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 57497 },
      { kind: "step", step: 4, rate: 58835 },
      { kind: "step", step: 5, rate: 59752 },
      { kind: "step", step: 6, rate: 90946 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS2",
    agencyClassification: "SA Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 59871 },
      { kind: "step", step: 3, rate: 61440 },
      { kind: "step", step: 4, rate: 63038 },
      { kind: "step", step: 5, rate: 64611 },
      { kind: "step", step: 6, rate: 64877 },                     
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS2",
    agencyClassification: "SA Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 62775 },
      { kind: "step", step: 3, rate: 63529 },
      { kind: "step", step: 4, rate: 65181 },
      { kind: "step", step: 5, rate: 66808 },
      { kind: "step", step: 6, rate: 68425 },          
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS3",
    agencyClassification: "SA Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67177 },
      { kind: "step", step: 2, rate: 68088 },
      { kind: "step", step: 3, rate: 69821 },
      { kind: "step", step: 4, rate: 71891 },
      { kind: "step", step: 5, rate: 74238 },

    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS3",
    agencyClassification: "SA Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 70477 },
      { kind: "step", step: 3, rate: 72195 },
      { kind: "step", step: 4, rate: 74335 },
      { kind: "step", step: 5, rate: 76820 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS4",
    agencyClassification: "SA Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75659 },
      { kind: "step", step: 2, rate: 77176 },
      { kind: "step", step: 3, rate: 79155 }, 
      { kind: "step", step: 4, rate: 80965 },
      { kind: "step", step: 5, rate: 81775 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS4",
    agencyClassification: "SA Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 79800 },
      { kind: "step", step: 3, rate: 81846 },
      { kind: "step", step: 4, rate: 83718 },
      { kind: "step", step: 5, rate: 86246 },
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS5",
    agencyClassification: "SA Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84279 },
      { kind: "step", step: 2, rate: 85083 },
      { kind: "step", step: 3, rate: 87621 }, 
      { kind: "step", step: 4, rate: 90181 },
      { kind: "step", step: 5, rate: 91809 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS5",
    agencyClassification: "SA Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 90600 }, 
      { kind: "step", step: 4, rate: 93247 },
      { kind: "step", step: 5, rate: 94931 },
      { kind: "step", step: 6, rate: 96829 },        
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS6",
    agencyClassification: "SA Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 98640 },
      { kind: "step", step: 3, rate: 102873 }, 
      { kind: "step", step: 4, rate: 107106 },
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "APS6",
    agencyClassification: "SA Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 101994 },
      { kind: "step", step: 3, rate: 106371 }, 
      { kind: "step", step: 4, rate: 110748 },
      { kind: "step", step: 5, rate: 111701 },         
    ]
  },  
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "EL1",
    agencyClassification: "SA Executive Level 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117662 },
      { kind: "step", step: 2, rate: 119303 },
      { kind: "step", step: 3, rate: 124768 }, 
      { kind: "step", step: 4, rate: 130233 },              
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "EL1",
    agencyClassification: "SA Executive Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 123359 },
      { kind: "step", step: 3, rate: 129010 },
      { kind: "step", step: 4, rate: 134661 },    
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "EL2",
    agencyClassification: "SA Executive Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139827 },
      { kind: "step", step: 2, rate: 146089 },
      { kind: "step", step: 3, rate: 153776 },
      { kind: "step", step: 4, rate: 161462 },               
    ]
  },
  {
    agencyId: "infrastructure-transport-regional-development-communications-sport-and-the-arts|screen-australia",
    classification: "EL2",
    agencyClassification: "SA Executive Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 144581 },
      { kind: "step", step: 2, rate: 151056 },
      { kind: "step", step: 3, rate: 159004 },  
      { kind: "step", step: 4, rate: 166952 },  
    ]
  },                  
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55249 },
      { kind: "step", step: 2, rate: 58127 },
      { kind: "step", step: 3, rate: 60592 },                
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 60103 },
      { kind: "step", step: 3, rate: 62652 },      
    ]
  },   
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62493 },
      { kind: "step", step: 2, rate: 65996 },
      { kind: "step", step: 3, rate: 69710 }, 
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64618 },
      { kind: "step", step: 2, rate: 68240 },
      { kind: "step", step: 3, rate: 72080 },    
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70180 },
      { kind: "step", step: 2, rate: 73211 },
      { kind: "step", step: 3, rate: 76095 },
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72566 },
      { kind: "step", step: 2, rate: 75700 },
      { kind: "step", step: 3, rate: 78682 },                              
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78770 },
      { kind: "step", step: 2, rate: 81883 },
      { kind: "step", step: 3, rate: 85027 },              
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81448 },
      { kind: "step", step: 2, rate: 84667 },
      { kind: "step", step: 3, rate: 87918 },       
    ]
  },     
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86631 },
      { kind: "step", step: 2, rate: 88983 },
      { kind: "step", step: 3, rate: 91401 },
      { kind: "step", step: 4, rate: 91809 },     
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89576 },
      { kind: "step", step: 2, rate: 92008 },
      { kind: "step", step: 3, rate: 94509 },
      { kind: "step", step: 4, rate: 96829 },         
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98716 },
      { kind: "step", step: 2, rate: 104532 },
      { kind: "step", step: 3, rate: 107053 },
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102072 },
      { kind: "step", step: 2, rate: 108086 },
      { kind: "step", step: 3, rate: 110693 },
      { kind: "step", step: 4, rate: 111701 },                                
    ]
  },    
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122235 },
      { kind: "step", step: 2, rate: 126806 },
      { kind: "step", step: 3, rate: 129811 },                              
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126391 },
      { kind: "step", step: 2, rate: 131117 },
      { kind: "step", step: 3, rate: 134225 },
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147408 },
      { kind: "step", step: 2, rate: 154990 },
      { kind: "step", step: 3, rate: 158710 },                        
    ]
  },
  {
    agencyId: "industry-science-and-resources|department-of-industry-science-and-resources",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152420 },
      { kind: "step", step: 2, rate: 160260 },
      { kind: "step", step: 3, rate: 164106 },                    
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56423 },
      { kind: "step", step: 2, rate: 59648 },
      { kind: "step", step: "Maximum pay point", rate: 61695 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58341 },
      { kind: "step", step: 2, rate: 61676 },
      { kind: "step", step: "Maximum pay point", rate: 63793 },       
    ]
  },   
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66271 },
      { kind: "step", step: 2, rate: 67884 },
      { kind: "step", step: 3, rate: 69316 },      
      { kind: "step", step: "Maximum pay point", rate: 70619 },     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68524 },
      { kind: "step", step: 2, rate: 70192 },
      { kind: "step", step: 3, rate: 71673 },
      { kind: "step", step: "Maximum pay point", rate: 73020 },     
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 74007 },
      { kind: "step", step: 2, rate: 75826 },
      { kind: "step", step: "Maximum pay point", rate: 77086 },          
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76523 },
      { kind: "step", step: 2, rate: 78404 },
      { kind: "step", step: "Maximum pay point", rate: 79707 },              
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80505 },
      { kind: "step", step: 2, rate: 82751 },
      { kind: "step", step: 3, rate: 84237 },
      { kind: "step", step: "Maximum pay point", rate: 86097 },                 
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83242 },
      { kind: "step", step: 2, rate: 85565 },
      { kind: "step", step: 3, rate: 87101 },
      { kind: "step", step: "Maximum pay point", rate: 89024 },
    ]
  },     
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88887 },
      { kind: "step", step: 2, rate: 90780 },
      { kind: "step", step: 3, rate: 92904 },
      { kind: "step", step: "Maximum pay point", rate: 95028 },       
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91909 },
      { kind: "step", step: 2, rate: 93867 },
      { kind: "step", step: 3, rate: 96063 },
      { kind: "step", step: "Maximum pay point", rate: 98259 },         
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98314 },
      { kind: "step", step: 2, rate: 103182 },
      { kind: "step", step: 3, rate: 107077 },
      { kind: "step", step: "Maximum pay point", rate: 110483 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101657 },
      { kind: "step", step: 2, rate: 106690 },
      { kind: "step", step: 3, rate: 110718 },
      { kind: "step", step: "Maximum pay point", rate: 114239 },             
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 126342 },
      { kind: "step", step: 2, rate: 132226 },
      { kind: "step", step: 3, rate: 138109 },
      { kind: "step", step: "Maximum pay point", rate: 143993 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 130638 },
      { kind: "step", step: 2, rate: 136722 },
      { kind: "step", step: 3, rate: 142805 },
      { kind: "step", step: "Maximum pay point", rate: 148889 },         
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147052 },
      { kind: "step", step: 2, rate: 156373 },
      { kind: "step", step: 3, rate: 165698 },
      { kind: "step", step: "Maximum pay point", rate: 175016 },      
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152052 },
      { kind: "step", step: 2, rate: 161690 },
      { kind: "step", step: 3, rate: 171332 },
      { kind: "step", step: "Maximum pay point", rate: 180967 },   
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55392 },
      { kind: "step", step: 2, rate: 58376 },
      { kind: "step", step: 3, rate: 61364 }, 
      { kind: "step", step: 4, rate: 64348 },
      { kind: "step", step: 5, rate: 67335 },                    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 60361 },
      { kind: "step", step: 3, rate: 63450 },
      { kind: "step", step: 4, rate: 66536 },
      { kind: "step", step: 5, rate: 69624 },          
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67336 },
      { kind: "step", step: 2, rate: 68828 },
      { kind: "step", step: 3, rate: 70321 },
      { kind: "step", step: 4, rate: 71814 },
      { kind: "step", step: 5, rate: 73304 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 69625 },
      { kind: "step", step: 2, rate: 71168 },
      { kind: "step", step: 3, rate: 72712 },
      { kind: "step", step: 4, rate: 74256 },
      { kind: "step", step: 5, rate: 75796 },          
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 73305 },
      { kind: "step", step: 2, rate: 76292 },
      { kind: "step", step: 3, rate: 79276 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75797 },
      { kind: "step", step: 2, rate: 78886 },
      { kind: "step", step: 3, rate: 81971 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 79689 },
      { kind: "step", step: 2, rate: 83638 },
      { kind: "step", step: 3, rate: 87582 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82398 },
      { kind: "step", step: 2, rate: 86482 },
      { kind: "step", step: 3, rate: 90560 }, 
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 91531 },
      { kind: "step", step: 2, rate: 94239 },
      { kind: "step", step: 3, rate: 96949 }, 
      { kind: "step", step: 4, rate: 99739 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 94643 },
      { kind: "step", step: 2, rate: 97443 },
      { kind: "step", step: 3, rate: 100245 }, 
      { kind: "step", step: 4, rate: 103130 },
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101404 },
      { kind: "step", step: 2, rate: 106404 },
      { kind: "step", step: 3, rate: 111403 },
      { kind: "step", step: 4, rate: 116551 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104852 },
      { kind: "step", step: 2, rate: 110022 },
      { kind: "step", step: 3, rate: 115191 }, 
      { kind: "step", step: 4, rate: 120514 },
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 124453 },
      { kind: "step", step: 2, rate: 129716 },
      { kind: "step", step: 3, rate: 134982 },
      { kind: "step", step: 4, rate: 140246 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 128684 },
      { kind: "step", step: 2, rate: 134126 },
      { kind: "step", step: 3, rate: 139571 },
      { kind: "step", step: 4, rate: 145014 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 142914 },
      { kind: "step", step: 2, rate: 148820 },
      { kind: "step", step: 3, rate: 154729 },
      { kind: "step", step: 4, rate: 160637 },
      { kind: "step", step: 5, rate: 166544 },
      { kind: "step", step: 6, rate: 172452 },
      { kind: "step", step: 7, rate: 178361 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-national-audit-office-anao",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 147773 },
      { kind: "step", step: 2, rate: 153880 },
      { kind: "step", step: 3, rate: 159990 },
      { kind: "step", step: 4, rate: 166099 },
      { kind: "step", step: 5, rate: 172206 },
      { kind: "step", step: 6, rate: 178315 },
      { kind: "step", step: 7, rate: 184425 },          
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 0 },
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 57215 },
      { kind: "step", step: 4, rate: 57787 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 0 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59160 },
      { kind: "step", step: 4, rate: 60946 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60100 },
      { kind: "step", step: 2, rate: 62578 },
      { kind: "step", step: 3, rate: 67038 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64706 },
      { kind: "step", step: 3, rate: 69317 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70016 },
      { kind: "step", step: 2, rate: 72196 },
      { kind: "step", step: 3, rate: 72837 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72397 },
      { kind: "step", step: 2, rate: 74651 },
      { kind: "step", step: 3, rate: 76820 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77109 },
      { kind: "step", step: 2, rate: 78283 },
      { kind: "step", step: 3, rate: 82998 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79731 },
      { kind: "step", step: 2, rate: 80945 },
      { kind: "step", step: 3, rate: 85820 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86521 },
      { kind: "step", step: 2, rate: 90572 },
      { kind: "step", step: 3, rate: 94620 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89463 },
      { kind: "step", step: 2, rate: 93651 },
      { kind: "step", step: 3, rate: 97837 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98506 },
      { kind: "step", step: 2, rate: 102564 },
      { kind: "step", step: 3, rate: 106942 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101855 },
      { kind: "step", step: 2, rate: 106051 },
      { kind: "step", step: 3, rate: 110578 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119919 },
      { kind: "step", step: 2, rate: 122840 },
      { kind: "step", step: 3, rate: 126415 },
      { kind: "step", step: 4, rate: 130883 },
      { kind: "step", step: 5, rate: 132800 },
      { kind: "step", step: 6, rate: 136120 },
      { kind: "step", step: 7, rate: 137443 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123996 },
      { kind: "step", step: 2, rate: 127017 },
      { kind: "step", step: 3, rate: 130713 }, 
      { kind: "step", step: 4, rate: 135333 },
      { kind: "step", step: 5, rate: 137315 },
      { kind: "step", step: 6, rate: 140748 },
      { kind: "step", step: 7, rate: 142116 },   
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 150367 },
      { kind: "step", step: 2, rate: 153619 },
      { kind: "step", step: 3, rate: 158929 },
      { kind: "step", step: 4, rate: 161943 },
      { kind: "step", step: 5, rate: 165124 },
      { kind: "step", step: 6, rate: 167443 },
      { kind: "step", step: 7, rate: 169043 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-public-service-commission-apsc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 155479 },
      { kind: "step", step: 2, rate: 158842 },
      { kind: "step", step: 3, rate: 164333 },
      { kind: "step", step: 4, rate: 167449 },
      { kind: "step", step: 5, rate: 170738 },
      { kind: "step", step: 6, rate: 173126 },
      { kind: "step", step: 7, rate: 174790 },          
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56515 },
      { kind: "step", step: 2, rate: 59648 },
      { kind: "step", step: 3, rate: 61695 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58437 },
      { kind: "step", step: 2, rate: 61676 },
      { kind: "step", step: 3, rate: 63793 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66271 },
      { kind: "step", step: 2, rate: 67884 },
      { kind: "step", step: 3, rate: 69316 },
      { kind: "step", step: 4, rate: 70619 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68524 },
      { kind: "step", step: 2, rate: 70192 },
      { kind: "step", step: 3, rate: 71673 },
      { kind: "step", step: 4, rate: 73020 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 74007 },
      { kind: "step", step: 2, rate: 75826 },
      { kind: "step", step: 3, rate: 77086 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76523 },
      { kind: "step", step: 2, rate: 78404 },
      { kind: "step", step: 3, rate: 79707 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80505 },
      { kind: "step", step: 2, rate: 82751 },
      { kind: "step", step: 3, rate: 84237 },
      { kind: "step", step: 4, rate: 86097 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83242 },
      { kind: "step", step: 2, rate: 85655 },
      { kind: "step", step: 3, rate: 87101 }, 
      { kind: "step", step: 4, rate: 89024 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88887 },
      { kind: "step", step: 2, rate: 90780 },
      { kind: "step", step: 3, rate: 92904 },
      { kind: "step", step: 4, rate: 95028 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91909 },
      { kind: "step", step: 2, rate: 93867 },
      { kind: "step", step: 3, rate: 96063 }, 
      { kind: "step", step: 4, rate: 98259 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98314 },
      { kind: "step", step: 2, rate: 103182 },
      { kind: "step", step: 3, rate: 107077 },
      { kind: "step", step: 4, rate: 110483 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101657 },
      { kind: "step", step: 2, rate: 106690 },
      { kind: "step", step: 3, rate: 110718 },
      { kind: "step", step: 4, rate: 114239 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 126342 },
      { kind: "step", step: 2, rate: 132226 },
      { kind: "step", step: 3, rate: 138109 }, 
      { kind: "step", step: 4, rate: 143993 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 130638 },
      { kind: "step", step: 2, rate: 136722 },
      { kind: "step", step: 3, rate: 142805 },
      { kind: "step", step: 4, rate: 148889 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147052 },
      { kind: "step", step: 2, rate: 156373 },
      { kind: "step", step: 3, rate: 165698 },
      { kind: "step", step: 4, rate: 175016 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|national-indigenous-australians-agency-niaa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152052 },
      { kind: "step", step: 2, rate: 161690 },
      { kind: "step", step: 3, rate: 171332 },
      { kind: "step", step: 4, rate: 180967 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57508 },
      { kind: "step", step: 2, rate: 59374 },
      { kind: "step", step: 3, rate: 60930 },
      { kind: "step", step: 4, rate: 63357 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59463 },
      { kind: "step", step: 2, rate: 61393 },
      { kind: "step", step: 3, rate: 63002 }, 
      { kind: "step", step: 4, rate: 65511 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64827 },
      { kind: "step", step: 2, rate: 66557 },
      { kind: "step", step: 3, rate: 68255 },
      { kind: "step", step: 4, rate: 69976 },
      { kind: "step", step: 5, rate: 71675 },
      { kind: "step", step: 6, rate: 72878 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 67031 },
      { kind: "step", step: 2, rate: 68820 },
      { kind: "step", step: 3, rate: 70576 },
      { kind: "step", step: 4, rate: 72355 },
      { kind: "step", step: 5, rate: 74112 },
      { kind: "step", step: 6, rate: 75356 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 73561 },
      { kind: "step", step: 2, rate: 75423 },
      { kind: "step", step: 3, rate: 77285 },
      { kind: "step", step: 4, rate: 79238 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76062 },
      { kind: "step", step: 2, rate: 77987 },
      { kind: "step", step: 3, rate: 79913 },
      { kind: "step", step: 4, rate: 81932 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81763 },
      { kind: "step", step: 2, rate: 84300 },
      { kind: "step", step: 3, rate: 86442 },
      { kind: "step", step: 4, rate: 88607 },
      { kind: "step", step: 5, rate: 90140 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84543 },
      { kind: "step", step: 2, rate: 87166 },
      { kind: "step", step: 3, rate: 89381 },
      { kind: "step", step: 4, rate: 91620 },
      { kind: "step", step: 5, rate: 93205 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90967 },
      { kind: "step", step: 2, rate: 93757 },
      { kind: "step", step: 3, rate: 96341 }, 
      { kind: "step", step: 4, rate: 99025 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 94060 },
      { kind: "step", step: 2, rate: 96945 },
      { kind: "step", step: 3, rate: 99617 },
      { kind: "step", step: 4, rate: 102392 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101440 },
      { kind: "step", step: 2, rate: 104162 },
      { kind: "step", step: 3, rate: 109300 },
      { kind: "step", step: 4, rate: 113455 },
      { kind: "step", step: 5, rate: 115421 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104889 },
      { kind: "step", step: 2, rate: 107704 },
      { kind: "step", step: 3, rate: 113016 },
      { kind: "step", step: 4, rate: 117312 },
      { kind: "step", step: 5, rate: 119345 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 125162 },
      { kind: "step", step: 2, rate: 130512 },
      { kind: "step", step: 3, rate: 135135 },
      { kind: "step", step: 4, rate: 139062 },
      { kind: "step", step: 5, rate: 141470 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 129418 },
      { kind: "step", step: 2, rate: 134576 },
      { kind: "step", step: 3, rate: 139730 }, 
      { kind: "step", step: 4, rate: 143790 },
      { kind: "step", step: 5, rate: 146280 },         
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 144221 },
      { kind: "step", step: 2, rate: 149966 },
      { kind: "step", step: 3, rate: 155953 },
      { kind: "step", step: 4, rate: 163493 },
      { kind: "step", step: 5, rate: 168963 },
      { kind: "step", step: 6, rate: 171891 },                           
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|office-of-national-intelligence-oni",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149125 },
      { kind: "step", step: 2, rate: 155065 },
      { kind: "step", step: 3, rate: 161255 },
      { kind: "step", step: 4, rate: 169052 },
      { kind: "step", step: 5, rate: 174708 },
      { kind: "step", step: 6, rate: 177735 },          
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS2",
    agencyClassification: "GHO2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 60868 },
      { kind: "step", step: 2, rate: 62628 },
      { kind: "step", step: 3, rate: 64389 },
      { kind: "step", step: 4, rate: 66152 },
      { kind: "step", step: 5, rate: 67914 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS2",
    agencyClassification: "GHO2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 63180 },
      { kind: "step", step: 2, rate: 65008 },
      { kind: "step", step: 3, rate: 66836 },
      { kind: "step", step: 4, rate: 68666 },
      { kind: "step", step: 5, rate: 70494 },          
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS2",
    agencyClassification: "GHO2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65329 },
      { kind: "step", step: 2, rate: 67219 },
      { kind: "step", step: 3, rate: 69109 },
      { kind: "step", step: 4, rate: 71001 },
      { kind: "step", step: 5, rate: 72891 },          
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS3",
    agencyClassification: "GHO3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 68814 },
      { kind: "step", step: 2, rate: 70974 },
      { kind: "step", step: 3, rate: 73137 },
      { kind: "step", step: 4, rate: 75292 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS3",
    agencyClassification: "GHO3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 71429 },
      { kind: "step", step: 2, rate: 73671 },
      { kind: "step", step: 3, rate: 75917 },
      { kind: "step", step: 4, rate: 78153 },
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS3",
    agencyClassification: "GHO3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73858 },
      { kind: "step", step: 2, rate: 76176 },
      { kind: "step", step: 3, rate: 78499 },
      { kind: "step", step: 4, rate: 80811 },
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS4",
    agencyClassification: "GHO4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 77784 },
      { kind: "step", step: 2, rate: 79996 },
      { kind: "step", step: 3, rate: 82212 },
      { kind: "step", step: 4, rate: 84426 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS4",
    agencyClassification: "GHO4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 80740 },
      { kind: "step", step: 2, rate: 83036 },
      { kind: "step", step: 3, rate: 85337 }, 
      { kind: "step", step: 4, rate: 87634 },
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS4",
    agencyClassification: "GHO4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83486 },
      { kind: "step", step: 2, rate: 85860 },
      { kind: "step", step: 3, rate: 88239 }, 
      { kind: "step", step: 4, rate: 90614 },
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS5",
    agencyClassification: "GHO5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 86761 },
      { kind: "step", step: 2, rate: 89462 },
      { kind: "step", step: 3, rate: 91974 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS5",
    agencyClassification: "GHO5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 90058 },
      { kind: "step", step: 2, rate: 92862 },
      { kind: "step", step: 3, rate: 95469 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS5",
    agencyClassification: "GHO5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93120 },
      { kind: "step", step: 2, rate: 96020 },
      { kind: "step", step: 3, rate: 98715 },    
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS6",
    agencyClassification: "GHO6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 93707 },
      { kind: "step", step: 2, rate: 97169 },
      { kind: "step", step: 3, rate: 100638 },
      { kind: "step", step: 4, rate: 104103 },
      { kind: "step", step: 5, rate: 107574 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS6",
    agencyClassification: "GHO6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 97267 },
      { kind: "step", step: 2, rate: 100861 },
      { kind: "step", step: 3, rate: 104462 },
      { kind: "step", step: 4, rate: 108059 },
      { kind: "step", step: 5, rate: 111662 },          
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "APS6",
    agencyClassification: "GHO6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100575 },
      { kind: "step", step: 2, rate: 104291 },
      { kind: "step", step: 3, rate: 108014 },
      { kind: "step", step: 4, rate: 111734 },
      { kind: "step", step: 5, rate: 115459 },          
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 119751 },
      { kind: "step", step: 2, rate: 124525 },
      { kind: "step", step: 3, rate: 129291 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 124302 },
      { kind: "step", step: 2, rate: 129257 },
      { kind: "step", step: 3, rate: 134204 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 128529 },
      { kind: "step", step: 2, rate: 133652 },
      { kind: "step", step: 3, rate: 138767 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-13",
    effectiveTo: "2026-01-12",
    points: [
      { kind: "step", step: 1, rate: 137982 },
      { kind: "step", step: 2, rate: 144129 },
      { kind: "step", step: 3, rate: 150277 },
      { kind: "step", step: 4, rate: 156424 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-13",
    effectiveTo: "2027-01-12",
    points: [
      { kind: "step", step: 1, rate: 143226 },
      { kind: "step", step: 2, rate: 149606 },
      { kind: "step", step: 3, rate: 155988 },
      { kind: "step", step: 4, rate: 162368 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|official-secretary-to-the-governor-general",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-01-13",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148096 },
      { kind: "step", step: 2, rate: 154693 },
      { kind: "step", step: 3, rate: 161292 },
      { kind: "step", step: 4, rate: 167889 },    
    ]
  },         
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55167 },
      { kind: "step", step: 2, rate: 56824 },
      { kind: "step", step: 3, rate: 60650 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58756 },
      { kind: "step", step: 3, rate: 62712 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62330 },
      { kind: "step", step: 2, rate: 64176 },
      { kind: "step", step: 3, rate: 68695 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64449 },
      { kind: "step", step: 2, rate: 66358 },
      { kind: "step", step: 3, rate: 71031 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70934 },
      { kind: "step", step: 2, rate: 72733 },
      { kind: "step", step: 3, rate: 76503 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73346 },
      { kind: "step", step: 2, rate: 75206 },
      { kind: "step", step: 3, rate: 79104 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78497 },
      { kind: "step", step: 2, rate: 80957 },
      { kind: "step", step: 3, rate: 85197 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81166 },
      { kind: "step", step: 2, rate: 83710 },
      { kind: "step", step: 3, rate: 88094 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87953 },
      { kind: "step", step: 2, rate: 90686 },
      { kind: "step", step: 3, rate: 93194 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90943 },
      { kind: "step", step: 2, rate: 93769 },
      { kind: "step", step: 3, rate: 96829 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94773 },
      { kind: "step", step: 2, rate: 100142 },
      { kind: "step", step: 3, rate: 108263 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103547 },
      { kind: "step", step: 3, rate: 111944 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122574 },
      { kind: "step", step: 2, rate: 127206 },
      { kind: "step", step: 3, rate: 132269 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126742 },
      { kind: "step", step: 2, rate: 131531 },
      { kind: "step", step: 3, rate: 136766 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 142760 },
      { kind: "step", step: 2, rate: 155647 },
      { kind: "step", step: 3, rate: 162629 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|workplace-gender-equality-agency-wgea",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 147614 },
      { kind: "step", step: 2, rate: 160939 },
      { kind: "step", step: 3, rate: 168158 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56151 },
      { kind: "step", step: 3, rate: 57787 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59222 },
      { kind: "step", step: 3, rate: 60946 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 62201 },
      { kind: "step", step: 3, rate: 64235 }, 
      { kind: "step", step: 4, rate: 64877 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64658 },
      { kind: "step", step: 3, rate: 66598 },
      { kind: "step", step: 4, rate: 68425 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 68828 },
      { kind: "step", step: 3, rate: 70893 }, 
      { kind: "step", step: 4, rate: 72837 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 72591 },
      { kind: "step", step: 3, rate: 74769 },
      { kind: "step", step: 4, rate: 76820 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 77316 },
      { kind: "step", step: 3, rate: 79636 }, 
      { kind: "step", step: 4, rate: 81775 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 81499 },
      { kind: "step", step: 3, rate: 83944 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 86755 },
      { kind: "step", step: 3, rate: 89358 },
      { kind: "step", step: 4, rate: 91809 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91499 },
      { kind: "step", step: 3, rate: 94244 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 98537 },
      { kind: "step", step: 3, rate: 102479 },
      { kind: "step", step: 4, rate: 105910 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103723 },
      { kind: "step", step: 3, rate: 107872 },
      { kind: "step", step: 4, rate: 111701 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 118906 },
      { kind: "step", step: 3, rate: 122473 },
      { kind: "step", step: 4, rate: 125832 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 125408 },
      { kind: "step", step: 3, rate: 129170 },
      { kind: "step", step: 4, rate: 132713 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 133382 },
      { kind: "step", step: 2, rate: 137383 },
      { kind: "step", step: 3, rate: 143947 },
      { kind: "step", step: 4, rate: 145386 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|australian-institute-of-aboriginal-and-torres-strait-islander-studies-aiatsis",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 144895 },
      { kind: "step", step: 3, rate: 148841 },
      { kind: "step", step: 4, rate: 153336 },    
    ]
  }, 

  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS3",
    agencyClassification: "Level 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-20",
    effectiveTo: "2026-04-19",
    points: [
      { kind: "step", step: 1, rate: 74605 },
      { kind: "step", step: 2, rate: 76528 },
      { kind: "step", step: 3, rate: 78453 },
      { kind: "step", step: 4, rate: 80556 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS3",
    agencyClassification: "Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-20",
    effectiveTo: "2027-04-19",
    points: [
      { kind: "step", step: 1, rate: 77440 },
      { kind: "step", step: 2, rate: 79436 },
      { kind: "step", step: 3, rate: 81435 },
      { kind: "step", step: 4, rate: 83617 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS3",
    agencyClassification: "Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-04-20",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80073 },
      { kind: "step", step: 2, rate: 82137 },
      { kind: "step", step: 3, rate: 84203 },
      { kind: "step", step: 4, rate: 86460 },    
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS4",
    agencyClassification: "Level 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-20",
    effectiveTo: "2026-04-19",
    points: [
      { kind: "step", step: 1, rate: 83145 },
      { kind: "step", step: 2, rate: 85786 },
      { kind: "step", step: 3, rate: 88011 },
      { kind: "step", step: 4, rate: 90341 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS4",
    agencyClassification: "Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-20",
    effectiveTo: "2027-04-19",
    points: [
      { kind: "step", step: 1, rate: 86304 },
      { kind: "step", step: 2, rate: 89046 },
      { kind: "step", step: 3, rate: 91355 },
      { kind: "step", step: 4, rate: 93774 },
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS4",
    agencyClassification: "Level 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-04-20",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89239 },
      { kind: "step", step: 2, rate: 92074 },
      { kind: "step", step: 3, rate: 94462 },
      { kind: "step", step: 4, rate: 96962 },
    ]
  },     
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS5",
    agencyClassification: "Level 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-20",
    effectiveTo: "2026-04-19",
    points: [
      { kind: "step", step: 1, rate: 92817 },
      { kind: "step", step: 2, rate: 95741 },
      { kind: "step", step: 3, rate: 98420 },
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS5",
    agencyClassification: "Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-20",
    effectiveTo: "2027-04-19",
    points: [
      { kind: "step", step: 1, rate: 96344 },
      { kind: "step", step: 2, rate: 99380 },
      { kind: "step", step: 3, rate: 102160 },
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS5",
    agencyClassification: "Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-04-20",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99620 },
      { kind: "step", step: 2, rate: 102758 },
      { kind: "step", step: 3, rate: 105634 },
    ]
  },    
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS6",
    agencyClassification: "Level 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-20",
    effectiveTo: "2026-04-19",
    points: [
      { kind: "step", step: 1, rate: 103843 },
      { kind: "step", step: 2, rate: 106751 },
      { kind: "step", step: 3, rate: 110733 },
      { kind: "step", step: 4, rate: 115131 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS6",
    agencyClassification: "Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-20",
    effectiveTo: "2027-04-19",
    points: [
      { kind: "step", step: 1, rate: 107789 },
      { kind: "step", step: 2, rate: 110807 },
      { kind: "step", step: 3, rate: 114941 },
      { kind: "step", step: 4, rate: 119506 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "APS6",
    agencyClassification: "Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-04-20",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 111454 },
      { kind: "step", step: 2, rate: 114575 },
      { kind: "step", step: 3, rate: 118849 },
      { kind: "step", step: 4, rate: 123569 },    
    ]
  },      
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "EL1",
    agencyClassification: "Level 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-20",
    effectiveTo: "2026-04-19",
    points: [
      { kind: "step", step: 1, rate: 130538 },
      { kind: "step", step: 2, rate: 134574 },
      { kind: "step", step: 3, rate: 138563 },
      { kind: "step", step: 4, rate: 144922 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "EL1",
    agencyClassification: "Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-20",
    effectiveTo: "2027-04-19",
    points: [
      { kind: "step", step: 1, rate: 135498 },
      { kind: "step", step: 2, rate: 139688 },
      { kind: "step", step: 3, rate: 143829 },
      { kind: "step", step: 4, rate: 150429 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "EL1",
    agencyClassification: "Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-04-20",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140105 },
      { kind: "step", step: 2, rate: 144437 },
      { kind: "step", step: 3, rate: 148719 },
      { kind: "step", step: 4, rate: 155544 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "EL2",
    agencyClassification: "Level 7",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-04-20",
    effectiveTo: "2026-04-19",
    points: [
      { kind: "step", step: 1, rate: 157690 },
      { kind: "step", step: 2, rate: 166362 },
      { kind: "step", step: 3, rate: 172572 },
      { kind: "step", step: 4, rate: 178783 },
      { kind: "step", step: 5, rate: 184761 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "EL2",
    agencyClassification: "Level 7",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-04-20",
    effectiveTo: "2027-04-19",
    points: [
      { kind: "step", step: 1, rate: 163682 },
      { kind: "step", step: 2, rate: 172683 },
      { kind: "step", step: 3, rate: 179130 },
      { kind: "step", step: 4, rate: 185577 },
      { kind: "step", step: 5, rate: 191782 },    
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|indigenous-business-australia",
    classification: "EL2",
    agencyClassification: "Level 7",
    setName: "General",
    year: 2026,
    effectiveFrom: "2027-04-20",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 169247 },
      { kind: "step", step: 2, rate: 178554 },
      { kind: "step", step: 3, rate: 185221 },
      { kind: "step", step: 4, rate: 191887 },
      { kind: "step", step: 5, rate: 198303 },    
    ]
  }, 
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54808 },
      { kind: "step", step: 3, rate: 57436 },
      { kind: "step", step: 4, rate: 57787 },                
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59389 },
      { kind: "step", step: 4, rate: 60946 },           
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 60428 },
      { kind: "step", step: 3, rate: 62017 }, 
      { kind: "step", step: 4, rate: 63527 }, 
      { kind: "step", step: 5, rate: 65217 }, 
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 62775 },
      { kind: "step", step: 3, rate: 64126 }, 
      { kind: "step", step: 4, rate: 65790 }, 
      { kind: "step", step: 5, rate: 67434 }, 
      { kind: "step", step: 6, rate: 68425 },         
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66984 },
      { kind: "step", step: 2, rate: 68726 },
      { kind: "step", step: 3, rate: 70469 },
      { kind: "step", step: 4, rate: 72298 }, 
      { kind: "step", step: 5, rate: 72837 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 71063 },
      { kind: "step", step: 3, rate: 72865 }, 
      { kind: "step", step: 4, rate: 74756 }, 
      { kind: "step", step: 5, rate: 76820 },         
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 77031 },
      { kind: "step", step: 3, rate: 79037 },
      { kind: "step", step: 4, rate: 81601 }, 
      { kind: "step", step: 5, rate: 81775 }, 
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 79650 },
      { kind: "step", step: 3, rate: 81724 },
      { kind: "step", step: 4, rate: 83817 }, 
      { kind: "step", step: 5, rate: 86246 }, 
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 85881 },
      { kind: "step", step: 3, rate: 88299 },
      { kind: "step", step: 4, rate: 90900 }, 
      { kind: "step", step: 5, rate: 91809 }, 
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 88834 },
      { kind: "step", step: 3, rate: 91301 }, 
      { kind: "step", step: 4, rate: 93991 }, 
      { kind: "step", step: 5, rate: 96829 }, 
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94563 },
      { kind: "step", step: 3, rate: 94657 },
      { kind: "step", step: 4, rate: 99459 }, 
      { kind: "step", step: 5, rate: 103309 }, 
      { kind: "step", step: 6, rate: 104861 },
      { kind: "step", step: 7, rate: 105910 },                     
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 3, rate: 99734 }, 
      { kind: "step", step: 4, rate: 102841 }, 
      { kind: "step", step: 5, rate: 106822 }, 
      { kind: "step", step: 6, rate: 109511 },  
      { kind: "step", step: 7, rate: 111701 },       
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 124497 },
      { kind: "step", step: 3, rate: 140283 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 128730 },
      { kind: "step", step: 3, rate: 145053 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140283 },
      { kind: "step", step: 2, rate: 150762 },
      { kind: "step", step: 3, rate: 155798 },
      { kind: "step", step: 4, rate: 159778 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|torres-strait-regional-authority",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145053 },
      { kind: "step", step: 2, rate: 155888 },
      { kind: "step", step: 3, rate: 161095 }, 
      { kind: "step", step: 4, rate: 165210 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56151 },
      { kind: "step", step: 3, rate: 57787 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59222 },
      { kind: "step", step: 3, rate: 60496 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 61306 },
      { kind: "step", step: 3, rate: 63145 },
      { kind: "step", step: 4, rate: 64877 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64658 },
      { kind: "step", step: 3, rate: 66598 }, 
      { kind: "step", step: 4, rate: 68425 },   
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 68828 },
      { kind: "step", step: 3, rate: 70893 },
      { kind: "step", step: 4, rate: 72837 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 72591 },
      { kind: "step", step: 3, rate: 74769 },
      { kind: "step", step: 4, rate: 76820 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 77273 },
      { kind: "step", step: 3, rate: 79591 },
      { kind: "step", step: 4, rate: 81775 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 81499 },
      { kind: "step", step: 3, rate: 83944 },
      { kind: "step", step: 4, rate: 86246 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 86007 },
      { kind: "step", step: 3, rate: 90900 },
      { kind: "step", step: 4, rate: 91809 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 91499 },
      { kind: "step", step: 3, rate: 93991 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 98346 },
      { kind: "step", step: 3, rate: 102280 },
      { kind: "step", step: 4, rate: 105910 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103723 },
      { kind: "step", step: 3, rate: 107872 },
      { kind: "step", step: 4, rate: 111701 },    
    ]
  },  
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 115443 },
      { kind: "step", step: 2, rate: 118906 },
      { kind: "step", step: 3, rate: 122473 },
      { kind: "step", step: 4, rate: 125832 },               
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 125408 },
      { kind: "step", step: 3, rate: 129170 },
      { kind: "step", step: 4, rate: 132713 },    
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 134398 },
      { kind: "step", step: 2, rate: 137929 },
      { kind: "step", step: 3, rate: 143947 }, 
      { kind: "step", step: 4, rate: 145386 },              
    ]
  },
  {
    agencyId: "prime-minister-and-cabinet|aboriginal-hostels-limited-ahl",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 140675 },
      { kind: "step", step: 2, rate: 142619 },
      { kind: "step", step: 3, rate: 148841 },
      { kind: "step", step: 4, rate: 153336 },    
    ]
  },                                   
    {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 54759 },
      { kind: "step", step: 3, rate: 58714 },      
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 60710 },
      { kind: "step", step: 3, rate: 60946 },            
    ]
  },   
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 62616 },
      { kind: "step", step: 3, rate: 66451 },            
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64745 },
      { kind: "step", step: 3, rate: 68710 },            
    ]
  }, 
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67139 },
      { kind: "step", step: 2, rate: 71332 },
      { kind: "step", step: 3, rate: 75682 },            
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 73757 },
      { kind: "step", step: 3, rate: 78255 },            
    ]
  }, 
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75746 },
      { kind: "step", step: 2, rate: 80339 },
      { kind: "step", step: 3, rate: 85199 },            
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 83071 },
      { kind: "step", step: 3, rate: 88096 },            
    ]
  },     
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85204 },
      { kind: "step", step: 2, rate: 90386 },
      { kind: "step", step: 3, rate: 95705 },            
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 93459 },
      { kind: "step", step: 3, rate: 98959 },            
    ]
  }, 
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95714 },
      { kind: "step", step: 2, rate: 101695 },
      { kind: "step", step: 3, rate: 108092 },
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 105153 },
      { kind: "step", step: 3, rate: 111767 },
    ]
  },    
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117593 },
      { kind: "step", step: 2, rate: 126767 },
      { kind: "step", step: 3, rate: 135935 },
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 131077 },
      { kind: "step", step: 3, rate: 140557 },
    ]
  }, 
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 146806 },
      { kind: "step", step: 2, rate: 158256 },
      { kind: "step", step: 3, rate: 169706 },
      { kind: "step", step: 4, rate: 176611 },
    ]
  },
  {
    agencyId: "treasury|australian-bureau-of-statistics-abs",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 151797 },
      { kind: "step", step: 2, rate: 163637 },
      { kind: "step", step: 3, rate: 175476 },
      { kind: "step", step: 4, rate: 182616 },      
    ]
  }, 
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56131 },
      { kind: "step", step: 2, rate: 58488 },
      { kind: "step", step: 3, rate: 60243 },
      { kind: "step", step: 4, rate: 62042 },      
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58039 },
      { kind: "step", step: 2, rate: 60477 },
      { kind: "step", step: 3, rate: 62292 },
      { kind: "step", step: 4, rate: 64151 },      
    ]
  },   
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63521 },
      { kind: "step", step: 2, rate: 66380 },
      { kind: "step", step: 3, rate: 68371 },   
      { kind: "step", step: 4, rate: 70439 },   

    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65681 },
      { kind: "step", step: 2, rate: 68637 },
      { kind: "step", step: 3, rate: 70696 },  
      { kind: "step", step: 4, rate: 72834 },   
    ]
  }, 
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72348 },
      { kind: "step", step: 2, rate: 75242 },
      { kind: "step", step: 3, rate: 78092 },      
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74808 },
      { kind: "step", step: 2, rate: 77800 }, 
      { kind: "step", step: 3, rate: 80747 },                         
    ]
  }, 
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80643 },
      { kind: "step", step: 2, rate: 83063 },
      { kind: "step", step: 3, rate: 85555 },  
      { kind: "step", step: 4, rate: 87558 },            
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83385 },
      { kind: "step", step: 2, rate: 85887 },
      { kind: "step", step: 3, rate: 88464 },                         
      { kind: "step", step: 4, rate: 90535 },        
    ]
  },     
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89946 },
      { kind: "step", step: 2, rate: 92644 },
      { kind: "step", step: 3, rate: 95374 },     
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93004 },
      { kind: "step", step: 2, rate: 95793 },
      { kind: "step", step: 3, rate: 98617 },      
    ]
  }, 
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 99562 },
      { kind: "step", step: 2, rate: 102549 },
      { kind: "step", step: 3, rate: 105625 },  
      { kind: "step", step: 4, rate: 108794 },
      { kind: "step", step: 5, rate: 111590 },                
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102947 },
      { kind: "step", step: 2, rate: 106036 },
      { kind: "step", step: 3, rate: 109216 },
      { kind: "step", step: 4, rate: 112493 },     
      { kind: "step", step: 5, rate: 115384 },                            
    ]
  },    
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123702 },
      { kind: "step", step: 2, rate: 129020 },
      { kind: "step", step: 3, rate: 132891 },
      { kind: "step", step: 4, rate: 136900 },                   
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127908 },
      { kind: "step", step: 2, rate: 133407 },
      { kind: "step", step: 3, rate: 137409 },
      { kind: "step", step: 4, rate: 141555 },                   
    ]
  }, 
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143411 },
      { kind: "step", step: 2, rate: 149435 },
      { kind: "step", step: 3, rate: 153928 },
      { kind: "step", step: 4, rate: 158535 },
      { kind: "step", step: 5, rate: 163291 },    
      { kind: "step", step: 6, rate: 168064 },                
    ]
  },
  {
    agencyId: "treasury|australian-competition-consumer-commission-accc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148287 },
      { kind: "step", step: 2, rate: 154515 },
      { kind: "step", step: 3, rate: 159162 },
      { kind: "step", step: 4, rate: 163925 },
      { kind: "step", step: 5, rate: 168843 },    
      { kind: "step", step: 6, rate: 173778 },            
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54992 },
      { kind: "step", step: 2, rate: 56838 },
      { kind: "step", step: 3, rate: 58378 },
      { kind: "step", step: 4, rate: 60779 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58770 },
      { kind: "step", step: 3, rate: 60363 },
      { kind: "step", step: 4, rate: 62845 },    
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62237 },
      { kind: "step", step: 2, rate: 63947 },
      { kind: "step", step: 3, rate: 66482 },
      { kind: "step", step: 4, rate: 69012 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64353 },
      { kind: "step", step: 2, rate: 66121 },
      { kind: "step", step: 3, rate: 68742 },
      { kind: "step", step: 4, rate: 71358 },    
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70888 },
      { kind: "step", step: 2, rate: 72727 },
      { kind: "step", step: 3, rate: 74576 },
      { kind: "step", step: 4, rate: 76507 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73298 },
      { kind: "step", step: 2, rate: 75200 },
      { kind: "step", step: 3, rate: 77112 }, 
      { kind: "step", step: 4, rate: 79108 },   
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 79006 },
      { kind: "step", step: 2, rate: 81516 },
      { kind: "step", step: 3, rate: 83638 },
      { kind: "step", step: 4, rate: 85780 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81692 },
      { kind: "step", step: 2, rate: 84288 },
      { kind: "step", step: 3, rate: 86482 },
      { kind: "step", step: 4, rate: 88697 },    
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88123 },
      { kind: "step", step: 2, rate: 90882 },
      { kind: "step", step: 3, rate: 93440 },
      { kind: "step", step: 4, rate: 95173 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91119 },
      { kind: "step", step: 2, rate: 93972 },
      { kind: "step", step: 3, rate: 96617 },
      { kind: "step", step: 4, rate: 98409 },    
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 97543 },
      { kind: "step", step: 2, rate: 100216 },
      { kind: "step", step: 3, rate: 105253 },
      { kind: "step", step: 4, rate: 109330 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 100859 },
      { kind: "step", step: 2, rate: 103623 },
      { kind: "step", step: 3, rate: 108832 },
      { kind: "step", step: 4, rate: 113047 },    
    ]
  },  
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 116203 },
      { kind: "step", step: 2, rate: 122012 },
      { kind: "step", step: 3, rate: 131751 },
      { kind: "step", step: 4, rate: 136790 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 126160 },
      { kind: "step", step: 3, rate: 136231 },
      { kind: "step", step: 4, rate: 141441 },    
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 140724 },
      { kind: "step", step: 2, rate: 148458 },
      { kind: "step", step: 3, rate: 159543 },
      { kind: "step", step: 4, rate: 166556 },               
    ]
  },
  {
    agencyId: "treasury|australian-financial-security-authority-afsa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 145509 },
      { kind: "step", step: 2, rate: 153506 },
      { kind: "step", step: 3, rate: 164967 },
      { kind: "step", step: 4, rate: 172219 },    
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57548 },
      { kind: "step", step: 2, rate: 59346 },
      { kind: "step", step: 3, rate: 61145 },
      { kind: "step", step: 4, rate: 62943 },               
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59505 },
      { kind: "step", step: 2, rate: 61364 },
      { kind: "step", step: 3, rate: 63224 },
      { kind: "step", step: 4, rate: 65083 },    
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64742 },
      { kind: "step", step: 2, rate: 66540 },
      { kind: "step", step: 3, rate: 68338 },
      { kind: "step", step: 4, rate: 70137 },
      { kind: "step", step: 5, rate: 71935 },               
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66943 },
      { kind: "step", step: 2, rate: 68802 },
      { kind: "step", step: 3, rate: 70662 },
      { kind: "step", step: 4, rate: 72521 },
      { kind: "step", step: 5, rate: 74381 },    
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75723 },
      { kind: "step", step: 2, rate: 78090 },
      { kind: "step", step: 3, rate: 80456 },
      { kind: "step", step: 4, rate: 82822 },               
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 78298 },
      { kind: "step", step: 2, rate: 80744 },
      { kind: "step", step: 3, rate: 83191 },
      { kind: "step", step: 4, rate: 85638 },    
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85189 },
      { kind: "step", step: 2, rate: 87555 },
      { kind: "step", step: 3, rate: 89921 },
      { kind: "step", step: 4, rate: 92288 },
      { kind: "step", step: 5, rate: 94654 },               
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88085 },
      { kind: "step", step: 2, rate: 90532 },
      { kind: "step", step: 3, rate: 92978 }, 
      { kind: "step", step: 4, rate: 95425 },
      { kind: "step", step: 5, rate: 97872 },   
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 92118 },
      { kind: "step", step: 2, rate: 94997 },
      { kind: "step", step: 3, rate: 97876 },
      { kind: "step", step: 4, rate: 100755 },
      { kind: "step", step: 5, rate: 103633 },
      { kind: "step", step: 6, rate: 106512 },
      { kind: "step", step: 7, rate: 109391 },
      { kind: "step", step: 8, rate: 112269 },
      { kind: "step", step: 9, rate: 115148 },               
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 95250 },
      { kind: "step", step: 2, rate: 98227 },
      { kind: "step", step: 3, rate: 101204 },
      { kind: "step", step: 4, rate: 104180 },
      { kind: "step", step: 5, rate: 107157 },
      { kind: "step", step: 6, rate: 110133 },
      { kind: "step", step: 7, rate: 113110 },
      { kind: "step", step: 8, rate: 116086 },
      { kind: "step", step: 9, rate: 119063 },          
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 112590 },
      { kind: "step", step: 2, rate: 116108 },
      { kind: "step", step: 3, rate: 119626 },
      { kind: "step", step: 4, rate: 123145 },
      { kind: "step", step: 5, rate: 126663 },
      { kind: "step", step: 6, rate: 130182 },
      { kind: "step", step: 7, rate: 133700 },
      { kind: "step", step: 8, rate: 137219 },
      { kind: "step", step: 9, rate: 140737 },                     
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 116418 },
      { kind: "step", step: 2, rate: 120056 },
      { kind: "step", step: 3, rate: 123694 },
      { kind: "step", step: 4, rate: 127332 },
      { kind: "step", step: 5, rate: 130970 },
      { kind: "step", step: 6, rate: 134608 },
      { kind: "step", step: 7, rate: 138246 },
      { kind: "step", step: 8, rate: 141884 },
      { kind: "step", step: 9, rate: 145522 },          
    ]
  },  
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 150210 },
      { kind: "step", step: 2, rate: 154904 },
      { kind: "step", step: 3, rate: 159598 },
      { kind: "step", step: 4, rate: 164292 },
      { kind: "step", step: 5, rate: 168986 },
      { kind: "step", step: 6, rate: 173680 },
      { kind: "step", step: 7, rate: 178374 },
      { kind: "step", step: 8, rate: 183068 },
      { kind: "step", step: 9, rate: 187762 },                     
    ]
  },
  {
    agencyId: "treasury|australian-office-of-financial-management-aofm",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 155317 },
      { kind: "step", step: 2, rate: 160170 },
      { kind: "step", step: 3, rate: 165024 }, 
      { kind: "step", step: 4, rate: 169878 },
      { kind: "step", step: 5, rate: 174731 },
      { kind: "step", step: 6, rate: 179585 },
      { kind: "step", step: 7, rate: 184439 },
      { kind: "step", step: 8, rate: 189292 },
      { kind: "step", step: 9, rate: 194146 },         
    ]
  },    
  {
    agencyId: "treasury|australian-securities-and-investments-commission-asic",
    classification: "APS1",
    agencyClassification: "ASIC1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 53103 },
      { kind: "step", step: 2, rate: 54893 },
      { kind: "step", step: 3, rate: 56377 }, 
      { kind: "step", step: 4, rate: 58692 },               
    ]
  },
  {
    agencyId: "treasury|australian-securities-and-investments-commission-asic",
    classification: "APS1",
    agencyClassification: "ASIC1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 54908 },
      { kind: "step", step: 2, rate: 56759 },
      { kind: "step", step: 3, rate: 58294 },
      { kind: "step", step: 4, rate: 60688 },    
    ]
  },  
  {
    agencyId: "treasury|australian-securities-and-investments-commission-asic",
    classification: "APS6",
    agencyClassification: "ASIC4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 94198 },
      { kind: "step", step: 2, rate: 96780 },
      { kind: "step", step: 3, rate: 101643 }, 
      { kind: "step", step: 4, rate: 105581 },
      { kind: "step", step: 5, rate: 108749 },
      { kind: "step", step: 6, rate: 112011 },                     
    ]
  },
  {
    agencyId: "treasury|australian-securities-and-investments-commission-asic",
    classification: "APS6",
    agencyClassification: "ASIC4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 97401 },
      { kind: "step", step: 2, rate: 100071 },
      { kind: "step", step: 3, rate: 105099 }, 
      { kind: "step", step: 4, rate: 109171 },
      { kind: "step", step: 5, rate: 112446 },
      { kind: "step", step: 6, rate: 115820 },         
    ]
  },  
  {
    agencyId: "treasury|australian-securities-and-investments-commission-asic",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-10-27",
    effectiveTo: "2025-10-26",
    points: [
      { kind: "step", step: 1, rate: 123444 },
      { kind: "step", step: 2, rate: 126716 },
      { kind: "step", step: 3, rate: 131725 },               
      { kind: "step", step: 4, rate: 136097 },
      { kind: "step", step: 5, rate: 140180 },
      { kind: "step", step: 6, rate: 144386 },       
    ]
  },
  {
    agencyId: "treasury|australian-securities-and-investments-commission-asic",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-10-27",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127641 },
      { kind: "step", step: 2, rate: 131025 },
      { kind: "step", step: 3, rate: 136204 },
      { kind: "step", step: 4, rate: 140725 },
      { kind: "step", step: 5, rate: 144946 },
      { kind: "step", step: 6, rate: 149295 },          
    ]
  },   
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 57175 },
      { kind: "step", step: 3, rate: 59893 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59119 },
      { kind: "step", step: 3, rate: 61929 },    
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64144 },
      { kind: "step", step: 2, rate: 67857 },
      { kind: "step", step: 3, rate: 70389 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66325 },
      { kind: "step", step: 2, rate: 70164 },
      { kind: "step", step: 3, rate: 72782 },    
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70713 },
      { kind: "step", step: 2, rate: 73541 },
      { kind: "step", step: 3, rate: 77308 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 73117 },
      { kind: "step", step: 2, rate: 76041 },
      { kind: "step", step: 3, rate: 79936 },    
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80709 },
      { kind: "step", step: 2, rate: 83806 },
      { kind: "step", step: 3, rate: 86556 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83453 },
      { kind: "step", step: 2, rate: 86655 },
      { kind: "step", step: 3, rate: 89499 },    
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88887 },
      { kind: "step", step: 2, rate: 92129 },
      { kind: "step", step: 3, rate: 95412 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91909 },
      { kind: "step", step: 2, rate: 95261 },
      { kind: "step", step: 3, rate: 98656 },    
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101011 },
      { kind: "step", step: 2, rate: 106550 },
      { kind: "step", step: 3, rate: 110297 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104445 },
      { kind: "step", step: 2, rate: 110173 },
      { kind: "step", step: 3, rate: 114047 },    
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 128158 },
      { kind: "step", step: 2, rate: 133638 },
      { kind: "step", step: 3, rate: 139401 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 132515 },
      { kind: "step", step: 2, rate: 138182 },
      { kind: "step", step: 3, rate: 144141 },    
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 158623 },
      { kind: "step", step: 2, rate: 167908 },
      { kind: "step", step: 3, rate: 176291 },               
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 164016 },
      { kind: "step", step: 2, rate: 173617 },
      { kind: "step", step: 3, rate: 182285 },    
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55051 },
      { kind: "step", step: 2, rate: 59782 },
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 61815 },
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63454 },
      { kind: "step", step: 2, rate: 67656 },
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65611 },
      { kind: "step", step: 2, rate: 69956 },
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71857 },
      { kind: "step", step: 2, rate: 76052 },
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74300 },
      { kind: "step", step: 2, rate: 78638 },
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80256 },
      { kind: "step", step: 2, rate: 84456 },
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82985 },
      { kind: "step", step: 2, rate: 87328 },
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90235 },
      { kind: "step", step: 2, rate: 96012 },
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93303 },
      { kind: "step", step: 2, rate: 99276 },
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101786 },
      { kind: "step", step: 2, rate: 107560 },
      { kind: "step", step: 3, rate: 115966 }, 
      { kind: "step", step: 4, rate: 123315 },               
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 105247 },
      { kind: "step", step: 2, rate: 111217 },
      { kind: "step", step: 3, rate: 119909 },  
      { kind: "step", step: 4, rate: 127508 },   
    ]
  },  
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 132770 },
      { kind: "step", step: 2, rate: 143187 },
      { kind: "step", step: 3, rate: 152301 },              
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 137284 },
      { kind: "step", step: 2, rate: 148055 },
      { kind: "step", step: 3, rate: 157479 },         
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 162174 },
      { kind: "step", step: 2, rate: 170154 },
      { kind: "step", step: 3, rate: 178135 },  
      { kind: "step", step: 4, rate: 186120 },              
    ]
  },
  {
    agencyId: "treasury|inspector-general-of-taxation-tax-ombudsman",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 167688 },
      { kind: "step", step: 2, rate: 175939 },
      { kind: "step", step: 3, rate: 184192 }, 
      { kind: "step", step: 4, rate: 192448 },    
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56131 },
      { kind: "step", step: 2, rate: 58488 },
      { kind: "step", step: 3, rate: 60243 },
      { kind: "step", step: 4, rate: 62042 },      
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58039 },
      { kind: "step", step: 2, rate: 60477 },
      { kind: "step", step: 3, rate: 62292 },
      { kind: "step", step: 4, rate: 64151 },      
    ]
  },   
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63521 },
      { kind: "step", step: 2, rate: 66380 },
      { kind: "step", step: 3, rate: 68371 },   
      { kind: "step", step: 4, rate: 70439 },   

    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65681 },
      { kind: "step", step: 2, rate: 68637 },
      { kind: "step", step: 3, rate: 70696 },  
      { kind: "step", step: 4, rate: 72834 },   
    ]
  }, 
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72348 },
      { kind: "step", step: 2, rate: 75242 },
      { kind: "step", step: 3, rate: 78092 },      
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74808 },
      { kind: "step", step: 2, rate: 77800 }, 
      { kind: "step", step: 3, rate: 80747 },                         
    ]
  }, 
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80643 },
      { kind: "step", step: 2, rate: 83063 },
      { kind: "step", step: 3, rate: 85555 },  
      { kind: "step", step: 4, rate: 87558 },            
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83385 },
      { kind: "step", step: 2, rate: 85887 },
      { kind: "step", step: 3, rate: 88464 },                         
      { kind: "step", step: 4, rate: 90535 },        
    ]
  },     
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89946 },
      { kind: "step", step: 2, rate: 92644 },
      { kind: "step", step: 3, rate: 95374 },     
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93004 },
      { kind: "step", step: 2, rate: 95793 },
      { kind: "step", step: 3, rate: 98617 },      
    ]
  }, 
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 99562 },
      { kind: "step", step: 2, rate: 102549 },
      { kind: "step", step: 3, rate: 105625 },  
      { kind: "step", step: 4, rate: 108794 },
      { kind: "step", step: 5, rate: 111590 },                
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102947 },
      { kind: "step", step: 2, rate: 106036 },
      { kind: "step", step: 3, rate: 109216 },
      { kind: "step", step: 4, rate: 112493 },     
      { kind: "step", step: 5, rate: 115384 },                            
    ]
  },    
  {
    agencyId: "treasury|national-competition-council",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 123702 },
      { kind: "step", step: 2, rate: 129020 },
      { kind: "step", step: 3, rate: 132891 },
      { kind: "step", step: 4, rate: 136900 },                   
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 127908 },
      { kind: "step", step: 2, rate: 133407 },
      { kind: "step", step: 3, rate: 137409 },
      { kind: "step", step: 4, rate: 141555 },                   
    ]
  }, 
  {
    agencyId: "treasury|national-competition-council",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143411 },
      { kind: "step", step: 2, rate: 149435 },
      { kind: "step", step: 3, rate: 153928 },
      { kind: "step", step: 4, rate: 158535 },
      { kind: "step", step: 5, rate: 163291 },    
      { kind: "step", step: 6, rate: 168064 },                
    ]
  },
  {
    agencyId: "treasury|national-competition-council",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148287 },
      { kind: "step", step: 2, rate: 154515 },
      { kind: "step", step: 3, rate: 159162 },
      { kind: "step", step: 4, rate: 163925 },
      { kind: "step", step: 5, rate: 168843 },    
      { kind: "step", step: 6, rate: 173778 },            
    ]
  },    
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 54516 },
      { kind: "step", step: "max", rate: 57787 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 57497 },
      { kind: "step", step: "max", rate: 60946 },
    ]
  },  
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 59520 },
      { kind: "step", step: "max", rate: 66834 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 62775 },
      { kind: "step", step: "max", rate: 69106 },
    ]
  },  
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 66823 },
      { kind: "step", step: "max", rate: 80824 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 70477 },
      { kind: "step", step: "max", rate: 83572 },
    ]
  },  
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 75022 },
      { kind: "step", step: "max", rate: 91080 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 79125 },
      { kind: "step", step: "max", rate: 94177 },
    ]
  },  
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 84228 },
      { kind: "step", step: "max", rate: 97144 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 88834 },
      { kind: "step", step: "max", rate: 100447 },
    ]
  },  
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 94563 },
      { kind: "step", step: "max", rate: 111130 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 99734 },
      { kind: "step", step: "max", rate: 114908 },
    ]
  },  
  {
    agencyId: "treasury|productivity-commission",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 115443 },
      { kind: "step", step: "max", rate: 146101 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 121755 },
      { kind: "step", step: "max", rate: 151068 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: "min", rate: 139885 },
      { kind: "step", step: "max", rate: 175481 },
    ]
  },
  {
    agencyId: "treasury|productivity-commission",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: "min", rate: 144641 },
      { kind: "step", step: "max", rate: 181447 },
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55606 },
      { kind: "step", step: 3, rate: 56997 },
      { kind: "step", step: 4, rate: 58384 }, 
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 58935 },
      { kind: "step", step: 4, rate: 60369 },
      { kind: "step", step: 5, rate: 60946 },    
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 60715 },
      { kind: "step", step: 2, rate: 62930 },
      { kind: "step", step: 3, rate: 64938 },
      { kind: "step", step: 4, rate: 66292 },               
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62779 },
      { kind: "step", step: 2, rate: 65070 },
      { kind: "step", step: 3, rate: 67146 },
      { kind: "step", step: 4, rate: 68546 },    
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69683 },
      { kind: "step", step: 2, rate: 71055 },
      { kind: "step", step: 3, rate: 72993 },
      { kind: "step", step: 4, rate: 74580 },               
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72052 },
      { kind: "step", step: 2, rate: 73471 },
      { kind: "step", step: 3, rate: 75475 },
      { kind: "step", step: 4, rate: 77116 },    
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77848 },
      { kind: "step", step: 2, rate: 78832 },
      { kind: "step", step: 3, rate: 80309 },
      { kind: "step", step: 4, rate: 82403 },
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80495 },
      { kind: "step", step: 2, rate: 81512 },
      { kind: "step", step: 3, rate: 83040 },
      { kind: "step", step: 4, rate: 85205 },
      { kind: "step", step: 5, rate: 86246 },    
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 86716 },
      { kind: "step", step: 2, rate: 88125 },
      { kind: "step", step: 3, rate: 91423 }, 
      { kind: "step", step: 4, rate: 91809 },              
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89664 },
      { kind: "step", step: 2, rate: 91121 },
      { kind: "step", step: 3, rate: 94531 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 99145 },
      { kind: "step", step: 2, rate: 102167 },
      { kind: "step", step: 3, rate: 105018 },
      { kind: "step", step: 4, rate: 108328 },               
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 102516 },
      { kind: "step", step: 2, rate: 105641 },
      { kind: "step", step: 3, rate: 108589 },
      { kind: "step", step: 4, rate: 112011 },   
    ]
  },  
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 121066 },
      { kind: "step", step: 2, rate: 126412 },
      { kind: "step", step: 3, rate: 134960 },               
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125182 },
      { kind: "step", step: 2, rate: 130710 },
      { kind: "step", step: 3, rate: 139549 },    
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 143870 },
      { kind: "step", step: 2, rate: 153041 },
      { kind: "step", step: 3, rate: 158160 },
      { kind: "step", step: 4, rate: 160858 },               
    ]
  },
  {
    agencyId: "treasury|royal-australian-mint",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148762 },
      { kind: "step", step: 2, rate: 158244 },
      { kind: "step", step: 3, rate: 163537 },
      { kind: "step", step: 4, rate: 166327 },    
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS1",
    agencyClassification: "ARPC 1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 58758 },
      { kind: "step", step: 2, rate: 60442 },
      { kind: "step", step: 3, rate: 62125 },
      { kind: "step", step: 4, rate: 63809 },               
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS1",
    agencyClassification: "ARPC 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 60756 },
      { kind: "step", step: 2, rate: 62497 },
      { kind: "step", step: 3, rate: 64238 },  
      { kind: "step", step: 4, rate: 65979 },  
    ]
  },  
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS2",
    agencyClassification: "ARPC 2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67729 },
      { kind: "step", step: 2, rate: 69224 },
      { kind: "step", step: 3, rate: 70722 },
      { kind: "step", step: 4, rate: 72212 },
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS2",
    agencyClassification: "ARPC 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70032 },
      { kind: "step", step: 2, rate: 71578 },
      { kind: "step", step: 3, rate: 73126 },
      { kind: "step", step: 4, rate: 74668 },    
    ]
  },  
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS3",
    agencyClassification: "ARPC 3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 76698 },
      { kind: "step", step: 2, rate: 78191 },
      { kind: "step", step: 3, rate: 79685 },
      { kind: "step", step: 4, rate: 81178 },               
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS3",
    agencyClassification: "ARPC 3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79305 },
      { kind: "step", step: 2, rate: 80849 },
      { kind: "step", step: 3, rate: 82394 },
      { kind: "step", step: 4, rate: 83938 },    
    ]
  },  
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS4",
    agencyClassification: "ARPC 4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85661 },
      { kind: "step", step: 2, rate: 87157 },
      { kind: "step", step: 3, rate: 88651 },
      { kind: "step", step: 4, rate: 90145 },               
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS4",
    agencyClassification: "ARPC 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88573 },
      { kind: "step", step: 2, rate: 90121 },
      { kind: "step", step: 3, rate: 91665 },
      { kind: "step", step: 4, rate: 93210 },    
    ]
  },  
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS5",
    agencyClassification: "ARPC 5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 96313 },
      { kind: "step", step: 2, rate: 98368 },
      { kind: "step", step: 3, rate: 100422 },
      { kind: "step", step: 4, rate: 102478 },               
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS5",
    agencyClassification: "ARPC 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99587 },
      { kind: "step", step: 2, rate: 101713 },
      { kind: "step", step: 3, rate: 103837 },
      { kind: "step", step: 4, rate: 105962 },    
    ]
  },  
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS6",
    agencyClassification: "ARPC 6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 108642 },
      { kind: "step", step: 2, rate: 114807 },
      { kind: "step", step: 3, rate: 123777 },
      { kind: "step", step: 4, rate: 131624 },               
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "APS6",
    agencyClassification: "ARPC 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 112336 },
      { kind: "step", step: 2, rate: 118710 },
      { kind: "step", step: 3, rate: 127985 },
      { kind: "step", step: 4, rate: 136099 },    
    ]
  },  
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "EL1",
    agencyClassification: "ARPC EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141711 },
      { kind: "step", step: 2, rate: 152831 },
      { kind: "step", step: 3, rate: 162561 },
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "EL1",
    agencyClassification: "ARPC EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146529 },
      { kind: "step", step: 2, rate: 158027 },
      { kind: "step", step: 3, rate: 168088 },
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "EL2",
    agencyClassification: "ARPC EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 173097 },
      { kind: "step", step: 2, rate: 181618 },
      { kind: "step", step: 3, rate: 190134 },
      { kind: "step", step: 4, rate: 198658 },               
    ]
  },
  {
    agencyId: "treasury|australian-reinsurance-pool-corporation-arpc",
    classification: "EL2",
    agencyClassification: "ARPC EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 178982 },
      { kind: "step", step: 2, rate: 187793 },
      { kind: "step", step: 3, rate: 196598 },
      { kind: "step", step: 4, rate: 205412 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 56131 },
      { kind: "step", step: 3, rate: 57786 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 59221 },
      { kind: "step", step: 3, rate: 60946 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59520 },
      { kind: "step", step: 2, rate: 60967 },
      { kind: "step", step: 3, rate: 63013 },
      { kind: "step", step: 4, rate: 64877 },
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 63040 },
      { kind: "step", step: 3, rate: 65155 },
      { kind: "step", step: 4, rate: 67083 },
      { kind: "step", step: 5, rate: 68425 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67181 },
      { kind: "step", step: 2, rate: 69271 },
      { kind: "step", step: 3, rate: 71425 },    
      { kind: "step", step: 4, rate: 72837 },
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 71626 },
      { kind: "step", step: 3, rate: 73853 },
      { kind: "step", step: 4, rate: 75313 },
      { kind: "step", step: 5, rate: 76820 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75667 },
      { kind: "step", step: 2, rate: 78027 },
      { kind: "step", step: 3, rate: 80390 },
      { kind: "step", step: 4, rate: 83250 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 80680 },
      { kind: "step", step: 3, rate: 83123 },
      { kind: "step", step: 4, rate: 86246 },   
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84286 },
      { kind: "step", step: 2, rate: 86335 },
      { kind: "step", step: 3, rate: 89531 },
      { kind: "step", step: 4, rate: 93584 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 89270 },
      { kind: "step", step: 3, rate: 92575 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 97756 },
      { kind: "step", step: 2, rate: 101802 },
      { kind: "step", step: 3, rate: 105682 }, 
      { kind: "step", step: 4, rate: 108869 },
      { kind: "step", step: 5, rate: 113155 },              
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101080 },
      { kind: "step", step: 2, rate: 105263 },
      { kind: "step", step: 3, rate: 109275 }, 
      { kind: "step", step: 4, rate: 112571 },
      { kind: "step", step: 5, rate: 117002 },   
    ]
  },  
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 117669 },
      { kind: "step", step: 2, rate: 122244 },
      { kind: "step", step: 3, rate: 125335 },
      { kind: "step", step: 4, rate: 128559 },
      { kind: "step", step: 5, rate: 133019 },                     
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 126400 },
      { kind: "step", step: 3, rate: 129596 },
      { kind: "step", step: 4, rate: 132930 },
      { kind: "step", step: 5, rate: 137542 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 139836 },
      { kind: "step", step: 2, rate: 146708 },
      { kind: "step", step: 3, rate: 153582 },
      { kind: "step", step: 4, rate: 160638 },
      { kind: "step", step: 5, rate: 167356 },
      { kind: "step", step: 6, rate: 174268 },
      { kind: "step", step: 7, rate: 181168 },                           
    ]
  },
  {
    agencyId: "industry-science-and-resources|geoscience-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 144590 },
      { kind: "step", step: 2, rate: 151696 },
      { kind: "step", step: 3, rate: 158804 },
      { kind: "step", step: 4, rate: 166100 },
      { kind: "step", step: 5, rate: 173046 },
      { kind: "step", step: 6, rate: 180193 },
      { kind: "step", step: 7, rate: 187328 },           
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54529 },
      { kind: "step", step: 2, rate: 56516 },
      { kind: "step", step: 3, rate: 58502 },
      { kind: "step", step: 4, rate: 60492 },
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 58438 },
      { kind: "step", step: 3, rate: 60491 },
      { kind: "step", step: 4, rate: 62549 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62714 },
      { kind: "step", step: 2, rate: 64700 },
      { kind: "step", step: 3, rate: 66682 },
      { kind: "step", step: 4, rate: 68667 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64846 },
      { kind: "step", step: 2, rate: 66900 },
      { kind: "step", step: 3, rate: 68949 },
      { kind: "step", step: 4, rate: 71002 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 70501 },
      { kind: "step", step: 2, rate: 72504 },
      { kind: "step", step: 3, rate: 74505 },
      { kind: "step", step: 4, rate: 76509 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 72898 },
      { kind: "step", step: 2, rate: 74969 },
      { kind: "step", step: 3, rate: 77038 }, 
      { kind: "step", step: 4, rate: 79110 },   
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78448 },
      { kind: "step", step: 2, rate: 80640 },
      { kind: "step", step: 3, rate: 82832 },
      { kind: "step", step: 4, rate: 85029 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81115 },
      { kind: "step", step: 2, rate: 83382 },
      { kind: "step", step: 3, rate: 85648 },
      { kind: "step", step: 4, rate: 87920 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87351 },
      { kind: "step", step: 2, rate: 89436 },
      { kind: "step", step: 3, rate: 91520 },
      { kind: "step", step: 4, rate: 93609 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90321 },
      { kind: "step", step: 2, rate: 92477 },
      { kind: "step", step: 3, rate: 94631 },
      { kind: "step", step: 4, rate: 96829 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 95395 },
      { kind: "step", step: 2, rate: 99721 },
      { kind: "step", step: 3, rate: 104041 },
      { kind: "step", step: 4, rate: 108365 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 103112 },
      { kind: "step", step: 3, rate: 107578 },
      { kind: "step", step: 4, rate: 112049 },    
    ]
  },  
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119737 },
      { kind: "step", step: 2, rate: 124747 },
      { kind: "step", step: 3, rate: 129753 },
      { kind: "step", step: 4, rate: 134764 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123808 },
      { kind: "step", step: 2, rate: 128988 },
      { kind: "step", step: 3, rate: 134165 },
      { kind: "step", step: 4, rate: 139346 },   
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 146680 },
      { kind: "step", step: 2, rate: 154779 },
      { kind: "step", step: 3, rate: 162882 },
      { kind: "step", step: 4, rate: 170991 },               
    ]
  },
  {
    agencyId: "industry-science-and-resources|ip-australia",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 151667 },
      { kind: "step", step: 2, rate: 160041 },
      { kind: "step", step: 3, rate: 168420 },
      { kind: "step", step: 4, rate: 176805 },    
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56423 },
      { kind: "step", step: 2, rate: 59648 },
      { kind: "step", step: "Maximum pay point", rate: 61695 },
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58341 },
      { kind: "step", step: 2, rate: 61676 },
      { kind: "step", step: "Maximum pay point", rate: 63793 },       
    ]
  },   
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66271 },
      { kind: "step", step: 2, rate: 67884 },
      { kind: "step", step: 3, rate: 69316 },      
      { kind: "step", step: "Maximum pay point", rate: 70619 },     
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68524 },
      { kind: "step", step: 2, rate: 70192 },
      { kind: "step", step: 3, rate: 71673 },
      { kind: "step", step: "Maximum pay point", rate: 73020 },     
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 74007 },
      { kind: "step", step: 2, rate: 75826 },
      { kind: "step", step: "Maximum pay point", rate: 77086 },          
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 76523 },
      { kind: "step", step: 2, rate: 78404 },
      { kind: "step", step: "Maximum pay point", rate: 79707 },              
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80505 },
      { kind: "step", step: 2, rate: 82751 },
      { kind: "step", step: 3, rate: 84237 },
      { kind: "step", step: "Maximum pay point", rate: 86097 },                 
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83242 },
      { kind: "step", step: 2, rate: 85565 },
      { kind: "step", step: 3, rate: 87101 },
      { kind: "step", step: "Maximum pay point", rate: 89024 },
    ]
  },     
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 88887 },
      { kind: "step", step: 2, rate: 90780 },
      { kind: "step", step: 3, rate: 92904 },
      { kind: "step", step: "Maximum pay point", rate: 95028 },       
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 91909 },
      { kind: "step", step: 2, rate: 93867 },
      { kind: "step", step: 3, rate: 96063 },
      { kind: "step", step: "Maximum pay point", rate: 98259 },         
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98314 },
      { kind: "step", step: 2, rate: 103182 },
      { kind: "step", step: 3, rate: 107077 },
      { kind: "step", step: "Maximum pay point", rate: 110483 },    
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101657 },
      { kind: "step", step: 2, rate: 106690 },
      { kind: "step", step: 3, rate: 110718 },
      { kind: "step", step: "Maximum pay point", rate: 114239 },             
    ]
  },    
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 126342 },
      { kind: "step", step: 2, rate: 132226 },
      { kind: "step", step: 3, rate: 138109 },
      { kind: "step", step: "Maximum pay point", rate: 143993 },              
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 130638 },
      { kind: "step", step: 2, rate: 136722 },
      { kind: "step", step: 3, rate: 142805 },
      { kind: "step", step: "Maximum pay point", rate: 148889 },         
    ]
  }, 
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147052 },
      { kind: "step", step: 2, rate: 156373 },
      { kind: "step", step: 3, rate: 165698 },
      { kind: "step", step: "Maximum pay point", rate: 175016 },      
    ]
  },
  {
    agencyId: "industry-science-and-resources|net-zero-economy-authority-nzea",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152052 },
      { kind: "step", step: 2, rate: 161690 },
      { kind: "step", step: 3, rate: 171332 },
      { kind: "step", step: "Maximum pay point", rate: 180967 },   
    ]
  },                                 
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55059 },
      { kind: "step", step: 2, rate: 59789 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 61822 },
    ]
  },   
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 63461 },
      { kind: "step", step: 2, rate: 67665 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 65619 },
      { kind: "step", step: 2, rate: 69966 },
    ]
  }, 
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 71864 },
      { kind: "step", step: 2, rate: 76059 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74307 },
      { kind: "step", step: 2, rate: 78645 },
    ]
  }, 
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 80266 },
      { kind: "step", step: 2, rate: 84465 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 82995 },
      { kind: "step", step: 2, rate: 87337 },
    ]
  },     
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90244 },
      { kind: "step", step: 2, rate: 96022 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93312 },
      { kind: "step", step: 2, rate: 99287 },
    ]
  }, 
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101799 },
      { kind: "step", step: 2, rate: 107574 },
      { kind: "step", step: 3, rate: 115978 },
      { kind: "step", step: 4, rate: 123328 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 105260 },
      { kind: "step", step: 2, rate: 111232 },
      { kind: "step", step: 3, rate: 119921 },
      { kind: "step", step: 4, rate: 127521 },
    ]
  },    
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 132786 },
      { kind: "step", step: 2, rate: 143204 },
      { kind: "step", step: 3, rate: 152319 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 137301 },
      { kind: "step", step: 2, rate: 148073 },
      { kind: "step", step: 3, rate: 157498 },
    ]
  }, 
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 162193 },
      { kind: "step", step: 2, rate: 170176 },
      { kind: "step", step: 3, rate: 178157 },
      { kind: "step", step: 4, rate: 186140 },
    ]
  },
  {
    agencyId: "treasury|department-of-the-treasury",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 167708 },
      { kind: "step", step: 2, rate: 175962 },
      { kind: "step", step: 3, rate: 184214 },
      { kind: "step", step: 4, rate: 192469 },
    ]
  },  
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 56681 },
      { kind: "step", step: 2, rate: 58569 },
      { kind: "step", step: 3, rate: 60146 },
      { kind: "step", step: 4, rate: 62600 },
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 58609 },
      { kind: "step", step: 2, rate: 60560 },
      { kind: "step", step: 3, rate: 62191 },
      { kind: "step", step: 4, rate: 64728 },
    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64095 },
      { kind: "step", step: 2, rate: 65848 },
      { kind: "step", step: 3, rate: 67565 },
      { kind: "step", step: 4, rate: 69311 },
      { kind: "step", step: 5, rate: 71037 },        
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 66274 },
      { kind: "step", step: 2, rate: 68087 },
      { kind: "step", step: 3, rate: 69867 },
      { kind: "step", step: 4, rate: 71668 },
      { kind: "step", step: 5, rate: 73452 },      
    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72951 },
      { kind: "step", step: 2, rate: 74836 },
      { kind: "step", step: 3, rate: 76728 },
      { kind: "step", step: 4, rate: 78705 },       
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75431 },
      { kind: "step", step: 2, rate: 77380 },
      { kind: "step", step: 3, rate: 79337 },
      { kind: "step", step: 4, rate: 81381 },       

    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81265 },
      { kind: "step", step: 2, rate: 83833 },
      { kind: "step", step: 3, rate: 86009 },
      { kind: "step", step: 4, rate: 88200 },       
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84028 },
      { kind: "step", step: 2, rate: 86683 },
      { kind: "step", step: 3, rate: 88933 },
      { kind: "step", step: 4, rate: 91199 },      
    ]
  },      
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90596 },
      { kind: "step", step: 2, rate: 93420 },
      { kind: "step", step: 3, rate: 96042 },
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93676 },
      { kind: "step", step: 2, rate: 96596 },
      { kind: "step", step: 3, rate: 99307 },
    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      // { kind: "min",  label: "Minimum guidepoint", rate: 89000 },
      { kind: "step", step: 1, rate: 97816 },
      { kind: "step", step: 2, rate: 100240 },
      { kind: "step", step: 3, rate: 102976 },
      { kind: "step", step: 4, rate: 108138 },
      { kind: "step", step: 5, rate: 112312 },
      // { kind: "max",  label: "Maximum guidepoint", rate: 102500 }
    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      // { kind: "min",  label: "Minimum guidepoint", rate: 91500 },
      { kind: "step", step: 1, rate: 101142 },
      { kind: "step", step: 2, rate: 103648 },
      { kind: "step", step: 3, rate: 106477 },
      { kind: "step", step: 4, rate: 111815 },
      { kind: "step", step: 5, rate: 116131 },
      // { kind: "max",  label: "Maximum guidepoint", rate: 105800 }
    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 125291 },
      { kind: "step", step: 2, rate: 130944 },
      { kind: "step", step: 3, rate: 136595 },
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 129551 },
      { kind: "step", step: 2, rate: 135396 },
      { kind: "step", step: 3, rate: 141239 },
    ]
  },
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 150784 },
      { kind: "step", step: 2, rate: 155811 },
      { kind: "step", step: 3, rate: 160844 },
      { kind: "step", step: 4, rate: 165876 },
      { kind: "step", step: 5, rate: 170906 },
      { kind: "step", step: 6, rate: 175257 },      
      { kind: "step", step: 7, rate: 179606 },            
    ]
  },       
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 155911 },
      { kind: "step", step: 2, rate: 161109 },
      { kind: "step", step: 3, rate: 166313 },
      { kind: "step", step: 4, rate: 171516 },
      { kind: "step", step: 5, rate: 176717 },
      { kind: "step", step: 6, rate: 181216 },      
      { kind: "step", step: 7, rate: 185713 },  
    ]
  },    
    {
    agencyId: "education|australian-research-council-arc",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57262 },
      { kind: "step", step: 2, rate: 58728 },
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59209 },
      { kind: "step", step: 2, rate: 60946 },
    ]
  },   
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61904 },
      { kind: "step", step: 2, rate: 63640 },
      { kind: "step", step: 3, rate: 65420 },   
      { kind: "step", step: 4, rate: 67250 },                  
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64009 },
      { kind: "step", step: 2, rate: 65804 },
      { kind: "step", step: 3, rate: 67644 },        
      { kind: "step", step: 4, rate: 69537 },             
    ]
  }, 
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 69136 },
      { kind: "step", step: 2, rate: 71069 },
      { kind: "step", step: 3, rate: 73059 },                     
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71487 },
      { kind: "step", step: 2, rate: 73485 },
      { kind: "step", step: 3, rate: 75543 },     
      { kind: "step", step: 4, rate: 76820 },                    
    ]
  }, 
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 77722 },
      { kind: "step", step: 2, rate: 79900 },
      { kind: "step", step: 3, rate: 82134 },      
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 80365 },
      { kind: "step", step: 2, rate: 82617 },
      { kind: "step", step: 3, rate: 84927 },      
      { kind: "step", step: 4, rate: 86246 },                   
    ]
  },     
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84436 },
      { kind: "step", step: 2, rate: 86802 },
      { kind: "step", step: 3, rate: 89231 },     
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 87307 },
      { kind: "step", step: 2, rate: 89753 },
      { kind: "step", step: 3, rate: 92265 },      
      { kind: "step", step: 4, rate: 96829 },                   
    ]
  }, 
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 93627 },
      { kind: "step", step: 2, rate: 96104 },
      { kind: "step", step: 3, rate: 98793 },
      { kind: "step", step: 4, rate: 101588 },             
      { kind: "step", step: 5, rate: 104401 },             
      { kind: "step", step: 6, rate: 105910 },             
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99734 },
      { kind: "step", step: 2, rate: 102152 },
      { kind: "step", step: 3, rate: 105011 },
      { kind: "step", step: 4, rate: 107951 },             
      { kind: "step", step: 5, rate: 109511 },             
      { kind: "step", step: 6, rate: 111701 },             
    ]
  },    
  {
    agencyId: "education|australian-research-council-arc",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 119401 },
      { kind: "step", step: 2, rate: 122387 },
      { kind: "step", step: 3, rate: 125444 },
      { kind: "step", step: 4, rate: 128580 },                   
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123461 },
      { kind: "step", step: 2, rate: 126548 },
      { kind: "step", step: 3, rate: 129709 },
      { kind: "step", step: 4, rate: 132952 },                   
    ]
  }, 
  {
    agencyId: "education|australian-research-council-arc",
    classification: "EL2.1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 11, rate: 143268 },
      { kind: "step", step: 12, rate: 151407 },
      { kind: "step", step: 13, rate: 155986 },                 
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "EL2.1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 11, rate: 148139 },
      { kind: "step", step: 12, rate: 156555 },
      { kind: "step", step: 13, rate: 161290 },
    ]
  }, 
  {
    agencyId: "education|australian-research-council-arc",
    classification: "EL2.2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 21, rate: 156362 },
      { kind: "step", step: 22, rate: 161491 },                  
    ]
  },
  {
    agencyId: "education|australian-research-council-arc",
    classification: "EL2.2",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 21, rate: 161678 },
      { kind: "step", step: 22, rate: 166982 },
                
    ]
  },   
    {
    agencyId: "education|department-of-education",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 62868 },
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 59452 },
      { kind: "step", step: 2, rate: 65006 },
    ]
  },   
  {
    agencyId: "education|department-of-education",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67532 },
      { kind: "step", step: 2, rate: 70637 },
      { kind: "step", step: 3, rate: 71966 },   
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 69828 },
      { kind: "step", step: 2, rate: 73039 },
      { kind: "step", step: 3, rate: 74413 },        
    ]
  }, 
  {
    agencyId: "education|department-of-education",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75419 },
      { kind: "step", step: 2, rate: 78554 },          
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 77983 },
      { kind: "step", step: 2, rate: 81225 },                
    ]
  }, 
  {
    agencyId: "education|department-of-education",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 82039 },
      { kind: "step", step: 2, rate: 84327 },
      { kind: "step", step: 3, rate: 87737 },                      
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84828 },
      { kind: "step", step: 2, rate: 87194 },
      { kind: "step", step: 3, rate: 90720 },                      
    ]
  },     
  {
    agencyId: "education|department-of-education",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 90580 },
      { kind: "step", step: 2, rate: 92510 },
      { kind: "step", step: 3, rate: 96839 },                       
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 93660 },
      { kind: "step", step: 2, rate: 95655 },
      { kind: "step", step: 3, rate: 100132 },                    
    ]
  }, 
  {
    agencyId: "education|department-of-education",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101833 },
      { kind: "step", step: 2, rate: 105146 },
      { kind: "step", step: 3, rate: 111979 },       
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 105295 },
      { kind: "step", step: 2, rate: 108721 },
      { kind: "step", step: 3, rate: 115786 },         
    ]
  },    
  {
    agencyId: "education|department-of-education",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 125220 },
      { kind: "step", step: 2, rate: 128226 },
      { kind: "step", step: 3, rate: 131437 },
      { kind: "step", step: 4, rate: 138394 },                   
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 129477 },
      { kind: "step", step: 2, rate: 132586 },
      { kind: "step", step: 3, rate: 135906 },
      { kind: "step", step: 4, rate: 143099 },                   
    ]
  }, 
  {
    agencyId: "education|department-of-education",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 147352 },
      { kind: "step", step: 2, rate: 156258 },
      { kind: "step", step: 3, rate: 165620 },
      { kind: "step", step: 4, rate: 176877 },
    ]
  },
  {
    agencyId: "education|department-of-education",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 152363 },
      { kind: "step", step: 2, rate: 161571 },
      { kind: "step", step: 3, rate: 171251 },
      { kind: "step", step: 4, rate: 182891 },
    ]
  },  
  // APS6 — 2025, “Technical” stream (same classification, different setName)
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS6",
    setName: "Technical",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      // { kind: "min",  label: "Minimum guidepoint", rate: 90500 },
      { kind: "step", step: 1, rate: 97816 },
      { kind: "step", step: 2, rate: 100240 },
      { kind: "step", step: 3, rate: 102976 },
      { kind: "step", step: 4, rate: 108138 },
      { kind: "step", step: 5, rate: 112312 },
      // { kind: "max",  label: "Maximum guidepoint", rate: 104500 }
    ]
  },
  // APS6 — 2026, “Technical” stream
  {
    agencyId: "treasury|australian-tax-office-ato",
    classification: "APS6",
    setName: "Technical",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "min",  label: "Minimum guidepoint", rate: 93000 },
      { kind: "step", step: 1, rate: 95500 },
      { kind: "step", step: 2, rate: 98600 },
      { kind: "step", step: 3, rate: 101900 },
      { kind: "step", step: 4, rate: 105100 },
      { kind: "max",  label: "Maximum guidepoint", rate: 107600 }
    ]
  },
    {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55369 },
      { kind: "step", step: 2, rate: 60539 },
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57497 },
      { kind: "step", step: 2, rate: 62597 },
    ]
  },   
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 65033 },
      { kind: "step", step: 2, rate: 68020 },
      { kind: "step", step: 3, rate: 69301 },   
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 67244 },
      { kind: "step", step: 2, rate: 70333 },
      { kind: "step", step: 3, rate: 71657 },        
    ]
  }, 
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72627 },
      { kind: "step", step: 2, rate: 75647 },
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75096 },
      { kind: "step", step: 2, rate: 78219 },              
    ]
  }, 
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 78996 },
      { kind: "step", step: 2, rate: 81205 },
      { kind: "step", step: 3, rate: 84490 },      
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 81682 },
      { kind: "step", step: 2, rate: 83966 },
      { kind: "step", step: 3, rate: 87363 },                         
    ]
  },     
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 87227 },
      { kind: "step", step: 2, rate: 89085 },
      { kind: "step", step: 3, rate: 89253 },     
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 90193 },
      { kind: "step", step: 2, rate: 92114 },
      { kind: "step", step: 3, rate: 96424 },      
      { kind: "step", step: 4, rate: 96829 },                   
    ]
  }, 
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98062 },
      { kind: "step", step: 2, rate: 101254 },
      { kind: "step", step: 3, rate: 107835 },          
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101396 },
      { kind: "step", step: 2, rate: 104697 },
      { kind: "step", step: 3, rate: 111501 },
      { kind: "step", step: 4, rate: 111702 },                       
    ]
  },    
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 120581 },
      { kind: "step", step: 2, rate: 123480 },
      { kind: "step", step: 3, rate: 126570 },
      { kind: "step", step: 4, rate: 133272 },                   
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 124681 },
      { kind: "step", step: 2, rate: 127678 },
      { kind: "step", step: 3, rate: 130873 },
      { kind: "step", step: 4, rate: 137803 },                   
    ]
  }, 
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 141896 },
      { kind: "step", step: 2, rate: 150475 },
      { kind: "step", step: 3, rate: 159487 },
      { kind: "step", step: 4, rate: 170329 },
    ]
  },
  {
    agencyId: "education|tertiary-education-quality-and-standards-agency-teqsa",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 146720 },
      { kind: "step", step: 2, rate: 155591 },
      { kind: "step", step: 3, rate: 164910 },
      { kind: "step", step: 4, rate: 176120 },
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55343 },
      { kind: "step", step: 3, rate: 57239 },
      { kind: "step", step: 4, rate: 59815 },                  
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59185 },
      { kind: "step", step: 4, rate: 61849 },           
    ]
  },   
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62472 },
      { kind: "step", step: 2, rate: 64347 },
      { kind: "step", step: 3, rate: 68669 },
      { kind: "step", step: 4, rate: 69517 },   
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64596 },
      { kind: "step", step: 2, rate: 66535 },
      { kind: "step", step: 3, rate: 71004 },
      { kind: "step", step: 4, rate: 71881 },   
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72196 },
      { kind: "step", step: 2, rate: 74238 },
      { kind: "step", step: 3, rate: 77431 },
      { kind: "step", step: 4, rate: 78336 },        
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74651 },
      { kind: "step", step: 2, rate: 76762 },
      { kind: "step", step: 3, rate: 80064 },
      { kind: "step", step: 4, rate: 80999 },                           
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81795 },
      { kind: "step", step: 2, rate: 84044 },
      { kind: "step", step: 3, rate: 86630 },
      { kind: "step", step: 4, rate: 87919 },             
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84576 },
      { kind: "step", step: 2, rate: 86901 },
      { kind: "step", step: 3, rate: 89575 },
      { kind: "step", step: 4, rate: 90908 },       
    ]
  },     
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89831 },
      { kind: "step", step: 2, rate: 91480 },
      { kind: "step", step: 3, rate: 94850 },
      { kind: "step", step: 4, rate: 95932 },       
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [      
      { kind: "step", step: 1, rate: 92885 },
      { kind: "step", step: 2, rate: 94590 },
      { kind: "step", step: 3, rate: 98075 },
      { kind: "step", step: 4, rate: 99194 },          
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98393 },
      { kind: "step", step: 2, rate: 102903 },
      { kind: "step", step: 3, rate: 108777 },
      { kind: "step", step: 4, rate: 110595 },                     
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101738 },
      { kind: "step", step: 2, rate: 106402 },
      { kind: "step", step: 3, rate: 112475 },
      { kind: "step", step: 4, rate: 121355 },                                
    ]
  },    
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122594 },
      { kind: "step", step: 2, rate: 129200 },
      { kind: "step", step: 3, rate: 134176 },
      { kind: "step", step: 4, rate: 139157 },                               
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126762 },
      { kind: "step", step: 2, rate: 133593 },
      { kind: "step", step: 3, rate: 138738 },
      { kind: "step", step: 4, rate: 143888 },                       
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [     
      { kind: "step", step: 1, rate: 144495 },
      { kind: "step", step: 2, rate: 156942 },
      { kind: "step", step: 3, rate: 164048 },
      { kind: "step", step: 4, rate: 170360 },                      
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149408 },
      { kind: "step", step: 2, rate: 162278 },
      { kind: "step", step: 3, rate: 169626 },
      { kind: "step", step: 4, rate: 176152 },          
    ]
  },  
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 54516 },
      { kind: "step", step: 2, rate: 55343 },
      { kind: "step", step: 3, rate: 57239 },
      { kind: "step", step: 4, rate: 59815 },                  
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59185 },
      { kind: "step", step: 4, rate: 61849 },           
    ]
  },   
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 62472 },
      { kind: "step", step: 2, rate: 64347 },
      { kind: "step", step: 3, rate: 68669 },
      { kind: "step", step: 4, rate: 69517 },   
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 64596 },
      { kind: "step", step: 2, rate: 66535 },
      { kind: "step", step: 3, rate: 71004 },
      { kind: "step", step: 4, rate: 71881 },   
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 72196 },
      { kind: "step", step: 2, rate: 74238 },
      { kind: "step", step: 3, rate: 77431 },
      { kind: "step", step: 4, rate: 78336 },        
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 74651 },
      { kind: "step", step: 2, rate: 76762 },
      { kind: "step", step: 3, rate: 80064 },
      { kind: "step", step: 4, rate: 80999 },                           
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 81795 },
      { kind: "step", step: 2, rate: 84044 },
      { kind: "step", step: 3, rate: 86630 },
      { kind: "step", step: 4, rate: 87919 },             
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 84576 },
      { kind: "step", step: 2, rate: 86901 },
      { kind: "step", step: 3, rate: 89575 },
      { kind: "step", step: 4, rate: 90908 },       
    ]
  },     
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 89831 },
      { kind: "step", step: 2, rate: 91480 },
      { kind: "step", step: 3, rate: 94850 },
      { kind: "step", step: 4, rate: 95932 },       
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [      
      { kind: "step", step: 1, rate: 92885 },
      { kind: "step", step: 2, rate: 94590 },
      { kind: "step", step: 3, rate: 98075 },
      { kind: "step", step: 4, rate: 99194 },          
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 98393 },
      { kind: "step", step: 2, rate: 102903 },
      { kind: "step", step: 3, rate: 108777 },
      { kind: "step", step: 4, rate: 110595 },                     
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101738 },
      { kind: "step", step: 2, rate: 106402 },
      { kind: "step", step: 3, rate: 112475 },
      { kind: "step", step: 4, rate: 121355 },                                
    ]
  },    
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 122594 },
      { kind: "step", step: 2, rate: 129200 },
      { kind: "step", step: 3, rate: 134176 },
      { kind: "step", step: 4, rate: 139157 },                               
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 126762 },
      { kind: "step", step: 2, rate: 133593 },
      { kind: "step", step: 3, rate: 138738 },
      { kind: "step", step: 4, rate: 143888 },                       
    ]
  }, 
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [     
      { kind: "step", step: 1, rate: 144495 },
      { kind: "step", step: 2, rate: 156942 },
      { kind: "step", step: 3, rate: 164048 },
      { kind: "step", step: 4, rate: 170360 },                      
    ]
  },
  {
    agencyId: "social-services|department-of-social-services-dss",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 149408 },
      { kind: "step", step: 2, rate: 162278 },
      { kind: "step", step: 3, rate: 169626 },
      { kind: "step", step: 4, rate: 176152 },          
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 55967 }, 
      { kind: "step", step: 4, rate: 58273 },               
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 57870 },
      { kind: "step", step: 4, rate: 60254 }, 
      { kind: "step", step: 5, rate: 60946 },     
    ]
  },  
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 61315 },
      { kind: "step", step: 2, rate: 62921 },
      { kind: "step", step: 3, rate: 64559 }, 
      { kind: "step", step: 4, rate: 66168 },               
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 63400 },
      { kind: "step", step: 2, rate: 65060 },
      { kind: "step", step: 3, rate: 66754 },
      { kind: "step", step: 4, rate: 68425 },     
    ]
  },  
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 67961 },
      { kind: "step", step: 2, rate: 70023 },
      { kind: "step", step: 3, rate: 71501 }, 
      { kind: "step", step: 4, rate: 74694 },               
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 70477 },
      { kind: "step", step: 2, rate: 72404 },
      { kind: "step", step: 3, rate: 73932 },
      { kind: "step", step: 4, rate: 77234 },     
    ]
  },  
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75745 },
      { kind: "step", step: 2, rate: 77058 },
      { kind: "step", step: 3, rate: 80188 },
      { kind: "step", step: 4, rate: 82241 }, 
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79125 },
      { kind: "step", step: 2, rate: 79678 },
      { kind: "step", step: 3, rate: 82914 },
      { kind: "step", step: 4, rate: 85037 }, 
      { kind: "step", step: 5, rate: 86246 },     
    ]
  },  
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 85039 },
      { kind: "step", step: 2, rate: 87134 },
      { kind: "step", step: 3, rate: 89584 }, 
      { kind: "step", step: 4, rate: 91809 },               
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90097 },
      { kind: "step", step: 3, rate: 92630 },
      { kind: "step", step: 4, rate: 94804 }, 
      { kind: "step", step: 5, rate: 96829 },     
    ]
  },  
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 94563 },
      { kind: "step", step: 2, rate: 96079 },
      { kind: "step", step: 3, rate: 98956 },
      { kind: "step", step: 4, rate: 104813 }, 
      { kind: "step", step: 5, rate: 105910 },                
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 102321 }, 
      { kind: "step", step: 4, rate: 108377 }, 
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 116973 },
      { kind: "step", step: 2, rate: 121641 },
      { kind: "step", step: 3, rate: 126308 },
      { kind: "step", step: 4, rate: 129176 },                
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 125777 },
      { kind: "step", step: 3, rate: 130602 }, 
      { kind: "step", step: 4, rate: 133568 },    
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 137125 },
      { kind: "step", step: 2, rate: 143073 },
      { kind: "step", step: 3, rate: 152956 },
      { kind: "step", step: 4, rate: 158069 }, 
      { kind: "step", step: 5, rate: 160757 },                
    ]
  },
  {
    agencyId: "social-services|australian-institute-of-family-studies-aifs",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 141787 },
      { kind: "step", step: 2, rate: 147937 },
      { kind: "step", step: 3, rate: 158157 },
      { kind: "step", step: 4, rate: 163443 }, 
      { kind: "step", step: 5, rate: 166223 },     
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 55851 },
      { kind: "step", step: 2, rate: 57324 },
      { kind: "step", step: 3, rate: 58795 },
      { kind: "step", step: 4, rate: 60680 },
      { kind: "step", step: 5, rate: 62564 },               
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 57750 },
      { kind: "step", step: 2, rate: 59273 },
      { kind: "step", step: 3, rate: 60794 },
      { kind: "step", step: 4, rate: 62743 },
      { kind: "step", step: 5, rate: 64691 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 64950 },
      { kind: "step", step: 2, rate: 66237 },
      { kind: "step", step: 3, rate: 67523 },
      { kind: "step", step: 4, rate: 69284 },
      { kind: "step", step: 5, rate: 71044 },                     
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 67158 },
      { kind: "step", step: 2, rate: 68489 },
      { kind: "step", step: 3, rate: 69819 },
      { kind: "step", step: 4, rate: 71640 },
      { kind: "step", step: 5, rate: 73459 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 73316 },
      { kind: "step", step: 2, rate: 74529 },
      { kind: "step", step: 3, rate: 75511 }, 
      { kind: "step", step: 4, rate: 77136 },
      { kind: "step", step: 5, rate: 78758 },                    
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 75809 },
      { kind: "step", step: 2, rate: 77063 },
      { kind: "step", step: 3, rate: 78078 },
      { kind: "step", step: 4, rate: 79759 },
      { kind: "step", step: 5, rate: 81436 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 82795 },
      { kind: "step", step: 2, rate: 83879 },
      { kind: "step", step: 3, rate: 84960 },
      { kind: "step", step: 4, rate: 86634 },
      { kind: "step", step: 5, rate: 88307 },                     
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 85610 },
      { kind: "step", step: 2, rate: 86731 },
      { kind: "step", step: 3, rate: 87849 },
      { kind: "step", step: 4, rate: 89580 },
      { kind: "step", step: 5, rate: 91309 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 92302 },
      { kind: "step", step: 2, rate: 92952 },
      { kind: "step", step: 3, rate: 93603 },
      { kind: "step", step: 4, rate: 94897 },
      { kind: "step", step: 5, rate: 96191 },                     
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 95440 },
      { kind: "step", step: 2, rate: 96112 },
      { kind: "step", step: 3, rate: 96786 },
      { kind: "step", step: 4, rate: 98123 },
      { kind: "step", step: 5, rate: 99461 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 101449 },
      { kind: "step", step: 2, rate: 104505 },
      { kind: "step", step: 3, rate: 107559 },
      { kind: "step", step: 4, rate: 111378 },
      { kind: "step", step: 5, rate: 115199 },                     
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104898 },
      { kind: "step", step: 2, rate: 108058 },
      { kind: "step", step: 3, rate: 111216 },
      { kind: "step", step: 4, rate: 115165 },
      { kind: "step", step: 5, rate: 119116 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 127621 },
      { kind: "step", step: 2, rate: 130690 },
      { kind: "step", step: 3, rate: 133758 },
      { kind: "step", step: 4, rate: 136949 },
      { kind: "step", step: 5, rate: 140143 },                     
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 131960 },
      { kind: "step", step: 2, rate: 135133 },
      { kind: "step", step: 3, rate: 138306 }, 
      { kind: "step", step: 4, rate: 141605 },
      { kind: "step", step: 5, rate: 144908 },         
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 153912 },
      { kind: "step", step: 2, rate: 158161 },
      { kind: "step", step: 3, rate: 162416 },
      { kind: "step", step: 4, rate: 167824 },
      { kind: "step", step: 5, rate: 173225 },                     
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|department-of-veterans-affairs-dva",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 159145 },
      { kind: "step", step: 2, rate: 163538 },
      { kind: "step", step: 3, rate: 167938 },
      { kind: "step", step: 4, rate: 173530 },
      { kind: "step", step: 5, rate: 179215 },          
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 54516 },
      { kind: "step", step: 3, rate: 57099 },
      { kind: "step", step: 4, rate: 57787 },
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 57497 },
      { kind: "step", step: 3, rate: 59040 }, 
      { kind: "step", step: 4, rate: 60946 },   
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 59763 },
      { kind: "step", step: 2, rate: 60756 },
      { kind: "step", step: 3, rate: 64877 },               
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62775 },
      { kind: "step", step: 2, rate: 64658 },
      { kind: "step", step: 3, rate: 67083 },
      { kind: "step", step: 4, rate: 68425 },    
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 66823 },
      { kind: "step", step: 2, rate: 67256 },
      { kind: "step", step: 3, rate: 71874 },
      { kind: "step", step: 4, rate: 72837 },               
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 70477 },
      { kind: "step", step: 3, rate: 74318 },
      { kind: "step", step: 4, rate: 76820 },    
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 75022 },
      { kind: "step", step: 2, rate: 75546 },
      { kind: "step", step: 3, rate: 80854 }, 
      { kind: "step", step: 4, rate: 81775 },              
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 79125 },
      { kind: "step", step: 3, rate: 83324 }, 
      { kind: "step", step: 4, rate: 86246 },   
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 84228 },
      { kind: "step", step: 2, rate: 87780 },
      { kind: "step", step: 3, rate: 90900 }, 
      { kind: "step", step: 4, rate: 91809 },              
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 88834 },
      { kind: "step", step: 2, rate: 90765 },
      { kind: "step", step: 3, rate: 93991 }, 
      { kind: "step", step: 4, rate: 96829 },   
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 2, rate: 94887 },
      { kind: "step", step: 3, rate: 102708 },
      { kind: "step", step: 4, rate: 104861 },
      { kind: "step", step: 5, rate: 105910 },               
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 2, rate: 99734 },
      { kind: "step", step: 3, rate: 106200 },
      { kind: "step", step: 4, rate: 108426 },
      { kind: "step", step: 5, rate: 111701 },    
    ]
  },  
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "EL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 116859 },
      { kind: "step", step: 2, rate: 126287 },
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "EL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 121755 },
      { kind: "step", step: 2, rate: 130581 },
      { kind: "step", step: 3, rate: 132713 },    
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "EL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-03-13",
    effectiveTo: "2026-03-11",
    points: [
      { kind: "step", step: 1, rate: 152393 },             
    ]
  },
  {
    agencyId: "veterans-affairs-defence-portfolio|australian-war-memorial",
    classification: "EL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 157574 }, 
    ]
  },    
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS1",
    agencyClassification: "PSL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 53318 },
      { kind: "step", step: 2, rate: 55182 },
      { kind: "step", step: 3, rate: 57114 },
      { kind: "step", step: 4, rate: 59091 }, 
      { kind: "step", step: 5, rate: 60086 },   
      { kind: "step", step: 6, rate: 62189 }, 
      { kind: "step", step: 7, rate: 64366 }, 
      { kind: "step", step: 8, rate: 66618 },   
      { kind: "step", step: 9, rate: 67611 },                        
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS1",
    agencyClassification: "PSL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 55131 },
      { kind: "step", step: 2, rate: 57058 },
      { kind: "step", step: 3, rate: 59056 },
      { kind: "step", step: 4, rate: 61100 }, 
      { kind: "step", step: 5, rate: 62129 },   
      { kind: "step", step: 6, rate: 64303 },
      { kind: "step", step: 7, rate: 66554 }, 
      { kind: "step", step: 8, rate: 68883 },   
      { kind: "step", step: 9, rate: 69910 },                   
    ]
  },   
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS2",
    agencyClassification: "PSL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 68965 },
      { kind: "step", step: 2, rate: 71379 },
      { kind: "step", step: 3, rate: 74037 },     
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS2",
    agencyClassification: "PSL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 71310 },
      { kind: "step", step: 2, rate: 73806 },
      { kind: "step", step: 3, rate: 76554 },   
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS3",
    agencyClassification: "PSL3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 75685 },
      { kind: "step", step: 2, rate: 79091 },       
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS3",
    agencyClassification: "PSL3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 78258 },
      { kind: "step", step: 2, rate: 81780 },                             
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS4",
    agencyClassification: "PSL4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 80672 },
      { kind: "step", step: 2, rate: 83496 },
      { kind: "step", step: 3, rate: 86418 },
      { kind: "step", step: 4, rate: 87659 },                 
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS4",
    agencyClassification: "PSL4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 83415 },
      { kind: "step", step: 2, rate: 86335 },
      { kind: "step", step: 3, rate: 89356 },
      { kind: "step", step: 4, rate: 90639 },            
    ]
  },     
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS5",
    agencyClassification: "PSL5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 89410 },
      { kind: "step", step: 2, rate: 92541 },
      { kind: "step", step: 3, rate: 95924 },       
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS5",
    agencyClassification: "PSL5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 92450 },
      { kind: "step", step: 2, rate: 95687 },
      { kind: "step", step: 3, rate: 99185 },        
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS6",
    agencyClassification: "PSL6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 97841 },
      { kind: "step", step: 2, rate: 101265 },
      { kind: "step", step: 3, rate: 104810 },
      { kind: "step", step: 4, rate: 108477 }, 
      { kind: "step", step: 5, rate: 109967 },                      
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "APS6",
    agencyClassification: "PSL6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 101168 },
      { kind: "step", step: 2, rate: 104708 },
      { kind: "step", step: 3, rate: 108374 },
      { kind: "step", step: 4, rate: 112165 }, 
      { kind: "step", step: 5, rate: 113706 },                                         
    ]
  },    
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "EL1",
    agencyClassification: "PEL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 119066 },
      { kind: "step", step: 2, rate: 123233 },
      { kind: "step", step: 3, rate: 127546 },
      { kind: "step", step: 4, rate: 132011 }, 
      { kind: "step", step: 5, rate: 135945 },                                  
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "EL1",
    agencyClassification: "PEL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 123114 },
      { kind: "step", step: 2, rate: 127423 },
      { kind: "step", step: 3, rate: 131883 },
      { kind: "step", step: 4, rate: 136499 }, 
      { kind: "step", step: 5, rate: 140567 },                           
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "EL2",
    agencyClassification: "PEL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2025-01-12",
    effectiveTo: "2025-01-11",
    points: [
      { kind: "step", step: 1, rate: 138661 },
      { kind: "step", step: 2, rate: 143514 },
      { kind: "step", step: 3, rate: 148538 },
      { kind: "step", step: 4, rate: 153735 }, 
      { kind: "step", step: 5, rate: 159116 },   
      { kind: "step", step: 6, rate: 164417 },                        
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-parliamentary-services",
    classification: "EL2",
    agencyClassification: "PEL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-01-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 143375 },
      { kind: "step", step: 2, rate: 148393 },
      { kind: "step", step: 3, rate: 153588 },
      { kind: "step", step: 4, rate: 158962 }, 
      { kind: "step", step: 5, rate: 164562 },   
      { kind: "step", step: 6, rate: 170007 },                     
    ]
  },  
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS1",
    agencyClassification: "PSL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 58866 },
      { kind: "step", step: 2, rate: 61591 },
      { kind: "step", step: 3, rate: 64412 },                     
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS1",
    agencyClassification: "PSL1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 60867 },
      { kind: "step", step: 2, rate: 63685 },
      { kind: "step", step: 3, rate: 66602 },
    ]
  },   
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS2",
    agencyClassification: "PSL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 66592 },
      { kind: "step", step: 2, rate: 69651 },
      { kind: "step", step: 3, rate: 72711 },     
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS2",
    agencyClassification: "PSL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 68856 },
      { kind: "step", step: 2, rate: 72019 },
      { kind: "step", step: 3, rate: 75183 },   
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS3",
    agencyClassification: "PSL3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 74930 },
      { kind: "step", step: 2, rate: 77711 }, 
      { kind: "step", step: 2, rate: 80497 },             
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS3",
    agencyClassification: "PSL3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 77478 },
      { kind: "step", step: 2, rate: 80353 },
      { kind: "step", step: 3, rate: 83234 },                                    
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS4",
    agencyClassification: "PSL4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 82826 },
      { kind: "step", step: 2, rate: 86219 },
      { kind: "step", step: 3, rate: 89610 },
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS4",
    agencyClassification: "PSL4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 85642 },
      { kind: "step", step: 2, rate: 89150 },
      { kind: "step", step: 3, rate: 92657 },
    ]
  },     
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS5",
    agencyClassification: "PSL5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 93685 },
      { kind: "step", step: 2, rate: 96462 },
      { kind: "step", step: 3, rate: 99132 },       
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS5",
    agencyClassification: "PSL5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 96870 },
      { kind: "step", step: 2, rate: 99742 },
      { kind: "step", step: 3, rate: 102502 },        
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS6",
    agencyClassification: "PSL6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 101356 },
      { kind: "step", step: 2, rate: 108194 },
      { kind: "step", step: 3, rate: 115028 },                  
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "APS6",
    agencyClassification: "PSL6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 104802 },
      { kind: "step", step: 2, rate: 111873 },
      { kind: "step", step: 3, rate: 118939 },                                     
    ]
  },    
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "EL1",
    agencyClassification: "EB1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 125767 },
      { kind: "step", step: 2, rate: 135571 },
      { kind: "step", step: 3, rate: 140264 },                             
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "EL1",
    agencyClassification: "EB1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 130043 },
      { kind: "step", step: 2, rate: 140180 },
      { kind: "step", step: 3, rate: 145054 },                        
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "EL2",
    agencyClassification: "EB2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-30",
    effectiveTo: "2025-11-29",
    points: [
      { kind: "step", step: 1, rate: 162779 },
      { kind: "step", step: 2, rate: 168147 },
      { kind: "step", step: 3, rate: 172477 },                    
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-house-of-representatives",
    classification: "EL2",
    agencyClassification: "EB2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-30",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 168313 },
      { kind: "step", step: 2, rate: 173864 },
      { kind: "step", step: 3, rate: 178341 },                  
    ]
  },  
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 60213 },
      { kind: "step", step: 2, rate: 62690 },
      { kind: "step", step: 3, rate: 64773 },
      { kind: "step", step: 4, rate: 66873 },                         
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 62260 },
      { kind: "step", step: 2, rate: 64821 },
      { kind: "step", step: 3, rate: 66975 },
      { kind: "step", step: 4, rate: 69147 },               
    ]
  },   
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 67690 },
      { kind: "step", step: 2, rate: 69449 },
      { kind: "step", step: 3, rate: 71186 },
      { kind: "step", step: 4, rate: 73270 }, 
      { kind: "step", step: 5, rate: 75371 },                
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 69991 },
      { kind: "step", step: 2, rate: 71810 },
      { kind: "step", step: 3, rate: 73606 },
      { kind: "step", step: 4, rate: 75761 }, 
      { kind: "step", step: 5, rate: 77934 },         
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS3",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 76921 },
      { kind: "step", step: 2, rate: 78912 },
      { kind: "step", step: 3, rate: 80995 },
      { kind: "step", step: 4, rate: 75371 },             
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS3",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 79536 },
      { kind: "step", step: 2, rate: 81595 },
      { kind: "step", step: 3, rate: 83749 },
      { kind: "step", step: 4, rate: 85923 },                                   
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 86271 },
      { kind: "step", step: 2, rate: 88479 },
      { kind: "step", step: 3, rate: 90563 },
      { kind: "step", step: 4, rate: 92665 },                 
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 89204 },
      { kind: "step", step: 2, rate: 91487 },
      { kind: "step", step: 3, rate: 93642 },
      { kind: "step", step: 4, rate: 95816 },            
    ]
  },     
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 96379 },
      { kind: "step", step: 2, rate: 98165 },
      { kind: "step", step: 3, rate: 100249 },
      { kind: "step", step: 4, rate: 102353 },           
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99656 },
      { kind: "step", step: 2, rate: 101503 },
      { kind: "step", step: 3, rate: 103657 },
      { kind: "step", step: 4, rate: 105833 },        
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS6",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 108561 },
      { kind: "step", step: 2, rate: 112770 },
      { kind: "step", step: 3, rate: 115895 },
      { kind: "step", step: 4, rate: 119087 },                     
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "APS6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 112252 },
      { kind: "step", step: 2, rate: 116604 },
      { kind: "step", step: 3, rate: 119835 },
      { kind: "step", step: 4, rate: 123136 },                                        
    ]
  },    
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "EL1",
    agencyClassification: "PEL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 131204 },
      { kind: "step", step: 2, rate: 141252 },
      { kind: "step", step: 3, rate: 146967 },                                 
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "EL1",
    agencyClassification: "PEL1",
    setName: "General",  
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 135665 },
      { kind: "step", step: 2, rate: 146055 },
      { kind: "step", step: 3, rate: 151964 },                          
    ]
  }, 
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "EL2",
    agencyClassification: "PEL2",
    setName: "General",
    year: 2025,
    effectiveFrom: "2024-11-09",
    effectiveTo: "2025-11-08",
    points: [
      { kind: "step", step: 1, rate: 163215 },
      { kind: "step", step: 2, rate: 168801 },
      { kind: "step", step: 3, rate: 174515 },                      
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|department-of-the-senate",
    classification: "EL2",
    agencyClassification: "PEL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2025-11-09",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 168764 },
      { kind: "step", step: 2, rate: 174540 },
      { kind: "step", step: 3, rate: 180449 },                    
    ]
  },  
  {
    agencyId: "parliamentary-departments-not-a-portfolio|parliamentary-budget-office",
    classification: "APS4",
    agencyClassification: "PSL4",
    setName: "General",
    year: 2025,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 77561 },
      { kind: "step", step: 2, rate: 79177 },
      { kind: "step", step: 3, rate: 80793 },
      { kind: "step", step: 4, rate: 82409 },
      { kind: "step", step: 5, rate: 84026 },
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|parliamentary-budget-office",
    classification: "APS5",
    agencyClassification: "PSL5",
    setName: "General",
    year: 2025,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 86610 },
      { kind: "step", step: 2, rate: 88291 },
      { kind: "step", step: 3, rate: 89971 },
      { kind: "step", step: 4, rate: 91651 },
      { kind: "step", step: 5, rate: 95012 },       
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|parliamentary-budget-office",
    classification: "APS6",
    agencyClassification: "PSL6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99536 },
      { kind: "step", step: 2, rate: 101583 },
      { kind: "step", step: 3, rate: 103630 },
      { kind: "step", step: 4, rate: 107722 }, 
      { kind: "step", step: 5, rate: 111816 },                                         
    ]
  },    
  {
    agencyId: "parliamentary-departments-not-a-portfolio|parliamentary-budget-office",
    classification: "EL1",
    agencyClassification: "PEL1",
    setName: "General",
    year: 2025,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125390 },
      { kind: "step", step: 2, rate: 127897 },
      { kind: "step", step: 3, rate: 130456 },
      { kind: "step", step: 4, rate: 133065 }, 
      { kind: "step", step: 5, rate: 138921 },
      { kind: "step", step: 6, rate: 144778 },                                  
    ]
  },
  {
    agencyId: "parliamentary-departments-not-a-portfolio|parliamentary-budget-office",
    classification: "EL2",
    agencyClassification: "PEL2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2026-03-12",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148657 },
      { kind: "step", step: 2, rate: 151630 },
      { kind: "step", step: 3, rate: 154663 },
      { kind: "step", step: 4, rate: 157756 }, 
      { kind: "step", step: 5, rate: 164200 },   
      { kind: "step", step: 6, rate: 170646 },
      { kind: "step", step: 7, rate: 177091 },                  
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS4",
    agencyClassification: "Parliamentary Service Level 4",
    setName: "General",
    year: 2026,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 77561 },
      { kind: "step", step: 2, rate: 79177 },
      { kind: "step", step: 3, rate: 80793 },    
      { kind: "step", step: 4, rate: 82409 },
      { kind: "step", step: 5, rate: 84026 },       
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS5",
    agencyClassification: "Parliamentary Service Level 5",
    setName: "General",
    year: 2026,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 86610 },
      { kind: "step", step: 2, rate: 88291 },
      { kind: "step", step: 3, rate: 89971 },
      { kind: "step", step: 4, rate: 91651 },
      { kind: "step", step: 5, rate: 95012 },           
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "APS6",
    agencyClassification: "Parliamentary Service Level 6",
    setName: "General",
    year: 2026,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 99536 },
      { kind: "step", step: 2, rate: 101583 },
      { kind: "step", step: 3, rate: 130630 },
      { kind: "step", step: 4, rate: 107722 },
      { kind: "step", step: 5, rate: 111816 },           
    ]
  },  
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "EL1",
    agencyClassification: "Parliamentary Executive Level 1",
    setName: "General",
    year: 2026,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 125390 },
      { kind: "step", step: 2, rate: 127897 },
      { kind: "step", step: 3, rate: 130456 },
      { kind: "step", step: 4, rate: 133065 },
      { kind: "step", step: 5, rate: 138921 },
      { kind: "step", step: 6, rate: 144778 },
    ]
  },
  {
    agencyId: "treasury|commonwealth-grants-commission-cgc",
    classification: "EL2",
    agencyClassification: "Parliamentary Executive Level 2",
    setName: "General",
    year: 2026,
    effectiveFrom: "2023-12-01",
    effectiveTo: "",
    points: [
      { kind: "step", step: 1, rate: 148657 },
      { kind: "step", step: 2, rate: 151630 },
      { kind: "step", step: 3, rate: 154663 },
      { kind: "step", step: 4, rate: 157756 },
      { kind: "step", step: 5, rate: 164200 },
      { kind: "step", step: 6, rate: 170646 },
      { kind: "step", step: 7, rate: 177091 },                
    ]
  }    
];
