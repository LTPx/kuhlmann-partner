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
      <p className="font-semiBoldFont">{title}</p>
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
