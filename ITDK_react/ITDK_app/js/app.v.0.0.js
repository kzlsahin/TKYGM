import * as fm from "/js/FileManager.js";
export {GetImage};

const SurveyTypeEnum = Object.freeze({
  Business_Permit: 0,
  Partial_Business_Permit: 1,
  Interim_Audit: 2,
});
const FacilityTypeEnum = Object.freeze({
  Shipyard: 0,
  Small_Shipyard: 1,
  Boatyard: 2,
});
const LoatingDockStatusEnum = Object.freeze({
  Present: 0,
  Absent: 1,
});

const Audit_Result = Object.freeze({
  "EK SUNULDU": 0,
  "EK SUNULMADI": 1,
  "UYGULAMA GÖRÜLMEDİ": 2,
  "UYGULAMA/DOKÜMAN YETERSİZ": 3,
  EVET: 4,
  HAYIR: 5,
  "UYGULAMASI YOK": 6,
  "EK KONMADI": 7,
});

let inputState = {};

const setState = () => {
  inputState = {};
  let inputs = document.getElementsByTagName("INPUT");
  for (let inp of inputs) {
    inputState[inp.id] = inp.value;
  }
  let selectables = document.getElementsByTagName("SELECT");
  for (let selectable of selectables) {
    inputState[selectable.id] = selectable.value;
  }
};

const importState = (state) => {
  let inputs = document.getElementsByTagName("INPUT");
  for (let inp of inputs) {
    inp.value = state[inp.id] ?? "";
  }
  let selectables = document.getElementsByTagName("SELECT");
  for (let selectable of selectables) {
    selectable.value = state[selectable.id] ?? "0";
  }
};

const GetImage = (qID) => {
  console.log("get image");
  let inp = document.getElementById("img-inp-1");
  console.log(inp);
  inp.dataset.qId = qID;
  inp.click();
};

const saveImage = async (event) => {
  let element = event.target;
  console.log(dir);
  let file = element.files[0];
  let fileName = "EK-" + element.dataset.qId + "/" + file.name;
  await DirectoryManager.saveFile(fileName, file);
};

const showForm = () => {
  let root = document.getElementById("root");
  root.style.display = "block";
};

const hideForm = () => {
  let root = document.getElementById("root");
  root.style.display = "none";
};

const newSurveyDirectory = async () => {
  let opfsRoot = await navigator.storage.getDirectory();
  let name = Date.now().toString();
  let handle = await fm.GetDirectory(name, opfsRoot, true);
  return handle;
};

const newSurveyFromFile = async (event) => {
  let element = event.target;
  if (element?.id === "directory-input") {
    console.log(element);
    let files = element.files;
    const directoryHandle = await newSurveyDirectory();
    await DirectoryManager.newDirectory(directoryHandle);
    console.log(directoryHandle);
    for (let file of files) {
      console.log("writing");
      console.log(file);
      try {
        await DirectoryManager.saveFile(file.webkitRelativePath, file);
      } catch (err) {
        console.log("Error:", err);
        console.log("the document couldn't be read!");
      }
    }
    setTimeout(openSurvey(), 50);
  } else {
    let inp = document.getElementById("directory-input");
    inp.click();
  }
};

const saveSurvey = async () => {
  setState();
  let content = JSON.stringify(inputState);
  await DirectoryManager.saveFile("survey.json", content);
  await fm.DownloadFilesAsZip(DirectoryManager.handler, "TKYGM");
};

const openSurvey = async () => {
  let res = false;
  try {
    let directoryHandle = DirectoryManager.handler;
    let file = await fm.GetFile(directoryHandle, "TKYGM/survey.json");
    if (file) {
      console.log(file);
      let content = await file.text();
      console.log(content);

      inputState = JSON.parse(content) ?? {};
      console.log("open new survey 1");

      importState(inputState);
      console.log("open new survey");
      showForm();
      return true;
    }
  } catch (err) {
    console.log("Error:", err);
    console.log("the document couldn't be read!");
  }
  openNewSurvey();
  return res;
};

const openNewSurvey = () => {
  showForm();
}
const DirectoryManager = {
  directory: "",
  handler: null,
  async newDirectory(dirHandler) {
    if (!dirHandler) {
      console.log("DİRECTORY HANDLER İS NULL");
      return;
    }
    this.handler = dirHandler;
    this.directory = dirHandler.name;
  },
  async getSubDirectory(path) {
    if (!this.handler) {
      console.log("directory is null");
      return;
    }
    let dirHandle = await fm.GetDirectory(path, this.handler, false);
    return dirHandle;
  },
  async createSubDirectory(path) {
    if (!this.handler) {
      console.log("directory is null");
      return;
    }
    let dirHandle = await fm.GetDirectory(path, this.handler, true);
    return dirHandle;
  },
  async saveFile(fileName, file) {
    if (!this.handler) {
      console.log("directory is null");
      return;
    }
    await fm.SaveFile(this.handler, fileName, file);
  },
  async getFile(fileName) {
    if (!this.handler) {
      console.log("directory is null");
      return;
    }
    let f = await fm.GetFile(this.handler, fileName);
    return f;
  },
};

const FileSavingManager = {};

const onStartup = () => {
  hideForm();
  window.getImage = GetImage;
};

window.addEventListener("load", onStartup);

document
  .getElementById("btn-new-survey-from-file")
  .addEventListener("click", (event) => newSurveyFromFile(event));
document
  .getElementById("btn-save-survey")
  .addEventListener("click", () => saveSurvey());
document
  .getElementById("btn-open-survey")
  .addEventListener("click", () =>openSurvey());
document
  .getElementById("img-inp-1")
  .addEventListener("change", (event) => saveImage(event));
document
  .getElementById("directory-input")
  .addEventListener("change", (event) => newSurveyFromFile(event));
