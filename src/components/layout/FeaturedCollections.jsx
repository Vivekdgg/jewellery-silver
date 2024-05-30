import React,  { useEffect } from 'react'
import '././FeaturedCollections.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeaturedCollections = () => {

    const collections = [
        { id: 1, name: "Diamond Ring", image: "/images/bague-diamant-blanc-titane-graphite-move-titanium-pm-07164_1.jpg", price: "$120" },
        { id: 2, name: "Golden Bracelet",     image: "/images/messika-bracelet-diamant-or-blanc-so-move-xl-pave-12942.jpg"     , price: "$250" },
        { id: 3, name: "Elegant Necklace",  image: "/images/messika-collier-move-uno-gm-diamant-or-blanc-bis.jpg"            ,  price: "$180" },
        { id: 4, name: "Silver Earrings",  image: "/images/messika-cr_oles-move-uno-diamant-or-blanc.jpg"                   ,  price: "$100" },
    ];

    useEffect(() => {
        AOS.init({
          duration: 400,
          easing: 'ease',
        });
      })
      
  return (
    <section className="featured-collections">
    <div className="section-title">
    <h2 data-aos="fade-down">New Collection Products</h2>
    <p data-aos="zoom-in">Best products on sale.</p>
    </div>
    <div className="collections" data-aos="fade-right">
        {collections.map((collection) => (
            <div key={collection.id} className="collection-item">
                <img src={collection.image} alt={collection.name} />
                <h3>{collection.name}</h3>
                <p>{collection.price}</p>
            </div>
        ))}
    </div>
</section>
  )
}

export default FeaturedCollections