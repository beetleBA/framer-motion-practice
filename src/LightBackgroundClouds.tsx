import cloudsImage from "./assets/clouds.png";
import preenchimentoImage from "./assets/Preenchimento generativo 1.png";

export const LightBackgroundClouds = () => {
  return (
    <div className="fixed inset-0 h-screen">
      <img
        src={cloudsImage}
        alt=""
        className="h-full w-full object-cover z-1"
      />
      <img
        src={preenchimentoImage}
        alt=""
        className="w-full object-cover z-2 absolute bottom-0"
      />
      <div className="z-3 absolute w-full bottom-0 h-75 bg-linear-to-t from-neutral-950/70" />
    </div>
  );
};
