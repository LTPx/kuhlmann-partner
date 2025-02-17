interface ItemsProps {
  count: string;
  title: string;
  description: string;
}

function Items(props: ItemsProps) {
  const { count, title, description } = props;

  return (
    <div className="flex flex-col">
      <p className="font-mediumFont pb-[20px] lg:pb-[0px] text-[40px] leading-[45px] lg:text-[80px] lg:leading-[85px] pb-[20px]">
        {count}
      </p>
      <h4 className="text-[16px] leading-[22px] lg:text-[20px] leading-[28px] font-semiBoldFont">
        {title}
      </h4>
      <div
        className="lg:pr-[160px]"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
}

export default Items;
