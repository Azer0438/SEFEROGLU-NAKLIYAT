
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    id: 1,
    slug: 'kayseri-ev-tasima-rehberi',
    title: 'Kayseri’de Ev Taşıma Rehberi: Adım Adım Stressiz Taşınma Listesi',
    category: 'Rehber',
    image: 'https://r.resimlink.com/1GzC3wSYAoK.png',
    date: '21 Ocak 2026',
    author: 'Seferoğlu Nakliyat',
    content: [
      "Yeni bir eve taşınmak heyecan verici olsa da, taşınma süreci çoğu zaman stresli ve karmaşık görünebilir. Özellikle Kayseri gibi büyük ve hareketli bir şehirde, trafiği, bina kat yükseklikleri ve abonelik işlemleri derken işler içinden çıkılmaz bir hal alabilir. Ancak endişelenmeyin! Seferoğlu Evden Eve Nakliyat olarak, yılların verdiği tecrübeyle taşınma sürecinizi kolaylaştıracak kapsamlı bir rehber hazırladık.",
      "1. Hazırlıklara Erken Başlayın (4 Hafta Önce): Son dakikaya kalan taşınmalar her zaman kriz yaratır. Yeni evinize götürmek istemediğiniz eşyaları ayırın, satın veya bağışlayın. Unutmayın, daha az eşya, daha uygun nakliye fiyatı demektir.",
      "2. Profesyonel Nakliyat Firması Seçimi (3 Hafta Önce): Kayseri evden eve nakliyat firmaları arasında seçim yaparken sadece fiyata değil, firmanın kurumsallığına bakın. Eşyalarınızın güvence altında olduğundan emin olmak için sigortalı taşımacılık yapan ve sözleşmeli çalışan Seferoğlu Nakliyat gibi firmaları tercih edin.",
      "3. Asansörlü Taşımacılık Şart mı? Özellikle Talas, Belsin gibi yüksek katlı yapılaşmanın olduğu bölgelerde eşyaların zarar görmemesi için asansörlü taşıma şarttır. Bina merdivenlerini kullanmak hem eşyaya zarar verir hem de süreci uzatır.",
      "4. Abonelik İşlemleri (1 Hafta Önce): Taşındığınız gün karanlıkta kalmamak için Kayserigaz ve KCETAŞ aboneliklerinizi erkenden yeni adresinize taşıyın. Planlı hareket ettiğinizde taşınmak kâbus değil, yeni bir başlangıcın keyifli ilk adımıdır."
    ]
  },
  {
    id: 2,
    slug: '2026-kayseri-nakliyat-fiyatlari',
    title: '2026 Kayseri Evden Eve Nakliyat Fiyatları Neye Göre Belirlenir?',
    category: 'Fiyatlandırma',
    image: 'https://r.resimlink.com/dkXqCVv2jP4m.png',
    date: '20 Ocak 2026',
    author: 'Seferoğlu Nakliyat',
    content: [
      "Kayseri'de evini taşıtmak isteyenlerin aklındaki ilk soru genellikle 'Nakliye fiyatı ne kadar?' oluyor. Ancak nakliyat sektöründe sabit bir fiyat vermek, hizmet kalitesini düşürebilir. 2026 yılı itibarıyla Kayseri evden eve nakliyat fiyatlarını belirleyen temel faktörleri şeffaflıkla açıklıyoruz.",
      "Birinci ve en önemli etken eşya yoğunluğudur. 1+1 daire ile 4+1 dairenin taşınma maliyeti, kullanılacak personel sayısı ve araç yakıtı nedeniyle farklılık gösterir. Seferoğlu Nakliyat olarak biz, ekspertiz hizmetimizle eşyanızı görüp net fiyat veriyoruz.",
      "İkinci faktör kat durumudur. Özellikle asansör kurulumunun gerekip gerekmediği fiyatı etkiler. Talas gibi yüksek katlı ilçelerde mobil asansör kullanımı, işçilik maliyetini düşürürken güvenliği artırır. Ayrıca taşınacak iki ev arasındaki mesafe (örneğin İldem'den Erkilet'e) yakıt maliyetlerini belirler.",
      "Ucuz nakliye ararken eşyalarınızdan olmayın. Piyasa ortalamasının çok altında fiyat veren firmalar genellikle sigortasız, ambalajsız ve tecrübesiz elemanlarla çalışır. Seferoğlu kalitesiyle, bütçenize uygun ama güvenli çözümler için hemen fiyat teklifi alın."
    ]
  },
  {
    id: 3,
    slug: 'talas-asansorlu-ev-tasima',
    title: 'Talas\'ta Ev Taşımanın Püf Noktaları: Yüksek Katlara Asansörlü Çözüm',
    category: 'Bölgesel',
    image: 'https://r.resimlink.com/D3BUF59.png',
    date: '18 Ocak 2026',
    author: 'İbrahim Taşdemir',
    content: [
      "Kayseri'nin en yoğun nüfuslu ve yüksek katlı yapılaşmaya sahip ilçesi Talas'ta taşınmak, profesyonel ekipman gerektirir. Dar sokaklar ve 15 kata varan binalar, geleneksel insan gücüyle taşınmayı neredeyse imkansız ve riskli hale getirir.",
      "Seferoğlu Evden Eve Nakliyat olarak Talas, Bahçelievler ve Mevlana mahallesi sakinleri için özel modüler asansör sistemleri kullanıyoruz. Bu sistem sayesinde eşyalarınız bina merdivenlerine değmeden, doğrudan balkonunuzdan aracımıza yüklenir. Bu yöntem mobilyalarınızın çizilmesini %100'e yakın engeller.",
      "Talas bölgesinde taşınırken dikkat etmeniz gereken bir diğer husus ise site yönetimi izinleridir. Taşınma gününden önce site yönetimini bilgilendirip asansör aracımızın yanaşacağı alanı ayırmanız, süreci hızlandıracaktır. Talas'ın uzman nakliyecisi olarak tüm süreci sizin adınıza yönetiyoruz."
    ]
  },
  {
    id: 4,
    slug: 'neden-asansorlu-nakliyat',
    title: 'Neden Asansörlü Nakliyat Tercih Etmelisiniz? (Eşyalarınız Çizilmesin!)',
    category: 'Hizmetler',
    image: 'https://r.resimlink.com/RIWF8jDoZP.png',
    date: '15 Ocak 2026',
    author: 'Emrah Taşdemir',
    content: [
      "Teknolojinin gelişmesiyle birlikte nakliye sektöründe devrim yaratan asansörlü taşımacılık, artık bir lüks değil ihtiyaçtır. Peki, neden Seferoğlu Nakliyat'ın asansörlü hizmetini tercih etmelisiniz?",
      "Hız ve Zaman Tasarrufu: Geleneksel yöntemlerle tüm gün süren taşınma işlemi, asansörlü sistemle yarı yarıya kısalır. Yeni evinize aynı gün içinde yerleşip çayınızı yudumlayabilirsiniz.",
      "Eşya Güvenliği: Merdiven boşluklarında dönmeyen koltuklar, çizilen buzdolapları tarih oldu. Eşyalarınız sarsılmadan, çarpmadan kayarak araca iner. Özellikle beyaz eşya ve mobilyaların ömrünü uzatmak için asansörlü taşıma en güvenli yöntemdir.",
      "Komşulara Rahatsızlık Vermemek: Bina asansörünü meşgul etmeden, merdivenlerde gürültü yapmadan sessizce taşınırsınız. Kayseri'de modern ve kurumsal taşımacılığın adresi Seferoğlu ile eşyalarınız emin ellerde."
    ]
  },
  {
    id: 5,
    slug: 'kayseri-kisinda-ev-tasima',
    title: 'Kayseri\'nin Kışında Ev Taşınır mı? Karlı Havada Nakliye İpuçları',
    category: 'Mevsimsel',
    image: 'https://r.resimlink.com/P04NyHXsCl.png',
    date: '10 Ocak 2026',
    author: 'Seferoğlu Nakliyat',
    content: [
      "Kayseri'nin çetin kış şartlarında taşınmak gözünüzü korkutmasın. Doğru ekipman ve profesyonel bir firmayla kar, yağmur veya soğuk taşınmanıza engel değildir. Seferoğlu Nakliyat olarak kış şartlarına özel önlemler alıyoruz.",
      "Kapalı Kasa Araçlar: Araçlarımızın tamamı çelik kasa ve su geçirmez yapıdadır. Eşyalarınız yolda kar veya yağmur suyuna maruz kalmaz. Ayrıca araçlarımızda kış lastiği ve zincir gibi tüm donanımlar eksiksizdir.",
      "Ekstra Ambalajlama: Kış taşımalarında mobilya ve elektronik eşyaları standart paketlemenin ötesinde, streç film ile ekstra sararak neme karşı tam koruma sağlıyoruz. Zeminlerin kirlenmemesi için galoş kullanımı ve zemin koruyucu kartonlar seriyoruz.",
      "Kışın taşınmanın avantajı ise daha uygun fiyatlardır. Yaz yoğunluğu olmadığı için daha esnek tarihler ve ekonomik fiyatlarla Kayseri'de kışın güvenle taşınabilirsiniz."
    ]
  },
  {
    id: 6,
    slug: 'esya-depolama-cozumleri',
    title: 'Eşyalarınız İçin Güvenli Depolama Çözümleri',
    category: 'Depolama',
    image: 'https://r.resimlink.com/ByfbiVa.png',
    date: '05 Ocak 2026',
    author: 'İbrahim Taşdemir',
    content: [
      "Ev tadilatı, yurt dışı görevi veya yeni evin hazır olmaması gibi durumlarda eşyalarınızın güvenli bir yerde saklanması gerekebilir. Depolama hizmetimiz, eşyalarınızın nem, rutubet ve haşerelere karşı korunaklı, 7/24 güvenlik kameralarıyla izlenen modern tesislerde muhafaza edilmesini sağlar.",
      "Depolama öncesinde tüm eşyalarınızın listesi çıkarılır ve özel ambalaj malzemeleriyle paketlenir. Bu sayede depolama süresi ne kadar uzun olursa olsun, eşyalarınız dış etkenlerden korunur. Tesislerimiz düzenli olarak dezenfekte edilmekte ve havalandırılmaktadır.",
      "İhtiyaç duyduğunuz anda eşyalarınızı depomuzdan alıp yeni adresinize teslim ediyoruz. Esnek kiralama seçeneklerimizle Kayseri'de en iyi depolama hizmetini sunuyoruz."
    ]
  }
];

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const activePost = slug
    ? blogPosts.find(post => post.slug === slug)
    : blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!activePost) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-950 text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">İçerik Bulunamadı</h2>
        <p className="text-gray-400 mb-8">Aradığınız blog yazısına ulaşılamadı.</p>
        <button
          onClick={() => navigate('/blog')}
          className="bg-[#FF6B35] px-6 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors min-h-[44px]"
        >
          Blog Ana Sayfasına Dön
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20 pb-12 md:pt-24 md:pb-20">
      <Helmet>
        <title>{activePost.title} - Seferoğlu Nakliyat</title>
        <meta name="description" content={activePost.content[0].substring(0, 160)} />
        <meta name="keywords" content="kayseri nakliyat, evden eve, asansörlü taşıma" />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 md:mb-8 flex items-center gap-2 text-xs md:text-sm text-gray-400 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
          <Link to="/" className="hover:text-[#FF6B35] transition-colors">Anasayfa</Link>
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <Link to="/blog" className="hover:text-[#FF6B35] transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="text-white truncate">{activePost.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              key={activePost.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 md:mb-8 aspect-video">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                  <span className="bg-[#FF6B35] text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full uppercase tracking-wider mb-2 md:mb-4 inline-block">
                    {activePost.category}
                  </span>
                  <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
                    {activePost.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-300">
                    <div className="flex items-center gap-1 md:gap-2">
                      <User className="w-3 h-3 md:w-4 md:h-4 text-[#FF6B35]" />
                      <span>{activePost.author}</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#FF6B35]" />
                      <span>{activePost.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="bg-gray-900 rounded-2xl p-5 md:p-10 shadow-xl border border-gray-800">
                <article className="prose prose-lg prose-invert max-w-none">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </article>

                {/* Tags Section */}
                <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-sm md:text-base">
                  <div className="flex gap-2 flex-wrap items-center">
                    <Tag className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B35]" />
                    <span className="text-gray-400">Etiketler:</span>
                    <span className="text-gray-300 hover:text-[#FF6B35] cursor-pointer transition-colors bg-gray-800 px-2 py-1 rounded">Kayseri Nakliyat</span>
                    <span className="text-gray-300 hover:text-[#FF6B35] cursor-pointer transition-colors bg-gray-800 px-2 py-1 rounded">Evden Eve</span>
                    <span className="text-gray-300 hover:text-[#FF6B35] cursor-pointer transition-colors bg-gray-800 px-2 py-1 rounded">Asansörlü</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            {/* Sticky Wrapper */}
            <div className="space-y-6 lg:sticky lg:top-24">
              
              {/* Popüler Yazılar Section */}
              <div className="bg-gray-900 rounded-2xl p-5 md:p-6 shadow-xl border border-gray-800">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 border-b border-gray-800 pb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B35]" />
                  Popüler Yazılar
                </h3>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className={`group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 min-h-[80px] ${activePost.id === post.id
                          ? 'bg-gray-800 border-l-4 border-[#FF6B35]'
                          : 'hover:bg-gray-800 border-l-4 border-transparent'
                        }`}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold line-clamp-2 mb-2 transition-colors ${activePost.id === post.id ? 'text-[#FF6B35]' : 'text-gray-300 group-hover:text-white'
                          }`}>
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Widget Section */}
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#EF4444] rounded-2xl p-6 md:p-8 text-center shadow-xl flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Kayseri'de Hemen Taşının!</h3>
                <p className="text-white/90 mb-5 md:mb-6 text-sm md:text-base">Seferoğlu güvencesiyle stressiz taşınmak için hemen arayın.</p>
                <a
                  href="tel:05528819812"
                  className="inline-block w-full bg-white text-[#EF4444] font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[44px] flex items-center justify-center text-sm md:text-base"
                >
                  (0552) 881 98 12
                </a>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
