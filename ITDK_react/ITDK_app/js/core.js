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

const getImage = (qID) => {
    console.log("get image");
    let inp = document.getElementById("img-inp-1");
    console.log(inp);
    inp.dataset.qId = qID;
    inp.click();
}

const saveImage = async (event) => {
    let element = event.target;
    let dir = "EK-" + element.dataset.qId;
    console.log(dir);
    let file = element.files[0];
    let dirHandle = await DirectoryManager.getDirectory(dir);
    await DirectoryManager.saveFile(dirHandle, file.name, file);
};

const newSurvey = () => {
    DirectoryManager.newDirectory();
    let root = document.getElementById("root");
    root.style.display = "block";
};

const DirectoryManager = {
    directory : "",
    handler : null,
    options : {startIn : "documents", mode : "readwrite", id : "coredir"},
    async newDirectory(){
        this.handler = await window.showDirectoryPicker();
        this.directory = this.handler.name;
    },
    async getDirectory(dirName){
        let dirHandle = await this.handler.getDirectoryHandle(dirName, {create:true});
        return dirHandle;
    },
    async saveFile(directoryHandler, fileName, file){
        let fHandle = await directoryHandler.getFileHandle(fileName, {create:true});
        let writable = await fHandle.createWritable();
        await writable.write(file);
        writable.close();
    }
};

const FileSavingManager = {

};

const onStartup = () => {
    let root = document.getElementById("root");
    root.style.display= "none";
};

window.addEventListener("load", onStartup);

