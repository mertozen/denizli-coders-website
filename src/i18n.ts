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
            }


        },
    }
})

export default i18n;