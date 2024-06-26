"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Casino</h2>
        <p className="text-xl">
          Experience the thrill of our games while staying informed and safe.
        </p>
      </section>

      <section className="p-8 rounded-lg shadow-lg bg-gray-800">
      <h2 className="text-3xl font-bold mb-4">Featured Games</h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full" />
        </Carousel>
      </div>
    </section>

      <section className="p-8 rounded-lg shadow-lg bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Gambling Awareness</h2>
        <p>
          Gambling can be fun, but it's important to be aware of the risks.
          Here are some resources to help you stay informed and get help if
          needed.
        </p>
      </section>

      <section className="p-8 rounded-lg shadow-lg bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Get Help</h2>
        <p>
          If you or someone you know is struggling with gambling, there are
          resources available to help.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300"
            >
              National Gambling Helpline
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300"
            >
              Gamblers Anonymous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300"
            >
              Responsible Gambling Council
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
