
function SurveyForm() {
    return (
        <div className="survey-form" data-version="0.0.0">
            <h1 title="Tersane, Tekne İmal ve Çekek Yeri Yönetmeliği'nin 19'uncu maddesinin 6'ıncı fıkrası / 12'nci maddenin 1'inci fıkrası kapsamında">
                İnceleme, Tespit ve Denetim Komisyonu Denetim Raporu*
            </h1>
            <section className="survey-header">
                <table>
                    <tbody>
                        <tr>
                            <td className="bold">TESIS ADI:</td>
                            <td colSpan="3">
                                <input id="facility-name" className="text-state" type="text" placeholder="Tesis Adını Girin" />
                            </td>
                        </tr>
                        <tr>
                            <td><SurveyType id="survet-type" /></td>
                            <td><FacilityType id="facility-type" /></td>
                            <td><FloatingDeckStatus id="floating-dock-status" /></td>
                            <td><input type="date" id="document-date" /></td>
                        </tr>
                    </tbody>
                </table>
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

                <QuestionBody
                    id="1"
                    head="Sanayi veritabanı programına kayıtlı mı? Bilgileri güncel mi? (Yönetmelik Md 18 (8) )"
                    items={
                        [
                            { id: "q-1-1", head: "Ek 1" },
                            { id: "q-1-2", head: "Firma adı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?" },
                            { id: "q-1-3", head: "Çalışan sayısı güncel mi?" },
                        ]} />

                <QuestionBody
                    id="2"
                    head="Tüzel kişiliğe ait faaliyet konusuna uygun Ticaret Sicil Gazetesinin aslı veya idarece onaylı örneği, gerçek kişiye ait sicil belgesinin aslı veya idarece onaylı örneği ve T.C. kimlik numarası beyanı sunuldu mu? (Yönetmelik Md -11 1 (b) )"
                    items={
                        [
                            { id: "q-2-1", head: "Ek 2" },
                            { id: "q-2-2", head: "Firma Kuruluşunu içeren nüsha mevcut mu?" },
                            { id: "q-2-3", head: "Adres bilgisi mevcut durumla uyumlu mu?" },
                            { id: "q-2-4", head: "Firma hissedarları ile ilgili bilgiyi içeren nüsha mevcut mu?" },
                            { id: "q-2-5", head: "Firma hissedarları ile ilgili bilgiyi içeren Hazirun Cetveli eklenmiş mi?" },
                        ]} />

                <QuestionBody
                    id="3"
                    head="Sicil tasdiknamesinin aslı veya idarece onaylı örneği ve yetki belgesi sunuldu mu? (Yönetmelik Md -11 1 (c) )"
                    items={
                        [
                            { id: "q-3-1", head: "Ek 3" },
                            { id: "q-3-2", head: "Ticaret Unvanı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?" },
                            { id: "q-3-3", head: "Faaliyet Alanı fiili durumla uyumlu mu?" },
                            { id: "q-3-4", head: "İmza sirküleri ve gerekli ise Vekaletname sunulmuş mu?" },
                        ]} />

                <QuestionBody
                    id="4"
                    head="Taşınmazın tapu, kira sözleşmesi, kullanma izni veya irtifak hakkı gibi mülkiyet veya ön izin sözleşmesi, irtifak hakkı tesis edilmesine ilişkin resmi senet ve kullanma izni sözleşmesi belgelerinin aslı veya idarece onaylı örneği sunuldu mu? Md.11.ç"
                    items={
                        [
                            { id: "q-4-1", head: "Ek 4" },
                            { id: "q-4-2", head: "Ön İzinine konu yüzölçüm:-" },
                            { id: "q-4-3", head: "Kullanma iznine konu yüzölçüm:   m2" },
                            { id: "q-4-4", head: "İrtifak Hakkı ve Tapu:" },
                            { id: "q-4-5", head: "Tapu/Kira Sözleşmesi:" },
                            { id: "q-4-6", head: "Sunulan dokümanlara konu taşınmaz yüz ölçümü ile fiilen kullanılan tüm taşınmaz alanları örtüşüyor mu? " },
                        ]} />
                <QuestionBody
                    id="5"
                    head="Tesis alanına ait onaylı imar planı paftası. (Yönetmelik Md -11 1 (ı) )"
                    items={
                        [
                            { id: "q-5-1", head: "Ek 5" },
                            { id: "q-5-2", head: "İlgili paftalar ölçekli taratılarak sunulmuş mu?" },
                            { id: "q-5-3", head: "Fiilien kullanılan taşınmazların vasfı faaliyet ile uyumlu mu?" },
                        ]} />
                <QuestionBody
                    id="6"
                    head="İşyeri açma ve çalışma ruhsatının aslı veya idarece onaylı örneği mevcut mu? (Yönetmelik Md -11 1 (f) ) - Kısmi İşletme İzni için aranmaz."
                    items={
                        [
                            { id: "q-6-1", head: "Ek 6" },
                            { id: "q-6-2", head: "İşyeri Ünvanı, Faaliyet Konusu ve Sınıfı fiili durumla uyumlu mu?" },
                        ]} />

                <QuestionBody
                    id="7"
                    head="Taşınmazın tapu, kira sözleşmesi, kullanma izni veya irtifak hakkı gibi mülkiyet veya ön izin sözleşmesi, irtifak hakkı tesis edilmesine ilişkin resmi senet ve kullanma izni sözleşmesi belgelerinin aslı veya idarece onaylı örneği sunuldu mu? Md.11.ç"
                    items={
                        [
                            { id: "q-7-1", head: "Ek 7 (EK 7 tablosu sunulmuş mu?)" },
                            { id: "q-7-2", head: "12/10/2004 tarihinden önce yapılan binaları gösterir ilgili Belediyesinden alınmış yazı sunulmuş mu?" },
                            { id: "q-7-3", head: "Yapı kullanma izni belgelerinde yer alan taban alanı bilgileri ile tesis alanı organizasyonu ve yerleşim planındakiler uyumlu mu?" },
                            { id: "q-7-4", head: "Yapı kayıt belgesi ve belgeye başvuru aşamasında ilgili sisteme yüklenen yapı fotoğrafı sunulmuş mu? Belge ve fotoğraf ile fiili durum uyumlu mu?" },
                        ]} />

            </section>
            <table className="full-width">
                <tbody>
                    <tr className="discussion-row">
                        <th>
                            <span className="vertical-text">Diğer Hususlar</span>
                        </th>
                        <td colSpan="2"></td>
                    </tr>
                    <tr>
                        <td colSpan="3">*Tersane, Tekne İmal ve Çekek Yeri Yönetmeliği'nin 19'uncu maddesinin 6'ıncı fıkrası / 12'nci maddenin 1'inci fıkrası kapsamında</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Açıklama kısımlarında kullanılan "Ek sunulmadı" ifadesi ilgili dokümanın Komisyon tarafından talep edildiği ancak tesis yetkilisince temin edilmediği; "Ek konmadı/konulmadı" ifadesi ise Komisyonun herhangi bir dokümanın ek olarak kullanılmasına gerek duymadığı anlamına gelir. </td>
                    </tr>
                    <tr>
                        <td colSpan="3">Denetim, bu dokümanda yer alan tarihte mesai saatleri içerisinde tesiste yapılan genel gözlemler, rastgele örnekleme ile edinilen bilgiler ve firma yetkilisince yapılan beyanlar doğrultusunda hazırlanmıştır.</td>
                    </tr>
                    <tr>
                        <td colSpan="3">İş bu rapor tesis incelemesi esnasında tarafımızca imza altına alınmıştır.</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <td>Adı Soyadı</td>
                        <td>Görevlendirildiği Birim / Unvan / İmza</td>
                    </tr>

                    <tr>
                        <th>Üye</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Üye</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Üye</th>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
