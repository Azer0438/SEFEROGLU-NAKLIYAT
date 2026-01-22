import { Truck, Box, MapPin, ShieldCheck, Clock, Award, Building2, Home } from 'lucide-react';

// Türkçe karakterleri URL uyumlu hale getiren yardımcı fonksiyon
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '-');
};

export const serviceData = [
  // ==========================================
  // 1. ÖZEL HİZMETLER (SEO ve İkna Odaklı)
  // ==========================================
  {
    id: 'asansorlu-nakliye',
    path: '/asansorlu-nakliye',
    title: 'Asansörlü Nakliye',
    category: 'service',
    description: 'Kayseri\'nin yüksek katlı yapılarında eşyalarınızı riske atmayın. 25. kata kadar ulaşan modüler asansörlerimizle çiziksiz, hızlı ve güvenli taşıma.',
    content: 'Seferoğlu Nakliyat olarak, teknolojinin getirdiği en büyük kolaylıklardan biri olan modüler asansör sistemlerini kullanıyoruz. Özellikle Kayseri\'nin yüksek katlı site yaşantısında, bina merdivenlerini ve asansörlerini meşgul etmeden taşınıyoruz. Eşyalarınızı balkon veya pencereden doğrudan aracımıza yükleyerek çarpma ve çizilme riskini sıfıra indiriyoruz. Bu sistem sayesinde taşınma süreniz %50 oranında kısalır, komşularınız rahatsız olmaz.',
    features: [
      { title: 'Hasarsız Taşıma', desc: 'Merdiven boşluklarında oluşabilecek sürtünme ve çarpmaları %100 önler.', icon: ShieldCheck },
      { title: 'Hızlı Kurulum', desc: '15 dakika içinde kurulan sistemle tüm eviniz saatler içinde araca yüklenir.', icon: Clock },
      { title: 'Yüksek Erişim', desc: '25. kata kadar (yaklaşık 70 metre) güvenli erişim imkanı.', icon: Building2 },
      { title: 'Sessiz Operasyon', desc: 'Çevreye rahatsızlık vermeyen, elektrikli ve modern ekipman.', icon: Award }
    ]
  },
  {
    id: 'parca-esya-tasima',
    path: '/parca-esya-tasima',
    title: 'Parça Eşya Taşıma',
    category: 'service',
    description: 'Az miktardaki eşyalarınız için komple araç ücreti ödemeyin. Şehir içi ve şehirler arası parça taşıma hizmetimizle bütçe dostu çözüm.',
    content: 'Tüm evi taşıtmak zorunda değilsiniz. Öğrenci eşyası, çeyiz, tek parça koltuk takımı, beyaz eşya veya ofis malzemeleri gibi az miktardaki yükleriniz için ekonomik çözümler üretiyoruz. Seferoğlu Nakliyat parça eşya taşıma hizmetiyle, aynı güzergaha giden araçlarımızda eşyalarınızı birleştiriyor, böylece nakliye maliyetinizi minimuma indiriyoruz. Eşyalarınız karışmadan, listelenerek ve etiketlenerek teslim edilir.',
    features: [
      { title: 'Ekonomik Fiyat', desc: 'Aracın tamamını değil, sadece eşyanızın kapladığı alanı ödeyin.', icon: Box },
      { title: 'Sigortalı Gönderim', desc: 'Tek bir koli bile taşısak, eşyanız Seferoğlu güvencesi altındadır.', icon: ShieldCheck },
      { title: 'Kapıdan Kapıya', desc: 'Eşyalarınız kattan alınır, yeni adreste kata teslim edilir.', icon: Home },
      { title: 'Paketleme Desteği', desc: 'İsteğe bağlı olarak mobilyalarınızın demontaj ve paketlemesini yapıyoruz.', icon: Box }
    ]
  },

  // ==========================================
  // 2. BÖLGESEL HİZMETLER (İlçe Bazlı Özgün SEO)
  // ==========================================
  
  // --- MERKEZ İLÇELER (Yüksek Kat & Site Vurgusu) ---
  {
    id: 'talas-evden-eve-nakliyat',
    path: '/talas-evden-eve-nakliyat',
    title: 'Talas Evden Eve Nakliyat',
    category: 'district',
    description: 'Talas\'ın yüksek katlı binaları ve yoğun trafiğinde uzman çözüm. Bahçelievler, Mevlana ve Anayurt bölgesinde asansörlü taşımacılık.',
    content: 'Kayseri\'nin en yoğun nüfuslu ve yüksek yapılaşmaya sahip ilçesi Talas\'ta taşınmak profesyonellik ister. Seferoğlu Nakliyat olarak, Talas\'ın dar sokaklarına ve yüksek katlı sitelerine uygun modüler asansörlerimizle hizmet veriyoruz. Site yönetimleri ile koordineli çalışarak, çevreyi rahatsız etmeden hızlı bir operasyon yürütüyoruz. Özellikle öğrenci ve memur nüfusunun yoğun olduğu bu bölgede, tayin dönemlerinde esnek randevu saatleri sunuyoruz.',
    features: [
      { title: 'Talas Uzmanı', desc: 'Bahçelievler ve Mevlana bölgesinin yapılarına hakim ekip.', icon: MapPin },
      { title: 'Yüksek Kat Çözümü', desc: '15. kat ve üzeri daireler için özel asansör kurulumu.', icon: Building2 },
      { title: 'Site İzinleri', desc: 'Site yönetim prosedürlerine uygun, profesyonel çalışma.', icon: Award },
      { title: 'Hızlı Transfer', desc: 'Talas içi taşımalarda aynı gün içerisinde yerleşme garantisi.', icon: Clock }
    ]
  },
  {
    id: 'melikgazi-evden-eve-nakliyat',
    path: '/melikgazi-evden-eve-nakliyat',
    title: 'Melikgazi Evden Eve Nakliyat',
    category: 'district',
    description: 'Melikgazi\'nin kentsel dönüşüm bölgeleri ve sitelerinde güvenli nakliyat. İldem, Belsin ve Alpaslan mahallelerinde sigortalı taşıma.',
    content: 'Kayseri\'nin kalbi Melikgazi\'de, İldem\'den Belsin\'e, Alpaslan\'dan Mimsin\'e kadar geniş bir alanda hizmet veriyoruz. Kentsel dönüşümün yoğun olduğu bölgelerde bina asansörlerinin kullanılamadığı durumlarda dış cephe asansörlerimiz devreye girer. Eşyalarınızın şehir içi trafiğinde sarsılmaması için özel süspansiyonlu araçlar kullanıyor, dar sokaklarda manevra kabiliyeti yüksek kamyonetlerimizle kapınıza kadar yanaşıyoruz.',
    features: [
      { title: 'Geniş Hizmet Ağı', desc: 'Melikgazi\'nin 58 mahallesine hakim lojistik ağ.', icon: MapPin },
      { title: 'Kentsel Dönüşüm', desc: 'Yıkım veya yeni bina taşınmalarında tecrübeli yaklaşım.', icon: Building2 },
      { title: 'Mobilya Montajı', desc: 'Büyük gardırop ve ünitelerin söküm-kurulum hizmeti.', icon: Box },
      { title: 'Sigortalı Taşıma', desc: 'Şehir içi kısa mesafede bile tam kapsamlı sigorta.', icon: ShieldCheck }
    ]
  },
  {
    id: 'kocasinan-evden-eve-nakliyat',
    path: '/kocasinan-evden-eve-nakliyat',
    title: 'Kocasinan Evden Eve Nakliyat',
    category: 'district',
    description: 'Kocasinan genelinde Erkilet, Zümrüt ve çevre semtlerde profesyonel ev taşıma. Geniş araç filomuzla her yüke uygun çözüm.',
    content: 'Sanayi bölgeleri, yeni yapılaşan Erkilet bulvarı ve köklü mahalleleriyle Kocasinan\'da her türlü taşıma ihtiyacınıza cevap veriyoruz. Erkilet bölgesindeki yüksek bloklardan, eski mahallelerdeki müstakil evlere kadar her yapı tipine uygun ekipmanımız mevcuttur. Seferoğlu Nakliyat olarak, Kocasinan\'daki geniş yolları ve trafik durumunu analiz ederek en kısa rotayı belirliyor, eşyalarınızı zamanında teslim ediyoruz.',
    features: [
      { title: 'Her Yapıya Uygun', desc: 'Hem site hem müstakil ev taşımasında uzmanlaşmış ekip.', icon: Home },
      { title: 'Erkilet Bölgesi', desc: 'Havalimanı ve Erkilet bölgesinde hızlı servis imkanı.', icon: MapPin },
      { title: 'Ofis Taşıma', desc: 'Bölgedeki iş yerleri için kurumsal ofis taşımacılığı.', icon: Building2 },
      { title: 'Ekonomik Fiyat', desc: 'Kocasinan içi taşımalarda avantajlı fiyat seçenekleri.', icon: Award }
    ]
  },

  // --- YAKIN VE ÖZEL YAPILI İLÇELER (Villa & TOKİ Vurgusu) ---
  {
    id: 'hacilar-evden-eve-nakliyat',
    path: '/hacilar-evden-eve-nakliyat',
    title: 'Hacılar Evden Eve Nakliyat',
    category: 'district',
    description: 'Hacılar ve Hisarcık bölgesindeki villa ve müstakil ev taşımacılığında uzman ekip. Dik yokuşlarda güvenli araç kullanımı.',
    content: 'Hacılar ve Hisarcık bölgesi, villa tipi yapıları ve dik yokuşlu yollarıyla bilinir. Bu bölgedeki taşınmalar standart apartman taşınmasından farklıdır. Dubleks veya tripleks evlerdeki geniş merdiven boşlukları, ağır ve büyük mobilyaların taşınması özel teknik gerektirir. Araçlarımız kış şartlarında Hacılar\'ın yokuşlarına uygun donanıma sahiptir. Villa taşımacılığında hassas paketleme ile eşyalarınızı koruyoruz.',
    features: [
      { title: 'Villa Taşımacılığı', desc: 'Dubleks ve tripleks evler için özel ekip ve ekipman.', icon: Home },
      { title: 'Kış Donanımı', desc: 'Hacılar\'ın zorlu kış şartlarına uygun kış lastikli araçlar.', icon: Truck },
      { title: 'Ağır Yük Taşıma', desc: 'Piyano, kasa gibi ağır eşyalar için özel taşıma kayışları.', icon: Box },
      { title: 'Arazi Deneyimi', desc: 'Eğimli arazide güvenli yükleme ve boşaltma.', icon: MapPin }
    ]
  },
  {
    id: 'incesu-evden-eve-nakliyat',
    path: '/incesu-evden-eve-nakliyat',
    title: 'İncesu Evden Eve Nakliyat',
    category: 'district',
    description: 'İncesu ve TOKİ konutları bölgesinde ekonomik ev taşıma. Organize Sanayi ve ilçe merkezi arası güvenli nakliye.',
    content: 'Gelişen sanayisi ve yeni TOKİ yapılaşmalarıyla İncesu\'da nakliye ihtiyacı artmaktadır. Özellikle yüksek katlı TOKİ binalarında asansör kullanımı zorunlu hale gelmiştir. Seferoğlu Nakliyat olarak, İncesu\'ya özel seferlerimizle Kayseri merkezden İncesu\'ya veya İncesu içindeki taşınmalarınızda yanınızdayız. Memur ve işçi atamalarında sıkça tercih edilen rotalarda uygun fiyat garantisi sunuyoruz.',
    features: [
      { title: 'TOKİ Nakliyat', desc: 'TOKİ binalarının mimarisine uygun asansörlü taşıma.', icon: Building2 },
      { title: 'Sanayi Bölgesi', desc: 'OSB çalışanları için planlı ve hızlı ev taşıma.', icon: Clock },
      { title: 'Uygun Bütçe', desc: 'Mesafeye göre optimize edilmiş yakıt tasarruflu fiyatlar.', icon: Award },
      { title: 'Sigortalı Hizmet', desc: 'Yol boyunca eşyalarınız tam güvence altında.', icon: ShieldCheck }
    ]
  },

  // --- UZAK İLÇELER (Mesafe & Güvenlik Vurgusu) ---
  {
    id: 'develi-evden-eve-nakliyat',
    path: '/develi-evden-eve-nakliyat',
    title: 'Develi Evden Eve Nakliyat',
    category: 'district',
    description: 'Kayseri\'nin en büyük ilçesi Develi\'ye güvenli ve sigortalı taşımacılık. Erciyes yolunda eşyalarınız sarsılmadan taşınır.',
    content: 'Develi, Kayseri merkeze olan mesafesi ve Erciyes dağı rotası nedeniyle dikkatli bir lojistik planlama gerektirir. Şehirler arası nakliyat ciddiyetiyle yaklaştığımız Develi taşımalarında, eşyalarınızın yol boyunca sarsılmaması için araç kasalarımızda özel sabitleme sistemleri kullanıyoruz. Develi içi veya Develi-Kayseri arası taşınmalarda, eşyalarınızı toz ve kire karşı çift kat ambalajla koruyoruz.',
    features: [
      { title: 'Güvenli Yolculuk', desc: 'Erciyes rotasındaki virajlara karşı kasa içi sabitleme.', icon: Truck },
      { title: 'Çelik Kasa', desc: 'Toz ve yağmur geçirmeyen kapalı kasa araçlar.', icon: ShieldCheck },
      { title: 'Zamanlama', desc: 'Belirlenen saatte Develi\'de olma garantisi.', icon: Clock },
      { title: 'Köyden Kente', desc: 'Develi köylerinden merkeze sorunsuz nakliye.', icon: MapPin }
    ]
  },
  {
    id: 'yahyali-evden-eve-nakliyat',
    path: '/yahyali-evden-eve-nakliyat',
    title: 'Yahyalı Evden Eve Nakliyat',
    category: 'district',
    description: 'Yahyalı\'nın her noktasına profesyonel nakliyat. Uzun mesafede eşyalarınız Seferoğlu kalitesiyle koruma altında.',
    content: 'Yahyalı\'dan Kayseri merkeze veya çevre illere yapacağınız taşınmalarda, yolun uzunluğu göz önüne alındığında profesyonel bir firma ile çalışmak şarttır. Seferoğlu Nakliyat, Yahyalı\'nın coğrafi koşullarını bilen şoförleriyle hizmet verir. Eşyalarınızın uzun yolda zarar görmemesi için "Balonlu Naylon" ve "Kraft Kağıt" ile ekstra paketleme uyguluyoruz. Asansörsüz binalarda bile deneyimli ekibimizle sorunsuz taşıma yapıyoruz.',
    features: [
      { title: 'Uzun Yol Deneyimi', desc: 'Yahyalı - Kayseri arası güvenli sürüş garantisi.', icon: Truck },
      { title: 'Ekstra Paketleme', desc: 'Mesafeye dayalı risklere karşı 3 katmanlı ambalaj.', icon: Box },
      { title: 'Yerel Tecrübe', desc: 'Yahyalı\'nın mahalle ve sokak yapısına hakimiyet.', icon: MapPin },
      { title: 'Sözleşmeli İş', desc: 'Yola çıkmadan önce her şey yazılı olarak garanti edilir.', icon: ShieldCheck }
    ]
  },
  {
    id: 'bunyan-evden-eve-nakliyat',
    path: '/bunyan-evden-eve-nakliyat',
    title: 'Bünyan Evden Eve Nakliyat',
    category: 'district',
    description: 'Bünyan ve çevresinde hızlı, ekonomik ev taşıma. Kayseri-Malatya yolu üzeri güvenli lojistik.',
    content: 'Bünyan ilçemizdeki taşınma ihtiyaçlarınızda, geniş araç filomuzla hizmetinizdeyiz. İster cezaevi personeli, ister yerel halk olsun, Bünyan\'a yapılan tayinlerde sıkça tercih ediliyoruz. Eşyalarınızı yüklemeden önce sigortalıyor, Bünyan\'ın kışın sert geçen hava koşullarında bile eşyalarınızı ıslanmadan, zarar görmeden yeni evinize ulaştırıyoruz.',
    features: [
      { title: 'Bünyan Servisi', desc: 'Haftanın her günü Bünyan bölgesine nakliye imkanı.', icon: Clock },
      { title: 'Kamu Personeli', desc: 'Tayin dönemlerinde memurlara özel indirimler.', icon: Award },
      { title: 'Kapalı Kasa', desc: 'Kar ve yağmura karşı tam korumalı araçlar.', icon: Truck },
      { title: 'Eksiksiz Teslimat', desc: 'Sökülen mobilyalarınız yeni evde tekrar kurulur.', icon: Home }
    ]
  },

  // --- DİĞER İLÇELER (Generic yapıyı koruyarak ama özelleştirilmiş metinle) ---
  ...['Akkışla', 'Felahiye', 'Özvatan', 'Pınarbaşı', 'Sarıoğlan', 'Sarız', 'Tomarza', 'Yeşilhisar'].map(district => ({
    id: `${createSlug(district)}-evden-eve-nakliyat`,
    path: `/${createSlug(district)}-evden-eve-nakliyat`,
    title: `${district} Evden Eve Nakliyat`,
    category: 'district',
    description: `Kayseri'nin ${district} ilçesine özel uzun yol ve köy taşımacılığı hizmeti. Çelik kasalı araçlarımızla her mevsim güvenli nakliyat.`,
    content: `Seferoğlu Nakliyat olarak, Kayseri merkeze uzaklığı ne olursa olsun ${district} ilçemize kurumsal hizmet götürüyoruz. Şehirler arası nakliyat standartlarında gerçekleştirdiğimiz bu taşımalarda, yol şartlarına dayanıklı araçlar ve deneyimli şoförler kullanıyoruz. ${district} ve köylerinden Kayseri merkeze veya tam tersi istikametteki taşınmalarınızda, eşyalarınız sigortalı ve ambalajlı olarak taşınır. Kırsal bölgelerdeki müstakil evlerin yapısal özelliklerine uygun yükleme tekniklerimizle eşyalarınız zarar görmez.`,
    features: [
      { title: `${district} Seferi`, desc: 'Uzak ilçe ve köylere kesintisiz hizmet.', icon: MapPin },
      { title: 'Yol Güvenliği', desc: 'Uzun ve zorlu yollara uygun bakımlı araç filosu.', icon: Truck },
      { title: 'Köyden Şehre', desc: 'Kırsal bölgelerden merkeze tam kapsamlı taşıma.', icon: Home },
      { title: 'Uygun Fiyat', desc: 'Mesafeye göre optimize edilmiş en iyi fiyat garantisi.', icon: Award }
    ]
  }))
];