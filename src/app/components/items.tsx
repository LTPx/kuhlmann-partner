interface ItemsProps {
  count: string;
  title: string;
  description: string;
}

function Items(props: ItemsProps) {
  const { count, title, description } = props;

  return (
    <div className="flex flex-col">
      <p className="font-medium pb-[20px] lg:pb-[0px] text-[40px] leading-[45px] lg:text-[80px] lg:leading-[85px] pb-[20px]">
        {count}
      </p>
      <p className="font-semiBold">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Items;
