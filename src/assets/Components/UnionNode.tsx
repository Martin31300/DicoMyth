import { Handle, Position } from 'reactflow';

const UnionNode = ({ data }) => (
    <div style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: '#888',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 12
    }}>
        +
        <Handle type="source" position={Position.Bottom} id="bottom" />
        <Handle type="source" position={Position.Right} id="right" />
        <Handle type="source" position={Position.Left} id="left" />

        <Handle type="target" position={Position.Top} id="top" />
        <Handle type="target" position={Position.Left} id="left" />
        <Handle type="target" position={Position.Right} id="right" />
    </div>
);

export default UnionNode;