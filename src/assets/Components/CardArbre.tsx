import "./CardArbre.css"
import { Handle, Position } from 'reactflow';

export interface heroCard {
    id: string,
    name: string,
    x: number,
    y: number,
    targets: [
        {
            target: string,
            sourceHandle: string,
            targetHandle: string
        }
    ],
    image: string,
    imageProfil: string,
    description: string,
    descriptionCard: string
}

interface custumNodeProps {
    data: heroCard
}

const CustomNode = ({ data }: custumNodeProps) => {
    return (
        <div className="DivCardArbre">
            <img src={data.image} alt={data.name} className="ImgCardArbre" />
            <h3 className="TitreCardArbre">{data.name}</h3>
            <p className="DescriptionArbre">{data.descriptionCard}</p>

            <Handle type="source" position={Position.Right} id="right" />
            <Handle type="target" position={Position.Left} id="left" />
            <Handle type="source" position={Position.Bottom} id="bottom" />
            <Handle type="target" position={Position.Top} id="top" />
            <Handle type="source" position={Position.Left} id="left" />
            <Handle type="target" position={Position.Right} id="right" />
        </div>
    );
};

export default CustomNode;