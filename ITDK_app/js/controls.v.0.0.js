const onDocumentLoad = () => {
    let AuditResults = document.getElementsByClassName("Audit_Result");
    for(let elem of AuditResults){
        elem.replaceWith(AUDIT_RESULT())
    }
}

window.addEventListener("load", onDocumentLoad);
