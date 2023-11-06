
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
                        <input id="facility-name" type="text" placeholder="Tesis Adını Girin"/>
                    </label>
                </div>
                <div>
                    <select id="survey-type">
                        <option value="0">İşletme İzni Belgesi Denetimi</option>
                        <option value="1">Kısmi İşletme İzni Belgesi Denetimi</option>
                        <option value="2">Ara Denetim</option>
                    </select>
                    <select id="facility-type">
                        <option value="0">Tersane</option>
                        <option value="1">Tekne İmal Yeri</option>
                        <option value="2">Çekek Yeri</option>
                    </select>
                    <select id="floating-dock-status">
                        <option value="0">Yüzer Havuz Mevcut</option>
                        <option value="1">Yüzer Havuz Mevcut Değil</option>
                    </select>
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
                                    <input id="facility-address" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Denetim sırasında Komisyona eşlik eden tesis işleticisi/yetkilendirilmiş kişi bilgisi
                                </td>
                                <td>
                                    <input id="representative-person-name" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    İTDK ücreti ile ilgili makbuz Ek 50 olarak kaydedilir.
                                </td>
                                <td>
                                    <select id="payment">
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
                    <table className="article-body">
                        <tbody>
                        <tr className="questionary-item head-question">
                            <td colSpan="2">Sanayi veritabanı programına kayıtlı mı? Bilgileri güncel mi? (Yönetmelik Md 18 (8) )</td>
                        </tr>
                        <tr className="questionary-item">
                            <td className="question">Ek 1 </td>
                            <td><AuditResult id="q-1-1"/></td>
                        </tr>
                        <tr className="questionary-item">
                            <td className="question">Firma adı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?</td>
                            <td><AuditResult id="q-1-2"/></td>
                        </tr>
                        <tr className="questionary-item">
                            <td className="question">Çalışan sayısı güncel mi? </td>
                            <td><AuditResult id="q-1-3"/></td>
                        </tr>
                        </tbody>
                    </table >
                </article>

                <article id="q-2">
                    <div onClick={() => clc("2")} className="article-banner">
                        <p>2</p>
                    </div>
                    <table className="article-body">
                    <tbody>
                        <tr className="questionary-item head-question">
                            <td colSpan="2">
                                Tüzel kişiliğe ait faaliyet konusuna uygun Ticaret Sicil Gazetesinin aslı veya idarece onaylı örneği, gerçek kişiye ait sicil belgesinin aslı veya idarece onaylı örneği ve T.C. kimlik numarası beyanı sunuldu mu? (Yönetmelik Md -11 1 (b) )
                            </td>
                        </tr>
                        <tr className="questionary-item">
                            <td className="question">Ek 2</td>
                            <td><AuditResult id="q-2-1"/></td>
                        </tr>
                        </tbody>
                    </table >
                </article>

            </section>
        </div>
    );
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
root.render(SurveyForm())