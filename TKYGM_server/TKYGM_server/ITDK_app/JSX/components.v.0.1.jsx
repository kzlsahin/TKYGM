function AuditResult(props) {
    return (
        <select id={props.id} className="selection-state">
            <option value="0">EK SUNULDU</option>
            <option value="1">EK SUNULMADI</option>
            <option value="2">UYGULAMA GÖRÜLMEDİ</option>
            <option value="3">UYGULAMA/DOKÜMAN YETERSİZ</option>
            <option value="4">EVET</option>
            <option value="5">HAYIR</option>
            <option value="6">UYGULAMASI YOK</option>
            <option value="7">EK KONMADI</option>
        </select>
    );
}

function SurveyType(props) {
    return (
        <select id={props.id} className="selection-state">
            <option value="0">İşletme İzni Belgesi Denetimi</option>
            <option value="1">Kısmi İşletme İzni Belgesi Denetimi</option>
            <option value="2">Ara Denetim</option>
        </select>
    );
}

function FacilityType(props) {
    return (
        <select id={props.id} className="selection-state">
            <option value="0">Tersane</option>
            <option value="1">Tekne İmal Yeri</option>
            <option value="2">Çekek Yeri</option>
        </select>
    );
}

function FloatingDeckStatus(props) {
    return (
        <select id={props.id} className="selection-state">
            <option value="0">Yüzer Havuz Mevcut</option>
            <option value="1">Yüzer Havuz Mevcut Değil</option>
        </select>
    );
}


const clc = (qID) => {
    console.log(qID);
    getImage(qID);
}

function QuestionBody(props) {
    const listItems = props.items.map(
        item =>
            <QeestionItem key={item.id} id={item.id} head={item.head} />
    );
    return (
        <article id={"q-" + props.id} className="questionary-article">
            <div onClick={() => clc(props.id)} className="article-banner">
                <p>{props.id}</p>
            </div>
            <table className="article-body">
                <tbody>
                    <tr className="questionary-item head-question">
                        <td colSpan="2">{props.head}</td>
                    </tr>
                    {listItems}
                </tbody>
            </table >
        </article>
    );
}

function QeestionItem(props) {
    return (
        <tr className="questionary-item">
            <td className="td-question">{props.head} </td>
            <td className="td-question-result"><AuditResult id={props.id} /></td>
        </tr>
    );
}