import CountEffect from "@/components/countEffect";

const data = [
  { to: 657, from: 500, duration: 2, label: "Clients" },
  { to: 98, from: 90, duration: 3, label: "Accuracy" },
  { to: 600, from: 550, duration: 2, label: "Project Delivered" },
  { to: 10, from: 5, duration: 5, label: "Patent" },
];

export function StatisticsSection() {
  return (
    <div className="relative mt-10 min-h-[300px] px-16 mx-16">
      <div
        style={{
          background: 'url("/image/aiHuman.jpg")',
          backgroundSize: "cover",
          width: "100%",
          height: "250px",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "rgba(10,0,0,0.2)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="flex h-full justify-around items-center text-4xl font-bold text-white">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <CountEffect
                  from={item.from}
                  to={item.to}
                  duration={item.duration}
                />
                <p className="font-thin text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
