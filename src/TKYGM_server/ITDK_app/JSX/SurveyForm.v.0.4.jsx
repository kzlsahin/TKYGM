
function SurveyForm() {
    return (
        <div className="survey-form" data-version="0.0.0">
            <h1 title="Tersane, Tekne İmal ve Çekek Yeri Yönetmeliği'nin 19'uncu maddesinin 6'ıncı fıkrası / 12'nci maddenin 1'inci fıkrası kapsamında">
                İnceleme, Tespit ve Denetim Komisyonu Denetim Raporu*
            </h1>
            <div id="document-date-container">
                <input type="date" id="document-date" placeholder="" />
            </div>
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
                            <td colSpan="2"><FloatingDeckStatus id="floating-dock-status" /></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="survey-prerequisites">
                <article>
                    <div className="article-banner">
                    </div>
                    <table className="article-body" style={{ "tableLayout": "fixed" }}>
                        <colgroup>
                            <col />
                            <col className="wide-column" />
                        </colgroup>
                        <tbody>
                        <tr>
                            <td>
                                Tesis adresi
                            </td>
                            <td>
                                <div id="facility-address" className="text-state-multiline wide two-line" contentEditable></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Denetim sırasında Komisyona eşlik eden tesis işleticisi/yetkilendirilmiş kişi bilgisi
                            </td>
                            <td>
                                <div id="representative-person-name" className="text-state-multiline wide two-line" contentEditable></div>
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

                <QuestionBody
                    id="8"
                    head="Onaylı tesis organizasyonu ve yerleşim planı mevcut mu?"
                    items={
                        [
                            { id: "q-8-1", head: "Ek 8 (Onaylı planın ölçekli taratılmış kopyası sunulmuş mu?)" },
                            { id: "q-8-2", head: "Onaylı tesis organizasyonu ve yerleşim planı ile tesisin fiili durumu uyumlu mu?" },
                            { id: "q-8-3", head: "Onaylanmak üzere sunulmuş taslak Plan mevcut mu?" },
                        ]} />
                <QuestionBody
                    id="9"
                    head="Dolgu ve kıyı yapılarının, uygulama projelerine uygun olarak tamamlandığına dair Altyapı Yatırımları Genel Müdürlüğünün yazısı mevcut mu? (Yönetmelik Md -11 1 (e) ) - Kısmi İşletme İzni için aranmaz."
                    items={
                        [
                            { id: "q-9-1", head: "Ek 9 " },
                            { id: "q-9-2", head: "Dolgu alanlarının değerlendirildiği onaylı Proje/Uygunluk yazısı mevcut mu?" },
                        ]} />
                <QuestionBody
                    id="10"
                    head="Kapasite raporu mevcut mu? (Yönetmelik Md -11 1 (ğ) )"
                    items={
                        [
                            { id: "q-10-1", head: "Ek 10" },
                            { id: "q-10-2", head: "Belge geçerlilik tarihi denetim tarihinden sonra mı?" },
                            { id: "q-10-3", head: "Firma unvanı ve adres bilgisi Ticaret Sicil Gazetesi ile uyumlu mu?" },
                            { id: "q-10-4", head: "Faaliyet alanı bilgisi fiili durumla uyumlu mu?" },
                            { id: "q-10-5", head: "Arazi (m2), iskele, kızak, vinç, mühendis sayısı (dönemsel değişkenlik gösterebileceği dikkate alınır) fiili durumla uyumlu mu?" },
                        ]} />
                <QuestionBody
                    id="11"
                    head="İlgili kurumundan alınmış tesisin yangınla mücadelede yeterli olduğuna dair belge mevcut mu? (Yönetmelik Md -11 1 (g) )"
                    items={
                        [
                            { id: "q-11-1", head: "Ek 11" },
                            { id: "q-11-2", head: "Doküman içeriğinde işlenmiş bilgiler ile fiili durum uyumlu mu?" },
                        ]} />
                <QuestionBody
                    id="12"
                    head="Tesisler için TS EN ISO 9001 Kalite Yönetim Sistemi Belgesi, TS EN ISO 14001 Çevre Yönetim Sistemi Belgesi ve OHSAS 18001 İş Sağlığı ve Güvenliği Yönetim Sistemi Belgesinin aslı veya idarece onaylı örneği mevcut mu? (Yönetmelik Md -11 1 (h) ) - Kısmi İşletme İzni için aranmaz."
                    items={
                        [
                            { id: "q-12-1", head: "Ek 12" },
                        ]} />
                <QuestionBody
                    id="13"
                    head="İnşa, tadilat ve bakım-onarım için tesiste yeterli donanım bulunup bulunmadığı (Yönetmelik Md 12 (1)"
                    items={
                        [
                            { id: "q-13-1", head: "Ek 13" },
                            { id: "q-13-2", head: "İş akış şemasıyla uyumlu yapı/donatı ile techizat mevcut mu?" },
                            { id: "q-13-3", head: "Tesisin mevcut durumu ve işleyiş ile uyumlu organizasyon ve iş akış şeması mevcut mu?" },
                            { id: "q-13-5", head: "Tesis organizasyonunda modern üretim ve yönetim meotdları dikkate alınmış mı?" },
                            { id: "q-13-6", head: "Kapalı mahallerde havalandırma yeterli mi?" },
                            { id: "q-13-7", head: "Tesisin genelinde aydınlatma yeterli mi?" },
                            { id: "q-13-8", head: "İlgili şemalar (Organizasyon ve İş Akışı vb.) ile firma yetkilisinin üretim ve sahaların kullanımına yönelik izahlarının uyumlu olduğu gözlendi mi?" },
                            { id: "q-13-9", head: "İlgili şemaların fiili durumla uyumlu olduğu gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="14"
                    head="Tersanelerde en az iki gemi mühendisi olmak kaydıyla daimi ve altyüklenici olarak tüm çalışanların %2’si mühendis, bunun da yarısı gemi mühendisi mi? 
Tekne imal yeri ve imalat yapan çekek yerlerinde en az bir gemi mühendisi daimi olarak bulundurulmakta mı veya bir tescilli serbest gemi mühendisliği bürosu ile anlaşma 
yapıldığına dair sözleşme mevcut mu? (Yönetmelik Md 17 (7) a) b)"
                    items={
                        [
                            { id: "q-14-1", head: "Ek 14" },
                            { id: "q-14-2", head: "Oda sicil no bilgisi alındı mı? Koşullar sağlanıyor mu?" },
                        ]} />
                <QuestionBody
                    id="15"
                    head="Çevresel Etki Değerlendirmesi olumlu kararı/ gerekli değildir belgesi sunuldu mu? Çevre izniyle değişecek"
                    items={
                        [
                            { id: "q-15-1", head: "Ek 15 (Karar yazısı, Çevre Lisansı ve Çevre İzni Belgelerinin nüshaları)" }, ,
                        ]} />
                <QuestionBody
                    id="16"
                    head="Yangın tahliye projesi ve ilgili planlar mevcut mu?"
                    items={
                        [
                            { id: "q-16-1", head: "Ek 16" },
                            { id: "q-16-2", head: "Yüzer havuz ve sosyal tesisler ile yönetim binalarını kapsayan Plan mevcut mu?       " },
                            { id: "q-16-3", head: "Sahada/çalışma alanlarında uygun yerlerde plan mevcut mu?" },
                            { id: "q-16-4", head: "Acil durumlarda çalışanların tahliyesi için kullanılacak yollar belirlenmiş mi?" },
                            { id: "q-16-5", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="17"
                    head="Sabit ve seyyar yangınla mücadale/söndürme tesisat ve cihazları kullanıma hazır mı?"
                    items={
                        [
                            { id: "q-17-1", head: "Ek 17" },
                            { id: "q-17-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-17-3", head: "Uygulama gözlendi mi? (Yedek pompa ve gerekli ise pompanın yedek güç beslemesinin kullanıma hazır olduğunun gözlenmesinde fayda var.)" },
                        ]} />
                <QuestionBody
                    id="18"
                    head="Tesiste yer alan bölümler ve yapılar işaret levhaları ile markalanmış mı?"
                    items={
                        [
                            { id: "q-18-1", head: "Ek 18 (Genel izlenim verebilecek fotoğraflar)" },
                            { id: "q-18-2", head: "Uygulama gözlendi mi / Yapı ve alanlar maksadına uygun kullanılıyor mu?" },
                        ]} />
                <QuestionBody
                    id="19"
                    head="Tesis içi yollar belirlenmiş ve araç/çalışan kullanımı için açık durumda mı?"
                    items={
                        [
                            { id: "q-19-1", head: "Ek 19" },
                            { id: "q-19-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-19-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="20"
                    head="İdari ve sosyal tesisler, dinlenme yeri, yemekhane, lavabo ve tuvaletler mevcut mu?"
                    items={
                        [
                            { id: "q-20-1", head: "Ek 20" },
                            { id: "q-20-2", head: "Çalışan sayısı ile uyumlu tesis/alan belirlenmiş ve düzenlenmiş mi?" },
                            { id: "q-20-3", head: "İlgili alanların genel hijyen, düzen ve olanakları yeterli mi? (Soyunma odası imkanları (temiz gündelik kıyafet ve iş kıyafeti için ayrı dolaplar, yeter sayıda duş/tuvalet, çamaşır yıkama imkanı vb.)" },
                        ]} />
                <QuestionBody
                    id="21"
                    head="İçme suyu imkanı mevcut mu?"
                    items={
                        [
                            { id: "q-21-1", head: "Ek 21" },
                            { id: "q-21-2", head: "Çalışan sayısı ile uyumlu tesis/alan belirlenmiş ve düzenlenmiş mi?" },
                            { id: "q-21-3", head: "İlgili alanların genel hijyen, düzen ve olanakları yeterli mi? (Soyunma odası imkanları (temiz gündelik kıyafet ve iş kıyafeti için ayrı dolaplar, yeter sayıda duş/tuvalet, çamaşır yıkama imkanı vb.)" },
                        ]} />
                <QuestionBody
                    id="22"
                    head="Çalışanların ve araçların giriş-çıkış yaptığı alanlar, güvenliği sağlayıcı ve kayıtların tutulabileceği şekilde düzenlenmiş durumda mı?"
                    items={
                        [
                            { id: "q-22-1", head: "Ek 22" },
                            { id: "q-22-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-22-3", head: "Ziyaretçiler için prosedürler geliştirilmiş mi? (Tesis/Acil durum bilgilendirme, KKD temini vb.)" },
                            { id: "q-22-4", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="23"
                    head="Revir/ilk yardım üniteleri ve teçhizatları mevcut mu?"
                    items={
                        [
                            { id: "q-23-1", head: "Ek 23 " },
                            { id: "q-23-2", head: "Belirlenmiş alanların genel hijyen, düzen ve olanakları yeterli mi?" },
                            { id: "q-23-3", head: "Bulundurulması öngörülmüş tıbbi malzeme belirlenmiş ve kontrolü ile ilgili prosedür geliştirilmiş mi? Prosedürün uygulandığı gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="24"
                    head="İşyeri sağlık ve güvenlik birimi (İSGB)/ Ortak sağlık ve güvenlik birimi (OSGB) ile gerekli sözleşmeler yapılmış mı?"
                    items={
                        [
                            { id: "q-24-1", head: "Ek 24 (KATİB sistemi çıktıları)" },
                            { id: "q-24-2", head: "Tesis/Firma bilgileri Ticaret Sicil Gazetesi ile uyumlu mu?" },
                            { id: "q-24-3", head: "İlgili belgelerde faaliyet konusu ve tehlike sınıfı fiili durumla uyumlu mu?" },
                        ]} />
                <QuestionBody
                    id="25"
                    head="Her türlü sabit ve hareketli kaldırma vinçlerini kullanan operatörler ile çalıştırılan diğer operatör ve kalifiye elemanlar sertifikalı mı? (Yönetmelik Md 17 (7) a)"
                    items={
                        [
                            { id: "q-25-1", head: "Ek 25 (Mevcut ise çalışanların öğrenim durumu/Mesleki Yeterlilik Belgesi/Sertifikalarını gösterir doküman. Personel listesi) " },
                            { id: "q-25-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek sertifikalar sunulmuş mu?" },
                            { id: "q-25-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="26"
                    head="TÜRKAK A tipi muayene kuruluşu olarak yetki alan kuruluşlara taşınabilir veya taşınamaz basınçlı ekipmanların, boru hatlarının kontrolleri yaptırılmış mı?"
                    items={
                        [
                            { id: "q-26-1", head: "Ek 26 " },
                            { id: "q-26-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?" },
                            { id: "q-26-3", head: "Muayene raporları sunuldu mu?" },
                            { id: "q-26-4", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="27"
                    head="TÜRKAK A tipi muayene kuruluşu olarak yetki alan kuruluşlara ırgat, kaldırma ve iletme makinalarının kontrolleri yaptırılmış mı?"
                    items={
                        [
                            { id: "q-27-1", head: "Ek 27" },
                            { id: "q-27-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?" },
                            { id: "q-27-3", head: "Muayene raporları sunuldu mu?" },
                            { id: "q-27-4", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="28"
                    head="TÜRKAK A tipi muayene kuruluşu olarak yetki alan kuruluşlara topraklama ölçümleri, elektrik kabloları ve panoların kontrolleri yaptırılmış mı?"
                    items={
                        [
                            { id: "q-28-1", head: "Ek 28" },
                            { id: "q-28-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?" },
                            { id: "q-28-3", head: "Muayene raporları sunuldu mu?" },
                            { id: "q-28-4", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="29"
                    head="Tüm ırgat, kaldırma ve iletme makinaları, taşınabilir veya taşınamaz basınçlı ekipmanlar ve boru hatlarının düzenli bakım-tutum kayıtları tutulmakta mıdır?"
                    items={
                        [
                            { id: "q-29-1", head: "Ek 29" },
                            { id: "q-29-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?" },
                            { id: "q-29-3", head: "Bakım-tutum kayıt raporları sunuldu mu?" },
                            { id: "q-29-4", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="30"
                    head="Tersanelerin sınırlar ve çalışma alanlarının görüntülenebildiği kapalı devre kamera sistemi 
var mı? Görüntü kayıtları en az bir ay tesis yetkilisince saklanmakta mıdır? (Tekne imal yeri ve çekek yerinde aranmaz) 
(Yönetmelik Md 17 (10) - Kısmi İşletme İzni için aranmaz."
                    items={
                        [
                            { id: "q-30-1", head: "Ek 30 (Denetim/başvuru tarihinden bir ay öncesine ait görsellerden örnekler)" },
                            { id: "q-30-2", head: "Çalışma alanları, yanaşmış gemilerin bordaları, yüzer havuzun/tesisin deniz cephesi geneli görüntülenebiliyor mu?" },
                        ]} />
                <QuestionBody
                    id="31"
                    head="Çalışanların iş sağlığı ve güvenliği eğitimleri ile ilgili program mevcut mu?"
                    items={
                        [
                            { id: "q-31-1", head: "Ek 31" },
                            { id: "q-31-2", head: "Eğitim yapıldığına dair kayıtlar sunulmuş mu?" },
                            { id: "q-31-3", head: "Eğitimin sağlanabileceği mekan/imkanlar yeterli mi?" },
                            { id: "q-31-4", head: "Uygulama gözlendi mi / Çalışan beyanları tutarlı mı?" },
                        ]} />
                <QuestionBody
                    id="32"
                    head="İş başı eğitimleri verilmekte midir?"
                    items={
                        [
                            { id: "q-32-1", head: "Ek 32" },
                            { id: "q-32-2", head: "Eğitim yapıldığına dair kayıtlar sunulmuş mu?" },
                            { id: "q-32-3", head: "Eğitimin sağlanabileceği mekan/imkanlar yeterli mi?" },
                            { id: "q-32-4", head: "Uygulama gözlendi mi / Çalışan beyanları tutarlı mı?" },
                        ]} />
                <QuestionBody
                    id="33"
                    head="Çalışanlar ve çalışma alanlarına göre ilgili esaslara uygun kişisel koruyucu donanım kullanılmakta mıdır? "
                    items={
                        [
                            { id: "q-33-1", head: "Ek 33" },
                            { id: "q-33-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-33-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="34"
                    head="Kaldırma ve çekme gibi farklı işler için kullanılan sapan, halat ve kilit gibi ekipmanların envateri mevcut mu? Periyodik test/muayene/kontrolleri yapılmakta mı?"
                    items={
                        [
                            { id: "q-34-1", head: "Ek 34" },
                            { id: "q-34-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-34-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="35"
                    head="Tesisin her yerinden duyulabilen siren sistemi veya acil anons sistemi bulunmakta mıdır? "
                    items={
                        [
                            { id: "q-35-1", head: "Ek 35 (Mevcut ise kısa video kayıtları eklenebilir.)" },
                            { id: "q-35-2", head: "İlgili prosedrülerde siren ve anons sistemi öngörülmüş mü?" },
                            { id: "q-35-3", head: "Mevcıut ise yüzer havuz dahil tesisin her yerinden duyuluyor mu?" },
                        ]} />
                <QuestionBody
                    id="36"
                    head="Sıcak çalışma/yüksekte çalışma/gazdan arındırma gibi özellikli işlerle ilgili talimatlar/uygulamalar mevcut mu?"
                    items={
                        [
                            { id: "q-36-1", head: "Ek 32" },
                            { id: "q-36-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-36-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="37"
                    head="Acil durumu müdahale merkezinde bulunması gereken teçhizat ve merkezden sorumlu personel belirlenmiş mi?"
                    items={
                        [
                            { id: "q-37-1", head: "Ek 37" },
                            { id: "q-37-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-37-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="38"
                    head="Acil durumu müdahale merkezinde bulunan teçhizatın periyodik kontrolleri ile bakım-tutumu yapılıyor mu?"
                    items={
                        [
                            { id: "q-38-1", head: "Ek 38" },
                            { id: "q-38-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-38-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="39"
                    head=" İş ekipmanlarının kullanım talimatları mevcut mu?"
                    items={
                        [
                            { id: "q-39-1", head: "Ek 39" },
                            { id: "q-39-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                        ]} />
                <QuestionBody
                    id="40"
                    head="Geçici atık depolama alanları mevcut mu?"
                    items={
                        [
                            { id: "q-40-1", head: "Ek 40" },
                            { id: "q-40-2", head: "Belirlenmiş alanlara ulaşım için tesis içi yollar düzenlenmiş mi?" },
                        ]} />
                <QuestionBody
                    id="41"
                    head="Yüzer havuza gemi alınması ve havuzun daldırılması/İskele veya rıhtıma gemi yanaştırılması/gemi kızaklanması vb. 
işlerinde emniyet ve çevrenin korunmasını sağlayıcı önlemler alınmakta mıdır?"
                    items={
                        [
                            { id: "q-41-1", head: "Ek 40" },
                            { id: "q-41-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-41-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="42"
                    head="Yüzer havuzdaki/iskeledeki/rıhtımdaki/kızaktaki gemide çalışma yapılması sırasında alınacak çevrenin korunmasıyla ilgili tedbirler belirlenmiş midir?"
                    items={
                        [
                            { id: "q-42-1", head: "Ek 42" },
                            { id: "q-42-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?" },
                            { id: "q-42-3", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="43"
                    head="Yüzer havuz bağlama planı mevcut mu?"
                    items={
                        [
                            { id: "q-43-1", head: "Ek 43 (Onaylı planın ölçekli taratılmış kopyası sunulmuş mu?)" },
                            { id: "q-43-2", head: "Onaylı Bağlama Planı ile tesisin fiili durumu uyumlu mu?" },
                            { id: "q-43-3", head: "Onaylanmak üzere sunulmuş taslak Plan mevcut mu?" },
                        ]} />
                <QuestionBody
                    id="44"
                    head="Yüzer havuz işletme izni belgesi olup olmadığı (Yönetmelik Md 14 )"
                    items={
                        [
                            { id: "q-44-1", head: "Ek 44" },
                        ]} />
                <QuestionBody
                    id="45"
                    head="Çelik yapılı yüzer havuzların planlarına göre konstrüksiyon elemanlarının kalınlık 
ölçümünü içeren yetkilendirilmiş kuruluşlardan alınacak klas sörvey uygunluk raporunun beş yılda bir İdareye ibrazı yapılmış mı? (Yönetmelik Md 14 (7) )"
                    items={
                        [
                            { id: "q-45-1", head: "Ek 45 (Geçerli Klas Belgesi yeterli olup taratılarak Ek olarak konulmalıdır.)" },
                        ]} />
                <QuestionBody
                    id="46"
                    head="Yüzer havuzun tesis dışında su aracı olarak kullanılıyor ise su aracı uygunluk belgesi olup olmadığı (Yönetmelik Md 14 (9) )"
                    items={
                        [
                            { id: "q-40-1", head: "Ek 46" },
                        ]} />
                <QuestionBody
                    id="47"
                    head="Yüzer havuzun bağlanmasında faydalanılan ekipman/donanım gerekli periyodik kontrol ve teste tabi tutulmakta mı, 
bakım-tutumları yapılmakta mı? (Babalar, halat, sapan, zincir ve kilitler vs.)"
                    items={
                        [
                            { id: "q-47-1", head: "Ek 47" },
                            { id: "q-47-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?" },
                            { id: "q-47-3", head: "Muayene  ve bakım-tutum kayıt raporları sunuldu mu?" },
                            { id: "q-47-4", head: "Uygulama gözlendi mi?" },
                        ]} />
                <QuestionBody
                    id="48"
                    head="Tonoz, dolfen gibi bağlantı elemanlarının, yüzer havuzun bağlama planına uygun olarak emniyetli bir şekilde 
tutabileceğine dair yetkilendirilmiş kuruluşlardan alınmış rapor mevcut mu? "
                    items={
                        [
                            { id: "q-48-1", head: "Ek 48" },
                            { id: "q-48-2", head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?" },
                            { id: "q-48-3", head: "Doküman içeriği Bağlama Planı ile uyumlu mu?" },
                        ]} />
                <QuestionBody
                    id="49"
                    head="Enerji, ulaşım ve altyapı projeleri ile sanayi tesislerine yönelik çelik konstrüksiyonlar tersane ve tekne imal yerlerinde yapılıyor mu? Yapılıyor ise İdareden izin alınmış mı? (Yönetmelik Md 20 (8) )"
                    items={
                        [
                            { id: "q-49-1", head: "Ek 49 (Yapılıyor ise İzin yazısı; Yapılmıyor ise yapılmadığını beyan eden imzalı bir yazı sunulubilir.)" },
                        ]} />
                <QuestionBody
                    id="50"
                    head="İTDK ücreti ile ilgili makbuz"
                    items={
                        [
                            { id: "q-47-1", head: "Ek 50" },
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
