import techData from "@/utils/tech";
import Card from "@/components/Generic/Card/Card";
import Line from "@/components/Generic/Line/Line";
import Title from "@/components/Generic/Title/Title";

const Technologies: React.FC = () => {
  return (
    <div className="text-white flex justify-center w-full mt-[50px] pt-[100px]">
      <div className="w-[85%]">
        <Title>Technologies</Title>
        <Line />
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-[20px] justify-between pt-[30px]">
          {techData.map((value) => {
            const { id, title, tech_icon } = value;
            return (
              <Card key={id} title={title} type="outlined" img={tech_icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
