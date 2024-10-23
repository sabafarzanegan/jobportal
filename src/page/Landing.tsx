import MainAccordination from "@/components/main/MainAccordination";
import MainCarousel from "@/components/main/MainCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-[300px] gap-y-9">
        {/* heading */}
        <div className="flex flex-col justify-center items-center mt-6 gap-y-5">
          <h1 className="text-xl md:text-3xl lg:text-5xl gradient-title ">
            دنبال شغل رویایی خود بگردید و
            <span className="text-primary font-semibold"> استخدام</span> شوید
          </h1>
          <div className="tracking-wide">
            <span className="text-lg mt-2 gradient-title font-semibold">
              بین هزاران شغل جستجو کنید وشغل رویایی خود را پیدا کنید
            </span>
          </div>
        </div>
        {/* Button */}
        <div className="flex mt-5 justify-center items-center gap-x-4 flex-wrap">
          <Link to="/jobs">
            <Button>پیدا کردن شغل </Button>
          </Link>
          <Link to="/post-jobs">
            <Button variant="destructive">افزودن شغل</Button>
          </Link>
        </div>
      </div>
      {/* carousel */}
      <MainCarousel />
      {/* landing images */}
      <div>
        <img
          src="./images/landing.jpg"
          className="h-[600px] w-full py-10 rounded-xl overflow-hidden"
        />
      </div>
      {/* accordination */}
      <MainAccordination />
    </section>
  );
}

export default Landing;
