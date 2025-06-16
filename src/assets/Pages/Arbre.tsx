import ReactFlow, { Background, Controls } from 'reactflow';
import CustomNode from '../Components/CardArbre';
import UnionNode from '../Components/UnionNode';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { arbreNodes, arbreEdges } from '../../dataArbre';
import 'reactflow/dist/style.css';
import './Arbre.css';

function Arbre() {
    const navigate = useNavigate();
    const nodeTypes = useMemo(() => ({
        custom: CustomNode,
        union: UnionNode,
    }), []);

    const nodes = useMemo(() => arbreNodes, []);
    const edges = useMemo(() => arbreEdges, []);

    console.log('Nombre de nodes :', nodes.length);

    const onNodeClick = (_, node) => {
        if (node.data?.heroId && node.id !== 'Union') {
            navigate(`/profilHero/${node.data.heroId}`);
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
