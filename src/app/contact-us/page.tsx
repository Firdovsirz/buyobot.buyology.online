import Map from '@/components/map/Map';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ContactUs from '@/components/contactUs/ContactUs';

export default function page() {
    return (
        <>
            <Header />
            <main>
                <ContactUs />
                <Map />
            </main>
            <Footer />
        </>
    )
}
