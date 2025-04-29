import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDrag } from "react-dnd";
import { ItemType } from "../InformationForm";

export const DraggableBullet = ({
    index,
    bullet,
    moveBullet,
    handleRemoveBullet,
    handleChangeBullet,
  }: {
    index: number;
    bullet: string;
    moveBullet: (dragIndex: number, hoverIndex: number) => void;
    handleRemoveBullet: (index: number) => void;
    handleChangeBullet: (index: number, value: string) => void;
  }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemType,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={drag as any}
        className={`border border-gray-300 cursor-move flex mb-4 p-2 ${
          isDragging ? "opacity-50" : "opacity-100"
        }`}
      >
        <Input
          className="h-100 min-h-[40px] p-2"
          value={bullet}
          onChange={(e) => handleChangeBullet(index, e.target.value)}
          type="text"
          placeholder={`Bullet point #${index + 1}`}
        />
        <Button
          className="bg-[#ff0000] border border-solid cursor-pointer hover:bg-[#0068fa] p-2 ml-1 rounded text-white"
          variant="secondary"
          onClick={() => handleRemoveBullet(index)}
        >
          Remove
        </Button>
      </div>
    );
  };