import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'tr',

    resources:{
        en:{
            translation: {
                "Hakkımızda": "About",
                "Etkinlikler": "Events",
                "Ekibimiz": "Our Team",
                "Bize Katıl!": "Join Us!",
                "Denizli'nin kod tutkunları burada buluşuyor!": "Denizli's code enthusiasts gather here!",
                "Kodla, geliş, fark yarat!": "Code, improve, make a difference!",
                "Daha Fazla Öğren!": "Learn More!",
                "Şimdi Katıl!": "Join Now",
                "Kabul Et": "Accept",
                "Reddet": "Reject",
                "İçeriği kişiselleştirmek, reklamları daha uygun hale getirmek ve etkileşimi ölçmek amacıyla çerezler ve benzeri teknolojiler kullanıyoruz. 'Kabul Et' butonuna tıklayarak, Çerez Politikamızda belirtilen şartları kabul etmiş olursunuz. Daha iyi bir deneyim için bize katılın!":"We use cookies and similar technologies to personalize content, make ads more relevant, and measure engagement. By clicking the 'Accept' button, you agree to the terms outlined in our Cookie Policy. Join us for a better experience!",
                "Etkinliklerimiz": "Our Events",
                "Vizyon ve Misyonumuz": "Our Vision and Mission" ,
                "Vizyonumuz":"Our Vision",
                "Misyonumuz":"Our Mission",
                "Denizli’yi yazılım ve teknoloji alanında öncü bir merkeze dönüştürmek.":"To transform Denizli into a leading center in the field of software and technology.",
                "Yazılım tutkunlarını bir araya getirerek bilgi paylaşımını artırmak, etkinlikler ve eğitimlerle yerel yetenekleri geliştirmek.":"To increase knowledge sharing by bringing software enthusiasts together and to develop local talents through events and training.",
                "Eğitimler":"Trainings",
                "Alanında uzman eğitmenler ve konuklarla, yazılım dünyasında öne çıkan mimari ve teknolojileri öğrenin! Teorik bilgiyi pratik uygulamalarla birleştirerek kariyerinizi ileri taşıyın.":"Learn the architecture and technologies that stand out in the software world with expert instructors and guests! Move your career forward by combining theoretical knowledge with practical applications.",
                "Projeler":"Projects",
                "Üyelerimizi projelere dahil ederek teknik destek ve gerçek iş deneyimi sunuyoruz.":"We offer technical support and real business experience by involving our members in projects.",
                "Denizli Coders Eğitimleri":"Denizli Coders Trainings",

            
            
            }


        },
    }
})

export default i18n;