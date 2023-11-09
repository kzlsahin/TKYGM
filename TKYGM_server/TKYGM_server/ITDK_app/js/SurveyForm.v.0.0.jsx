
const clc = (qID) => {
    console.log(qID);
    getImage(qID);
}

function SurveyForm() {
    return (        
        <div className="survey-form" data-version="0.0.0">
            <h1 title="Tersane, Tekne İmal ve Çekek Yeri Yönetmeliği'nin 19'uncu maddesinin 6'ıncı fıkrası / 12'nci maddenin 1'inci fıkrası kapsamında">
        İnceleme, Tespit ve Denetim Komisyonu Denetim Raporu*
    </h1>
            <section className="survey-header">
                <div>
                    <label>TESIS ADI:
                        <input id="facility-name" className="text-state" type="text" placeholder="Tesis Adını Girin"/>
                    </label>
                </div>
                <div>
                    <SurveyType id="survet-type" />
                    <FacilityType id="facility-type" />
                    <FloatingDeckStatus id="floating-dock-status" />
                    <input type="date" id="document-date" />
                </div>
            </section>
            <section className="survey-prerequisites">
                <article>
                    <div className="article-banner">
                    </div>
                        <table className="article-body">
                            <tbody>
                            <tr>
                                <td>
                                    Tesis adresi
                                </td>
                                <td>
                                    <input id="facility-address" className="text-state" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Denetim sırasında Komisyona eşlik eden tesis işleticisi/yetkilendirilmiş kişi bilgisi
                                </td>
                                <td>
                                    <input id="representative-person-name" className="text-state" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    İTDK ücreti ile ilgili makbuz Ek 50 olarak kaydedilir.
                                </td>
                                <td>
                                    <select id="payment" className="selection-state">
                                        <option value="payed">Yatırıldı</option>
                                        <option value="not-payed">Yatırılmadı</option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>                    
                </article>
            </section>
            <section className="survey-questionaries">
                <article id="q-1">
                    <div onClick={() => clc("1")} className="article-banner">
                        <p>1</p>
                    </div>
                    <QuestionBody
                        head="Sanayi veritabanı programına kayıtlı mı? Bilgileri güncel mi? (Yönetmelik Md 18 (8) )"
                        items={
                            [
                                { id: "q-1-1", head: "Ek 1" },
                                { id: "q-1-2", head: "Firma adı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?" },
                                { id: "q-1-3", head: "Çalışan sayısı güncel mi?" },
                            ]} />
                </article>

                <article id="q-2">
                    <div onClick={() => clc("2")} className="article-banner">
                        <p>2</p>
                    </div>
                    <QuestionBody
                        head="Tüzel kişiliğe ait faaliyet konusuna uygun Ticaret Sicil Gazetesinin aslı veya idarece onaylı örneği, gerçek kişiye ait sicil belgesinin aslı veya idarece onaylı örneği ve T.C. kimlik numarası beyanı sunuldu mu? (Yönetmelik Md -11 1 (b) )"
                        items={
                            [
                                { id: "q-2-1", head: "Ek 2" },
                                { id: "q-2-2", head: "Firma adı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?" },
                                { id: "q-2-3", head: "Çalışan sayısı güncel mi?" },
                            ]} />
                </article>

            </section>
        </div>
    );
}
