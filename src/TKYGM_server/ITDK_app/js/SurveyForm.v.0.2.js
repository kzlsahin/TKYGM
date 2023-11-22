function SurveyForm() {
  return /*#__PURE__*/React.createElement("div", {
    className: "survey-form",
    "data-version": "0.0.0"
  }, /*#__PURE__*/React.createElement("h1", {
    title: "Tersane, Tekne \u0130mal ve \xC7ekek Yeri Y\xF6netmeli\u011Fi'nin 19'uncu maddesinin 6'\u0131nc\u0131 f\u0131kras\u0131 / 12'nci maddenin 1'inci f\u0131kras\u0131 kapsam\u0131nda"
  }, "\u0130nceleme, Tespit ve Denetim Komisyonu Denetim Raporu*"), /*#__PURE__*/React.createElement("div", {
    id: "document-date-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "document-date",
    placeholder: ""
  })), /*#__PURE__*/React.createElement("section", {
    className: "survey-header"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "bold"
  }, "TESIS ADI:"), /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, /*#__PURE__*/React.createElement("input", {
    id: "facility-name",
    className: "text-state",
    type: "text",
    placeholder: "Tesis Ad\u0131n\u0131 Girin"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(SurveyType, {
    id: "survet-type"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(FacilityType, {
    id: "facility-type"
  })), /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, /*#__PURE__*/React.createElement(FloatingDeckStatus, {
    id: "floating-dock-status"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "survey-prerequisites"
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    className: "article-banner"
  }), /*#__PURE__*/React.createElement("table", {
    className: "article-body",
    style: {
      "table-layout": "fixed"
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", {
    className: "wide-column"
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Tesis adresi"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    id: "facility-address",
    className: "text-state text-multiline",
    contentEditable: true
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Denetim s\u0131ras\u0131nda Komisyona e\u015Flik eden tesis i\u015Fleticisi/yetkilendirilmi\u015F ki\u015Fi bilgisi"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    id: "representative-person-name",
    className: "text-state text-multiline-wide",
    contentEditable: true
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u0130TDK \xFCcreti ile ilgili makbuz Ek 50 olarak kaydedilir."), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    id: "payment",
    className: "selection-state"
  }, /*#__PURE__*/React.createElement("option", {
    value: "payed"
  }, "Yat\u0131r\u0131ld\u0131"), /*#__PURE__*/React.createElement("option", {
    value: "not-payed"
  }, "Yat\u0131r\u0131lmad\u0131"))))))), /*#__PURE__*/React.createElement("section", {
    className: "survey-questionaries"
  }, /*#__PURE__*/React.createElement(QuestionBody, {
    id: "1",
    head: "Sanayi veritaban\u0131 program\u0131na kay\u0131tl\u0131 m\u0131? Bilgileri g\xFCncel mi? (Y\xF6netmelik Md 18 (8) )",
    items: [{
      id: "q-1-1",
      head: "Ek 1"
    }, {
      id: "q-1-2",
      head: "Firma adı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?"
    }, {
      id: "q-1-3",
      head: "Çalışan sayısı güncel mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "2",
    head: "T\xFCzel ki\u015Fili\u011Fe ait faaliyet konusuna uygun Ticaret Sicil Gazetesinin asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi, ger\xE7ek ki\u015Fiye ait sicil belgesinin asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi ve T.C. kimlik numaras\u0131 beyan\u0131 sunuldu mu? (Y\xF6netmelik Md -11 1 (b) )",
    items: [{
      id: "q-2-1",
      head: "Ek 2"
    }, {
      id: "q-2-2",
      head: "Firma Kuruluşunu içeren nüsha mevcut mu?"
    }, {
      id: "q-2-3",
      head: "Adres bilgisi mevcut durumla uyumlu mu?"
    }, {
      id: "q-2-4",
      head: "Firma hissedarları ile ilgili bilgiyi içeren nüsha mevcut mu?"
    }, {
      id: "q-2-5",
      head: "Firma hissedarları ile ilgili bilgiyi içeren Hazirun Cetveli eklenmiş mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "3",
    head: "Sicil tasdiknamesinin asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi ve yetki belgesi sunuldu mu? (Y\xF6netmelik Md -11 1 (c) )",
    items: [{
      id: "q-3-1",
      head: "Ek 3"
    }, {
      id: "q-3-2",
      head: "Ticaret Unvanı ve adresi Ticaret Sicil Gazetesi ile uyumlu mu?"
    }, {
      id: "q-3-3",
      head: "Faaliyet Alanı fiili durumla uyumlu mu?"
    }, {
      id: "q-3-4",
      head: "İmza sirküleri ve gerekli ise Vekaletname sunulmuş mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "4",
    head: "Ta\u015F\u0131nmaz\u0131n tapu, kira s\xF6zle\u015Fmesi, kullanma izni veya irtifak hakk\u0131 gibi m\xFClkiyet veya \xF6n izin s\xF6zle\u015Fmesi, irtifak hakk\u0131 tesis edilmesine ili\u015Fkin resmi senet ve kullanma izni s\xF6zle\u015Fmesi belgelerinin asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi sunuldu mu? Md.11.\xE7",
    items: [{
      id: "q-4-1",
      head: "Ek 4"
    }, {
      id: "q-4-2",
      head: "Ön İzinine konu yüzölçüm:-"
    }, {
      id: "q-4-3",
      head: "Kullanma iznine konu yüzölçüm:   m2"
    }, {
      id: "q-4-4",
      head: "İrtifak Hakkı ve Tapu:"
    }, {
      id: "q-4-5",
      head: "Tapu/Kira Sözleşmesi:"
    }, {
      id: "q-4-6",
      head: "Sunulan dokümanlara konu taşınmaz yüz ölçümü ile fiilen kullanılan tüm taşınmaz alanları örtüşüyor mu? "
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "5",
    head: "Tesis alan\u0131na ait onayl\u0131 imar plan\u0131 paftas\u0131. (Y\xF6netmelik Md -11 1 (\u0131) )",
    items: [{
      id: "q-5-1",
      head: "Ek 5"
    }, {
      id: "q-5-2",
      head: "İlgili paftalar ölçekli taratılarak sunulmuş mu?"
    }, {
      id: "q-5-3",
      head: "Fiilien kullanılan taşınmazların vasfı faaliyet ile uyumlu mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "6",
    head: "\u0130\u015Fyeri a\xE7ma ve \xE7al\u0131\u015Fma ruhsat\u0131n\u0131n asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi mevcut mu? (Y\xF6netmelik Md -11 1 (f) ) - K\u0131smi \u0130\u015Fletme \u0130zni i\xE7in aranmaz.",
    items: [{
      id: "q-6-1",
      head: "Ek 6"
    }, {
      id: "q-6-2",
      head: "İşyeri Ünvanı, Faaliyet Konusu ve Sınıfı fiili durumla uyumlu mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "7",
    head: "Ta\u015F\u0131nmaz\u0131n tapu, kira s\xF6zle\u015Fmesi, kullanma izni veya irtifak hakk\u0131 gibi m\xFClkiyet veya \xF6n izin s\xF6zle\u015Fmesi, irtifak hakk\u0131 tesis edilmesine ili\u015Fkin resmi senet ve kullanma izni s\xF6zle\u015Fmesi belgelerinin asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi sunuldu mu? Md.11.\xE7",
    items: [{
      id: "q-7-1",
      head: "Ek 7 (EK 7 tablosu sunulmuş mu?)"
    }, {
      id: "q-7-2",
      head: "12/10/2004 tarihinden önce yapılan binaları gösterir ilgili Belediyesinden alınmış yazı sunulmuş mu?"
    }, {
      id: "q-7-3",
      head: "Yapı kullanma izni belgelerinde yer alan taban alanı bilgileri ile tesis alanı organizasyonu ve yerleşim planındakiler uyumlu mu?"
    }, {
      id: "q-7-4",
      head: "Yapı kayıt belgesi ve belgeye başvuru aşamasında ilgili sisteme yüklenen yapı fotoğrafı sunulmuş mu? Belge ve fotoğraf ile fiili durum uyumlu mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "8",
    head: "Onayl\u0131 tesis organizasyonu ve yerle\u015Fim plan\u0131 mevcut mu?",
    items: [{
      id: "q-8-1",
      head: "Ek 8 (Onaylı planın ölçekli taratılmış kopyası sunulmuş mu?)"
    }, {
      id: "q-8-2",
      head: "Onaylı tesis organizasyonu ve yerleşim planı ile tesisin fiili durumu uyumlu mu?"
    }, {
      id: "q-8-3",
      head: "Onaylanmak üzere sunulmuş taslak Plan mevcut mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "9",
    head: "Dolgu ve k\u0131y\u0131 yap\u0131lar\u0131n\u0131n, uygulama projelerine uygun olarak tamamland\u0131\u011F\u0131na dair Altyap\u0131 Yat\u0131r\u0131mlar\u0131 Genel M\xFCd\xFCrl\xFC\u011F\xFCn\xFCn yaz\u0131s\u0131 mevcut mu? (Y\xF6netmelik Md -11 1 (e) ) - K\u0131smi \u0130\u015Fletme \u0130zni i\xE7in aranmaz.",
    items: [{
      id: "q-9-1",
      head: "Ek 9 "
    }, {
      id: "q-9-2",
      head: "Dolgu alanlarının değerlendirildiği onaylı Proje/Uygunluk yazısı mevcut mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "10",
    head: "Kapasite raporu mevcut mu? (Y\xF6netmelik Md -11 1 (\u011F) )",
    items: [{
      id: "q-10-1",
      head: "Ek 10"
    }, {
      id: "q-10-2",
      head: "Belge geçerlilik tarihi denetim tarihinden sonra mı?"
    }, {
      id: "q-10-3",
      head: "Firma unvanı ve adres bilgisi Ticaret Sicil Gazetesi ile uyumlu mu?"
    }, {
      id: "q-10-4",
      head: "Faaliyet alanı bilgisi fiili durumla uyumlu mu?"
    }, {
      id: "q-10-5",
      head: "Arazi (m2), iskele, kızak, vinç, mühendis sayısı (dönemsel değişkenlik gösterebileceği dikkate alınır) fiili durumla uyumlu mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "11",
    head: "\u0130lgili kurumundan al\u0131nm\u0131\u015F tesisin yang\u0131nla m\xFCcadelede yeterli oldu\u011Funa dair belge mevcut mu? (Y\xF6netmelik Md -11 1 (g) )",
    items: [{
      id: "q-11-1",
      head: "Ek 11"
    }, {
      id: "q-11-2",
      head: "Doküman içeriğinde işlenmiş bilgiler ile fiili durum uyumlu mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "12",
    head: "Tesisler i\xE7in TS EN ISO 9001 Kalite Y\xF6netim Sistemi Belgesi, TS EN ISO 14001 \xC7evre Y\xF6netim Sistemi Belgesi ve OHSAS 18001 \u0130\u015F Sa\u011Fl\u0131\u011F\u0131 ve G\xFCvenli\u011Fi Y\xF6netim Sistemi Belgesinin asl\u0131 veya idarece onayl\u0131 \xF6rne\u011Fi mevcut mu? (Y\xF6netmelik Md -11 1 (h) ) - K\u0131smi \u0130\u015Fletme \u0130zni i\xE7in aranmaz.",
    items: [{
      id: "q-12-1",
      head: "Ek 12"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "13",
    head: "\u0130n\u015Fa, tadilat ve bak\u0131m-onar\u0131m i\xE7in tesiste yeterli donan\u0131m bulunup bulunmad\u0131\u011F\u0131 (Y\xF6netmelik Md 12 (1)",
    items: [{
      id: "q-13-1",
      head: "Ek 13"
    }, {
      id: "q-13-2",
      head: "İş akış şemasıyla uyumlu yapı/donatı ile techizat mevcut mu?"
    }, {
      id: "q-13-3",
      head: "Tesisin mevcut durumu ve işleyiş ile uyumlu organizasyon ve iş akış şeması mevcut mu?"
    }, {
      id: "q-13-5",
      head: "Tesis organizasyonunda modern üretim ve yönetim meotdları dikkate alınmış mı?"
    }, {
      id: "q-13-6",
      head: "Kapalı mahallerde havalandırma yeterli mi?"
    }, {
      id: "q-13-7",
      head: "Tesisin genelinde aydınlatma yeterli mi?"
    }, {
      id: "q-13-8",
      head: "İlgili şemalar (Organizasyon ve İş Akışı vb.) ile firma yetkilisinin üretim ve sahaların kullanımına yönelik izahlarının uyumlu olduğu gözlendi mi?"
    }, {
      id: "q-13-9",
      head: "İlgili şemaların fiili durumla uyumlu olduğu gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "14",
    head: "Tersanelerde en az iki gemi m\xFChendisi olmak kayd\u0131yla daimi ve alty\xFCklenici olarak t\xFCm \xE7al\u0131\u015Fanlar\u0131n %2\u2019si m\xFChendis, bunun da yar\u0131s\u0131 gemi m\xFChendisi mi? \r\nTekne imal yeri ve imalat yapan \xE7ekek yerlerinde en az bir gemi m\xFChendisi daimi olarak bulundurulmakta m\u0131 veya bir tescilli serbest gemi m\xFChendisli\u011Fi b\xFCrosu ile anla\u015Fma \r\nyap\u0131ld\u0131\u011F\u0131na dair s\xF6zle\u015Fme mevcut mu? (Y\xF6netmelik Md 17 (7) a) b)",
    items: [{
      id: "q-14-1",
      head: "Ek 14"
    }, {
      id: "q-14-2",
      head: "Oda sicil no bilgisi alındı mı? Koşullar sağlanıyor mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "15",
    head: "\xC7evresel Etki De\u011Ferlendirmesi olumlu karar\u0131/ gerekli de\u011Fildir belgesi sunuldu mu? \xC7evre izniyle de\u011Fi\u015Fecek",
    items: [{
      id: "q-15-1",
      head: "Ek 15 (Karar yazısı, Çevre Lisansı ve Çevre İzni Belgelerinin nüshaları)"
    },,]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "16",
    head: "Yang\u0131n tahliye projesi ve ilgili planlar mevcut mu?",
    items: [{
      id: "q-16-1",
      head: "Ek 16"
    }, {
      id: "q-16-2",
      head: "Yüzer havuz ve sosyal tesisler ile yönetim binalarını kapsayan Plan mevcut mu?       "
    }, {
      id: "q-16-3",
      head: "Sahada/çalışma alanlarında uygun yerlerde plan mevcut mu?"
    }, {
      id: "q-16-4",
      head: "Acil durumlarda çalışanların tahliyesi için kullanılacak yollar belirlenmiş mi?"
    }, {
      id: "q-16-5",
      head: "Uygulama gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "17",
    head: "Sabit ve seyyar yang\u0131nla m\xFCcadale/s\xF6nd\xFCrme tesisat ve cihazlar\u0131 kullan\u0131ma haz\u0131r m\u0131?",
    items: [{
      id: "q-17-1",
      head: "Ek 17"
    }, {
      id: "q-17-2",
      head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?"
    }, {
      id: "q-17-3",
      head: "Uygulama gözlendi mi? (Yedek pompa ve gerekli ise pompanın yedek güç beslemesinin kullanıma hazır olduğunun gözlenmesinde fayda var.)"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "18",
    head: "Tesiste yer alan b\xF6l\xFCmler ve yap\u0131lar i\u015Faret levhalar\u0131 ile markalanm\u0131\u015F m\u0131?",
    items: [{
      id: "q-18-1",
      head: "Ek 18 (Genel izlenim verebilecek fotoğraflar)"
    }, {
      id: "q-18-2",
      head: "Uygulama gözlendi mi / Yapı ve alanlar maksadına uygun kullanılıyor mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "19",
    head: "Tesis i\xE7i yollar belirlenmi\u015F ve ara\xE7/\xE7al\u0131\u015Fan kullan\u0131m\u0131 i\xE7in a\xE7\u0131k durumda m\u0131?",
    items: [{
      id: "q-19-1",
      head: "Ek 19"
    }, {
      id: "q-19-2",
      head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?"
    }, {
      id: "q-19-3",
      head: "Uygulama gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "20",
    head: "\u0130dari ve sosyal tesisler, dinlenme yeri, yemekhane, lavabo ve tuvaletler mevcut mu?",
    items: [{
      id: "q-20-1",
      head: "Ek 20"
    }, {
      id: "q-20-2",
      head: "Çalışan sayısı ile uyumlu tesis/alan belirlenmiş ve düzenlenmiş mi?"
    }, {
      id: "q-20-3",
      head: "İlgili alanların genel hijyen, düzen ve olanakları yeterli mi? (Soyunma odası imkanları (temiz gündelik kıyafet ve iş kıyafeti için ayrı dolaplar, yeter sayıda duş/tuvalet, çamaşır yıkama imkanı vb.)"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "21",
    head: "\u0130\xE7me suyu imkan\u0131 mevcut mu?",
    items: [{
      id: "q-21-1",
      head: "Ek 21"
    }, {
      id: "q-21-2",
      head: "Çalışan sayısı ile uyumlu tesis/alan belirlenmiş ve düzenlenmiş mi?"
    }, {
      id: "q-21-3",
      head: "İlgili alanların genel hijyen, düzen ve olanakları yeterli mi? (Soyunma odası imkanları (temiz gündelik kıyafet ve iş kıyafeti için ayrı dolaplar, yeter sayıda duş/tuvalet, çamaşır yıkama imkanı vb.)"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "22",
    head: "\xC7al\u0131\u015Fanlar\u0131n ve ara\xE7lar\u0131n giri\u015F-\xE7\u0131k\u0131\u015F yapt\u0131\u011F\u0131 alanlar, g\xFCvenli\u011Fi sa\u011Flay\u0131c\u0131 ve kay\u0131tlar\u0131n tutulabilece\u011Fi \u015Fekilde d\xFCzenlenmi\u015F durumda m\u0131?",
    items: [{
      id: "q-22-1",
      head: "Ek 22"
    }, {
      id: "q-22-2",
      head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek formlar sunulmuş mu?"
    }, {
      id: "q-22-3",
      head: "Ziyaretçiler için prosedürler geliştirilmiş mi? (Tesis/Acil durum bilgilendirme, KKD temini vb.)"
    }, {
      id: "q-22-4",
      head: "Uygulama gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "23",
    head: "Revir/ilk yard\u0131m \xFCniteleri ve te\xE7hizatlar\u0131 mevcut mu?",
    items: [{
      id: "q-23-1",
      head: "Ek 23 "
    }, {
      id: "q-23-2",
      head: "Belirlenmiş alanların genel hijyen, düzen ve olanakları yeterli mi?"
    }, {
      id: "q-23-3",
      head: "Bulundurulması öngörülmüş tıbbi malzeme belirlenmiş ve kontrolü ile ilgili prosedür geliştirilmiş mi? Prosedürün uygulandığı gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "24",
    head: "\u0130\u015Fyeri sa\u011Fl\u0131k ve g\xFCvenlik birimi (\u0130SGB)/ Ortak sa\u011Fl\u0131k ve g\xFCvenlik birimi (OSGB) ile gerekli s\xF6zle\u015Fmeler yap\u0131lm\u0131\u015F m\u0131?",
    items: [{
      id: "q-24-1",
      head: "Ek 24 (KATİB sistemi çıktıları)"
    }, {
      id: "q-24-2",
      head: "Tesis/Firma bilgileri Ticaret Sicil Gazetesi ile uyumlu mu?"
    }, {
      id: "q-24-3",
      head: "İlgili belgelerde faaliyet konusu ve tehlike sınıfı fiili durumla uyumlu mu?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "25",
    head: "Her t\xFCrl\xFC sabit ve hareketli kald\u0131rma vin\xE7lerini kullanan operat\xF6rler ile \xE7al\u0131\u015Ft\u0131r\u0131lan di\u011Fer operat\xF6r ve kalifiye elemanlar sertifikal\u0131 m\u0131? (Y\xF6netmelik Md 17 (7) a)",
    items: [{
      id: "q-25-1",
      head: "Ek 25 (Mevcut ise çalışanların öğrenim durumu/Mesleki Yeterlilik Belgesi/Sertifikalarını gösterir doküman. Personel listesi) "
    }, {
      id: "q-25-2",
      head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Örnek sertifikalar sunulmuş mu?"
    }, {
      id: "q-25-3",
      head: "Uygulama gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "26",
    head: "T\xDCRKAK A tipi muayene kurulu\u015Fu olarak yetki alan kurulu\u015Flara ta\u015F\u0131nabilir veya ta\u015F\u0131namaz bas\u0131n\xE7l\u0131 ekipmanlar\u0131n, boru hatlar\u0131n\u0131n kontrolleri yapt\u0131r\u0131lm\u0131\u015F m\u0131?",
    items: [{
      id: "q-8-1",
      head: "Ek 26 "
    }, {
      id: "q-8-2",
      head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?"
    }, {
      id: "q-8-3",
      head: "Muayene raporları sunuldu mu?"
    }, {
      id: "q-8-4",
      head: "Uygulama gözlendi mi?"
    }]
  }), /*#__PURE__*/React.createElement(QuestionBody, {
    id: "27",
    head: "T\xDCRKAK A tipi muayene kurulu\u015Fu olarak yetki alan kurulu\u015Flara \u0131rgat, kald\u0131rma ve iletme makinalar\u0131n\u0131n kontrolleri yapt\u0131r\u0131lm\u0131\u015F m\u0131?",
    items: [{
      id: "q-8-1",
      head: "Ek 27"
    }, {
      id: "q-8-2",
      head: "Yönetim sisteminde ilgili prosedürler geliştirilmiş mi? Envanter takibi yapılabiliyor mu? Örnek formlar sunulmuş mu?"
    }, {
      id: "q-8-3",
      head: "Muayene raporları sunuldu mu?"
    }, {
      id: "q-8-4",
      head: "Uygulama gözlendi mi?"
    }]
  })), /*#__PURE__*/React.createElement("table", {
    className: "full-width"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    className: "discussion-row"
  }, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "vertical-text"
  }, "Di\u011Fer Hususlar")), /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, "*Tersane, Tekne \u0130mal ve \xC7ekek Yeri Y\xF6netmeli\u011Fi'nin 19'uncu maddesinin 6'\u0131nc\u0131 f\u0131kras\u0131 / 12'nci maddenin 1'inci f\u0131kras\u0131 kapsam\u0131nda")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, "A\xE7\u0131klama k\u0131s\u0131mlar\u0131nda kullan\u0131lan \"Ek sunulmad\u0131\" ifadesi ilgili dok\xFCman\u0131n Komisyon taraf\u0131ndan talep edildi\u011Fi ancak tesis yetkilisince temin edilmedi\u011Fi; \"Ek konmad\u0131/konulmad\u0131\" ifadesi ise Komisyonun herhangi bir dok\xFCman\u0131n ek olarak kullan\u0131lmas\u0131na gerek duymad\u0131\u011F\u0131 anlam\u0131na gelir. ")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, "Denetim, bu dok\xFCmanda yer alan tarihte mesai saatleri i\xE7erisinde tesiste yap\u0131lan genel g\xF6zlemler, rastgele \xF6rnekleme ile edinilen bilgiler ve firma yetkilisince yap\u0131lan beyanlar do\u011Frultusunda haz\u0131rlanm\u0131\u015Ft\u0131r.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, "\u0130\u015F bu rapor tesis incelemesi esnas\u0131nda taraf\u0131m\u0131zca imza alt\u0131na al\u0131nm\u0131\u015Ft\u0131r.")))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("td", null, "Ad\u0131 Soyad\u0131"), /*#__PURE__*/React.createElement("td", null, "G\xF6revlendirildi\u011Fi Birim / Unvan / \u0130mza")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\xDCye"), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\xDCye"), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\xDCye"), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)))));
}