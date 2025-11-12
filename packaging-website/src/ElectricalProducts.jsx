import React from "react";
import "./ElectricalProducts.css";

const electricalProducts = [
  {
    name: "Thyristors",
    description: `We supply quality and durable Thyristors in Harare Zimbabwe. A thyristor is a solid-state semiconductor device with four layers of alternating P- and N-type materials. It acts exclusively as a bistable switch, conducting when the gate receives a current trigger, and continuing to conduct until the voltage across the device is reversed biased, or until the voltage is removed.

There are two designs: a three-lead thyristor where a small current on the Gate controls a larger current between Anode and Cathode, and a two-lead thyristor where conduction starts once the voltage between Anode and Cathode exceeds the breakdown voltage.

Thyristors are highly useful for power control applications where current and voltage are high, such as motor controls, light dimmers, and power supply protections. Their robustness, simplicity, and affordability make them a popular choice in industrial and consumer electronics.`,
    image: "https://i.pinimg.com/736x/a0/83/47/a083477ab4f49791f0e7ffefad40ff6e.jpg",
    // Image: "https://i.pinimg.com/736x/d9/fd/e8/d9fde815299c0b85a4f0c9b0ced84b01.jpg",
  },
  {
    name: "Timers",
    description: `Our reliable electrical timers provide precise time control for a wide range of applications, from lighting automation to industrial machinery control. Designed to be durable and accurate, these timers allow you to set intervals for power on/off cycles, ensuring energy savings and operational efficiency.

Whether you need analog or digital timers, we have options that fit residential, commercial, and industrial needs. With easy installation and configurable settings, our timers enhance the automation of your electrical systems with minimal fuss.`,
    image: "https://i.pinimg.com/736x/39/83/78/398378f4e1ec36c5411b8b490d1b39bb.jpg",
  },
  {
    name: "MCB (Miniature Circuit Breaker)",
    description: `Protect your electrical circuits with our high-quality Miniature Circuit Breakers (MCBs). These devices automatically switch off electrical power when faults such as overload or short circuits occur, preventing damage to wiring and appliances.

Our MCBs comply with international safety standards, ensuring reliable performance and quick response times. They are compact, easy to install, and ideal for residential, commercial, and industrial electrical panels to keep your systems safe.`,
    image: "https://i.pinimg.com/736x/b8/7b/bc/b87bbc564c941dc5f366dbc968fa5ec5.jpg",
  },
  {
    name: "Overloads",
    description: `Heavy-duty overload relays designed to protect electric motors from overheating and damage caused by excess current. These devices monitor the current flowing through a motor and disconnect power if an overload condition is detected, preventing costly failures.

Our overloads are robust, adjustable, and compatible with a wide range of motor sizes, helping you maintain reliable operations and extend equipment lifespan in harsh industrial environments.`,
    image: "https://i.pinimg.com/736x/20/40/67/2040677dd4fdfa57a8ab42d00ab06860.jpg",
  },
  {
    name: "Conductors",
    description: `High-quality electrical conductors engineered to efficiently carry current with minimal resistance and heat generation. We offer copper and aluminum conductor options, both designed to meet strict performance and safety standards.

Whether you need wiring for residential buildings, commercial facilities, or heavy-duty industrial applications, our conductors provide consistent electrical performance, durability, and compliance with regulatory requirements.`,
    image: "https://i.pinimg.com/736x/ed/58/f4/ed58f4d274e2e3d37f651824d10bb926.jpg",
  },
  {
    name: "Cables",
    description: `Our range of electrical cables are built for safety, durability, and superior conductivity. Designed for various applications including power distribution, data transmission, and specialized industrial uses, these cables feature strong insulation and shielding to protect against environmental factors.

Available in multiple gauges and configurations, our cables ensure dependable and long-lasting electrical connections that meet both residential and commercial demands.`,
    image: "https://i.pinimg.com/736x/3f/3c/f8/3f3cf85fe1001fda184556bdd85a5f4d.jpg",
  },
  {
    name: "Geyser Element",
    description: `Energy-efficient geyser heating elements engineered to provide fast and reliable water heating for residential and commercial hot water systems. Crafted from corrosion-resistant materials, these elements ensure long service life even in hard water conditions.

Our geyser elements are compatible with most standard water heaters and are designed for easy installation and maintenance, helping you reduce energy consumption while maintaining consistent hot water supply.`,
    image: "https://i.pinimg.com/736x/52/41/0f/52410f5212c1d8073df1e0137ca97829.jpg",
  },
  {
    name: "Light Bulbs",
    description: `Illuminate your space with our wide selection of light bulbs, including LED, incandescent, and energy-saving options. Designed for longevity, energy efficiency, and vibrant illumination, these bulbs suit everything from home lighting to large-scale commercial projects.

We prioritize quality and safety, ensuring every bulb meets stringent industry standards for brightness, durability, and electrical performance.`,
    image: "https://i.pinimg.com/736x/b5/0c/11/b50c11be1ccc599d100608855a3ca0dd.jpg",
  },
  {
    name: "Sockets & Switches",
    description: `Our premium sockets and switches provide safe, reliable, and user-friendly electrical connections for any setting. Made from high-grade materials with secure contacts and modern designs, they offer both functionality and aesthetic appeal.

Suitable for residential, commercial, and industrial environments, these components support various configurations, including single, double, dimmer switches, and more, to fit your exact needs.`,
    image: "https://i.pinimg.com/736x/49/72/91/497291e9a12ba9864f323cac15873b29.jpg",
  },
  {
    name: "Fluorescent Lights",
    description: `Long-lasting and bright fluorescent lights designed to deliver efficient illumination for offices, warehouses, and industrial facilities. Featuring low power consumption and high lumen output, these lights provide cost-effective solutions for large-area lighting.

Our fluorescent tubes and fixtures are engineered for durability, easy installation, and minimal maintenance, making them a smart choice for energy-conscious projects.`,
    image: "https://i.pinimg.com/736x/67/a1/3e/67a13e6745ab80e753908f7bad391f79.jpg",
  },
  {
    name: "Fluorescent Light Fitters",
    description: `Robust and versatile fluorescent light fitters crafted to securely house fluorescent tubes while enabling easy maintenance and installation. Designed with durable materials and compatibility with various light sizes, our fitters ensure safe electrical connections and consistent light distribution.

Perfect for commercial and industrial lighting setups, these fitters help maintain clean and organized lighting systems.`,
    image: "https://i.pinimg.com/736x/b2/cd/64/b2cd6453368cfb4c411eea1121b96d16.jpg",
  },
];

export default function ElectricalProducts() {
  return (
    <section className="electrical-products-page">
      <h2>Electrical Products</h2>
      <div className="products-list">
        {electricalProducts.map((product, i) => (
          <div key={i} className="product-card-horizontal">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              {product.description.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}