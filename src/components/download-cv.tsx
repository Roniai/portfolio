import { Download } from "lucide-react";
import Link from "next/link";

const DownloadCV = () => {
  const cvName = "CV_Fehizoroniaina_Indrafonjanahary_VALITERA";
  const cvExtension = "pdf";

  return (
    <div className="rounded-md bg-purple-700 px-3 py-1 justify-center text-xl inline-block">
      <Link
        href={`/files/${cvName}.${cvExtension}`}
        download={`${cvName}.${cvExtension}`}
        className="flex gap-2"
      >
        <span className="text-sm font-medium text-white">CV</span>
        <Download size={16} className="text-white" />
      </Link>
    </div>
  );
};

export default DownloadCV;
