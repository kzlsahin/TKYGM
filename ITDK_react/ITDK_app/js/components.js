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
    )
  }

  