import NavigationBar from "../NavigationBar";

export default function Header() {
    return (
        <>
        <div className="flex justify-center py-10 mx-8">
            <img src="../src/assets/logo/logo_dark.svg" className="w-[160px]">
            </img>
        </div>
        <NavigationBar />
        </>
    )
  }
  