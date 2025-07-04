import ReactFlow, { Background, Controls, NodeMouseHandler } from 'reactflow';
import CustomNode from '../Components/CardArbre';
import UnionNode from '../Components/UnionNode';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { arbreNodes, arbreEdges } from '../../dataArbre';
import 'reactflow/dist/style.css';
import './Arbre.css';

interface NodeData {
    data : {
        heroId: string;
        id: string;
        name: string;
        image: string;
        imageProfil: string;
        description: string;
        descriptionCard: string;
    };
    id: string
}

function Arbre() {
    const navigate = useNavigate();
    const nodeTypes = useMemo(() => ({
        custom: CustomNode,
        union: UnionNode,
    }), []);

    const nodes = useMemo(
        () =>
          arbreNodes.map((node) => ({
            ...node,
            position: {
              x: node.position.x ?? 0,
              y: node.position.y ?? 0,
            },
          })),
        []
      );
    const edges = useMemo(() => arbreEdges, []);

    console.log('Nombre de nodes :', nodes.length);

    const onNodeClick: NodeMouseHandler = (_, node) => {
        if ((node as NodeData).data?.heroId && (node as NodeData).id !== 'Union') {
            navigate(`/profilHero/${(node as NodeData).data.heroId}`);
        }
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                proOptions={{ hideAttribution: true }}  // optionnel
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Arbre;
