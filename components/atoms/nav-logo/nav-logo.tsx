import Image from "next/image";
import Logo from "@/lib/assets/images/LogoPreta.png";

export default function NavLogo() {
	return (
		<div className="flex justify-center mt-5">
			<Image src={Logo} alt="Logo" width={150} />
		</div>
	);
}
