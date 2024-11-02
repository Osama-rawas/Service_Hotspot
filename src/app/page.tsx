import LocationBtn from "@/components/LocationBtn";

export default function Home() {
  return (
    <div className="container fix-height flex justify-center items-center ">
      <div className=" text-center">
        <h1 className="font-bold text-3xl text-text_black leading-10">
          Welcome to Service Hotspot
        </h1>
        <p className="text-sm leading-6 my-3">
          Get the best services and be a participant in the best experience
        </p>
        <LocationBtn />
      </div>
    </div>
  );
}
