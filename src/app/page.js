import FileExplorer from "@/components/FileExplorer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RepoNav from "@/components/RepoNav";
import RepoStats from "@/components/RepoStats";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-gray-900 text-sm">
        <Navbar />
        <RepoStats />
        <RepoNav />
        <div className="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
          <FileExplorer />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </main>
  );
}
