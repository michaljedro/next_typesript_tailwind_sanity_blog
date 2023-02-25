import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://www.canva.com/design?create&type=TAB7AVEOUWQ&template=EAE4zBP4rKI&category=tACZCvjI6mE&analyticsCorrelationId=a08beba9-41be-41ef-826a-69add2dc603e&schema=web-2"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
          <h1>The Right Choice</h1>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
