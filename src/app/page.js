import Image from "next/image";
import BannerSection from "./components/common/home-components/BannerSection";
import LatestProduct from "./components/common/home-components/LatestProduct";


export default function Home() {
  return (
   <>
<BannerSection />
 <LatestProduct />
    </>
  );
}
