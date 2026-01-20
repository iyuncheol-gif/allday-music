import Hero from "@/_components/hero";
import Benefits from "@/_components/benefits";
import InteriorPhotos from "@/_components/interior-photos";
import Facilities from "@/_components/facilities";
import Availability from "@/_components/availability";
import Rooms from "@/_components/rooms";
import Floorplan from "@/_components/floorplan";
import Guide from "@/_components/guide";
import Amenities from "@/_components/amenities";
import Location from "@/_components/location";
import FAQ from "@/_components/faq";
import CTA from "@/_components/cta";

export default function Page() {
  return (
    <>
      <Hero />
      <Benefits />
      <InteriorPhotos />
      <Facilities />
      <Availability />
      <Rooms />
      <Floorplan />
      <Guide />
      <Amenities />
      <Location />
      <FAQ />
      <CTA />
    </>
  );
}
