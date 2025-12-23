import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Gallery from '@/components/gallery/Gallery';

export default function page() {
    return (
        <>
            <Header />
            <main>
                <Gallery />
            </main>
            <Footer />
        </>
    )
}
