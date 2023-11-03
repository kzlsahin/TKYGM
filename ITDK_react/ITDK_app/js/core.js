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

const Audit_Result = Object.freeze({
"EK SUNULDU" : 0,
"EK SUNULMADI" : 1,
"UYGULAMA GÖRÜLMEDİ" : 2,
"UYGULAMA/DOKÜMAN YETERSİZ" : 3,
"EVET" : 4,
"HAYIR": 5,
"UYGULAMASI YOK" : 6,
"EK KONMADI": 7
});

const GetImage = () => {
    document.getElementById("img-inp-1").click();
}

const DirectoryManager = {
    directory : "",
    handler : null,
    options : {startIn : "documents", mode : "readwrite", id : "coredir"},
    async newDirectory(){
        this.handler = await window.showDirectoryPicker();
        this.directory = this.handler.name;
    }
}

const FileSavingManager = {

}