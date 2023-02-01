import profil from "../../images/profile.png";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import moveTo from "../moveTo";

export default function ListPesan({ list }) {
  return (
    <div onClick={() => moveTo(`pesan/${list.id}`)} className=" flex gap-3 hover:bg-gray-100 transition-colors border-y border-gray-200">
      <div className="py-1 pl-6">
        <img src={profil} alt="" className="w-16 h-16 rounded-full object-cover object-top border border-gray-200" />
      </div>

      <div className="grow flex flex-col justify-center gap-2">
        <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">{list.nama}</h1>
        <p className="font-medium text-gray-700 overflow-hidden">{list.deskripsi}</p>
      </div>
      <div className="flex items-center mr-6">
        <IonIcon icon={trash} size="medium"></IonIcon>
      </div>
    </div>
  );
}
