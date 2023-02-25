import Image from "next/image";
function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image
        className="rounded-full object-contain"
        width={50}
        height={50}
        alt="logo"
        src="https://images.unsplash.com/photo-1673506073231-3d4896dd45c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80"
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
