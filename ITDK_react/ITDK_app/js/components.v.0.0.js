function AuditResult(props) {
  return (
    <select id={props.id}>
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
    <select id={props.id}>
      <option value="0">İşletme İzni Belgesi Denetimi</option>
      <option value="1">Kısmi İşletme İzni Belgesi Denetimi</option>
      <option value="2">Ara Denetim</option>
    </select>
  );
}

function FacilityType(props) {
  return (
    <select id={props.id}>
      <option value="0">Tersane</option>
      <option value="1">Tekne İmal Yeri</option>
      <option value="2">Çekek Yeri</option>
    </select>
  );
}

function FloatingDeckStatus(props) {
  return (
    <select id={props.id}>
      <option value="0">Yüzer Havuz Mevcut</option>
      <option value="1">Yüzer Havuz Mevcut Değil</option>
    </select>
  );
}
