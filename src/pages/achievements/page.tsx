import achievements from "@/utils/achievements";
import Line from "@/components/Generic/Line/Line";
import Title from "@/components/Generic/Title/Title";

const Achievements: React.FC = () => {
  return (
    <div className="text-white flex justify-center w-full mt-[50px] pt-[100px]">
      <div className="w-[85%]">
        <Title>Personal Achievements</Title>
        <Line />
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-[20px] justify-between pt-[30px]">
          {achievements.map((value) => {
            const { id, title, resault_count } = value;
            return (
              <div
                key={id}
                className="flex flex-col items-center cursor-pointer w-full h-[100px] justify-center py-[25px] gap-[12px] rounded-md border-[1.3px] hover:shadow-sm hover:shadow-white"
              >
                <h6 className="font-semibold text-[25px] font-mont-font">
                  {resault_count}
                </h6>
                <p className="w-full font-medium text-center">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
