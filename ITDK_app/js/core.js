const SurveyType = Object.freeze({
    Business_Permit : 0,
    Partial_Business_Permit : 1,
    Interim_Audit : 2
});
const FacilityType = Object.freeze({
    Shipyard : 0,
    Small_Shipyard : 1,
    Boatyard  : 2
});
const LoatingDockStatus = Object.freeze({
    Present : 0,
    Absent : 1
});
const AuditResult = Object.freeze({
"EK SUNULDU" : 0,
"EK SUNULMADI" : 1,
"UYGULAMA GÖRÜLMEDİ" : 2,
"UYGULAMA/DOKÜMAN YETERSİZ" : 3,
"EVET" : 4,
"HAYIR": 5,
"UYGULAMASI YOK" : 6,
"EK KONMADI": 7
});

const AUDIT_RESULT = () => {
    let element = document.createElement('select');
    element.innerHTML = 
    `
<Selet class="audit-result">
                            <option value=0>EK SUNULDU</option>
                            <option value=1>EK SUNULMADI</option>
                            <option value=2>UYGULAMA GÖRÜLMEDİ</option>
                            <option value=3>UYGULAMA/DOKÜMAN YETERSİZ</option>
                            <option value=4>EVET</option>
                            <option value=5>HAYIR</option>
                            <option value=6>UYGULAMASI YOK</option>
                            <option value=7>EK KONMADI</option>
                        </Selet>
`;
return element;
}

