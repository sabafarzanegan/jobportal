import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselItem: { id: number; path: string; name: string }[] = [
  { name: "digi", path: "./images/companies/digi.jpg", id: 1 },
  {
    name: "atlassian",
    path: "./images/companies/atlassian.svg",
    id: 2,
  },
  {
    name: "google",
    path: "./images/companies/google.webp",
    id: 3,
  },
  {
    name: "ibm",
    path: "./images/companies/ibm.svg",
    id: 4,
  },
  {
    name: "meta",
    path: "./images/companies/meta.svg",
    id: 5,
  },
  {
    name: "microsoft",
    path: "./images/companies/microsoft.webp",
    id: 6,
  },
  {
    name: "netflix",
    path: "./images/companies/netflix.png",
    id: 7,
  },
  {
    name: "uber",
    path: "./images/companies/uber.svg",
    id: 8,
  },
  {
    name: "snap",
    path: "./images/companies/snap.svg",
    id: 9,
  },
];
function MainCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-full flex items-center justify-between gap-x-8  py-10">
      <CarouselContent>
        {carouselItem.map((item) => (
          <CarouselItem key={item.id} className="basis-1/3 lg:basis-1/6 ">
            <div className="p-1">
              <img
                src={item.path}
                alt=""
                className="h-9 sm:h-14 object-contain"
              />
            </div>
          </CarouselItem>
        ))}
        {/* {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))} */}
      </CarouselContent>
    </Carousel>
  );
}

export default MainCarousel;
